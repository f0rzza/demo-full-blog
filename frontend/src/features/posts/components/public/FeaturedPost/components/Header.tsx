import type { PostType } from '@/features/posts/posts.types';

export function Header({ post }: { post: PostType }) {
  const { chapo, content } = post;

  return (
    <>
      <span className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-container text-[10px] font-bold tracking-[0.2em] uppercase rounded-full mb-6">
        Featured Story
      </span>

      <h1 className="text-5xl md:text-7xl font-serif font-medium leading-[1.1] text-on-surface mb-8 tracking-tight">
        {post.title}
      </h1>

      {chapo && (
        <p className="text-lg md:text-xl text-on-surface-variant font-body leading-relaxed mb-10 max-w-xl">
          {chapo}
        </p>
      )}

      {!chapo && (
        <p className="text-lg md:text-xl text-on-surface-variant font-body leading-relaxed mb-10 max-w-xl">
          {content.slice(0, 250)}
        </p>
      )}
    </>
  );
}
