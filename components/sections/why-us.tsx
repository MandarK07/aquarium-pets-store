import Image from 'next/image'
import { Check } from 'lucide-react'

const points = [
  {
    title: 'We keep our fish healthy',
    desc: 'Every tank is tested and cleaned daily, and new arrivals are quarantined before they reach you.',
  },
  {
    title: 'Real guidance, not a hard sell',
    desc: 'We ask about your tank size and water before we sell you a single fish — so nothing goes home to fail.',
  },
  {
    title: 'After-care that stays with you',
    desc: 'Water gone cloudy? Fish acting odd? Send a photo on WhatsApp and we will help you fix it.',
  },
  {
    title: 'A shop that knows your name',
    desc: 'A decade of neighbours who started with one bowl and now run beautiful planted tanks.',
  },
]

export function WhyUs() {
  return (
    <section id="why" className="scroll-mt-24 bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="relative order-last lg:order-first">
          <div className="grain overflow-hidden rounded-[2rem] border border-border shadow-xl shadow-primary/10">
            <Image
              src="/images/store-interior.png"
              alt="Inside Shree Krupa Aquarium & Pets — rows of well-kept glowing aquarium tanks"
              width={800}
              height={800}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 right-4 rounded-2xl border border-border bg-card px-5 py-4 shadow-lg sm:-right-5">
            <p className="font-serif text-lg font-semibold text-foreground">
              Family run
            </p>
            <p className="text-sm text-muted-foreground">In Goregaon, Raigad</p>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            Why families trust us
          </p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Not just a shop — your fish-keeping partner
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Anyone can sell a fish. We would rather you come back happy for
            years. That&apos;s why so much of what we do happens after the sale.
          </p>

          <ul className="mt-8 space-y-5">
            {points.map((p) => (
              <li key={p.title} className="flex gap-4">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="h-4 w-4" strokeWidth={2.5} />
                </span>
                <div>
                  <h3 className="font-semibold text-foreground">{p.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {p.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
