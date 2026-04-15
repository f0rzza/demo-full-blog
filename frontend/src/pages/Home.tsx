import { FeaturedPost } from '../components/ui/Posts/FeaturedPost';
import { LatestPosts } from '../components/ui/Posts/LatestPosts';

export function Home() {
  return (
    <>
      <FeaturedPost />
      <LatestPosts />
    </>
  );
}
