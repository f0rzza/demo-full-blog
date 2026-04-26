import { Link } from 'react-router-dom';

export function LinkButton({ label, to }: { label: string; to: string }) {
  return (
    <Link
      to={to}
      className="group flex items-center gap-4 text-primary font-bold tracking-widest text-xs uppercase transition-all"
    >
      {label}
      <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">
        arrow_forward
      </span>
    </Link>
  );
}
