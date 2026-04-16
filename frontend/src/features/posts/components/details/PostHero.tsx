export function PostHero() {
  return (
    <section className="relative w-full h-[870px] overflow-hidden">
      <img
        alt="Article Hero Image"
        className="w-full h-full object-cover"
        data-alt="dramatic wide shot of a modernist concrete villa nestled in a foggy scandinavian forest at dawn with soft moody lighting"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC87eQNkKdyGOEHbcNvi-AXR7n1AIDMVwfvCd7BlIS4pWv5kcWi2CqhwFpDjfxBT6Czkiq9FQOASTEumgw48zWzWSvL9ugOXzCay7rX4OjQEzD3dgVuI3Djv8mcIDPbG-18EXooRg4mrlNbgqWR9MTI5dJKJATiYWo3wVih-ZPf6aMkoDaOdPVdWXrXsxIlZyK0DrnzwXeZomKBjH2FW8Vh-RHpuvgCMu-Ae443Hakx956kXwpNMEqEG_PMmvQp3oab-L5NNXfCe5N_"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 text-white max-w-[1600px] mx-auto">
        <div className="max-w-4xl">
          <span className="font-label text-xs uppercase tracking-[0.2em] mb-4 block opacity-80">
            Architecture &amp; Space
          </span>
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.95]">
            The Silence of Sculptural Living.
          </h1>
          <div className="mt-8 flex items-center gap-4 font-body text-sm">
            <span className="opacity-70">By Julian Thorne</span>
            <span className="w-1 h-1 bg-white/40 rounded-full"></span>
            <span className="opacity-70">October 14, 2024</span>
            <span className="w-1 h-1 bg-white/40 rounded-full"></span>
            <span className="opacity-70">12 Min Read</span>
          </div>
        </div>
      </div>
    </section>
  );
}
