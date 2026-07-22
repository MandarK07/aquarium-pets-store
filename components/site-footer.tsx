import { Clock, Fish, MapPin, MessageCircle, Phone } from 'lucide-react'
import { site } from '@/lib/site'

const nav = [
  { label: 'Our World', href: '#collections' },
  { label: 'Why Us', href: '#why' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Services', href: '#services' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Visit', href: '#visit' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Fish className="h-5 w-5" strokeWidth={1.75} />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-serif text-lg font-semibold text-foreground">
                Shree Krupa
              </span>
              <span className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Aquarium &amp; Pets
              </span>
            </span>
          </div>
          <p className="mt-4 max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
            A family-run aquarium and pet store in Goregaon, Raigad — helping
            our neighbours build healthy, beautiful tanks since 2015.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={site.phoneHref}
              aria-label="Call us"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-primary transition-colors hover:bg-secondary"
            >
              <Phone className="h-5 w-5" strokeWidth={1.75} />
            </a>
            <a
              href={site.whatsappHref + 'the%20shop'}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Message us on WhatsApp"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-primary transition-colors hover:bg-secondary"
            >
              <MessageCircle className="h-5 w-5" strokeWidth={1.75} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-foreground">
            Explore
          </h3>
          <ul className="mt-4 space-y-2.5">
            {nav.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-foreground">
            Find us
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>
                {site.addressLine}, {site.addressRegion}
              </span>
            </li>
            <li className="flex gap-2.5">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>Open daily, 10 AM – 9 PM</span>
            </li>
            <li className="flex gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <a
                href={site.phoneHref}
                className="underline-offset-4 hover:text-foreground hover:underline"
              >
                {site.phoneDisplay}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:px-6">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Made with care in Goregaon, Raigad, Maharashtra.</p>
        </div>
      </div>
    </footer>
  )
}
