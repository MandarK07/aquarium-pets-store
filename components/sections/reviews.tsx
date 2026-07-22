import { ArrowUpRight, Quote, Star } from 'lucide-react'
import { site } from '@/lib/site'

const reviews = [
  {
    quote:
      'Best aquarium shop around. The fish are always healthy and they genuinely guide you on how to care for them instead of just selling.',
    name: 'Rohan P.',
    detail: 'Planted tank hobbyist',
  },
  {
    quote:
      'Set up my first aquarium here. They helped me pick everything and still answer my WhatsApp questions weeks later. Rare service.',
    name: 'Sneha K.',
    detail: 'First-time fish keeper',
  },
  {
    quote:
      'Great variety of fish and plants, fair prices, and the owner really knows his stuff. My kids love visiting the tanks.',
    name: 'Amit D.',
    detail: 'Regular customer',
  },
]

export function Reviews() {
  return (
    <section id="reviews" className="scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Kind words
            </p>
            <h2 className="mt-3 text-balance font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Trusted by fish keepers across Raigad
            </h2>
            <div className="mt-4 flex items-center gap-3">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-accent text-accent"
                    strokeWidth={0}
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-muted-foreground">
                Rated by happy local customers on Google
              </span>
            </div>
          </div>
          <a
            href={site.reviewHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-primary/25 bg-card px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
          >
            Leave a Google review
            <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
          </a>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {reviews.map((r, i) => (
            <figure
              key={r.name}
              className={`relative flex flex-col rounded-3xl border border-border bg-card p-6 shadow-sm ${
                i === 1 ? 'md:-translate-y-4' : ''
              }`}
            >
              <Quote className="h-8 w-8 text-accent/40" strokeWidth={1.5} />
              <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-foreground">
                {r.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <p className="font-semibold text-foreground">{r.name}</p>
                <p className="text-sm text-muted-foreground">{r.detail}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
