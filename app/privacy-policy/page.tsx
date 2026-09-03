import { Card, CardContent} from "@/components/ui/card";

export default function PrivacyPolicy() {
  return (
    <main className="mx-auto px-8 py-12">
        <h1 className="text-5xl font-bold mb-4 text-black dark:text-zinc-50 text-center">
            Privacy Policy
        </h1>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-8 text-center">
            Last updated: March 2026
        </p>
        <Card className="bg-zinc-100 dark:bg-zinc-900">
            <CardContent className="flex items-center justify-center">
                <div className="mt-6 mb-6 flex flex-col max-w-full text-center justify-center">
                    <p>
                        Quantum Beauty Group (“we,” “us,” or “our”) respects your privacy and is
                        committed to protecting the personal information you share with us
                        through our website and any related websites, applications,
                        products, services, events, or communications that link to this
                        Privacy Policy.
                    </p>

                    <p>
                        This Privacy Policy explains what information we collect, how we use
                        it, when we share it, and the choices you may have regarding your
                        information.
                    </p>

                    <h2 className="mt-6 text-3xl font-bold text-center">
                        1. Information We Collect
                    </h2>

                    <p>
                        We may collect the following categories of information:
                    </p>

                    <h3 className="mt-12 text-2xl font-bold text-center">
                        a. Information you provide directly
                    </h3>
                    <ul className="mt-3">
                        <li>• Name</li>
                        <li>• Email address</li>
                        <li>• Phone number</li>
                        <li>• Billing address</li>
                        <li>• Business or school name</li>
                        <li>• Account login details</li>
                        <li>• Your clients information such as name and phone number through our app BlendIQ</li>
                        <li>• Messages you send through contact forms, bookings, or support requests</li>
                        <li>• Any other information you choose to provide to us</li>
                    </ul>

                    <h3 className="mt-12 text-2xl font-bold text-center">
                        b. Payment and transaction information
                    </h3>
                    <p className="mt-3 mb-2 text-center">
                        If you make a purchase, register for a class, subscribe, or pay an
                        invoice, payment details may be collected and processed by our
                        third-party payment processors. We generally do not store full
                        payment card numbers on our own servers.
                    </p>

                    <h3 className="mt-12 text-2xl font-bold text-center">
                        c. Account and authentication information
                    </h3>
                    <p className="mt-3 mb-2 text-center">
                        If you create an account, we may collect login credentials,
                        encrypted authentication tokens, user profile details, and account
                        preferences.
                    </p>

                    <h3 className="mt-12 text-2xl font-bold text-center">
                        d. Automatically collected information
                    </h3>
                    <ul className="mt-3">
                        <li>• IP address</li>
                        <li>• Browser type and device information</li>
                        <li>• Operating system</li>
                        <li>• Referring URLs</li>
                        <li>• Pages visited and actions taken on our site</li>
                        <li>• Date/time stamps</li>
                        <li>• Approximate location derived from IP address</li>
                        <li>• Cookies and similar technologies</li>
                    </ul>

                    <h3 className="mt-12 text-2xl font-bold text-center">
                        e. Media and content interaction information
                    </h3>
                    <p className="mt-3 mb-2 text-center">
                        If our site includes hosted video, streaming content, forms, or
                        embedded media, we may collect information about how you interact
                        with that content.
                    </p>

                    <h2 className="mt-6 text-3xl font-bold text-center">
                        2. Sources of Information
                    </h2>
                    <p className="mt-3 mb-2 text-center">
                        We may collect personal information:
                    </p>
                    <ul className="mt-3">
                        <li>• Directly from you</li>
                        <li>• Use of the BlendIQ app</li>
                        <li>• Automatically from your browser or device</li>
                        <li>• From payment, hosting, analytics, or communications providers</li>
                        <li>• From social sign-in or authentication providers, if enabled</li>
                        <li>• From booking, event registration, or customer support interactions</li>
                    </ul>

                    <h2 className="mt-6 text-3xl font-bold text-center">
                        3. How We Use Information
                    </h2>
                    <p className="mt-3 mb-2 text-center">
                        We may use personal information to:
                    </p>
                    <ul className="mb-2">
                        <li>• Provide, operate, and improve our website, services, and offerings</li>
                        <li>• Create and manage user accounts</li>
                        <li>• Process purchases, subscriptions, invoices, and payments</li>
                        <li>• Send confirmations, receipts, updates, and service messages</li>
                        <li>• Respond to inquiries and provide customer support</li>
                        <li>• Schedule bookings, classes, consultations, or events</li>
                        <li>• Monitor performance, usage, and site reliability</li>
                        <li>• Protect against fraud, abuse, unauthorized access, and security incidents</li>
                        <li>• Comply with legal obligations and enforce our terms</li>
                        <li>• Send marketing communications where permitted by law</li>
                    </ul>

                    <h2 className="mt-6 text-3xl font-bold text-center">
                        4. Cookies and Tracking Technologies
                    </h2>
                    <p className="mt-3 mb-2 text-center">
                        We may use cookies, pixels, local storage, analytics tools, and
                        similar technologies to remember preferences, keep users signed in,
                        understand site usage, improve functionality, and measure the
                        effectiveness of our communications or advertising.
                    </p>

                    <p className="mt-3 mb-2 text-center">
                        You can usually control cookies through your browser settings. If
                        you disable cookies, some parts of the site may not function
                        properly.
                    </p>

                    <h2 className="mt-6 text-3xl font-bold text-center">
                        5. When We Share Information
                    </h2>
                    <p className="mt-3 mb-2 text-center">
                        We may share personal information with:
                    </p>
                    <ul className="mt-3">
                        <li>• Service providers that help us run our website and business</li>
                        <li>• Payment processors</li>
                        <li>• Hosting and infrastructure providers</li>
                        <li>• Authentication and database providers</li>
                        <li>• Email delivery and customer communication providers</li>
                        <li>• Video hosting or streaming providers</li>
                        <li>• Analytics or advertising providers, if used</li>
                        <li>• Professional advisors, legal authorities, or regulators when required</li>
                        <li>• Successors in connection with a merger, acquisition, or sale of assets</li>
                    </ul>

                    <p className="mt-3 mb-2 text-center">
                        We do not sell personal information for money. However, depending on
                        the tools we use, some data sharing for analytics or advertising may
                        be considered “sharing” under certain privacy laws.
                    </p>

                    <h2 className="mt-6 text-3xl font-bold text-center">
                        6. Third-Party Services We May Use
                    </h2>
                    <p className="mt-3 mb-2 text-center">
                        We may use third-party service providers to operate portions of our
                        website and business. Depending on the features enabled on our site,
                        these providers may include:
                    </p>
                    <ul className="mt-3">
                        <li>• 
                        Payment processors for billing, invoices,
                        subscriptions, and fraud prevention.
                        </li>
                        <li>• 
                        SaaS services for database, authentication, and backend
                        functionality.
                        </li>
                        <li>• 
                        Hosting providers for CI/CD, site delivery, and
                        performance infrastructure.
                        </li>
                        <li>• 
                        SMTP email providers for transactional
                        emails and contact form delivery.
                        </li>
                        <li>• 
                        Media providers for video hosting
                        and playback.
                        </li>
                    </ul>

                    <p>
                        These third parties may process personal information on our behalf
                        or as independent controllers/providers under their own privacy
                        policies.
                    </p>

                    <h2 className="mt-6 text-3xl font-bold text-center">
                        7. Data Retention
                    </h2>
                    <p className="mt-3 mb-2 text-center">
                        We retain personal information for as long as reasonably necessary
                        to provide our services, maintain business records, comply with
                        legal obligations, resolve disputes, enforce agreements, and protect
                        our business.
                    </p>

                    <h2 className="mt-6 text-3xl font-bold text-center">
                        8. Data Security
                    </h2>
                    <p className="mt-3 mb-2 text-center">
                        We use reasonable administrative, technical, and organizational
                        safeguards designed to protect personal information. However, no
                        method of transmission over the internet or method of electronic
                        storage is completely secure, and we cannot guarantee absolute
                        security.
                    </p>

                    <h2 className="mt-6 text-3xl font-bold text-center">
                        9. Your Choices
                    </h2>
                    <ul className="mt-3">
                        <li>• You may opt out of marketing emails by using the unsubscribe link</li>
                        <li>• You may request updates or corrections to your information</li>
                        <li>• You may request deletion of your information, subject to legal exceptions</li>
                        <li>• You may control cookies through your browser settings</li>
                    </ul>

                    <h2 className="mt-6 text-3xl font-bold text-center">
                        10. U.S. State Privacy Rights
                    </h2>
                    <p className="mt-3 mb-2 text-center">
                        Depending on where you live, you may have rights regarding your
                        personal information, such as the right to know, access, correct,
                        delete, or opt out of certain uses of personal information.
                    </p>

                    <p>
                        If you are a California resident, you may have rights under the
                        California Consumer Privacy Act, as amended, including the right to
                        know what categories of personal information we collect, the sources
                        of that information, the purposes for collection, the categories of
                        third parties we disclose it to, the right to request deletion or
                        correction, the right to opt out of certain sale or sharing, and
                        the right not to be discriminated against for exercising your
                        privacy rights.
                    </p>

                    <p>
                        To exercise applicable privacy rights, contact us at{" "}
                        <a href={`mailto: support@quantumbeautygroup.com`}>support@quantumbeautygroup.com</a>.
                    </p>

                    <h2 className="mt-6 text-3xl font-bold text-center">
                        11. Do Not Track / Global Privacy Controls
                    </h2>
                    <p className="mt-3 mb-2 text-center">
                        Some browsers or extensions offer privacy preference signals such as
                        Global Privacy Control. Where required by applicable law, we will
                        process such signals in accordance with legal requirements.
                    </p>

                    <h2 className="mt-6 text-3xl font-bold text-center">
                        12. Children’s Privacy
                    </h2>
                    <p className="mt-3 mb-2 text-center">
                        Our website and app (BlendIQ) is not directed to children under 18, and we do not
                        knowingly collect personal information from children under 18. If you believe a child has
                        provided personal information to us, please contact us so we can
                        review and address the situation.
                    </p>

                    <h2 className="mt-6 text-3xl font-bold text-center">
                        13. Third-Party Links
                    </h2>
                    <p className="mt-3 mb-2 text-center">
                        Our website may contain links to third-party websites or services.
                        We are not responsible for the privacy practices of those third
                        parties, and we encourage you to review their privacy policies.
                    </p>

                    <h2 className="mt-6 text-3xl font-bold text-center">14. Changes to This Privacy Policy</h2>
                    <p className="mt-3 mb-2 text-center">
                        We may update this Privacy Policy from time to time. When we do, we
                        will revise the “Last updated” date above. Your continued use of the
                        website after an update means you acknowledge the updated policy.
                    </p>

                    <h2 className="mt-6 text-3xl font-bold text-center">15. Contact Us</h2>
                    <p className="mt-3 mb-2 text-center">
                        If you have questions or requests regarding this Privacy Policy, you
                        can contact us at:
                    </p>

                    <p>
                        <strong>Quantum Beauty Group</strong>
                        <br />
                        <a href={`mailto: support@quantumbeautygroup.com`}>support@quantumbeautygroup.com</a>
                    </p>
                </div>
            </CardContent>
        </Card>
    </main>
    );
}