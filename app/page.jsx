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
      {/* SECTION 3: PROBLEM-SOLUTION & COMPARISON */}
      <section className="bg-slate-50 py-20 px-4" id="compare">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Block 1: The Definition (Featured Snippet Box) */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#34414A] text-center mb-8">
              What is Live Phone Answering?
            </h2>
            <div
              className="max-w-3xl mx-auto bg-white rounded-r-lg border-l-4 border-[#8CA365] p-8 shadow-sm"
            >
              <p className="text-lg text-gray-700 leading-relaxed font-medium">
                A live answering service helps businesses stay available, build trust, and capture more leads without adding the cost of hiring full-time reception staff. It hires real people or smart virtual receptionists to answer your business calls when customers contact you.
              </p>
            </div>
          </div>
          {/* Block 2: The Pain Point Banner */}
          <div className="bg-[#34414A] rounded-2xl p-10 text-center shadow-lg relative overflow-hidden">
            {/* Background Pattern */}
            <div
              className="absolute inset-0 z-0 pointer-events-none opacity-20"
              style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "24px 24px" }}
            >
            </div>
            <div
              className="absolute -top-24 -right-24 w-64 h-64 bg-[#8CA365] rounded-full blur-3xl opacity-30 z-0"
            >
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4">
                The Hidden Cost of a Missed Call
              </h3>
              <p className="text-gray-200 max-w-4xl mx-auto text-lg">
                When a potential client hears a beep instead of a voice, 80% will simply hang up and call your competitor. The cost of missed calls isn't just a minor inconvenience—it represents thousands of dollars in lost revenue and a damaged brand reputation.
              </p>
            </div>
          </div>
          {/* Block 3: The Comparison Cards */}
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#34414A] text-center mb-10">
              Live Receptionists vs. Voicemail vs. AI Bots What Callers Actually Want
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
              {/* Card 1 (Voicemail) */}
              <div
                className="bg-white rounded-xl p-8 border border-gray-200 text-center opacity-80 flex flex-col"
              >
                <svg
                  className="w-12 h-12 text-gray-400 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                  />
                </svg>
                <h4 className="font-bold text-xl text-gray-800 mb-4">
                  Traditional Voicemail
                </h4>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>
                    High abandonment rates
                  </li>
                  <li>
                    Delays service delivery
                  </li>
                  <li>
                    Results in endless phone tag
                  </li>
                </ul>
              </div>
              {/* Card 2 (AI Bots) */}
              <div
                className="bg-white rounded-xl p-8 border border-gray-200 text-center opacity-80 flex flex-col"
              >
                <svg
                  className="w-12 h-12 text-gray-400 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                  <circle
                    cx="9"
                    cy="9"
                    r="1"
                    fill="currentColor"
                  />
                  <circle
                    cx="15"
                    cy="9"
                    r="1"
                    fill="currentColor"
                  />
                </svg>
                <h4 className="font-bold text-xl text-gray-800 mb-4">
                  Automated AI Bots
                </h4>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>
                    Frustrating for urgent issues
                  </li>
                  <li>
                    Struggles with nuance & accents
                  </li>
                  <li>
                    Feels impersonal to high-value leads
                  </li>
                </ul>
              </div>
              {/* Card 3 (Live Receptionists) */}
              <div
                className="bg-white rounded-xl p-8 border-2 border-[#8CA365] text-center shadow-xl relative flex flex-col"
              >
                <span
                  className="bg-[#8CA365] text-white text-xs font-bold px-3 py-1 rounded-full absolute -top-3 -right-3 shadow-md"
                >
                  Top Choice
                </span>
                <svg
                  className="w-12 h-12 text-[#8CA365] mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <h4 className="font-bold text-xl text-[#34414A] mb-4">
                  Live Receptionists
                </h4>
                <ul className="text-gray-700 font-medium space-y-2">
                  <li>
                    Empathetic & adaptable
                  </li>
                  <li>
                    Captures 100% of lead details
                  </li>
                  <li>
                    Callers feel valued & heard
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
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
