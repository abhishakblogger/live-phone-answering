import PricingHero from '@/features/pricing/PricingHero'
import IncludedFeatures from '@/features/pricing/IncludedFeatures'
import DarkCtaBanner from '@/components/DarkCtaBanner'
import MinutePlans from '@/components/MinutePlans'
import FaqSection from '@/components/FaqSection'
import { pricingFaq } from '@/components/faq-content'
import Link from 'next/link'

export const metadata = {
  title: "Pricing — Flat-Rate Plans from $199/mo | Live Phone Answering",
  description: "Live answering plans from $199/month for 100 minutes. Starter, Growth and Business tiers — no setup fees, no contracts, extra minutes at $1.99/min.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    type: 'website',
    siteName: 'LivePhoneAnswering',
    locale: 'en_US',
    images: [{ url: '/images/Phone Answering Services.webp', width: 1122, height: 1402, alt: 'Live Phone Answering Service' }],
    title: "Pricing — Flat-Rate Plans from $199/mo | Live Phone Answering",
    description: "Live answering plans from $199/month for 100 minutes. Starter, Growth and Business tiers — no setup fees, no contracts, extra minutes at $1.99/min.",
    url: "/pricing",
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/Phone Answering Services.webp'],
    title: "Pricing — Flat-Rate Plans from $199/mo | Live Phone Answering",
    description: "Live answering plans from $199/month for 100 minutes. Starter, Growth and Business tiers — no setup fees, no contracts, extra minutes at $1.99/min.",
  },
}

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <MinutePlans theme="light" ctaHref="/contact-us" />
      <IncludedFeatures />
      <FaqSection {...pricingFaq} />
      <DarkCtaBanner
        heading="Start Saving With Flat-Rate Answering"
        body="No per-minute billing, no hidden fees. Just professional receptionists answering your calls at a price that makes sense for your business."
        points={['Plans from $199/mo', 'No contracts', 'Free setup', 'Cancel anytime']}
        primary={{ href: '/contact-us', label: 'Get Started Today →' }}
        secondary={{ href: '/contact-us', label: 'Request Custom Quote' }}
      />
    </>
  )
}
