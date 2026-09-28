import FaqSection from '@/components/FaqSection'
import { virtualReceptionistFaq } from '@/components/faq-content'
import PricingSection from '@/components/PricingSection'
import { virtualReceptionistPricing } from '@/components/pricing-plans'
import IndustriesTabs from '@/components/IndustriesTabs'
import Link from 'next/link'
import VirtualReceptionistHero from '@/features/virtual-receptionist/VirtualReceptionistHero'
import FrontDeskIntro from '@/features/virtual-receptionist/FrontDeskIntro'
import CallHandling from '@/features/virtual-receptionist/CallHandling'
import Testimonials from '@/components/Testimonials'

export const metadata = {
  title: "Virtual Receptionist Service | Live Phone Answering",
  description: "Professional virtual receptionist service for US businesses. Real human receptionists answer every call 24/7 in your company's name. Get started today.",
  alternates: { canonical: "/virtual-receptionist" },
  openGraph: {
    type: 'website',
    siteName: 'LivePhoneAnswering',
    locale: 'en_US',
    images: [{ url: '/images/Phone Answering Services.webp', width: 1122, height: 1402, alt: 'Live Phone Answering Service' }],
    title: "Virtual Receptionist Service | Live Phone Answering",
    description: "Professional virtual receptionist service for US businesses. Real human receptionists answer every call 24/7 in your company's name. Get started today.",
    url: "/virtual-receptionist",
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/Phone Answering Services.webp'],
    title: "Virtual Receptionist Service | Live Phone Answering",
    description: "Professional virtual receptionist service for US businesses. Real human receptionists answer every call 24/7 in your company's name. Get started today.",
  },
}

