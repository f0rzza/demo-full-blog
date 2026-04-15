export function FeaturedPost() {
  return (
    <section className="relative px-8 md:px-12 pt-12 pb-24 max-w-[1600px] mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 z-10">
          <span className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-container text-[10px] font-bold tracking-[0.2em] uppercase rounded-full mb-6">
            Featured Story
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-medium leading-[1.1] text-on-surface mb-8 tracking-tight">
            The Quiet Resilience of <br />
            <span className="italic text-primary">Stone Architecture</span>
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant font-body leading-relaxed mb-10 max-w-xl">
            An exploration into the enduring legacy of brutalist forms and the organic integration
            of mineral materials in contemporary urban landscapes.
          </p>
          <div className="flex items-center gap-6 mb-12">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-surface-container-high overflow-hidden">
                <img
                  alt="Author"
                  className="w-full h-full object-cover"
                  data-alt="close-up portrait of an elderly man with silver hair and wise eyes in soft natural library lighting"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA47n0wYbcSRskB8ROdFTEaXbEfe8TyCOoQ0IIcCBsgxvD2TNuaSBQmTMfOizYl5yM-rOD5baUvxd2fzwl_fEn2jU0DF0Zu9A7lErlDL-2hRp6swC4ktAginTmJ74hghBAwCgpYtTB3aK7EdUhr3kdbW3KQV2NvBmbeohre7_3qqF2xA0I4-2PLQIRDsd5w_ishy8QZwMZcnyrWKCSe7yDlgjpkctzN1aJrr717UgxlKAOv8DDrho7zfV4eB2ezL4beARQJjNR7oBnt"
                />
              </div>
              <span className="text-sm font-medium">Elias Thorne</span>
            </div>
            <span className="w-1 h-1 bg-outline-variant rounded-full"></span>
            <span className="text-sm text-on-surface-variant font-body italic">
              October 24, 2024
            </span>
          </div>
          <button className="group flex items-center gap-4 text-primary font-bold tracking-widest text-xs uppercase transition-all">
            Read the essay
            <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">
              arrow_forward
            </span>
          </button>
        </div>
        <div className="lg:col-span-6 relative">
          <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl transform lg:translate-x-12 lg:-rotate-2">
            <img
              alt="Modern Architecture"
              className="w-full h-full object-cover"
              data-alt="architectural shot of a brutalist concrete building with sharp geometric shadows and minimalist steel details against a clear blue sky"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDG3D5NxgDD8Bj3GBQyozWQD9pfj5Lp0orIKHcC_evbUelXaw5ZXItUdCP0Uy7Biiucsr_qf88kScIcFw5RkQAPUdqByCWMaVkQxL7f9LzQK4pBR7zdUem42HqsU6ybCl6f7qEFApt-Rs0ndKoUBSNlPAive8oboQ1JM3Ucd8YFUyPFHzFHMpUTNN-g0P2KxfTRuG53kmOghHfPi1Mh3RXXMRXJ446w51Fd5fQAXtk6CzlF4HGGQ51OYgzWsdxZXgAD-IKQseCVYFJJ"
            />
          </div>
          <div className="absolute -bottom-12 -left-12 w-64 h-80 rounded-xl overflow-hidden hidden xl:block shadow-xl border-8 border-background">
            <img
              alt="Detail shot"
              className="w-full h-full object-cover"
              data-alt="macro close-up of textured grey stone surface with subtle moss growth and golden hour lighting catching the edges"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuACYrmixtiGMEZ4Zyv309DgZEcR0lzpLpurw-ZvsC2ZSKf0aH1oh_xnJbXuCt-YFt4AzxK8qvsNjMq_ntqkvN9eFToXU3JgmAVbLJfY8bfgJqIPc-ShWG-Gl2-lzQNPq0VTfLE57MwQS-8PSvzxYL4eFntgO3FGWcFTQj9Uo2pZrJx2AOVMTNyjkAqymUF6SZeI1krTS7r4sl5WIwulQEIKLB6-CSsNFVTKWs5nTm2V7ZNyW5zAtjAb_mjGG3-l_jLRHFSk0Hfap2yk"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
