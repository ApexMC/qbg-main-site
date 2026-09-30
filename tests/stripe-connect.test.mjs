import assert from "node:assert/strict";
import fs from "node:fs";
import { createRequire } from "node:module";
import { afterEach, beforeEach, mock, test } from "node:test";
import ts from "typescript";
import { NextRequest } from "next/server.js";

const load = createRequire(import.meta.url);
// Use the same SDK module instance as the transpiled CommonJS handlers.
const Stripe = load("stripe");

// Load the TypeScript handlers without adding a test framework or running Next.
const previousLoader = load.extensions[".ts"];
load.extensions[".ts"] = (module, filename) => {
  const { outputText } = ts.transpileModule(fs.readFileSync(filename, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, esModuleInterop: true },
    fileName: filename,
  });
  module._compile(outputText, filename);
};
const { GET: start } = load("../app/api/stripe/connect/route.ts");
const { GET: callback } = load("../app/api/stripe/connect/callback/route.ts");
const { createStripeConnectState, isValidStripeConnectState } = load("../lib/stripe-connect.ts");
if (previousLoader) load.extensions[".ts"] = previousLoader;
else delete load.extensions[".ts"];

const envNames = ["NODE_ENV", "STRIPE_SECRET_KEY", "CONSULTING_STRIPE_SECRET_KEY", "STRIPE_CONNECT_CLIENT_ID", "STRIPE_CONNECT_REDIRECT_URI"];
const originalEnv = Object.fromEntries(envNames.map((name) => [name, process.env[name]]));
const state = "a".repeat(64);
let exchange;
let info;
let errorLog;

beforeEach(() => {
  process.env.NODE_ENV = "test";
  process.env.STRIPE_SECRET_KEY = "sk_test_billing_placeholder";
  process.env.CONSULTING_STRIPE_SECRET_KEY = "sk_test_consulting_placeholder";
  process.env.STRIPE_CONNECT_CLIENT_ID = "ca_test_placeholder";
  process.env.STRIPE_CONNECT_REDIRECT_URI = "https://quantumbeautygroup.com/api/stripe/connect/callback";
  // Mock the SDK boundary: these tests never call Stripe or connect real accounts.
  exchange = mock.method(Stripe.resources.OAuth.prototype, "token", async function () {
    const outboundRequest = { headers: {} };
    await this._stripe._authenticator(outboundRequest);
    assert.equal(outboundRequest.headers.Authorization, "Bearer sk_test_consulting_placeholder");
    assert.equal(this._stripe.getApiField("maxNetworkRetries"), 0);
    assert.equal(this._stripe.getApiField("timeout"), 10_000);
    return { stripe_user_id: "acct_consulting_test", access_token: "never_expose_this" };
  });
  info = mock.method(console, "info", () => {});
  errorLog = mock.method(console, "error", () => {});
});

afterEach(() => {
  mock.restoreAll();
  for (const name of envNames) {
    if (originalEnv[name] === undefined) delete process.env[name];
    else process.env[name] = originalEnv[name];
  }
});

function request(query, cookie = state, name = "stripe_connect_state") {
  const headers = cookie === null ? {} : { Cookie: `${name}=${cookie}` };
  return new NextRequest(`https://quantumbeautygroup.com/api/stripe/connect/callback?${query}`, { headers });
}

function assertConsumed(response, name = "stripe_connect_state") {
  assert.equal(response.headers.get("Cache-Control"), "no-store");
  assert.equal(response.cookies.get(name).value, "");
  assert.match(response.headers.get("Set-Cookie"), /Max-Age=0/);
  assert.match(response.headers.get("Set-Cookie"), /HttpOnly/);
}

test("start creates unique state and a browser-bound Stripe authorization redirect", async () => {
  const response = await start();
  assert.equal(response.status, 303);
  const url = new URL(response.headers.get("Location"));
  assert.equal(url.origin, "https://connect.stripe.com");
  assert.equal(url.pathname, "/oauth/authorize");
  assert.equal(url.searchParams.get("response_type"), "code");
  assert.equal(url.searchParams.get("scope"), "read_write");
  assert.equal(url.searchParams.get("client_id"), process.env.STRIPE_CONNECT_CLIENT_ID);
  assert.equal(url.searchParams.get("redirect_uri"), process.env.STRIPE_CONNECT_REDIRECT_URI);
  const cookie = response.cookies.get("stripe_connect_state");
  assert.match(cookie.value, /^[a-f0-9]{64}$/);
  assert.equal(url.searchParams.get("state"), cookie.value);
  assert.notEqual(createStripeConnectState(), cookie.value);
  assert.match(response.headers.get("Set-Cookie"), /HttpOnly/);
  assert.match(response.headers.get("Set-Cookie"), /SameSite=lax/i);
  assert.match(response.headers.get("Set-Cookie"), /Max-Age=600/);
  assert.equal(response.headers.get("Cache-Control"), "no-store");
  assert.equal(exchange.mock.callCount(), 0);
});

