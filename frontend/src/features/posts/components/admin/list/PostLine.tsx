import { DeletePostButton } from '@/shared/components/ui/buttons/DeletePostButton';
import { formatDate } from '@/shared/utils/format';
import { sanitizeHTML } from '@/shared/utils/sanitize';
import type { PostResponse } from '@shared/types';
import { Link } from 'react-router-dom';

export function PostLine({ post }: { post: PostResponse }) {
  const { id, title, content, chapo, published, updatedAt } = post;
  // TODO: images

  return (
    <div className="grid grid-cols-12 items-center bg-surface-container-lowest p-6 rounded-xl group transition-all duration-400 hover:bg-surface-container-low hover:translate-y-[-2px]">
      {/* Desktop : image, title, chapo/content */}
      <div className="hidden md:flex col-span-6 items-center gap-6">
        <img
          className="w-16 h-16 object-cover rounded-md"
          data-alt="Close-up of a vintage typewriter on a dark wooden desk with soft morning sunlight filtering through a window"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIj3E5XELQMrlNAhrx8lFPyewsZaXqVaXdZDyIR0edi8kDBPnvan7vSg8vcTnqOvVrb2pB7ApO8pmdjzE-P9dUJlZJqvT6ktHgHBa7vGeR_saaEy17P5AIpj7s78wH_jXRu4QG8iYFj4UI9FVD0I-QfVfdSKcrqq6ZUMChfU2tLcsd38Y8En7Ry0LvcnaAWNnCEIG2YWlMRQBKP7Ed7bB-2IT1p9B0rPK73holV7642MmG14esTnhojr_oDcok37L6kRfivuQRq7wn"
        />
        <div className="hidden md:block">
          <h4 className="font-headline text-xl mb-1 group-hover:text-primary transition-colors">
            {title}
          </h4>
          <p
            className="text-sm text-on-surface-variant font-body line-clamp-2"
            dangerouslySetInnerHTML={{ __html: sanitizeHTML(chapo ?? content) }}
          />
        </div>
      </div>

      {/* Desktop : status, date */}
      <div className="hidden md:block col-span-2">
        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-[10px] font-label uppercase tracking-wider rounded-full">
          {published ? 'Published' : 'Draft'}
        </span>
      </div>
      <div className="hidden md:block col-span-2 text-sm font-label text-on-surface-variant">
        {formatDate(updatedAt, 'short')}
      </div>

      {/* Mobile : title, chapo/desc */}
      <div className="col-span-12 md:hidden mb-2">
        <h4 className="font-headline text-xl mb-1 group-hover:text-primary transition-colors line-clamp-1">
          {title}
        </h4>
        <p
          className="text-sm text-on-surface-variant font-body line-clamp-2"
          dangerouslySetInnerHTML={{ __html: sanitizeHTML(chapo ?? content) }}
        />
      </div>

      {/* Mobile : image */}
      <div className="col-span-4 md:hidden">
        <img
          className="w-16 h-16 object-cover rounded-md"
          data-alt="Close-up of a vintage typewriter on a dark wooden desk with soft morning sunlight filtering through a window"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIj3E5XELQMrlNAhrx8lFPyewsZaXqVaXdZDyIR0edi8kDBPnvan7vSg8vcTnqOvVrb2pB7ApO8pmdjzE-P9dUJlZJqvT6ktHgHBa7vGeR_saaEy17P5AIpj7s78wH_jXRu4QG8iYFj4UI9FVD0I-QfVfdSKcrqq6ZUMChfU2tLcsd38Y8En7Ry0LvcnaAWNnCEIG2YWlMRQBKP7Ed7bB-2IT1p9B0rPK73holV7642MmG14esTnhojr_oDcok37L6kRfivuQRq7wn"
        />
      </div>

      {/* Mobile : date, status */}
      <div className="col-span-4 md:hidden">
        <div className="text-sm font-label text-on-surface-variant">
          {formatDate(updatedAt, 'short')}
        </div>
        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-[10px] font-label uppercase tracking-wider rounded-full">
          {published ? 'Published' : 'Draft'}
        </span>
      </div>

      {/* Desktop & mobile : actions */}
      <div className="col-span-4 md:col-span-2 md:flex justify-end gap-3">
        {/* Go to the edit page */}
        <Link
          to={`/admin/posts/${id}/edit`}
          className="p-2 text-on-surface-variant hover:text-primary transition-colors"
        >
          <span className="material-symbols-outlined" data-icon="edit">
            edit
          </span>
        </Link>
        {/* Delete post */}
        <DeletePostButton id={id} />
      </div>
    </div>
  );
}
