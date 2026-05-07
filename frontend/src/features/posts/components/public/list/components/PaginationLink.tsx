import { Link } from 'react-router-dom';
import { paginationConfigs } from './pagination.config';

type Props = {
  page: number;
  variant?: keyof typeof paginationConfigs;
  current?: boolean;
};

export function PaginationLink({ page, variant = 'page', current = false }: Props) {
  const config = paginationConfigs[variant];
  // Add or override page number to the current URL (keep selected filters)
  const url = new URL(window.location.href);
  url.searchParams.set('page', page.toString());

  if (variant === 'next' || variant === 'prev') {
    return (
      <Link className={config.classNames} to={url.toString()}>
        {variant === 'next' && config.label}
        <span
          className={`material-symbols-outlined ml-2 text-sm group-hover:translate-x-1 transition-transform ${config.spanClassNames}`}
        >
          {config.icon}
        </span>
        {variant === 'prev' && config.label}
      </Link>
    );
  }

  return (
    <Link
      className={`${config.classNames} ${current ? 'bg-primary text-on-primary shadow-xl shadow-primary/10 transition-all scale-100 active:scale-95' : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container transition-colors'}`}
      to={url.toString()}
    >
      {page}
    </Link>
  );
}
