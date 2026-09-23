
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
      {/* HERO SECTION */}
      <section
        className="relative overflow-hidden bg-white min-h-[70vh] flex items-center px-4 py-12 sm:py-16 lg:px-[5%]"
        aria-label="Hero"
      >
        {/* Decorative blurred background elements */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div
            className="absolute -top-24 -left-24 w-96 h-96 bg-[#8CA365]/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-[pulse_4s_ease-in-out_infinite]"
          >
          </div>
          <div
            className="absolute top-0 right-0 w-[500px] h-[500px] bg-slate-200/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
          >
          </div>
        </div>
        <div
          className="max-w-[1280px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10"
        >
          {/* Left Column (Text & CTAs) */}
          <div className="flex flex-col items-start z-10">
            {/* Eyebrow badge */}
            <div
              className="inline-flex items-center gap-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold px-4 py-1 mb-2"
            >
              <div className="relative flex h-2 w-2">
                <span
                  className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"
                >
                </span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-600">
                </span>
              </div>
              Live Agents Available Now
            </div>
            {/* Headline */}
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#34414A] leading-tight mt-4 md:mt-6"
            >
              Live Phone Answering That Keeps Your Business Open 24/7
            </h1>
            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-gray-600 mt-4 max-w-xl">
              Give every caller a real human response without hiring an in-house receptionist. Our live phone answering service helps small businesses capture leads, book appointments, route urgent calls, and manage after-hours calls with trained receptionists who follow your exact workflow.
            </p>
            {/* Button Group */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
              <a
                href="tel:8574531055"
                className="inline-flex justify-center items-center bg-[#8CA365] hover:bg-[#7a8f57] text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-transform hover:-translate-y-1 text-center"
              >
                Get Started Now
              </a>
              <a
                href="#pricing"
                className="inline-flex justify-center items-center bg-white border-2 border-[#34414A] text-[#34414A] hover:bg-slate-50 font-bold py-3 px-8 rounded-lg transition-colors text-center"
              >
                View Pricing Plans
              </a>
            </div>
            {/* Trust Text */}
            <div className="flex flex-row flex-wrap gap-4 text-sm text-gray-500 mt-4 font-medium">
              <span className="flex items-center gap-1">
                <svg
                  className="w-4 h-4 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Live call answering
              </span>
              <span className="flex items-center gap-1">
                <svg
                  className="w-4 h-4 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Appointment booking
              </span>
              <span className="flex items-center gap-1">
                <svg
                  className="w-4 h-4 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                After-hours coverage
              </span>
              <span className="flex items-center gap-1">
                <svg
                  className="w-4 h-4 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                CRM and call notes
              </span>
              <span className="flex items-center gap-1">
                <svg
                  className="w-4 h-4 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                No long-term contract
              </span>
            </div>
          </div>
          {/* Right Column (Visuals & Interactivity) */}
          <div className="relative w-full z-10 mt-8 lg:mt-0 flex items-center justify-center">
            {/* Decorative Background Elements */}
            {/* Large gradient blob */}
            <div
              className="absolute w-[420px] h-[420px] sm:w-[500px] sm:h-[500px] rounded-full bg-gradient-to-br from-[#8CA365]/20 via-[#295657]/10 to-transparent blur-2xl -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
            </div>
            {/* Decorative ring */}
            <div
              className="absolute w-[380px] h-[380px] sm:w-[460px] sm:h-[460px] rounded-full border-2 border-dashed border-[#8CA365]/15 -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[spin_60s_linear_infinite]"
            >
            </div>
            {/* Small floating accent dots */}
            <div
              className="absolute top-8 right-8 sm:top-4 sm:right-12 w-3 h-3 rounded-full bg-[#8CA365] animate-float opacity-60"
            >
            </div>
            <div
              className="absolute bottom-16 left-4 sm:bottom-12 sm:left-8 w-2.5 h-2.5 rounded-full bg-[#295657] animate-float opacity-50"
              style={{ animationDelay: "1s" }}
            >
            </div>
            <div
              className="absolute top-1/3 -left-2 sm:left-2 w-2 h-2 rounded-full bg-[#8CA365]/70 animate-float opacity-40"
              style={{ animationDelay: "2s" }}
            >
            </div>
            {/* Decorative badge: 24/7 */}
            <div
              className="absolute top-4 right-4 sm:top-2 sm:right-6 bg-white/90 backdrop-blur-sm rounded-xl shadow-md px-3 py-2 flex items-center gap-2 animate-fadeUp z-20 border border-[#8CA365]/20"
              style={{ animationDelay: "0.8s" }}
            >
              <span className="flex h-2.5 w-2.5 relative">
                <span
                  className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"
                >
                </span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500">
                </span>
              </span>
              <span className="text-xs font-bold text-[#34414A]">
                24/7 Live
              </span>
            </div>
            {/* Decorative badge: Calls Answered */}
            <div
              className="absolute bottom-8 left-0 sm:bottom-6 sm:left-2 bg-white/90 backdrop-blur-sm rounded-xl shadow-md px-3 py-2 animate-fadeUp z-20 border border-[#8CA365]/20"
              style={{ animationDelay: "1.2s" }}
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#8CA365]/10 flex items-center justify-center">
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
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-[0.65rem] text-gray-500 font-medium">
                    Calls Answered
                  </p>
                  <p className="text-sm font-extrabold text-[#34414A]">
                    2,400+
                  </p>
                </div>
              </div>
            </div>
            {/* Main Image */}
            <img
              src="/images/Phone%20Answering%20Services.webp"
              alt="Live Phone Answering Service - Business Open 24/7"
              className="w-[90%] sm:w-full sm:max-w-lg lg:max-w-[520px] mx-auto h-auto relative z-10 rounded-b-3xl transition-transform duration-700 hover:-translate-y-3 drop-shadow-[0_20px_40px_rgba(41,86,87,0.15)]"
            width={1122}
            height={1402}
            loading="eager"
            fetchPriority="high"
          />
          </div>
        </div>
      </section>
      {/* SECTION 2: TRUST BAR & VALUE PROPOSITION */}
      {/* Part 1: Trust Bar (Infinite Scroll Marquee) */}
      {/* Multi-Industry SVG Trust Ribbon */}
      <section
        className="py-12 bg-white border-y border-slate-200 overflow-hidden relative flex flex-col items-center"
      >
        <p
          className="text-xs font-bold text-slate-400 tracking-[0.2em] uppercase mb-8 text-center px-4"
        >
          Trusted by top professionals across healthcare, legal, and home services
        </p>
        <div className="relative w-full max-w-7xl mx-auto flex overflow-hidden group/marquee">
          {/* Edge Fades */}
          <div
            className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"
          >
          </div>
          <div
            className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"
          >
          </div>
          {/* Scrolling Track */}
          <div className="flex animate-marquee whitespace-nowrap items-center">
            {/* Authentic Multi-Industry Logo Set */}
            <div className="flex items-center gap-16 px-8">
              {/* Medical: "Apex Health" */}
              <div
                className="flex items-center gap-2 text-blue-600 transition-all duration-300 cursor-default"
              >
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"
                  />
                </svg>
                <span
                  className="text-2xl font-bold tracking-tight"
                  style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                >
                  ApexHealth
                </span>
              </div>
              {/* Law: "Sterling & Vance" */}
              <div
                className="flex items-center gap-2 text-slate-900 transition-all duration-300 cursor-default"
              >
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 21h16v-2H4v2zM6 10h12v7H6v-7zm13-3V5H5v2h14zM12 2L2 7h20L12 2z" />
                </svg>
                <span
                  className="text-xl font-bold italic"
                  style={{ fontFamily: "'Times New Roman', Times, serif" }}
                >
                  Sterling & Vance LLP
                </span>
              </div>
              {/* Home Services: "ProFix HVAC" */}
              <div
                className="flex items-center gap-2 text-orange-600 transition-all duration-300 cursor-default"
              >
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12.55 11l-3.32-3.32c-.52-.52-1.34-.52-1.87 0-.52.52-.52 1.34 0 1.87l3.32 3.32-3.32 3.32c-.52.52-.52 1.34 0 1.87.52.52 1.34.52 1.87 0l3.32-3.32 3.32 3.32c.52.52 1.34.52 1.87 0 .52-.52.52-1.34 0-1.87L14.42 11l3.32-3.32c.52-.52.52-1.34 0-1.87-.52-.52-1.34-.52-1.87 0L12.55 11z"
                  />
                  <path d="M12 2L2 12h3v8h14v-8h3L12 2zm0 2.83L17.17 10H6.83L12 4.83z" opacity="0.3" />
                </svg>
                <span
                  className="text-xl font-black uppercase tracking-tighter"
                  style={{ fontFamily: "Impact, sans-serif" }}
                >
                  PROFIX
                </span>
              </div>
              {/* Insurance: "Vanguard Protection" */}
              <div
                className="flex items-center gap-2 text-emerald-700 transition-all duration-300 cursor-default"
              >
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"
                  />
                </svg>
                <span
                  className="text-xl font-semibold tracking-wide"
                  style={{ fontFamily: "'Century Gothic', sans-serif" }}
                >
                  Vanguard
                </span>
              </div>
              {/* Finance/Real Estate: "Meridian Properties" */}
              <div
                className="flex items-center gap-2 text-indigo-700 transition-all duration-300 cursor-default"
              >
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 19h10V4H7v15zm-5-2h4V6H2v11zM18 6v11h4V6h-4z" />
                </svg>
                <span
                  className="text-xl font-light uppercase tracking-widest"
                  style={{ fontFamily: "'Trebuchet MS', sans-serif" }}
                >
                  Meridian
                </span>
              </div>
            </div>
            {/* Duplicate Set for Seamless Marquee Loop */}
            <div className="flex items-center gap-16 px-8" aria-hidden="true">
              <div
                className="flex items-center gap-2 text-blue-600 transition-all duration-300 cursor-default"
              >
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"
                  />
                </svg>
                <span
                  className="text-2xl font-bold tracking-tight"
                  style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                >
                  ApexHealth
                </span>
              </div>
              <div
                className="flex items-center gap-2 text-slate-900 transition-all duration-300 cursor-default"
              >
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 21h16v-2H4v2zM6 10h12v7H6v-7zm13-3V5H5v2h14zM12 2L2 7h20L12 2z" />
                </svg>
                <span
                  className="text-xl font-bold italic"
                  style={{ fontFamily: "'Times New Roman', Times, serif" }}
                >
                  Sterling & Vance LLP
                </span>
              </div>
              <div
                className="flex items-center gap-2 text-orange-600 transition-all duration-300 cursor-default"
              >
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12.55 11l-3.32-3.32c-.52-.52-1.34-.52-1.87 0-.52.52-.52 1.34 0 1.87l3.32 3.32-3.32 3.32c-.52.52-.52 1.34 0 1.87.52.52 1.34.52 1.87 0l3.32-3.32 3.32 3.32c.52.52 1.34.52 1.87 0 .52-.52.52-1.34 0-1.87L14.42 11l3.32-3.32c.52-.52.52-1.34 0-1.87-.52-.52-1.34-.52-1.87 0L12.55 11z"
                  />
                  <path d="M12 2L2 12h3v8h14v-8h3L12 2zm0 2.83L17.17 10H6.83L12 4.83z" opacity="0.3" />
                </svg>
                <span
                  className="text-xl font-black uppercase tracking-tighter"
                  style={{ fontFamily: "Impact, sans-serif" }}
                >
                  PROFIX
                </span>
              </div>
              <div
                className="flex items-center gap-2 text-emerald-700 transition-all duration-300 cursor-default"
              >
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"
                  />
                </svg>
                <span
                  className="text-xl font-semibold tracking-wide"
                  style={{ fontFamily: "'Century Gothic', sans-serif" }}
                >
                  Vanguard
                </span>
              </div>
              <div
                className="flex items-center gap-2 text-indigo-700 transition-all duration-300 cursor-default"
              >
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 19h10V4H7v15zm-5-2h4V6H2v11zM18 6v11h4V6h-4z" />
                </svg>
                <span
                  className="text-xl font-light uppercase tracking-widest"
                  style={{ fontFamily: "'Trebuchet MS', sans-serif" }}
                >
                  Meridian
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
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
              Live Receptionists vs. Voicemail vs. AI Bots — What Callers Actually Want
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
      {/* Part 2: Value Proposition (Bento Grid) */}
      <section className="py-20 md:py-32 bg-white relative overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-gradient-to-b from-[#E6F0EE] to-transparent blur-3xl"
          >
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
            <h2
              className="text-3xl md:text-5xl font-extrabold text-[#34414A] tracking-tight mb-6 font-sans"
            >
              Benefits of Live Phone
              <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#295657] to-[#8CA365]">
                Answering Services
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
              Here are the reasons that make us the best option to handle your online phone answering services:
            </p>
          </div>
          {/* Bento Grid Container: 5 Boxes in 2 Rows on Desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-8">
            {/* Benefit 1: Never Miss New Leads */}
            <div
              className="lg:col-span-3 relative overflow-hidden rounded-[2rem] bg-[#295657] p-8 sm:p-10 shadow-xl border border-[#1E4344] group"
            >
              <div
                className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 transition-transform duration-700 group-hover:scale-110"
              >
              </div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div
                  className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-8 border border-white/20"
                >
                  <img
                    src="/icons/never-miss-new-leads.webp"
                    alt="Never Miss a Customer Call Icon"
                    className="w-12 h-12 object-contain"
            width={256}
            height={256}
            loading="lazy"
            decoding="async"
          />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Never Miss a Customer Call
                  </h3>
                  <p className="text-teal-50/80 leading-relaxed max-w-md text-lg">
                    When customers call, they want an answer fast. A live phone answering service helps you stay available during busy hours, lunch breaks, evenings, and weekends. This reduces missed calls and gives more people a chance to speak with your business. It is especially helpful for companies that rely on phone inquiries to grow. Instead of losing leads to voicemail, you stay connected when it matters most.
                  </p>
                </div>
              </div>
            </div>
            {/* Benefit 2: Improve Customer Experience */}
            <div
              className="lg:col-span-3 relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#E6F0EE] to-[#D8E1D9] p-8 sm:p-10 border border-[#C2D0D4] shadow-sm"
            >
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div
                  className="w-14 h-14 bg-white/60 rounded-2xl flex items-center justify-center mb-8 shadow-sm backdrop-blur-sm border border-white/50"
                >
                  <img
                    src="/icons/improve-customer-experience.webp"
                    alt="Deliver Faster, Friendlier Customer Service Icon"
                    className="w-12 h-12 object-contain"
            width={256}
            height={256}
            loading="lazy"
            decoding="async"
          />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#34414A] mb-3">
                    Deliver Faster, Friendlier Customer Service
                  </h3>
                  <p className="text-[#4E6074] leading-relaxed text-lg">
                    People value quick, polite service. With live answering, your callers reach a real person instead of waiting or leaving a message. Receptionists can answer questions, transfer urgent calls, and help customers feel heard. This creates a better first impression and improves trust. For service businesses, that faster response can make the difference between a lost lead and a new client.
                  </p>
                </div>
              </div>
            </div>
            {/* Benefit 3: Book More Appointments */}
            <div
              className="lg:col-span-2 relative overflow-hidden rounded-[2rem] bg-slate-50 p-8 sm:p-10 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div
                className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm border border-slate-100"
              >
                <img
                  src="/icons/book-more-appointments.webp"
                  alt="Save Time for Core Business Tasks Icon"
                  className="w-12 h-12 object-contain"
            width={256}
            height={256}
            loading="lazy"
            decoding="async"
          />
              </div>
              <h3 className="text-xl font-bold text-[#34414A] mb-3">
                Save Time for Core Business Tasks
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Answering phones all day can interrupt your work and slow your team down. Live phone answering takes care of routine calls so you can focus on clients, sales, operations, and growth. Your team spends less time on messages, appointment booking, and basic questions. That means more time for the work that actually moves your business forward. It also helps small teams stay organized without extra pressure.
              </p>
            </div>
            {/* Benefit 4: Save Time for Your Team */}
            <div
              className="lg:col-span-2 relative overflow-hidden rounded-[2rem] bg-slate-50 p-8 sm:p-10 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div
                className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm border border-slate-100"
              >
                <img
                  src="/icons/save-time-for-your-team.webp"
                  alt="Cut Costs Without Losing Coverage Icon"
                  className="w-12 h-12 object-contain"
            width={256}
            height={256}
            loading="lazy"
            decoding="async"
          />
              </div>
              <h3 className="text-xl font-bold text-[#34414A] mb-3">
                Cut Costs Without Losing Coverage
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Hiring full-time reception staff can be costly. You have to cover salary, training, benefits, and office space. A live answering service gives you professional phone coverage at a lower cost and with more flexibility. Many providers offer answering service pricing options like pay per call answering service and no contract answering service plans. That makes it easier to stay within budget while still supporting your customers.
              </p>
            </div>
            {/* Benefit 5: Custom Call Routing */}
            <div
              className="lg:col-span-2 relative overflow-hidden rounded-[2rem] bg-slate-50 p-8 sm:p-10 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div
                className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm border border-slate-100"
              >
                <img
                  src="/icons/custom-call-routing.webp"
                  alt="Build a More Professional Brand Image Icon"
                  className="w-12 h-12 object-contain"
            width={256}
            height={256}
            loading="lazy"
            decoding="async"
          />
              </div>
              <h3 className="text-xl font-bold text-[#34414A] mb-3">
                Build a More Professional Brand Image
              </h3>
              <p className="text-gray-600 leading-relaxed">
                A business that answers calls well feels more reliable. Live answering helps your company sound organized, responsive, and trustworthy from the first call. Customers are more likely to stay engaged when they hear a friendly voice instead of voicemail. This is especially important for small businesses that want to look established and confident. Strong phone support can improve how people see your brand.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION 4: CORE FEATURES / BENEFITS */}
      <section className="bg-white py-14 sm:py-24 px-4 border-t border-gray-100" id="services">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#34414A] mb-4 md:mb-6"
            >
              Live Phone Answering Services Built Around Your Business
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              From virtual receptionist support to after-hours answering, appointment scheduling, lead capture, and call routing, our live phone answering services help your business handle every call with professionalism, speed, and care.
            </p>
          </div>
          {/* 6-Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div
              className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-[#8CA365]/30 transition-all duration-300"
            >
              <img
                src="/icons/virtual-receptionist.webp"
                alt="Virtual Receptionist Icon"
                className="w-16 h-16 mb-6 object-contain"
            width={256}
            height={256}
            loading="lazy"
            decoding="async"
          />
              <h3 className="text-xl font-bold text-[#34414A] mb-3">
                Virtual Receptionist
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Give your business a professional front desk without hiring in-house staff. Our virtual receptionists answer calls, take messages, follow your instructions, and represent your brand with care.
              </p>
            </div>
            {/* Card 2 */}
            <div
              className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-[#8CA365]/30 transition-all duration-300"
            >
              <img
                src="/icons/after-hours-answering-service.webp"
                alt="After Hours Answering Service Icon"
                className="w-16 h-16 mb-6 object-contain"
            width={256}
            height={256}
            loading="lazy"
            decoding="async"
          />
              <h3 className="text-xl font-bold text-[#34414A] mb-3">
                After Hours Answering Service
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Keep your business available when your office is closed. We answer evening, weekend, and holiday calls so urgent requests, new leads, and customer messages are not missed.
              </p>
            </div>
            {/* Card 3 */}
            <div
              className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-[#8CA365]/30 transition-all duration-300"
            >
              <img
                src="/icons/overflow-call-answering-service.webp"
                alt="Overflow Call Answering Service Icon"
                className="w-16 h-16 mb-6 object-contain"
            width={256}
            height={256}
            loading="lazy"
            decoding="async"
          />
              <h3 className="text-xl font-bold text-[#34414A] mb-3">
                Overflow Call Answering Service
              </h3>
              <p className="text-gray-600 leading-relaxed">
                When your team is busy, on another call, at lunch, or handling peak call volume, our receptionists step in to answer overflow calls and keep your customer experience smooth.
              </p>
            </div>
            {/* Card 4 */}
            <div
              className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-[#8CA365]/30 transition-all duration-300"
            >
              <img
                src="/icons/appointment-scheduling-service.webp"
                alt="Appointment Scheduling Service Icon"
                className="w-16 h-16 mb-6 object-contain"
            width={256}
            height={256}
            loading="lazy"
            decoding="async"
          />
              <h3 className="text-xl font-bold text-[#34414A] mb-3">
                Appointment Scheduling Service
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Turn more callers into booked appointments. Our team can schedule, reschedule, or confirm appointments using your calendar, booking tool, CRM, or preferred process.
              </p>
            </div>
            {/* Card 5 */}
            <div
              className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-[#8CA365]/30 transition-all duration-300"
            >
              <img
                src="/icons/lead-capture.webp"
                alt="Lead Capture Icon"
                className="w-16 h-16 mb-6 object-contain"
            width={256}
            height={256}
            loading="lazy"
            decoding="async"
          />
              <h3 className="text-xl font-bold text-[#34414A] mb-3">
                Lead Capture
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Capture caller names, contact details, service needs, urgency, and follow-up information. We help turn inbound calls into organized leads your team can act on quickly.
              </p>
            </div>
            {/* Card 6 */}
            <div
              className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-[#8CA365]/30 transition-all duration-300"
            >
              <img
                src="/icons/call-routing-service.webp"
                alt="Call Routing Service Icon"
                className="w-16 h-16 mb-6 object-contain"
            width={256}
            height={256}
            loading="lazy"
            decoding="async"
          />
              <h3 className="text-xl font-bold text-[#34414A] mb-3">
                Call Routing Service
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Send every caller to the right person, department, or emergency contact. We follow your routing rules for transfers, messages, urgent calls, and after-call notifications.
              </p>
            </div>
          </div>
          {/* CTA Area Below Grid */}
          <div className="mt-20 text-center max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-[#34414A] mb-4">
              Ready to stop missing calls?
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Give your callers a professional live receptionist experience without hiring in-house staff.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex justify-center items-center bg-[#8CA365] hover:bg-[#7a8f57] text-white font-bold py-3.5 px-8 rounded-lg shadow-lg transition-transform hover:-translate-y-1"
              >
                Get Started Today
              </a>
              <a
                href="#pricing"
                className="w-full sm:w-auto inline-flex justify-center items-center bg-white border-2 border-[#34414A] text-[#34414A] hover:bg-slate-50 font-bold py-3 px-8 rounded-lg transition-colors"
              >
                View Plans
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION 5: HOW IT WORKS */}
      <section className="py-20 md:py-32 relative overflow-hidden font-sans" id="how-it-works">
        {/* Premium Colorful Mesh Gradient Background */}
        <div className="absolute inset-0 bg-[#0f2925] z-0 overflow-hidden">
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
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header (Matched to screenshot) */}
          <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight"
            >
              How Our Live Phone Answering Service Works
              <br className="hidden md:block" />
              — Set Up in
              <span className="text-[#8CA365]">
                Under 5 Minutes
              </span>
            </h2>
          </div>
          {/* Symmetrical, Equal-Height Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch relative">
            {/* Continuous Connecting Dashed Line (Desktop Only) */}
            <div
              className="hidden md:block absolute top-[3.5rem] left-[15%] right-[15%] border-t-2 border-dashed border-white/30 z-0"
            >
            </div>
            {/* Step 1: Forward Your Business Number */}
            <div
              className="bg-white rounded-3xl p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.2)] flex flex-col items-center text-center h-full relative z-10 transition-transform duration-300 hover:-translate-y-1 border border-white/50"
            >
              {/* Dark Circle Number Accent */}
              <div
                className="w-16 h-16 bg-[#34414A] text-white rounded-full flex items-center justify-center border-[6px] border-white shadow-sm mb-6 z-10 relative"
              >
                <span className="text-xl font-bold">
                  1
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#34414A] mb-4">
                Forward Your Business Number
              </h3>
              <p className="text-gray-600 leading-relaxed text-[15px] flex-grow">
                Keep your existing business number or choose a new local/toll-free one. With a simple call-forwarding setup, you control exactly when we take your calls—24/7, after hours, or on demand.
              </p>
            </div>
            {/* Step 2: We Answer as Your Business */}
            <div
              className="bg-white rounded-3xl p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.2)] flex flex-col items-center text-center h-full relative z-10 transition-transform duration-300 hover:-translate-y-1 border border-white/50"
            >
              {/* Green Circle Number Accent */}
              <div
                className="w-16 h-16 bg-[#8CA365] text-white rounded-full flex items-center justify-center border-[6px] border-white shadow-sm mb-6 z-10 relative"
              >
                <span className="text-xl font-bold">
                  2
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#34414A] mb-4">
                We Answer as Your Business
              </h3>
              <p className="text-gray-600 leading-relaxed text-[15px] flex-grow">
                Our professional, US-based receptionists answer using your customized, branded greeting. We handle FAQs, screen solicitors, and treat your callers with empathy.
              </p>
              {/* Exact Yellow Pill Accent */}
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
                Average answer time: Under 4 rings
              </div>
            </div>
            {/* Step 3: Get Instant Message Alerts */}
            <div
              className="bg-white rounded-3xl p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.2)] flex flex-col items-center text-center h-full relative z-10 transition-transform duration-300 hover:-translate-y-1 border border-white/50"
            >
              {/* Dark Circle Number Accent */}
              <div
                className="w-16 h-16 bg-[#34414A] text-white rounded-full flex items-center justify-center border-[6px] border-white shadow-sm mb-6 z-10 relative"
              >
                <span className="text-xl font-bold">
                  3
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#34414A] mb-4">
                Get Instant Message Alerts
              </h3>
              <p className="text-gray-600 leading-relaxed text-[15px] flex-grow">
                The second a call ends, your team is notified. Receive full lead details, accurate messages, and booked appointment notifications directly via Text, Email, or our App.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* INDUSTRIES WE SERVE (TABBED DIRECTORY) */}
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
      {/* SECTION 8: PRICING */}
      <section className="relative overflow-hidden bg-[#092f28] py-20 px-4 sm:px-6 lg:px-8" id="pricing">
        {/* Background Glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-[#8fa762]/20 blur-3xl">
          </div>
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#1f5d4f]/30 blur-3xl">
          </div>
        </div>
        <div className="relative mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="mx-auto max-w-3xl text-center">
            <div
              className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-semibold text-white shadow-sm"
            >
              Simple Monthly Minute Plans • Live Receptionists • No Long-Term Contract
            </div>
            <h2 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Live Phone Answering Pricing
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/75">
              Choose the monthly minutes your business needs. Our live receptionists answer calls, take messages, route callers, and help you capture more opportunities without hiring in-house staff.
            </p>
          </div>
          {/* Billing Message */}
          <div
            className="mx-auto mt-10 max-w-4xl rounded-2xl border border-white/10 bg-white/10 px-6 py-5 text-center shadow-lg backdrop-blur"
          >
            <p className="text-sm font-semibold text-white">
              Start with the minutes you need. Upgrade anytime as your call volume grows.
            </p>
          </div>
          {/* Pricing Cards */}
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {/* Starter Plan */}
            <div className="rounded-3xl bg-white p-8 shadow-2xl">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-[#f2f5ea] px-4 py-1 text-xs font-bold text-[#6f8750]">
                  Starter
                </span>
                <span className="rounded-full bg-[#eef8f0] px-4 py-1 text-xs font-bold text-[#4f8a63]">
                  100 Minutes
                </span>
              </div>
              <h3 className="mt-6 text-2xl font-bold text-[#26333d]">
                Starter Answering
              </h3>
              <p className="mt-3 min-h-[72px] text-sm leading-7 text-slate-500">
                For small businesses that need professional live answering for overflow calls, missed calls, or light monthly call volume.
              </p>
              <div className="mt-8">
                <p className="text-sm font-semibold text-slate-500">
                  Starting at
                </p>
                <div className="mt-1 flex items-end gap-1">
                  <span className="text-5xl font-extrabold tracking-tight text-[#26333d]">
                    $199
                  </span>
                  <span className="pb-2 text-sm font-semibold text-slate-500">
                    /month
                  </span>
                </div>
                <p className="mt-3 text-sm font-semibold text-[#6f8750]">
                  Extra minutes: $1.99/min
                </p>
              </div>
              <div className="my-7 h-px bg-slate-200">
              </div>
              <ul className="space-y-4 text-sm font-medium text-slate-600">
                <li className="flex gap-3">
                  <span className="text-[#8fa762]">
                    ✓
                  </span>
                  100 receptionist minutes included
                </li>
                <li className="flex gap-3">
                  <span className="text-[#8fa762]">
                    ✓
                  </span>
                  Live call answering
                </li>
                <li className="flex gap-3">
                  <span className="text-[#8fa762]">
                    ✓
                  </span>
                  Message taking and call notes
                </li>
                <li className="flex gap-3">
                  <span className="text-[#8fa762]">
                    ✓
                  </span>
                  Basic call screening
                </li>
                <li className="flex gap-3">
                  <span className="text-[#8fa762]">
                    ✓
                  </span>
                  Email call summaries
                </li>
              </ul>
              <a
                href="#contact"
                className="mt-9 flex w-full items-center justify-center rounded-lg border border-[#26333d] px-5 py-4 text-sm font-bold text-[#26333d] transition hover:bg-[#26333d] hover:text-white"
              >
                Start Starter Plan
              </a>
            </div>
            {/* Growth Plan */}
            <div
              className="relative rounded-3xl border-2 border-[#8fa762] bg-white p-8 shadow-2xl lg:-mt-4"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span
                  className="rounded-full bg-[#8fa762] px-5 py-2 text-xs font-extrabold text-white shadow-lg"
                >
                  Best Value
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-[#f2f5ea] px-4 py-1 text-xs font-bold text-[#6f8750]">
                  Growth
                </span>
                <span className="rounded-full bg-[#eef8f0] px-4 py-1 text-xs font-bold text-[#4f8a63]">
                  250 Minutes
                </span>
              </div>
              <h3 className="mt-6 text-2xl font-bold text-[#26333d]">
                Growth Answering
              </h3>
              <p className="mt-3 min-h-[72px] text-sm leading-7 text-slate-500">
                For growing businesses that need consistent call answering, lead capture, call routing, and customer support throughout the month.
              </p>
              <div className="mt-8">
                <p className="text-sm font-semibold text-slate-500">
                  Starting at
                </p>
                <div className="mt-1 flex items-end gap-1">
                  <span className="text-5xl font-extrabold tracking-tight text-[#26333d]">
                    $497.50
                  </span>
                  <span className="pb-2 text-sm font-semibold text-slate-500">
                    /month
                  </span>
                </div>
                <p className="mt-3 text-sm font-semibold text-[#6f8750]">
                  Extra minutes: $1.99/min
                </p>
              </div>
              <div className="my-7 h-px bg-slate-200">
              </div>
              <ul className="space-y-4 text-sm font-medium text-slate-600">
                <li className="flex gap-3">
                  <span className="text-[#8fa762]">
                    ✓
                  </span>
                  250 receptionist minutes included
                </li>
                <li className="flex gap-3">
                  <span className="text-[#8fa762]">
                    ✓
                  </span>
                  Everything in Starter
                </li>
                <li className="flex gap-3">
                  <span className="text-[#8fa762]">
                    ✓
                  </span>
                  Custom call script
                </li>
                <li className="flex gap-3">
                  <span className="text-[#8fa762]">
                    ✓
                  </span>
                  Lead intake questions
                </li>
                <li className="flex gap-3">
                  <span className="text-[#8fa762]">
                    ✓
                  </span>
                  Appointment request handling
                </li>
                <li className="flex gap-3">
                  <span className="text-[#8fa762]">
                    ✓
                  </span>
                  Daily call summaries
                </li>
              </ul>
              <a
                href="#contact"
                className="mt-9 flex w-full items-center justify-center rounded-lg bg-[#8fa762] px-5 py-4 text-sm font-bold text-white transition hover:bg-[#7f9657]"
              >
                Get Growth Plan
              </a>
            </div>
            {/* Business Plan */}
            <div className="rounded-3xl bg-white p-8 shadow-2xl">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-[#f2f5ea] px-4 py-1 text-xs font-bold text-[#6f8750]">
                  Business
                </span>
                <span className="rounded-full bg-[#eef8f0] px-4 py-1 text-xs font-bold text-[#4f8a63]">
                  500 Minutes
                </span>
              </div>
              <h3 className="mt-6 text-2xl font-bold text-[#26333d]">
                Business Answering
              </h3>
              <p className="mt-3 min-h-[72px] text-sm leading-7 text-slate-500">
                For busy businesses that receive higher call volume and need reliable live answering support without hiring a full-time receptionist.
              </p>
              <div className="mt-8">
                <p className="text-sm font-semibold text-slate-500">
                  Starting at
                </p>
                <div className="mt-1 flex items-end gap-1">
                  <span className="text-5xl font-extrabold tracking-tight text-[#26333d]">
                    $995
                  </span>
                  <span className="pb-2 text-sm font-semibold text-slate-500">
                    /month
                  </span>
                </div>
                <p className="mt-3 text-sm font-semibold text-[#6f8750]">
                  Extra minutes: $1.99/min
                </p>
              </div>
              <div className="my-7 h-px bg-slate-200">
              </div>
              <ul className="space-y-4 text-sm font-medium text-slate-600">
                <li className="flex gap-3">
                  <span className="text-[#8fa762]">
                    ✓
                  </span>
                  500 receptionist minutes included
                </li>
                <li className="flex gap-3">
                  <span className="text-[#8fa762]">
                    ✓
                  </span>
                  Everything in Growth
                </li>
                <li className="flex gap-3">
                  <span className="text-[#8fa762]">
                    ✓
                  </span>
                  Priority call handling
                </li>
                <li className="flex gap-3">
                  <span className="text-[#8fa762]">
                    ✓
                  </span>
                  Advanced routing instructions
                </li>
                <li className="flex gap-3">
                  <span className="text-[#8fa762]">
                    ✓
                  </span>
                  Multiple call scenarios
                </li>
                <li className="flex gap-3">
                  <span className="text-[#8fa762]">
                    ✓
                  </span>
                  Weekly performance summary
                </li>
              </ul>
              <a
                href="#contact"
                className="mt-9 flex w-full items-center justify-center rounded-lg border border-[#26333d] px-5 py-4 text-sm font-bold text-[#26333d] transition hover:bg-[#26333d] hover:text-white"
              >
                Choose Business Plan
              </a>
            </div>
          </div>
          {/* Custom Volume Plan */}
          <div
            className="mx-auto mt-10 max-w-5xl rounded-3xl border border-white/10 bg-white/10 p-8 text-center shadow-xl backdrop-blur"
          >
            <h3 className="text-2xl font-bold text-white">
              Need 1,000+ Minutes or Special Coverage?
            </h3>
            <p className="mx-auto mt-3 max-w-3xl text-sm leading-7 text-white/75">
              Custom volume plans are available for high-call-volume businesses, after-hours answering, weekend coverage, bilingual answering, medical workflows, legal intake, dispatch support, and multi-location businesses.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <span
                className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white"
              >
                24/7 Answering
              </span>
              <span
                className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white"
              >
                After-Hours Support
              </span>
              <span
                className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white"
              >
                Call Overflow
              </span>
              <span
                className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white"
              >
                Bilingual Answering
              </span>
              <span
                className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white"
              >
                Appointment Scheduling
              </span>
              <span
                className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white"
              >
                CRM Entry
              </span>
            </div>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center justify-center rounded-lg bg-white px-6 py-4 text-sm font-bold text-[#26333d] transition hover:bg-[#f2f5ea]"
            >
              Request Custom Quote
            </a>
          </div>
          {/* Billing Notes */}
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur">
              <h4 className="text-lg font-bold text-white">
                How Minutes Are Calculated
              </h4>
              <p className="mt-3 text-sm leading-7 text-white/70">
                Minutes are based on receptionist handling time, including live talk time, message taking, call notes, and required after-call work.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur">
              <h4 className="text-lg font-bold text-white">
                Additional Minutes
              </h4>
              <p className="mt-3 text-sm leading-7 text-white/70">
                If your monthly included minutes are used, extra minutes are billed at your plan's additional-minute rate.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur">
              <h4 className="text-lg font-bold text-white">
                Upgrade Anytime
              </h4>
              <p className="mt-3 text-sm leading-7 text-white/70">
                Start with a smaller plan and move to a larger minute package as your call volume grows.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION 8.5: INTEGRATIONS (BENTO BOX) */}
      <section className="bg-white py-24 px-4 relative overflow-hidden">
        {/* Background Detail */}
        <div
          className="bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50 absolute inset-0 -z-10"
        >
        </div>
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <h2
            className="text-3xl md:text-5xl font-bold text-[#34414A] text-center mb-6 max-w-4xl mx-auto"
          >
            Works With the Tools You Already Use — 1,000+ Integrations
          </h2>
          <p className="text-lg text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            Stop wasting time on manual data entry. Our receptionists instantly log calls, push leads, and book appointments directly into your existing tech stack.
          </p>
          {/* Marquee Slider of Logos */}
          <div className="relative w-full max-w-6xl mx-auto flex overflow-hidden group/marquee mb-16">
            {/* Edge Fades */}
            <div
              className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"
            >
            </div>
            <div
              className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"
            >
            </div>
            {/* Scrolling Track */}
            <div className="flex animate-marquee whitespace-nowrap items-center w-max">
              {/* Set 1 */}
              <div className="flex items-center gap-16 px-8 flex-shrink-0 justify-around min-w-full">
                <img
                  src="https://cdn.simpleicons.org/hubspot"
                  alt="HubSpot"
                  className="h-10 w-auto transition-transform hover:scale-110"
                />
                <img
                  src="https://cdn.simpleicons.org/zoho"
                  alt="Zoho"
                  className="h-10 w-auto transition-transform hover:scale-110"
                />
                <img
                  src="https://cdn.simpleicons.org/zendesk"
                  alt="Zendesk"
                  className="h-10 w-auto transition-transform hover:scale-110"
                />
                <img
                  src="https://cdn.simpleicons.org/calendly"
                  alt="Calendly"
                  className="h-10 w-auto transition-transform hover:scale-110"
                />
                <img
                  src="https://cdn.simpleicons.org/shopify"
                  alt="Shopify"
                  className="h-10 w-auto transition-transform hover:scale-110"
                />
                <img
                  src="https://cdn.simpleicons.org/intercom"
                  alt="Intercom"
                  className="h-10 w-auto transition-transform hover:scale-110"
                />
                <img
                  src="https://cdn.simpleicons.org/mailchimp"
                  alt="Mailchimp"
                  className="h-10 w-auto transition-transform hover:scale-110"
                />
                <img
                  src="https://cdn.simpleicons.org/notion"
                  alt="Notion"
                  className="h-10 w-auto transition-transform hover:scale-110"
                />
                <img
                  src="https://cdn.simpleicons.org/stripe"
                  alt="Stripe"
                  className="h-10 w-auto transition-transform hover:scale-110"
                />
                <img
                  src="https://cdn.simpleicons.org/zapier"
                  alt="Zapier"
                  className="h-10 w-auto transition-transform hover:scale-110"
                />
              </div>
              {/* Duplicate Set for Seamless Loop */}
              <div
                className="flex items-center gap-16 px-8 flex-shrink-0 justify-around min-w-full"
                aria-hidden="true"
              >
                <img
                  src="https://cdn.simpleicons.org/hubspot"
                  alt="HubSpot"
                  className="h-10 w-auto transition-transform hover:scale-110"
                />
                <img
                  src="https://cdn.simpleicons.org/zoho"
                  alt="Zoho"
                  className="h-10 w-auto transition-transform hover:scale-110"
                />
                <img
                  src="https://cdn.simpleicons.org/zendesk"
                  alt="Zendesk"
                  className="h-10 w-auto transition-transform hover:scale-110"
                />
                <img
                  src="https://cdn.simpleicons.org/calendly"
                  alt="Calendly"
                  className="h-10 w-auto transition-transform hover:scale-110"
                />
                <img
                  src="https://cdn.simpleicons.org/shopify"
                  alt="Shopify"
                  className="h-10 w-auto transition-transform hover:scale-110"
                />
                <img
                  src="https://cdn.simpleicons.org/intercom"
                  alt="Intercom"
                  className="h-10 w-auto transition-transform hover:scale-110"
                />
                <img
                  src="https://cdn.simpleicons.org/mailchimp"
                  alt="Mailchimp"
                  className="h-10 w-auto transition-transform hover:scale-110"
                />
                <img
                  src="https://cdn.simpleicons.org/notion"
                  alt="Notion"
                  className="h-10 w-auto transition-transform hover:scale-110"
                />
                <img
                  src="https://cdn.simpleicons.org/stripe"
                  alt="Stripe"
                  className="h-10 w-auto transition-transform hover:scale-110"
                />
                <img
                  src="https://cdn.simpleicons.org/zapier"
                  alt="Zapier"
                  className="h-10 w-auto transition-transform hover:scale-110"
                />
              </div>
            </div>
          </div>
          {/* The Bento Box Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1: CRM */}
            <div
              className="bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#8CA365] transition-all duration-300 group flex flex-col"
            >
              <div
                className="h-32 bg-slate-50 rounded-2xl mb-6 flex items-center justify-center gap-4 relative overflow-hidden"
              >
                <div
                  className="absolute inset-0 bg-[#8CA365]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                >
                </div>
                {/* Simple Headset/LPA Icon (Left) */}
                <div
                  className="w-10 h-10 bg-[#34414A] rounded-full flex items-center justify-center z-10 shadow-md"
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                {/* Dashed Line Animation */}
                <div className="w-12 h-0 border-t-2 border-dashed border-gray-300 relative z-0">
                  <div
                    className="absolute -top-1 left-0 w-2 h-2 bg-[#8CA365] rounded-full opacity-0 group-hover:animate-[dashFlow_1.5s_linear_infinite]"
                  >
                  </div>
                </div>
                {/* Logos (Right) */}
                <div className="flex -space-x-3 z-10">
                  <div
                    className="w-10 h-10 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center p-2"
                  >
                    <img
                      src="https://cdn.simpleicons.org/hubspot"
                      alt="HubSpot"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div
                    className="w-10 h-10 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center p-2"
                  >
                    <img
                      src="https://cdn.simpleicons.org/zoho"
                      alt="Zoho"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div
                    className="w-10 h-10 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center p-2"
                  >
                    <img
                      src="https://cdn.simpleicons.org/notion"
                      alt="Notion"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#34414A] mb-3">
                CRM Integrations
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                Never lose a lead in the shuffle. We push new caller data, notes, and call outcomes directly into your CRM the second the call ends.
              </p>
            </div>
            {/* Card 2: Scheduling */}
            <div
              className="bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#8CA365] transition-all duration-300 group flex flex-col"
            >
              <div
                className="h-32 bg-slate-50 rounded-2xl mb-6 flex items-center justify-center gap-4 relative overflow-hidden"
              >
                <div
                  className="absolute inset-0 bg-[#8CA365]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                >
                </div>
                {/* Simple Headset/LPA Icon (Left) */}
                <div
                  className="w-10 h-10 bg-[#34414A] rounded-full flex items-center justify-center z-10 shadow-md"
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                {/* Dashed Line Animation */}
                <div className="w-12 h-0 border-t-2 border-dashed border-gray-300 relative z-0">
                  <div
                    className="absolute -top-1 left-0 w-2 h-2 bg-[#8CA365] rounded-full opacity-0 group-hover:animate-[dashFlow_1.5s_linear_infinite]"
                  >
                  </div>
                </div>
                {/* Logos (Right) */}
                <div className="flex -space-x-3 z-10">
                  <div
                    className="w-10 h-10 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center p-2"
                  >
                    <img
                      src="https://cdn.simpleicons.org/calendly"
                      alt="Calendly"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div
                    className="w-10 h-10 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center p-2"
                  >
                    <img
                      src="https://cdn.simpleicons.org/googlecalendar"
                      alt="Google Calendar"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div
                    className="w-10 h-10 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center p-2"
                  >
                    <img
                      src="https://cdn.simpleicons.org/airtable"
                      alt="Airtable"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#34414A] mb-3">
                Scheduling Tools
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                Wake up to a full calendar. We securely access your real-time availability and book appointments directly on your schedule.
              </p>
            </div>
            {/* Card 3: Helpdesk */}
            <div
              className="bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#8CA365] transition-all duration-300 group flex flex-col"
            >
              <div
                className="h-32 bg-slate-50 rounded-2xl mb-6 flex items-center justify-center gap-4 relative overflow-hidden"
              >
                <div
                  className="absolute inset-0 bg-[#8CA365]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                >
                </div>
                {/* Simple Headset/LPA Icon (Left) */}
                <div
                  className="w-10 h-10 bg-[#34414A] rounded-full flex items-center justify-center z-10 shadow-md"
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                {/* Dashed Line Animation */}
                <div className="w-12 h-0 border-t-2 border-dashed border-gray-300 relative z-0">
                  <div
                    className="absolute -top-1 left-0 w-2 h-2 bg-[#8CA365] rounded-full opacity-0 group-hover:animate-[dashFlow_1.5s_linear_infinite]"
                  >
                  </div>
                </div>
                {/* Logos (Right) */}
                <div className="flex -space-x-3 z-10">
                  <div
                    className="w-10 h-10 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center p-2"
                  >
                    <img
                      src="https://cdn.simpleicons.org/zendesk"
                      alt="Zendesk"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div
                    className="w-10 h-10 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center p-2"
                  >
                    <img
                      src="https://cdn.simpleicons.org/intercom"
                      alt="Intercom"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div
                    className="w-10 h-10 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center p-2"
                  >
                    <img
                      src="https://cdn.simpleicons.org/helpscout"
                      alt="Help Scout"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#34414A] mb-3">
                Helpdesk & Ticketing
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                Keep your customers happy. We log support requests, screen issues, and route urgent tickets to the right department instantly.
              </p>
            </div>
          </div>
          {/* The Zapier Banner */}
          <div
            className="mt-10 bg-[#34414A] rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between shadow-lg"
          >
            <p className="text-white font-medium text-lg text-center md:text-left">
              Need something else? We connect to 1,000+ apps via Zapier.
            </p>
            <a
              href="#"
              className="bg-[#8CA365] hover:bg-[#7a8f57] text-white px-6 py-2 rounded-lg font-bold transition-colors mt-4 md:mt-0 whitespace-nowrap"
            >
              View All Integrations
            </a>
          </div>
        </div>
      </section>
      {/* Animation keyframes for the data flow */}
      {/* SECTION 9: SOCIAL PROOF & TESTIMONIALS */}
      <section className="bg-slate-50 py-14 sm:py-24 px-4 relative" id="about-us">
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
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
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
                      src="https://i.pravatar.cc/150?img=47"
                      alt="Sarah J."
                      className="w-10 h-10 rounded-full object-cover"
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
                      fill="#00B67A"
                      d="M256 0c141.385 0 256 114.615 256 256S397.385 512 256 512 0 397.385 0 256 114.615 0 256 0z"
                    />
                    <path
                      fill="#FFF"
                      d="M346.066 208.572h-74.872l-23.018-71.18c-1.39-4.298-7.362-4.298-8.752 0l-23.018 71.18h-74.872c-4.52 0-6.398 5.8-2.742 8.468l60.575 44.17-23.14 71.558c-1.396 4.318 3.82 8.125 7.482 5.466l60.672-44.24 60.672 44.24c3.662 2.66 8.878-1.148 7.482-5.466l-23.14-71.558 60.575-44.17c3.655-2.668 1.777-8.468-2.742-8.468z"
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
                      fill="#D32323"
                      d="M129.288 335.631c-6.853-6.529-16.714-8.868-25.592-5.747L14.71 361.026c-11.237 3.966-17.07 16.326-13.064 27.524 35.803 100.086 123.633 118.825 151.724 121.725 11.834 1.22 22.18-7.391 23.364-19.245l5.228-52.482c1.066-10.732-5.074-20.584-14.887-24.168l-37.787-78.749zm360.771 14.512L413.22 312.388c-7.015-4.475-16.196-4.664-23.4-.416l-80.007 47.013c-8.914 5.242-12.825 16.143-9.155 25.556 32.552 83.568 20.887 114.779 17.514 122.502-4.706 10.82 2.628 23.308 14.47 24.385 41.677 3.791 142.148-1.524 177.346-132.894 3.09-11.517-5.111-23.473-16.929-28.391zM368.625 210.05c11.047-3.053 22.846 1.706 28.514 11.503l40.407 69.894c5.962 10.309 18.995 13.794 29.288 7.822 86.858-50.413 36.329-158.423 21.055-184.283-6.002-10.158-19.349-12.873-29.243-5.918l-70.627 49.657c-8.318 5.845-12.569 16.299-10.347 26.332l-9.047 24.993zM250.793 4.298C244.975-2.023 234.351-1.353 228.614 5.6c-48.406 58.622-48.291 144.577-43.255 174.659 2.059 12.28 12.548 21.439 24.981 21.849l89.654 2.94c12.213.4 22.955-8.118 25.61-20.17 11.83-53.72-27.159-128.599-74.811-180.58zM172.936 217.472l-86.877-24.162c-11.44-3.181-23.364 3.488-26.702 14.887-25.109 85.805 13.921 161.859 34.024 186.275 7.625 9.255 21.602 10.048 30.138 1.706l60.916-59.565c6.645-6.495 8.905-16.327 5.755-25.117l-17.254-94.024z"
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
                      src="https://i.pravatar.cc/150?img=11"
                      alt="James L."
                      className="w-10 h-10 rounded-full object-cover"
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
                      fill="#1877F2"
                      d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
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
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
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
                      src="https://i.pravatar.cc/150?img=53"
                      alt="David M."
                      className="w-10 h-10 rounded-full object-cover"
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
                      fill="#00B67A"
                      d="M256 0c141.385 0 256 114.615 256 256S397.385 512 256 512 0 397.385 0 256 114.615 0 256 0z"
                    />
                    <path
                      fill="#FFF"
                      d="M346.066 208.572h-74.872l-23.018-71.18c-1.39-4.298-7.362-4.298-8.752 0l-23.018 71.18h-74.872c-4.52 0-6.398 5.8-2.742 8.468l60.575 44.17-23.14 71.558c-1.396 4.318 3.82 8.125 7.482 5.466l60.672-44.24 60.672 44.24c3.662 2.66 8.878-1.148 7.482-5.466l-23.14-71.558 60.575-44.17c3.655-2.668 1.777-8.468-2.742-8.468z"
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
      {/* SECTION 10: 100% Human vs Bot Differentiator */}
      <section className="bg-slate-50 py-14 sm:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <h2
            className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#34414A] text-center mb-6 max-w-4xl mx-auto leading-tight"
          >
            Real Human Receptionists. No Frustrating Bots.
          </h2>
          <p className="text-gray-600 text-center mb-16 max-w-3xl mx-auto text-lg leading-relaxed">
            When customers call your business, they want to speak with someone who listens, understands, and helps them quickly. Our live phone answering service gives callers a real human experience, so your business can build trust, capture more leads, and avoid the frustration of voicemail or automated phone menus.
          </p>
          {/* Tabs Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            <button
              className="human-tab active bg-green text-white px-6 py-3 rounded-full font-bold text-sm sm:text-base border-2 border-transparent transition-all shadow-md"
              data-target="human-tab-1"
            >
              Real Human Empathy
            </button>
            <button
              className="human-tab bg-white text-gray-500 px-6 py-3 rounded-full font-bold text-sm sm:text-base border-2 border-gray-200 hover:border-gray-300 hover:text-navy transition-all"
              data-target="human-tab-2"
            >
              Zero Bot Frustration
            </button>
            <button
              className="human-tab bg-white text-gray-500 px-6 py-3 rounded-full font-bold text-sm sm:text-base border-2 border-gray-200 hover:border-gray-300 hover:text-navy transition-all"
              data-target="human-tab-3"
            >
              Higher Close Rates
            </button>
          </div>
          {/* Tab Content Area */}
          <div
            className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-gray-100 relative overflow-hidden min-h-[400px]"
          >
            {/* Tab 1: Empathy */}
            <div
              className="human-tab-pane grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-opacity duration-500"
              id="human-tab-1"
            >
              <div>
                <div
                  className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 text-green-dark text-sm font-bold rounded-full mb-6"
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
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Instant Connection
                </div>
                <h3 className="text-3xl md:text-4xl font-extrabold text-navy mb-6 leading-tight">
                  Build Trust With Every Caller
                </h3>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  A real receptionist can understand tone, urgency, and customer needs in a way automated systems often cannot. We help callers feel heard, supported, and confident that your business will follow up.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <svg
                      className="w-6 h-6 text-green shrink-0 mt-0.5"
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
                    <span className="text-gray-700 font-medium">
                      Calm frustrated or urgent callers with a real conversation.
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <svg
                      className="w-6 h-6 text-green shrink-0 mt-0.5"
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
                    <span className="text-gray-700 font-medium">
                      Create a professional first impression for every new lead.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-2xl relative border-4 border-gray-50">
                <img
                  src="/images/real-human-empathy-live-phone-answering-service.webp"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                  alt="Live receptionist providing real human empathy during a business phone answering call"
            width={1200}
            height={1200}
            loading="lazy"
            decoding="async"
          />
              </div>
            </div>
            {/* Tab 2: Zero Bots */}
            <div
              className="human-tab-pane hidden grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-opacity duration-500"
              id="human-tab-2"
            >
              <div>
                <div
                  className="inline-flex items-center gap-2 px-3 py-1 bg-amber/10 text-amber text-sm font-bold rounded-full mb-6"
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
                      d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                    />
                  </svg>
                  Better Caller Experience
                </div>
                <h3 className="text-3xl md:text-4xl font-extrabold text-navy mb-6 leading-tight">
                  Avoid the Frustration of Automated Menus
                </h3>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  Many callers hang up when they reach confusing phone menus, voicemail, or robotic responses. Our live answering team helps callers get the support they need without forcing them through a frustrating automated process.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <svg
                      className="w-6 h-6 text-green shrink-0 mt-0.5"
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
                    <span className="text-gray-700 font-medium">
                      Reduce abandoned calls from voicemail and phone menus.
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <svg
                      className="w-6 h-6 text-green shrink-0 mt-0.5"
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
                    <span className="text-gray-700 font-medium">
                      Help callers reach the right next step faster.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-2xl relative border-4 border-gray-50">
                <img
                  src="/images/zero-bot-frustration-live-answering-service.webp"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                  alt="Live phone answering service connecting callers to a real receptionist instead of automated bots"
            width={1200}
            height={1200}
            loading="lazy"
            decoding="async"
          />
              </div>
            </div>
            {/* Tab 3: Higher Close Rates */}
            <div
              className="human-tab-pane hidden grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-opacity duration-500"
              id="human-tab-3"
            >
              <div>
                <div
                  className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 text-green-dark text-sm font-bold rounded-full mb-6"
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
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                  More Calls Into Customers
                </div>
                <h3 className="text-3xl md:text-4xl font-extrabold text-navy mb-6 leading-tight">
                  Turn More Conversations Into Opportunities
                </h3>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  When calls are answered quickly and professionally, your business has a better chance of capturing the lead, booking the appointment, or routing the customer to the right person before they call a competitor.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <svg
                      className="w-6 h-6 text-green shrink-0 mt-0.5"
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
                    <span className="text-gray-700 font-medium">
                      Capture caller details while interest is high.
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <svg
                      className="w-6 h-6 text-green shrink-0 mt-0.5"
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
                    <span className="text-gray-700 font-medium">
                      Help more calls become booked appointments or qualified leads.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-2xl relative border-4 border-gray-50">
                <img
                  src="/images/higher-close-rates-live-phone-answering-service.webp"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                  alt="Live receptionist capturing a new lead and booking an appointment to improve close rates"
            width={1200}
            height={1200}
            loading="lazy"
            decoding="async"
          />
              </div>
            </div>
          </div>
          {/* Bottom Trust Banner */}
          <div
            className="mt-16 text-center text-[#34414A] font-bold text-xl flex items-center justify-center gap-3"
          >
            <span className="text-2xl">
              🇺🇸
            </span>
            100% US-Based Receptionists. Fully Trained & Ready to Answer.
          </div>
        </div>
      </section>
      {/* SECTION 10: FAQ Split-Pane */}
      <section className="bg-white py-14 sm:py-24 px-4 border-t border-gray-100" id="faq">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-24">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#34414A] leading-tight mb-6">
                Frequently Asked Questions About Live Phone Answering Services
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
                <a
                  href="#contact"
                  className="text-sm font-bold text-[#8CA365] hover:text-[#7a8f57] flex items-center gap-2"
                >
                  Contact Support
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
                </a>
              </div>
            </div>
            {/* Right Column (The Accordion List) */}
            <div className="lg:col-span-8 flex flex-col gap-4">
              {/* Accordion Item 1 */}
              <div
                className="new-faq-item bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300"
              >
                <div
                  className="new-faq-q flex justify-between items-center w-full p-6 cursor-pointer group text-left"
                >
                  <h3
                    className="text-lg font-bold text-[#34414A] pr-4 group-hover:text-[#8CA365] transition-colors"
                  >
                    How much does an answering service cost?
                  </h3>
                  <div
                    className="new-faq-icon w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-gray-500 group-hover:bg-[#8CA365] group-hover:text-white transition-all transform duration-300"
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
                <div className="new-faq-a max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                  <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                    Usually, the cost is round __________. Answering service pricing depends on the provider, call volume, and features included. Some companies offer pay per call answering service plans, while others charge monthly packages.
                  </div>
                </div>
              </div>
              {/* Accordion Item 2 */}
              <div
                className="new-faq-item bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300"
              >
                <div
                  className="new-faq-q flex justify-between items-center w-full p-6 cursor-pointer group text-left"
                >
                  <h3
                    className="text-lg font-bold text-[#34414A] pr-4 group-hover:text-[#8CA365] transition-colors"
                  >
                    How does a live answering service work for businesses?
                  </h3>
                  <div
                    className="new-faq-icon w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-gray-500 group-hover:bg-[#8CA365] group-hover:text-white transition-all transform duration-300"
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
                <div className="new-faq-a max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                  <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                    A live answering service answers business calls on your behalf using trained virtual receptionists. We answer calls professionally, take messages on your behalf, book appointments, and transfer urgent calls directly to your team.
                  </div>
                </div>
              </div>
              {/* Accordion Item 3 */}
              <div
                className="new-faq-item bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300"
              >
                <div
                  className="new-faq-q flex justify-between items-center w-full p-6 cursor-pointer group text-left"
                >
                  <h3
                    className="text-lg font-bold text-[#34414A] pr-4 group-hover:text-[#8CA365] transition-colors"
                  >
                    What are the main benefits of using a live phone answering service?
                  </h3>
                  <div
                    className="new-faq-icon w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-gray-500 group-hover:bg-[#8CA365] group-hover:text-white transition-all transform duration-300"
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
                <div className="new-faq-a max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                  <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                    The biggest benefits include fewer missed calls, better customer support, improved lead capture, and more time for business owners to focus on operations. Businesses also gain a more professional image while reducing staffing costs.
                  </div>
                </div>
              </div>
              {/* Accordion Item 4 */}
              <div
                className="new-faq-item bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300"
              >
                <div
                  className="new-faq-q flex justify-between items-center w-full p-6 cursor-pointer group text-left"
                >
                  <h3
                    className="text-lg font-bold text-[#34414A] pr-4 group-hover:text-[#8CA365] transition-colors"
                  >
                    Can a live answering service handle after-hours and weekend calls?
                  </h3>
                  <div
                    className="new-faq-icon w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-gray-500 group-hover:bg-[#8CA365] group-hover:text-white transition-all transform duration-300"
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
                <div className="new-faq-a max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                  <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                    Yes. Many services offer after hours answering service, weekend answering service, overnight answering service, and holiday answering service options. This helps businesses stay available outside regular office hours.
                  </div>
                </div>
              </div>
              {/* Accordion Item 5 */}
              <div
                className="new-faq-item bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300"
              >
                <div
                  className="new-faq-q flex justify-between items-center w-full p-6 cursor-pointer group text-left"
                >
                  <h3
                    className="text-lg font-bold text-[#34414A] pr-4 group-hover:text-[#8CA365] transition-colors"
                  >
                    What types of businesses benefit most from live phone answering?
                  </h3>
                  <div
                    className="new-faq-icon w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-gray-500 group-hover:bg-[#8CA365] group-hover:text-white transition-all transform duration-300"
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
                <div className="new-faq-a max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                  <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                    Many industries benefit, including healthcare, law firms, contractors, real estate agencies, plumbing companies, and small businesses. Any business that depends on customer calls or appointment scheduling can benefit from professional phone support.
                  </div>
                </div>
              </div>
              {/* Accordion Item 6 */}
              <div
                className="new-faq-item bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300"
              >
                <div
                  className="new-faq-q flex justify-between items-center w-full p-6 cursor-pointer group text-left"
                >
                  <h3
                    className="text-lg font-bold text-[#34414A] pr-4 group-hover:text-[#8CA365] transition-colors"
                  >
                    How do you choose the right live answering service provider?
                  </h3>
                  <div
                    className="new-faq-icon w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-gray-500 group-hover:bg-[#8CA365] group-hover:text-white transition-all transform duration-300"
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
                <div className="new-faq-a max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                  <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                    Businesses should compare answering service reviews, pricing, features, availability, and customer support quality. It is also important to check whether the provider offers flexible plans, no contract answering service options, and industry-specific support.
                  </div>
                </div>
              </div>
              {/* Accordion Item 7 */}
              <div
                className="new-faq-item bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300"
              >
                <div
                  className="new-faq-q flex justify-between items-center w-full p-6 cursor-pointer group text-left"
                >
                  <h3
                    className="text-lg font-bold text-[#34414A] pr-4 group-hover:text-[#8CA365] transition-colors"
                  >
                    How is an AI answering service different from a live answering service?
                  </h3>
                  <div
                    className="new-faq-icon w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-gray-500 group-hover:bg-[#8CA365] group-hover:text-white transition-all transform duration-300"
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
                <div className="new-faq-a max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                  <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                    An AI answering service uses advanced technology to answer calls, automate responses, and assist with lead capture or appointment booking. A live answering service uses human receptionists. Businesses like “Live Phone Answering” combine both solutions to improve efficiency while still maintaining a personal customer experience.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#0f2925] py-14 sm:py-24 px-4 relative overflow-hidden" id="contact">
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
        {/* Subtle background graphic */}
        <div
          className="absolute -top-40 -left-40 w-96 h-96 bg-[#8CA365] rounded-full mix-blend-multiply filter blur-[128px] opacity-50 pointer-events-none"
        >
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left Column (Copy & Trust Signals) */}
            <div>
              <h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4 md:mb-6"
              >
                Get Started Today — No Credit Card, No Contract
              </h2>
              <h3 className="text-xl font-medium text-green-400 mb-6">
                Set up takes less than 5 minutes. Cancel anytime.
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed mb-10 max-w-lg">
                Ready to stop missing leads and start growing your business? Experience the difference a professional, 24/7 US-based team makes.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <svg
                    className="text-[#8CA365] w-6 h-6 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-white font-medium">
                    No lock-in contracts or hidden fees
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    className="text-[#8CA365] w-6 h-6 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-white font-medium">
                    100% US-based, highly trained receptionists
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    className="text-[#8CA365] w-6 h-6 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-white font-medium">
                    24/7/365 coverage, including holidays
                  </span>
                </div>
              </div>
              <div className="border-t border-slate-600 my-8 w-3/4">
              </div>
              <div className="text-slate-300 text-lg">
                Prefer to talk first? Call us at
                <a
                  href="tel:8574531055"
                  className="font-bold text-white hover:text-[#8CA365] transition-colors"
                >
                  (857) 453-1055
                </a>
              </div>
            </div>
            {/* Right Column (The Lead Capture Form Card) */}
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl relative">
              <h3 className="text-2xl font-bold text-[#34414A] mb-2">
                Create Your Account
              </h3>
              <p className="text-gray-500 text-sm mb-8">
                Fill out the details below and our onboarding team will reach out in minutes.
              </p>
              <form id="contact-form" className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="col-span-1 md:col-span-2">
                  <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="John Doe"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#8CA365] focus:bg-white transition-all"
                    required
                  />
                </div>
                <div className="col-span-1">
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Work Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@company.com"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#8CA365] focus:bg-white transition-all"
                    required
                  />
                </div>
                <div className="col-span-1">
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="(555) 000-0000"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#8CA365] focus:bg-white transition-all"
                    required
                  />
                </div>
                <div className="col-span-1 md:col-span-2">
                  <label htmlFor="industry" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Industry
                  </label>
                  <select
                    id="industry"
                    name="industry"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#8CA365] focus:bg-white transition-all"
                    required
                    defaultValue=""
                  >
                    <option value="" disabled>
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
                    type="submit"
                    className="w-full bg-[#8CA365] hover:bg-[#7a8f57] text-white font-bold text-lg py-4 rounded-xl shadow-lg transition-transform hover:-translate-y-1 mt-8"
                  >
                    Submit Request
                  </button>
                </div>
                <div className="col-span-1 md:col-span-2">
                  <p className="text-xs text-gray-400 mt-4 text-center">
                    By submitting, you agree to our Terms of Service and Privacy Policy. We never sell your data.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* FOOTER */}
      {/* EmailJS Integration */}
    </>
  )
}
