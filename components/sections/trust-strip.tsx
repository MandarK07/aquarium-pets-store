import { Droplets, Heart, ShieldCheck, Sparkles } from 'lucide-react'

const items = [
  {
    icon: Heart,
    stat: '10 yrs',
    label: 'caring for the neighbourhood',
  },
  {
    icon: Droplets,
    stat: 'Daily',
    label: 'water testing on every tank',
  },
  {
    icon: ShieldCheck,
    stat: 'Healthy',
    label: 'quarantined & guaranteed fish',
  },
  {
    icon: Sparkles,
    stat: 'Free',
    label: 'setup advice with every buy',
  },
]

export function TrustStrip() {
  return (
    <section className="border-y border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-8 px-4 py-10 sm:px-6 lg:grid-cols-4 lg:py-12">
        {items.map((item) => (
          <div key={item.label} className="flex items-start gap-3">
            <item.icon
              className="mt-0.5 h-6 w-6 shrink-0 text-accent"
              strokeWidth={1.75}
            />
            <div>
              <p className="font-serif text-xl font-semibold leading-none sm:text-2xl">
                {item.stat}
              </p>
              <p className="mt-1.5 text-sm leading-snug text-primary-foreground/75">
                {item.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
