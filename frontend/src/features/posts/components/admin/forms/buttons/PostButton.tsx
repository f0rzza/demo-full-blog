import { createPost } from '@/features/posts/api/postsApi';
import type { CreatePostType } from '@/features/posts/posts.types';
import { useFormContext } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { buttonConfigs } from './button.config';

type ButtonConfig = keyof typeof buttonConfigs;

type Props = { variant: ButtonConfig };

export function PostButton({ variant }: Props) {
  const {
    handleSubmit,
    formState: { isSubmitting },
    setError,
  } = useFormContext<CreatePostType>();

  const navigate = useNavigate();

  // Get button configs from variant.
  const config = buttonConfigs[variant];

  async function savePost(data: CreatePostType) {
    const response = await createPost({ ...data, published: variant === 'publish' });

    if (!response) {
      setError('root.serverError', {
        type: 'server',
        message: 'An error occurred. The post was not published.',
      });
      return;
    }

    navigate(`/admin/posts/${response.id}/edit`);
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
