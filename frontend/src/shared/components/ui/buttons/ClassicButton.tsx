import { Link } from 'react-router-dom';

export function ClassicButton({ label, to }: { label: string; to: string }) {
  return (
    <Link
      to={to}
      className="bg-surface-container-lowest border border-outline-variant/20 px-10 py-4 rounded-xl text-xs font-sans uppercase tracking-[0.2em] hover:bg-primary hover:text-on-primary transition-all duration-300"
    >
      {label}
    </Link>
  );
}
