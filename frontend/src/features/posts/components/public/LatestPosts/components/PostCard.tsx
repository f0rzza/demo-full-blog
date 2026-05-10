import type { PostType } from '@/features/posts/posts.types';
import { sanitizeHTML } from '@/shared/utils/tools';

export function PostCard({ post }: { post: PostType }) {
  const { title, chapo, content, categories } = post;
  // TODO : image, minutes (?), display all categories

  return (
    <article className="group bg-surface-container-lowest p-6 rounded-xl hover:shadow-lg transition-all duration-400">
      <div className="aspect-video mb-6 overflow-hidden rounded-lg">
        <img
          alt="Interior"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          data-alt="minimalist Scandinavian interior with a single designer lamp casting warm light on a wooden table and beige linen curtains"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBs6KypfXNos9UcqSozjH0IQ3BNzQyndtKjyhQqdvR0i_mZD2uwtD-X_kFWSHCHswfOWlEExlICw9BsIS_vWBrU4n-pgcNloeHCrh-lAfICfwIOeDrbzYk-eLbsetX38_TGgoRc6Rk-25DOQwxSWJq5kHbH5394rg4-RhQsmwnVaQ77qMqfmQ16X2olCunU4Eg_BpmQJgSG3zOSA_ABKhCAj6w-RiGDMaJcZsNr6Q5UOwfKX7NQzXPHWQ7YYHAAF_YqpKkTxTmFGhE4"
        />
      </div>

      {categories.length > 0 && (
        <span className="text-[10px] font-bold tracking-widest uppercase text-on-surface-variant opacity-60 mb-3 block">
          {categories[0].name}
        </span>
      )}

      <h3 className="text-2xl font-serif font-medium mb-4 group-hover:text-primary transition-colors leading-tight">
        {title}
      </h3>

      {chapo && (
        <p
          className="text-on-surface-variant text-sm font-body leading-relaxed mb-6 line-clamp-3"
          dangerouslySetInnerHTML={{ __html: sanitizeHTML(chapo) }}
        />
      )}

      {!chapo && (
        <p
          className="text-on-surface-variant text-sm font-body leading-relaxed mb-6 line-clamp-3"
          dangerouslySetInnerHTML={{ __html: sanitizeHTML(content.slice(0, 250)) }}
        />
      )}

      <div className="flex items-center justify-between border-t border-outline-variant/10 pt-4">
        <span className="text-xs italic text-on-surface-variant">6 min read</span>
        <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">
          arrow_forward
        </span>
      </div>
    </article>
  );
}
