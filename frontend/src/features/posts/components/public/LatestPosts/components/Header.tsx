type Props = { title?: string; chapo?: string };

export function Header({ title, chapo }: Props) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
      <div>
        <h2 className="text-4xl font-serif italic mb-4">{title ?? 'Latest Dispatches'}</h2>
        {chapo && (
          <p className="text-on-surface-variant font-body max-w-md">
            Curated thoughts on design, culture, and the subtle art of modern living.
          </p>
        )}
      </div>
      <div className="flex gap-4">
        <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors">
          <span className="material-symbols-outlined">west</span>
        </button>
        <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors">
          <span className="material-symbols-outlined">east</span>
        </button>
      </div>
    </div>
  );
}
