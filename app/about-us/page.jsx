import AboutHero from '@/features/about-us/AboutHero'
import OriginStory from '@/features/about-us/OriginStory'
import ByTheNumbers from '@/features/about-us/ByTheNumbers'
import Certifications from '@/features/about-us/Certifications'
import ServiceModel from '@/features/about-us/ServiceModel'
import TrainingProcess from '@/features/about-us/TrainingProcess'
import RecognitionPresence from '@/features/about-us/RecognitionPresence'
import FinalTrustCta from '@/features/about-us/FinalTrustCta'
import Testimonials from '@/components/Testimonials'

export const metadata = {
  title: "About Us | Live Phone Answering",
  description: "Learn more about Live Phone Answering, our mission, our US-based team, and how we help businesses grow with 24/7 professional answering services.",
  alternates: { canonical: "/about-us" },
  openGraph: {
    type: 'website',
    siteName: 'LivePhoneAnswering',
    locale: 'en_US',
    images: [{ url: '/images/Phone Answering Services.webp', width: 1122, height: 1402, alt: 'Live Phone Answering Service' }],
    title: "About Us | Live Phone Answering",
    description: "Learn more about Live Phone Answering, our mission, our US-based team, and how we help businesses grow with 24/7 professional answering services.",
    url: "/about-us",
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/Phone Answering Services.webp'],
    title: "About Us | Live Phone Answering",
    description: "Learn more about Live Phone Answering, our mission, our US-based team, and how we help businesses grow with 24/7 professional answering services.",
  },
}

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Live Phone Answering",
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Certification",
      "name": "HIPAA Compliance Certification"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Accreditation",
      "name": "Better Business Bureau (BBB) Accreditation"
    }
  ]
}

export default function AboutUsPage() {
  return (
    <>
      <main className="w-full">
        <AboutHero />
        <OriginStory />
        <ByTheNumbers />
        <Certifications />
        <ServiceModel />
        <TrainingProcess />
        <RecognitionPresence />
        <Testimonials />
        <FinalTrustCta />
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
    </>
  )
}
