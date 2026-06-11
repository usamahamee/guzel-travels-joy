export function PageHero({ title, subtitle, image }: { title: string; subtitle?: string; image: string }) {
  return (
    <section className="relative h-[52vh] min-h-[360px] overflow-hidden">
      <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover animate-ken-burns" />
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--navy)]/70 via-[var(--navy)]/55 to-[var(--navy)]/85" />
      <div className="relative h-full flex flex-col items-center justify-center text-center px-5">
        {subtitle && <p className="font-subhead text-lg sm:text-xl text-[var(--gold)] italic mb-3">{subtitle}</p>}
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white font-bold leading-tight max-w-4xl">{title}</h1>
        <div className="mt-6 w-20 h-1 bg-[var(--gold)] rounded-full" />
      </div>
    </section>
  );
}