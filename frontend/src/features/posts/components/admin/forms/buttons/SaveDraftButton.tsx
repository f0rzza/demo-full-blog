export function SaveDraftButton() {
  return (
    <button className="w-full bg-transparent border border-outline-variant/30 text-on-surface py-4 rounded-xl font-label text-sm uppercase tracking-widest hover:bg-surface-container-lowest transition-colors flex items-center justify-center gap-3">
      <span className="material-symbols-outlined text-sm">save</span>
      Save Draft
    </button>
  );
}
