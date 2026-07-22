import Image from 'next/image'

const shots = [
  {
    src: '/images/planted-tank.png',
    alt: 'Nature-style planted aquascape with neon tetras',
    caption: 'Aquascape setup',
    className: 'sm:col-span-2 sm:row-span-2',
  },
  {
    src: '/images/betta-fish.png',
    alt: 'Vibrant red and blue betta fish',
    caption: 'Betta splendens',
    className: '',
  },
  {
    src: '/images/goldfish.png',
    alt: 'Bright orange fancy goldfish',
    caption: 'Fancy goldfish',
    className: '',
  },
  {
    src: '/images/aquascaping.png',
    alt: 'Hands arranging plants during an aquarium setup',
    caption: 'Setup in progress',
    className: 'sm:col-span-2',
  },
  {
    src: '/images/store-interior.png',
    alt: 'Rows of aquarium tanks inside the store',
    caption: 'Our shop floor',
    className: '',
  },
  {
    src: '/images/hero-aquascape.png',
    alt: 'Lush planted community aquarium',
    caption: 'Community tank',
    className: '',
  },
]

export function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Straight from the shop
            </p>
            <h2 className="mt-3 text-balance font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              A peek into our tanks
            </h2>
          </div>
          <p className="max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
            Real fish and setups from the store. Drop by to see them glowing in
            person — photos never quite do it justice.
          </p>
        </div>

        <div className="mt-10 grid auto-rows-[10rem] grid-cols-2 gap-3 sm:auto-rows-[12rem] sm:grid-cols-4">
          {shots.map((s) => (
            <figure
              key={s.caption}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-card ${s.className}`}
            >
              <Image
                src={s.src || '/placeholder.svg'}
                alt={s.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <figcaption className="absolute bottom-3 left-3 translate-y-1 text-sm font-medium text-background opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                {s.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
