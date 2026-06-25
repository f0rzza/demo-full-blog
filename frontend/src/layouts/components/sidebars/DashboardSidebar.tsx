import { AuthContext } from '@/context/AuthContext';
import { DashboardLink } from '@/shared/components/ui/links/DashboardLink';
import { Role } from '@shared/constants';
import { use } from 'react';
import { useLocation } from 'react-router-dom';

export function DashboardSidebar() {
  const { user } = use(AuthContext);
  const { pathname } = useLocation();
  const displayManagement = user && (user.role === Role.ADMIN || user.role === Role.EDITOR);

  return (
    <aside className="w-64 hidden lg:flex flex-col gap-10">
      {displayManagement && (
        <div>
          <h3 className="text-xs font-label uppercase tracking-[0.2em] text-on-surface-variant mb-6">
            Management
          </h3>
          <nav className="flex flex-col gap-2">
            <DashboardLink
              variant="articles"
              current={pathname === '/admin' || pathname === '/admin/posts'}
            />
            <DashboardLink variant="createArticle" />
            <DashboardLink variant="categories" />
          </nav>
        </div>
      )}
      <div>
        <h3 className="text-xs font-label uppercase tracking-[0.2em] text-on-surface-variant mb-6">
          Personal
        </h3>
        <nav className="flex flex-col gap-2">
          <DashboardLink variant="account" current={pathname === '/account'} />
          <DashboardLink variant="favorites" current={pathname === '/favorites'} />
        </nav>
      </div>
    </aside>
  );
}
