import Image from 'next/image'
import { ArrowUpRight, Fish, Leaf, PawPrint, ShoppingBag } from 'lucide-react'
import { site } from '@/lib/site'

const collections = [
  {
    title: 'Tropical & Community Fish',
    desc: 'Guppies, mollies, tetras, bettas, angelfish and more — quarantined and ready for your tank.',
    icon: Fish,
    image: '/images/betta-fish.png',
    span: 'lg:col-span-3 lg:row-span-2',
    tall: true,
  },
  {
    title: 'Live Aquarium Plants',
    desc: 'Hardy carpets, stems and mosses to keep your water clean and your fish calm.',
    icon: Leaf,
    image: '/images/planted-tank.png',
    span: 'lg:col-span-3',
  },
  {
    title: 'Food & Care Supplies',
    desc: 'Trusted fish food, water conditioners, filters, nets and everything in between.',
    icon: ShoppingBag,
    image: '/images/pet-supplies.png',
    span: 'lg:col-span-2',
  },
  {
    title: 'Pets & Pet Care',
    desc: 'Friendly companions and the supplies to keep them healthy and happy at home.',
    icon: PawPrint,
    image: '/images/goldfish.png',
    span: 'lg:col-span-1',
    compact: true,
  },
]

export function Collections() {
  return (
    <section id="collections" className="scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            Our little world
          </p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Everything your tank and home could ask for
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
            Hand-picked stock, kept in pristine water and looked after daily.
            Tell us what you&apos;re dreaming up and we&apos;ll help you build it.
          </p>
        </div>

        <div className="mt-12 grid auto-rows-[minmax(0,1fr)] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {collections.map((c) => (
            <article
              key={c.title}
              className={`group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg ${c.span}`}
            >
              <div
                className={`relative overflow-hidden ${
                  c.tall ? 'h-64 lg:h-full lg:min-h-[20rem]' : c.compact ? 'h-40' : 'h-48'
                }`}
              >
                <Image
                  src={c.image || '/placeholder.svg'}
                  alt={c.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
                <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-background/90 text-primary shadow-sm backdrop-blur">
                  <c.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                {c.tall && (
                  <div className="absolute inset-x-5 bottom-5 text-background">
                    <h3 className="font-serif text-2xl font-semibold">
                      {c.title}
                    </h3>
                    <p className="mt-1.5 max-w-sm text-sm leading-snug text-background/85">
                      {c.desc}
                    </p>
                  </div>
                )}
              </div>

              {!c.tall && (
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {c.desc}
                  </p>
                </div>
              )}
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-3xl border border-dashed border-primary/30 bg-secondary/50 p-6 text-center sm:flex-row sm:text-left">
          <p className="text-pretty text-base text-foreground">
            Looking for something specific? We source fish and supplies on
            request.
          </p>
          <a
            href={site.whatsappHref + 'a%20special%20request'}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
          >
            Message us your wishlist
            <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
          </a>
        </div>
      </div>
    </section>
  )
}
