import Image from 'next/image'
import { MapPin, MessageCircle, Phone, Star } from 'lucide-react'
import { site } from '@/lib/site'
import { Bubbles } from '@/components/bubbles'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16 lg:pt-20">
      {/* soft seafoam wash */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-secondary/60 via-background to-background" />
      <Bubbles className="text-primary/10" />

      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 pt-10 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-12 lg:pb-24 lg:pt-16">
        <div className="relative">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card/70 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-primary backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {site.hours}
          </span>

          <h1 className="mt-6 text-balance font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Healthy fish, thriving tanks, and{' '}
            <span className="deco-underline text-primary">honest advice</span>{' '}
            in Goregaon.
          </h1>

          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {site.name} is a family-run aquarium and pet store. From your first
            betta to a fully planted aquascape, we hand-pick every fish and
            help you keep it happy — long after you leave the shop.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={site.whatsappHref + 'a%20fish%20or%20aquarium'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-base font-semibold text-accent-foreground shadow-sm transition-all hover:shadow-md hover:brightness-105"
            >
              <MessageCircle className="h-5 w-5" strokeWidth={2} />
              Ask on WhatsApp
            </a>
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/25 bg-card px-6 py-3.5 text-base font-semibold text-primary transition-colors hover:bg-secondary"
            >
              <Phone className="h-5 w-5" strokeWidth={2} />
              Call the shop
            </a>
            <a
              href="#visit"
              className="inline-flex items-center justify-center gap-2 rounded-full px-4 py-3.5 text-base font-semibold text-foreground/70 transition-colors hover:text-foreground"
            >
              <MapPin className="h-5 w-5" strokeWidth={2} />
              Get directions
            </a>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-accent text-accent"
                    strokeWidth={0}
                  />
                ))}
              </div>
              <span className="font-medium text-foreground">
                Loved by local hobbyists
              </span>
            </div>
            <span className="hidden h-4 w-px bg-border sm:block" />
            <span>{site.established}</span>
          </div>
        </div>

        {/* Image cluster */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-xl shadow-primary/10">
            <Image
              src="/images/hero-aquascape.png"
              alt="A lush planted freshwater aquarium with colorful tropical fish at Shree Krupa Aquarium"
              width={900}
              height={1000}
              priority
              className="h-[26rem] w-full object-cover sm:h-[32rem]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/25 via-transparent to-transparent" />
          </div>

          {/* floating review card */}
          <div className="animate-float absolute -bottom-5 -left-3 max-w-[15rem] rounded-2xl border border-border bg-card/95 p-4 shadow-lg backdrop-blur sm:-left-6">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-3.5 w-3.5 fill-accent text-accent"
                  strokeWidth={0}
                />
              ))}
            </div>
            <p className="mt-2 text-sm leading-snug text-foreground">
              &ldquo;Fish always arrive home healthy. They actually teach you
              how to care for them.&rdquo;
            </p>
            <p className="mt-1.5 text-xs font-medium text-muted-foreground">
              — Verified Google review
            </p>
          </div>

          {/* floating badge */}
          <div className="absolute -right-2 -top-4 hidden rounded-2xl bg-primary px-4 py-3 text-primary-foreground shadow-lg sm:block">
            <p className="font-serif text-2xl font-semibold leading-none">200+</p>
            <p className="mt-1 text-[0.7rem] uppercase tracking-wider text-primary-foreground/80">
              species &amp; supplies
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
