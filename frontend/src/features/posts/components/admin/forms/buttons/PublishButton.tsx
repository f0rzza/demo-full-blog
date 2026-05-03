import type { CreatePostType } from '@/features/posts/posts.types';
import { useFormContext } from 'react-hook-form';

export function PublishButton() {
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = useFormContext<CreatePostType>();

  function publishPost(data: CreatePostType) {
    console.log('publish post', data);
  }

  return (
    <button
      className={`w-full bg-primary text-on-primary py-4 rounded-xl font-label text-sm uppercase tracking-widest hover:opacity-90 transition-opacity flex items-center justify-center gap-3 shadow-lg ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
      type="submit"
      onClick={handleSubmit(publishPost)}
      disabled={isSubmitting}
    >
      <span className="material-symbols-outlined text-sm" data-weight="fill">
        send
      </span>
      Publish
    </button>
  );
}
