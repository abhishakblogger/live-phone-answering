import AboutHero from '@/features/about-us/AboutHero'
import OriginStory from '@/features/about-us/OriginStory'
import ByTheNumbers from '@/features/about-us/ByTheNumbers'
import Certifications from '@/features/about-us/Certifications'
import ServiceModel from '@/features/about-us/ServiceModel'
import FinalTrustCta from '@/features/about-us/FinalTrustCta'
import Link from 'next/link'
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
        {/* TRAINING & QUALITY PROCESS SECTION */}
        <section className="bg-slate-50 py-20 md:py-28 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center max-w-4xl mx-auto mb-14">
              <span
                className="inline-flex items-center rounded-full bg-[#E6F0EE] px-4 py-2 text-sm font-bold text-[#295657] mb-5"
              >
                Receptionist Training & Call Quality
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#34414A] leading-tight mb-6">
                How We Train Receptionists to Represent Your Business Professionally
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Our training process is designed to help every receptionist understand your workflow, speak with confidence, capture accurate details, and represent your business with professionalism.
              </p>
            </div>
            {/* Training Focus Areas */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-20">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 text-center">
                <div
                  className="w-11 h-11 mx-auto mb-3 rounded-xl bg-[#E6F0EE] flex items-center justify-center text-[#8CA365] font-extrabold"
                >
                  01
                </div>
                <p className="text-sm font-bold text-[#34414A]">
                  Brand Tone
                </p>
              </div>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 text-center">
                <div
                  className="w-11 h-11 mx-auto mb-3 rounded-xl bg-[#E6F0EE] flex items-center justify-center text-[#8CA365] font-extrabold"
                >
                  02
                </div>
                <p className="text-sm font-bold text-[#34414A]">
                  Greeting Flow
                </p>
              </div>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 text-center">
                <div
                  className="w-11 h-11 mx-auto mb-3 rounded-xl bg-[#E6F0EE] flex items-center justify-center text-[#8CA365] font-extrabold"
                >
                  03
                </div>
                <p className="text-sm font-bold text-[#34414A]">
                  Lead Qualification
                </p>
              </div>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 text-center">
                <div
                  className="w-11 h-11 mx-auto mb-3 rounded-xl bg-[#E6F0EE] flex items-center justify-center text-[#8CA365] font-extrabold"
                >
                  04
                </div>
                <p className="text-sm font-bold text-[#34414A]">
                  Appointment Scheduling
                </p>
              </div>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 text-center">
                <div
                  className="w-11 h-11 mx-auto mb-3 rounded-xl bg-[#E6F0EE] flex items-center justify-center text-[#8CA365] font-extrabold"
                >
                  05
                </div>
                <p className="text-sm font-bold text-[#34414A]">
                  Urgent Call Escalation
                </p>
              </div>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 text-center">
                <div
                  className="w-11 h-11 mx-auto mb-3 rounded-xl bg-[#E6F0EE] flex items-center justify-center text-[#8CA365] font-extrabold"
                >
                  06
                </div>
                <p className="text-sm font-bold text-[#34414A]">
                  Call Note Accuracy
                </p>
              </div>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 text-center">
                <div
                  className="w-11 h-11 mx-auto mb-3 rounded-xl bg-[#E6F0EE] flex items-center justify-center text-[#8CA365] font-extrabold"
                >
                  07
                </div>
                <p className="text-sm font-bold text-[#34414A]">
                  Customer Empathy
                </p>
              </div>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 text-center">
                <div
                  className="w-11 h-11 mx-auto mb-3 rounded-xl bg-[#E6F0EE] flex items-center justify-center text-[#8CA365] font-extrabold"
                >
                  08
                </div>
                <p className="text-sm font-bold text-[#34414A]">
                  Quality Review
                </p>
              </div>
            </div>
            {/* Phase Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Phase 1 */}
              <div
                className="relative bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 p-8 pt-12"
              >
                <div
                  className="absolute -top-7 left-8 w-14 h-14 rounded-full bg-[#34414A] text-white flex items-center justify-center text-lg font-extrabold shadow-lg border-4 border-slate-50"
                >
                  01
                </div>
                <h3 className="text-xl md:text-2xl font-extrabold text-[#34414A] leading-snug mb-4">
                  Learn Your Business Before the First Call
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We start by understanding your business type, services, caller needs, brand tone, and preferred call handling process.
                </p>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-sm text-gray-600">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-[#8CA365] flex-shrink-0">
                    </span>
                    Business type and service overview
                  </li>
                  <li className="flex gap-3 text-sm text-gray-600">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-[#8CA365] flex-shrink-0">
                    </span>
                    Common caller questions and requests
                  </li>
                  <li className="flex gap-3 text-sm text-gray-600">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-[#8CA365] flex-shrink-0">
                    </span>
                    Brand tone, greeting style, and call goals
                  </li>
                </ul>
              </div>
              {/* Phase 2 */}
              <div
                className="relative bg-white rounded-3xl border border-[#8CA365]/40 shadow-md hover:shadow-xl transition-all duration-300 p-8 pt-12 lg:-mt-6"
              >
                <div
                  className="absolute -top-7 left-8 w-14 h-14 rounded-full bg-[#295657] text-white flex items-center justify-center text-lg font-extrabold shadow-lg border-4 border-slate-50"
                >
                  02
                </div>
                <h3 className="text-xl md:text-2xl font-extrabold text-[#34414A] leading-snug mb-4">
                  Practice Scripts, Call Flow, and Lead Capture
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Receptionists practice your greeting, intake questions, appointment steps, message format, and routing rules.
                </p>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-sm text-gray-600">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-[#8CA365] flex-shrink-0">
                    </span>
                    Custom greeting and script practice
                  </li>
                  <li className="flex gap-3 text-sm text-gray-600">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-[#8CA365] flex-shrink-0">
                    </span>
                    Lead qualification and appointment handling
                  </li>
                  <li className="flex gap-3 text-sm text-gray-600">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-[#8CA365] flex-shrink-0">
                    </span>
                    Call notes, CRM updates, and message delivery
                  </li>
                </ul>
              </div>
              {/* Phase 3 */}
              <div
                className="relative bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 p-8 pt-12"
              >
                <div
                  className="absolute -top-7 left-8 w-14 h-14 rounded-full bg-[#34414A] text-white flex items-center justify-center text-lg font-extrabold shadow-lg border-4 border-slate-50"
                >
                  03
                </div>
                <h3 className="text-xl md:text-2xl font-extrabold text-[#34414A] leading-snug mb-4">
                  Review Calls and Improve Quality Over Time
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Training continues after onboarding with call review, script accuracy checks, and feedback for better caller experience.
                </p>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-sm text-gray-600">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-[#8CA365] flex-shrink-0">
                    </span>
                    Call quality and script adherence checks
                  </li>
                  <li className="flex gap-3 text-sm text-gray-600">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-[#8CA365] flex-shrink-0">
                    </span>
                    Accuracy review for notes and lead details
                  </li>
                  <li className="flex gap-3 text-sm text-gray-600">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-[#8CA365] flex-shrink-0">
                    </span>
                    Feedback loop for continuous improvement
                  </li>
                </ul>
              </div>
            </div>
            {/* Bottom Trust Note */}
            <div
              className="mt-14 max-w-4xl mx-auto bg-white rounded-3xl border border-[#8CA365]/20 shadow-sm p-6 md:p-8 text-center"
            >
              <p className="text-[#34414A] font-semibold leading-relaxed">
                The result is a trained answering team that understands your business, follows your workflow, captures the right details, and gives callers a professional human experience.
              </p>
            </div>
          </div>
        </section>
        {/* RECOGNITION & INDUSTRY PRESENCE SECTION */}
        <section className="bg-[#0B1120] py-32 px-4 relative overflow-hidden">
          {/* The Spotlight Orb */}
          <div
            className="absolute top-1/2 right-0 w-[600px] lg:w-[800px] h-[600px] lg:h-[800px] bg-[#8CA365] rounded-full mix-blend-screen filter blur-[150px] opacity-10 translate-x-1/4 -translate-y-1/2 pointer-events-none"
          >
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
            {/* Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
              {/* Left Column (The Anchor & Stamp of Approval - span 5) */}
              <div className="lg:col-span-5 lg:sticky lg:top-32 flex flex-col">
                {/* Eyebrow */}
                <div
                  className="inline-flex items-center gap-2 bg-[#8CA365]/10 text-[#8CA365] text-xs font-bold px-4 py-1.5 rounded-full mb-8 border border-[#8CA365]/20 uppercase tracking-widest w-max"
                >
                  Industry Recognition
                </div>
                {/* Main Title */}
                <span
                  className="block text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 mb-6 leading-tight tracking-tight"
                >
                  Recognition & Industry Presence — Rooted in the Business Community
                </span>
                {/* Sub-headline */}
                <p className="text-slate-400 mb-12 text-lg leading-relaxed">
                  True authority isn't just about the calls we answer; it's about the communities we support and the industry standards we actively uphold.
                </p>
                {/* The Logo Stamp (Mini-Grid) */}
                <div>
                  <span className="block text-sm font-bold text-slate-500 uppercase tracking-wider mb-6">
                    Recognized By & Associated With
                  </span>
                  <div className="flex flex-wrap gap-8 items-center opacity-60">
                    {/* Placeholder Logo 1 */}
                    <svg
                      className="h-8 w-auto object-contain grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300 cursor-default brightness-200 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                    {/* Placeholder Logo 2 */}
                    <svg
                      className="h-8 w-auto object-contain grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300 cursor-default brightness-200 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"
                      />
                    </svg>
                    {/* Placeholder Logo 3 */}
                    <svg
                      className="h-8 w-auto object-contain grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300 cursor-default brightness-200 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                      />
                    </svg>
                    {/* Placeholder Logo 4 */}
                    <svg
                      className="h-8 w-auto object-contain grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300 cursor-default brightness-200 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              {/* Right Column (The Exhibition Plaques - span 7) */}
              <div className="lg:col-span-7 flex flex-col gap-8">
                {/* Plaque 1 (Standards) */}
                <div
                  className="group relative p-10 rounded-3xl bg-slate-800/40 backdrop-blur-2xl border border-slate-700/50 hover:bg-slate-800/60 hover:border-[#8CA365]/60 transition-all duration-500 overflow-hidden shadow-2xl before:absolute before:inset-0 before:bg-gradient-to-br before:from-[#8CA365]/10 before:to-transparent before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-500"
                >
                  {/* Accent Bar */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#8CA365] to-transparent opacity-50 group-hover:opacity-100 transition-opacity"
                  >
                  </div>
                  {/* Icon Wrapper */}
                  <div
                    className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#8CA365] mb-8 group-hover:-translate-y-1 group-hover:shadow-[0_0_20px_rgba(140,163,101,0.2)] transition-all duration-500 relative z-10"
                  >
                    <svg
                      className="w-7 h-7"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  {/* Title */}
                  <span
                    className="block text-2xl font-bold text-white mb-4 leading-snug tracking-wide relative z-10"
                  >
                    Upholding the Highest Industry Standards
                  </span>
                  {/* Body Text */}
                  <p
                    className="text-slate-400 text-base leading-relaxed relative z-10 group-hover:text-slate-300 transition-colors"
                  >
                    As active participants in regional business networks and B2B service associations, we stay at the absolute forefront of operational best practices. By engaging with industry leaders and continuously refining our protocols, we ensure our clients always receive a service level that exceeds standard industry benchmarks.
                  </p>
                </div>
                {/* Plaque 2 (Community) */}
                <div
                  className="group relative p-10 rounded-3xl bg-slate-800/40 backdrop-blur-2xl border border-slate-700/50 hover:bg-slate-800/60 hover:border-[#8CA365]/60 transition-all duration-500 overflow-hidden shadow-2xl before:absolute before:inset-0 before:bg-gradient-to-br before:from-[#8CA365]/10 before:to-transparent before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-500"
                >
                  {/* Accent Bar */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#8CA365] to-transparent opacity-50 group-hover:opacity-100 transition-opacity"
                  >
                  </div>
                  {/* Icon Wrapper */}
                  <div
                    className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#8CA365] mb-8 group-hover:-translate-y-1 group-hover:shadow-[0_0_20px_rgba(140,163,101,0.2)] transition-all duration-500 relative z-10"
                  >
                    <svg
                      className="w-7 h-7"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </div>
                  {/* Title */}
                  <span
                    className="block text-2xl font-bold text-white mb-4 leading-snug tracking-wide relative z-10"
                  >
                    Empowering Local Business Growth
                  </span>
                  {/* Body Text */}
                  <p
                    className="text-slate-400 text-base leading-relaxed relative z-10 group-hover:text-slate-300 transition-colors"
                  >
                    We believe that local service businesses are the backbone of the economy. Beyond our daily call-answering operations, we dedicate time, insights, and resources to entrepreneurial networks. Our mission extends to helping contractors, legal professionals, and service owners scale their operations, capture more leads, and create local jobs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Testimonials />
        <FinalTrustCta />
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
    </>
  )
}
