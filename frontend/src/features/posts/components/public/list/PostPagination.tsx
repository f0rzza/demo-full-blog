export function PostPagination() {
  return (
    <nav className="mt-24 flex justify-center items-center gap-2">
      <a
        className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary text-on-primary font-manrope font-bold text-sm shadow-xl shadow-primary/10 transition-all scale-100 active:scale-95"
        href="#"
      >
        1
      </a>
      <a
        className="w-12 h-12 flex items-center justify-center rounded-xl bg-surface-container-low text-on-surface-variant font-manrope font-bold text-sm hover:bg-surface-container transition-colors"
        href="#"
      >
        2
      </a>
      <a
        className="w-12 h-12 flex items-center justify-center rounded-xl bg-surface-container-low text-on-surface-variant font-manrope font-bold text-sm hover:bg-surface-container transition-colors"
        href="#"
      >
        3
      </a>
      <span className="mx-2 text-outline">...</span>
      <a
        className="px-6 h-12 flex items-center justify-center rounded-xl bg-surface-container-low text-on-surface-variant font-manrope font-bold text-sm hover:bg-surface-container transition-colors group"
        href="#"
      >
        Next
        <span className="material-symbols-outlined ml-2 text-sm group-hover:translate-x-1 transition-transform">
          arrow_forward
        </span>
      </a>
    </nav>
  );
}
