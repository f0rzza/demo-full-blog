export function Footer() {
  return (
    <footer className="w-full mt-24 bg-stone-100 dark:bg-stone-950">
      <div className="max-w-7xl mx-auto px-8 py-16 flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="max-w-sm">
          <a
            className="font-serif text-2xl italic text-[#191c1d] dark:text-stone-200 mb-6 block"
            href="#"
          >
            The Modern Curator Journal.
          </a>
          <p className="text-stone-500 font-sans text-sm leading-relaxed mb-8">
            An editorial exploration of the intersection between architecture, art, and the modern
            experience. Crafted for the discerning mind.
          </p>
          <div className="flex gap-4">
            <a
              className="w-8 h-8 flex items-center justify-center border border-outline-variant/30 rounded-full hover:bg-primary hover:text-on-primary transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined text-sm">alternate_email</span>
            </a>
            <a
              className="w-8 h-8 flex items-center justify-center border border-outline-variant/30 rounded-full hover:bg-primary hover:text-on-primary transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined text-sm">share</span>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24">
          <div>
            <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-on-surface-variant mb-6">
              Journal
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  className="text-stone-500 dark:text-stone-400 hover:text-[#002d1c] font-sans text-sm transition-opacity duration-400"
                  href="#"
                >
                  Newsletter
                </a>
              </li>
              <li>
                <a
                  className="text-stone-500 dark:text-stone-400 hover:text-[#002d1c] font-sans text-sm transition-opacity duration-400"
                  href="#"
                >
                  Archive
                </a>
              </li>
              <li>
                <a
                  className="text-stone-500 dark:text-stone-400 hover:text-[#002d1c] font-sans text-sm transition-opacity duration-400"
                  href="#"
                >
                  Contributor
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-on-surface-variant mb-6">
              Connect
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  className="text-stone-500 dark:text-stone-400 hover:text-[#002d1c] font-sans text-sm transition-opacity duration-400"
                  href="#"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  className="text-stone-500 dark:text-stone-400 hover:text-[#002d1c] font-sans text-sm transition-opacity duration-400"
                  href="#"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  className="text-stone-500 dark:text-stone-400 hover:text-[#002d1c] font-sans text-sm transition-opacity duration-400"
                  href="#"
                >
                  Mastodon
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-on-surface-variant mb-6">
              Support
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  className="text-stone-500 dark:text-stone-400 hover:text-[#002d1c] font-sans text-sm transition-opacity duration-400"
                  href="#"
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  className="text-stone-500 dark:text-stone-400 hover:text-[#002d1c] font-sans text-sm transition-opacity duration-400"
                  href="#"
                >
                  Membership
                </a>
              </li>
              <li>
                <a
                  className="text-stone-500 dark:text-stone-400 hover:text-[#002d1c] font-sans text-sm transition-opacity duration-400"
                  href="#"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 py-10 border-t border-outline-variant/10 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-stone-400 font-sans text-[11px] uppercase tracking-widest">
          © 2024 The Modern Curator Journal. Crafted with editorial precision.
        </p>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-stone-400 font-sans text-[11px] uppercase tracking-widest">
            All systems functional
          </span>
        </div>
      </div>
    </footer>
  );
  //
  return (
    <footer className="bg-stone-100 w-full mt-24">
      <div className="max-w-7xl mx-auto px-8 py-16 flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="flex flex-col gap-6">
          <span className="font-serif text-xl italic text-[#191c1d]">
            The Modern Curator Journal.
          </span>
          <p className="font-sans manrope text-sm text-stone-500 max-w-xs">
            A platform dedicated to the pursuit of intellectual depth and visual precision in
            digital storytelling.
          </p>
        </div>
        <div className="flex flex-wrap gap-8">
          <div className="flex flex-col gap-4">
            <span className="text-xs font-label uppercase tracking-widest text-[#002d1c]/50">
              Journal
            </span>
            <a
              className="text-stone-500 hover:text-[#002d1c] transition-colors text-sm font-label"
              href="#"
            >
              Newsletter
            </a>
            <a
              className="text-stone-500 hover:text-[#002d1c] transition-colors text-sm font-label"
              href="#"
            >
              Journal
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-xs font-label uppercase tracking-widest text-[#002d1c]/50">
              Social
            </span>
            <a
              className="text-stone-500 hover:text-[#002d1c] transition-colors text-sm font-label"
              href="#"
            >
              Twitter
            </a>
            <a
              className="text-stone-500 hover:text-[#002d1c] transition-colors text-sm font-label"
              href="#"
            >
              Instagram
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-xs font-label uppercase tracking-widest text-[#002d1c]/50">
              Legal
            </span>
            <a
              className="text-stone-500 hover:text-[#002d1c] transition-colors text-sm font-label"
              href="#"
            >
              Privacy
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 py-6 border-t border-stone-200">
        <p className="font-sans manrope text-xs text-stone-400">
          © 2024 The Modern Curator Journal. Crafted with editorial precision.
        </p>
      </div>
    </footer>
  );
}
