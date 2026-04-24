export function AdminPostEditor() {
  return (
    <article className="flex-grow max-w-4xl">
      {/* <!-- Header section with back link --> */}
      <div className="mb-12 flex items-center justify-between">
        <a
          className="flex items-center gap-2 text-outline hover:text-primary transition-colors group"
          href="#"
        >
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          <span className="font-label text-xs uppercase tracking-widest">Back to Dashboard</span>
        </a>
        <span className="font-label text-xs uppercase tracking-widest text-outline">
          Last saved: 2 minutes ago
        </span>
      </div>
      {/* <!-- Title Field --> */}
      <div className="mb-12">
        <input
          className="w-full bg-transparent border-none p-0 text-5xl md:text-7xl font-headline italic tracking-tight placeholder:text-surface-container-high focus:ring-0 focus:outline-none text-on-surface"
          placeholder="Enter your story title..."
          type="text"
        />
      </div>
      {/* <!-- Featured Image Upload Area --> */}
      <div className="mb-12 group cursor-pointer">
        <div className="relative w-full aspect-[21/9] bg-surface-container-low rounded-md overflow-hidden flex flex-col items-center justify-center border-2 border-dashed border-outline-variant hover:border-primary/30 transition-all duration-400">
          <div className="absolute inset-0 bg-gradient-to-tr from-surface-container-high/20 to-transparent"></div>
          <div className="relative z-10 flex flex-col items-center gap-4 text-outline group-hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-4xl">image</span>
            <span className="font-label text-xs uppercase tracking-widest">
              Upload Featured Cover Image
            </span>
          </div>
          {/* <!-- This would be the image if uploaded --> */}
          <img
            alt="Editorial background"
            className="absolute inset-0 w-full h-full object-cover opacity-10 grayscale"
            data-alt="Soft focused artistic view of a typewriter with morning light casting elegant shadows on a wooden desk"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdzbanc8iG9P7RDzbygbN5ZS3xiAjEdBamWdFn-Td76yn3GsdDPf78Dsu8_PLT0dEuw2cxgDqyrmUZfR_RfVH7KB3pO3G3tJhvxla_Aw2x57tU7OfFUOBlQ_LSKg7ELlW-uGzP08m0fvJnubPY7ZWxfQOiW7g5aPCkKp4SmzbO5GFWmAtP8svO9wAPZdwq0Y9GuZZWVapGAPE_fMg_1AyBoQ1ctJUoMyvVUgqeSBT9lBzW7dcqJ5eGVUZ7zta0MuiCyzQUqaHWxTzn"
          />
        </div>
      </div>
      {/* <!-- Toolbar (Floating/Contextual style) --> */}
      <div className="sticky top-28 z-40 mb-8 py-2 px-4 bg-surface/80 backdrop-blur-xl border border-outline-variant/15 rounded-full inline-flex items-center gap-6 shadow-sm">
        <div className="flex items-center gap-1 border-r border-outline-variant/30 pr-4">
          <button className="p-2 hover:bg-surface-container-low rounded-lg transition-colors">
            <span className="material-symbols-outlined">format_bold</span>
          </button>
          <button className="p-2 hover:bg-surface-container-low rounded-lg transition-colors">
            <span className="material-symbols-outlined">format_italic</span>
          </button>
          <button className="p-2 hover:bg-surface-container-low rounded-lg transition-colors">
            <span className="material-symbols-outlined">format_underlined</span>
          </button>
        </div>
        <div className="flex items-center gap-1 border-r border-outline-variant/30 pr-4">
          <button className="p-2 hover:bg-surface-container-low rounded-lg transition-colors">
            <span className="material-symbols-outlined">format_h1</span>
          </button>
          <button className="p-2 hover:bg-surface-container-low rounded-lg transition-colors">
            <span className="material-symbols-outlined">format_h2</span>
          </button>
          <button className="p-2 hover:bg-surface-container-low rounded-lg transition-colors">
            <span className="material-symbols-outlined">format_quote</span>
          </button>
        </div>
        <div className="flex items-center gap-1">
          <button className="p-2 hover:bg-surface-container-low rounded-lg transition-colors">
            <span className="material-symbols-outlined">link</span>
          </button>
          <button className="p-2 hover:bg-surface-container-low rounded-lg transition-colors">
            <span className="material-symbols-outlined">add_photo_alternate</span>
          </button>
          <button className="p-2 hover:bg-surface-container-low rounded-lg transition-colors">
            <span className="material-symbols-outlined">more_horiz</span>
          </button>
        </div>
      </div>
      {/* <!-- Rich Text Area --> */}
      <div
        className="editor-canvas font-body text-lg leading-relaxed text-on-surface/90"
        contentEditable={true}
        data-placeholder="Start your narrative here... The world is waiting for your curation."
      >
        <p className="mb-6">
          The intersection of design and narrative has always been a space of profound discovery. In
          the modern digital landscape, the clarity of a story often competes with the noise of its
          container. As curators, our task is to strip away the superfluous and allow the essence of
          the work to breathe.
        </p>
        <p className="mb-6 italic text-outline">
          "Architecture is the learned game, correct and magnificent, of forms assembled in the
          light." — Le Corbusier
        </p>
        <p>
          This principle applies equally to the digital page as it does to the concrete slab. We
          find beauty in the asymmetrical, the intentional void, and the precise weight of a serif
          against the clean horizon of a sans-serif font.
        </p>
      </div>
    </article>
  );
}
