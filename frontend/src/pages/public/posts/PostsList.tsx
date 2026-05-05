import { PostList, PostPagination, PostToolbar } from '@/features/posts/components/public/list';
import { useLoaderData } from 'react-router-dom';
import type { PostsListPageLoaderType } from './postsListLoader';

export function PostsList() {
  const { categories, posts } = useLoaderData<PostsListPageLoaderType>();

  return (
    <div className="pt-32 pb-24 px-8 max-w-screen-2xl mx-auto">
      <header className="mb-16 md:mb-24">
        <div className="max-w-3xl">
          <h1 className="font-newsreader text-6xl md:text-7xl font-bold text-on-surface mb-6 tracking-tight">
            The Archive
          </h1>
          <p className="font-manrope text-lg md:text-xl text-on-surface-variant leading-relaxed opacity-80">
            Browse all our articles: news, tips, tech, etc.
          </p>
        </div>
      </header>

      <PostToolbar categories={categories} />
      <PostList posts={posts} />
      <PostPagination />
    </div>
  );
}
