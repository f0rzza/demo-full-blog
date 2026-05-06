import { Link } from 'react-router-dom';
import { paginationConfigs } from './pagination.config';

type Props = {
  page: number;
  variant?: keyof typeof paginationConfigs;
  current?: boolean;
};

export function PaginationLink({ page, variant = 'page', current = false }: Props) {
  const config = paginationConfigs[variant];

  if (variant === 'next' || variant === 'prev') {
    const numPage = variant === 'next' ? page - 1 : page + 1;

    return (
      <Link className={config.classNames} to={`?page=${numPage}`}>
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
      to={`?page=${page}`}
    >
      {page}
    </Link>
  );
}
