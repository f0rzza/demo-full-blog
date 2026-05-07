export function Search() {
  return (
    <div className="relative w-full lg:max-w-md">
      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">
        search
      </span>
      <input
        className="w-full bg-surface-container-lowest border-none rounded-xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-primary/30 text-on-surface font-manrope"
        placeholder="Search the archive..."
        type="text"
      />
    </div>
  );
}
