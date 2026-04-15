export function Header() {
  return (
    <header className="sticky top-0 w-full z-50 bg-white/70 dark:bg-stone-900/70 backdrop-blur-lg border-none transition-colors duration-300">
      <div className="flex justify-between items-center px-8 md:px-12 py-6 max-w-[1600px] mx-auto">
        <div className="flex items-center gap-12">
          <a
            className="text-2xl font-serif font-black text-[#191c1d] dark:text-stone-100 tracking-tight"
            href="#"
          >
            The Curator
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a
              className="text-[#002d1c] dark:text-emerald-400 border-b-2 border-[#002d1c]/20 pb-1 font-sans uppercase tracking-widest text-xs transition-colors duration-300"
              href="#"
            >
              Stories
            </a>
            <a
              className="text-[#191c1d]/60 dark:text-stone-400 font-sans uppercase tracking-widest text-xs hover:text-[#002d1c] dark:hover:text-emerald-300 transition-colors duration-300"
              href="#"
            >
              Essays
            </a>
            <a
              className="text-[#191c1d]/60 dark:text-stone-400 font-sans uppercase tracking-widest text-xs hover:text-[#002d1c] dark:hover:text-emerald-300 transition-colors duration-300"
              href="#"
            >
              Archive
            </a>
            <a
              className="text-[#191c1d]/60 dark:text-stone-400 font-sans uppercase tracking-widest text-xs hover:text-[#002d1c] dark:hover:text-emerald-300 transition-colors duration-300"
              href="#"
            >
              About
            </a>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <button className="material-symbols-outlined text-[#191c1d]/60 dark:text-stone-400 hover:text-[#002d1c] dark:hover:text-emerald-400 transition-colors">
            search
          </button>
          <div className="hidden sm:flex items-center gap-4">
            <button className="text-xs font-sans uppercase tracking-widest text-[#191c1d]/60 dark:text-stone-400 hover:text-[#002d1c] dark:hover:text-emerald-400 transition-colors active:scale-95">
              Sign In
            </button>
            <button className="bg-primary text-on-primary px-6 py-2 rounded-xl text-xs font-sans uppercase tracking-widest hover:opacity-90 transition-opacity active:scale-95">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </header>
  );
  //
  return (
    <header className="bg-white/70 backdrop-blur-lg sticky top-0 w-full z-50 bg-surface-container-low">
      <div className="flex justify-between items-center px-8 md:px-12 py-6 max-w-[1600px] mx-auto">
        <div className="flex items-center gap-8">
          <span className="text-2xl font-serif font-black text-[#191c1d]">The Curator</span>
          <nav className="hidden md:flex gap-6 items-center">
            <a
              className="text-[#191c1d]/60 border-b-2 border-[#002d1c]/20 font-sans uppercase tracking-widest text-xs hover:text-[#002d1c] transition-colors duration-300"
              href="#"
            >
              Stories
            </a>
            <a
              className="text-[#191c1d]/60 font-sans uppercase tracking-widest text-xs hover:text-[#002d1c] transition-colors duration-300"
              href="#"
            >
              Essays
            </a>
            <a
              className="text-[#191c1d]/60 font-sans uppercase tracking-widest text-xs hover:text-[#002d1c] transition-colors duration-300"
              href="#"
            >
              Archive
            </a>
            <a
              className="text-[#191c1d]/60 font-sans uppercase tracking-widest text-xs hover:text-[#002d1c] transition-colors duration-300"
              href="#"
            >
              About
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button className="px-6 py-2 rounded-xl text-sm font-label uppercase tracking-widest text-[#002d1c] hover:opacity-70 transition-opacity">
            Sign In
          </button>
          <button className="px-6 py-2 rounded-xl text-sm font-label uppercase tracking-widest bg-primary text-on-primary hover:opacity-90 transition-opacity">
            Subscribe (test)
          </button>
        </div>
      </div>
    </header>
  );
}
