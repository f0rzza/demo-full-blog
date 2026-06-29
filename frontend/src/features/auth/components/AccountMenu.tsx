import { AuthContext } from '@/context/AuthContext';
import { use } from 'react';
import { useLocation } from 'react-router-dom';
import { AccountMenuLink } from './AccountMenuLink';
import { Role } from '@shared/constants';
import { LogoutButton } from '@/shared/components/ui/buttons/LogoutButton';

export function AccountMenu() {
  const { user } = use(AuthContext);
  const { pathname } = useLocation();
  const advMenu = user?.role === Role.ADMIN || user?.role === Role.EDITOR;

  return (
    <div className="relative group">
      {/* Account button */}
      <button className="flex items-center gap-2 hover:opacity-80 transition-opacity">
        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
          <span className="material-symbols-outlined text-primary text-xl">account_circle</span>
        </div>
        <span className="material-symbols-outlined text-[#191c1d]/60 dark:text-stone-400 text-sm group-hover:rotate-180 transition-transform">
          expand_more
        </span>
      </button>

      {/* Menu */}
      <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-stone-900 rounded-xl shadow-xl border border-outline-variant/10 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
        {/* Main links */}
        {advMenu && (
          <AccountMenuLink label="Dashboard" to="/admin" current={pathname.indexOf('admin') >= 0} />
        )}
        <AccountMenuLink label="Favorites" to="/favorites" current={pathname === '/favorites'} />
        <AccountMenuLink label="Account" to="/account" current={pathname === '/account'} />

        <div className="border-t border-outline-variant/30 my-2"></div>

        <LogoutButton />
      </div>
    </div>
  );
}
