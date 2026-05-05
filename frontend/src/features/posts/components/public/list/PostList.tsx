import { PostCard } from './PostCard';

export function PostList() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
      <PostCard />
      <PostCard />
      <PostCard />
    </section>
  );
}
