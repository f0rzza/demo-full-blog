import { FeaturedPost, LatestPosts } from '@/features/posts';
import type { HomePageLoaderType } from './homeLoader';
import { useLoaderData } from 'react-router-dom';

export function Home() {
  const { featuredPost, latestPosts } = useLoaderData<HomePageLoaderType>();

  return (
    <>
      <FeaturedPost featuredPost={featuredPost} />
      <LatestPosts latestPosts={latestPosts} />
    </>
  );
}
