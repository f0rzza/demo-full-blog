import { Outlet } from 'react-router-dom';
import { DashboardSidebar } from '../components/sidebars/DashboardSidebar';

export function DashboardLayout() {
  return (
    <div className="flex flex-1 max-w-[1600px] w-full mx-auto px-8 md:px-12 py-12 gap-12">
      <DashboardSidebar />
      <Outlet />
    </div>
  );
}
