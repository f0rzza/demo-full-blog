import { Link } from 'react-router-dom';

type Props = {
  label: string;
  to: string;
  current?: boolean;
};

export function AccountMenuLink({ label, to, current }: Props) {
  return (
    <Link
      className={`${current ? 'text-[#d97c21] dark:text-emerald-400 Aunderline' : 'text-[#191c1d]/70 dark:text-stone-300'} block px-4 py-2 text-xs font-sans uppercase tracking-widest hover:bg-surface-container-low dark:hover:bg-stone-800 transition-colors`}
      to={to}
    >
      {label}
    </Link>
  );
}
