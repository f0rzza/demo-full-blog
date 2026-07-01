import { useLoaderData } from 'react-router-dom';
import type { AdminPostsListPageLoaderType } from './adminPostsListLoader';
import { PostList } from '@/features/posts/components/admin/list/PostList';

export function AdminPostsList() {
  const { posts } = useLoaderData<AdminPostsListPageLoaderType>();

  return (
    <div className="flex-1">
      <header className="mb-12 flex justify-between items-end">
        <div>
          <h1 className="text-5xl font-headline font-medium tracking-tight mb-2">
            Journal Entries
          </h1>
          <p className="text-on-surface-variant font-body">
            Manage your editorial calendar and published works.
          </p>
        </div>
        <div className="flex gap-4">
          <div className="relative">
            <span
              className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm"
              data-icon="search"
            >
              search
            </span>
            <input
              className="bg-surface-container-low border-none rounded-xl py-3 pl-10 pr-4 text-sm font-label focus:ring-1 focus:ring-primary/30 w-64"
              placeholder="Filter posts..."
              type="text"
            />
          </div>
        </div>
      </header>

      {/* List */}
      <PostList posts={posts} />

      {/*  Pagination : TODO */}
      <div className="mt-8 flex justify-center">
        <button className="px-8 py-3 bg-surface-container-low text-on-surface-variant font-label text-xs uppercase tracking-[0.2em] hover:bg-primary hover:text-on-primary transition-all rounded-xl">
          View Archive
        </button>
      </div>
    </div>
  );
}