export default function VirtualReceptionistPage() {
  return (
    <>
      {/* Main Content for Virtual Receptionist */}
      <main className="w-full">
        <VirtualReceptionistHero />
      {/* Trust Bar & Credibility Strip */}
      <section
        className="w-full bg-white border-t border-b border-gray-200 py-6 md:py-8 shadow-sm relative z-20 reveal reveal-delay-2"
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Screen Reader Accessibility */}
          <h4 className="sr-only">
            10,000+ businesses trust our virtual receptionists · Rated 4.9/5 · $4.6B industry · HIPAA Certified
          </h4>
          {/* The Flex Layout */}
          <div
            className="flex flex-wrap justify-center md:justify-between items-center gap-y-8 md:gap-y-0 md:divide-x md:divide-gray-200"
          >
            {/* Pillar 1 (Google Reviews) */}
            <div className="flex items-center justify-center gap-3 px-4 xl:px-6 w-full sm:w-1/2 md:w-auto">
              <div className="flex items-center gap-1.5">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                <div className="flex text-yellow-400">
                  <svg
                    className="w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                  <svg
                    className="w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                  <svg
                    className="w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                  <svg
                    className="w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                  <svg
                    className="w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                </div>
              </div>
              <span
                className="text-xs lg:text-sm font-bold text-gray-600 uppercase tracking-wide whitespace-nowrap"
              >
                4.9/5 Rating
              </span>
            </div>
            {/* Pillar 2 (HIPAA) */}
            <div className="flex items-center justify-center gap-3 px-4 xl:px-6 w-full sm:w-1/2 md:w-auto">
              <svg
                className="text-[#8CA365] w-6 h-6 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
              <span
                className="text-xs lg:text-sm font-bold text-gray-600 uppercase tracking-wide whitespace-nowrap"
              >
                HIPAA Certified
              </span>
            </div>
            {/* Pillar 3 (US-Based) */}
            <div className="flex items-center justify-center gap-3 px-4 xl:px-6 w-full sm:w-1/2 md:w-auto">
              <span className="text-2xl leading-none">
                🇺🇸
              </span>
              <span
                className="text-xs lg:text-sm font-bold text-gray-600 uppercase tracking-wide whitespace-nowrap"
              >
                100% US-Based
              </span>
            </div>
            {/* Pillar 4 (BBB Accreditation) */}
            <div className="flex items-center justify-center gap-3 px-4 xl:px-6 w-full sm:w-1/2 md:w-auto">
              <svg
                className="grayscale opacity-70 w-6 h-6 shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"
                />
              </svg>
              <span
                className="text-xs lg:text-sm font-bold text-gray-600 uppercase tracking-wide whitespace-nowrap"
              >
                A+ Accredited
              </span>
            </div>
            {/* Pillar 5 (Industry Authority) */}
            <div className="flex items-center justify-center gap-3 px-4 xl:px-6 w-full sm:w-1/2 md:w-auto">
              <svg
                className="text-[#8CA365] w-6 h-6 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
              <span
                className="text-xs lg:text-sm font-bold text-gray-600 uppercase tracking-wide whitespace-nowrap"
              >
                Leading the $4.6B+ Industry
              </span>
            </div>
          </div>
        </div>
      </section>
      <FrontDeskIntro />
      
      <CallHandling />
      {/* 4-Step Process & Sticky Audio Player Section */}
      <section className="w-full bg-slate-50 py-24 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#34414A] text-center mb-6 max-w-4xl mx-auto leading-tight"
          >
            How Our Virtual Receptionist Service Works — Up and Running in 5 Minutes
          </h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto text-lg leading-relaxed">
            Skip the complex tech integrations. Our seamless onboarding is designed to get you live, answering calls, and capturing leads before your next coffee break.
          </p>
          {/* The Split-Screen Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 relative items-start">
            {/* Left Column (The Vertical Timeline) */}
            <div className="lg:col-span-7 relative">
              {/* The Connecting Line */}
              <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gray-200 hidden md:block">
              </div>
              <div className="flex flex-col gap-10">
                {/* Step 1 */}
                <div className="relative flex items-start gap-6 group">
                  <div
                    className="w-12 h-12 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center text-gray-400 font-bold text-xl flex-shrink-0 z-10 group-hover:border-[#8CA365] group-hover:bg-[#8CA365] group-hover:text-white transition-all duration-300 shadow-sm"
                  >
                    1
                  </div>
                  <div className="pt-2">
                    <h3 className="text-xl font-bold text-[#34414A] mb-2">
                      Forward your existing business number to us
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Keep your current number. We provide a simple forwarding code so you maintain complete control over exactly when our receptionists jump in.
                    </p>
                  </div>
                </div>
                {/* Step 2 */}
                <div className="relative flex items-start gap-6 group">
                  <div
                    className="w-12 h-12 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center text-gray-400 font-bold text-xl flex-shrink-0 z-10 group-hover:border-[#8CA365] group-hover:bg-[#8CA365] group-hover:text-white transition-all duration-300 shadow-sm"
                  >
                    2
                  </div>
                  <div className="pt-2">
                    <h3 className="text-xl font-bold text-[#34414A] mb-2">
                      We set up your custom greeting and call script
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      You tell us exactly how you want your business represented. We build a tailored call flow to qualify your specific leads and handle routine FAQs.
                    </p>
                  </div>
                </div>
                {/* Step 3 */}
                <div className="relative flex items-start gap-6 group">
                  <div
                    className="w-12 h-12 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center text-gray-400 font-bold text-xl flex-shrink-0 z-10 group-hover:border-[#8CA365] group-hover:bg-[#8CA365] group-hover:text-white transition-all duration-300 shadow-sm"
                  >
                    3
                  </div>
                  <div className="pt-2">
                    <h3 className="text-xl font-bold text-[#34414A] mb-2">
                      Our receptionists answer every call as your business
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      A friendly, US-based professional answers using your exact business name, treating your callers with the same care an in-house team member would.
                    </p>
                  </div>
                </div>
                {/* Step 4 */}
                <div className="relative flex items-start gap-6 group">
                  <div
                    className="w-12 h-12 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center text-gray-400 font-bold text-xl flex-shrink-0 z-10 group-hover:border-[#8CA365] group-hover:bg-[#8CA365] group-hover:text-white transition-all duration-300 shadow-sm"
                  >
                    4
                  </div>
                  <div className="pt-2">
                    <h3 className="text-xl font-bold text-[#34414A] mb-2">
                      Instant message summaries delivered your way
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Get detailed call notes, lead information, and appointment confirmations instantly via SMS, email, or directly routed into your CRM.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Right Column (Sticky Proof Panel & Audio Player) */}
            <div className="lg:col-span-5 lg:sticky lg:top-32 flex flex-col gap-6">
              {/* The Audio Player Card */}
              <div
                className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 relative overflow-hidden"
              >
                <div
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#8CA365] mb-4 uppercase tracking-wider"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M3 18v-6a9 9 0 0118 0v6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                    <path
                      d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                  Listen to a real call
                </div>
                <h3 className="text-2xl font-bold text-[#34414A] mb-6">
                  Hear the LivePhoneAnswering Difference
                </h3>
                {/* The Player UI (Mockup) */}
                <div className="bg-slate-50 rounded-2xl p-4 flex items-center gap-4 border border-gray-200">
                  {/* Play Button */}
                  <div
                    className="w-12 h-12 rounded-full bg-[#8CA365] text-white flex items-center justify-center flex-shrink-0 cursor-pointer hover:scale-105 transition-transform shadow-md"
                  >
                    <svg
                      className="w-5 h-5 ml-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M4 4l12 6-12 6z" />
                    </svg>
                  </div>
                  {/* Waveform Placeholder */}
                  <div className="flex-grow h-8 flex items-center gap-1 opacity-50 justify-between px-2">
                    <div className="w-1 h-3 bg-[#8CA365] rounded-full">
                    </div>
                    <div className="w-1 h-6 bg-[#8CA365] rounded-full">
                    </div>
                    <div className="w-1 h-8 bg-[#8CA365] rounded-full">
                    </div>
                    <div className="w-1 h-4 bg-[#8CA365] rounded-full">
                    </div>
                    <div className="w-1 h-7 bg-[#8CA365] rounded-full">
                    </div>
                    <div className="w-1 h-3 bg-[#8CA365] rounded-full">
                    </div>
                    <div className="w-1 h-5 bg-[#8CA365] rounded-full">
                    </div>
                    <div className="w-1 h-8 bg-[#8CA365] rounded-full">
                    </div>
                    <div className="w-1 h-2 bg-[#8CA365] rounded-full">
                    </div>
                    <div className="w-1 h-6 bg-[#8CA365] rounded-full">
                    </div>
                    <div className="w-1 h-4 bg-gray-300 rounded-full">
                    </div>
                    <div className="w-1 h-7 bg-gray-300 rounded-full">
                    </div>
                    <div className="w-1 h-3 bg-gray-300 rounded-full">
                    </div>
                    <div className="w-1 h-6 bg-gray-300 rounded-full">
                    </div>
                    <div className="w-1 h-2 bg-gray-300 rounded-full">
                    </div>
                    <div className="w-1 h-5 bg-gray-300 rounded-full">
                    </div>
                    <div className="w-1 h-8 bg-gray-300 rounded-full">
                    </div>
                    <div className="w-1 h-3 bg-gray-300 rounded-full">
                    </div>
                    <div className="w-1 h-6 bg-gray-300 rounded-full">
                    </div>
                    <div className="w-1 h-4 bg-gray-300 rounded-full">
                    </div>
                  </div>
                  {/* Timer */}
                  <div className="text-xs font-semibold text-gray-500 flex-shrink-0">
                    0:00 / 1:24
                  </div>
                </div>
              </div>
              {/* The Operational Maturity Stats Block */}
              <div className="bg-[#34414A] rounded-2xl p-6 text-white shadow-lg">
                <div className="flex flex-col gap-4">
                  {/* Stat 1 */}
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-6 h-6 text-yellow-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                    <span className="text-sm font-medium">
                      Average setup time: 4 minutes 38 seconds.
                    </span>
                  </div>
                  {/* Stat 2 */}
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-6 h-6 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                      <path
                        d="M15 7h6m0 0l-3-3m3 3l-3 3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                    <span className="text-sm font-medium">
                      Average answer time: under 4 rings.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* AI + Human Advantage Section */}
      <section className="w-full bg-[#0f2925] py-24 px-4 relative overflow-hidden">
        {/* Premium Colorful Mesh Gradient Background */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {/* Glowing Orb 1 (Brand Green) */}
          <div
            className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-[#8CA365]/40 rounded-full blur-[120px] pointer-events-none"
          >
          </div>
          {/* Glowing Orb 2 (Bright Mint) */}
          <div
            className="absolute bottom-0 -right-20 w-[700px] h-[700px] bg-[#00cc7a]/20 rounded-full blur-[150px] pointer-events-none"
          >
          </div>
          {/* Glowing Orb 3 (Deep Teal) */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#215153]/60 rounded-full blur-[120px] pointer-events-none"
          >
          </div>
        </div>
        {/* Glowing accent */}
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8CA365] rounded-full mix-blend-screen filter blur-[150px] opacity-10 pointer-events-none"
        >
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header Section */}
          <div className="text-center">
            <div
              className="inline-block bg-[#8CA365]/10 text-[#8CA365] text-sm font-bold px-4 py-1.5 rounded-full mb-6 border border-[#8CA365]/20 uppercase tracking-widest"
            >
              The 2026 Standard
            </div>
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white text-center mb-6 max-w-4xl mx-auto leading-tight"
          >
            AI-Assisted, Human-Delivered: The Smarter Virtual Receptionist for 2026
          </h2>
          <p className="text-slate-400 text-center mb-16 max-w-3xl mx-auto text-lg leading-relaxed">
            Don't risk your reputation on frustrating voice bots. We use backend AI to route calls instantly, empowering our 100% real, US-based receptionists to deliver flawless, empathetic service.
          </p>
          {/* The Funnel Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1: The Backend Tech (Top Left) */}
            <div
              className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700 h-full"
            >
              <div
                className="w-12 h-12 text-blue-400 mb-6 bg-blue-400/10 p-3 rounded-xl flex items-center justify-center"
              >
                {/* Microchip/Server SVG */}
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                How AI Makes Our Human Receptionists Faster and Smarter
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Behind the scenes, our AI-assisted answering service instantly pulls up your business profile, custom scripts, and CRM data the second the phone rings. This allows our live agents to answer perfectly every single time.
              </p>
            </div>
            {/* Card 2: The Bot Warning (Top Right) */}
            <div
              className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700 h-full relative overflow-hidden"
            >
              <div
                className="w-12 h-12 text-red-400 mb-6 bg-red-400/10 p-3 rounded-xl flex items-center justify-center"
              >
                {/* Robot slash/Warning SVG */}
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Why Fully Automated AI Receptionists Still Fall Short
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                The debate of AI vs human receptionist ends when a customer is stressed. Automated bots struggle with accents, background noise, and complex emotions. A frustrating bot experience causes high-value leads to hang up.
              </p>
            </div>
            {/* Card 3: The Hybrid Advantage (Bottom Full-Width) */}
            <div
              className="md:col-span-2 bg-gradient-to-br from-[#8CA365]/20 to-slate-800/80 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-[#8CA365]/30 shadow-2xl flex flex-col md:flex-row items-center gap-8 lg:gap-12"
            >
              {/* Left Content Side */}
              <div className="flex-grow">
                <div className="w-16 h-16 text-[#8CA365] mb-6">
                  {/* Heart/Handshake/Lightning SVG */}
                  <svg
                    className="w-full h-full"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                    <path
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      opacity="0.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
                  The Hybrid Advantage: AI Speed, Human Empathy
                </h3>
                <p className="text-slate-300 leading-relaxed mb-8 max-w-2xl">
                  By combining cutting-edge backend routing with a premium human virtual receptionist in 2026, you get the absolute best of both worlds. The software ensures zero dropped calls, while our real humans build immediate trust and secure the booking.
                </p>
              </div>
              {/* Right Action Side (The Conversion Point) */}
              <div className="flex-shrink-0 w-full md:w-auto">
                <Link prefetch={false}
                  className="block w-full bg-[#8CA365] hover:bg-[#7a8f57] text-white text-center font-bold text-lg py-4 px-8 rounded-xl shadow-[0_0_20px_rgba(140,163,101,0.4)] hover:shadow-[0_0_30px_rgba(140,163,101,0.6)] hover:-translate-y-1 transition-all duration-300"
                  href="/pricing"
                >
                  Get the Hybrid Advantage
                </Link>
                <p
                  className="text-xs text-slate-400 text-center mt-3 uppercase tracking-wider font-semibold"
                >
                  100% Human Voice Guaranteed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <IndustriesTabs />
      <PricingSection {...virtualReceptionistPricing} />
      <Testimonials />
      {/* SECTION 9: FAQ (ACCORDION GRID) */}
      <FaqSection {...virtualReceptionistFaq} />
      {/* SECTION 10: FINAL CTA (DUAL PATH) */}
      <section className="bg-[#0f2925] py-24 px-4 relative overflow-hidden">
        {/* Premium Colorful Mesh Gradient Background */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {/* Glowing Orb 1 (Brand Green) */}
          <div
            className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-[#8CA365]/40 rounded-full blur-[120px] pointer-events-none"
          >
          </div>
          {/* Glowing Orb 2 (Bright Mint) */}
          <div
            className="absolute bottom-0 -right-20 w-[700px] h-[700px] bg-[#00cc7a]/20 rounded-full blur-[150px] pointer-events-none"
          >
          </div>
          {/* Glowing Orb 3 (Deep Teal) */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#215153]/60 rounded-full blur-[120px] pointer-events-none"
          >
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-[#8CA365]/10 to-transparent pointer-events-none"
        >
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column (Value & Phone Block) */}
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
                Start Your Virtual Receptionist Service Today
              </h2>
              <h3 className="text-xl text-slate-300 font-medium mb-10 max-w-lg leading-relaxed">
                No contracts. No setup fees. Cancel anytime. Just better call handling from day one.
              </h3>
              <div className="flex flex-col gap-4 mb-12">
                <div className="flex items-center gap-3 text-white text-lg">
                  <svg
                    className="w-6 h-6 text-[#8CA365]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                  Instant Setup — Live in Minutes
                </div>
                <div className="flex items-center gap-3 text-white text-lg">
                  <svg
                    className="w-6 h-6 text-[#8CA365]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                  100% Real US-Based Receptionists
                </div>
              </div>
              <div
                className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm max-w-md hover:bg-white/10 transition-colors"
              >
                <div
                  className="text-[#8CA365] font-bold text-sm uppercase tracking-wider mb-2 flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse">
                  </span>
                  A real receptionist answers
                </div>
                <a
                  className="block text-3xl md:text-4xl font-black text-white hover:text-[#8CA365] transition-colors mb-2"
                  href="tel:8574531055"
                >
                  (857) 453-1055
                </a>
                <div className="text-slate-400 text-sm">
                  Available 24/7/365 to take your call.
                </div>
              </div>
            </div>
            {/* Right Column (Get Started Form Card) */}
            <div>
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl relative">
                <h3 className="text-2xl font-bold text-[#34414A] mb-2">
                  Get Started Today
                </h3>
                <p className="text-gray-500 text-sm mb-8">
                  No setup fees. No long-term contracts.
                </p>
                <form
                  action="#"
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  method="POST"
                >
                  <div className="col-span-1 md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="fullName">
                      Full Name
                    </label>
                    <input
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#8CA365] focus:bg-white transition-all"
                      id="fullName"
                      name="fullName"
                      placeholder="John Doe"
                      required
                      type="text"
                    />
                  </div>
                  <div className="col-span-1">
                    <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="email">
                      Work Email
                    </label>
                    <input
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#8CA365] focus:bg-white transition-all"
                      id="email"
                      name="email"
                      placeholder="john@company.com"
                      required
                      type="email"
                    />
                  </div>
                  <div className="col-span-1">
                    <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="phone">
                      Phone Number
                    </label>
                    <input
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#8CA365] focus:bg-white transition-all"
                      id="phone"
                      name="phone"
                      placeholder="(555) 000-0000"
                      required
                      type="tel"
                    />
                  </div>
                  <div className="col-span-1 md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="industry">
                      Your Industry
                    </label>
                    <select
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#8CA365] focus:bg-white transition-all"
                      id="industry"
                      name="industry"
                      required
                      defaultValue=""
                    >
                      <option disabled value="">
                        Select Industry
                      </option>
                      <option value="home-services">
                        Home Services & Contractors
                      </option>
                      <option value="legal">
                        Legal
                      </option>
                      <option value="medical">
                        Medical & Healthcare
                      </option>
                      <option value="real-estate">
                        Real Estate
                      </option>
                      <option value="other">
                        Other
                      </option>
                    </select>
                  </div>
                  <div className="col-span-1 md:col-span-2">
                    <button
                      className="w-full bg-[#8CA365] hover:bg-[#7a8f57] text-white font-bold text-lg py-4 rounded-xl shadow-lg transition-transform hover:-translate-y-1 mt-8"
                      type="submit"
                    >
                      Get Started Now
                    </button>
                  </div>
                  <div className="col-span-1 md:col-span-2">
                    <p className="text-xs text-gray-400 mt-4 text-center">
                      By submitting, you agree to our Terms of Service and Privacy Policy. We never sell your data.
                    </p>
                  </div>
                </form>
                <Link prefetch={false}
                  className="block text-center mt-6 text-sm font-semibold text-gray-500 hover:text-[#8CA365] transition-colors"
                  href="/contact-us"
                >
                  Prefer to speak to us first? Contact Our Team →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>
    </>
  )
}
