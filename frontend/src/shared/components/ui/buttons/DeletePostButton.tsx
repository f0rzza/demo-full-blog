import { deletePost } from '@/features/posts/api/postsApi';
import { useNavigate } from 'react-router-dom';

export function DeletePostButton({ id }: { id: number }) {
  const navigate = useNavigate();

  async function handleLogoutClick() {
    await deletePost(id);
    navigate('/admin/posts');
  }

  return (
    <button
      className="p-2 text-on-surface-variant hover:text-error transition-colors"
      onClick={handleLogoutClick}
    >
      <span className="material-symbols-outlined" data-icon="delete">
        delete
      </span>
    </button>
  );
}
