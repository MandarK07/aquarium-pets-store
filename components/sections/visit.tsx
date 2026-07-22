import { Clock, MapPin, MessageCircle, Navigation, Phone } from 'lucide-react'
import { site } from '@/lib/site'

export function Visit() {
  return (
    <section id="visit" className="scroll-mt-24 bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Come say hello
            </p>
            <h2 className="mt-3 text-balance font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Visit us in Goregaon, Raigad
            </h2>
            <p className="mt-4 max-w-lg text-pretty leading-relaxed text-muted-foreground">
              Pop in to see the tanks, meet the fish and get advice in person.
              Prefer to plan ahead? Call or WhatsApp us before you drop by.
            </p>

            <dl className="mt-8 space-y-5">
              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-card text-primary shadow-sm ring-1 ring-border">
                  <MapPin className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">
                    Address
                  </dt>
                  <dd className="font-medium text-foreground">
                    {site.addressLine}
                    <br />
                    {site.addressRegion}
                  </dd>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-card text-primary shadow-sm ring-1 ring-border">
                  <Clock className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">
                    Opening hours
                  </dt>
                  <dd className="font-medium text-foreground">
                    Monday – Sunday
                    <br />
                    10:00 AM – 9:00 PM
                  </dd>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-card text-primary shadow-sm ring-1 ring-border">
                  <Phone className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">
                    Phone
                  </dt>
                  <dd>
                    <a
                      href={site.phoneHref}
                      className="font-medium text-foreground underline-offset-4 hover:underline"
                    >
                      {site.phoneDisplay}
                    </a>
                  </dd>
                </div>
              </div>
            </dl>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={site.mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground transition-all hover:brightness-110"
              >
                <Navigation className="h-5 w-5" strokeWidth={2} />
                Get directions
              </a>
              <a
                href={site.whatsappHref + 'my%20visit'}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/25 bg-card px-6 py-3.5 text-base font-semibold text-primary transition-colors hover:bg-secondary"
              >
                <MessageCircle className="h-5 w-5" strokeWidth={2} />
                WhatsApp us
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-border shadow-xl shadow-primary/10">
            <iframe
              title={`Map to ${site.name}`}
              src={site.mapsEmbed}
              className="h-full min-h-[22rem] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}
