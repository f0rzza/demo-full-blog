import { createPost } from '@/features/posts/api/postsApi';
import { useFormContext } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { buttonConfigs } from './button.config';
import type { PostPayload, PostBodyInput, PostBodyOutput } from '@shared/types';

type ButtonConfig = keyof typeof buttonConfigs;

type Props = { variant: ButtonConfig };

export function PostButton({ variant }: Props) {
  const {
    handleSubmit,
    formState: { isSubmitting },
    setError,
  } = useFormContext<PostBodyInput, any, PostBodyOutput>();

  const navigate = useNavigate();

  // Get button configs from variant.
  const config = buttonConfigs[variant];

  async function savePost(data: PostBodyOutput) {
    const response = await createPost({
      ...data,
      published: variant === 'publish',
    } as unknown as PostPayload);
    // Note: quickfix, A Refactor is required because there are duplicated post types. (post.types & zod.shemas)
    // TODO: infer types from schemas and remove useless types.

    if (!response) {
      setError('root.serverError', {
        type: 'server',
        message: 'An error occurred. The post was not published.',
      });
      return;
    }

    navigate(`/`); // tmp
    // navigate(`/admin/posts/${response.id}/edit`);
    // Note: uncomment when edit page will be done
  }

  return (
    <button
      className={`${config.classNames} disabled:opacity-50 disabled:cursor-not-allowed`}
      onClick={handleSubmit(savePost)}
      disabled={isSubmitting}
    >
      <span className="material-symbols-outlined text-sm" data-weight={config.fill ? 'fill' : ''}>
        {config.picto}
      </span>
      {config.label}
    </button>
  );
}
