export function PublishButton() {
  return (
    <button className="w-full bg-primary text-on-primary py-4 rounded-xl font-label text-sm uppercase tracking-widest hover:opacity-90 transition-opacity flex items-center justify-center gap-3 shadow-lg">
      <span className="material-symbols-outlined text-sm" data-weight="fill">
        send
      </span>
      Publish
    </button>
  );
}
