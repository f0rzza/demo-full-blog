export function PostContent() {
  return (
    <article className="max-w-[1600px] mx-auto px-8 md:px-12 mt-20 grid grid-cols-1 lg:grid-cols-12 gap-16">
      <aside className="hidden lg:block lg:col-span-2">
        <div className="sticky top-32 flex flex-col gap-12">
          <div className="flex flex-col gap-2">
            <span className="font-label text-[10px] uppercase tracking-widest text-outline">
              Share
            </span>
            <div className="flex flex-col gap-4 mt-2">
              <button className="w-10 h-10 rounded-full flex items-center justify-center border border-outline-variant hover:border-primary transition-colors">
                <span className="material-symbols-outlined text-sm">share</span>
              </button>
              <button className="w-10 h-10 rounded-full flex items-center justify-center border border-outline-variant hover:border-primary transition-colors">
                <span className="material-symbols-outlined text-sm">bookmark</span>
              </button>
            </div>
          </div>
        </div>
      </aside>

      <div className="lg:col-span-7 xl:col-span-6 space-y-12">
        <section className="prose prose-stone max-w-none">
          <p className="font-body text-xl md:text-2xl text-on-surface/80 leading-relaxed italic mb-16">
            In an era defined by constant noise, the architecture of stillness becomes a radical act
            of rebellion. We explore the minimalist retreat of the Valhalla Plateau.
          </p>
          <p className="editorial-dropcap font-body text-lg text-on-surface/90 leading-relaxed">
            To enter the residence is to surrender to a sequence of curated voids. The
            floor-to-ceiling windows do not merely provide a view; they dissolve the barrier between
            the dweller and the ancient pine forests. Every surface—from the tactile roughness of
            the poured concrete to the silken finish of the reclaimed oak—has been considered with
            an almost liturgical devotion to materiality.
          </p>
          <h2 className="font-headline text-3xl md:text-4xl font-bold pt-8 pb-4">
            The Geometry of Solitude
          </h2>
          <p className="font-body text-lg text-on-surface/90 leading-relaxed">
            Architecture is often described as frozen music, but here, it is frozen silence. The
            layout follows a non-linear path, forcing the occupant to slow down, to notice the way
            the afternoon light carves deep shadows across the atrium. There is no decorative fluff
            here; the structure is the decoration.
          </p>
          <blockquote className="my-16 border-l-4 border-primary pl-8 py-4">
            <p className="font-headline text-3xl italic text-primary leading-tight">
              "A house should not be a machine for living, but a vessel for being. We didn't build
              walls; we framed the light."
            </p>
            <cite className="font-label text-xs uppercase tracking-widest text-outline mt-4 block">
              — Lead Architect, Elias Vonn
            </cite>
          </blockquote>
          <p className="font-body text-lg text-on-surface/90 leading-relaxed">
            As we move further into the private quarters, the palette deepens. The transition from
            the airy communal spaces to the cocoon-like bedrooms is achieved through a subtle shift
            in floor elevation—a physical manifestation of psychological retreat.
          </p>
        </section>

        <div className="relative w-full py-12 -mx-4 md:-mx-8 lg:-mx-24">
          <div className="bg-surface-container-low p-4 lg:p-8 rounded-lg">
            <img
              alt="Interior Detail"
              className="w-full aspect-[16/9] object-cover rounded-md"
              data-alt="close-up of a minimalist kitchen interior with dark wooden cabinets and a single shaft of light hitting a ceramic bowl"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVcfQPDnNF0Hcbhk6nOcbQ4yFdVceR0g6S6MJctlHBbc6lSGEn0xv4XWeMg81YL29i5ukYsFZFaALftXCbCUE0sjKrYhB8iIosziFrFi8Zepsfj--95QE1sNKqHVKeadHnIjwam-X0b1ERt7BoKkDe_jHM2SKnTmQnCi5HEgMC-Uot_tTS8DyB8MT12SDlMGHshdq-qi7v9zuCihjk9PS4rjXgdSv9d0ueyvadaQD4KZVX12SuJe6Zj_yaAtFNU_gyi2kERjsTpT3y"
            />
            <p className="mt-4 font-label text-[10px] uppercase tracking-wider text-outline italic text-right">
              Figure 1.2: The interplay of shadow and oak in the central galley.
            </p>
          </div>
        </div>
        <section className="prose prose-stone max-w-none">
          <h3 className="font-headline text-2xl font-bold pt-4 pb-2">Crafting the Future</h3>
          <p className="font-body text-lg text-on-surface/90 leading-relaxed">
            Sustainability in this context is not a buzzword but a prerequisite. The geothermal
            systems are invisible, buried beneath the stone foundations, ensuring that the footprint
            on this fragile ecosystem remains as light as the structures themselves. It is a
            masterclass in how we might live if we chose to listen more than we spoke.
          </p>
        </section>

        <section className="mt-24 bg-surface-container-low p-8 md:p-12 rounded-xl flex flex-col md:flex-row gap-8 items-center">
          <img
            alt="Julian Thorne"
            className="w-24 h-24 rounded-full object-cover grayscale"
            data-alt="professional portrait of a man in his 40s with glasses and a refined expression, studio lighting, neutral background"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiQUmsSknnI9u2-IwiZQ4nzQ1ZUnZ8bZ6-spMbWqWbadqThlNiWn9NZx-6MUa5Oacsxp7sK_o5q0MTJNYUxXLIJBnatuc8ec0E4_-c96a3Q4BDTL4o9SNa5gwOKxhkhEycAe3M_K948XG2B7gNYiiDg2ZywlbzobZWdMkDxSAF3TvU_YvdGFvgSvIopoh16cX1zeHsWEl4lV5NMIc7Pt7wxOGzoBVTPh5dv6BoeeVlgp2xP9VM-TAgXbnI1ldTX4GyDg-xPstlKMi5"
          />
          <div className="text-center md:text-left">
            <span className="font-label text-[10px] uppercase tracking-widest text-primary font-bold">
              About the Author
            </span>
            <h4 className="font-headline text-2xl font-bold mt-1">Julian Thorne</h4>
            <p className="font-body text-sm text-on-surface/70 mt-2 leading-relaxed max-w-lg">
              Julian is an architectural critic and editor-at-large for The Curator. His work
              focuses on the intersection of minimalist design and ecological preservation. He lives
              between London and a cabin in the Cotswolds.
            </p>
            <div className="flex justify-center md:justify-start gap-4 mt-6">
              <a
                className="text-xs font-label uppercase tracking-widest hover:text-primary transition-colors"
                href="#"
              >
                Follow
              </a>
              <a
                className="text-xs font-label uppercase tracking-widest hover:text-primary transition-colors"
                href="#"
              >
                Portfolio
              </a>
            </div>
          </div>
        </section>
      </div>

      <aside className="hidden xl:block xl:col-span-3">
        <div className="sticky top-32 space-y-12">
          <div>
            <h5 className="font-label text-xs uppercase tracking-[0.2em] mb-6 pb-2 border-b border-outline-variant/30">
              In this series
            </h5>
            <ul className="space-y-6">
              <li className="group">
                <a className="block" href="#">
                  <span className="font-label text-[10px] text-outline">Part 01</span>
                  <h6 className="font-headline text-lg group-hover:text-primary transition-colors leading-tight mt-1">
                    The Dawn of Nordic Brutalism
                  </h6>
                </a>
              </li>
              <li className="group">
                <a className="block" href="#">
                  <span className="font-label text-[10px] text-primary">Part 02 — Current</span>
                  <h6 className="font-headline text-lg text-primary leading-tight mt-1">
                    The Silence of Sculptural Living
                  </h6>
                </a>
              </li>
              <li className="group">
                <a className="block" href="#">
                  <span className="font-label text-[10px] text-outline">Part 03</span>
                  <h6 className="font-headline text-lg group-hover:text-primary transition-colors leading-tight mt-1">
                    Materiality and Modern Ghosthood
                  </h6>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </article>
  );
}
