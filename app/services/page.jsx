import DarkCtaBanner from '@/components/DarkCtaBanner'
import FaqSection from '@/components/FaqSection'
import { servicesFaq } from '@/components/faq-content'
import ServicesHero from '@/features/services/ServicesHero'
import ServicesList from '@/features/services/ServicesList'
import WhyChooseUs from '@/features/services/WhyChooseUs'

export const metadata = {
  title: "Our Services | Live Phone Answering",
  description: "Virtual receptionist, medical answering, appointment scheduling, after-hours and bilingual answering services for US businesses. Explore the full range.",
  alternates: { canonical: "/services" },
  openGraph: {
    type: 'website',
    siteName: 'LivePhoneAnswering',
    locale: 'en_US',
    images: [{ url: '/images/Phone Answering Services.webp', width: 1122, height: 1402, alt: 'Live Phone Answering Service' }],
    title: "Our Services | Live Phone Answering",
    description: "Virtual receptionist, medical answering, appointment scheduling, after-hours and bilingual answering services for US businesses. Explore the full range.",
    url: "/services",
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/Phone Answering Services.webp'],
    title: "Our Services | Live Phone Answering",
    description: "Virtual receptionist, medical answering, appointment scheduling, after-hours and bilingual answering services for US businesses. Explore the full range.",
  },
}

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <WhyChooseUs />
      <FaqSection {...servicesFaq} />
      <DarkCtaBanner
        headingId="services-cta-heading"
        heading="Ready to Stop Missing Calls & Start Growing?"
        body="Join 2,400+ US businesses who trust our professional receptionists. Setup takes less than 5 minutes — no contracts, no hidden fees."
        points={[
          'No lock-in contracts',
          '100% US-based receptionists',
          '24/7/365 coverage',
          'HIPAA compliant',
        ]}
        primary={{ href: '/contact-us', label: 'Get Started Today →' }}
        secondary={{ href: '/pricing', label: 'View Pricing Plans' }}
      />
    </>
  )
}
