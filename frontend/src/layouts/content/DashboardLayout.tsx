import { Outlet } from 'react-router-dom';
import { DashboardSidebar } from '../components/sidebars/DashboardSidebar';
import { DashboardDrawer } from '@/features/posts/components/admin/forms/DashboardDrawer';

export function DashboardLayout() {
  return (
    <div className="flex flex-1 max-w-[1600px] w-full mx-auto px-8 md:px-12 py-12 gap-12">
      {/* Desktop sidebar */}
      <aside className="hidden lg:block">
        <DashboardSidebar />
      </aside>

      {/* Mobile sidebar */}
      <div className="block lg:hidden">
        <DashboardDrawer>
          <DashboardSidebar />
        </DashboardDrawer>
      </div>

      <Outlet />
    </div>
  );
}
