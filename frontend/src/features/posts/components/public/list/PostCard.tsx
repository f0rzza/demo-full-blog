import type { PostType } from '@/features/posts/posts.types';
import { formatDate } from '@/shared/utils/dateFormat';
import { Link } from 'react-router-dom';

export function PostCard({ post }: { post: PostType }) {
  const { id, title, chapo, content, categories, createdAt } = post;
  // TODO: 12 min read, image

  return (
    <article className="group cursor-pointer">
      <Link to={`/posts/${id}`}>
        <div className="aspect-[4/3] mb-6 overflow-hidden rounded-md bg-surface-container">
          <img
            alt="Modern architecture"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            data-alt="minimalist concrete villa with large glass windows reflecting a sunset over a calm mediterranean landscape"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAloIGkvQ2ef6iHM5ouhO8GH7rQOLhn5Hk41Hygi_Lt3mbnNIs-PVF3ldHTTZvVRynt0T579LmYugJ_2_WYy7jpuS1cuvKnsRqMm741SfEeJKzBa4R4Qp-KEEkrAlH_TT2MGbL9Tm39eDj4aiuXzOLnJquo333vXrivqCGU6XAJ7Fz1cDjPes7ZpYQmKP6o9fn5S6krFhHTgrJcOz3NvJc4NGpYpVmlaPni9B0yQ9YIIS3m39mEJ6r9A5MS1sKAxHTlhTGJfl4PFb5g"
          />
        </div>

        {categories.length > 0 && (
          <div className="mb-3">
            {categories.map((category) => (
              <span
                key={category.id}
                className="font-manrope text-[10px] font-bold uppercase tracking-[0.15em] text-on-secondary-container bg-secondary-container px-2 py-0.5 rounded"
              >
                {category.name}
              </span>
            ))}
          </div>
        )}

        <h3 className="font-newsreader text-2xl md:text-3xl font-bold leading-tight text-on-surface group-hover:text-primary transition-colors">
          {title}
        </h3>

        <div className="font-newsreader font-bold mb-3">
          <time className="" dateTime={createdAt.toString()}>
            {formatDate(createdAt)}
          </time>
        </div>

        <p className="font-manrope text-on-surface-variant text-sm leading-relaxed mb-6 line-clamp-3">
          {chapo ?? content}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-outline-variant/15">
          <span className="font-manrope text-xs text-outline italic">12 min read</span>
          <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">
            arrow_forward
          </span>
        </div>
      </Link>
    </article>
  );
}
