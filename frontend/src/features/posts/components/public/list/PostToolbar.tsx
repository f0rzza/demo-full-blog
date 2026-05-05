export function PostToolbar() {
  return (
    <section className="mb-12 bg-surface-container-low p-6 rounded-xl">
      <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
        {/* <!-- Search --> */}
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
        {/* <!-- Dropdowns --> */}
        <div className="flex flex-wrap gap-4 w-full lg:w-auto">
          <div className="flex flex-col gap-1.5 min-w-[180px]">
            <label className="font-manrope text-[10px] uppercase tracking-widest text-outline font-bold px-1">
              Category
            </label>
            <select className="bg-surface-container-lowest border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary/30 text-on-surface font-manrope text-sm appearance-none">
              <option>All Disciplines</option>
              <option>Architecture</option>
              <option>Interior Design</option>
              <option>Art Theory</option>
              <option>Sustainability</option>
            </select>
          </div>
          <div className="flex flex-col gap-1.5 min-w-[180px]">
            <label className="font-manrope text-[10px] uppercase tracking-widest text-outline font-bold px-1">
              Sort By
            </label>
            <select className="bg-surface-container-lowest border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary/30 text-on-surface font-manrope text-sm appearance-none">
              <option>Latest</option>
              <option>Oldest</option>
              <option>Most Read</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
}
