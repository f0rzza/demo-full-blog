export function PostCard() {
  return (
    <article className="group cursor-pointer">
      <div className="aspect-[4/3] mb-6 overflow-hidden rounded-md bg-surface-container">
        <img
          alt="Modern architecture"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          data-alt="minimalist concrete villa with large glass windows reflecting a sunset over a calm mediterranean landscape"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAloIGkvQ2ef6iHM5ouhO8GH7rQOLhn5Hk41Hygi_Lt3mbnNIs-PVF3ldHTTZvVRynt0T579LmYugJ_2_WYy7jpuS1cuvKnsRqMm741SfEeJKzBa4R4Qp-KEEkrAlH_TT2MGbL9Tm39eDj4aiuXzOLnJquo333vXrivqCGU6XAJ7Fz1cDjPes7ZpYQmKP6o9fn5S6krFhHTgrJcOz3NvJc4NGpYpVmlaPni9B0yQ9YIIS3m39mEJ6r9A5MS1sKAxHTlhTGJfl4PFb5g"
        />
      </div>
      <div className="mb-3">
        <span className="font-manrope text-[10px] font-bold uppercase tracking-[0.15em] text-on-secondary-container bg-secondary-container px-2 py-0.5 rounded">
          Architecture
        </span>
      </div>
      <h3 className="font-newsreader text-2xl md:text-3xl font-bold mb-3 leading-tight text-on-surface group-hover:text-primary transition-colors">
        The Brutalist Revival in Contemporary Urbanism
      </h3>
      <p className="font-manrope text-on-surface-variant text-sm leading-relaxed mb-6 line-clamp-3">
        Exploring how raw concrete and monumental geometry are making a surprising comeback in the
        residential developments of Northern Europe.
      </p>
      <div className="flex items-center justify-between pt-4 border-t border-outline-variant/15">
        <span className="font-manrope text-xs text-outline italic">12 min read</span>
        <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">
          arrow_forward
        </span>
      </div>
    </article>
  );
}
