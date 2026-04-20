export function PostEditorSidebar() {
  return (
    <aside className="w-full lg:w-80 flex flex-col gap-8">
      {/* <!-- Action Card --> */}
      <div className="bg-surface-container-low p-8 rounded-xl flex flex-col gap-6">
        <button className="w-full bg-primary text-on-primary py-4 rounded-xl font-label text-sm uppercase tracking-widest hover:opacity-90 transition-opacity flex items-center justify-center gap-3 shadow-lg">
          <span className="material-symbols-outlined text-sm" data-weight="fill">
            send
          </span>
          Publish Story
        </button>
        <button className="w-full bg-transparent border border-outline-variant/30 text-on-surface py-4 rounded-xl font-label text-sm uppercase tracking-widest hover:bg-surface-container-lowest transition-colors flex items-center justify-center gap-3">
          <span className="material-symbols-outlined text-sm">save</span>
          Save Draft
        </button>
        <div className="pt-4 border-t border-outline-variant/15 flex items-center justify-between text-outline">
          <span className="font-label text-[10px] uppercase tracking-[0.2em]">Visibility</span>
          <span className="font-label text-xs uppercase tracking-widest text-on-surface font-semibold">
            Public
          </span>
        </div>
      </div>
      {/* <!-- Settings Sections --> */}
      <div className="space-y-12 px-2">
        {/* <!-- Category --> */}
        <section>
          <h3 className="font-label text-xs uppercase tracking-[0.2em] text-outline mb-6">
            Category
          </h3>
          <div className="flex flex-col gap-3">
            <label className="flex items-center gap-3 cursor-pointer group">
              <input
                checked={undefined}
                className="w-4 h-4 text-primary bg-surface border-outline-variant focus:ring-0 focus:ring-offset-0 rounded-full"
                name="category"
                type="radio"
              />
              <span className="font-body text-sm text-on-surface/80 group-hover:text-primary transition-colors">
                Design &amp; Culture
              </span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer group">
              <input
                className="w-4 h-4 text-primary bg-surface border-outline-variant focus:ring-0 focus:ring-offset-0 rounded-full"
                name="category"
                type="radio"
              />
              <span className="font-body text-sm text-on-surface/80 group-hover:text-primary transition-colors">
                Architectural Essays
              </span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer group">
              <input
                className="w-4 h-4 text-primary bg-surface border-outline-variant focus:ring-0 focus:ring-offset-0 rounded-full"
                name="category"
                type="radio"
              />
              <span className="font-body text-sm text-on-surface/80 group-hover:text-primary transition-colors">
                Digital Curation
              </span>
            </label>
          </div>
        </section>
        {/* <!-- Tags --> */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-label text-xs uppercase tracking-[0.2em] text-outline">Tags</h3>
            <button className="text-primary text-[10px] uppercase tracking-widest font-bold">
              Add New
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1.5 bg-surface-container-low text-on-surface-variant rounded-full text-[11px] font-label uppercase tracking-widest flex items-center gap-2">
              Minimalism
              <span className="material-symbols-outlined text-[14px] cursor-pointer hover:text-error">
                close
              </span>
            </span>
            <span className="px-3 py-1.5 bg-surface-container-low text-on-surface-variant rounded-full text-[11px] font-label uppercase tracking-widest flex items-center gap-2">
              Editorial
              <span className="material-symbols-outlined text-[14px] cursor-pointer hover:text-error">
                close
              </span>
            </span>
            <span className="px-3 py-1.5 bg-surface-container-low text-on-surface-variant rounded-full text-[11px] font-label uppercase tracking-widest flex items-center gap-2">
              Typography
              <span className="material-symbols-outlined text-[14px] cursor-pointer hover:text-error">
                close
              </span>
            </span>
          </div>
        </section>
        {/* <!-- Excerpt --> */}
        <section>
          <h3 className="font-label text-xs uppercase tracking-[0.2em] text-outline mb-6">
            Social Excerpt
          </h3>
          <textarea
            className="w-full bg-surface-container-low border-none rounded-xl p-4 font-body text-sm focus:ring-1 focus:ring-primary/20 placeholder:text-outline/50"
            placeholder="Brief summary for feed previews..."
            rows={4}
          ></textarea>
        </section>
        {/* <!-- SEO/Advanced --> */}
        <section className="pt-8 border-t border-outline-variant/15">
          <button className="flex items-center justify-between w-full group">
            <span className="font-label text-xs uppercase tracking-[0.2em] text-outline group-hover:text-on-surface transition-colors">
              Advanced Settings
            </span>
            <span className="material-symbols-outlined text-outline group-hover:text-on-surface">
              keyboard_arrow_down
            </span>
          </button>
        </section>
      </div>
    </aside>
  );
}
