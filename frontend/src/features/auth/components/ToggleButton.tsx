export function ToggleButton({
  label,
  current,
  onClick,
}: {
  label: string;
  current: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className={`pb-4 text-sm font-label tracking-widest uppercase transition-all duration-300 ${current ? 'font-bold border-b-2 border-primary text-primary' : 'font-medium text-on-surface-variant/40 hover:text-on-surface'}`}
      onClick={onClick}
      disabled={current}
    >
      {label}
    </button>
  );
}
