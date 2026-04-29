import { FeaturedPost, LatestPosts } from '@/features/posts';

export function Home() {
  return (
    <>
      <FeaturedPost />
      <LatestPosts />
    </>
  );
}
