export default function NewUserValidationPage() {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center bg-zinc-50 dark:bg-black">
      <h1 className="text-2xl text-center uppercase font-bold mb-4 text-black dark:text-zinc-50">
        <span className="gradient-text" style={{ "--text-size": "4rem" } as React.CSSProperties}>
            YOU'RE IN!
        </span><br/>Welcome to Quantum Beauty Group!
      </h1>
      <p className="text-center text-zinc-600 dark:text-zinc-400 max-w-lg">
        Your account has been successfully created.<br/>This account is used to login to both BlendIQ and the website.
      </p>
    </div>
  );
}