test("production uses a Secure host-only state cookie", async () => {
  process.env.NODE_ENV = "production";
  const response = await start();
  const cookie = response.cookies.get("__Host-stripe_connect_state");
  assert.ok(cookie);
  const header = response.headers.get("Set-Cookie");
  assert.match(header, /Secure/);
  assert.match(header, /Path=\//);
  assert.doesNotMatch(header, /Domain=/i);
  const result = await callback(request(`code=ac_test&state=${cookie.value}`, cookie.value, cookie.name));
  assert.equal(result.status, 200);
  assertConsumed(result, cookie.name);
});

for (const name of ["STRIPE_CONNECT_CLIENT_ID", "STRIPE_CONNECT_REDIRECT_URI", "CONSULTING_STRIPE_SECRET_KEY"]) {
  test(`start requires ${name}`, async () => {
    delete process.env[name];
    const response = await start();
    assert.equal(response.status, 500);
    assert.equal(response.headers.get("Location"), null);
  });
}

for (const [label, query, cookie] of [
  ["missing state", "code=ac_test", state],
  ["missing cookie", `code=ac_test&state=${state}`, null],
  ["mismatched state", `code=ac_test&state=${"b".repeat(64)}`, state],
  ["malformed state", "code=ac_test&state=short", state],
  ["malformed cookie", `code=ac_test&state=${state}`, "short"],
  ["duplicate state", `code=ac_test&state=${state}&state=${state}`, state],
  ["missing code", `state=${state}`, state],
  ["empty code", `code=&state=${state}`, state],
  ["duplicate code", `code=ac_one&code=ac_two&state=${state}`, state],
  ["authorization denied", `error=access_denied&state=${state}`, state],
]) {
  test(`callback rejects ${label} before exchanging a token`, async () => {
    const response = await callback(request(query, cookie));
    assert.equal(response.status, 400);
    assert.equal(exchange.mock.callCount(), 0);
    assert.equal(info.mock.callCount(), 0);
    assertConsumed(response);
  });
}

test("valid callback exchanges the code, logs only the account ID, and returns success", async () => {
  const response = await callback(request(`code=ac_test&state=${state}`));
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { success: true, message: "Your Stripe account is now connected to QBG." });
  assert.equal(exchange.mock.callCount(), 1);
  assert.deepEqual(exchange.mock.calls[0].arguments, [{ grant_type: "authorization_code", code: "ac_test" }]);
  assert.deepEqual(info.mock.calls[0].arguments, ["Stripe Connect account connected:", "acct_consulting_test"]);
  assertConsumed(response);
  // A subsequent browser request with the cleared cookie fails before exchange.
  const replay = await callback(request(`code=ac_test&state=${state}`, response.cookies.get("stripe_connect_state").value));
  assert.equal(replay.status, 400);
  assert.equal(exchange.mock.callCount(), 1);
});

test("callback requires the consulting secret even when the billing secret is set", async () => {
  delete process.env.CONSULTING_STRIPE_SECRET_KEY;
  const response = await callback(request(`code=ac_test&state=${state}`));
  assert.equal(response.status, 500);
  assert.equal(exchange.mock.callCount(), 0);
  assertConsumed(response);
});

test("consulting OAuth works without a billing secret", async () => {
  delete process.env.STRIPE_SECRET_KEY;
  assert.equal((await start()).status, 303);
  const response = await callback(request(`code=ac_test&state=${state}`));
  assert.equal(response.status, 200);
  assert.equal(exchange.mock.callCount(), 1);
  assertConsumed(response);
});

test("an expired or reused code returns a controlled error", async () => {
  exchange.mock.mockImplementation(async () => { throw new Stripe.errors.StripeInvalidGrantError({ message: "private upstream detail" }); });
  const response = await callback(request(`code=ac_test&state=${state}`));
  assert.equal(response.status, 400);
  assert.doesNotMatch(JSON.stringify(await response.json()), /private upstream detail/);
  assertConsumed(response);
});

test("upstream failures do not expose sensitive error details", async () => {
  exchange.mock.mockImplementation(async () => { throw new Error("secret_key_and_code"); });
  const response = await callback(request(`code=ac_test&state=${state}`));
  assert.equal(response.status, 502);
  assert.doesNotMatch(JSON.stringify(await response.json()), /secret_key_and_code/);
  assert.deepEqual(errorLog.mock.calls[0].arguments, ["Stripe Connect OAuth token exchange failed."]);
  assertConsumed(response);
});

test("a token response without a connected account ID cannot report success", async () => {
  exchange.mock.mockImplementation(async () => ({ access_token: "never_expose_this" }));
  const response = await callback(request(`code=ac_test&state=${state}`));
  assert.equal(response.status, 502);
  assert.equal(info.mock.callCount(), 0);
  assertConsumed(response);
});

test("state comparison rejects missing values and variable-length input safely", () => {
  assert.equal(isValidStripeConnectState(null, undefined), false);
  assert.equal(isValidStripeConnectState(state, "a"), false);
  assert.equal(isValidStripeConnectState(state, state), true);
});
