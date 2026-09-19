import Link from 'next/link'

export const metadata = {
  title: "After-Hours Answering Service | Live Phone Answering",
  description: "Never miss a lead after hours. Professional 24/7 after-hours answering service for US businesses to capture more leads and provide better service.",
  alternates: { canonical: "/after-hours-answering-service" },
}

const pageSchema = [
  {
    "@context": "https://schema.org/",
    "@type": "WebPage",
    "name": "What Is an After Hours Answering Service?",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [
        "#definition-text"
      ]
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Set Up Your After Hours Answering Service",
    "description": "Get your after hours answering service live in under 5 minutes.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Forward your business number",
        "text": "Keep your existing business number and use our secure forwarding code.",
        "image": "https://livephoneanswering.com/images/step1.jpg"
      },
      {
        "@type": "HowToStep",
        "name": "Set your after-hours greeting and call script",
        "text": "We build a customized call flow to handle emergencies and inquiries.",
        "image": "https://livephoneanswering.com/images/step2.jpg"
      },
      {
        "@type": "HowToStep",
        "name": "Your calls are answered live",
        "text": "A professional, US-based human answers promptly.",
        "image": "https://livephoneanswering.com/images/step3.jpg"
      },
      {
        "@type": "HowToStep",
        "name": "Instant message summary sent to you",
        "text": "Detailed notes are pushed instantly via SMS, email, or CRM.",
        "image": "https://livephoneanswering.com/images/step4.jpg"
      }
    ]
  },
  {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "After Hours Answering Service",
    "description": "Professional live after hours answering service for businesses.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "2145"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Mark D."
        },
        "datePublished": "2026-04-12",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "Before this, weekend calls went straight to voicemail and we just hoped they'd call back Monday. On our second weekend using the service, they answered a Sunday morning call and booked an estimate for a $15k commercial epoxy job. The ROI was immediate. They sound exactly like my in-house team."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Sarah Jenkins"
        },
        "datePublished": "2026-03-28",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "In personal injury law, if you don't answer at 2 AM, the client calls the next billboard they see. This after-hours team handles our midnight intakes with total empathy and precision. We haven't missed a single late-night lead since making the switch."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "David R."
        },
        "datePublished": "2026-02-15",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "We run a 24/7 HVAC business. Their emergency escalation protocol is bulletproof. They filter out the non-urgent AC questions and hold them for morning, and only wake my on-call techs for true overnight emergencies. It has saved my dispatchers from severe burnout."
      }
    ]
  }
]

