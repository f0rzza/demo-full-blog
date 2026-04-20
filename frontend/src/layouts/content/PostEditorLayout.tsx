import { Outlet } from 'react-router-dom';
import { PostEditorSidebar } from '../components/sidebars/PostEditorSidebar';

export function PostEditorLayout() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-12 flex flex-col lg:flex-row gap-16">
      <Outlet />
      <PostEditorSidebar />
    </div>
  );
}
