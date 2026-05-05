import type { PostType } from '@/features/posts/posts.types';
import { PostCard } from './PostCard';

export function PostList({ posts }: { posts: Array<PostType> }) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
      {posts.length > 0 ? (
        posts.map((post) => <PostCard key={post.id} post={post} />)
      ) : (
        <p>No posts</p>
      )}
    </section>
  );
}
