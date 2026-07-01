import type { PostResponse } from '@shared/types';
import { PostLine } from './PostLine';

export function PostList({ posts }: { posts: Array<PostResponse> }) {
  if (posts.length === 0) {
    return <p>No posts</p>;
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Header */}
      <div className="grid grid-cols-12 px-6 py-2 text-xs font-label uppercase tracking-widest text-on-surface-variant/60">
        <div className="col-span-6">Article Detail</div>
        <div className="col-span-2">Status</div>
        <div className="col-span-2">Date</div>
        <div className="col-span-2 text-right">Actions</div>
      </div>

      {/* Posts */}
      {posts.map((post) => (
        <PostLine key={post.id} post={post} />
      ))}
    </div>
  );
}
