export function LatestPosts() {
  return (
    <section className="bg-surface-container-low py-24 px-8 md:px-12">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-serif italic mb-4">Latest Dispatches</h2>
            <p className="text-on-surface-variant font-body max-w-md">
              Curated thoughts on design, culture, and the subtle art of modern living.
            </p>
          </div>
          <div className="flex gap-4">
            <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors">
              <span className="material-symbols-outlined">west</span>
            </button>
            <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors">
              <span className="material-symbols-outlined">east</span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

          <article className="group bg-surface-container-lowest p-6 rounded-xl hover:shadow-lg transition-all duration-400">
            <div className="aspect-video mb-6 overflow-hidden rounded-lg">
              <img
                alt="Abstract"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                data-alt="abstract composition of deep green and cream paint swirls with visible brushstroke texture and matte finish"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEOpVq8LJkZ09g4fIJZUNrNJvK8n8mVqOg25bSrIeM-j0xrqVA4EJT6Oly0Jmmh8Z-KsmW_o_hixpCZtGJza9EHAFR4c1qPhXqJwyb3Hs3QDZ06l-fDLPnOr8BPNAD2E8U1zXUenUxB6J3VroxiUXhinUds-ASJ8EwVF_Z5RnRZnesqUJSvPnYbe-8oHbzj3qbxhCHkOZd2GrvE1hyjU_rSLhVSWJuvipz0eAw8VdcX2YTrtVlCmKEZI-cWgHpHyJD_r54pVH3JDGO"
              />
            </div>
            <span className="text-[10px] font-bold tracking-widest uppercase text-on-surface-variant opacity-60 mb-3 block">
              Art Theory
            </span>
            <h3 className="text-2xl font-serif font-medium mb-4 group-hover:text-primary transition-colors leading-tight">
              Beyond Minimalism: The Case for Intentional Clutter
            </h3>
            <p className="text-on-surface-variant text-sm font-body leading-relaxed mb-6 line-clamp-3">
              A provocative look at why the "all-white" aesthetic is losing its grip on the creative
              class in favor of curated maximalism.
            </p>
            <div className="flex items-center justify-between border-t border-outline-variant/10 pt-4">
              <span className="text-xs italic text-on-surface-variant">8 min read</span>
              <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </div>
          </article>

          <article className="group bg-surface-container-lowest p-6 rounded-xl hover:shadow-lg transition-all duration-400">
            <div className="aspect-video mb-6 overflow-hidden rounded-lg">
              <img
                alt="Photography"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                data-alt="candid black and white street photography of an artist sketching in a Parisian cafe with soft morning light through large windows"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA734W64052aJwDV1RxNVDr9CRIPwC4u6tlAxoRkBv8JRBvP8LPErWSI9oIeEHzgqDZTWqZnPy-_yZ_lOmp1u3FD4MzP1vggPqJCeB-3TDyclHeSsdBQwFdSlyFVlfrQiZNl1QTizEYf4MHib5_62pJsP2N-LIVXtZopCSMMgmjFYmr97b8uTjvx04-n0QI946HaNdYJPPJakcsL-Ln9-UAtxoxRJtp3YiBQVAr8Vn-Ym-5LrrQAG_42hkXNFSJSnF2Xk2zRyczX8Tw"
              />
            </div>
            <span className="text-[10px] font-bold tracking-widest uppercase text-on-surface-variant opacity-60 mb-3 block">
              Cultural Craft
            </span>
            <h3 className="text-2xl font-serif font-medium mb-4 group-hover:text-primary transition-colors leading-tight">
              The Analog Revival: Why We Still Crave Tactile Tools
            </h3>
            <p className="text-on-surface-variant text-sm font-body leading-relaxed mb-6 line-clamp-3">
              From fountain pens to film cameras, exploring the sensory connection between creator
              and medium in a digital age.
            </p>
            <div className="flex items-center justify-between border-t border-outline-variant/10 pt-4">
              <span className="text-xs italic text-on-surface-variant">12 min read</span>
              <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </div>
          </article>
        </div>
        <div className="mt-16 flex justify-center">
          <button className="bg-surface-container-lowest border border-outline-variant/20 px-10 py-4 rounded-xl text-xs font-sans uppercase tracking-[0.2em] hover:bg-primary hover:text-on-primary transition-all duration-300">
            View All Archive
          </button>
        </div>
      </div>
    </section>
  );
}
