import BetaTestForm from "@/components/team/beta_test";

export default function GetBetaAccessPage() {
    return (
        <section className="min-h-screen flex items-center bg-black font-sans dark:bg-black relative z-0">
            <div className="w-full mx-auto flex flex-col max-w-4xl items-center justify-center px-4 py-20">
                <h1 className="text-6xl text-white text-center font-bold mb-4 uppercase">
                    Beta Test Blend IQ
                </h1>
                <p className="text-lg text-white">
                    Request early access to BlendIQ.
                </p>
                <p className="mx-auto mt-16 mb-12 text-lg leading-relaxed text-center text-white">
                    Beta testers will be expected to use the application on a consistent basis and report any bugs 
                    or suggestions encountered during normal use. Testers should feel free to suggest anything they 
                    feel could improve the application to the development team. Testers approved for use should direct 
                    any inquiries to the development team at <a href="mailto:dev@quantumbeautygroup.com" className="underline">dev@quantumbeautygroup.com</a>.<br/><br/>
                    Approved testers are assigned a “Pro” membership for the purposes of testing all features during the 
                    beta stage. Testers are NOT guaranteed a permanent free membership once the testing phase has 
                    concluded. However, the development team may use their own discretion in gifting permanent free 
                    memberships to those testers who provide consistent, valuable feedback. 
                </p>
                
                <BetaTestForm />
            </div>
        </section>
    );
}