import Link from 'next/link'

export const metadata = {
  title: "Industries We Serve — Live Phone Answering for Every Business | LivePhoneAnswering.com",
  description: "Live Phone Answering serves 50+ industries including healthcare, legal, home services, real estate, and more. See how we integrate with your exact workflow.",
  alternates: { canonical: "/industries-served" },
}

export default function IndustriesServedPage() {
  return (
    <>
      {/* HERO SECTION */}
      <section
        className="relative overflow-hidden py-16 sm:py-20 lg:py-24 px-4 lg:px-[5%]"
        aria-label="Industries Hero"
      >
        {/* Mint green gradient background */}
        <div
          className="absolute inset-0 z-0"
          style={{ background: "linear-gradient(160deg, #c6ecb5 0%, #d4f1c4 20%, #e2f5d8 40%, #eef8e8 60%, #f5fbf2 80%, #ffffff 100%)" }}
        >
        </div>
        {/* Creative background elements */}
        <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
          {/* Organic blob shapes */}
          <div
            className="absolute -top-16 -right-20 w-[380px] h-[380px] bg-[#295657]/10 opacity-60"
            style={{ animation: "blobMorph 14s ease-in-out infinite", borderRadius: "55% 45% 42% 58% / 44% 56% 44% 56%" }}
          >
          </div>
          <div
            className="absolute top-1/2 -left-24 w-[300px] h-[300px] bg-[#8CA365]/12 opacity-70"
            style={{ animation: "blobMorph 16s ease-in-out infinite 4s", borderRadius: "42% 58% 55% 45% / 56% 42% 58% 44%" }}
          >
          </div>
          <div
            className="absolute -bottom-20 right-1/4 w-[340px] h-[340px] bg-[#295657]/8 opacity-50"
            style={{ animation: "blobMorph 18s ease-in-out infinite 7s", borderRadius: "45% 55% 58% 42% / 58% 44% 42% 58%" }}
          >
          </div>
          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: "linear-gradient(#295657 1px, transparent 1px), linear-gradient(90deg, #295657 1px, transparent 1px)", backgroundSize: "48px 48px" }}
          >
          </div>
          {/* Diagonal accent lines */}
          <div
            className="absolute bottom-0 left-0 w-[600px] h-[600px] opacity-[0.03]"
            style={{ background: "repeating-linear-gradient(45deg, #295657, #295657 1px, transparent 1px, transparent 40px)" }}
          >
          </div>
        </div>
        {/* Content */}
        <div className="max-w-3xl mx-auto text-center relative z-10">
          {/* Eyebrow */}
          <div
            className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm text-[#295657] rounded-full text-sm font-semibold px-5 py-2 mb-6 shadow-sm border border-white/50"
            style={{ animation: "blobFadeUp 0.7s cubic-bezier(0.16,1,0.3,1) both" }}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
            Industries We Serve
          </div>
          {/* Headline */}
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.6rem] font-extrabold text-[#1a2e35] leading-[1.1] tracking-tight"
            style={{ animation: "blobFadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s both" }}
          >
            Trained For Your Exact Workflow & Industry
          </h1>
          {/* Sub-headline */}
          <p
            className="text-base sm:text-lg text-[#3d5c42] mt-5 max-w-2xl mx-auto leading-relaxed"
            style={{ animation: "blobFadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.2s both" }}
          >
            Our receptionists are trained in your specific industry terminology, compliance requirements, and call-handling protocols — so every caller gets a knowledgeable, professional response.
          </p>
          {/* Industry feature pills */}
          <div
            className="flex flex-wrap justify-center gap-3 mt-8"
            style={{ animation: "blobFadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.3s both" }}
          >
            <div
              className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm border border-white/60"
            >
              <svg
                className="w-4 h-4 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <span className="text-sm font-semibold text-[#34414A]">
                Medical & Healthcare
              </span>
            </div>
            <div
              className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm border border-white/60"
            >
              <svg
                className="w-4 h-4 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                />
              </svg>
              <span className="text-sm font-semibold text-[#34414A]">
                Legal Firms
              </span>
            </div>
            <div
              className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm border border-white/60"
            >
              <svg
                className="w-4 h-4 text-amber-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span className="text-sm font-semibold text-[#34414A]">
                Real Estate
              </span>
            </div>
            <div
              className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm border border-white/60"
            >
              <svg
                className="w-4 h-4 text-purple-500"
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
              </svg>
              <span className="text-sm font-semibold text-[#34414A]">
                IT & Tech
              </span>
            </div>
            <div
              className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm border border-white/60"
            >
              <svg
                className="w-4 h-4 text-[#8CA365]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="text-sm font-semibold text-[#34414A]">
                Small Business
              </span>
            </div>
          </div>
          <div
            className="flex flex-col sm:flex-row justify-center gap-4 mt-10"
            style={{ animation: "blobFadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.4s both" }}
          >
            <Link
              href="/contact-us"
              className="inline-flex justify-center items-center bg-[#34414A] hover:bg-[#2a353c] text-white font-bold py-3.5 px-9 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 text-center"
            >
              Get Started Now →
            </Link>
            <a
              href="#industries"
              className="inline-flex justify-center items-center bg-white/80 backdrop-blur-sm border-2 border-[#34414A]/20 text-[#34414A] hover:bg-white font-bold py-3.5 px-9 rounded-xl transition-all hover:-translate-y-0.5 text-center shadow-sm"
            >
              View All Industries
            </a>
          </div>
          {/* Trust stats row */}
          <div
            className="flex flex-wrap justify-center gap-6 sm:gap-10 mt-10"
            style={{ animation: "blobFadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.5s both" }}
          >
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 relative">
                <span
                  className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"
                >
                </span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500">
                </span>
              </span>
              <span className="text-sm font-bold text-[#34414A]">
                24/7 Live Agents
              </span>
            </div>
            <div className="text-center">
              <span className="text-2xl font-extrabold text-[#34414A]">
                20+
              </span>
              <p className="text-xs text-[#5a6c6e] font-medium">
                Industries
              </p>
            </div>
            <div className="text-center">
              <span className="text-2xl font-extrabold text-[#34414A]">
                HIPAA
              </span>
              <p className="text-xs text-[#5a6c6e] font-medium">
                Compliant
              </p>
            </div>
            <div className="text-center">
              <span className="text-2xl font-extrabold text-[#34414A]">
                98.5%
              </span>
              <p className="text-xs text-[#5a6c6e] font-medium">
                Satisfaction
              </p>
            </div>
          </div>
        </div>
        {/* Floating decorative dots */}
        <div
          className="absolute top-10 right-[12%] w-3 h-3 rounded-full bg-[#295657]/35 z-[2]"
          style={{ animation: "blobFloat 5s ease-in-out infinite" }}
        >
        </div>
        <div
          className="absolute top-1/3 left-[8%] w-2.5 h-2.5 rounded-full bg-[#8CA365]/40 z-[2]"
          style={{ animation: "blobFloat 4s ease-in-out infinite 1.5s" }}
        >
        </div>
        <div
          className="absolute bottom-24 right-[15%] w-2 h-2 rounded-full bg-[#8CA365]/30 z-[2]"
          style={{ animation: "blobFloat 6s ease-in-out infinite 2.5s" }}
        >
        </div>
        <div
          className="absolute bottom-1/3 left-[14%] w-3.5 h-3.5 rounded-full bg-[#295657]/20 z-[2]"
          style={{ animation: "blobFloat 5s ease-in-out infinite 3.5s" }}
        >
        </div>
        {/* Bottom gradient transition to white */}
        <div
          className="absolute bottom-0 left-0 right-0 h-20 z-[3]"
          style={{ background: "linear-gradient(180deg, transparent 0%, #ffffff 100%)" }}
        >
        </div>
      </section>
      {/* Industry Tabs Section */}
      <section className="py-20 md:py-28 bg-white font-sans relative overflow-hidden" id="industries">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#34414A] tracking-tight mb-4">
              Select Your Industry
            </h2>
            <p className="text-lg text-gray-600">
              See how we integrate seamlessly into your specialized software and daily operations.
            </p>
          </div>
          {/* Tab Navigation Bar */}
          <div
            className="flex flex-nowrap overflow-x-auto justify-start md:justify-center gap-2 md:gap-8 border-b border-gray-100 mb-12 pb-px no-scroll reveal reveal-delay-1"
            id="industry-tabs"
          >
            <button
              data-target="panel-healthcare"
              className="industry-tab-btn whitespace-nowrap px-4 py-3 text-sm md:text-base font-bold text-[#8CA365] border-b-2 border-[#8CA365] transition-colors flex items-center gap-2"
            >
              <svg
                className="w-5 h-5 hidden sm:block"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
              Healthcare & Medical
            </button>
            <button
              data-target="panel-professional"
              className="industry-tab-btn whitespace-nowrap px-4 py-3 text-sm md:text-base font-medium text-gray-500 hover:text-[#34414A] border-b-2 border-transparent hover:border-gray-300 transition-colors flex items-center gap-2"
            >
              <svg
                className="w-5 h-5 hidden sm:block"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Legal & Professional
            </button>
            <button
              data-target="panel-home-services"
              className="industry-tab-btn whitespace-nowrap px-4 py-3 text-sm md:text-base font-medium text-gray-500 hover:text-[#34414A] border-b-2 border-transparent hover:border-gray-300 transition-colors flex items-center gap-2"
            >
              <svg
                className="w-5 h-5 hidden sm:block"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Home Services
            </button>
            <button
              data-target="panel-specialized"
              className="industry-tab-btn whitespace-nowrap px-4 py-3 text-sm md:text-base font-medium text-gray-500 hover:text-[#34414A] border-b-2 border-transparent hover:border-gray-300 transition-colors flex items-center gap-2"
            >
              <svg
                className="w-5 h-5 hidden sm:block"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              Specialized
            </button>
          </div>
          {/* Tab Panels Container */}
          <div className="max-w-5xl mx-auto min-h-[300px] reveal reveal-delay-2">
            {/* PANEL 1: HEALTHCARE (ACTIVE) */}
            <div id="panel-healthcare" className="industry-panel block animate-fadeIn">
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
                  <a
                    href="#"
                    className="group p-5 bg-gray-50 border border-gray-100 rounded-2xl hover:bg-white hover:border-[#8CA365] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-between"
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="group p-5 bg-gray-50 border border-gray-100 rounded-2xl hover:bg-white hover:border-[#8CA365] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-between"
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="group p-5 bg-gray-50 border border-gray-100 rounded-2xl hover:bg-white hover:border-[#8CA365] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-between"
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="group p-5 bg-gray-50 border border-gray-100 rounded-2xl hover:bg-white hover:border-[#8CA365] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-between"
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="group p-5 bg-gray-50 border border-gray-100 rounded-2xl hover:bg-white hover:border-[#8CA365] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-between sm:col-span-2"
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            {/* PANEL 2: LEGAL & PROFESSIONAL (HIDDEN) */}
            <div id="panel-professional" className="industry-panel hidden">
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
                  <a
                    href="#"
                    className="group p-5 bg-gray-50 border border-gray-100 rounded-2xl hover:bg-white hover:border-[#8CA365] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-between"
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="group p-5 bg-gray-50 border border-gray-100 rounded-2xl hover:bg-white hover:border-[#8CA365] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-between"
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="group p-5 bg-gray-50 border border-gray-100 rounded-2xl hover:bg-white hover:border-[#8CA365] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-between"
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="group p-5 bg-gray-50 border border-gray-100 rounded-2xl hover:bg-white hover:border-[#8CA365] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-between"
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="group p-5 bg-gray-50 border border-gray-100 rounded-2xl hover:bg-white hover:border-[#8CA365] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-between sm:col-span-2"
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            {/* PANEL 3: HOME SERVICES (HIDDEN) */}
            <div id="panel-home-services" className="industry-panel hidden">
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
                  <a
                    href="#"
                    className="group p-5 bg-gray-50 border border-gray-100 rounded-2xl hover:bg-white hover:border-[#8CA365] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-between"
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="group p-5 bg-gray-50 border border-gray-100 rounded-2xl hover:bg-white hover:border-[#8CA365] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-between"
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="group p-5 bg-gray-50 border border-gray-100 rounded-2xl hover:bg-white hover:border-[#8CA365] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-between"
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="group p-5 bg-gray-50 border border-gray-100 rounded-2xl hover:bg-white hover:border-[#8CA365] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-between"
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="group p-5 bg-gray-50 border border-gray-100 rounded-2xl hover:bg-white hover:border-[#8CA365] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-between sm:col-span-2"
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            {/* PANEL 4: SPECIALIZED (HIDDEN) */}
            <div id="panel-specialized" className="industry-panel hidden">
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
                  <a
                    href="#"
                    className="group p-5 bg-gray-50 border border-gray-100 rounded-2xl hover:bg-white hover:border-[#8CA365] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-between"
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="group p-5 bg-gray-50 border border-gray-100 rounded-2xl hover:bg-white hover:border-[#8CA365] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-between"
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="group p-5 bg-gray-50 border border-gray-100 rounded-2xl hover:bg-white hover:border-[#8CA365] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-between"
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="group p-5 bg-gray-50 border border-gray-100 rounded-2xl hover:bg-white hover:border-[#8CA365] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-between"
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="group p-5 bg-gray-50 border border-gray-100 rounded-2xl hover:bg-white hover:border-[#8CA365] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-between sm:col-span-2"
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Script for Industry Tabs */}
      </section>
      {/* HOW WE ADAPT TO YOUR INDUSTRY (3-Step) */}
      <section className="py-20 md:py-32 relative overflow-hidden font-sans">
        {/* Dark teal mesh gradient background */}
        <div className="absolute inset-0 bg-[#0f2925] z-0 overflow-hidden">
          <div
            className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-[#8CA365]/40 rounded-full blur-[120px] animate-pulse pointer-events-none"
          >
          </div>
          <div
            className="absolute bottom-0 -right-20 w-[700px] h-[700px] bg-[#00cc7a]/20 rounded-full blur-[150px] pointer-events-none"
          >
          </div>
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#215153]/60 rounded-full blur-[120px] pointer-events-none"
          >
          </div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight"
            >
              How We Adapt to
              <span className="text-[#8CA365]">
                Your Industry
              </span>
            </h2>
            <p className="text-slate-300 text-lg mt-4 max-w-2xl mx-auto">
              Every business is different. Here's how we train our team to speak your language and follow your exact protocols.
            </p>
          </div>
          {/* 3-Step Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch relative">
            {/* Connecting dashed line (desktop) */}
            <div
              className="hidden md:block absolute top-[3.5rem] left-[15%] right-[15%] border-t-2 border-dashed border-white/30 z-0"
            >
            </div>
            {/* Step 1 */}
            <div
              className="bg-white rounded-3xl p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.2)] flex flex-col items-center text-center h-full relative z-10 transition-transform duration-300 hover:-translate-y-1 border border-white/50"
            >
              <div
                className="w-16 h-16 bg-[#34414A] text-white rounded-full flex items-center justify-center border-[6px] border-white shadow-sm mb-6 z-10 relative"
              >
                <span className="text-xl font-bold">
                  1
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#34414A] mb-4">
                Learn Your Workflow
              </h3>
              <p className="text-gray-600 leading-relaxed text-[15px] flex-grow">
                We study your industry terminology, compliance needs, CRM tools, and call-handling protocols. We learn what matters most to your callers.
              </p>
            </div>
            {/* Step 2 */}
            <div
              className="bg-white rounded-3xl p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.2)] flex flex-col items-center text-center h-full relative z-10 transition-transform duration-300 hover:-translate-y-1 border border-white/50"
            >
              <div
                className="w-16 h-16 bg-[#8CA365] text-white rounded-full flex items-center justify-center border-[6px] border-white shadow-sm mb-6 z-10 relative"
              >
                <span className="text-xl font-bold">
                  2
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#34414A] mb-4">
                Train Dedicated Agents
              </h3>
              <p className="text-gray-600 leading-relaxed text-[15px] flex-grow">
                Your receptionists are trained on your exact scripts, escalation rules, and FAQ responses. They know your business inside-out before the first call.
              </p>
              <div
                className="mt-6 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-[11px] sm:text-xs font-bold tracking-wide"
              >
                <svg
                  className="w-3.5 h-3.5 text-amber-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.381z"
                    clipRule="evenodd"
                  />
                </svg>
                Industry-specific training included
              </div>
            </div>
            {/* Step 3 */}
            <div
              className="bg-white rounded-3xl p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.2)] flex flex-col items-center text-center h-full relative z-10 transition-transform duration-300 hover:-translate-y-1 border border-white/50"
            >
              <div
                className="w-16 h-16 bg-[#34414A] text-white rounded-full flex items-center justify-center border-[6px] border-white shadow-sm mb-6 z-10 relative"
              >
                <span className="text-xl font-bold">
                  3
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#34414A] mb-4">
                Start Answering Calls
              </h3>
              <p className="text-gray-600 leading-relaxed text-[15px] flex-grow">
                Forward your number and we go live. Every call is handled per your instructions — messages, bookings, transfers, and urgent escalations.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* INDUSTRY TRUST SIGNALS (Stats Strip) */}
      <section
        className="py-16 md:py-20 bg-slate-50 relative overflow-hidden font-sans border-t border-gray-100"
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-[#8CA365]/5 rounded-full blur-3xl"
          >
          </div>
          <div className="absolute bottom-0 -left-16 w-80 h-80 bg-[#295657]/5 rounded-full blur-3xl">
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-14 reveal">
            <div
              className="inline-flex items-center gap-2 bg-[#295657]/10 text-[#295657] rounded-full text-sm font-semibold px-4 py-1.5 mb-5"
            >
              <svg
                className="w-4 h-4"
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
              Trusted Across Industries
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#34414A] tracking-tight">
              Why Businesses Trust Us With Their Calls
            </h2>
          </div>
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {/* Stat 1 */}
            <div
              className="bg-white rounded-2xl p-6 md:p-8 text-center border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 reveal"
            >
              <div
                className="w-14 h-14 bg-[#8CA365]/10 rounded-2xl flex items-center justify-center mx-auto mb-4"
              >
                <svg
                  className="w-7 h-7 text-[#8CA365]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <p className="text-3xl md:text-4xl font-extrabold text-[#34414A]">
                20+
              </p>
              <p className="text-sm text-gray-500 font-medium mt-1">
                Industries Served
              </p>
            </div>
            {/* Stat 2 */}
            <div
              className="bg-white rounded-2xl p-6 md:p-8 text-center border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 reveal reveal-delay-1"
            >
              <div
                className="w-14 h-14 bg-[#295657]/10 rounded-2xl flex items-center justify-center mx-auto mb-4"
              >
                <svg
                  className="w-7 h-7 text-[#295657]"
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
              <p className="text-3xl md:text-4xl font-extrabold text-[#34414A]">
                HIPAA
              </p>
              <p className="text-sm text-gray-500 font-medium mt-1">
                Fully Compliant
              </p>
            </div>
            {/* Stat 3 */}
            <div
              className="bg-white rounded-2xl p-6 md:p-8 text-center border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 reveal reveal-delay-2"
            >
              <div
                className="w-14 h-14 bg-[#8CA365]/10 rounded-2xl flex items-center justify-center mx-auto mb-4"
              >
                <svg
                  className="w-7 h-7 text-[#8CA365]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <p className="text-3xl md:text-4xl font-extrabold text-[#34414A]">
                98.5%
              </p>
              <p className="text-sm text-gray-500 font-medium mt-1">
                Client Satisfaction
              </p>
            </div>
            {/* Stat 4 */}
            <div
              className="bg-white rounded-2xl p-6 md:p-8 text-center border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 reveal reveal-delay-3"
            >
              <div
                className="w-14 h-14 bg-[#295657]/10 rounded-2xl flex items-center justify-center mx-auto mb-4"
              >
                <svg
                  className="w-7 h-7 text-[#295657]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <p className="text-3xl md:text-4xl font-extrabold text-[#34414A]">
                {'<'}4
              </p>
              <p className="text-sm text-gray-500 font-medium mt-1">
                Rings to Answer
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ SECTION (Split-Pane) */}
      <section className="bg-white py-14 sm:py-24 px-4 border-t border-gray-100" id="industries-faq">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-24">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#34414A] leading-tight mb-6">
                Industry-Specific Questions Answered
              </h2>
              <p className="text-gray-600 mb-8">
                Learn how our trained receptionists handle calls for your specific industry, including compliance, software integrations, and custom protocols.
              </p>
              <div className="bg-slate-50 border border-gray-200 rounded-2xl p-6">
                <h4 className="font-bold text-[#34414A] mb-2">
                  Don't see your industry?
                </h4>
                <p className="text-sm text-gray-600 mb-4">
                  We work with 20+ industries. Let's discuss your custom needs.
                </p>
                <Link
                  href="/contact-us"
                  className="text-sm font-bold text-[#8CA365] hover:text-[#7a8f57] flex items-center gap-2"
                >
                  Contact Us
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            {/* Right Column (The Accordion List) */}
            <div className="lg:col-span-8 flex flex-col gap-4">
              {/* FAQ 1 */}
              <div
                className="ind-faq-item bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300"
              >
                <div
                  className="ind-faq-q flex justify-between items-center w-full p-6 cursor-pointer group text-left"
                >
                  <h3
                    className="text-lg font-bold text-[#34414A] pr-4 group-hover:text-[#8CA365] transition-colors"
                  >
                    Are your agents trained specifically for my industry?
                  </h3>
                  <div
                    className="ind-faq-icon w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-gray-500 group-hover:bg-[#8CA365] group-hover:text-white transition-all transform duration-300 shrink-0"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ind-faq-a max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                  <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                    Yes. Before we take your first call, our agents undergo industry-specific training that covers your terminology, compliance requirements (HIPAA for medical, confidentiality for legal, etc.), common caller scenarios, and your exact call-handling instructions. They sound like part of your team from day one.
                  </div>
                </div>
              </div>
              {/* FAQ 2 */}
              <div
                className="ind-faq-item bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300"
              >
                <div
                  className="ind-faq-q flex justify-between items-center w-full p-6 cursor-pointer group text-left"
                >
                  <h3
                    className="text-lg font-bold text-[#34414A] pr-4 group-hover:text-[#8CA365] transition-colors"
                  >
                    Do you integrate with my industry-specific CRM or software?
                  </h3>
                  <div
                    className="ind-faq-icon w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-gray-500 group-hover:bg-[#8CA365] group-hover:text-white transition-all transform duration-300 shrink-0"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ind-faq-a max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                  <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                    Absolutely. We integrate with popular tools across industries — ServiceTitan and Housecall Pro for home services, Clio for legal, EMR/EHR systems for healthcare, Google Calendar and Calendly for scheduling, and many more. If you use a custom tool, we'll work with you to set up the right workflow.
                  </div>
                </div>
              </div>
              {/* FAQ 3 */}
              <div
                className="ind-faq-item bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300"
              >
                <div
                  className="ind-faq-q flex justify-between items-center w-full p-6 cursor-pointer group text-left"
                >
                  <h3
                    className="text-lg font-bold text-[#34414A] pr-4 group-hover:text-[#8CA365] transition-colors"
                  >
                    Can you handle emergency calls and after-hours dispatching?
                  </h3>
                  <div
                    className="ind-faq-icon w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-gray-500 group-hover:bg-[#8CA365] group-hover:text-white transition-all transform duration-300 shrink-0"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ind-faq-a max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                  <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                    Yes. We set up custom escalation protocols for each industry. For HVAC and plumbing, we can dispatch emergency calls to on-call techs. For medical practices, we route urgent patient calls to the on-call physician. For legal firms, we can live-transfer high-value leads to your cell. You define the rules — we follow them 24/7.
                  </div>
                </div>
              </div>
              {/* FAQ 4 */}
              <div
                className="ind-faq-item bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300"
              >
                <div
                  className="ind-faq-q flex justify-between items-center w-full p-6 cursor-pointer group text-left"
                >
                  <h3
                    className="text-lg font-bold text-[#34414A] pr-4 group-hover:text-[#8CA365] transition-colors"
                  >
                    What if my industry isn't listed on your website?
                  </h3>
                  <div
                    className="ind-faq-icon w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-gray-500 group-hover:bg-[#8CA365] group-hover:text-white transition-all transform duration-300 shrink-0"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ind-faq-a max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                  <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                    No problem. We've successfully served over 20 industries, and we regularly onboard businesses from niche fields. We'll create custom scripts and call-handling protocols tailored to your specific needs. Contact us and we'll set up a free consultation to discuss your requirements.
                  </div>
                </div>
              </div>
              {/* FAQ 5 */}
              <div
                className="ind-faq-item bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300"
              >
                <div
                  className="ind-faq-q flex justify-between items-center w-full p-6 cursor-pointer group text-left"
                >
                  <h3
                    className="text-lg font-bold text-[#34414A] pr-4 group-hover:text-[#8CA365] transition-colors"
                  >
                    How do you ensure compliance for regulated industries?
                  </h3>
                  <div
                    className="ind-faq-icon w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-gray-500 group-hover:bg-[#8CA365] group-hover:text-white transition-all transform duration-300 shrink-0"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ind-faq-a max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                  <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                    For healthcare, we're fully HIPAA-compliant with encrypted messaging, secure data handling, and signed BAAs. For legal firms, we maintain strict client confidentiality and follow attorney-client privilege protocols. All agents undergo regular compliance training, and our systems are audited to meet industry standards.
                  </div>
                </div>
              </div>
              {/* FAQ 6 */}
              <div
                className="ind-faq-item bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300"
              >
                <div
                  className="ind-faq-q flex justify-between items-center w-full p-6 cursor-pointer group text-left"
                >
                  <h3
                    className="text-lg font-bold text-[#34414A] pr-4 group-hover:text-[#8CA365] transition-colors"
                  >
                    Can I change my call scripts or protocols anytime?
                  </h3>
                  <div
                    className="ind-faq-icon w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-gray-500 group-hover:bg-[#8CA365] group-hover:text-white transition-all transform duration-300 shrink-0"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ind-faq-a max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                  <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                    Of course. Your call scripts, routing rules, escalation protocols, and FAQ responses can be updated anytime at no extra cost. As your business evolves — seasonal changes, new services, updated hours — just let us know and we'll adjust immediately.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Accordion Script */}
      <section className="bg-[#0f2925] py-14 sm:py-24 px-4 relative overflow-hidden">
        {/* Mesh Gradient Background */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div
            className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-[#8CA365]/40 rounded-full blur-[120px] animate-pulse"
          >
          </div>
          <div
            className="absolute bottom-0 -right-20 w-[700px] h-[700px] bg-[#00cc7a]/20 rounded-full blur-[150px]"
          >
          </div>
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#215153]/60 rounded-full blur-[120px]"
          >
          </div>
        </div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4 md:mb-6"
          >
            Your Industry, Our Expertise — Let's Talk
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Whether you're in healthcare, legal, real estate, or home services — our trained receptionists are ready to answer like part of your team. No contracts, no hidden fees.
          </p>
          {/* Trust Checks */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-10">
            <div className="flex items-center gap-2">
              <svg
                className="text-[#8CA365] w-5 h-5 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-white font-medium text-sm">
                Industry-trained agents
              </span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="text-[#8CA365] w-5 h-5 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-white font-medium text-sm">
                HIPAA & compliance ready
              </span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="text-[#8CA365] w-5 h-5 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-white font-medium text-sm">
                CRM integrations
              </span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="text-[#8CA365] w-5 h-5 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-white font-medium text-sm">
                24/7/365 coverage
              </span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/contact-us"
              className="w-full sm:w-auto inline-flex justify-center items-center bg-[#8CA365] hover:bg-[#7a8f57] text-white font-bold py-4 px-10 rounded-xl shadow-lg shadow-[#8CA365]/30 transition-all hover:-translate-y-1 text-lg"
            >
              Get Started Today →
            </Link>
            <Link
              href="/pricing"
              className="w-full sm:w-auto inline-flex justify-center items-center bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white hover:bg-white/20 font-bold py-4 px-10 rounded-xl transition-all hover:-translate-y-1 text-lg"
            >
              View Pricing Plans
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
