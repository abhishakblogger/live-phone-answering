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
      {/* HERO SECTION (Mint Green Centered) */}
      <section
        className="relative overflow-hidden py-16 sm:py-20 lg:py-24 px-4 lg:px-[5%]"
        aria-label="How It Works Hero"
      >
        {/* Mint green gradient background (matches services page) */}
        <div
          className="absolute inset-0 z-0"
          style={{ background: "linear-gradient(160deg, #c6ecb5 0%, #d4f1c4 20%, #e2f5d8 40%, #eef8e8 60%, #f5fbf2 80%, #ffffff 100%)" }}
        >
        </div>
        {/* Creative background elements */}
        <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
          {/* Organic blob shapes */}
          <div
            className="absolute -top-20 -left-16 w-[350px] h-[350px] bg-[#8CA365]/15 opacity-70"
            style={{ animation: "blobMorph 12s ease-in-out infinite", borderRadius: "42% 58% 55% 45% / 56% 42% 58% 44%" }}
          >
          </div>
          <div
            className="absolute top-1/3 -right-20 w-[280px] h-[280px] bg-[#295657]/10 opacity-60"
            style={{ animation: "blobMorph 15s ease-in-out infinite 3s", borderRadius: "55% 45% 42% 58% / 44% 56% 44% 56%" }}
          >
          </div>
          <div
            className="absolute -bottom-16 left-1/3 w-[320px] h-[320px] bg-[#8CA365]/10 opacity-50"
            style={{ animation: "blobMorph 18s ease-in-out infinite 6s", borderRadius: "45% 55% 58% 42% / 58% 44% 42% 58%" }}
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
            className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.03]"
            style={{ background: "repeating-linear-gradient(135deg, #295657, #295657 1px, transparent 1px, transparent 40px)" }}
          >
          </div>
        </div>
        {/* Content */}
        <div className="max-w-3xl mx-auto text-center relative z-10">
          {/* Eyebrow */}
          <div
            className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm text-[#4a7a3e] rounded-full text-sm font-semibold px-5 py-2 mb-6 shadow-sm border border-white/50"
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
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            Simple 3-Step Setup
          </div>
          {/* Headline */}
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.6rem] font-extrabold text-[#1a2e35] leading-[1.1] tracking-tight"
            style={{ animation: "blobFadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s both" }}
          >
            How Our Live Answering
            <br className="hidden sm:block" />
            Service Works
          </h1>
          {/* Sub-headline */}
          <p
            className="text-base sm:text-lg text-[#3d5c42] mt-5 max-w-2xl mx-auto leading-relaxed"
            style={{ animation: "blobFadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.2s both" }}
          >
            Get set up in under 5 minutes. Forward your calls, and our US-based receptionists answer as your business — no contracts, no setup fees.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
            style={{ animation: "blobFadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.3s both" }}
          >
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center gap-2 bg-[#8CA365] hover:bg-[#7a8f57] text-white font-bold py-3.5 px-8 rounded-xl shadow-lg transition-all hover:-translate-y-1 text-base"
            >
              Get Started Today →
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 bg-white/80 backdrop-blur-sm border-2 border-[#34414A]/15 text-[#34414A] font-bold py-3.5 px-8 rounded-xl hover:bg-white transition-all hover:-translate-y-1 text-base"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
      {/* 3-STEP PROCESS */}
      <section
        className="py-20 md:py-32 relative overflow-hidden font-sans bg-slate-50 border-t border-gray-100"
        id="how-it-works-steps"
      >
        {/* Subtle bg decoration */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-[#8CA365]/5 rounded-full blur-3xl"
          >
          </div>
          <div className="absolute bottom-0 -left-20 w-96 h-96 bg-[#295657]/5 rounded-full blur-3xl">
          </div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
            <div
              className="inline-flex items-center gap-2 bg-[#8CA365]/10 text-[#6b8a3e] rounded-full text-sm font-semibold px-4 py-1.5 mb-5"
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
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              3 Simple Steps
            </div>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#34414A] tracking-tight leading-tight"
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
              className="hidden md:block absolute top-[3.5rem] left-[15%] right-[15%] border-t-2 border-dashed border-gray-300 z-0"
            >
            </div>
            {/* Step 1: Forward Your Business Number */}
            <div
              className="bg-white rounded-3xl p-8 lg:p-10 shadow-md hover:shadow-xl flex flex-col items-center text-center h-full relative z-10 transition-all duration-300 hover:-translate-y-1 border border-gray-100"
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
              className="bg-white rounded-3xl p-8 lg:p-10 shadow-md hover:shadow-xl flex flex-col items-center text-center h-full relative z-10 transition-all duration-300 hover:-translate-y-1 border border-gray-100"
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
              className="bg-white rounded-3xl p-8 lg:p-10 shadow-md hover:shadow-xl flex flex-col items-center text-center h-full relative z-10 transition-all duration-300 hover:-translate-y-1 border border-gray-100"
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
      {/* WHAT HAPPENS ON EVERY CALL (Detailed Flow) */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden font-sans">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-[#8CA365]/5 rounded-full blur-3xl"
          >
          </div>
          <div className="absolute bottom-0 -left-16 w-80 h-80 bg-[#295657]/5 rounded-full blur-3xl">
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
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
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Behind Every Call
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#34414A] tracking-tight mb-4">
              What Happens On Every Call
            </h2>
            <p className="text-lg text-gray-600">
              From the first ring to the final notification — here's exactly how we handle your calls with precision and professionalism.
            </p>
          </div>
          {/* Timeline Steps */}
          <div className="max-w-4xl mx-auto space-y-8 lg:space-y-0">
            {/* Step 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center reveal">
              <div className="lg:col-span-1 flex justify-center">
                <div
                  className="w-12 h-12 bg-[#8CA365] text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg"
                >
                  1
                </div>
              </div>
              <div className="lg:col-span-5">
                <h3 className="text-xl font-bold text-[#34414A] mb-2">
                  The Phone Rings
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Your customer calls your business number. The call is instantly forwarded to our team — no delays, no voicemail, no hold music.
                </p>
              </div>
              <div className="lg:col-span-6">
                <div className="bg-slate-50 rounded-2xl p-6 border border-gray-100">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-[#8CA365]/10 rounded-lg flex items-center justify-center">
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
                    <span className="text-sm font-bold text-[#34414A]">
                      Average pickup: Under 4 rings
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">
                    Calls are answered by a live, US-based receptionist in seconds — not minutes.
                  </p>
                </div>
              </div>
            </div>
            {/* Connector */}
            <div className="hidden lg:flex justify-center py-2">
              <div className="w-px h-8 bg-gray-200">
              </div>
            </div>
            {/* Step 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center reveal reveal-delay-1">
              <div className="lg:col-span-1 flex justify-center">
                <div
                  className="w-12 h-12 bg-[#295657] text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg"
                >
                  2
                </div>
              </div>
              <div className="lg:col-span-5">
                <h3 className="text-xl font-bold text-[#34414A] mb-2">
                  Branded Greeting
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our receptionist answers with your custom greeting — your business name, your tone, your script. The caller has no idea they're speaking to an outsourced team.
                </p>
              </div>
              <div className="lg:col-span-6">
                <div className="bg-slate-50 rounded-2xl p-6 border border-gray-100">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-[#295657]/10 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-[#295657]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                        />
                      </svg>
                    </div>
                    <span className="text-sm font-bold text-[#34414A]">
                      Example greeting
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 italic">
                    "Thank you for calling [Your Business Name], this is Sarah, how can I help you today?"
                  </p>
                </div>
              </div>
            </div>
            {/* Connector */}
            <div className="hidden lg:flex justify-center py-2">
              <div className="w-px h-8 bg-gray-200">
              </div>
            </div>
            {/* Step 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center reveal reveal-delay-2">
              <div className="lg:col-span-1 flex justify-center">
                <div
                  className="w-12 h-12 bg-[#8CA365] text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg"
                >
                  3
                </div>
              </div>
              <div className="lg:col-span-5">
                <h3 className="text-xl font-bold text-[#34414A] mb-2">
                  Qualify, Book, or Transfer
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Based on your instructions, we qualify the lead, book an appointment, answer FAQs, transfer the call live, or take a detailed message — exactly how you'd handle it.
                </p>
              </div>
              <div className="lg:col-span-6">
                <div className="bg-slate-50 rounded-2xl p-6 border border-gray-100">
                  <div className="flex flex-wrap gap-2">
                    <span
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-bold border border-green-100"
                    >
                      ✓ Book appointments
                    </span>
                    <span
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-100"
                    >
                      ✓ Transfer calls
                    </span>
                    <span
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-bold border border-amber-100"
                    >
                      ✓ Take messages
                    </span>
                    <span
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-bold border border-purple-100"
                    >
                      ✓ Answer FAQs
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Connector */}
            <div className="hidden lg:flex justify-center py-2">
              <div className="w-px h-8 bg-gray-200">
              </div>
            </div>
            {/* Step 4 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center reveal reveal-delay-3">
              <div className="lg:col-span-1 flex justify-center">
                <div
                  className="w-12 h-12 bg-[#295657] text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg"
                >
                  4
                </div>
              </div>
              <div className="lg:col-span-5">
                <h3 className="text-xl font-bold text-[#34414A] mb-2">
                  Instant Notification
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  The moment the call ends, you get a full summary — caller name, number, reason for calling, and any action taken. Delivered instantly via text, email, or our app.
                </p>
              </div>
              <div className="lg:col-span-6">
                <div className="bg-slate-50 rounded-2xl p-6 border border-gray-100">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-[#295657]/10 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-[#295657]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                        />
                      </svg>
                    </div>
                    <span className="text-sm font-bold text-[#34414A]">
                      Delivery channels
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-sm text-gray-500 flex items-center gap-1">
                      📱 SMS
                    </span>
                    <span className="text-sm text-gray-500 flex items-center gap-1">
                      📧 Email
                    </span>
                    <span className="text-sm text-gray-500 flex items-center gap-1">
                      📲 App
                    </span>
                    <span className="text-sm text-gray-500 flex items-center gap-1">
                      🔗 CRM
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* WHAT YOU GET (Features/Benefits Grid) */}
      <section className="py-20 md:py-28 bg-slate-50 relative overflow-hidden font-sans">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-[#8CA365]/5 rounded-full blur-3xl"
          >
          </div>
          <div className="absolute bottom-0 -left-20 w-96 h-96 bg-[#295657]/5 rounded-full blur-3xl">
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <div
              className="inline-flex items-center gap-2 bg-[#8CA365]/10 text-[#6b8a3e] rounded-full text-sm font-semibold px-4 py-1.5 mb-5"
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
                  d="M5 13l4 4L19 7"
                />
              </svg>
              What's Included
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#34414A] tracking-tight mb-4">
              Everything You Get With Our Service
            </h2>
            <p className="text-lg text-gray-600">
              No hidden extras. Every plan includes the tools and features you need to run your business professionally.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div
              className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 reveal"
            >
              <div
                className="w-14 h-14 bg-[#8CA365]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#8CA365]/20 transition-colors"
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
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#34414A] mb-3">
                Custom Call Scripts
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We follow your exact greeting, FAQ answers, escalation rules, and transfer protocols. Every call sounds like your in-house team.
              </p>
            </div>
            {/* Feature 2 */}
            <div
              className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 reveal reveal-delay-1"
            >
              <div
                className="w-14 h-14 bg-[#295657]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#295657]/20 transition-colors"
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
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#34414A] mb-3">
                Instant Notifications
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Get real-time alerts via SMS, email, or our app the moment a call ends. Full caller details, message, and actions taken — all at your fingertips.
              </p>
            </div>
            {/* Feature 3 */}
            <div
              className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 reveal reveal-delay-2"
            >
              <div
                className="w-14 h-14 bg-[#8CA365]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#8CA365]/20 transition-colors"
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
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#34414A] mb-3">
                Appointment Scheduling
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We book directly into Google Calendar, Calendly, Acuity, and other scheduling tools. Your calendar stays full without lifting a finger.
              </p>
            </div>
            {/* Feature 4 */}
            <div
              className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 reveal reveal-delay-3"
            >
              <div
                className="w-14 h-14 bg-[#295657]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#295657]/20 transition-colors"
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
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#34414A] mb-3">
                CRM Integration
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Leads flow directly into ServiceTitan, Clio, HubSpot, Salesforce, and more. No manual data entry — every lead is captured automatically.
              </p>
            </div>
            {/* Feature 5 */}
            <div
              className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 reveal reveal-delay-4"
            >
              <div
                className="w-14 h-14 bg-[#8CA365]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#8CA365]/20 transition-colors"
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
                    d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#34414A] mb-3">
                Bilingual Receptionists
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Fluent English and Spanish-speaking agents available 24/7. Serve your Spanish-speaking callers without separate phone lines.
              </p>
            </div>
            {/* Feature 6 */}
            <div
              className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 reveal reveal-delay-5"
            >
              <div
                className="w-14 h-14 bg-[#295657]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#295657]/20 transition-colors"
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
                    d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#34414A] mb-3">
                Online Dashboard
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Access your call history, messages, and analytics anytime from your online portal. Track call volumes, response times, and lead quality.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ SECTION (Split-Pane) */}
      <section className="bg-white py-14 sm:py-24 px-4 border-t border-gray-100" id="hiw-faq">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column */}
            <div className="lg:col-span-4 lg:sticky lg:top-24">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#34414A] leading-tight mb-6">
                Questions About Getting Started
              </h2>
              <p className="text-gray-600 mb-8">
                Everything you need to know about setup, call forwarding, notifications, and how our receptionists handle your calls.
              </p>
              <div className="bg-slate-50 border border-gray-200 rounded-2xl p-6">
                <h4 className="font-bold text-[#34414A] mb-2">
                  Need help setting up?
                </h4>
                <p className="text-sm text-gray-600 mb-4">
                  Our onboarding team walks you through everything — free of charge.
                </p>
                <Link
                  href="/contact-us"
                  className="text-sm font-bold text-[#8CA365] hover:text-[#7a8f57] flex items-center gap-2"
                >
                  Talk to Our Team
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
            {/* Right Column (Accordion) */}
            <div className="lg:col-span-8 flex flex-col gap-4">
              {/* FAQ 1 */}
              <div
                className="hiw-faq-item bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300"
              >
                <div
                  className="hiw-faq-q flex justify-between items-center w-full p-6 cursor-pointer group text-left"
                >
                  <h3
                    className="text-lg font-bold text-[#34414A] pr-4 group-hover:text-[#8CA365] transition-colors"
                  >
                    How do I forward my calls to your team?
                  </h3>
                  <div
                    className="hiw-faq-icon w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-gray-500 group-hover:bg-[#8CA365] group-hover:text-white transition-all transform duration-300 shrink-0"
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
                <div className="hiw-faq-a max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                  <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                    It's simple — just set up call forwarding on your existing phone system. We'll provide you with a dedicated number. Most phone providers let you do this with a quick dial code (like *72). Our onboarding team sends you step-by-step instructions for your specific carrier.
                  </div>
                </div>
              </div>
              {/* FAQ 2 */}
              <div
                className="hiw-faq-item bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300"
              >
                <div
                  className="hiw-faq-q flex justify-between items-center w-full p-6 cursor-pointer group text-left"
                >
                  <h3
                    className="text-lg font-bold text-[#34414A] pr-4 group-hover:text-[#8CA365] transition-colors"
                  >
                    Can I choose when you answer my calls?
                  </h3>
                  <div
                    className="hiw-faq-icon w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-gray-500 group-hover:bg-[#8CA365] group-hover:text-white transition-all transform duration-300 shrink-0"
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
                <div className="hiw-faq-a max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                  <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                    Absolutely. You have full control. Forward calls 24/7, after-hours only, during lunch, on weekends, or when you're busy. You can turn forwarding on and off anytime — it's as easy as pressing a button on your phone.
                  </div>
                </div>
              </div>
              {/* FAQ 3 */}
              <div
                className="hiw-faq-item bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300"
              >
                <div
                  className="hiw-faq-q flex justify-between items-center w-full p-6 cursor-pointer group text-left"
                >
                  <h3
                    className="text-lg font-bold text-[#34414A] pr-4 group-hover:text-[#8CA365] transition-colors"
                  >
                    How do I create my custom call script?
                  </h3>
                  <div
                    className="hiw-faq-icon w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-gray-500 group-hover:bg-[#8CA365] group-hover:text-white transition-all transform duration-300 shrink-0"
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
                <div className="hiw-faq-a max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                  <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                    During onboarding, our team helps you build a custom script — your greeting, common FAQs, escalation rules, and transfer protocols. You can update it anytime at no extra cost. We also provide script templates for common industries.
                  </div>
                </div>
              </div>
              {/* FAQ 4 */}
              <div
                className="hiw-faq-item bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300"
              >
                <div
                  className="hiw-faq-q flex justify-between items-center w-full p-6 cursor-pointer group text-left"
                >
                  <h3
                    className="text-lg font-bold text-[#34414A] pr-4 group-hover:text-[#8CA365] transition-colors"
                  >
                    How fast will I receive message notifications?
                  </h3>
                  <div
                    className="hiw-faq-icon w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-gray-500 group-hover:bg-[#8CA365] group-hover:text-white transition-all transform duration-300 shrink-0"
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
                <div className="hiw-faq-a max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                  <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                    Instantly. The moment a call ends, you receive a full summary via your chosen channel — SMS, email, app notification, or directly into your CRM. There's zero delay between the call ending and you getting the details.
                  </div>
                </div>
              </div>
              {/* FAQ 5 */}
              <div
                className="hiw-faq-item bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300"
              >
                <div
                  className="hiw-faq-q flex justify-between items-center w-full p-6 cursor-pointer group text-left"
                >
                  <h3
                    className="text-lg font-bold text-[#34414A] pr-4 group-hover:text-[#8CA365] transition-colors"
                  >
                    Do I need any special equipment or software?
                  </h3>
                  <div
                    className="hiw-faq-icon w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-gray-500 group-hover:bg-[#8CA365] group-hover:text-white transition-all transform duration-300 shrink-0"
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
                <div className="hiw-faq-a max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                  <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                    No. You don't need to install anything or buy any hardware. Everything works through your existing phone system and our online portal. If you can forward a call, you're ready to start. It works with landlines, cell phones, and VoIP systems.
                  </div>
                </div>
              </div>
              {/* FAQ 6 */}
              <div
                className="hiw-faq-item bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300"
              >
                <div
                  className="hiw-faq-q flex justify-between items-center w-full p-6 cursor-pointer group text-left"
                >
                  <h3
                    className="text-lg font-bold text-[#34414A] pr-4 group-hover:text-[#8CA365] transition-colors"
                  >
                    Can I try the service before committing?
                  </h3>
                  <div
                    className="hiw-faq-icon w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-gray-500 group-hover:bg-[#8CA365] group-hover:text-white transition-all transform duration-300 shrink-0"
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
                <div className="hiw-faq-a max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                  <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                    Yes! We offer a risk-free trial so you can experience our service firsthand. There are no long-term contracts — cancel anytime. Most businesses see the value within the first few calls.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Accordion Script */}
      <section className="bg-[#0f2925] py-14 sm:py-24 px-4 relative overflow-hidden">
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
            Ready to Set Up in Under 5 Minutes?
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Forward your number, share your script, and we start answering. It's that simple. No contracts, no setup fees, cancel anytime.
          </p>
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
                Setup in 5 minutes
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
                No equipment needed
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
                Free onboarding help
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
                Cancel anytime
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
