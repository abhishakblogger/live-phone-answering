import Link from 'next/link'

export const metadata = {
  title: "Virtual Receptionist Service | Live Phone Answering",
  description: "Professional virtual receptionist service for US businesses. Real human receptionists answer every call 24/7 in your company's name. Get started today.",
  alternates: { canonical: "/virtual-receptionist" },
}

export default function VirtualReceptionistPage() {
  return (
    <>
      {/* Main Content for Virtual Receptionist */}
      <main
        className="bg-gradient-to-br from-slate-50 to-white min-h-[85vh] flex items-center relative overflow-hidden pt-24 pb-20 lg:pt-32 lg:pb-32"
      >
        <div className="max-w-7xl mx-auto px-4 py-20 lg:py-0 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column (Copy & Conversion) */}
            <div className="reveal reveal-delay-1">
              {/* Eyebrow */}
              <div
                className="inline-flex items-center gap-2 bg-green-50 text-green-700 text-sm font-bold px-4 py-1.5 rounded-full mb-6 border border-green-200"
              >
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse">
                </span>
                Live Virtual Receptionist Platform
              </div>
              {/* H1 */}
              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#34414A] leading-tight mb-6"
              >
                Virtual Receptionist Service — Real People Answering Every Call, 24/7
              </h1>
              {/* Subheadline */}
              <h3 className="text-lg text-gray-600 leading-relaxed mb-8 max-w-lg">
                Sound like a Fortune 500 company from day one. Our US-based virtual receptionists handle your calls while you focus on growing your business.
              </h3>
              {/* 4-Bullet Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {/* Item 1 */}
                <div className="flex items-start gap-3">
                  <svg
                    className="text-[#8CA365] w-5 h-5 mt-0.5 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                  <span className="text-sm text-gray-700 font-medium">
                    24/7 Live Answering
                  </span>
                </div>
                {/* Item 2 */}
                <div className="flex items-start gap-3">
                  <svg
                    className="text-[#8CA365] w-5 h-5 mt-0.5 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                  <span className="text-sm text-gray-700 font-medium">
                    100% US-Based Team
                  </span>
                </div>
                {/* Item 3 */}
                <div className="flex items-start gap-3">
                  <svg
                    className="text-[#8CA365] w-5 h-5 mt-0.5 shrink-0"
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
                  <span className="text-sm text-gray-700 font-medium">
                    HIPAA-Ready & Secure
                  </span>
                </div>
                {/* Item 4 */}
                <div className="flex items-start gap-3">
                  <svg
                    className="text-[#8CA365] w-5 h-5 mt-0.5 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                  <span className="text-sm text-gray-700 font-medium">
                    Zero Long-Term Contracts
                  </span>
                </div>
              </div>
              {/* CTA Group */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  className="bg-[#8CA365] hover:bg-[#7a8f57] text-white font-bold py-3.5 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 text-center"
                  href="/pricing"
                >
                  Get Started Now
                </Link>
                <Link
                  className="bg-white border-2 border-[#34414A] text-[#34414A] hover:bg-slate-50 font-bold py-3.5 px-8 rounded-xl transition-colors text-center"
                  href="/contact-us"
                >
                  Get a Custom Quote
                </Link>
              </div>
            </div>
            {/* Right Column (The Interactive Visual) */}
            <div
              className="relative w-full max-w-lg mx-auto lg:ml-auto h-[500px] lg:h-[600px] reveal reveal-delay-3"
            >
              {/* Main Visual */}
              <img
                alt="Professional Virtual Receptionist"
                className="w-full h-full object-cover rounded-3xl shadow-2xl border border-gray-100"
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
              />
              {/* Floating UI Mockup */}
              <div
                className="absolute -bottom-8 -left-8 md:-left-12 bg-white/90 backdrop-blur-md rounded-2xl p-5 shadow-2xl border border-white w-72 animate-float"
              >
                {/* Top Row */}
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Incoming Call
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse">
                  </span>
                </div>
                {/* Caller ID */}
                <div className="text-lg font-extrabold text-[#34414A] mb-1">
                  (555) 019-8372
                </div>
                {/* Status */}
                <span
                  className="inline-block bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-md mb-4"
                >
                  Answered in 2s
                </span>
                {/* Bottom Row */}
                <div className="flex items-center gap-3 border-t border-gray-100 pt-3">
                  <div
                    className="w-6 h-6 rounded-full bg-[#34414A] text-white flex items-center justify-center text-[10px] font-bold"
                  >
                    JD
                  </div>
                  <span className="text-sm text-gray-600 font-medium">
                    Routed to Sales Team
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
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
      {/* Definition & 3-Way Comparison Section */}
      <section className="w-full bg-slate-50 py-24 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Top Block (The Featured Snippet Target) */}
          <div className="max-w-4xl mx-auto mb-20 reveal">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#34414A] text-center mb-8">
              What Is a Virtual Receptionist Service? (And Why Your Business Needs One)
            </h2>
            <div className="bg-white rounded-r-2xl border-l-8 border-[#8CA365] p-8 md:p-10 shadow-md">
              <p className="text-gray-700 text-lg leading-relaxed font-medium">
                A virtual receptionist service provides remote, live professionals who handle your inbound calls, schedule appointments, and perform basic intake tasks. Unlike a standard answering service, a virtual receptionist acts as a seamless extension of your in-house team, elevating customer experience while saving you the overhead of a full-time employee.
              </p>
            </div>
          </div>
          {/* Bottom Block (The 3-Way Comparison Grid) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Card 1 (Cost) */}
            <div
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative mt-6 reveal reveal-delay-1"
            >
              <span
                className="absolute -top-4 right-6 bg-[#34414A] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-sm"
              >
                VS. IN-HOUSE
              </span>
              <div
                className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center text-[#8CA365] mb-6"
              >
                {/* Briefcase / Dollar SVG */}
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#34414A] mb-4 leading-snug">
                Virtual Receptionist vs. In-House Receptionist — True Cost Comparison
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Hiring an in-house receptionist costs between $35,000 and $45,000 annually, plus benefits, training, and sick days. In contrast, a virtual receptionist service provides 24/7 coverage starting at just a fraction of that cost per month. You only pay for the time they spend actively handling your calls, making it the most cost-effective way to scale your business.
              </p>
            </div>
            {/* Card 2 (Quality) */}
            <div
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative mt-6 reveal reveal-delay-2"
            >
              <span
                className="absolute -top-4 right-6 bg-[#34414A] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-sm"
              >
                VS. ANSWERING SERVICE
              </span>
              <div
                className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center text-[#8CA365] mb-6"
              >
                {/* Headset SVG */}
                <svg
                  className="w-7 h-7"
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
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#34414A] mb-4 leading-snug">
                Virtual Receptionist vs. Answering Service — What's the Difference?
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                While a traditional answering service simply takes messages and forwards calls, a virtual receptionist provides a premium, interactive experience. They are trained on your specific business processes to confidently answer FAQs, qualify inbound leads, process orders, and book appointments directly into your calendar, acting exactly like an in-house team member.
              </p>
            </div>
            {/* Card 3 (Technology) */}
            <div
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative mt-6 reveal reveal-delay-3"
            >
              <span
                className="absolute -top-4 right-6 bg-[#34414A] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-sm"
              >
                VS. AI BOTS
              </span>
              <div
                className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center text-[#8CA365] mb-6"
              >
                {/* Robot Face / Monitor SVG */}
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#34414A] mb-4 leading-snug">
                Virtual Receptionist vs. AI Bot — Why Human Still Wins in 2026
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Despite advances in technology, AI receptionists still struggle with background noise, complex accents, and nuanced customer emotions. A human virtual receptionist provides immediate empathy, critical thinking, and the ability to pivot during complex conversations. Real human connection remains the ultimate competitive advantage for converting high-value leads and delivering exceptional customer service.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* 8-Feature Grid Section */}
      <section className="w-full bg-[#8CA365] py-32 px-4 relative overflow-hidden">
        {/* Animated Background Orbs */}
        <div
          className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-white/20 rounded-full blur-[120px] animate-pulse pointer-events-none"
        >
        </div>
        <div
          className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-white/10 rounded-full blur-[150px] animate-pulse pointer-events-none delay-1000"
        >
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header Section */}
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white text-center mb-8 max-w-4xl mx-auto leading-tight tracking-tight drop-shadow-md"
          >
            Everything Our Virtual Receptionist Service Includes — No Hidden Extras
          </h2>
          <p className="text-green-50 text-center mb-20 max-w-2xl mx-auto text-lg leading-relaxed">
            Stop paying à la carte for essential business tools. Every account comes fully loaded with the premium features you need to scale your operations globally.
          </p>
          {/* The Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div
              className="group relative p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 hover:border-white/40 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] transition-all duration-500 overflow-hidden cursor-default before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:to-transparent before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-500"
            >
              <div
                className="w-14 h-14 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center text-white mb-8 group-hover:-translate-y-2 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] group-hover:bg-white group-hover:text-[#8CA365] transition-all duration-500 relative z-10"
              >
                {/* Clock/24 SVG */}
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-4 leading-snug tracking-wide relative z-10">
                24/7 Live Call Answering — Day, Night, Weekends & Holidays
              </h3>
              <p
                className="text-white/80 text-sm leading-relaxed relative z-10 group-hover:text-white transition-colors"
              >
                We never sleep so you can. Capture every midnight emergency repair, weekend inquiry, or after-hours lead with a professional, live voice.
              </p>
            </div>
            {/* Card 2 */}
            <div
              className="group relative p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 hover:border-white/40 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] transition-all duration-500 overflow-hidden cursor-default before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:to-transparent before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-500"
            >
              <div
                className="w-14 h-14 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center text-white mb-8 group-hover:-translate-y-2 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] group-hover:bg-white group-hover:text-[#8CA365] transition-all duration-500 relative z-10"
              >
                {/* Code/Script SVG */}
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-4 leading-snug tracking-wide relative z-10">
                Custom Scripts & Personalized Greetings in Your Business Name
              </h3>
              <p
                className="text-white/80 text-sm leading-relaxed relative z-10 group-hover:text-white transition-colors"
              >
                We don't sound like a call center; we sound like you. We answer with your exact business name and follow a tailored script to seamlessly match your brand's tone.
              </p>
            </div>
            {/* Card 3 */}
            <div
              className="group relative p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 hover:border-white/40 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] transition-all duration-500 overflow-hidden cursor-default before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:to-transparent before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-500"
            >
              <div
                className="w-14 h-14 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center text-white mb-8 group-hover:-translate-y-2 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] group-hover:bg-white group-hover:text-[#8CA365] transition-all duration-500 relative z-10"
              >
                {/* Calendar SVG */}
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-4 leading-snug tracking-wide relative z-10">
                Appointment Scheduling & Calendar Management
              </h3>
              <p
                className="text-white/80 text-sm leading-relaxed relative z-10 group-hover:text-white transition-colors"
              >
                Wake up to a booked calendar. Our virtual receptionist appointment scheduling integrates directly with your software to book, modify, or cancel appointments in real-time.
              </p>
            </div>
            {/* Card 4 */}
            <div
              className="group relative p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 hover:border-white/40 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] transition-all duration-500 overflow-hidden cursor-default before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:to-transparent before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-500"
            >
              <div
                className="w-14 h-14 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center text-white mb-8 group-hover:-translate-y-2 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] group-hover:bg-white group-hover:text-[#8CA365] transition-all duration-500 relative z-10"
              >
                {/* Target/Crosshair SVG */}
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-4 leading-snug tracking-wide relative z-10">
                Lead Capture, Qualification & CRM Handoff
              </h3>
              <p
                className="text-white/80 text-sm leading-relaxed relative z-10 group-hover:text-white transition-colors"
              >
                Stop wasting time on tire-kickers. We execute precise virtual receptionist lead capture, asking your qualifying questions and pushing the hot leads straight into your CRM.
              </p>
            </div>
            {/* Card 5 */}
            <div
              className="group relative p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 hover:border-white/40 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] transition-all duration-500 overflow-hidden cursor-default before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:to-transparent before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-500"
            >
              <div
                className="w-14 h-14 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center text-white mb-8 group-hover:-translate-y-2 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] group-hover:bg-white group-hover:text-[#8CA365] transition-all duration-500 relative z-10"
              >
                {/* Network/Routing SVG */}
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-4 leading-snug tracking-wide relative z-10">
                Call Screening, Routing & Transfer to the Right Person
              </h3>
              <p
                className="text-white/80 text-sm leading-relaxed relative z-10 group-hover:text-white transition-colors"
              >
                Block the spam and prioritize the buyers. Intelligent virtual receptionist call routing ensures urgent jobs get dispatched to your cell, while routine questions are handled for you.
              </p>
            </div>
            {/* Card 6 */}
            <div
              className="group relative p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 hover:border-white/40 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] transition-all duration-500 overflow-hidden cursor-default before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:to-transparent before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-500"
            >
              <div
                className="w-14 h-14 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center text-white mb-8 group-hover:-translate-y-2 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] group-hover:bg-white group-hover:text-[#8CA365] transition-all duration-500 relative z-10"
              >
                {/* Globe SVG */}
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-4 leading-snug tracking-wide relative z-10">
                Bilingual Receptionists — English & Spanish
              </h3>
              <p
                className="text-white/80 text-sm leading-relaxed relative z-10 group-hover:text-white transition-colors"
              >
                Never lose a job due to a language barrier again. A bilingual virtual receptionist ensures you can confidently capture the rapidly growing Spanish-speaking market.
              </p>
            </div>
            {/* Card 7 */}
            <div
              className="group relative p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 hover:border-white/40 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] transition-all duration-500 overflow-hidden cursor-default before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:to-transparent before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-500"
            >
              <div
                className="w-14 h-14 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center text-white mb-8 group-hover:-translate-y-2 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] group-hover:bg-white group-hover:text-[#8CA365] transition-all duration-500 relative z-10"
              >
                {/* Shield/Lock SVG */}
                <svg
                  className="w-6 h-6"
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
              </div>
              <h3 className="text-lg font-bold text-white mb-4 leading-snug tracking-wide relative z-10">
                HIPAA-Compliant Call Handling for Medical Businesses
              </h3>
              <p
                className="text-white/80 text-sm leading-relaxed relative z-10 group-hover:text-white transition-colors"
              >
                Fully secure and strictly confidential. A dedicated HIPAA virtual receptionist safely handles patient intake, urgent on-call doctor dispatch, and sensitive medical data.
              </p>
            </div>
            {/* Card 8 */}
            <div
              className="group relative p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 hover:border-white/40 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] transition-all duration-500 overflow-hidden cursor-default before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:to-transparent before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-500"
            >
              <div
                className="w-14 h-14 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center text-white mb-8 group-hover:-translate-y-2 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] group-hover:bg-white group-hover:text-[#8CA365] transition-all duration-500 relative z-10"
              >
                {/* Zap/Lightning SVG */}
                <svg
                  className="w-6 h-6"
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
              </div>
              <h3 className="text-lg font-bold text-white mb-4 leading-snug tracking-wide relative z-10">
                Instant Message Delivery via Text, Email & App
              </h3>
              <p
                className="text-white/80 text-sm leading-relaxed relative z-10 group-hover:text-white transition-colors"
              >
                Stay in the loop without being tied to the phone. Get instant notifications the second a call ends with accurate, detailed notes sent right to your pocket.
              </p>
            </div>
          </div>
        </div>
      </section>
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
            className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-[#8CA365]/40 rounded-full blur-[120px] animate-pulse pointer-events-none"
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
                <Link
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
      {/* INDUSTRIES WE SERVE */}
      <section className="py-20 md:py-32 bg-white font-sans relative overflow-hidden" id="industries">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#34414A] tracking-tight mb-4">
              Trained for your exact workflow.
            </h2>
            <p className="text-lg text-gray-600">
              We serve over 50+ verticals. Select your category to see how we integrate seamlessly into your specialized software and daily operations.
            </p>
          </div>
          {/* Tab Navigation Bar */}
          <div
            className="flex flex-nowrap overflow-x-auto justify-start md:justify-center gap-2 md:gap-8 border-b border-gray-100 mb-12 pb-px no-scroll reveal reveal-delay-1"
            id="industry-tabs"
          >
            <button
              className="industry-tab-btn whitespace-nowrap px-4 py-3 text-sm md:text-base font-bold text-[#8CA365] border-b-2 border-[#8CA365] transition-colors flex items-center gap-2"
              data-target="panel-healthcare"
            >
              <svg
                className="w-5 h-5 hidden sm:block"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
              Healthcare & Medical
            </button>
            <button
              className="industry-tab-btn whitespace-nowrap px-4 py-3 text-sm md:text-base font-medium text-gray-500 hover:text-[#34414A] border-b-2 border-transparent hover:border-gray-300 transition-colors flex items-center gap-2"
              data-target="panel-professional"
            >
              <svg
                className="w-5 h-5 hidden sm:block"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
              Legal & Professional
            </button>
            <button
              className="industry-tab-btn whitespace-nowrap px-4 py-3 text-sm md:text-base font-medium text-gray-500 hover:text-[#34414A] border-b-2 border-transparent hover:border-gray-300 transition-colors flex items-center gap-2"
              data-target="panel-home-services"
            >
              <svg
                className="w-5 h-5 hidden sm:block"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
              Home Services
            </button>
            <button
              className="industry-tab-btn whitespace-nowrap px-4 py-3 text-sm md:text-base font-medium text-gray-500 hover:text-[#34414A] border-b-2 border-transparent hover:border-gray-300 transition-colors flex items-center gap-2"
              data-target="panel-specialized"
            >
              <svg
                className="w-5 h-5 hidden sm:block"
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
              Specialized
            </button>
          </div>
          {/* Tab Panels Container */}
          <div className="max-w-5xl mx-auto min-h-[300px] reveal reveal-delay-2">
            {/* PANEL 1: HEALTHCARE (ACTIVE) */}
            <div className="industry-panel block animate-fadeIn" id="panel-healthcare">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-5">
                  <h3 className="text-2xl font-bold text-[#34414A] mb-4">
                    Patient-first answering.
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Our HIPAA-compliant agents are trained to handle sensitive patient data, route emergency escalations accurately, and schedule appointments directly into your EMR/EHR systems.
                  </p>
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold tracking-wide border border-blue-100 uppercase"
                  >
                    HIPAA Compliant
                  </div>
                </div>
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Link
                    className="group p-5 bg-gray-50 border border-gray-100 rounded-2xl hover:bg-white hover:border-[#8CA365] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-between"
                    href="/medical-answering-service"
                  >
                    <span className="font-bold text-[#34414A] group-hover:text-[#8CA365] transition-colors">
                      Medical Clinics
                    </span>
                    <svg
                      className="w-5 h-5 text-gray-400 group-hover:text-[#8CA365] transform transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </Link>
                  <Link
                    className="group p-5 bg-gray-50 border border-gray-100 rounded-2xl hover:bg-white hover:border-[#8CA365] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-between"
                    href="/medical-answering-service"
                  >
                    <span className="font-bold text-[#34414A] group-hover:text-[#8CA365] transition-colors">
                      Dental Offices
                    </span>
                    <svg
                      className="w-5 h-5 text-gray-400 group-hover:text-[#8CA365] transform transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </Link>
                  <Link
                    className="group p-5 bg-gray-50 border border-gray-100 rounded-2xl hover:bg-white hover:border-[#8CA365] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-between"
                    href="/medical-answering-service"
                  >
                    <span className="font-bold text-[#34414A] group-hover:text-[#8CA365] transition-colors">
                      Specialists & Surgeons
                    </span>
                    <svg
                      className="w-5 h-5 text-gray-400 group-hover:text-[#8CA365] transform transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </Link>
                  <Link
                    className="group p-5 bg-gray-50 border border-gray-100 rounded-2xl hover:bg-white hover:border-[#8CA365] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-between"
                    href="/medical-answering-service"
                  >
                    <span className="font-bold text-[#34414A] group-hover:text-[#8CA365] transition-colors">
                      Pharmacies
                    </span>
                    <svg
                      className="w-5 h-5 text-gray-400 group-hover:text-[#8CA365] transform transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </Link>
                  <Link
                    className="group p-5 bg-gray-50 border border-gray-100 rounded-2xl hover:bg-white hover:border-[#8CA365] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-between sm:col-span-2"
                    href="/medical-answering-service"
                  >
                    <span className="font-bold text-[#34414A] group-hover:text-[#8CA365] transition-colors">
                      Home Health & Hospice
                    </span>
                    <svg
                      className="w-5 h-5 text-gray-400 group-hover:text-[#8CA365] transform transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            {/* PANEL 2: LEGAL & PROFESSIONAL (HIDDEN) */}
            <div className="industry-panel hidden" id="panel-professional">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-5">
                  <h3 className="text-2xl font-bold text-[#34414A] mb-4">
                    Protecting your firm's time.
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    We act as the front line for your firm, filtering out spam, completing complex legal intake forms, and routing high-value prospects directly to your cell.
                  </p>
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-bold tracking-wide border border-slate-200 uppercase"
                  >
                    Confidential Intake
                  </div>
                </div>
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Link
                    className="group p-5 bg-gray-50 border border-gray-100 rounded-2xl hover:bg-white hover:border-[#8CA365] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-between"
                    href="/virtual-receptionist"
                  >
                    <span className="font-bold text-[#34414A] group-hover:text-[#8CA365] transition-colors">
                      Law Firms
                    </span>
                    <svg
                      className="w-5 h-5 text-gray-400 group-hover:text-[#8CA365] transform transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </Link>
                  <Link
                    className="group p-5 bg-gray-50 border border-gray-100 rounded-2xl hover:bg-white hover:border-[#8CA365] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-between"
                    href="/virtual-receptionist"
                  >
                    <span className="font-bold text-[#34414A] group-hover:text-[#8CA365] transition-colors">
                      Real Estate Brokers
                    </span>
                    <svg
                      className="w-5 h-5 text-gray-400 group-hover:text-[#8CA365] transform transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </Link>
                  <Link
                    className="group p-5 bg-gray-50 border border-gray-100 rounded-2xl hover:bg-white hover:border-[#8CA365] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-between"
                    href="/virtual-receptionist"
                  >
                    <span className="font-bold text-[#34414A] group-hover:text-[#8CA365] transition-colors">
                      Accounting & CPA
                    </span>
                    <svg
                      className="w-5 h-5 text-gray-400 group-hover:text-[#8CA365] transform transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </Link>
                  <Link
                    className="group p-5 bg-gray-50 border border-gray-100 rounded-2xl hover:bg-white hover:border-[#8CA365] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-between"
                    href="/virtual-receptionist"
                  >
                    <span className="font-bold text-[#34414A] group-hover:text-[#8CA365] transition-colors">
                      Insurance Agencies
                    </span>
                    <svg
                      className="w-5 h-5 text-gray-400 group-hover:text-[#8CA365] transform transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </Link>
                  <Link
                    className="group p-5 bg-gray-50 border border-gray-100 rounded-2xl hover:bg-white hover:border-[#8CA365] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-between sm:col-span-2"
                    href="/virtual-receptionist"
                  >
                    <span className="font-bold text-[#34414A] group-hover:text-[#8CA365] transition-colors">
                      Financial Advisors
                    </span>
                    <svg
                      className="w-5 h-5 text-gray-400 group-hover:text-[#8CA365] transform transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            {/* PANEL 3: HOME SERVICES (HIDDEN) */}
            <div className="industry-panel hidden" id="panel-home-services">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-5">
                  <h3 className="text-2xl font-bold text-[#34414A] mb-4">
                    Book jobs while you're in the field.
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Never lose a job to a competitor because you were on a roof or under a sink. We qualify leads and book them straight into ServiceTitan or Housecall Pro.
                  </p>
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 text-amber-700 text-xs font-bold tracking-wide border border-amber-100 uppercase"
                  >
                    CRM Integration
                  </div>
                </div>
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Link
                    className="group p-5 bg-gray-50 border border-gray-100 rounded-2xl hover:bg-white hover:border-[#8CA365] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-between"
                    href="/virtual-receptionist"
                  >
                    <span className="font-bold text-[#34414A] group-hover:text-[#8CA365] transition-colors">
                      HVAC & Cooling
                    </span>
                    <svg
                      className="w-5 h-5 text-gray-400 group-hover:text-[#8CA365] transform transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </Link>
                  <Link
                    className="group p-5 bg-gray-50 border border-gray-100 rounded-2xl hover:bg-white hover:border-[#8CA365] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-between"
                    href="/virtual-receptionist"
                  >
                    <span className="font-bold text-[#34414A] group-hover:text-[#8CA365] transition-colors">
                      Plumbing
                    </span>
                    <svg
                      className="w-5 h-5 text-gray-400 group-hover:text-[#8CA365] transform transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </Link>
                  <Link
                    className="group p-5 bg-gray-50 border border-gray-100 rounded-2xl hover:bg-white hover:border-[#8CA365] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-between"
                    href="/virtual-receptionist"
                  >
                    <span className="font-bold text-[#34414A] group-hover:text-[#8CA365] transition-colors">
                      Roofing
                    </span>
                    <svg
                      className="w-5 h-5 text-gray-400 group-hover:text-[#8CA365] transform transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </Link>
                  <Link
                    className="group p-5 bg-gray-50 border border-gray-100 rounded-2xl hover:bg-white hover:border-[#8CA365] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-between"
                    href="/virtual-receptionist"
                  >
                    <span className="font-bold text-[#34414A] group-hover:text-[#8CA365] transition-colors">
                      Electrical
                    </span>
                    <svg
                      className="w-5 h-5 text-gray-400 group-hover:text-[#8CA365] transform transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </Link>
                  <Link
                    className="group p-5 bg-gray-50 border border-gray-100 rounded-2xl hover:bg-white hover:border-[#8CA365] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-between sm:col-span-2"
                    href="/virtual-receptionist"
                  >
                    <span className="font-bold text-[#34414A] group-hover:text-[#8CA365] transition-colors">
                      Cleaning & Janitorial
                    </span>
                    <svg
                      className="w-5 h-5 text-gray-400 group-hover:text-[#8CA365] transform transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            {/* PANEL 4: SPECIALIZED (HIDDEN) */}
            <div className="industry-panel hidden" id="panel-specialized">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-5">
                  <h3 className="text-2xl font-bold text-[#34414A] mb-4">
                    Custom scripts for custom businesses.
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Whether you are managing massive apartment portfolios, running a marketing agency, or booking salon appointments, we adapt strictly to your exact protocols.
                  </p>
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-50 text-purple-700 text-xs font-bold tracking-wide border border-purple-100 uppercase"
                  >
                    Custom Protocols
                  </div>
                </div>
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Link
                    className="group p-5 bg-gray-50 border border-gray-100 rounded-2xl hover:bg-white hover:border-[#8CA365] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-between"
                    href="/virtual-receptionist"
                  >
                    <span className="font-bold text-[#34414A] group-hover:text-[#8CA365] transition-colors">
                      Property Management
                    </span>
                    <svg
                      className="w-5 h-5 text-gray-400 group-hover:text-[#8CA365] transform transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </Link>
                  <Link
                    className="group p-5 bg-gray-50 border border-gray-100 rounded-2xl hover:bg-white hover:border-[#8CA365] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-between"
                    href="/virtual-receptionist"
                  >
                    <span className="font-bold text-[#34414A] group-hover:text-[#8CA365] transition-colors">
                      Marketing Agencies
                    </span>
                    <svg
                      className="w-5 h-5 text-gray-400 group-hover:text-[#8CA365] transform transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </Link>
                  <Link
                    className="group p-5 bg-gray-50 border border-gray-100 rounded-2xl hover:bg-white hover:border-[#8CA365] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-between"
                    href="/virtual-receptionist"
                  >
                    <span className="font-bold text-[#34414A] group-hover:text-[#8CA365] transition-colors">
                      IT & Tech Support
                    </span>
                    <svg
                      className="w-5 h-5 text-gray-400 group-hover:text-[#8CA365] transform transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </Link>
                  <Link
                    className="group p-5 bg-gray-50 border border-gray-100 rounded-2xl hover:bg-white hover:border-[#8CA365] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-between"
                    href="/virtual-receptionist"
                  >
                    <span className="font-bold text-[#34414A] group-hover:text-[#8CA365] transition-colors">
                      Salons & Spas
                    </span>
                    <svg
                      className="w-5 h-5 text-gray-400 group-hover:text-[#8CA365] transform transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </Link>
                  <Link
                    className="group p-5 bg-gray-50 border border-gray-100 rounded-2xl hover:bg-white hover:border-[#8CA365] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-between sm:col-span-2"
                    href="/virtual-receptionist"
                  >
                    <span className="font-bold text-[#34414A] group-hover:text-[#8CA365] transition-colors">
                      E-commerce & Retail
                    </span>
                    <svg
                      className="w-5 h-5 text-gray-400 group-hover:text-[#8CA365] transform transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Script for Industry Tabs */}
      </section>
      {/* SECTION 8: PRICING (SAAS STYLE) */}
      <section className="relative bg-[#0f2925] py-14 sm:py-20 px-4 overflow-hidden" id="pricing">
        {/* Background Glow */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div
            className="absolute -top-32 -left-32 w-[560px] h-[560px] bg-[#8CA365]/30 rounded-full blur-[120px]"
          >
          </div>
          <div
            className="absolute bottom-0 -right-24 w-[620px] h-[620px] bg-[#00cc7a]/12 rounded-full blur-[140px]"
          >
          </div>
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[760px] h-[360px] bg-[#215153]/45 rounded-full blur-[120px]"
          >
          </div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span
              className="inline-flex items-center bg-white/10 border border-white/15 text-[#dce8d0] text-sm font-semibold px-4 py-2 rounded-full mb-5"
            >
              Flat Rate - Unlimited Minutes - Dedicated Hours
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
              Virtual Receptionist Pricing
            </h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Get a dedicated virtual receptionist for calls, appointments, messages, and daily customer support without confusing per-minute charges.
            </p>
          </div>
          {/* Small Trust Bar */}
          <div className="max-w-3xl mx-auto mb-10">
            <div
              className="flex items-center justify-center bg-white/10 border border-white/15 rounded-2xl p-4 backdrop-blur-sm"
            >
              <div className="text-white text-sm font-medium">
                Save yourself from the hassle of complicated billing.
              </div>
            </div>
          </div>
          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
            {/* Part-Time Card */}
            <div
              className="bg-white rounded-2xl p-7 shadow-lg border border-white/10 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="mb-6">
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span
                    className="inline-block bg-[#f1f5ea] text-[#5f7042] text-xs font-bold px-3 py-1 rounded-full"
                  >
                    Part-Time
                  </span>
                  <span
                    className="inline-block bg-[#eef7f1] text-[#2f6b43] text-xs font-bold px-3 py-1 rounded-full"
                  >
                    Flat Rate
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#34414A] mb-2">
                  Part-Time Virtual Receptionist
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed min-h-[40px]">
                  For businesses that need receptionist support during selected dedicated hours.
                </p>
              </div>
              <div className="mb-6">
                <p className="text-sm font-semibold text-gray-500 mb-1">
                  Starting from
                </p>
                <span className="text-5xl font-extrabold text-[#34414A]">
                  $399
                </span>
                <span className="text-gray-400 font-medium">
                  /month
                </span>
              </div>
              <div className="border-b border-gray-100 mb-6">
              </div>
              <ul className="space-y-4 flex-1">
                <li className="flex items-center gap-3 text-gray-600 text-sm">
                  <svg
                    className="w-5 h-5 text-[#8CA365] flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Dedicated receptionist hours
                </li>
                <li className="flex items-center gap-3 text-gray-600 text-sm">
                  <svg
                    className="w-5 h-5 text-[#8CA365] flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Unlimited minutes during coverage
                </li>
                <li className="flex items-center gap-3 text-gray-600 text-sm">
                  <svg
                    className="w-5 h-5 text-[#8CA365] flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Appointment scheduling support
                </li>
                <li className="flex items-center gap-3 text-gray-600 text-sm">
                  <svg
                    className="w-5 h-5 text-[#8CA365] flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Message taking and call notes
                </li>
              </ul>
              <Link
                href="/contact-us"
                className="w-full block text-center bg-white border-2 border-[#34414A] text-[#34414A] font-bold py-3 rounded-lg hover:bg-slate-50 transition-colors mt-8"
              >
                Get Part-Time Support
              </Link>
            </div>
            {/* Full-Time Card */}
            <div
              className="bg-white rounded-2xl p-7 shadow-2xl border-2 border-[#8CA365] flex flex-col transition-all duration-300 hover:-translate-y-1 relative"
            >
              <div
                className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#8CA365] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md"
              >
                Best Value
              </div>
              <div className="mb-6 mt-2">
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span
                    className="inline-block bg-[#f1f5ea] text-[#5f7042] text-xs font-bold px-3 py-1 rounded-full"
                  >
                    Full-Time
                  </span>
                  <span
                    className="inline-block bg-[#eef7f1] text-[#2f6b43] text-xs font-bold px-3 py-1 rounded-full"
                  >
                    Flat Rate
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#34414A] mb-2">
                  Full-Time Virtual Receptionist
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed min-h-[40px]">
                  For growing businesses that need consistent receptionist coverage through the day.
                </p>
              </div>
              <div className="mb-6">
                <p className="text-sm font-semibold text-gray-500 mb-1">
                  Starting from
                </p>
                <span className="text-5xl font-extrabold text-[#34414A]">
                  $799
                </span>
                <span className="text-gray-400 font-medium">
                  /month
                </span>
              </div>
              <div className="border-b border-gray-100 mb-6">
              </div>
              <ul className="space-y-4 flex-1">
                <li className="flex items-center gap-3 text-gray-600 text-sm">
                  <svg
                    className="w-5 h-5 text-[#8CA365] flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Full-time dedicated hours
                </li>
                <li className="flex items-center gap-3 text-gray-600 text-sm">
                  <svg
                    className="w-5 h-5 text-[#8CA365] flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Unlimited minutes during coverage
                </li>
                <li className="flex items-center gap-3 text-gray-600 text-sm">
                  <svg
                    className="w-5 h-5 text-[#8CA365] flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Appointment scheduling and reminders
                </li>
                <li className="flex items-center gap-3 text-gray-600 text-sm">
                  <svg
                    className="w-5 h-5 text-[#8CA365] flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Lead capture and workflow updates
                </li>
              </ul>
              <Link
                href="/contact-us"
                className="w-full block text-center bg-[#8CA365] text-white font-bold py-3 rounded-lg hover:bg-[#7a8f57] shadow-lg transition-transform duration-300 hover:scale-[1.02] mt-8"
              >
                Get Full-Time Support
              </Link>
            </div>
            {/* Custom Card */}
            <div
              className="bg-white rounded-2xl p-7 shadow-lg border border-white/10 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="mb-6">
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span
                    className="inline-block bg-[#f1f5ea] text-[#5f7042] text-xs font-bold px-3 py-1 rounded-full"
                  >
                    Custom
                  </span>
                  <span
                    className="inline-block bg-[#eef7f1] text-[#2f6b43] text-xs font-bold px-3 py-1 rounded-full"
                  >
                    Specialist
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#34414A] mb-2">
                  Custom Receptionist Setup
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed min-h-[40px]">
                  For special hours, advanced workflows, language preferences, or industry-specific support.
                </p>
              </div>
              <div className="mb-6">
                <p className="text-sm font-semibold text-gray-500 mb-1">
                  Built around your needs
                </p>
                <span className="text-5xl font-extrabold text-[#34414A]">
                  Custom
                </span>
              </div>
              <div className="border-b border-gray-100 mb-6">
              </div>
              <ul className="space-y-4 flex-1">
                <li className="flex items-center gap-3 text-gray-600 text-sm">
                  <svg
                    className="w-5 h-5 text-[#8CA365] flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Custom dedicated hours
                </li>
                <li className="flex items-center gap-3 text-gray-600 text-sm">
                  <svg
                    className="w-5 h-5 text-[#8CA365] flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Specialized receptionist options
                </li>
                <li className="flex items-center gap-3 text-gray-600 text-sm">
                  <svg
                    className="w-5 h-5 text-[#8CA365] flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  HIPAA-trained support available
                </li>
                <li className="flex items-center gap-3 text-gray-600 text-sm">
                  <svg
                    className="w-5 h-5 text-[#8CA365] flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Advanced workflow instructions
                </li>
              </ul>
              <Link
                href="/contact-us"
                className="w-full block text-center bg-white border-2 border-[#34414A] text-[#34414A] font-bold py-3 rounded-lg hover:bg-slate-50 transition-colors mt-8"
              >
                Request Custom Quote
              </Link>
            </div>
          </div>
          {/* Specialist Tags */}
          <div
            className="mt-12 text-center max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-6"
          >
            <p className="text-white text-sm font-semibold mb-4">
              Specialized receptionist options available with custom setups
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="bg-white/10 border border-white/15 text-white text-sm px-4 py-2 rounded-full">
                HIPAA-Trained
              </span>
              <span className="bg-white/10 border border-white/15 text-white text-sm px-4 py-2 rounded-full">
                B1 English Support
              </span>
              <span className="bg-white/10 border border-white/15 text-white text-sm px-4 py-2 rounded-full">
                A-Level English Specialist
              </span>
              <span className="bg-white/10 border border-white/15 text-white text-sm px-4 py-2 rounded-full">
                Bilingual Receptionist
              </span>
              <span className="bg-white/10 border border-white/15 text-white text-sm px-4 py-2 rounded-full">
                Industry-Trained Support
              </span>
            </div>
          </div>
          {/* Small Upfront Note */}
          <p className="mt-5 text-center text-white/40 text-xs">
            Secure your dedicated receptionist with your first month upfront.
          </p>
        </div>
      </section>
      {/* SECTION 9: SOCIAL PROOF & TESTIMONIALS */}
      <section className="bg-slate-50 py-14 sm:py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <h2
            className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#34414A] text-center mb-6 max-w-4xl mx-auto leading-tight"
          >
            What Real Business Owners Achieve With Our Live Phone Answering Service
          </h2>
          {/* Star Rating (H3) */}
          <div className="flex items-center justify-center gap-2 mb-16">
            <div className="flex gap-1 text-yellow-400">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-700">
              Rated 4.9/5 Stars for Service & Reliability
            </h3>
          </div>
          {/* Layout: CSS Grid masonry-style Wall of Love */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {/* Google Review */}
            <div
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow break-inside-avoid"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600"
                    >
                      MS
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">
                        Mark S.
                      </div>
                      <div className="text-xs text-gray-500">
                        2 days ago
                      </div>
                    </div>
                  </div>
                  {/* Google Icon SVG */}
                  <svg className="w-6 h-6" viewBox="0 0 24 24">
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
                </div>
                <div className="flex gap-1 mb-3 text-[#FBBC05]">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-3">
                  "As a trade pro, I used to miss 50% of my calls while on job sites. These receptionists didn't just answer—they qualified the leak calls from the tire-kickers. Now I wake up to a booked calendar of high-value service appointments."
                </p>
              </div>
            </div>
            {/* Trustpilot Review */}
            <div
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow break-inside-avoid"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <img
                      alt="Sarah J."
                      className="w-10 h-10 rounded-full object-cover"
                      src="https://i.pravatar.cc/150?img=47"
                    />
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">
                        Sarah J.
                      </div>
                      <div className="text-xs text-gray-500">
                        1 week ago
                      </div>
                    </div>
                  </div>
                  {/* Trustpilot Icon */}
                  <svg className="w-7 h-7" viewBox="0 0 512 512">
                    <path
                      d="M256 0c141.385 0 256 114.615 256 256S397.385 512 256 512 0 397.385 0 256 114.615 0 256 0z"
                      fill="#00B67A"
                    />
                    <path
                      d="M346.066 208.572h-74.872l-23.018-71.18c-1.39-4.298-7.362-4.298-8.752 0l-23.018 71.18h-74.872c-4.52 0-6.398 5.8-2.742 8.468l60.575 44.17-23.14 71.558c-1.396 4.318 3.82 8.125 7.482 5.466l60.672-44.24 60.672 44.24c3.662 2.66 8.878-1.148 7.482-5.466l-23.14-71.558 60.575-44.17c3.655-2.668 1.777-8.468-2.742-8.468z"
                      fill="#FFF"
                    />
                  </svg>
                </div>
                <div className="flex gap-1 mb-3 text-[#00B67A]">
                  {/* 5 Stars */}
                  <svg
                    className="w-5 h-5 bg-[#00B67A] text-white p-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                  <svg
                    className="w-5 h-5 bg-[#00B67A] text-white p-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                  <svg
                    className="w-5 h-5 bg-[#00B67A] text-white p-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                  <svg
                    className="w-5 h-5 bg-[#00B67A] text-white p-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                  <svg
                    className="w-5 h-5 bg-[#00B67A] text-white p-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-3">
                  "Confidentiality and empathy are crucial for our clients. The bilingual live intake team treats every caller with absolute professionalism. We haven't missed an urgent case intake since we started, after-hours included."
                </p>
              </div>
            </div>
            {/* Yelp Review */}
            <div
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow break-inside-avoid"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center font-bold text-red-600"
                    >
                      ER
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">
                        Dr. Emily R.
                      </div>
                      <div className="text-xs text-gray-500">
                        3 weeks ago
                      </div>
                    </div>
                  </div>
                  {/* Yelp Icon */}
                  <svg className="w-6 h-6" viewBox="0 0 512 512">
                    <path
                      d="M129.288 335.631c-6.853-6.529-16.714-8.868-25.592-5.747L14.71 361.026c-11.237 3.966-17.07 16.326-13.064 27.524 35.803 100.086 123.633 118.825 151.724 121.725 11.834 1.22 22.18-7.391 23.364-19.245l5.228-52.482c1.066-10.732-5.074-20.584-14.887-24.168l-37.787-78.749zm360.771 14.512L413.22 312.388c-7.015-4.475-16.196-4.664-23.4-.416l-80.007 47.013c-8.914 5.242-12.825 16.143-9.155 25.556 32.552 83.568 20.887 114.779 17.514 122.502-4.706 10.82 2.628 23.308 14.47 24.385 41.677 3.791 142.148-1.524 177.346-132.894 3.09-11.517-5.111-23.473-16.929-28.391zM368.625 210.05c11.047-3.053 22.846 1.706 28.514 11.503l40.407 69.894c5.962 10.309 18.995 13.794 29.288 7.822 86.858-50.413 36.329-158.423 21.055-184.283-6.002-10.158-19.349-12.873-29.243-5.918l-70.627 49.657c-8.318 5.845-12.569 16.299-10.347 26.332l-9.047 24.993zM250.793 4.298C244.975-2.023 234.351-1.353 228.614 5.6c-48.406 58.622-48.291 144.577-43.255 174.659 2.059 12.28 12.548 21.439 24.981 21.849l89.654 2.94c12.213.4 22.955-8.118 25.61-20.17 11.83-53.72-27.159-128.599-74.811-180.58zM172.936 217.472l-86.877-24.162c-11.44-3.181-23.364 3.488-26.702 14.887-25.109 85.805 13.921 161.859 34.024 186.275 7.625 9.255 21.602 10.048 30.138 1.706l60.916-59.565c6.645-6.495 8.905-16.327 5.755-25.117l-17.254-94.024z"
                      fill="#D32323"
                    />
                  </svg>
                </div>
                <div className="flex gap-1 mb-3 text-[#D32323]">
                  {/* Yelp 5 stars */}
                  <svg
                    className="w-5 h-5 bg-[#D32323] text-white p-1 rounded-sm"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                  <svg
                    className="w-5 h-5 bg-[#D32323] text-white p-1 rounded-sm"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                  <svg
                    className="w-5 h-5 bg-[#D32323] text-white p-1 rounded-sm"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                  <svg
                    className="w-5 h-5 bg-[#D32323] text-white p-1 rounded-sm"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                  <svg
                    className="w-5 h-5 bg-[#D32323] text-white p-1 rounded-sm"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-3">
                  "Our front desk is constantly busy with patients in the office. Handing off our overflow calls ensures we never miss a new patient inquiry. Our appointment volume skyrocketed without needing to hire an extra receptionist."
                </p>
              </div>
            </div>
            {/* Facebook Review */}
            <div
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow break-inside-avoid"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <img
                      alt="James L."
                      className="w-10 h-10 rounded-full object-cover"
                      src="https://i.pravatar.cc/150?img=11"
                    />
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">
                        James L.
                      </div>
                      <div className="text-xs text-gray-500">
                        1 month ago
                      </div>
                    </div>
                  </div>
                  {/* Facebook Icon */}
                  <svg className="w-6 h-6" viewBox="0 0 24 24">
                    <path
                      d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                      fill="#1877F2"
                    />
                  </svg>
                </div>
                <div className="flex gap-1 mb-3 text-[#1877F2]">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-3">
                  "In real estate, speed to lead is everything. Having a 24/7 live person answer our property inquiries means we secure tenants faster than our competitors. The immediate text alerts are incredible."
                </p>
              </div>
              <div className="text-xs font-semibold text-gray-500 mt-2">
                Recommends
                <span className="font-bold text-gray-800">
                  Live Phone Answering
                </span>
              </div>
            </div>
            {/* Google Review 2 */}
            <div
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow break-inside-avoid"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center font-bold text-purple-600"
                    >
                      AP
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">
                        Amanda P.
                      </div>
                      <div className="text-xs text-gray-500">
                        2 months ago
                      </div>
                    </div>
                  </div>
                  {/* Google Icon SVG */}
                  <svg className="w-6 h-6" viewBox="0 0 24 24">
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
                </div>
                <div className="flex gap-1 mb-3 text-[#FBBC05]">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-3">
                  "The integrations are seamless. Every support call is logged directly into our CRM as a ticket with detailed notes. It's cut our triage time in half and drastically improved our customer satisfaction score."
                </p>
              </div>
            </div>
            {/* Trustpilot Review 2 */}
            <div
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow break-inside-avoid"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <img
                      alt="David M."
                      className="w-10 h-10 rounded-full object-cover"
                      src="https://i.pravatar.cc/150?img=53"
                    />
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">
                        David M.
                      </div>
                      <div className="text-xs text-gray-500">
                        3 months ago
                      </div>
                    </div>
                  </div>
                  {/* Trustpilot Icon */}
                  <svg className="w-7 h-7" viewBox="0 0 512 512">
                    <path
                      d="M256 0c141.385 0 256 114.615 256 256S397.385 512 256 512 0 397.385 0 256 114.615 0 256 0z"
                      fill="#00B67A"
                    />
                    <path
                      d="M346.066 208.572h-74.872l-23.018-71.18c-1.39-4.298-7.362-4.298-8.752 0l-23.018 71.18h-74.872c-4.52 0-6.398 5.8-2.742 8.468l60.575 44.17-23.14 71.558c-1.396 4.318 3.82 8.125 7.482 5.466l60.672-44.24 60.672 44.24c3.662 2.66 8.878-1.148 7.482-5.466l-23.14-71.558 60.575-44.17c3.655-2.668 1.777-8.468-2.742-8.468z"
                      fill="#FFF"
                    />
                  </svg>
                </div>
                <div className="flex gap-1 mb-3 text-[#00B67A]">
                  {/* 5 Stars */}
                  <svg
                    className="w-5 h-5 bg-[#00B67A] text-white p-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                  <svg
                    className="w-5 h-5 bg-[#00B67A] text-white p-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                  <svg
                    className="w-5 h-5 bg-[#00B67A] text-white p-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                  <svg
                    className="w-5 h-5 bg-[#00B67A] text-white p-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                  <svg
                    className="w-5 h-5 bg-[#00B67A] text-white p-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-3">
                  "Absolutely incredible service. Setting up the call flows was surprisingly easy and the agents sound like they sit right in our office. Highly recommended!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION 9: FAQ (ACCORDION GRID) */}
      {/* FAQ SECTION (SPLIT-PANE STYLE) */}
      <section className="bg-white py-14 sm:py-24 px-4 border-t border-gray-100" id="faq">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-24">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#34414A] leading-tight mb-6">
                Frequently Asked Questions About Virtual Receptionist Services
              </h2>
              <p className="text-gray-600 mb-8">
                Everything you need to know about getting started, pricing, and how our receptionists act as an extension of your business.
              </p>
              <div className="bg-slate-50 border border-gray-200 rounded-2xl p-6">
                <h4 className="font-bold text-[#34414A] mb-2">
                  Have a specific question?
                </h4>
                <p className="text-sm text-gray-600 mb-4">
                  Our team is here to help you build the perfect custom call flow.
                </p>
                <Link
                  className="text-sm font-bold text-[#8CA365] hover:text-[#7a8f57] flex items-center gap-2"
                  href="/contact-us"
                >
                  Contact Support
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            {/* Right Column (The Accordion List) */}
            <div className="lg:col-span-8 flex flex-col gap-4">
              <div
                className="new-faq-item bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300"
              >
                <div
                  className="new-faq-q flex justify-between items-center w-full p-6 cursor-pointer group text-left"
                >
                  <h3
                    className="text-lg font-bold text-[#34414A] pr-4 group-hover:text-[#8CA365] transition-colors"
                  >
                    What is a virtual receptionist service?
                  </h3>
                  <div
                    className="new-faq-icon w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-gray-500 group-hover:bg-[#8CA365] group-hover:text-white transition-all transform duration-300"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 4v16m8-8H4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="new-faq-a max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                  <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                    A virtual receptionist service provides live, remote professionals who handle your inbound calls, answer questions, and capture leads just like an in-house employee. We seamlessly integrate with your business, ensuring you project a Fortune 500 image while you focus on closing high-ticket jobs.
                  </div>
                </div>
              </div>
              <div
                className="new-faq-item bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300"
              >
                <div
                  className="new-faq-q flex justify-between items-center w-full p-6 cursor-pointer group text-left"
                >
                  <h3
                    className="text-lg font-bold text-[#34414A] pr-4 group-hover:text-[#8CA365] transition-colors"
                  >
                    How much does a virtual receptionist cost per month?
                  </h3>
                  <div
                    className="new-faq-icon w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-gray-500 group-hover:bg-[#8CA365] group-hover:text-white transition-all transform duration-300"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 4v16m8-8H4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="new-faq-a max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                  <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                    Our premium live virtual receptionist plans are highly affordable, starting at just $149 per month. Compared to hiring a dedicated in-house employee at $38,000 annually, our flexible pay-per-call and unlimited tier options offer massive operational savings while guaranteeing your business phones are answered professionally 24/7.
                  </div>
                </div>
              </div>
              <div
                className="new-faq-item bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300"
              >
                <div
                  className="new-faq-q flex justify-between items-center w-full p-6 cursor-pointer group text-left"
                >
                  <h3
                    className="text-lg font-bold text-[#34414A] pr-4 group-hover:text-[#8CA365] transition-colors"
                  >
                    What is the difference between a virtual receptionist and an answering service?
                  </h3>
                  <div
                    className="new-faq-icon w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-gray-500 group-hover:bg-[#8CA365] group-hover:text-white transition-all transform duration-300"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 4v16m8-8H4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="new-faq-a max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                  <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                    While a basic answering service merely takes messages and forwards calls, a virtual receptionist acts as a fully integrated extension of your team. We follow your custom scripts, qualify high-value leads, answer complex FAQs, and book appointments directly into your dispatch software for seamless operations.
                  </div>
                </div>
              </div>
              <div
                className="new-faq-item bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300"
              >
                <div
                  className="new-faq-q flex justify-between items-center w-full p-6 cursor-pointer group text-left"
                >
                  <h3
                    className="text-lg font-bold text-[#34414A] pr-4 group-hover:text-[#8CA365] transition-colors"
                  >
                    Can a virtual receptionist schedule appointments?
                  </h3>
                  <div
                    className="new-faq-icon w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-gray-500 group-hover:bg-[#8CA365] group-hover:text-white transition-all transform duration-300"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 4v16m8-8H4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="new-faq-a max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                  <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                    Yes, comprehensive appointment scheduling is a core feature. Our receptionists securely log into your existing calendar or dispatch software to book, modify, or cancel appointments in real time. We ensure your schedule stays full of qualified jobs, completely eliminating the frustrating back-and-forth of scheduling.
                  </div>
                </div>
              </div>
              <div
                className="new-faq-item bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300"
              >
                <div
                  className="new-faq-q flex justify-between items-center w-full p-6 cursor-pointer group text-left"
                >
                  <h3
                    className="text-lg font-bold text-[#34414A] pr-4 group-hover:text-[#8CA365] transition-colors"
                  >
                    Is a virtual receptionist HIPAA compliant?
                  </h3>
                  <div
                    className="new-faq-icon w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-gray-500 group-hover:bg-[#8CA365] group-hover:text-white transition-all transform duration-300"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 4v16m8-8H4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="new-faq-a max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                  <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                    Yes, our specialized medical virtual receptionist services are 100% HIPAA compliant. We utilize highly secure, encrypted platforms to handle sensitive patient data, intake details, and confidential message delivery, ensuring your practice meets all strict federal privacy regulations without ever compromising on excellent service quality.
                  </div>
                </div>
              </div>
              <div
                className="new-faq-item bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300"
              >
                <div
                  className="new-faq-q flex justify-between items-center w-full p-6 cursor-pointer group text-left"
                >
                  <h3
                    className="text-lg font-bold text-[#34414A] pr-4 group-hover:text-[#8CA365] transition-colors"
                  >
                    Do virtual receptionists answer calls 24 hours a day?
                  </h3>
                  <div
                    className="new-faq-icon w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-gray-500 group-hover:bg-[#8CA365] group-hover:text-white transition-all transform duration-300"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 4v16m8-8H4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="new-faq-a max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                  <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                    Yes, we provide round-the-clock, 24/7 coverage, including nights, weekends, and major holidays. Whether a customer calls at noon for an estimate or at 2 AM for an emergency carpet cleaning or plumbing repair, a live, US-based professional will always be there to answer.
                  </div>
                </div>
              </div>
              <div
                className="new-faq-item bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300"
              >
                <div
                  className="new-faq-q flex justify-between items-center w-full p-6 cursor-pointer group text-left"
                >
                  <h3
                    className="text-lg font-bold text-[#34414A] pr-4 group-hover:text-[#8CA365] transition-colors"
                  >
                    Is there a long-term commitment or contract?
                  </h3>
                  <div
                    className="new-faq-icon w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-gray-500 group-hover:bg-[#8CA365] group-hover:text-white transition-all transform duration-300"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 4v16m8-8H4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="new-faq-a max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                  <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                    No, we operate on a month-to-month basis with no long-term contracts. You can scale, adjust, or cancel your plan at any time. Our onboarding team will set up your custom script and call routing in minutes so you can get started quickly.
                  </div>
                </div>
              </div>
              <div
                className="new-faq-item bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300"
              >
                <div
                  className="new-faq-q flex justify-between items-center w-full p-6 cursor-pointer group text-left"
                >
                  <h3
                    className="text-lg font-bold text-[#34414A] pr-4 group-hover:text-[#8CA365] transition-colors"
                  >
                    What happens if I receive a high volume of calls?
                  </h3>
                  <div
                    className="new-faq-icon w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-gray-500 group-hover:bg-[#8CA365] group-hover:text-white transition-all transform duration-300"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 4v16m8-8H4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="new-faq-a max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                  <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                    Our scalable infrastructure is built to seamlessly handle sudden call spikes. Whether you run a seasonal business or launch a massive marketing campaign across multiple US cities, our team dynamically routes your calls to ensure every single lead is captured with zero hold times.
                  </div>
                </div>
              </div>
              <div
                className="new-faq-item bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300"
              >
                <div
                  className="new-faq-q flex justify-between items-center w-full p-6 cursor-pointer group text-left"
                >
                  <h3
                    className="text-lg font-bold text-[#34414A] pr-4 group-hover:text-[#8CA365] transition-colors"
                  >
                    How is a virtual receptionist different from an AI bot?
                  </h3>
                  <div
                    className="new-faq-icon w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-gray-500 group-hover:bg-[#8CA365] group-hover:text-white transition-all transform duration-300"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 4v16m8-8H4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="new-faq-a max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                  <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                    Unlike frustrating AI bots that struggle with accents and background noise, a human virtual receptionist provides immediate empathy and critical thinking. Real humans navigate complex emotional situations and secure high-ticket bookings far better than automated systems, ensuring your callers never hang up in frustration.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION 10: FINAL CTA (DUAL PATH) */}
      <section className="bg-[#0f2925] py-24 px-4 relative overflow-hidden">
        {/* Premium Colorful Mesh Gradient Background */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {/* Glowing Orb 1 (Brand Green) */}
          <div
            className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-[#8CA365]/40 rounded-full blur-[120px] animate-pulse pointer-events-none"
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
                <Link
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
    </>
  )
}
