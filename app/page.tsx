import { SiteHeader } from '@/components/site-header'
import { MobileCtaBar } from '@/components/mobile-cta-bar'
import { SiteFooter } from '@/components/site-footer'
import { Hero } from '@/components/sections/hero'
import { TrustStrip } from '@/components/sections/trust-strip'
import { Collections } from '@/components/sections/collections'
import { WhyUs } from '@/components/sections/why-us'
import { Gallery } from '@/components/sections/gallery'
import { Services } from '@/components/sections/services'
import { Reviews } from '@/components/sections/reviews'
import { Visit } from '@/components/sections/visit'
import { site } from '@/lib/site'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'PetStore',
  name: site.name,
  description:
    'Family-run aquarium and pet store in Goregaon, Raigad — healthy fish, planted aquariums, aquascaping, fish food, accessories and expert advice.',
  telephone: '+918087577217',
  openingHours: 'Mo-Su 10:00-21:00',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Near Vishnu Talav, Goregaon',
    addressLocality: 'Goregaon',
    addressRegion: 'Maharashtra',
    postalCode: '402103',
    addressCountry: 'IN',
  },
  areaServed: 'Raigad, Maharashtra',
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <main className="pb-16 lg:pb-0">
        <Hero />
        <TrustStrip />
        <Collections />
        <WhyUs />
        <Gallery />
        <Services />
        <Reviews />
        <Visit />
      </main>
      <SiteFooter />
      <MobileCtaBar />
    </>
  )
}
