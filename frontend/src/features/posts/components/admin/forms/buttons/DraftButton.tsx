import type { CreatePostType } from '@/features/posts/posts.types';
import { useFormContext } from 'react-hook-form';

export function DraftButton() {
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = useFormContext<CreatePostType>();

  async function saveDraft(data: CreatePostType) {
    console.log('save post', data);
  }

  return (
    <button
      className={`w-full bg-transparent border border-outline-variant/30 text-on-surface py-4 rounded-xl font-label text-sm uppercase tracking-widest hover:bg-surface-container-lowest transition-colors flex items-center justify-center gap-3 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
      type="submit"
      onClick={handleSubmit(saveDraft)}
      disabled={isSubmitting}
    >
      <span className="material-symbols-outlined text-sm">save</span>
      Save Draft
    </button>
  );
}
