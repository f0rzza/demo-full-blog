import { ClassicButton } from '@/shared';
import { Header } from './components/Header';
import { PostCard } from './components/PostCard';
import type { GetPostsApiResponse, PostType } from '@/features/posts/posts.types';

export function LatestPosts({ latestPosts }: { latestPosts: GetPostsApiResponse }) {
  // If there is are not latest posts, hide the section.
  if (!latestPosts) {
    return;
  }

  return (
    <section className="bg-surface-container-low py-24 px-8 md:px-12">
      <div className="max-w-[1600px] mx-auto">
        <Header chapo="Stay informed: the latest news you can't miss." />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestPosts.posts.map((post: PostType) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <ClassicButton label="View All Archive" to="/" />
        </div>
      </div>
    </section>
  );
}
