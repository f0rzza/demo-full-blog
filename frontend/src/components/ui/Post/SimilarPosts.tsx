export function SimilarPosts() {
  return (
    <section className="mt-32 bg-surface-container-highest/30 py-24">
      <div className="max-w-[1600px] mx-auto px-8 md:px-12">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="font-label text-xs uppercase tracking-widest text-primary font-bold">
              Related
            </span>
            <h2 className="font-headline text-4xl font-bold mt-2">Continue the Journey.</h2>
          </div>
          <a
            className="font-label text-xs uppercase tracking-widest border-b border-primary text-primary pb-1"
            href="#"
          >
            View Archive
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group cursor-pointer">
            <div className="overflow-hidden rounded-md bg-surface-container-lowest">
              <img
                alt="Article Thumbnail"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                data-alt="bright interior of a library with floor to ceiling windows and modern wooden desks"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBu_f0sUi0jXsZ4eYISryRM2RENRXZCVzHp94NXq77kgH60yj3uFgq6EH8KP3HbfN0M-bhrdOaddoSaAcvEsVA2FQh4oASHj8cM8pzyJp-zNn2wD9V05kPuhnsE8DnZo6HIMcEMwlCneouuJwvZYxkGnBqaueP6Fp8diPo3liZ_X_Q1gYa3LqPBmprxFBIqSj9mMgywhuQBwOQ0vqNKI3Oi-_Mv06L8xY78ByeG8GhObjGQNrZq4zFHGYkYdRgCx9GdMxa2-PcsplVo"
              />
            </div>
            <div className="mt-6 space-y-3">
              <span className="font-label text-[10px] uppercase tracking-widest text-outline">
                Culture
              </span>
              <h3 className="font-headline text-2xl font-bold leading-snug group-hover:text-primary transition-colors">
                The Rebirth of the Public Library.
              </h3>
              <p className="font-body text-sm text-on-surface/60 line-clamp-2">
                How civic spaces are evolving to meet the demands of a digital generation through
                hybrid design.
              </p>
            </div>
          </div>

          <div className="group cursor-pointer">
            <div className="overflow-hidden rounded-md bg-surface-container-lowest">
              <img
                alt="Article Thumbnail"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                data-alt="abstract satellite view of earth at night with glowing city lights and atmospheric haze"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFX7xZAjqdidZqb43rxhna3yEMW4i1l5oq6PPTjfKAysTSXbPtAKwzkBI1LATvzv1A3FGQbrgcS4zvR6cKEQBQo_RUpIiYqp8GVeyNyxwnUfMlvw2BJKRYO7Mb6XrMiRkoyd6Ku8-rwOGTIrfeo7BXMRZEdFygEWDShKPwq80RirrZW8Y3yfT9H8hc-PC0sChDLIbW8gjM4sgUeKbC68F53FMwXBRuSIelECpLarwAGG-PfDj-bI5_aJfekutSXB2kdXFULWT9KLgT"
              />
            </div>
            <div className="mt-6 space-y-3">
              <span className="font-label text-[10px] uppercase tracking-widest text-outline">
                Essays
              </span>
              <h3 className="font-headline text-2xl font-bold leading-snug group-hover:text-primary transition-colors">
                Mapping the Unseen Connections.
              </h3>
              <p className="font-body text-sm text-on-surface/60 line-clamp-2">
                A deep dive into the hidden logistics that power our globalized world of luxury
                goods.
              </p>
            </div>
          </div>

          <div className="group cursor-pointer">
            <div className="overflow-hidden rounded-md bg-surface-container-lowest">
              <img
                alt="Article Thumbnail"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                data-alt="stunning view of the Sagrada Familia rooftop at sunset with warm orange glow on the stone towers"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_Iw8-1KI-F6XWM4h85zoMcXkpGGhfydFk49aOchJfN99VbujrLE8u8ATirZD5aFIljTE3d1v9kT-P4ZzVrp-rWBbbn8ToCBOfUI6-U0HBg9forMb1j5gRITe8ZkrNrSVLTJKdut2w3eMCnrfLxWKFsqZc08iZomrYuuBYf1NKhf6KLBNLvHczvQRE--xtmNRTVEYfRoZO-RjHOkBLTLVPkcSimLM1t3Iry6wJGjVvgPs3up1oXizK6ICImDXGv1CBUBy8hEY7ckn8"
              />
            </div>
            <div className="mt-6 space-y-3">
              <span className="font-label text-[10px] uppercase tracking-widest text-outline">
                Travel
              </span>
              <h3 className="font-headline text-2xl font-bold leading-snug group-hover:text-primary transition-colors">
                Barcelona: Beyond the Surface.
              </h3>
              <p className="font-body text-sm text-on-surface/60 line-clamp-2">
                Moving past the tourist trails to discover the city's radical underground art scene.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
