import { Link } from 'react-router-dom';
import { dashboardConfigs } from './dashboard.config';

type VariantType = keyof typeof dashboardConfigs;
type Props = { variant: VariantType; current?: boolean };

export function DashboardLink({ variant, current = false }: Props) {
  const { label, to, icon } = dashboardConfigs[variant];

  return (
    <Link
      className={`${current ? 'bg-primary-container text-on-primary-container transition-transform active:scale-[0.98]' : 'text-on-surface-variant hover:bg-surface-container-low transition-all'} flex items-center gap-3 px-4 py-3 rounded-xl`}
      to={to}
    >
      <span className="material-symbols-outlined" data-icon={icon}>
        {icon}
      </span>
      <span className="font-label text-sm">{label}</span>
    </Link>
  );
}
