import { Outlet, useLocation } from 'react-router-dom';
import { DashboardSidebar } from '../components/sidebars/DashboardSidebar';
import { DashboardDrawer } from '@/features/posts/components/admin/forms/DashboardDrawer';

export function DashboardLayout() {
  const { pathname } = useLocation();
  // For admin pages where the desktop version of the drawer is not possible, we display the mobile version.
  const displayOnlyDrawer = ['/admin/posts/create', '/admin/categories'].includes(pathname);

  return (
    <div className="flex flex-1 max-w-[1600px] w-full mx-auto px-8 md:px-12 py-12 gap-12">
      {/* Desktop sidebar */}
      {!displayOnlyDrawer && (
        <aside className="hidden lg:block">
          <DashboardSidebar />
        </aside>
      )}

      {/* Mobile sidebar or for specific pages */}
      <div className={`block ${displayOnlyDrawer ? '' : 'lg:hidden'}`}>
        <DashboardDrawer>
          <DashboardSidebar />
        </DashboardDrawer>
      </div>

      <Outlet />
    </div>
  );
}
