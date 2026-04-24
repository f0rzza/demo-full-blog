export function CategoriesList() {
  return (
    <section className="lg:col-span-8">
      <div className="flex flex-col gap-6">
        <div className="group bg-surface-container-low hover:bg-surface-container-lowest p-8 rounded-xl transition-all duration-400 ease-out border-l-4 border-transparent hover:border-primary">
          <div className="flex justify-between items-start mb-4">
            <div className="space-y-1">
              <h3 className="font-headline text-2xl group-hover:text-primary transition-colors">
                Architecture
              </h3>
              <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant px-2 py-1 bg-surface-container rounded-full">
                14 Stories
              </span>
            </div>
            <div className="flex gap-2">
              <button
                className="p-2 text-on-surface-variant hover:text-primary transition-colors"
                title="Edit"
              >
                <span className="material-symbols-outlined text-xl" data-icon="edit">
                  edit
                </span>
              </button>
              <button
                className="p-2 text-on-surface-variant hover:text-error transition-colors"
                title="Delete"
              >
                <span className="material-symbols-outlined text-xl" data-icon="delete">
                  delete
                </span>
              </button>
            </div>
          </div>
          <p className="font-body text-on-surface-variant leading-relaxed max-w-xl">
            Exploring the intersection of structural engineering and aesthetic philosophy in modern
            urban environments. Focus on brutalism and high-tech movements.
          </p>
        </div>
        <div className="group bg-surface-container-low hover:bg-surface-container-lowest p-8 rounded-xl transition-all duration-400 ease-out border-l-4 border-transparent hover:border-primary">
          <div className="flex justify-between items-start mb-4">
            <div className="space-y-1">
              <h3 className="font-headline text-2xl group-hover:text-primary transition-colors">
                Interior Design
              </h3>
              <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant px-2 py-1 bg-surface-container rounded-full">
                28 Stories
              </span>
            </div>
            <div className="flex gap-2">
              <button
                className="p-2 text-on-surface-variant hover:text-primary transition-colors"
                title="Edit"
              >
                <span className="material-symbols-outlined text-xl" data-icon="edit">
                  edit
                </span>
              </button>
              <button
                className="p-2 text-on-surface-variant hover:text-error transition-colors"
                title="Delete"
              >
                <span className="material-symbols-outlined text-xl" data-icon="delete">
                  delete
                </span>
              </button>
            </div>
          </div>
          <p className="font-body text-on-surface-variant leading-relaxed max-w-xl">
            Curated spatial experiences. Focusing on the dialogue between materiality, lighting, and
            human behavior within the private sphere.
          </p>
        </div>
        <div className="group bg-surface-container-low hover:bg-surface-container-lowest p-8 rounded-xl transition-all duration-400 ease-out border-l-4 border-transparent hover:border-primary">
          <div className="flex justify-between items-start mb-4">
            <div className="space-y-1">
              <h3 className="font-headline text-2xl group-hover:text-primary transition-colors">
                Art Theory
              </h3>
              <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant px-2 py-1 bg-surface-container rounded-full">
                9 Stories
              </span>
            </div>
            <div className="flex gap-2">
              <button
                className="p-2 text-on-surface-variant hover:text-primary transition-colors"
                title="Edit"
              >
                <span className="material-symbols-outlined text-xl" data-icon="edit">
                  edit
                </span>
              </button>
              <button
                className="p-2 text-on-surface-variant hover:text-error transition-colors"
                title="Delete"
              >
                <span className="material-symbols-outlined text-xl" data-icon="delete">
                  delete
                </span>
              </button>
            </div>
          </div>
          <p className="font-body text-on-surface-variant leading-relaxed max-w-xl">
            Critical analysis of contemporary visual culture. Essays on representation, the digital
            medium, and the evolution of the gallery space.
          </p>
        </div>
        <div className="group bg-surface-container-low hover:bg-surface-container-lowest p-8 rounded-xl transition-all duration-400 ease-out border-l-4 border-transparent hover:border-primary">
          <div className="flex justify-between items-start mb-4">
            <div className="space-y-1">
              <h3 className="font-headline text-2xl group-hover:text-primary transition-colors">
                Sustainability
              </h3>
              <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant px-2 py-1 bg-surface-container rounded-full">
                12 Stories
              </span>
            </div>
            <div className="flex gap-2">
              <button
                className="p-2 text-on-surface-variant hover:text-primary transition-colors"
                title="Edit"
              >
                <span className="material-symbols-outlined text-xl" data-icon="edit">
                  edit
                </span>
              </button>
              <button
                className="p-2 text-on-surface-variant hover:text-error transition-colors"
                title="Delete"
              >
                <span className="material-symbols-outlined text-xl" data-icon="delete">
                  delete
                </span>
              </button>
            </div>
          </div>
          <p className="font-body text-on-surface-variant leading-relaxed max-w-xl">
            The future of conscious living. Examining eco-centric materials, zero-waste
            manufacturing, and regenerative design systems.
          </p>
        </div>
      </div>
    </section>
  );
}
