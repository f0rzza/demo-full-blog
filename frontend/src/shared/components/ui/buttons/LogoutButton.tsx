import { AuthContext } from '@/context/AuthContext';
import { use } from 'react';
import { useNavigate } from 'react-router-dom';

export function LogoutButton({ variant = 'simple' }: { variant?: 'simple' | 'dashboard' }) {
  const { logout } = use(AuthContext);
  const navigate = useNavigate();

  async function handleLogoutClick() {
    await logout();
    navigate('/');
  }

  if (variant === 'simple') {
    return (
      <button
        className="block w-full px-4 py-2 text-xs font-sans uppercase tracking-widest text-error hover:bg-error-container/10 transition-colors text-left"
        onClick={handleLogoutClick}
      >
        Sign Out
      </button>
    );
  }

  return (
    <button
      className="flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-container-low transition-all"
      onClick={handleLogoutClick}
    >
      <span className="material-symbols-outlined" data-icon="logout">
        logout
      </span>
      <span className="font-label text-sm">Sign Out</span>
    </button>
  );
}
