import Image from 'next/image'
import { MessageCircle, Waves } from 'lucide-react'
import { site } from '@/lib/site'

const services = [
  {
    step: '01',
    title: 'Aquarium setup & aquascaping',
    desc: 'From choosing the right tank and filter to planting and cycling — we set it up so it thrives from day one.',
  },
  {
    step: '02',
    title: 'Tank maintenance & cleaning',
    desc: 'Water changes, algae control and equipment checks to keep your aquarium crystal clear.',
  },
  {
    step: '03',
    title: 'Water testing & problem solving',
    desc: 'Bring a water sample or send a photo — we diagnose cloudy water, sick fish and more.',
  },
  {
    step: '04',
    title: 'Fish & supply sourcing',
    desc: 'Hunting for a particular species or product? We source it and hold it for you.',
  },
]

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-primary py-20 text-primary-foreground lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              <Waves className="h-4 w-4" /> How we help
            </p>
            <h2 className="mt-3 text-balance font-serif text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Services that go beyond the sale
            </h2>
            <p className="mt-4 max-w-lg text-pretty leading-relaxed text-primary-foreground/80">
              Whether you&apos;re starting your very first tank or maintaining a
              show-piece aquascape, we&apos;re here for the whole journey.
            </p>

            <div className="mt-8 overflow-hidden rounded-3xl border border-primary-foreground/15">
              <Image
                src="/images/aquascaping.png"
                alt="Aquascaping an aquarium with plants and driftwood"
                width={800}
                height={450}
                className="h-56 w-full object-cover sm:h-64"
              />
            </div>
          </div>

          <div>
            <ol className="space-y-2">
              {services.map((s) => (
                <li
                  key={s.step}
                  className="group flex gap-5 rounded-2xl border border-transparent p-5 transition-colors hover:border-primary-foreground/15 hover:bg-primary-foreground/5"
                >
                  <span className="font-serif text-2xl font-semibold text-accent">
                    {s.step}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl font-semibold">
                      {s.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-primary-foreground/75">
                      {s.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <a
              href={site.whatsappHref + 'a%20service'}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-base font-semibold text-accent-foreground transition-all hover:brightness-105 sm:w-auto"
            >
              <MessageCircle className="h-5 w-5" strokeWidth={2} />
              Book a service on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
