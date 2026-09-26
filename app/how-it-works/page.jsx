import WhatYouGet from '@/features/how-it-works/WhatYouGet'
import HowItWorksHero from '@/features/how-it-works/HowItWorksHero'
import ProcessSteps from '@/components/ProcessSteps'
import CallFlow from '@/features/how-it-works/CallFlow'
import DarkCtaBanner from '@/components/DarkCtaBanner'
import FaqSection from '@/components/FaqSection'
import { howItWorksFaq } from '@/components/faq-content'
import Link from 'next/link'

export const metadata = {
  title: "How It Works — Setup in 5 Minutes | Live Phone Answering",
  description: "Forward your number, we answer as your business, and you get instant message alerts. See how our live answering service works — setup takes 5 minutes.",
  alternates: { canonical: "/how-it-works" },
  openGraph: {
    type: 'website',
    siteName: 'LivePhoneAnswering',
    locale: 'en_US',
    images: [{ url: '/images/Phone Answering Services.webp', width: 1122, height: 1402, alt: 'Live Phone Answering Service' }],
    title: "How It Works — Setup in 5 Minutes | Live Phone Answering",
    description: "Forward your number, we answer as your business, and you get instant message alerts. See how our live answering service works — setup takes 5 minutes.",
    url: "/how-it-works",
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/Phone Answering Services.webp'],
    title: "How It Works — Setup in 5 Minutes | Live Phone Answering",
    description: "Forward your number, we answer as your business, and you get instant message alerts. See how our live answering service works — setup takes 5 minutes.",
  },
}

export default function HowItWorksPage() {
  return (
    <>
      <HowItWorksHero />
      <ProcessSteps variant="light" id="how-it-works-steps" eyebrow="3 Simple Steps" />
      <CallFlow />
      <WhatYouGet />
      <FaqSection {...howItWorksFaq} />
      <DarkCtaBanner
        heading="Ready to Set Up in Under 5 Minutes?"
        body="Forward your number, share your script, and we start answering. It's that simple. No contracts, no setup fees, cancel anytime."
        points={['Setup in 5 minutes', 'No equipment needed', 'Free onboarding help', 'Cancel anytime']}
        primary={{ href: '/contact-us', label: 'Get Started Today →' }}
        secondary={{ href: '/pricing', label: 'View Pricing Plans' }}
      />
    </>
  )
}
