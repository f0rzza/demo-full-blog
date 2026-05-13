import { AuthContext } from '@/context/AuthContext';
import { use } from 'react';
import { useNavigate } from 'react-router-dom';

export function AccountMenu() {
  const { logout } = use(AuthContext);
  const navigate = useNavigate();

  async function handleLogoutClick() {
    await logout();
    navigate('/');
  }

  return (
    <div className="relative group">
      <button className="flex items-center gap-2 hover:opacity-80 transition-opacity">
        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
          <span className="material-symbols-outlined text-primary text-xl">account_circle</span>
        </div>
        <span className="material-symbols-outlined text-[#191c1d]/60 dark:text-stone-400 text-sm group-hover:rotate-180 transition-transform">
          expand_more
        </span>
      </button>
      <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-stone-900 rounded-xl shadow-xl border border-outline-variant/10 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
        <a
          className="block px-4 py-2 text-xs font-sans uppercase tracking-widest text-[#191c1d]/70 dark:text-stone-300 hover:bg-surface-container-low dark:hover:bg-stone-800 transition-colors"
          href="#"
        >
          My Account
        </a>
        <a
          className="block px-4 py-2 text-xs font-sans uppercase tracking-widest text-[#191c1d]/70 dark:text-stone-300 hover:bg-surface-container-low dark:hover:bg-stone-800 transition-colors"
          href="#"
        >
          My Stories
        </a>
        <div className="border-t border-outline-variant/10 my-2"></div>
        <a
          className="block px-4 py-2 text-xs font-sans uppercase tracking-widest text-error hover:bg-error-container/10 transition-colors"
          href="#"
          onClick={handleLogoutClick}
        >
          Sign Out
        </a>
      </div>
    </div>
  );
}