export default function AfterHoursAnsweringServicePage() {
  return (
    <>
      <main>
        {/* AFTER HOURS HERO SECTION */}
        <section
          className="bg-white min-h-[90vh] flex items-center relative overflow-hidden pt-24 lg:pt-0"
        >
          {/* Subtle SaaS Texture Background */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Premium Full-Width Dot Pattern */}
            <div
              className="absolute inset-0"
              style={{ backgroundImage: "radial-gradient(#cbd5e1 2px, transparent 2px)", backgroundSize: "32px 32px" }}
            >
            </div>
            {/* Linear Fade at Bottom to blend into next section */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent">
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 py-20 lg:py-0 w-full relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column (Authority & SEO Content) */}
              <div className="lg:col-span-7 flex flex-col reveal">
                {/* H1 The Core Anchor */}
                <h1
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#34414A] leading-tight mb-6 tracking-tight"
                >
                  After Hours Answering Service — Real People Answering Your Calls at Night, Weekends & Holidays
                </h1>
                {/* AI SEO Paragraph */}
                <p
                  className="text-[#4b5563] text-base leading-relaxed mb-6 p-5 bg-green-50/50 border-l-4 border-[#8CA365] rounded-r-xl font-medium shadow-sm"
                >
                  An after hours answering service is a live call answering solution that connects your business callers to real human receptionists outside of normal business hours — including evenings, weekends, and public holidays.
                </p>
                {/* H3 Emotional Hook */}
                <h3 className="text-xl text-gray-600 leading-relaxed mb-10 max-w-2xl">
                  Your customers don't stop calling at 5pm. Neither do we. Live receptionists answering every after-hours call — so you never miss a lead, an emergency, or a new client.
                </h3>
                {/* Proof Bullets */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 mb-10">
                  {/* Bullet 1 */}
                  <div className="flex items-center gap-4 text-gray-700 font-medium">
                    <svg
                      className="w-6 h-6 text-[#8CA365] shrink-0"
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
                    Answering from 5pm–9am
                  </div>
                  {/* Bullet 2 */}
                  <div className="flex items-center gap-4 text-gray-700 font-medium">
                    <svg
                      className="w-6 h-6 text-[#8CA365] shrink-0"
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
                    Full weekend coverage
                  </div>
                  {/* Bullet 3 */}
                  <div className="flex items-center gap-4 text-gray-700 font-medium">
                    <svg
                      className="w-6 h-6 text-[#8CA365] shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                    All US holidays included
                  </div>
                  {/* Bullet 4 */}
                  <div className="flex items-center gap-4 text-gray-700 font-medium">
                    <svg
                      className="w-6 h-6 text-[#8CA365] shrink-0"
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
                    HIPAA-certified handling
                  </div>
                </div>
              </div>
              {/* Right Column (Lead Capture Form) */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end w-full reveal reveal-delay-2">
                <div
                  className="w-full max-w-md bg-white p-6 md:p-8 rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)] border border-gray-100 flex flex-col relative z-20"
                >
                  {/* Card Header (Live Proof) */}
                  <div
                    className="bg-slate-50 border border-gray-200 rounded-xl p-3 flex flex-wrap items-center justify-between gap-2 mb-5"
                  >
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">
                      Live Operational Status
                    </span>
                    <div className="flex items-center gap-2 text-green-600 font-bold text-sm">
                      <div
                        className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"
                      >
                      </div>
                      <svg
                        className="w-4 h-4 opacity-70"
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
                      <span id="live-time-est">
                        Online & Answering
                      </span>
                    </div>
                  </div>
                  {/* Form Content */}
                  <h4 className="text-2xl font-black text-[#34414A] mb-2 tracking-tight">
                    Start Your After-Hours Setup
                  </h4>
                  <p className="text-sm text-gray-500 mb-5">
                    Frictionless setup. No setup fees. Experience 24/7 coverage instantly.
                  </p>
                  {/* Form Fields (Frictionless Stack) */}
                  <form
                    action="#"
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"
                    method="POST"
                  >
                    <div className="col-span-1 md:col-span-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="fullName">
                        Full Name
                      </label>
                      <input
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#8CA365] focus:bg-white transition-all"
                        id="fullName"
                        name="fullName"
                        placeholder="John Doe"
                        required
                        type="text"
                      />
                    </div>
                    <div className="col-span-1">
                      <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="email">
                        Work Email
                      </label>
                      <input
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#8CA365] focus:bg-white transition-all"
                        id="email"
                        name="email"
                        placeholder="john@company.com"
                        required
                        type="email"
                      />
                    </div>
                    <div className="col-span-1">
                      <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="phone">
                        Phone Number
                      </label>
                      <input
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#8CA365] focus:bg-white transition-all"
                        id="phone"
                        name="phone"
                        placeholder="(555) 000-0000"
                        required
                        type="tel"
                      />
                    </div>
                    <div className="col-span-1 md:col-span-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="industry">
                        Your Industry
                      </label>
                      <select
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#8CA365] focus:bg-white transition-all"
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
                        className="w-full bg-[#8CA365] hover:bg-[#7a8f57] text-white font-bold text-lg py-3 rounded-xl shadow-lg transition-transform hover:-translate-y-1 mt-4"
                        type="submit"
                      >
                        Get Started Now
                      </button>
                    </div>
                    <div className="col-span-1 md:col-span-2">
                      <p className="text-xs text-gray-400 mt-2 text-center">
                        By submitting, you agree to our Terms of Service and Privacy Policy. We never sell your data.
                      </p>
                    </div>
                  </form>
                  {/* Footer Proof */}
                  <div className="flex items-center justify-center gap-3 pt-4 border-t border-gray-100">
                    <svg
                      className="w-4 h-4 text-gray-400"
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
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      100% US-Based, 24/7
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Trust Bar & Credibility Strip */}
        <section
          className="w-full bg-white border-t border-b border-gray-200 py-6 md:py-8 shadow-sm relative z-20 reveal reveal-delay-2"
        >
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            {/* Screen Reader Accessibility */}
            <h4 className="sr-only">
              10,000+ businesses trust our after hours answering service · Rated 4.9/5 · $4.6B industry · HIPAA Certified
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
        {/* FEATURED SNIPPET & COMPARISON SECTION */}
        <section className="bg-slate-50 py-24 px-4 border-y border-gray-200 relative z-10">
          <div className="max-w-7xl mx-auto flex flex-col gap-16">
            {/* Block 1: The Featured Snippet Box (Top) */}
            <div
              className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border-l-8 border-[#8CA365] max-w-4xl mx-auto w-full relative reveal"
            >
              {/* Subtle quote/definition SVG watermark */}
              <svg
                className="absolute top-6 right-6 w-16 h-16 text-slate-100 pointer-events-none"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"
                />
              </svg>
              <h2
                className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#34414A] mb-6 leading-tight relative z-10"
              >
                What Is an After Hours Answering Service? (And Why Every Business Needs One)
              </h2>
              <p
                className="text-gray-700 text-lg leading-relaxed font-medium relative z-10"
                id="definition-text"
              >
                An after hours answering service is a specialized B2B solution where professional, live receptionists handle inbound business calls outside of standard operating hours. This includes evenings, weekends, and holidays. By answering promptly, these services capture high-intent leads, schedule appointments, and dispatch emergency calls, ensuring your business remains operational 24/7 without requiring additional in-house staff.
              </p>
            </div>
            {/* Block 2: Pain Amplification (Middle) */}
            <div
              className="bg-[#1a232c] rounded-3xl p-8 md:p-12 shadow-xl text-center max-w-5xl mx-auto w-full relative overflow-hidden reveal reveal-delay-1"
            >
              {/* Amber/Red Glow Accent */}
              <div
                className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-transparent to-transparent pointer-events-none"
              >
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6 relative z-10">
                The real cost of unanswered after-hours calls — what businesses lose every night
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed max-w-3xl mx-auto relative z-10">
                When the clock strikes 5 PM, customer demand doesn't magically stop. If a high-ticket prospect faces a generic recording, the financial impact is immediate. Studies show that 80% of callers who reach voicemail do not leave a message — and 85% never call back. They simply hang up and dial the next competitor on Google.
              </p>
            </div>
            {/* Block 3: The 3-Way Comparison Grid (Bottom) */}
            <div className="reveal reveal-delay-2">
              <h3 className="text-2xl md:text-3xl font-extrabold text-[#34414A] text-center mb-10">
                After hours answering service vs. voicemail vs. AI bot — the honest comparison
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
                {/* Card 1 (Voicemail - Weak) */}
                <div
                  className="bg-white rounded-2xl p-8 border border-gray-200 opacity-80 hover:opacity-100 transition-opacity flex flex-col"
                >
                  <div className="text-lg font-bold text-gray-500 mb-4 flex items-center gap-2">
                    <svg
                      className="w-5 h-5 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                    Standard Voicemail
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Costs nothing to set up, but costs thousands in lost revenue. It frustrates callers with urgent needs and signals that your business is closed.
                  </p>
                </div>
                {/* Card 2 (AI Bot - Flawed) */}
                <div
                  className="bg-white rounded-2xl p-8 border border-gray-200 opacity-80 hover:opacity-100 transition-opacity flex flex-col"
                >
                  <div className="text-lg font-bold text-gray-500 mb-4 flex items-center gap-2">
                    <svg
                      className="w-5 h-5 shrink-0"
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
                    Automated AI Voice Bot
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Cheaper than human staff, but severely lacks empathy. Bots struggle with regional accents, complex emergency dispatching, and often frustrate stressed callers into hanging up.
                  </p>
                </div>
                {/* Card 3 (Live Human - The Winner) */}
                <div
                  className="bg-gradient-to-b from-[#8CA365]/10 to-white rounded-2xl p-8 border-2 border-[#8CA365] shadow-lg transform md:-translate-y-2 flex flex-col relative overflow-hidden"
                >
                  <div
                    className="absolute top-0 right-0 bg-[#8CA365] text-white text-[10px] font-bold px-3 py-1 uppercase rounded-bl-lg"
                  >
                    The Winning Choice
                  </div>
                  <div className="text-xl font-black text-[#34414A] mb-4 flex items-center gap-2">
                    <svg
                      className="w-6 h-6 text-[#8CA365] shrink-0"
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
                    Live Human Receptionist
                  </div>
                  <p className="text-gray-800 text-sm leading-relaxed font-medium">
                    Delivers 100% genuine human empathy. We dynamically qualify your specific leads, navigate complex emergency routing flawlessly, and secure the booking on the first ring.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 6 REASONS GRID SECTION */}
        <section className="w-full bg-[#8CA365] py-24 px-4 relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            {/* Header Section */}
            <span
              className="block text-3xl md:text-4xl lg:text-5xl font-extrabold text-white text-center mb-6 max-w-4xl mx-auto leading-tight reveal drop-shadow-md"
            >
              Why Our After Hours Answering Service Works — 6 Reasons Businesses Switch to Us
            </span>
            <p
              className="text-green-50 text-center mb-16 max-w-2xl mx-auto text-lg leading-relaxed reveal reveal-delay-1"
            >
              Stop losing high-ticket jobs to the overnight void. Here is exactly how our infrastructure protects your revenue and your peace of mind while you sleep.
            </p>
            {/* The 3x2 Bento Grid */}
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 reveal reveal-delay-2"
            >
              {/* Card 1 */}
              <div
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div
                  className="absolute top-0 left-0 w-full h-1 bg-[#8CA365] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
                >
                </div>
                <div
                  className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-[#8CA365] mb-6 group-hover:-translate-y-1 group-hover:bg-green-50 transition-all duration-300"
                >
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
                <span className="block text-lg font-bold text-[#34414A] mb-3 leading-snug">
                  Always available — 24/7 coverage with zero gaps, ever
                </span>
                <p className="text-gray-600 leading-relaxed text-sm flex-grow">
                  We operate on a true 24/7/365 schedule. No sick days, no lunch breaks, and no holiday closures. Your phones are permanently covered by a redundant, fully staffed team.
                </p>
              </div>
              {/* Card 2 */}
              <div
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div
                  className="absolute top-0 left-0 w-full h-1 bg-[#8CA365] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
                >
                </div>
                <div
                  className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-[#8CA365] mb-6 group-hover:-translate-y-1 group-hover:bg-green-50 transition-all duration-300"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <span className="block text-lg font-bold text-[#34414A] mb-3 leading-snug">
                  Capture every lead — no caller reaches voicemail after hours
                </span>
                <p className="text-gray-600 leading-relaxed text-sm flex-grow">
                  Voicemail is where high-ticket leads go to die. As a premier no voicemail answering service, we guarantee a live, professional voice intercepts every single opportunity, securing the job before they can dial your competitor.
                </p>
              </div>
              {/* Card 3 */}
              <div
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div
                  className="absolute top-0 left-0 w-full h-1 bg-[#8CA365] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
                >
                </div>
                <div
                  className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-[#8CA365] mb-6 group-hover:-translate-y-1 group-hover:bg-green-50 transition-all duration-300"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <span className="block text-lg font-bold text-[#34414A] mb-3 leading-snug">
                  Real humans only — no bots, no IVR, no 'press 1 for options'
                </span>
                <p className="text-gray-600 leading-relaxed text-sm flex-grow">
                  Frustrated callers hang up. We skip the robotic menus entirely. Your clients are greeted immediately by a warm, empathetic human being who actively listens and responds to their needs.
                </p>
              </div>
              {/* Card 4 (HIGHLIGHTED) */}
              <div
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div
                  className="absolute top-0 left-0 w-full h-1 bg-[#8CA365] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
                >
                </div>
                <div
                  className="absolute top-6 right-6 bg-red-50 text-red-600 text-[10px] font-bold px-2 py-1 uppercase rounded tracking-wider border border-red-100"
                >
                  Critical Feature
                </div>
                <div
                  className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-red-500 mb-6 group-hover:-translate-y-1 group-hover:bg-red-50 transition-all duration-300"
                >
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
                <span className="block text-lg font-bold text-[#34414A] mb-3 leading-snug">
                  Emergency call escalation — urgent calls reach the right person instantly
                </span>
                <p className="text-gray-600 leading-relaxed text-sm flex-grow">
                  Not every call can wait until morning. Whether it is an urgent plumbing disaster, an emergency epoxy or concrete repair, or a sensitive medical escalation, our after hours call escalation protocols instantly route true emergencies directly to your on-call cell, while holding routine inquiries for the next business day.
                </p>
              </div>
              {/* Card 5 */}
              <div
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div
                  className="absolute top-0 left-0 w-full h-1 bg-[#8CA365] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
                >
                </div>
                <div
                  className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-[#8CA365] mb-6 group-hover:-translate-y-1 group-hover:bg-green-50 transition-all duration-300"
                >
                  <svg
                    className="w-6 h-6"
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
                <span className="block text-lg font-bold text-[#34414A] mb-3 leading-snug">
                  Industry-trained receptionists — they know your business type before the first call
                </span>
                <p className="text-gray-600 leading-relaxed text-sm flex-grow">
                  We don't sound like a disconnected call center. Our receptionists are rigorously trained in the terminology and nuances of home service contractors, legal practices, and medical offices so they sound exactly like an in-house dispatcher.
                </p>
              </div>
              {/* Card 6 */}
              <div
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div
                  className="absolute top-0 left-0 w-full h-1 bg-[#8CA365] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
                >
                </div>
                <div
                  className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-[#8CA365] mb-6 group-hover:-translate-y-1 group-hover:bg-green-50 transition-all duration-300"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <span className="block text-lg font-bold text-[#34414A] mb-3 leading-snug">
                  Instant notifications — text, email, or app alert the moment a call ends
                </span>
                <p className="text-gray-600 leading-relaxed text-sm flex-grow">
                  Stay in complete control without being tied to your phone. The second a call concludes, you receive a detailed, accurate summary of the after hours lead capture directly to your preferred device or CRM.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* PREMIUM FEATURE ACCORDION SECTION (LIGHT MODE) */}
        <section className="bg-gray-50 py-24 md:py-32 px-4 relative overflow-hidden">
          {/* Subtle dot background */}
          <div
            className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-60"
          >
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
            {/* Header Section */}
            <span
              className="block text-3xl md:text-4xl lg:text-5xl font-black text-[#34414A] text-center mb-6 max-w-4xl mx-auto leading-tight tracking-tight reveal"
            >
              Everything Included in Your After Hours Answering Service — No Hidden Extras
            </span>
            <p
              className="text-gray-600 text-center mb-16 max-w-2xl mx-auto text-lg leading-relaxed reveal reveal-delay-1"
            >
              Stop paying à la carte for essential business tools. Every account comes fully loaded with the premium features you need to scale your operations and secure high-ticket jobs overnight.
            </p>
            {/* The Accordion Container */}
            <div
              className="max-w-4xl mx-auto flex flex-col gap-4 reveal reveal-delay-2"
              id="features-accordion"
            >
              {/* Item 1 */}
              <div
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#8CA365]/50 hover:shadow-lg hover:-translate-y-0.5 accordion-item"
              >
                <div
                  className="flex items-center justify-between p-5 md:p-6 cursor-pointer w-full text-left accordion-header"
                >
                  <div className="flex items-center gap-4 md:gap-6">
                    <div
                      className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-[#8CA365] flex-shrink-0 group-hover:scale-105 transition-transform"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                    <span className="block text-base md:text-lg font-bold text-[#34414A] tracking-wide">
                      Live call answering — evenings, overnight, weekends, all US holidays
                    </span>
                  </div>
                  <svg
                    className="w-6 h-6 text-gray-400 group-hover:text-[#8CA365] transition-all duration-300 transform group-[.is-active]:rotate-45"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 4v16m8-8H4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div
                  className="max-h-0 overflow-hidden transition-all duration-500 ease-in-out opacity-0 group-[.is-active]:max-h-96 group-[.is-active]:opacity-100 accordion-body"
                >
                  <div className="p-5 md:p-6 pt-0 border-t border-gray-100 mt-2">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Get complete peace of mind with our dedicated overnight call answering service. From midnight emergencies to standard weekend phone answering, your callers always reach a live, empathetic professional.
                    </p>
                  </div>
                </div>
              </div>
              {/* Item 2 */}
              <div
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#8CA365]/50 hover:shadow-lg hover:-translate-y-0.5 accordion-item"
              >
                <div
                  className="flex items-center justify-between p-5 md:p-6 cursor-pointer w-full text-left accordion-header"
                >
                  <div className="flex items-center gap-4 md:gap-6">
                    <div
                      className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-[#8CA365] flex-shrink-0 group-hover:scale-105 transition-transform"
                    >
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
                    <span className="block text-base md:text-lg font-bold text-[#34414A] tracking-wide">
                      Appointment scheduling & calendar management after hours
                    </span>
                  </div>
                  <svg
                    className="w-6 h-6 text-gray-400 group-hover:text-[#8CA365] transition-all duration-300 transform group-[.is-active]:rotate-45"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 4v16m8-8H4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div
                  className="max-h-0 overflow-hidden transition-all duration-500 ease-in-out opacity-0 group-[.is-active]:max-h-96 group-[.is-active]:opacity-100 accordion-body"
                >
                  <div className="p-5 md:p-6 pt-0 border-t border-gray-100 mt-2">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Wake up to a booked calendar. Seamless after hours appointment scheduling integrates directly into your existing dispatch software, turning late-night inquiries into locked-in jobs by morning.
                    </p>
                  </div>
                </div>
              </div>
              {/* Item 3 */}
              <div
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#8CA365]/50 hover:shadow-lg hover:-translate-y-0.5 accordion-item"
              >
                <div
                  className="flex items-center justify-between p-5 md:p-6 cursor-pointer w-full text-left accordion-header"
                >
                  <div className="flex items-center gap-4 md:gap-6">
                    <div
                      className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-[#8CA365] flex-shrink-0 group-hover:scale-105 transition-transform"
                    >
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
                    <span className="block text-base md:text-lg font-bold text-[#34414A] tracking-wide">
                      Emergency call escalation with tiered urgency protocols
                    </span>
                  </div>
                  <svg
                    className="w-6 h-6 text-gray-400 group-hover:text-[#8CA365] transition-all duration-300 transform group-[.is-active]:rotate-45"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 4v16m8-8H4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div
                  className="max-h-0 overflow-hidden transition-all duration-500 ease-in-out opacity-0 group-[.is-active]:max-h-96 group-[.is-active]:opacity-100 accordion-body"
                >
                  <div className="p-5 md:p-6 pt-0 border-t border-gray-100 mt-2">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      We filter the noise and prioritize the revenue. Urgent situations are instantly dispatched to your on-call cell, while routine questions wait for standard business hours.
                    </p>
                  </div>
                </div>
              </div>
              {/* Item 4 */}
              <div
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#8CA365]/50 hover:shadow-lg hover:-translate-y-0.5 accordion-item"
              >
                <div
                  className="flex items-center justify-between p-5 md:p-6 cursor-pointer w-full text-left accordion-header"
                >
                  <div className="flex items-center gap-4 md:gap-6">
                    <div
                      className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-[#8CA365] flex-shrink-0 group-hover:scale-105 transition-transform"
                    >
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
                    <span className="block text-base md:text-lg font-bold text-[#34414A] tracking-wide">
                      Lead capture, qualification & CRM handoff
                    </span>
                  </div>
                  <svg
                    className="w-6 h-6 text-gray-400 group-hover:text-[#8CA365] transition-all duration-300 transform group-[.is-active]:rotate-45"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 4v16m8-8H4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div
                  className="max-h-0 overflow-hidden transition-all duration-500 ease-in-out opacity-0 group-[.is-active]:max-h-96 group-[.is-active]:opacity-100 accordion-body"
                >
                  <div className="p-5 md:p-6 pt-0 border-t border-gray-100 mt-2">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      We don't just take messages; we qualify buyers. Our agents ask your specific intake questions to ensure high-value leads are captured and pushed directly into your CRM.
                    </p>
                  </div>
                </div>
              </div>
              {/* Item 5 */}
              <div
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#8CA365]/50 hover:shadow-lg hover:-translate-y-0.5 accordion-item"
              >
                <div
                  className="flex items-center justify-between p-5 md:p-6 cursor-pointer w-full text-left accordion-header"
                >
                  <div className="flex items-center gap-4 md:gap-6">
                    <div
                      className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-[#8CA365] flex-shrink-0 group-hover:scale-105 transition-transform"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                    <span className="block text-base md:text-lg font-bold text-[#34414A] tracking-wide">
                      Custom after-hours greeting & call scripts in your brand name
                    </span>
                  </div>
                  <svg
                    className="w-6 h-6 text-gray-400 group-hover:text-[#8CA365] transition-all duration-300 transform group-[.is-active]:rotate-45"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 4v16m8-8H4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div
                  className="max-h-0 overflow-hidden transition-all duration-500 ease-in-out opacity-0 group-[.is-active]:max-h-96 group-[.is-active]:opacity-100 accordion-body"
                >
                  <div className="p-5 md:p-6 pt-0 border-t border-gray-100 mt-2">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      We answer as a seamless extension of your brand. Your custom scripts guarantee that whether a client calls at 2 PM or 2 AM, the tone and professionalism remain perfectly consistent.
                    </p>
                  </div>
                </div>
              </div>
              {/* Item 6 */}
              <div
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#8CA365]/50 hover:shadow-lg hover:-translate-y-0.5 accordion-item"
              >
                <div
                  className="flex items-center justify-between p-5 md:p-6 cursor-pointer w-full text-left accordion-header"
                >
                  <div className="flex items-center gap-4 md:gap-6">
                    <div
                      className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-[#8CA365] flex-shrink-0 group-hover:scale-105 transition-transform"
                    >
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
                    <span className="block text-base md:text-lg font-bold text-[#34414A] tracking-wide">
                      Bilingual after-hours answering — English & Spanish
                    </span>
                  </div>
                  <svg
                    className="w-6 h-6 text-gray-400 group-hover:text-[#8CA365] transition-all duration-300 transform group-[.is-active]:rotate-45"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 4v16m8-8H4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div
                  className="max-h-0 overflow-hidden transition-all duration-500 ease-in-out opacity-0 group-[.is-active]:max-h-96 group-[.is-active]:opacity-100 accordion-body"
                >
                  <div className="p-5 md:p-6 pt-0 border-t border-gray-100 mt-2">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Never lose a high-ticket job due to a language barrier again. Included bilingual after hours answering ensures you can confidently capture and serve the rapidly growing Spanish-speaking market.
                    </p>
                  </div>
                </div>
              </div>
              {/* Item 7 */}
              <div
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#8CA365]/50 hover:shadow-lg hover:-translate-y-0.5 accordion-item"
              >
                <div
                  className="flex items-center justify-between p-5 md:p-6 cursor-pointer w-full text-left accordion-header"
                >
                  <div className="flex items-center gap-4 md:gap-6">
                    <div
                      className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-[#8CA365] flex-shrink-0 group-hover:scale-105 transition-transform"
                    >
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
                    <span className="block text-base md:text-lg font-bold text-[#34414A] tracking-wide">
                      HIPAA-compliant after-hours handling for medical and healthcare
                    </span>
                  </div>
                  <svg
                    className="w-6 h-6 text-gray-400 group-hover:text-[#8CA365] transition-all duration-300 transform group-[.is-active]:rotate-45"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 4v16m8-8H4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div
                  className="max-h-0 overflow-hidden transition-all duration-500 ease-in-out opacity-0 group-[.is-active]:max-h-96 group-[.is-active]:opacity-100 accordion-body"
                >
                  <div className="p-5 md:p-6 pt-0 border-t border-gray-100 mt-2">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Fully secure and strictly confidential. Our HIPAA after hours answering safely handles patient intake, on-call doctor dispatch, and sensitive medical data with bank-level encryption.
                    </p>
                  </div>
                </div>
              </div>
              {/* Item 8 */}
              <div
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#8CA365]/50 hover:shadow-lg hover:-translate-y-0.5 accordion-item"
              >
                <div
                  className="flex items-center justify-between p-5 md:p-6 cursor-pointer w-full text-left accordion-header"
                >
                  <div className="flex items-center gap-4 md:gap-6">
                    <div
                      className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-[#8CA365] flex-shrink-0 group-hover:scale-105 transition-transform"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                    <span className="block text-base md:text-lg font-bold text-[#34414A] tracking-wide">
                      Instant message delivery via text, email, and mobile app
                    </span>
                  </div>
                  <svg
                    className="w-6 h-6 text-gray-400 group-hover:text-[#8CA365] transition-all duration-300 transform group-[.is-active]:rotate-45"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 4v16m8-8H4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div
                  className="max-h-0 overflow-hidden transition-all duration-500 ease-in-out opacity-0 group-[.is-active]:max-h-96 group-[.is-active]:opacity-100 accordion-body"
                >
                  <div className="p-5 md:p-6 pt-0 border-t border-gray-100 mt-2">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Stay in the loop without being tied to your phone. Receive instant, accurate notifications the second a call concludes, complete with detailed notes and caller intent.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Accordion Script */}
        {/* 4-STEP HOW-TO SECTION */}
        <section
          className="bg-gradient-to-b from-white to-slate-50 py-24 md:py-32 px-4 relative border-t border-gray-100"
        >
          <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <span
              className="block text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#34414A] text-center mb-6 max-w-4xl mx-auto leading-tight reveal"
            >
              How Our After Hours Answering Service Works — Live in Under 5 Minutes
            </span>
            <p
              className="text-gray-600 text-center mb-20 max-w-2xl mx-auto text-lg leading-relaxed reveal reveal-delay-1"
            >
              Skip the complex tech integrations. Our seamless onboarding is designed to get your night coverage active before you leave the office today.
            </p>
            {/* The Split-Screen Layout */}
            <div
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 relative items-start reveal reveal-delay-2"
            >
              {/* Left Column (The Vertical Timeline) */}
              <div className="lg:col-span-7 relative">
                {/* The Connecting Line */}
                <div
                  className="absolute left-[1.35rem] top-8 bottom-8 w-0.5 bg-gradient-to-b from-[#8CA365] via-gray-200 to-gray-200 hidden md:block"
                >
                </div>
                {/* Step Items */}
                <div className="flex flex-col gap-12">
                  {/* Step 1 */}
                  <div className="relative flex flex-col md:flex-row items-start gap-4 md:gap-6 group">
                    <div
                      className="w-12 h-12 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center text-gray-400 font-bold text-xl flex-shrink-0 z-10 group-hover:border-[#8CA365] group-hover:bg-[#8CA365] group-hover:text-white transition-all duration-300 shadow-sm relative"
                    >
                      1
                    </div>
                    <div className="pt-1 md:pt-2">
                      <span className="block text-xl font-bold text-[#34414A] mb-3 leading-snug">
                        Step 1: Forward your business number — takes 90 seconds
                      </span>
                      <p className="text-gray-600 leading-relaxed">
                        Keep your existing business number. We provide a simple, secure forwarding code so you retain complete control over exactly when our night team takes over.
                      </p>
                    </div>
                  </div>
                  {/* Step 2 */}
                  <div className="relative flex flex-col md:flex-row items-start gap-4 md:gap-6 group">
                    <div
                      className="w-12 h-12 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center text-gray-400 font-bold text-xl flex-shrink-0 z-10 group-hover:border-[#8CA365] group-hover:bg-[#8CA365] group-hover:text-white transition-all duration-300 shadow-sm relative"
                    >
                      2
                    </div>
                    <div className="pt-1 md:pt-2">
                      <span className="block text-xl font-bold text-[#34414A] mb-3 leading-snug">
                        Step 2: We set your after-hours greeting and call script
                      </span>
                      <p className="text-gray-600 leading-relaxed">
                        You dictate the tone. We build a customized call flow to handle urgent emergency dispatching and routine late-night inquiries exactly as your in-house team would.
                      </p>
                    </div>
                  </div>
                  {/* Step 3 */}
                  <div className="relative flex flex-col md:flex-row items-start gap-4 md:gap-6 group">
                    <div
                      className="w-12 h-12 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center text-gray-400 font-bold text-xl flex-shrink-0 z-10 group-hover:border-[#8CA365] group-hover:bg-[#8CA365] group-hover:text-white transition-all duration-300 shadow-sm relative"
                    >
                      3
                    </div>
                    <div className="pt-1 md:pt-2">
                      <span className="block text-xl font-bold text-[#34414A] mb-3 leading-snug">
                        Step 3: Your calls are answered live by real receptionists after hours
                      </span>
                      <p className="text-gray-600 leading-relaxed">
                        No bots. No frustrating menus. A professional, US-based human answers promptly, providing instant empathy and securing the job from your late-night callers.
                      </p>
                    </div>
                  </div>
                  {/* Step 4 */}
                  <div className="relative flex flex-col md:flex-row items-start gap-4 md:gap-6 group">
                    <div
                      className="w-12 h-12 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center text-gray-400 font-bold text-xl flex-shrink-0 z-10 group-hover:border-[#8CA365] group-hover:bg-[#8CA365] group-hover:text-white transition-all duration-300 shadow-sm relative"
                    >
                      4
                    </div>
                    <div className="pt-1 md:pt-2">
                      <span className="block text-xl font-bold text-[#34414A] mb-3 leading-snug">
                        Step 4: Instant message summary sent to you after every call
                      </span>
                      <p className="text-gray-600 leading-relaxed">
                        Wake up to organized, qualified leads. Detailed notes, caller intent, and scheduled appointments are pushed instantly via SMS, email, or directly into your CRM.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Right Column (Sticky Audio Player) */}
              <div className="lg:col-span-5 lg:sticky lg:top-32 w-full flex justify-center lg:justify-end">
                <div
                  className="bg-[#1a232c] rounded-3xl p-8 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.3)] border border-slate-700 relative w-full max-w-md overflow-hidden group"
                >
                  {/* Glow Accent */}
                  <div
                    className="absolute top-0 right-0 w-32 h-32 bg-[#8CA365] rounded-full blur-[60px] opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity duration-500"
                  >
                  </div>
                  {/* Top label */}
                  <div
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#8CA365] mb-4 uppercase tracking-widest bg-[#8CA365]/10 px-3 py-1.5 rounded-full border border-[#8CA365]/20"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                    Live Audio Sample
                  </div>
                  <span className="block text-2xl font-bold text-white mb-8 leading-snug">
                    Hear how we answer after 5pm.
                  </span>
                  {/* The Player UI */}
                  <div
                    className="bg-slate-800/50 rounded-2xl p-4 flex items-center gap-4 border border-slate-600 relative overflow-hidden"
                  >
                    <div
                      className="w-14 h-14 rounded-full bg-[#8CA365] text-white flex items-center justify-center flex-shrink-0 cursor-pointer hover:scale-105 hover:bg-[#7a8f57] transition-all shadow-lg z-10"
                    >
                      <svg
                        className="w-6 h-6 ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    {/* Audio Waveform Representation */}
                    <div className="flex-grow h-10 flex items-center justify-center gap-1 opacity-60 z-10">
                      <div className="w-1 bg-[#8CA365] h-3 rounded-full">
                      </div>
                      <div className="w-1 bg-[#8CA365] h-6 rounded-full">
                      </div>
                      <div className="w-1 bg-[#8CA365] h-8 rounded-full">
                      </div>
                      <div className="w-1 bg-[#8CA365] h-4 rounded-full">
                      </div>
                      <div className="w-1 bg-[#8CA365] h-10 rounded-full">
                      </div>
                      <div className="w-1 bg-[#8CA365] h-5 rounded-full">
                      </div>
                      <div className="w-1 bg-[#8CA365] h-7 rounded-full">
                      </div>
                      <div className="w-1 bg-[#8CA365] h-3 rounded-full">
                      </div>
                      <div className="w-1 bg-slate-500 h-2 rounded-full">
                      </div>
                      <div className="w-1 bg-slate-500 h-2 rounded-full">
                      </div>
                      <div className="w-1 bg-slate-500 h-2 rounded-full">
                      </div>
                      <div className="w-1 bg-slate-500 h-2 rounded-full">
                      </div>
                      <div className="w-1 bg-slate-500 h-2 rounded-full">
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-slate-400 whitespace-nowrap z-10">
                      0:00 / 1:14
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* SEO HowTo Schema */}
        </section>
        {/* INDUSTRIES WE SERVE */}
        <section className="w-full bg-white py-20 px-4 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 reveal">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#34414A] leading-tight mb-3">
                After Hours Answering Service by Industry —
                <br className="hidden md:block" />
                <span className="text-[#8CA365]">
                  Trained for Your Business Type
                </span>
              </h2>
              <p className="text-gray-400 text-base max-w-xl mx-auto">
                Every industry has different after-hours needs. Our receptionists are scripted to your exact process — not a generic template.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 reveal reveal-delay-1">
              <Link
                className="group flex flex-col items-center text-center p-5 rounded-2xl border border-gray-100 hover:border-[#8CA365]/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white"
                href="/industries-served"
              >
                <div
                  className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300"
                >
                  <svg
                    className="w-8 h-8 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-sm font-bold text-[#34414A] leading-snug mb-0.5">
                  Lawyers
                </h3>
                <p className="text-[11px] text-gray-400 leading-relaxed">
                  Attorneys & law firms
                </p>
                <span
                  className="mt-2 text-[10px] font-bold text-[#8CA365] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Learn more →
                </span>
              </Link>
              <Link
                className="group flex flex-col items-center text-center p-5 rounded-2xl border border-gray-100 hover:border-[#8CA365]/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white"
                href="/medical-answering-service"
              >
                <div
                  className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300"
                >
                  <svg
                    className="w-8 h-8 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-sm font-bold text-[#34414A] leading-snug mb-0.5">
                  Medical
                </h3>
                <p className="text-[11px] text-gray-400 leading-relaxed">
                  Clinics & practices
                </p>
                <span
                  className="mt-2 text-[10px] font-bold text-[#8CA365] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Learn more →
                </span>
              </Link>
              <a
                className="group flex flex-col items-center text-center p-5 rounded-2xl border border-gray-100 hover:border-[#8CA365]/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white"
                href="#"
              >
                <div
                  className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300"
                >
                  <svg
                    className="w-8 h-8 text-amber-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-sm font-bold text-[#34414A] leading-snug mb-0.5">
                  HVAC
                </h3>
                <p className="text-[11px] text-gray-400 leading-relaxed">
                  Heating & cooling
                </p>
                <span
                  className="mt-2 text-[10px] font-bold text-[#8CA365] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Learn more →
                </span>
              </a>
              <a
                className="group flex flex-col items-center text-center p-5 rounded-2xl border border-gray-100 hover:border-[#8CA365]/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white"
                href="#"
              >
                <div
                  className="w-14 h-14 rounded-2xl bg-cyan-50 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300"
                >
                  <svg
                    className="w-8 h-8 text-cyan-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.734.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-sm font-bold text-[#34414A] leading-snug mb-0.5">
                  Plumbers
                </h3>
                <p className="text-[11px] text-gray-400 leading-relaxed">
                  Plumbing & pipe repairs
                </p>
                <span
                  className="mt-2 text-[10px] font-bold text-[#8CA365] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Learn more →
                </span>
              </a>
              <a
                className="group flex flex-col items-center text-center p-5 rounded-2xl border border-gray-100 hover:border-[#8CA365]/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white"
                href="#"
              >
                <div
                  className="w-14 h-14 rounded-2xl bg-pink-50 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300"
                >
                  <svg
                    className="w-8 h-8 text-pink-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-sm font-bold text-[#34414A] leading-snug mb-0.5">
                  Salons
                </h3>
                <p className="text-[11px] text-gray-400 leading-relaxed">
                  Spas & beauty services
                </p>
                <span
                  className="mt-2 text-[10px] font-bold text-[#8CA365] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Learn more →
                </span>
              </a>
              <a
                className="group flex flex-col items-center text-center p-5 rounded-2xl border border-gray-100 hover:border-[#8CA365]/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white"
                href="#"
              >
                <div
                  className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300"
                >
                  <svg
                    className="w-8 h-8 text-[#8CA365]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-sm font-bold text-[#34414A] leading-snug mb-0.5">
                  Real Estate
                </h3>
                <p className="text-[11px] text-gray-400 leading-relaxed">
                  Agents & brokers
                </p>
                <span
                  className="mt-2 text-[10px] font-bold text-[#8CA365] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Learn more →
                </span>
              </a>
              <a
                className="group flex flex-col items-center text-center p-5 rounded-2xl border border-gray-100 hover:border-[#8CA365]/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white"
                href="#"
              >
                <div
                  className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300"
                >
                  <svg
                    className="w-8 h-8 text-emerald-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-sm font-bold text-[#34414A] leading-snug mb-0.5">
                  Pharmacies
                </h3>
                <p className="text-[11px] text-gray-400 leading-relaxed">
                  Rx & dispensary
                </p>
                <span
                  className="mt-2 text-[10px] font-bold text-[#8CA365] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Learn more →
                </span>
              </a>
              <a
                className="group flex flex-col items-center text-center p-5 rounded-2xl border border-gray-100 hover:border-[#8CA365]/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white"
                href="#"
              >
                <div
                  className="w-14 h-14 rounded-2xl bg-teal-50 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300"
                >
                  <svg
                    className="w-8 h-8 text-teal-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-sm font-bold text-[#34414A] leading-snug mb-0.5">
                  Doctors
                </h3>
                <p className="text-[11px] text-gray-400 leading-relaxed">
                  GPs & specialists
                </p>
                <span
                  className="mt-2 text-[10px] font-bold text-[#8CA365] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Learn more →
                </span>
              </a>
              <a
                className="group flex flex-col items-center text-center p-5 rounded-2xl border border-gray-100 hover:border-[#8CA365]/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white"
                href="#"
              >
                <div
                  className="w-14 h-14 rounded-2xl bg-violet-50 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300"
                >
                  <svg
                    className="w-8 h-8 text-violet-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-sm font-bold text-[#34414A] leading-snug mb-0.5">
                  Insurance
                </h3>
                <p className="text-[11px] text-gray-400 leading-relaxed">
                  Brokers & agents
                </p>
                <span
                  className="mt-2 text-[10px] font-bold text-[#8CA365] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Learn more →
                </span>
              </a>
              <a
                className="group flex flex-col items-center text-center p-5 rounded-2xl border border-gray-100 hover:border-[#8CA365]/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white"
                href="#"
              >
                <div
                  className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300"
                >
                  <svg
                    className="w-8 h-8 text-orange-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-sm font-bold text-[#34414A] leading-snug mb-0.5">
                  Roofing
                </h3>
                <p className="text-[11px] text-gray-400 leading-relaxed">
                  Repair & installation
                </p>
                <span
                  className="mt-2 text-[10px] font-bold text-[#8CA365] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Learn more →
                </span>
              </a>
              <a
                className="group flex flex-col items-center text-center p-5 rounded-2xl border border-gray-100 hover:border-[#8CA365]/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white"
                href="#"
              >
                <div
                  className="w-14 h-14 rounded-2xl bg-yellow-50 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300"
                >
                  <svg
                    className="w-8 h-8 text-yellow-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-sm font-bold text-[#34414A] leading-snug mb-0.5">
                  Construction
                </h3>
                <p className="text-[11px] text-gray-400 leading-relaxed">
                  Builders & projects
                </p>
                <span
                  className="mt-2 text-[10px] font-bold text-[#8CA365] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Learn more →
                </span>
              </a>
              <a
                className="group flex flex-col items-center text-center p-5 rounded-2xl border border-gray-100 hover:border-[#8CA365]/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white"
                href="#"
              >
                <div
                  className="w-14 h-14 rounded-2xl bg-sky-50 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300"
                >
                  <svg
                    className="w-8 h-8 text-sky-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-sm font-bold text-[#34414A] leading-snug mb-0.5">
                  Cleaners
                </h3>
                <p className="text-[11px] text-gray-400 leading-relaxed">
                  Residential & commercial
                </p>
                <span
                  className="mt-2 text-[10px] font-bold text-[#8CA365] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Learn more →
                </span>
              </a>
              <a
                className="group flex flex-col items-center text-center p-5 rounded-2xl border border-gray-100 hover:border-[#8CA365]/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white"
                href="#"
              >
                <div
                  className="w-14 h-14 rounded-2xl bg-stone-50 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300"
                >
                  <svg
                    className="w-8 h-8 text-stone-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.734.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-sm font-bold text-[#34414A] leading-snug mb-0.5">
                  Contractors
                </h3>
                <p className="text-[11px] text-gray-400 leading-relaxed">
                  General & specialist trades
                </p>
                <span
                  className="mt-2 text-[10px] font-bold text-[#8CA365] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Learn more →
                </span>
              </a>
              <a
                className="group flex flex-col items-center text-center p-5 rounded-2xl border border-gray-100 hover:border-[#8CA365]/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white"
                href="#"
              >
                <div
                  className="w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300"
                >
                  <svg
                    className="w-8 h-8 text-purple-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-sm font-bold text-[#34414A] leading-snug mb-0.5">
                  Start Ups
                </h3>
                <p className="text-[11px] text-gray-400 leading-relaxed">
                  Fast-growing businesses
                </p>
                <span
                  className="mt-2 text-[10px] font-bold text-[#8CA365] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Learn more →
                </span>
              </a>
              <a
                className="group flex flex-col items-center text-center p-5 rounded-2xl border border-gray-100 hover:border-[#8CA365]/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white"
                href="#"
              >
                <div
                  className="w-14 h-14 rounded-2xl bg-lime-50 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300"
                >
                  <svg
                    className="w-8 h-8 text-lime-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-sm font-bold text-[#34414A] leading-snug mb-0.5">
                  Property Mgmt
                </h3>
                <p className="text-[11px] text-gray-400 leading-relaxed">
                  Buildings & portfolios
                </p>
                <span
                  className="mt-2 text-[10px] font-bold text-[#8CA365] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Learn more →
                </span>
              </a>
              <a
                className="group flex flex-col items-center text-center p-5 rounded-2xl border border-gray-100 hover:border-[#8CA365]/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white"
                href="#"
              >
                <div
                  className="w-14 h-14 rounded-2xl bg-rose-50 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300"
                >
                  <svg
                    className="w-8 h-8 text-rose-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-sm font-bold text-[#34414A] leading-snug mb-0.5">
                  Marketing Firms
                </h3>
                <p className="text-[11px] text-gray-400 leading-relaxed">
                  Agencies & consultants
                </p>
                <span
                  className="mt-2 text-[10px] font-bold text-[#8CA365] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Learn more →
                </span>
              </a>
            </div>
            <p className="text-center text-xs text-gray-400 mt-10 reveal reveal-delay-2">
              Don't see your industry?
              <a className="text-[#8CA365] font-semibold hover:underline" href="#hero-form">
                Contact us
              </a>
              — we serve 50+ verticals with custom scripting.
            </p>
          </div>
        </section>
        {/* ROI & COST SECTION (REVENUE LEAKAGE DASHBOARD) */}
        <section
          className="bg-slate-50 py-24 md:py-32 px-4 border-t border-gray-200 overflow-hidden relative"
        >
          <div className="max-w-7xl mx-auto flex flex-col gap-16">
            {/* Header Section */}
            <div>
              <span
                className="block text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#34414A] text-center mb-6 max-w-4xl mx-auto leading-tight reveal"
              >
                The ROI of After Hours Answering — What Every Missed Call Actually Costs Your Business
              </span>
              <p
                className="text-gray-600 text-center max-w-3xl mx-auto text-lg leading-relaxed reveal reveal-delay-1"
              >
                Stop looking at call answering as an operational expense. When you calculate the true cost of the overnight void, professional coverage becomes the highest-yielding investment you can make.
              </p>
            </div>
            {/* The Dashboard Layout (Asymmetrical Grid) */}
            <div
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center relative reveal reveal-delay-2"
            >
              {/* Left Column (The Loss Calculator) */}
              <div className="lg:col-span-5 relative z-10 lg:translate-x-8">
                <div
                  className="bg-[#1a232c] rounded-3xl p-10 md:p-12 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.4)] border border-slate-700 relative overflow-hidden flex flex-col group"
                >
                  {/* Ambient Glow */}
                  <div
                    className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-red-500/20 transition-colors duration-700"
                  >
                  </div>
                  <span
                    className="block text-xl md:text-2xl font-bold text-white mb-6 leading-snug relative z-10"
                  >
                    The average value of a missed business call:
                    <span className="text-red-400 block mt-2">
                      $3,000+ in lost revenue
                    </span>
                  </span>
                  <p className="text-slate-400 text-base leading-relaxed mb-8 relative z-10">
                    Let's run the math. If your average ticket is $3,000—like a standard epoxy flooring installation, a commercial concrete repair, or a high-end contracting job—and you lose just 3 after-hours calls per week to voicemail, that is $468,000 a year in potential lost revenue. The true ROI of answering service coverage isn't just saving time; it is plugging a massive leak in your sales funnel.
                  </p>
                  {/* Visual Data Graphic */}
                  <div
                    className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 flex items-center justify-between text-red-400 font-mono text-sm relative z-10 backdrop-blur-sm"
                  >
                    <div className="flex items-center gap-3">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </svg>
                      <span>
                        Annual Leakage
                      </span>
                    </div>
                    <span className="font-bold text-lg">
                      -$468,000
                    </span>
                  </div>
                </div>
              </div>
              {/* Right Column (The Pricing & Solutions) */}
              <div
                className="lg:col-span-7 bg-white rounded-3xl p-10 md:p-16 lg:pl-20 shadow-xl border border-gray-100 flex flex-col gap-12 relative z-0"
              >
                {/* Block 1 (Transparency) */}
                <div>
                  <span
                    className="block text-xl font-bold text-[#34414A] mb-3 flex items-start md:items-center gap-3"
                  >
                    <div
                      className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0 mt-1 md:mt-0"
                    >
                      <svg
                        className="w-5 h-5 text-[#8CA365]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                        <path
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                    After hours answering service pricing — what to expect at every tier
                  </span>
                  <p className="text-gray-600 leading-relaxed text-base md:pl-11">
                    We believe in complete financial transparency. While competitors hide their after hours answering service cost behind aggressive sales teams, our pricing is straightforward. Starter plans begin at just a fraction of a single job's profit, scaling predictably based entirely on your exact call volume, emergency dispatch needs, and CRM integrations.
                  </p>
                </div>
                {/* Block 2 (Structure Options) */}
                <div>
                  <span
                    className="block text-xl font-bold text-[#34414A] mb-3 flex items-start md:items-center gap-3"
                  >
                    <div
                      className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0 mt-1 md:mt-0"
                    >
                      <svg
                        className="w-5 h-5 text-[#8CA365]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                    Pay-per-call vs. monthly plan — which is right for your call volume?
                  </span>
                  <p className="text-gray-600 leading-relaxed text-base md:pl-11">
                    When researching how much does after hours answering cost, the structure matters as much as the price. If your overnight call volume fluctuates, a pay-per-minute model keeps your overhead razor-thin. If you receive consistent late-night traffic, our predictable flat-rate monthly plans offer the most aggressive after hours answering service pricing in the industry.
                  </p>
                </div>
                {/* Action Element */}
                <div className="md:pl-11">
                  <Link
                    className="mt-4 inline-flex items-center gap-2 bg-white border-2 border-[#34414A] hover:bg-slate-50 text-[#34414A] font-extrabold text-base py-3 px-8 rounded-xl transition-all w-max group"
                    href="/pricing"
                  >
                    View Full Pricing Matrix
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
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
        </section>
        {/* AFTER-HOURS SOCIAL PROOF SECTION */}
        <section className="bg-stone-50 py-24 md:py-32 px-4 border-t border-gray-200">
          <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <span
              className="block text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#34414A] text-center mb-4 max-w-4xl mx-auto leading-tight reveal"
            >
              What Business Owners Say About Our After Hours Answering Service
            </span>
            <span
              className="flex flex-col md:flex-row justify-center items-center gap-2 text-lg font-bold text-gray-600 text-center mb-16 reveal reveal-delay-1"
            >
              Rated 4.9/5 — by after-hours customers across legal, medical, and high-ticket trades
              <span className="flex text-yellow-400 mt-2 md:mt-0">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
              </span>
            </span>
            {/* The 3-Column Proof Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 reveal reveal-delay-2">
              {/* Card 1 */}
              <div
                className="bg-white rounded-2xl shadow-sm border border-gray-200 flex flex-col h-full overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="p-8 lg:p-10 flex-grow relative">
                  {/* Quote Icon Watermark */}
                  <svg
                    className="absolute top-8 right-8 w-16 h-16 text-gray-50 opacity-60 z-0 pointer-events-none"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"
                    />
                  </svg>
                  <div
                    className="inline-block bg-[#8CA365]/10 text-[#8CA365] text-xs font-bold px-4 py-2 rounded-lg mb-6 uppercase tracking-wider border border-[#8CA365]/20 relative z-10"
                  >
                    Secured a $15k contract on a Sunday
                  </div>
                  <div className="flex gap-1 text-yellow-400 mb-6 relative z-10">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-base leading-relaxed italic relative z-10">
                    "Before this, weekend calls went straight to voicemail and we just hoped they'd call back Monday. On our second weekend using the service, they answered a Sunday morning call and booked an estimate for a $15k commercial epoxy job. The ROI was immediate. They sound exactly like my in-house team."
                  </p>
                </div>
                <div
                  className="bg-slate-50 border-t border-gray-100 p-6 lg:px-10 lg:py-8 flex flex-col gap-2 relative z-10"
                >
                  <span className="text-[#34414A] font-bold text-sm">
                    Mark D.
                  </span>
                  <span className="text-gray-500 text-xs">
                    Owner, Apex Concrete & Epoxy
                  </span>
                  <span
                    className="inline-block bg-white border border-gray-200 text-gray-400 text-[10px] font-bold px-2 py-1 rounded mt-2 w-max uppercase tracking-wider"
                  >
                    Home Services
                  </span>
                </div>
              </div>
              {/* Card 2 */}
              <div
                className="bg-white rounded-2xl shadow-sm border border-gray-200 flex flex-col h-full overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="p-8 lg:p-10 flex-grow relative">
                  {/* Quote Icon Watermark */}
                  <svg
                    className="absolute top-8 right-8 w-16 h-16 text-gray-50 opacity-60 z-0 pointer-events-none"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"
                    />
                  </svg>
                  <div
                    className="inline-block bg-[#8CA365]/10 text-[#8CA365] text-xs font-bold px-4 py-2 rounded-lg mb-6 uppercase tracking-wider border border-[#8CA365]/20 relative z-10"
                  >
                    Zero missed 2 AM intake calls
                  </div>
                  <div className="flex gap-1 text-yellow-400 mb-6 relative z-10">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-base leading-relaxed italic relative z-10">
                    "In personal injury law, if you don't answer at 2 AM, the client calls the next billboard they see. This after-hours team handles our midnight intakes with total empathy and precision. We haven't missed a single late-night lead since making the switch."
                  </p>
                </div>
                <div
                  className="bg-slate-50 border-t border-gray-100 p-6 lg:px-10 lg:py-8 flex flex-col gap-2 relative z-10"
                >
                  <span className="text-[#34414A] font-bold text-sm">
                    Sarah Jenkins
                  </span>
                  <span className="text-gray-500 text-xs">
                    Managing Partner, Jenkins Injury Law
                  </span>
                  <span
                    className="inline-block bg-white border border-gray-200 text-gray-400 text-[10px] font-bold px-2 py-1 rounded mt-2 w-max uppercase tracking-wider"
                  >
                    Legal Services
                  </span>
                </div>
              </div>
              {/* Card 3 */}
              <div
                className="bg-white rounded-2xl shadow-sm border border-gray-200 flex flex-col h-full overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="p-8 lg:p-10 flex-grow relative">
                  {/* Quote Icon Watermark */}
                  <svg
                    className="absolute top-8 right-8 w-16 h-16 text-gray-50 opacity-60 z-0 pointer-events-none"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"
                    />
                  </svg>
                  <div
                    className="inline-block bg-[#8CA365]/10 text-[#8CA365] text-xs font-bold px-4 py-2 rounded-lg mb-6 uppercase tracking-wider border border-[#8CA365]/20 relative z-10"
                  >
                    Flawless emergency escalations
                  </div>
                  <div className="flex gap-1 text-yellow-400 mb-6 relative z-10">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-base leading-relaxed italic relative z-10">
                    "We run a 24/7 HVAC business. Their emergency escalation protocol is bulletproof. They filter out the non-urgent AC questions and hold them for morning, and only wake my on-call techs for true overnight emergencies. It has saved my dispatchers from severe burnout."
                  </p>
                </div>
                <div
                  className="bg-slate-50 border-t border-gray-100 p-6 lg:px-10 lg:py-8 flex flex-col gap-2 relative z-10"
                >
                  <span className="text-[#34414A] font-bold text-sm">
                    David R.
                  </span>
                  <span className="text-gray-500 text-xs">
                    Operations Manager, Frostline Heating & Air
                  </span>
                  <span
                    className="inline-block bg-white border border-gray-200 text-gray-400 text-[10px] font-bold px-2 py-1 rounded mt-2 w-max uppercase tracking-wider"
                  >
                    HVAC & Trades
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* SEO AggregateRating & Review Schema */}
        </section>
        {/* FAQ & PAA DOMINATION SECTION */}
        {/* FAQ SECTION (SPLIT-PANE STYLE) */}
        <section className="bg-white py-14 sm:py-24 px-4 border-t border-gray-100" id="faq">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              <div className="lg:col-span-4 lg:sticky lg:top-24">
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#34414A] leading-tight mb-6">
                  Frequently Asked Questions About After Hours Answering Services
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
              </div>
            </div>
          </div>
        </section>
        {/* DUAL-PATH FINAL CTA SECTION */}
        <section className="bg-[#0B1120] py-24 md:py-32 px-4 relative overflow-hidden">
          {/* Glowing ambient light effect */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#8CA365]/20 rounded-full blur-[150px] pointer-events-none"
          >
          </div>
          <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center">
            {/* Header Section */}
            <span
              className="block text-3xl md:text-4xl lg:text-5xl font-black text-white text-center mb-6 leading-tight tracking-tight reveal"
            >
              Start Your After Hours Answering Service
              <span className="text-[#8CA365] underline decoration-4 underline-offset-8">
                Tonight
              </span>
            </span>
            <span
              className="block text-lg md:text-xl text-slate-300 text-center mb-12 font-medium reveal reveal-delay-1"
            >
              Setup takes 5 minutes. Your after-hours calls are answered tonight. No contract. Cancel anytime.
            </span>
            {/* The Dual-Path Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-16 reveal reveal-delay-2">
              {/* Card 1: Primary Action (Get Started) */}
              <div
                className="bg-[#8CA365] rounded-3xl p-8 md:p-10 shadow-[0_10px_30px_rgba(140,163,101,0.4)] flex flex-col items-center text-center transform md:scale-105 z-10 hover:shadow-[0_15px_40px_rgba(140,163,101,0.5)] transition-all duration-300"
              >
                <span className="block text-2xl font-extrabold text-white mb-6">
                  Get Started Now
                </span>
                <div className="flex flex-col gap-4 mb-8 w-full max-w-xs text-left">
                  <div className="flex items-center gap-3 text-white font-medium text-lg">
                    <svg
                      className="w-6 h-6 shrink-0 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                      />
                    </svg>
                    <span>
                      No credit card required
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-white font-medium text-lg">
                    <svg
                      className="w-6 h-6 shrink-0 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                      />
                    </svg>
                    <span>
                      Live tonight
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-white font-medium text-lg">
                    <svg
                      className="w-6 h-6 shrink-0 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                      />
                    </svg>
                    <span>
                      Cancel anytime
                    </span>
                  </div>
                </div>
                <Link
                  className="w-full bg-white text-[#8CA365] hover:bg-slate-50 font-black text-lg py-4 px-8 rounded-xl transition-all duration-300 shadow-md inline-block"
                  href="/pricing"
                >
                  Get Started Now
                </Link>
              </div>
              {/* Card 2: Secondary Action (Contact) */}
              <div
                className="bg-slate-800/50 backdrop-blur-md border-2 border-slate-700 rounded-3xl p-8 md:p-10 flex flex-col items-center text-center hover:border-slate-500 transition-colors"
              >
                <span className="block text-2xl font-extrabold text-white mb-4">
                  Speak with Our Team
                </span>
                <p className="text-slate-400 text-base mb-8 leading-relaxed">
                  Have questions? Speak with a specialist to design the perfect custom call flow for your business.
                </p>
                <Link
                  className="w-full bg-transparent border-2 border-slate-500 text-white hover:bg-slate-700 hover:border-slate-400 font-bold text-lg py-4 px-8 rounded-xl transition-all duration-300 mt-auto inline-block"
                  href="/contact-us"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            {/* The Human Anchor */}
            <div
              className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 w-full max-w-3xl reveal reveal-delay-3"
            >
              <span className="text-slate-300 text-lg text-center md:text-left">
                Call us — a real receptionist answers right now.
              </span>
              <a
                className="text-2xl md:text-3xl font-black text-[#8CA365] hover:text-white transition-colors flex items-center gap-3"
                href="tel:8574531055"
              >
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                  />
                </svg>
                (857) 453-1055
              </a>
            </div>
          </div>
        </section>
        {/* Mobile Sticky Footer CTA */}
        <div
          className="fixed bottom-0 left-0 w-full bg-[#1a232c] border-t border-slate-800 p-4 z-50 md:hidden flex items-center justify-between shadow-[0_-10px_20px_rgba(0,0,0,0.3)]"
        >
          <span className="text-white font-bold text-sm">
            Need coverage tonight?
          </span>
          <a
            className="bg-[#8CA365] text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2 shadow-lg animate-pulse"
            href="tel:8574531055"
          >
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
              />
            </svg>
            Call Now
          </a>
        </div>
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
    </>
  )
}
