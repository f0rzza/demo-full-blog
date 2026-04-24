export function AdminPostsList() {
  return (
    <div className="flex-1">
      <header className="mb-12 flex justify-between items-end">
        <div>
          <h1 className="text-5xl font-headline font-medium tracking-tight mb-2">
            Journal Entries
          </h1>
          <p className="text-on-surface-variant font-body">
            Manage your editorial calendar and published works.
          </p>
        </div>
        <div className="flex gap-4">
          <div className="relative">
            <span
              className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm"
              data-icon="search"
            >
              search
            </span>
            <input
              className="bg-surface-container-low border-none rounded-xl py-3 pl-10 pr-4 text-sm font-label focus:ring-1 focus:ring-primary/30 w-64"
              placeholder="Filter posts..."
              type="text"
            />
          </div>
        </div>
      </header>
      {/* <!-- Table-less Asymmetric Grid for Posts --> */}
      <div className="flex flex-col gap-4">
        {/* <!-- Header row mimics table but follows editorial spacing --> */}
        <div className="grid grid-cols-12 px-6 py-2 text-xs font-label uppercase tracking-widest text-on-surface-variant/60">
          <div className="col-span-6">Article Detail</div>
          <div className="col-span-2">Status</div>
          <div className="col-span-2">Date</div>
          <div className="col-span-2 text-right">Actions</div>
        </div>
        {/* <!-- Post Item 1 --> */}
        <div className="grid grid-cols-12 items-center bg-surface-container-lowest p-6 rounded-xl group transition-all duration-400 hover:bg-surface-container-low hover:translate-y-[-2px]">
          <div className="col-span-6 flex items-center gap-6">
            <img
              className="w-16 h-16 object-cover rounded-md"
              data-alt="Close-up of a vintage typewriter on a dark wooden desk with soft morning sunlight filtering through a window"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIj3E5XELQMrlNAhrx8lFPyewsZaXqVaXdZDyIR0edi8kDBPnvan7vSg8vcTnqOvVrb2pB7ApO8pmdjzE-P9dUJlZJqvT6ktHgHBa7vGeR_saaEy17P5AIpj7s78wH_jXRu4QG8iYFj4UI9FVD0I-QfVfdSKcrqq6ZUMChfU2tLcsd38Y8En7Ry0LvcnaAWNnCEIG2YWlMRQBKP7Ed7bB-2IT1p9B0rPK73holV7642MmG14esTnhojr_oDcok37L6kRfivuQRq7wn"
            />
            <div>
              <h4 className="font-headline text-xl mb-1 group-hover:text-primary transition-colors">
                The Alchemy of Stillness
              </h4>
              <p className="text-sm text-on-surface-variant font-body line-clamp-1">
                Exploring the intersection of silence and creative production in the digital age.
              </p>
            </div>
          </div>
          <div className="col-span-2">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-[10px] font-label uppercase tracking-wider rounded-full">
              Published
            </span>
          </div>
          <div className="col-span-2 text-sm font-label text-on-surface-variant">Oct 24, 2023</div>
          <div className="col-span-2 flex justify-end gap-3">
            <button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined" data-icon="edit">
                edit
              </span>
            </button>
            <button className="p-2 text-on-surface-variant hover:text-error transition-colors">
              <span className="material-symbols-outlined" data-icon="delete">
                delete
              </span>
            </button>
          </div>
        </div>
        {/* <!-- Post Item 2 --> */}
        <div className="grid grid-cols-12 items-center bg-surface-container-lowest p-6 rounded-xl group transition-all duration-400 hover:bg-surface-container-low hover:translate-y-[-2px]">
          <div className="col-span-6 flex items-center gap-6">
            <img
              className="w-16 h-16 object-cover rounded-md"
              data-alt="Minimalist desk setup with a single open notebook and a high-quality fountain pen on a textured paper surface"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBs1lk1EnIQ1-F7SzOm9Lo6xLS9Nqe9yb4vjL0opCElktMd-LSEL59OAYDFqKvGIRG8N9XWfCEOtOuwzc2CsI80WYaTQacEfsunz9crLiVx7pukE0pCCBX2nLvqJThrcc781euVSgkUcEnShEeql9UY-zQnLtP3fBz-eEw8Q7gC2znYd3GIq8z3fSu7Rrymosl7EVyRKJu0CUg7d8on4uImocJ5YIj0mZna4onX5C6M5l9n9mDdcQ3yh1LeWMmkKKDdeuaxpupneuCm"
            />
            <div>
              <h4 className="font-headline text-xl mb-1 group-hover:text-primary transition-colors">
                Defining the Minimalist Narrative
              </h4>
              <p className="text-sm text-on-surface-variant font-body line-clamp-1">
                How brevity can amplify the impact of long-form journalism.
              </p>
            </div>
          </div>
          <div className="col-span-2">
            <span className="inline-block px-3 py-1 bg-surface-container-highest text-on-surface-variant text-[10px] font-label uppercase tracking-wider rounded-full">
              Draft
            </span>
          </div>
          <div className="col-span-2 text-sm font-label text-on-surface-variant">Nov 12, 2023</div>
          <div className="col-span-2 flex justify-end gap-3">
            <button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined" data-icon="edit">
                edit
              </span>
            </button>
            <button className="p-2 text-on-surface-variant hover:text-error transition-colors">
              <span className="material-symbols-outlined" data-icon="delete">
                delete
              </span>
            </button>
          </div>
        </div>
        {/* <!-- Post Item 3 --> */}
        <div className="grid grid-cols-12 items-center bg-surface-container-lowest p-6 rounded-xl group transition-all duration-400 hover:bg-surface-container-low hover:translate-y-[-2px]">
          <div className="col-span-6 flex items-center gap-6">
            <img
              className="w-16 h-16 object-cover rounded-md"
              data-alt="Overhead view of a clean workspace with a laptop, a coffee mug, and a small green plant on a white desk"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFJGU_g2AgriPgpphC1tTXe0mR2ZrlGN7Is-hdcZfNAe06dm6NDyZDzpsc9bWaxcArAlyiL5NTvkYDg7H-rrxFZKzk9L4MVU5uCpzUThR4WhksdyJ-l49n2ZrQ6zuurxU0hKsOWB15p3sEMYav63HODxPasGhPn6hWxe0epDmB9YCMXyNGnQSI8CioB9_VLTcBFP0ZOfqJub3iZ1YHIhX-rXHcEIGlCDxn524I1jK0v2K_b0Y-qtBbrGx2-lGJSpn_xBieyiIvd2to"
            />
            <div>
              <h4 className="font-headline text-xl mb-1 group-hover:text-primary transition-colors">
                The Digital Nomad's Archive
              </h4>
              <p className="text-sm text-on-surface-variant font-body line-clamp-1">
                Chronicles of remote work and the philosophy of wandering through the city.
              </p>
            </div>
          </div>
          <div className="col-span-2">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-[10px] font-label uppercase tracking-wider rounded-full">
              Published
            </span>
          </div>
          <div className="col-span-2 text-sm font-label text-on-surface-variant">Sep 05, 2023</div>
          <div className="col-span-2 flex justify-end gap-3">
            <button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined" data-icon="edit">
                edit
              </span>
            </button>
            <button className="p-2 text-on-surface-variant hover:text-error transition-colors">
              <span className="material-symbols-outlined" data-icon="delete">
                delete
              </span>
            </button>
          </div>
        </div>
        {/* <!-- Pagination/Load More --> */}
        <div className="mt-8 flex justify-center">
          <button className="px-8 py-3 bg-surface-container-low text-on-surface-variant font-label text-xs uppercase tracking-[0.2em] hover:bg-primary hover:text-on-primary transition-all rounded-xl">
            View Archive
          </button>
        </div>
      </div>
    </div>
  );
}
