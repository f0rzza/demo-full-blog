export function CategoryEditor() {
  return (
    <section className="lg:col-span-4 sticky top-32">
      <div className="bg-surface-container-low p-8 rounded-xl">
        <h2 className="font-headline text-2xl mb-8">Add New Category</h2>
        <form className="space-y-8">
          <div>
            <label className="block font-label text-xs uppercase tracking-widest text-on-surface-variant mb-3">
              Category Name
            </label>
            <input
              className="w-full bg-surface-container-lowest border-none rounded-xl p-4 focus:ring-1 focus:ring-primary/30 font-body text-on-surface placeholder:text-on-surface-variant/40 transition-all duration-300"
              placeholder="e.g. Minimalism"
              type="text"
            />
          </div>
          <div>
            <label className="block font-label text-xs uppercase tracking-widest text-on-surface-variant mb-3">
              Description
            </label>
            <textarea
              className="w-full bg-surface-container-lowest border-none rounded-xl p-4 focus:ring-1 focus:ring-primary/30 font-body text-on-surface placeholder:text-on-surface-variant/40 transition-all duration-300"
              placeholder="Describe the editorial scope..."
              rows={4}
            ></textarea>
          </div>
          <button
            className="w-full bg-primary text-on-primary py-4 rounded-xl font-label text-xs uppercase tracking-[0.2em] font-bold hover:opacity-90 transition-opacity"
            type="submit"
          >
            Create Category
          </button>
        </form>
      </div>
    </section>
  );
}
