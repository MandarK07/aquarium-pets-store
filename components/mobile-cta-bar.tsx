import { MessageCircle, Navigation, Phone } from 'lucide-react'
import { site } from '@/lib/site'

export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 backdrop-blur-md lg:hidden">
      <div className="mx-auto grid max-w-md grid-cols-3 gap-2 px-3 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2">
        <a
          href={site.phoneHref}
          className="flex flex-col items-center justify-center gap-1 rounded-xl py-2 text-xs font-semibold text-primary"
        >
          <Phone className="h-5 w-5" strokeWidth={2} />
          Call
        </a>
        <a
          href={site.whatsappHref + 'the%20store'}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 rounded-xl bg-accent py-2 text-xs font-semibold text-accent-foreground"
        >
          <MessageCircle className="h-5 w-5" strokeWidth={2} />
          WhatsApp
        </a>
        <a
          href={site.mapsHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 rounded-xl py-2 text-xs font-semibold text-primary"
        >
          <Navigation className="h-5 w-5" strokeWidth={2} />
          Directions
        </a>
      </div>
    </div>
  )
}
