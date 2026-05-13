import { AuthContext } from '@/context/AuthContext';
import { AccountMenu } from '@/features/auth/components/AccountMenu';
import { use } from 'react';
import { Link } from 'react-router-dom';

export function Header() {
  const { isAuth } = use(AuthContext);

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
          <div className="Ahidden Asm:flex items-center gap-4">
            {isAuth ? (
              <AccountMenu />
            ) : (
              <Link
                className="bg-primary text-on-primary px-6 py-2 rounded-xl text-xs font-sans uppercase tracking-widest hover:opacity-90 transition-opacity active:scale-95"
                to="/auth"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
