const Footer = () => {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black">
      <div className="mx-auto max-w-6xl px-6 py-12 grid gap-10 md:grid-cols-3">
        
        {/* Brand */}
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            Quantum Beauty Group
          </h3>
          <p className="mt-3 text-sm text-zinc-700 dark:text-zinc-400">
            Evolving beauty education through innovation, technology, and elevated artistry.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-200">
            Explore
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-200">
            <li><a href="/about" className="hover:text-pink-500 transition">About</a></li>
            <li><a href="/blend-iq" className="hover:text-pink-500 transition">BlendIQ</a></li>
            <li><a href="/supply-house" className="hover:text-pink-500 transition">Supply House</a></li>
            <li><a href="/contact" className="hover:text-pink-500 transition">Contact</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-200">
            Legal
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-200">
            <li><a href="/privacy-policy" className="hover:text-pink-500 transition">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-pink-500 transition">Terms of Service</a></li>
          </ul>
        </div>

      </div>

      <div className="border-t border-zinc-200 dark:border-zinc-800 py-6 text-center text-sm text-zinc-700 dark:text-zinc-200">
        © {new Date().getFullYear()} Quantum Beauty Group. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;