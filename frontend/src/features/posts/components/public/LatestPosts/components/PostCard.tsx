export function PostCard() {
  return (
    <article className="group bg-surface-container-lowest p-6 rounded-xl hover:shadow-lg transition-all duration-400">
      <div className="aspect-video mb-6 overflow-hidden rounded-lg">
        <img
          alt="Interior"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          data-alt="minimalist Scandinavian interior with a single designer lamp casting warm light on a wooden table and beige linen curtains"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBs6KypfXNos9UcqSozjH0IQ3BNzQyndtKjyhQqdvR0i_mZD2uwtD-X_kFWSHCHswfOWlEExlICw9BsIS_vWBrU4n-pgcNloeHCrh-lAfICfwIOeDrbzYk-eLbsetX38_TGgoRc6Rk-25DOQwxSWJq5kHbH5394rg4-RhQsmwnVaQ77qMqfmQ16X2olCunU4Eg_BpmQJgSG3zOSA_ABKhCAj6w-RiGDMaJcZsNr6Q5UOwfKX7NQzXPHWQ7YYHAAF_YqpKkTxTmFGhE4"
        />
      </div>
      <span className="text-[10px] font-bold tracking-widest uppercase text-on-surface-variant opacity-60 mb-3 block">
        Interior Design
      </span>
      <h3 className="text-2xl font-serif font-medium mb-4 group-hover:text-primary transition-colors leading-tight">
        The Return of the Sun-Drenched Atrium
      </h3>
      <p className="text-on-surface-variant text-sm font-body leading-relaxed mb-6 line-clamp-3">
        How natural light remains the most potent tool in the architect's arsenal for mental
        well-being and productivity.
      </p>
      <div className="flex items-center justify-between border-t border-outline-variant/10 pt-4">
        <span className="text-xs italic text-on-surface-variant">6 min read</span>
        <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">
          arrow_forward
        </span>
      </div>
    </article>
  );
}
