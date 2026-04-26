import { ClassicButton } from '@/shared';
import { Header } from './components/Header';
import { PostCard } from './components/PostCard';

export function LatestPosts() {
  return (
    <section className="bg-surface-container-low py-24 px-8 md:px-12">
      <div className="max-w-[1600px] mx-auto">
        <Header />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PostCard />
          <PostCard />
          <PostCard />
        </div>

        <div className="mt-16 flex justify-center">
          <ClassicButton label="View All Archive" to="/" />
        </div>
      </div>
    </section>
  );
}
