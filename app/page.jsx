import MinutePlans from '@/components/MinutePlans'
import BenefitsGrid from '@/features/homepage/BenefitsGrid'
import ContactFormSection from '@/components/ContactFormSection'
import FaqSection from '@/components/FaqSection'
import { homeFaq } from '@/components/faq-content'
import HumanVsBots from '@/features/homepage/HumanVsBots'
import IndustriesTabs from '@/components/IndustriesTabs'
import ProcessSteps from '@/components/ProcessSteps'
import CoreServices from '@/features/homepage/CoreServices'
import TrustBar from '@/features/homepage/TrustBar'
import HeroSection from '@/features/homepage/HeroSection'
import IntegrationsSection from '@/features/homepage/IntegrationsSection'
import ProblemSolution from '@/features/homepage/ProblemSolution'
import Testimonials from '@/components/Testimonials'

export const metadata = {
  title: "Live Phone Answering Services | Generate Leads While You Sleep",
  description: "Live Phone Answering helps businesses stay reachable, capture more leads, and deliver professional customer support with trusted live phone answering services.",
  alternates: { canonical: "/" },
  openGraph: {
    type: 'website',
    siteName: 'LivePhoneAnswering',
    locale: 'en_US',
    images: [{ url: '/images/Phone Answering Services.webp', width: 1122, height: 1402, alt: 'Live Phone Answering Service' }],
    title: "Live Phone Answering Services | Generate Leads While You Sleep",
    description: "Live Phone Answering helps businesses stay reachable, capture more leads, and deliver professional customer support with trusted live phone answering services.",
    url: "/",
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/Phone Answering Services.webp'],
    title: "Live Phone Answering Services | Generate Leads While You Sleep",
    description: "Live Phone Answering helps businesses stay reachable, capture more leads, and deliver professional customer support with trusted live phone answering services.",
  },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ProblemSolution />
      <BenefitsGrid />
      <CoreServices />
      <ProcessSteps variant="dark" id="how-it-works" />
      <IndustriesTabs />
      <MinutePlans />
      <IntegrationsSection />
      <Testimonials id="about-us" />
      <HumanVsBots />
      <FaqSection {...homeFaq} />
      <ContactFormSection theme="dark" />
      {/* FOOTER */}
      {/* EmailJS Integration */}
    </>
  )
}
