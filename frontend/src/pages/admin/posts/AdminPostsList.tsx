import { useLoaderData } from 'react-router-dom';
import type { AdminPostsListPageLoaderType } from './adminPostsListLoader';
import { PostList } from '@/features/posts/components/admin/list/PostList';
import { Pagination } from '@/shared';
import { ToggleButton } from '@mui/material';
import { Person, ViewList } from '@mui/icons-material';

export function AdminPostsList() {
  const { posts, currentPage, totalPages } = useLoaderData<AdminPostsListPageLoaderType>();

  const url = new URL(window.location.href);
  const display = url.searchParams.get('display') ?? '';
  const displayAll = display === 'all';

  const toggleDisplay = () => {
    if (displayAll) url.searchParams.delete('display');
    else url.searchParams.set('display', 'all');
    // Update current url.
    window.location.href = url.toString();
  };

  return (
    <div className="flex-1">
      <header className="mb-12 xl:flex justify-between items-end">
        <div>
          <h1 className="text-5xl font-headline font-medium tracking-tight mb-2">
            Journal Entries
          </h1>
          <p className="text-on-surface-variant font-body">
            Manage your editorial calendar and published works.
          </p>
        </div>

        <div className="flex mt-5 xl:mt-1">
          {/* Search  */}
          <div className="flex gap-4 items-center">
            <div className="relative">
              <span
                className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm"
                data-icon="search"
              >
                search
              </span>
              <input
                className="bg-surface-container-low border-none rounded-xl py-3 pl-10 pr-4 text-sm font-label focus:ring-1 focus:ring-primary/30 w-auto md:w-96 mr-5"
                placeholder="Filter posts..."
                type="text"
              />
            </div>
          </div>

          {/* Toggle Button : seel all posts or only mine */}
          <ToggleButton value="check" onChange={toggleDisplay}>
            {displayAll ? (
              <div>
                <Person />
                <span className="hidden md:inline-block ml-2">My Posts</span>
              </div>
            ) : (
              <div>
                <ViewList />
                <span className="hidden md:inline-block ml-2">View All</span>
              </div>
            )}
          </ToggleButton>
        </div>
      </header>

      {/* List */}
      <PostList posts={posts} />

      {/*  Pagination */}
      <Pagination current={currentPage} total={totalPages} />
    </div>
  );
}
