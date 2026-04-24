export function PostsList() {
  return (
    <div className="pt-32 pb-24 px-8 max-w-screen-2xl mx-auto">
      {/* <!-- Header Section --> */}
      <header className="mb-16 md:mb-24">
        <div className="max-w-3xl">
          <h1 className="font-newsreader text-6xl md:text-7xl font-bold text-on-surface mb-6 tracking-tight">
            The Archive
          </h1>
          <p className="font-manrope text-lg md:text-xl text-on-surface-variant leading-relaxed opacity-80">
            A comprehensive collection of our investigative long-form essays, architectural
            critiques, and theoretical explorations into the built environment.
          </p>
        </div>
      </header>
      {/* <!-- Filter & Sorting Bar --> */}
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
      {/* <!-- Article Grid --> */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
        {/* <!-- Card 1 --> */}
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
            Exploring how raw concrete and monumental geometry are making a surprising comeback in
            the residential developments of Northern Europe.
          </p>
          <div className="flex items-center justify-between pt-4 border-t border-outline-variant/15">
            <span className="font-manrope text-xs text-outline italic">12 min read</span>
            <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </div>
        </article>
        {/* <!-- Card 2 --> */}
        <article className="group cursor-pointer">
          <div className="aspect-[4/3] mb-6 overflow-hidden rounded-md bg-surface-container">
            <img
              alt="Interior design"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              data-alt="elegant contemporary living room with a mid-century modern chair and soft morning light hitting a textured plaster wall"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBv1KWzre0yLD2lX5aNmBky3GzZToMTK9CNlEUwFFBStJgpCPSE6X9XOM1BFA8hm7KPohArk4sOeIVXzJmeUPcIR6Vuphxdn7Au63c7Wq-pWsv3eKx-z6VzJjog3fB1kFR7oPgoozxdcC7T5tKrrW2N3GxLXm0RKbXGU0KtUVHPZ10b51m-8yugwhi5Je2cKYrJaUAbwDnepJr6CgzFf4echf0nKv1m32u-KnPliCOXqJL0TzoouQK1bxR6eOT30c3NwLGOHYY7T74E"
            />
          </div>
          <div className="mb-3">
            <span className="font-manrope text-[10px] font-bold uppercase tracking-[0.15em] text-on-secondary-container bg-secondary-container px-2 py-0.5 rounded">
              Interior Design
            </span>
          </div>
          <h3 className="font-newsreader text-2xl md:text-3xl font-bold mb-3 leading-tight text-on-surface group-hover:text-primary transition-colors">
            Quiet Luxury: The Philosophy of Essentialism
          </h3>
          <p className="font-manrope text-on-surface-variant text-sm leading-relaxed mb-6 line-clamp-3">
            Moving beyond minimalism to find comfort in high-craft materials, tactile surfaces, and
            the intentional absence of noise.
          </p>
          <div className="flex items-center justify-between pt-4 border-t border-outline-variant/15">
            <span className="font-manrope text-xs text-outline italic">8 min read</span>
            <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </div>
        </article>
        {/* <!-- Card 3 --> */}
        <article className="group cursor-pointer">
          <div className="aspect-[4/3] mb-6 overflow-hidden rounded-md bg-surface-container">
            <img
              alt="Sustainability"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              data-alt="detail of a high-tech sustainable building facade with integrated vertical gardens and photovoltaic glass panels"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVw6DULnn7YjtDwGGM89DGvPq08UhwggaR9KJKt_2tkfGQTb8vghtxeR-_--2FJVZc_7pDiVzz7OPLWeD9KavIOQsxmR3YsFnXfYPd3a1bxPs4msdiVhKmoKlisQgovfYh9-UFoZtImxbMJltDE3C3zekp4mlAaPUpdkj4ABReFaxKMNuQDShoJ8yY1avHxun9klWyDtSRAc8-3_t-ZRgF5cdmlcJHAGmBNQiRizF_2uKpTV80Udc4DXr5j2fP6ahYa2Zsjp0cmmzg"
            />
          </div>
          <div className="mb-3">
            <span className="font-manrope text-[10px] font-bold uppercase tracking-[0.15em] text-on-secondary-container bg-secondary-container px-2 py-0.5 rounded">
              Sustainability
            </span>
          </div>
          <h3 className="font-newsreader text-2xl md:text-3xl font-bold mb-3 leading-tight text-on-surface group-hover:text-primary transition-colors">
            Regenerative Cities: Beyond Net-Zero
          </h3>
          <p className="font-manrope text-on-surface-variant text-sm leading-relaxed mb-6 line-clamp-3">
            Why the next generation of architects are looking to biology and mycelium networks to
            build the foundations of 2050.
          </p>
          <div className="flex items-center justify-between pt-4 border-t border-outline-variant/15">
            <span className="font-manrope text-xs text-outline italic">15 min read</span>
            <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </div>
        </article>
        {/* <!-- Card 4 --> */}
        <article className="group cursor-pointer">
          <div className="aspect-[4/3] mb-6 overflow-hidden rounded-md bg-surface-container">
            <img
              alt="Art Theory"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              data-alt="abstract modern painting with heavy impasto strokes in muted earth tones displayed in a minimalist gallery space"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8GAdZCK6SSFCKfH3goEkblTTBahXNN3hF2HM32j4pjKFFO8V_ifCByILwHlOkvJY_q5-ltrYUbQtMz1js0EubRyYwh82OQI-nB2EneV_J2kKkJTmqYvonFhIWH5SK-kbTS6eBPNKDhEPCgeLNDyY7rUDbuuJWU_-I-FONE575_ek48f-e2b4ybBnxcnr5pvehG8KKl4mWfr4GOIgfMg_TxyLMuxWYQ65HeAleVk9khH7eySGXeqiaval7-uvUIEorN_as78bZvl2l"
            />
          </div>
          <div className="mb-3">
            <span className="font-manrope text-[10px] font-bold uppercase tracking-[0.15em] text-on-secondary-container bg-secondary-container px-2 py-0.5 rounded">
              Art Theory
            </span>
          </div>
          <h3 className="font-newsreader text-2xl md:text-3xl font-bold mb-3 leading-tight text-on-surface group-hover:text-primary transition-colors">
            The Death of the White Cube
          </h3>
          <p className="font-manrope text-on-surface-variant text-sm leading-relaxed mb-6 line-clamp-3">
            How decentralized exhibition spaces and immersive digital landscapes are challenging the
            hegemony of traditional galleries.
          </p>
          <div className="flex items-center justify-between pt-4 border-t border-outline-variant/15">
            <span className="font-manrope text-xs text-outline italic">10 min read</span>
            <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </div>
        </article>
        {/* <!-- Card 5 --> */}
        <article className="group cursor-pointer">
          <div className="aspect-[4/3] mb-6 overflow-hidden rounded-md bg-surface-container">
            <img
              alt="Architecture"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              data-alt="close-up of Japanese joinery in a contemporary timber pavilion surrounded by dense mossy forest"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDivVBfhcuOS2u6ACgYdNNynZ-C7d2mR6UZPHEmNR7ij8XN8zKfqAKZP4-L42dTpN1dv9g_wKbDkXRrFlSVY7R8btW_Uj__piTA0q3XvBzYd97ZU72_5k66O-aSevDrLJcNjvACORWvVzQnuAp1XPW06Xz4UTdX7KDfksuoQ9hRv_hKf3tX2cbVSbSzGY7dNCdrJcGSQ-Wp-4qz4Mg2e8hsSJTk2dMEVtm3WNyjCluUOt_BFh1pw-4ghgzikcveGwqpjkBqEmsbNu-F"
            />
          </div>
          <div className="mb-3">
            <span className="font-manrope text-[10px] font-bold uppercase tracking-[0.15em] text-on-secondary-container bg-secondary-container px-2 py-0.5 rounded">
              Architecture
            </span>
          </div>
          <h3 className="font-newsreader text-2xl md:text-3xl font-bold mb-3 leading-tight text-on-surface group-hover:text-primary transition-colors">
            Wabi-Sabi in the Digital Age
          </h3>
          <p className="font-manrope text-on-surface-variant text-sm leading-relaxed mb-6 line-clamp-3">
            Finding beauty in the imperfect and the ephemeral within a world increasingly obsessed
            with high-resolution perfection.
          </p>
          <div className="flex items-center justify-between pt-4 border-t border-outline-variant/15">
            <span className="font-manrope text-xs text-outline italic">9 min read</span>
            <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </div>
        </article>
        {/* <!-- Card 6 --> */}
        <article className="group cursor-pointer">
          <div className="aspect-[4/3] mb-6 overflow-hidden rounded-md bg-surface-container">
            <img
              alt="Interior Design"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              data-alt="high-end modular kitchen with dark marble counters and fluted oak cabinetry illuminated by soft track lighting"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZsdooP9mr5kkSIN565460CFV_LB0bjZpEMSUFtL8E2MQdkYQT2c1Awn6U_oT17Hnos10Dyj2kfa1leS6p0B1kiqLan82pKEtb259kIQANqsa0nVvxzNhwY7vI_AGVBQfjV2su2ORCcAyhniRtNo7Mvq1Lb-sUq_7_O77MvuKvuJQqCXE-FYKfgQq43s9EYL87dIZXk3HzEjO0-TdZW9boXTHuTFaacIKP00AIpXN-t8vQGru54xFdpA1KYieu8ubDWAnrz462NMII"
            />
          </div>
          <div className="mb-3">
            <span className="font-manrope text-[10px] font-bold uppercase tracking-[0.15em] text-on-secondary-container bg-secondary-container px-2 py-0.5 rounded">
              Interior Design
            </span>
          </div>
          <h3 className="font-newsreader text-2xl md:text-3xl font-bold mb-3 leading-tight text-on-surface group-hover:text-primary transition-colors">
            The Culinary Stage: Kitchens as Social Centers
          </h3>
          <p className="font-manrope text-on-surface-variant text-sm leading-relaxed mb-6 line-clamp-3">
            Analyzing the architectural shift that turned the utilitarian kitchen into the primary
            performance space of the modern home.
          </p>
          <div className="flex items-center justify-between pt-4 border-t border-outline-variant/15">
            <span className="font-manrope text-xs text-outline italic">11 min read</span>
            <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </div>
        </article>
      </section>
      {/* <!-- Pagination --> */}
      <nav className="mt-24 flex justify-center items-center gap-2">
        <a
          className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary text-on-primary font-manrope font-bold text-sm shadow-xl shadow-primary/10 transition-all scale-100 active:scale-95"
          href="#"
        >
          1
        </a>
        <a
          className="w-12 h-12 flex items-center justify-center rounded-xl bg-surface-container-low text-on-surface-variant font-manrope font-bold text-sm hover:bg-surface-container transition-colors"
          href="#"
        >
          2
        </a>
        <a
          className="w-12 h-12 flex items-center justify-center rounded-xl bg-surface-container-low text-on-surface-variant font-manrope font-bold text-sm hover:bg-surface-container transition-colors"
          href="#"
        >
          3
        </a>
        <span className="mx-2 text-outline">...</span>
        <a
          className="px-6 h-12 flex items-center justify-center rounded-xl bg-surface-container-low text-on-surface-variant font-manrope font-bold text-sm hover:bg-surface-container transition-colors group"
          href="#"
        >
          Next
          <span className="material-symbols-outlined ml-2 text-sm group-hover:translate-x-1 transition-transform">
            arrow_forward
          </span>
        </a>
      </nav>
    </div>
  );
}
