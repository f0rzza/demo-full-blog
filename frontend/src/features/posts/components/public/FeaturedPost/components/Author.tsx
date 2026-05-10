import type { PostType } from '@/features/posts/posts.types';
import { formatDate } from '@/shared/utils/format';

export function Author({ post }: { post: PostType }) {
  const {
    author: { username },
    createdAt,
  } = post;
  // TODO : author's avatar

  return (
    <div className="flex items-center gap-6 mb-12">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center overflow-hidden">
          <span className="material-symbols-outlined text-surface-on-container-high text-xl">
            account_circle
          </span>
        </div>
        <span className="text-sm font-medium">{username}</span>
      </div>
      <span className="w-1 h-1 bg-outline-variant rounded-full"></span>
      <span className="text-sm text-on-surface-variant font-body italic">
        {formatDate(createdAt)}
      </span>
    </div>
  );
}
