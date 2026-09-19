import Link from 'next/link'

export const metadata = {
  title: "Appointment Scheduling Service | Live Phone Answering",
  description: "Live receptionists book appointments directly into your calendar 24/7. Syncs with Calendly, Acuity, Google Calendar & 1,000+ scheduling tools. Get started today.",
  alternates: { canonical: "/appointment-scheduling" },
}

const pageSchema = [
  {
    "@context": "https://schema.org/",
    "@type": "WebPage",
    "name": "Appointment Scheduling Answering Service — Definition and Comparisons",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [
        "#definition-text",
        "#compare-widget",
        "#compare-ivr"
      ]
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How Our Appointment Scheduling Answering Service Works",
    "description": "Set up live appointment scheduling with a real receptionist in under 5 minutes using 4 simple steps.",
    "totalTime": "PT5M",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Forward your business number",
        "text": "Forward your existing business phone number to us — no new hardware required. Takes under 60 seconds to activate."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "We connect to your calendar and configure your booking script",
        "text": "We integrate directly with Calendly, Acuity, Google Calendar, and 1,000+ more tools. Your custom booking script is configured to your service types and brand voice."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Our receptionists answer calls and book directly into your calendar in real time",
        "text": "Live receptionists answer every call 24/7, check availability, collect caller details, and confirm appointments directly into your calendar in real time."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "You and your caller receive instant appointment confirmation",
        "text": "Automated SMS and email confirmations are sent instantly. A 24-hour reminder follows automatically to reduce no-shows by up to 80%."
      }
    ]
  },
  {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Medical Answering Service",
    "description": "HIPAA-compliant live medical answering service for clinics, physicians, and healthcare practices.",
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
          "name": "Sarah Chen",
          "honorificSuffix": "MD"
        },
        "datePublished": "2026-03-15",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "We reduced after-hours call interruptions by 80% in the first month. Our next HIPAA audit passed with zero findings related to call handling."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Rachel Dominguez",
          "honorificSuffix": "MHA"
        },
        "datePublished": "2026-02-20",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "Their team signed a BAA before day one, every message comes through an encrypted portal, and we've had zero compliance violations in 18 months."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "James Whitfield",
          "honorificSuffix": "DDS"
        },
        "datePublished": "2026-01-10",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "We're capturing an average of 35 new patient inquiries per month that previously went to voicemail after 5 PM. The bilingual answering has been a game-changer."
      }
    ]
  }
]

export default function AppointmentSchedulingPage() {
  return (
    <>
      <main>
        {/* APPOINTMENT SCHEDULING HERO SECTION */}
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
                  Appointment Scheduling Answering Service — Live Receptionists Who Book, Confirm & Sync to Your Calendar 24/7
                </h1>
                {/* H3 Emotional Hook */}
                <h3 className="text-xl text-gray-600 leading-relaxed mb-10 max-w-2xl">
                  A real receptionist answers every call, books directly into your calendar, sends automatic confirmations, and syncs with Calendly, Acuity, Google Calendar, and 1,000+ scheduling tools — all in one call.
                </h3>
                {/* 5 Credential Badges */}
                <div className="flex flex-wrap gap-3 mb-10">
                  {/* Badge 1 */}
                  <span
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-green-50 text-green-700 font-semibold text-sm border border-green-200"
                  >
                    <svg
                      className="w-4 h-4"
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
                    Real-Time Calendar Sync
                  </span>
                  {/* Badge 2 */}
                  <span
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-100 text-slate-700 font-semibold text-sm border border-slate-200"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                    Auto Appointment Reminders
                  </span>
                  {/* Badge 3 */}
                  <span
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-100 text-slate-700 font-semibold text-sm border border-slate-200"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                    1,000+ Integrations
                  </span>
                  {/* Badge 4 */}
                  <span
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-100 text-slate-700 font-semibold text-sm border border-slate-200"
                  >
                    <svg
                      className="w-4 h-4"
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
                    24/7 Live Booking
                  </span>
                  {/* Badge 5 */}
                  <span
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-100 text-slate-700 font-semibold text-sm border border-slate-200"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                    Bilingual English/Spanish
                  </span>
                </div>
                {/* Dual CTAs */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    className="flex justify-center items-center bg-[#8CA365] hover:bg-[#7a8f57] text-white font-bold text-lg py-4 px-8 rounded-xl shadow-[0_8px_20px_rgba(140,163,101,0.3)] transition-transform hover:-translate-y-1 text-center"
                    href="#hero-form"
                  >
                    Get Started Now
                  </a>
                  <Link
                    className="flex justify-center items-center bg-white hover:bg-slate-50 border-2 border-slate-200 text-slate-700 font-bold text-lg py-4 px-8 rounded-xl transition-all text-center"
                    href="/contact-us"
                  >
                    Get a Custom Quote
                  </Link>
                </div>
              </div>
              {/* Right Column (Lead Capture Form) */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end w-full reveal reveal-delay-2">
                <div
                  className="w-full max-w-md bg-white rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden relative z-20"
                >
                  {/* Card Header: Live Status Bar */}
                  <div
                    className="bg-gradient-to-r from-[#0B1F3A] to-[#122448] px-6 py-4 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2.5">
                      <div
                        className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.7)]"
                      >
                      </div>
                      <span className="text-white font-bold text-sm">
                        Receptionists Online Now
                      </span>
                    </div>
                    <span
                      className="text-green-400 text-xs font-semibold bg-green-400/10 border border-green-400/20 px-3 py-1 rounded-full"
                    >
                      24/7 Live
                    </span>
                  </div>
                  {/* Card Body: Form */}
                  <div className="p-6 md:p-8">
                    <h4 className="text-2xl font-black text-[#34414A] mb-1 tracking-tight">
                      Book Appointments 24/7
                    </h4>
                    <p className="text-sm text-gray-500 mb-6">
                      Live receptionists fill your calendar. Get started today — no credit card.
                    </p>
                    <form
                      action="#"
                      className="flex flex-col gap-4"
                      id="hero-form"
                      method="POST"
                    >
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="fullName">
                          Full Name
                        </label>
                        <input
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#8CA365] focus:bg-white transition-all"
                          id="fullName"
                          name="fullName"
                          placeholder="Jane Smith"
                          required
                          type="text"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="email">
                            Work Email
                          </label>
                          <input
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#8CA365] focus:bg-white transition-all"
                            id="email"
                            name="email"
                            placeholder="jane@biz.com"
                            required
                            type="email"
                          />
                        </div>
                        <div>
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
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="calTool">
                          Scheduling Tool You Use
                        </label>
                        <select
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#8CA365] focus:bg-white transition-all"
                          id="calTool"
                          name="calTool"
                          required
                          defaultValue=""
                        >
                          <option disabled value="">
                            Select your tool
                          </option>
                          <option value="calendly">
                            Calendly
                          </option>
                          <option value="acuity">
                            Acuity Scheduling
                          </option>
                          <option value="google">
                            Google Calendar
                          </option>
                          <option value="zocdoc">
                            Zocdoc
                          </option>
                          <option value="other">
                            Other / Custom
                          </option>
                        </select>
                      </div>
                      <button
                        className="w-full bg-[#8CA365] hover:bg-[#7a8f57] text-white font-bold text-lg py-3.5 rounded-xl shadow-[0_8px_20px_rgba(140,163,101,0.35)] transition-all hover:-translate-y-0.5 mt-2"
                        type="submit"
                      >
                        Get Started Now →
                      </button>
                      <p className="text-xs text-gray-400 text-center -mt-1">
                        No setup fees · No long-term contracts · Cancel anytime
                      </p>
                    </form>
                    {/* Social Proof Footer */}
                    <div className="mt-5 pt-5 border-t border-gray-100 flex items-center justify-between">
                      <div className="flex -space-x-2">
                        <div
                          className="w-7 h-7 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center text-white text-[9px] font-bold"
                        >
                          JH
                        </div>
                        <div
                          className="w-7 h-7 rounded-full bg-purple-500 border-2 border-white flex items-center justify-center text-white text-[9px] font-bold"
                        >
                          MW
                        </div>
                        <div
                          className="w-7 h-7 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center text-white text-[9px] font-bold"
                        >
                          PN
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 font-medium">
                        Joined by
                        <span className="text-[#8CA365] font-bold">
                          1,200+
                        </span>
                        businesses this year
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Trust Bar & Credibility Strip */}
        <section
          className="w-full bg-white border-t border-b border-gray-200 shadow-sm relative z-20 reveal reveal-delay-2"
        >
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            {/* SR-only H4 — keyword + trust signal for crawlers */}
            <h4 className="sr-only">
              10,000+ businesses trust us to book their appointments · 4.9★ Google rating · 1,000+ calendar integrations · US-led receptionists · HIPAA-certified for medical bookings
            </h4>
            {/* ROW 1: Credibility Pillars */}
            <div
              className="flex flex-wrap justify-center md:justify-between items-center gap-y-5 py-5 md:py-6 md:divide-x md:divide-gray-200"
            >
              {/* Pillar 1: Google Rating */}
              <div className="flex items-center gap-3 px-4 xl:px-6 w-full sm:w-1/2 md:w-auto">
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
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
                <div>
                  <div className="flex items-center gap-1">
                    <div className="flex text-yellow-400 gap-0.5">
                      <svg
                        className="w-3.5 h-3.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                      </svg>
                      <svg
                        className="w-3.5 h-3.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                      </svg>
                      <svg
                        className="w-3.5 h-3.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                      </svg>
                      <svg
                        className="w-3.5 h-3.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                      </svg>
                      <svg
                        className="w-3.5 h-3.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                      </svg>
                    </div>
                    <span className="text-sm font-black text-gray-700">
                      4.9★
                    </span>
                  </div>
                  <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide mt-0.5">
                    Google Rating
                  </p>
                </div>
              </div>
              {/* Pillar 2: 10,000+ Businesses */}
              <div className="flex items-center gap-3 px-4 xl:px-6 w-full sm:w-1/2 md:w-auto">
                <svg
                  className="w-5 h-5 text-[#8CA365] shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
                <div>
                  <p className="text-sm font-black text-gray-700">
                    10,000+
                  </p>
                  <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide mt-0.5">
                    Businesses Trust Us
                  </p>
                </div>
              </div>
              {/* Pillar 3: 1,000+ Integrations */}
              <div className="flex items-center gap-3 px-4 xl:px-6 w-full sm:w-1/2 md:w-auto">
                <svg
                  className="w-5 h-5 text-[#8CA365] shrink-0"
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
                <div>
                  <p className="text-sm font-black text-gray-700">
                    1,000+
                  </p>
                  <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide mt-0.5">
                    Calendar Integrations
                  </p>
                </div>
              </div>
              {/* Pillar 4: US-Led Receptionists */}
              <div className="flex items-center gap-3 px-4 xl:px-6 w-full sm:w-1/2 md:w-auto">
                <span className="text-xl leading-none shrink-0">
                  🇺🇸
                </span>
                <div>
                  <p className="text-sm font-black text-gray-700">
                    100% US-Based
                  </p>
                  <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide mt-0.5">
                    Live Receptionists
                  </p>
                </div>
              </div>
              {/* Pillar 5: HIPAA Certified */}
              <div className="flex items-center gap-3 px-4 xl:px-6 w-full sm:w-1/2 md:w-auto">
                <svg
                  className="w-5 h-5 text-[#8CA365] shrink-0"
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
                <div>
                  <p className="text-sm font-black text-gray-700">
                    HIPAA-Certified
                  </p>
                  <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide mt-0.5">
                    Medical Bookings Safe
                  </p>
                </div>
              </div>
            </div>
            {/* ROW 2: Integration Logo Strip */}
            <div className="border-t border-gray-100 py-4">
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
                <span
                  className="text-[10px] font-bold text-gray-400 uppercase tracking-widest whitespace-nowrap mr-2"
                >
                  Works with:
                </span>
                {/* Calendly */}
                <div
                  className="flex items-center gap-1.5 text-gray-500 hover:text-gray-700 transition-colors group"
                >
                  <svg
                    className="w-4 h-4 text-[#006BFF]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M19 4h-1V2h-2v2H8V2H6v2H5C3.9 4 3 4.9 3 6v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM5 8V6h14v2H5z"
                    />
                  </svg>
                  <span className="text-xs font-semibold">
                    Calendly
                  </span>
                </div>
                <span className="text-gray-200 hidden md:block">
                  |
                </span>
                {/* Acuity */}
                <div className="flex items-center gap-1.5 text-gray-500 hover:text-gray-700 transition-colors">
                  <svg
                    className="w-4 h-4 text-[#7B5EA7]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.86 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z"
                    />
                  </svg>
                  <span className="text-xs font-semibold">
                    Acuity
                  </span>
                </div>
                <span className="text-gray-200 hidden md:block">
                  |
                </span>
                {/* Google Calendar */}
                <div className="flex items-center gap-1.5 text-gray-500 hover:text-gray-700 transition-colors">
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path
                      d="M19 4h-1V2h-2v2H8V2H6v2H5C3.9 4 3 4.9 3 6v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM5 8V6h14v2H5z"
                      fill="#4285F4"
                    />
                  </svg>
                  <span className="text-xs font-semibold">
                    Google Calendar
                  </span>
                </div>
                <span className="text-gray-200 hidden md:block">
                  |
                </span>
                {/* Setmore */}
                <div className="flex items-center gap-1.5 text-gray-500 hover:text-gray-700 transition-colors">
                  <svg
                    className="w-4 h-4 text-[#00B67A]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                    />
                  </svg>
                  <span className="text-xs font-semibold">
                    Setmore
                  </span>
                </div>
                <span className="text-gray-200 hidden md:block">
                  |
                </span>
                {/* Zoho */}
                <div className="flex items-center gap-1.5 text-gray-500 hover:text-gray-700 transition-colors">
                  <svg
                    className="w-4 h-4 text-[#E42527]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
                    />
                  </svg>
                  <span className="text-xs font-semibold">
                    Zoho
                  </span>
                </div>
                <span className="text-gray-200 hidden md:block">
                  |
                </span>
                {/* HubSpot */}
                <div className="flex items-center gap-1.5 text-gray-500 hover:text-gray-700 transition-colors">
                  <svg
                    className="w-4 h-4 text-[#FF7A59]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M18.164 8.713V6.32a1.83 1.83 0 001.057-1.648v-.056A1.834 1.834 0 0017.387 2.78h-.056a1.834 1.834 0 00-1.834 1.836v.056a1.83 1.83 0 001.058 1.648v2.393a5.203 5.203 0 00-2.474.965L7.19 4.04a2.042 2.042 0 00.04-.391A2.048 2.048 0 105.183 5.696l6.765 5.558a5.207 5.207 0 00-.678 2.574 5.213 5.213 0 00.72 2.645l-2.076 2.076a1.718 1.718 0 00-.5-.077 1.737 1.737 0 101.737 1.737 1.72 1.72 0 00-.078-.502l2.05-2.049a5.217 5.217 0 003.246 1.133c2.884 0 5.222-2.338 5.222-5.222a5.217 5.217 0 00-2.427-4.456z"
                    />
                  </svg>
                  <span className="text-xs font-semibold">
                    HubSpot
                  </span>
                </div>
                <span className="text-gray-400 text-xs font-semibold ml-2">
                  + 994 more
                </span>
              </div>
            </div>
          </div>
        </section>
        {/* SECTION 3: DEFINITION + COMPARISON */}
        <section className="bg-white py-24 px-4 relative z-10 overflow-hidden">
          {/* Subtle dot background */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ backgroundImage: "radial-gradient(#e2e8f0 1.5px, transparent 1.5px)", backgroundSize: "28px 28px" }}
          >
          </div>
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent">
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
            {/* Two-Column Layout: Content Left + Image Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
              {/* LEFT: H2 Definition Block */}
              <div className="reveal">
                {/* H2 Definition */}
                <div
                  className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border-l-4 border-[#8CA365] relative overflow-hidden mb-8"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#8CA365]/5 rounded-bl-full">
                  </div>
                  <span
                    className="inline-block bg-[#8CA365]/10 text-[#8CA365] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4"
                  >
                    Definition
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#34414A] mb-4 leading-tight">
                    What Is an Appointment Scheduling Answering Service — And How Does It Work?
                  </h2>
                  <p className="text-gray-700 text-base leading-relaxed font-medium" id="definition-text">
                    An appointment scheduling answering service is a live-agent, 24/7 call solution where trained receptionists answer every inbound call and book directly into your calendar in real time. They check live availability, confirm the slot with the caller, send automated SMS or email confirmations, and sync every booking to your scheduling software — Calendly, Acuity, Google Calendar, and 1,000+ more — eliminating missed bookings and voicemail forever.
                  </p>
                </div>
                {/* Quick Stats Row */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-slate-50 border border-gray-200 rounded-2xl p-4 text-center">
                    <p className="text-2xl font-black text-[#8CA365]">
                      80%
                    </p>
                    <p className="text-[11px] text-gray-500 font-semibold mt-1 leading-tight">
                      Callers who reach voicemail call a competitor
                    </p>
                  </div>
                  <div className="bg-slate-50 border border-gray-200 rounded-2xl p-4 text-center">
                    <p className="text-2xl font-black text-[#8CA365]">
                      67%
                    </p>
                    <p className="text-[11px] text-gray-500 font-semibold mt-1 leading-tight">
                      Hang up on automated IVR without booking
                    </p>
                  </div>
                  <div className="bg-slate-50 border border-gray-200 rounded-2xl p-4 text-center">
                    <p className="text-2xl font-black text-[#8CA365]">
                      24/7
                    </p>
                    <p className="text-[11px] text-gray-500 font-semibold mt-1 leading-tight">
                      Live coverage — nights, weekends, holidays
                    </p>
                  </div>
                </div>
              </div>
              {/* RIGHT: Illustration */}
              <div className="reveal reveal-delay-2 flex justify-center lg:justify-end">
                <div className="relative w-full max-w-lg">
                  {/* Decorative ring behind image */}
                  <div
                    className="absolute -inset-4 bg-gradient-to-br from-[#8CA365]/20 to-slate-100 rounded-3xl -z-10"
                  >
                  </div>
                  <img
                    alt="Live receptionist booking appointments into Calendly, Acuity, and Google Calendar in real time"
                    className="w-full rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.18)] relative z-10"
                    loading="lazy"
                    src="/images/scheduling-receptionist.png"
                  />
                  {/* Floating badge */}
                  <div
                    className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg border border-gray-100 px-4 py-3 flex items-center gap-3 z-20"
                  >
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-green-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          clipRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          fillRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-black text-[#34414A]">
                        Appointment Confirmed
                      </p>
                      <p className="text-[10px] text-gray-500">
                        Synced to your calendar instantly
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* H3 Comparison Cards Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 reveal reveal-delay-1">
              {/* H3 Card 1: vs. Online Booking Widget */}
              <div
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 group relative overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-[#8CA365] to-[#a8c47c] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"
                >
                </div>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-extrabold text-[#34414A] mb-3 leading-snug" id="compare-widget">
                  Appointment scheduling answering service vs. online booking software — what's the difference?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Online booking widgets only work when callers visit your website and complete a form — missing the 60%+ of appointment inquiries that still arrive by phone. A live scheduling answering service captures every phone caller, answers questions in real time, and books directly into your calendar. You convert more leads without changing your software.
                </p>
              </div>
              {/* H3 Card 2: vs. IVR */}
              <div
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 group relative overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-[#8CA365] to-[#a8c47c] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"
                >
                </div>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-amber-500"
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
                </div>
                <h3 className="text-lg font-extrabold text-[#34414A] mb-3 leading-snug" id="compare-ivr">
                  Live appointment scheduling vs. automated IVR booking — why callers still prefer a human
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  67% of callers who reach an automated IVR system hang up without completing their booking — they call the next business on the list. Live appointment scheduling receptionists handle accents, complex scheduling requests, rescheduling, and follow-up questions instantly. The result: more confirmed bookings, fewer abandoned calls, and zero lost revenue to a competitor's phone line.
                </p>
              </div>
            </div>
          </div>
          {/* Speakable Schema: 3 AI Overview citation opportunities */}
        </section>
        {/* SECTION 4: WHY IT WORKS — 6 REASONS */}
        <section
          className="w-full bg-slate-50 py-24 px-4 relative overflow-hidden border-y border-gray-200"
        >
          {/* Background accent */}
          <div
            className="absolute top-0 right-0 w-96 h-96 bg-[#8CA365]/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"
          >
          </div>
          <div
            className="absolute bottom-0 left-0 w-64 h-64 bg-[#8CA365]/5 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none"
          >
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
            {/* Section Header */}
            <div className="text-center mb-16 reveal">
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#34414A] leading-tight mb-4 max-w-4xl mx-auto"
              >
                Why Our Appointment Scheduling Answering Service Works —
                <br className="hidden md:block" />
                <span className="text-[#8CA365]">
                  6 Reasons Businesses Book More
                </span>
              </h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
                Every business that switches sees the same result: more bookings, fewer no-shows, and zero missed calls. Here's exactly why it works.
              </p>
            </div>
            {/* 6-Reason Grid: 3 col on desktop, 2 on tablet, 1 on mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal reveal-delay-1">
              {/* Reason 1: 24/7 Live Booking */}
              <div
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col group relative overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#8CA365] to-[#a8c47c] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-400"
                >
                </div>
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className="w-12 h-12 rounded-2xl bg-[#8CA365]/10 flex items-center justify-center shrink-0"
                  >
                    <svg
                      className="w-6 h-6 text-[#8CA365]"
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
                  <span className="text-3xl font-black text-[#8CA365]/20 leading-none">
                    01
                  </span>
                </div>
                <h3 className="text-lg font-extrabold text-[#34414A] mb-3 leading-snug">
                  24/7 live booking — appointments booked even when your office is closed
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-grow">
                  Callers don't wait until Monday morning — they book when they're ready. Our live receptionists are available 24 hours a day, 7 days a week, including evenings, weekends, and every public holiday. Every call that comes in after hours becomes a confirmed booking in your calendar, not a voicemail nobody returns.
                </p>
                <div className="mt-5 pt-4 border-t border-gray-100">
                  <span className="text-[10px] font-bold text-[#8CA365] uppercase tracking-widest">
                    24/7 appointment booking
                  </span>
                </div>
              </div>
              {/* Reason 2: Zero Missed Calls */}
              <div
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col group relative overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#8CA365] to-[#a8c47c] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-400"
                >
                </div>
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center shrink-0">
                    <svg
                      className="w-6 h-6 text-red-500"
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
                  <span className="text-3xl font-black text-[#8CA365]/20 leading-none">
                    02
                  </span>
                </div>
                <h3 className="text-lg font-extrabold text-[#34414A] mb-3 leading-snug">
                  Zero missed calls — every caller reaches a real person, not a voicemail
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-grow">
                  80% of callers who reach voicemail don't leave a message — they call your competitor. Our live answering service guarantees every inbound call is answered by a warm, professional receptionist in real time, converting callers into booked clients before they have a chance to hang up or search elsewhere.
                </p>
                <div className="mt-5 pt-4 border-t border-gray-100">
                  <span className="text-[10px] font-bold text-[#8CA365] uppercase tracking-widest">
                    Live answering service
                  </span>
                </div>
              </div>
              {/* Reason 3: Real-Time Calendar Sync */}
              <div
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col group relative overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#8CA365] to-[#a8c47c] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-400"
                >
                </div>
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                    <svg
                      className="w-6 h-6 text-blue-500"
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
                  <span className="text-3xl font-black text-[#8CA365]/20 leading-none">
                    03
                  </span>
                </div>
                <h3 className="text-lg font-extrabold text-[#34414A] mb-3 leading-snug">
                  Real-time calendar sync — no double-bookings, no manual data entry
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-grow">
                  Our receptionists work live inside your scheduling software — Calendly, Acuity, Google Calendar, Setmore, Zoho, and 1,000+ more — checking availability in real time before confirming every slot. No double-bookings, no back-and-forth emails, and zero manual entry for your team. Every booking is instantly visible in your calendar.
                </p>
                <div className="mt-5 pt-4 border-t border-gray-100">
                  <span className="text-[10px] font-bold text-[#8CA365] uppercase tracking-widest">
                    Real-time calendar sync answering
                  </span>
                </div>
              </div>
              {/* Reason 4: Appointment Reminders */}
              <div
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col group relative overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#8CA365] to-[#a8c47c] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-400"
                >
                </div>
                {/* "Stat" badge */}
                <div
                  className="absolute top-5 right-5 bg-[#8CA365]/10 text-[#8CA365] text-[10px] font-bold px-2.5 py-1 rounded-full border border-[#8CA365]/20 uppercase tracking-wider"
                >
                  ↓ 80% No-Shows
                </div>
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center shrink-0">
                    <svg
                      className="w-6 h-6 text-amber-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <span className="text-3xl font-black text-[#8CA365]/20 leading-none">
                    04
                  </span>
                </div>
                <h3 className="text-lg font-extrabold text-[#34414A] mb-3 leading-snug">
                  Automatic appointment reminders — reduce no-shows by up to 80%
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-grow">
                  The moment a booking is confirmed, an automated SMS or email reminder is sent to the client — and followed up 24 hours before the appointment. Businesses using our appointment reminder service report up to 80% fewer no-shows. That's more revenue captured from the same number of bookings you already have.
                </p>
                <div className="mt-5 pt-4 border-t border-gray-100">
                  <span className="text-[10px] font-bold text-[#8CA365] uppercase tracking-widest">
                    Appointment reminder service
                  </span>
                </div>
              </div>
              {/* Reason 5: Lead Qualification */}
              <div
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col group relative overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#8CA365] to-[#a8c47c] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-400"
                >
                </div>
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center shrink-0">
                    <svg
                      className="w-6 h-6 text-purple-500"
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
                  </div>
                  <span className="text-3xl font-black text-[#8CA365]/20 leading-none">
                    05
                  </span>
                </div>
                <h3 className="text-lg font-extrabold text-[#34414A] mb-3 leading-snug">
                  Lead qualification during booking — capture caller info before the appointment is set
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-grow">
                  Our receptionists don't just book — they qualify. Before confirming any appointment, they collect the caller's name, contact details, reason for visit, insurance information, or any custom intake questions you specify. Every new booking arrives pre-qualified, saving your staff time and ensuring your calendar is filled with the right clients.
                </p>
                <div className="mt-5 pt-4 border-t border-gray-100">
                  <span className="text-[10px] font-bold text-[#8CA365] uppercase tracking-widest">
                    Appointment lead qualification
                  </span>
                </div>
              </div>
              {/* Reason 6: Bilingual Scheduling */}
              <div
                className="bg-[#0B1F3A] rounded-2xl p-8 border border-[#0B1F3A] shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group relative overflow-hidden"
              >
                <div
                  className="absolute top-0 right-0 w-32 h-32 bg-[#8CA365]/10 rounded-bl-full pointer-events-none"
                >
                </div>
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className="w-12 h-12 rounded-2xl bg-[#8CA365]/20 flex items-center justify-center shrink-0"
                  >
                    <svg
                      className="w-6 h-6 text-[#8CA365]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <span className="text-3xl font-black text-white/10 leading-none">
                    06
                  </span>
                </div>
                <h3 className="text-lg font-extrabold text-white mb-3 leading-snug">
                  Bilingual scheduling — appointments booked in English and Spanish
                </h3>
                <p className="text-blue-100/70 text-sm leading-relaxed flex-grow">
                  Over 41 million Spanish-speaking adults in the US represent an underserved booking market most competitors ignore entirely. Our bilingual appointment scheduling receptionists handle calls fluently in both English and Spanish — confirming bookings, answering questions, and building trust with every Spanish-speaking caller your competitors send to voicemail.
                </p>
                <div className="mt-5 pt-4 border-t border-white/10">
                  <span className="text-[10px] font-bold text-[#8CA365] uppercase tracking-widest">
                    Bilingual appointment scheduling
                  </span>
                </div>
              </div>
            </div>
            {/* Bottom CTA strip */}
            <div
              className="mt-14 bg-white border border-gray-200 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 reveal reveal-delay-2 shadow-sm"
            >
              <div>
                <p className="text-lg font-extrabold text-[#34414A]">
                  Ready to see all 6 working for your business?
                </p>
                <p className="text-gray-500 text-sm mt-1">
                  Start your setup — no credit card, no contracts, live in under 24 hours.
                </p>
              </div>
              <a
                className="bg-[#8CA365] hover:bg-[#7a8f57] text-white font-bold px-8 py-3.5 rounded-xl shadow-[0_8px_20px_rgba(140,163,101,0.35)] transition-all hover:-translate-y-0.5 whitespace-nowrap text-sm shrink-0"
                href="#hero-form"
              >
                Get Started Now →
              </a>
            </div>
          </div>
        </section>
        {/* SECTION 5: FULL FEATURE GRID — EVERYTHING INCLUDED */}
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
          {/* Subtle dot overlay */}
          <div
            className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none"
          >
          </div>
          {/* Green glow accent */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#8CA365]/10 rounded-full blur-3xl pointer-events-none"
          >
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
            {/* Section Header */}
            <div className="text-center mb-16 reveal">
              <span
                className="inline-block bg-[#8CA365]/20 text-[#8CA365] text-xs font-bold px-4 py-2 rounded-full border border-[#8CA365]/30 uppercase tracking-widest mb-5"
              >
                Everything Included — No Extra Fees
              </span>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5 max-w-4xl mx-auto"
              >
                Everything Included in Your Appointment Scheduling Answering Service —
                <span className="text-[#8CA365]">
                  No Extra Fees
                </span>
              </h2>
              <p className="text-blue-100/60 text-lg max-w-2xl mx-auto leading-relaxed">
                Every feature below is included in your plan from day one. No add-ons, no hidden costs, no feature tiers — just complete live scheduling coverage that works exactly how your business needs it.
              </p>
            </div>
            {/* 3-Column Feature Grid (9 cards = 3x3) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 reveal reveal-delay-1">
              {/* Feature 1: 24/7 Live Booking */}
              <div
                className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/10 hover:border-[#8CA365]/40 transition-all duration-300 hover:-translate-y-1 group flex flex-col"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="w-11 h-11 rounded-xl bg-[#8CA365]/20 flex items-center justify-center shrink-0 group-hover:bg-[#8CA365]/30 transition-colors"
                  >
                    <svg
                      className="w-5 h-5 text-[#8CA365]"
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
                  <div
                    className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-2.5"
                  >
                    <svg
                      className="w-3 h-3 text-white/40"
                      fill="currentColor"
                      viewBox="0 0 8 8"
                    >
                      <circle
                        cx="4"
                        cy="4"
                        r="4"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-base font-bold text-white mb-2 leading-snug flex-grow">
                  Live 24/7 appointment booking — day, night, weekends, and holidays
                </h3>
                <p className="text-blue-100/55 text-sm leading-relaxed mt-2">
                  Every call is answered by a live receptionist, any time of day or night — including weekends, bank holidays, and seasonal peaks. Callers book on their schedule, not yours.
                </p>
                <div className="mt-5 pt-4 border-t border-white/10">
                  <span className="text-[10px] font-bold text-[#8CA365] uppercase tracking-widest">
                    After hours appointment booking
                  </span>
                </div>
              </div>
              {/* Feature 2: Real-Time Calendar Sync */}
              <div
                className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/10 hover:border-[#8CA365]/40 transition-all duration-300 hover:-translate-y-1 group flex flex-col"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="w-11 h-11 rounded-xl bg-blue-500/20 flex items-center justify-center shrink-0 group-hover:bg-blue-500/30 transition-colors"
                  >
                    <svg
                      className="w-5 h-5 text-blue-400"
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
                  <div
                    className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-2.5"
                  >
                    <svg
                      className="w-3 h-3 text-white/40"
                      fill="currentColor"
                      viewBox="0 0 8 8"
                    >
                      <circle
                        cx="4"
                        cy="4"
                        r="4"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-base font-bold text-white mb-2 leading-snug flex-grow">
                  Real-time calendar sync with your existing scheduling software
                </h3>
                <p className="text-blue-100/55 text-sm leading-relaxed mt-2">
                  Our receptionists work live inside Calendly, Acuity, Google Calendar, Setmore, Zoho, HubSpot, and 1,000+ more — checking real-time availability and booking without ever leaving your system.
                </p>
                <div className="mt-5 pt-4 border-t border-white/10">
                  <span className="text-[10px] font-bold text-[#8CA365] uppercase tracking-widest">
                    Real-time calendar sync answering
                  </span>
                </div>
              </div>
              {/* Feature 3: Appointment Confirmations & Reminders */}
              <div
                className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/10 hover:border-[#8CA365]/40 transition-all duration-300 hover:-translate-y-1 group flex flex-col"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="w-11 h-11 rounded-xl bg-amber-500/20 flex items-center justify-center shrink-0 group-hover:bg-amber-500/30 transition-colors"
                  >
                    <svg
                      className="w-5 h-5 text-amber-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <div
                    className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-2.5"
                  >
                    <svg
                      className="w-3 h-3 text-white/40"
                      fill="currentColor"
                      viewBox="0 0 8 8"
                    >
                      <circle
                        cx="4"
                        cy="4"
                        r="4"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-base font-bold text-white mb-2 leading-snug flex-grow">
                  Automated appointment confirmation and reminder messages
                </h3>
                <p className="text-blue-100/55 text-sm leading-relaxed mt-2">
                  The moment a booking is confirmed, an automated SMS or email goes to the client. A 24-hour reminder follows automatically — reducing no-shows by up to 80% without any action from your team.
                </p>
                <div className="mt-5 pt-4 border-t border-white/10">
                  <span className="text-[10px] font-bold text-[#8CA365] uppercase tracking-widest">
                    Appointment confirmation answering
                  </span>
                </div>
              </div>
              {/* Feature 4: Rescheduling & Cancellations */}
              <div
                className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/10 hover:border-[#8CA365]/40 transition-all duration-300 hover:-translate-y-1 group flex flex-col"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="w-11 h-11 rounded-xl bg-red-500/20 flex items-center justify-center shrink-0 group-hover:bg-red-500/30 transition-colors"
                  >
                    <svg
                      className="w-5 h-5 text-red-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <div
                    className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-2.5"
                  >
                    <svg
                      className="w-3 h-3 text-white/40"
                      fill="currentColor"
                      viewBox="0 0 8 8"
                    >
                      <circle
                        cx="4"
                        cy="4"
                        r="4"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-base font-bold text-white mb-2 leading-snug flex-grow">
                  Appointment rescheduling and cancellation handling
                </h3>
                <p className="text-blue-100/55 text-sm leading-relaxed mt-2">
                  Cancellations and rescheduling requests are handled live — our receptionists update your calendar instantly, notify you, and immediately re-open the time slot so it can be filled by the next caller.
                </p>
                <div className="mt-5 pt-4 border-t border-white/10">
                  <span className="text-[10px] font-bold text-[#8CA365] uppercase tracking-widest">
                    Appointment rescheduling answering service
                  </span>
                </div>
              </div>
              {/* Feature 5: Custom Call Scripting */}
              <div
                className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/10 hover:border-[#8CA365]/40 transition-all duration-300 hover:-translate-y-1 group flex flex-col"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="w-11 h-11 rounded-xl bg-purple-500/20 flex items-center justify-center shrink-0 group-hover:bg-purple-500/30 transition-colors"
                  >
                    <svg
                      className="w-5 h-5 text-purple-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <div
                    className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-2.5"
                  >
                    <svg
                      className="w-3 h-3 text-white/40"
                      fill="currentColor"
                      viewBox="0 0 8 8"
                    >
                      <circle
                        cx="4"
                        cy="4"
                        r="4"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-base font-bold text-white mb-2 leading-snug flex-grow">
                  Custom call scripting tailored to your booking process
                </h3>
                <p className="text-blue-100/55 text-sm leading-relaxed mt-2">
                  We build a bespoke call script around your business — your greeting, your questions, your booking flow, and your brand voice. Callers experience your brand, not a generic answering service.
                </p>
                <div className="mt-5 pt-4 border-t border-white/10">
                  <span className="text-[10px] font-bold text-[#8CA365] uppercase tracking-widest">
                    Custom scheduling answering service
                  </span>
                </div>
              </div>
              {/* Feature 6: New Client Intake */}
              <div
                className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/10 hover:border-[#8CA365]/40 transition-all duration-300 hover:-translate-y-1 group flex flex-col"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="w-11 h-11 rounded-xl bg-[#8CA365]/20 flex items-center justify-center shrink-0 group-hover:bg-[#8CA365]/30 transition-colors"
                  >
                    <svg
                      className="w-5 h-5 text-[#8CA365]"
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
                  </div>
                  <div
                    className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-2.5"
                  >
                    <svg
                      className="w-3 h-3 text-white/40"
                      fill="currentColor"
                      viewBox="0 0 8 8"
                    >
                      <circle
                        cx="4"
                        cy="4"
                        r="4"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-base font-bold text-white mb-2 leading-snug flex-grow">
                  New client intake during scheduling — collect caller details before the appointment
                </h3>
                <p className="text-blue-100/55 text-sm leading-relaxed mt-2">
                  Before any appointment is confirmed, our receptionists collect the caller's name, contact number, reason for visit, and any custom intake questions you specify — delivering pre-qualified bookings straight to your calendar.
                </p>
                <div className="mt-5 pt-4 border-t border-white/10">
                  <span className="text-[10px] font-bold text-[#8CA365] uppercase tracking-widest">
                    New client intake scheduling
                  </span>
                </div>
              </div>
              {/* Feature 7: Bilingual Scheduling */}
              <div
                className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/10 hover:border-[#8CA365]/40 transition-all duration-300 hover:-translate-y-1 group flex flex-col"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="w-11 h-11 rounded-xl bg-teal-500/20 flex items-center justify-center shrink-0 group-hover:bg-teal-500/30 transition-colors"
                  >
                    <svg
                      className="w-5 h-5 text-teal-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <div
                    className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-2.5"
                  >
                    <svg
                      className="w-3 h-3 text-white/40"
                      fill="currentColor"
                      viewBox="0 0 8 8"
                    >
                      <circle
                        cx="4"
                        cy="4"
                        r="4"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-base font-bold text-white mb-2 leading-snug flex-grow">
                  Bilingual scheduling — English and Spanish-speaking receptionists
                </h3>
                <p className="text-blue-100/55 text-sm leading-relaxed mt-2">
                  Our bilingual receptionists answer and book fluently in both English and Spanish, capturing the 41+ million Spanish-speaking callers your competitors are sending to voicemail every day.
                </p>
                <div className="mt-5 pt-4 border-t border-white/10">
                  <span className="text-[10px] font-bold text-[#8CA365] uppercase tracking-widest">
                    Bilingual appointment scheduling
                  </span>
                </div>
              </div>
              {/* Feature 8: After-Hours Booking */}
              <div
                className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/10 hover:border-[#8CA365]/40 transition-all duration-300 hover:-translate-y-1 group flex flex-col"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="w-11 h-11 rounded-xl bg-indigo-500/20 flex items-center justify-center shrink-0 group-hover:bg-indigo-500/30 transition-colors"
                  >
                    <svg
                      className="w-5 h-5 text-indigo-400"
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
                  <div
                    className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-2.5"
                  >
                    <svg
                      className="w-3 h-3 text-white/40"
                      fill="currentColor"
                      viewBox="0 0 8 8"
                    >
                      <circle
                        cx="4"
                        cy="4"
                        r="4"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-base font-bold text-white mb-2 leading-snug flex-grow">
                  After-hours appointment booking when your office is closed
                </h3>
                <p className="text-blue-100/55 text-sm leading-relaxed mt-2">
                  When your front desk closes at 5pm, your booking line stays open. Our after-hours scheduling receptionists capture every evening and weekend call — turning after-hours intent into next-day confirmed appointments.
                </p>
                <div className="mt-5 pt-4 border-t border-white/10">
                  <span className="text-[10px] font-bold text-[#8CA365] uppercase tracking-widest">
                    After hours appointment booking
                  </span>
                </div>
              </div>
              {/* Feature 9: HIPAA-Compliant Scheduling */}
              <div
                className="bg-gradient-to-br from-[#8CA365]/20 to-[#8CA365]/5 border border-[#8CA365]/30 rounded-2xl p-7 hover:border-[#8CA365]/60 transition-all duration-300 hover:-translate-y-1 group flex flex-col relative overflow-hidden"
              >
                <div
                  className="absolute top-0 right-0 bg-[#8CA365] text-white text-[9px] font-bold px-3 py-1 uppercase tracking-wider rounded-bl-lg"
                >
                  Healthcare
                </div>
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="w-11 h-11 rounded-xl bg-[#8CA365]/30 flex items-center justify-center shrink-0 group-hover:bg-[#8CA365]/50 transition-colors"
                  >
                    <svg
                      className="w-5 h-5 text-[#8CA365]"
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
                  <div
                    className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-2.5"
                  >
                    <svg
                      className="w-3 h-3 text-[#8CA365]/60"
                      fill="currentColor"
                      viewBox="0 0 8 8"
                    >
                      <circle
                        cx="4"
                        cy="4"
                        r="4"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-base font-bold text-white mb-2 leading-snug flex-grow">
                  HIPAA-compliant appointment scheduling for medical and healthcare practices
                </h3>
                <p className="text-blue-100/55 text-sm leading-relaxed mt-2">
                  All receptionists handling healthcare scheduling are HIPAA-certified. Patient information is handled under strict compliance — secure call handling, protected data transmission, and full BAA available for medical practices.
                </p>
                <div className="mt-5 pt-4 border-t border-white/10">
                  <span className="text-[10px] font-bold text-[#8CA365] uppercase tracking-widest">
                    HIPAA appointment scheduling service
                  </span>
                </div>
              </div>
            </div>
            {/* Bottom trust strip */}
            <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 reveal reveal-delay-2">
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <p className="text-xl font-black text-[#8CA365]">
                  1,000+
                </p>
                <p className="text-blue-100/50 text-xs mt-1 font-medium">
                  Integrations supported
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <p className="text-xl font-black text-[#8CA365]">
                  24/7
                </p>
                <p className="text-blue-100/50 text-xs mt-1 font-medium">
                  Live coverage, always
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <p className="text-xl font-black text-[#8CA365]">
                  $0
                </p>
                <p className="text-blue-100/50 text-xs mt-1 font-medium">
                  Hidden fees or add-ons
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <p className="text-xl font-black text-[#8CA365]">
                  HIPAA
                </p>
                <p className="text-blue-100/50 text-xs mt-1 font-medium">
                  Certified receptionists
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* SECTION 6: INDUSTRIES WE SERVE */}
        <section className="w-full bg-white py-20 px-4 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-14 reveal">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#34414A] leading-tight mb-3">
                Appointment Scheduling Answering Service by Industry —
                <br className="hidden md:block" />
                <span className="text-[#8CA365]">
                  Trained for Your Booking Process
                </span>
              </h2>
              <p className="text-gray-400 text-base max-w-xl mx-auto">
                Every industry books differently. Our receptionists are trained to match your exact process — not a generic script.
              </p>
            </div>
            {/* Industry Icon Grid: 4 cols desktop, 4 tablet, 2 mobile */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 reveal reveal-delay-1">
              {/* Lawyers */}
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
                  Legal appointment scheduling →
                </span>
              </Link>
              {/* Medical */}
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
                  Medical appointment scheduling →
                </span>
              </Link>
              {/* HVAC */}
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
                  Heating & cooling services
                </p>
                <span
                  className="mt-2 text-[10px] font-bold text-[#8CA365] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  HVAC appointment booking →
                </span>
              </a>
              {/* Plumbers */}
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
                      d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
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
                  Plumber appointment booking →
                </span>
              </a>
              {/* Salons */}
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
                      d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z"
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
                  Salon appointment booking →
                </span>
              </a>
              {/* Real Estate */}
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
                  Real estate appointment scheduling →
                </span>
              </a>
              {/* Pharmacies */}
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
                  Rx & dispensary services
                </p>
                <span
                  className="mt-2 text-[10px] font-bold text-[#8CA365] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Pharmacy appointment booking →
                </span>
              </a>
              {/* Doctors */}
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
                  Doctor appointment scheduling →
                </span>
              </a>
              {/* Insurance */}
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
                  Insurance appointment booking →
                </span>
              </a>
              {/* Roofing */}
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
                  Roofing appointment scheduling →
                </span>
              </a>
              {/* Construction */}
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
                  Builders & project managers
                </p>
                <span
                  className="mt-2 text-[10px] font-bold text-[#8CA365] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Construction appointment booking →
                </span>
              </a>
              {/* Cleaners */}
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
                  Cleaning appointment scheduling →
                </span>
              </a>
              {/* Contractors */}
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
                  Contractor appointment booking →
                </span>
              </a>
              {/* Start Ups */}
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
                  Startup appointment scheduling →
                </span>
              </a>
              {/* Property Mgmt */}
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
                  Property management scheduling →
                </span>
              </a>
              {/* Marketing Firms */}
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
                  Marketing firm appointment booking →
                </span>
              </a>
            </div>
            {/* Bottom note */}
            <p className="text-center text-xs text-gray-400 mt-10 reveal reveal-delay-2">
              Don't see your industry?
              <a className="text-[#8CA365] font-semibold hover:underline" href="#hero-form">
                Contact us
              </a>
              — we serve 50+ verticals with custom scripting.
            </p>
          </div>
        </section>
        {/* SECTION 7: HOW IT WORKS — 4-STEP SETUP */}
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
          {/* Dot overlay */}
          <div
            className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none"
          >
          </div>
          {/* Green top glow */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[200px] bg-[#8CA365]/10 rounded-full blur-3xl pointer-events-none"
          >
          </div>
          <div className="max-w-5xl mx-auto relative z-10">
            {/* Header */}
            <div className="text-center mb-16 reveal">
              <span
                className="inline-block bg-[#8CA365]/20 text-[#8CA365] text-xs font-bold px-4 py-2 rounded-full border border-[#8CA365]/30 uppercase tracking-widest mb-5"
              >
                Setup in Under 5 Minutes
              </span>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4 max-w-3xl mx-auto"
              >
                How Our Appointment Scheduling Answering Service Works —
                <span className="text-[#8CA365]">
                  Live and Booking in Under 5 Minutes
                </span>
              </h2>
              <p className="text-blue-100/55 text-lg max-w-xl mx-auto leading-relaxed">
                No complex software. No long contracts. Four steps and your calendar starts filling itself.
              </p>
            </div>
            {/* 4-Step vertical timeline */}
            <div className="flex flex-col gap-6 reveal reveal-delay-1">
              {/* Step 1 */}
              <div
                className="flex items-start gap-6 bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/8 hover:border-[#8CA365]/30 transition-all duration-300 group"
              >
                <div className="flex flex-col items-center shrink-0">
                  <div
                    className="w-12 h-12 rounded-full bg-[#8CA365] flex items-center justify-center text-white font-black text-lg shadow-lg shadow-[#8CA365]/30 group-hover:scale-110 transition-transform"
                  >
                    1
                  </div>
                  <div className="w-0.5 h-full min-h-[40px] bg-[#8CA365]/20 mt-3">
                  </div>
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2 leading-snug">
                    Step 1: Forward your business number — takes 60 seconds
                  </h3>
                  <p className="text-blue-100/60 text-sm leading-relaxed">
                    Simply forward your existing business phone number to us — no new hardware, no technical setup. Your callers immediately reach a live receptionist instead of voicemail. Takes under 60 seconds to activate.
                  </p>
                  <div
                    className="mt-4 inline-flex items-center gap-2 bg-[#8CA365]/15 border border-[#8CA365]/25 rounded-lg px-4 py-2"
                  >
                    <svg
                      className="w-4 h-4 text-[#8CA365] shrink-0"
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
                    <span className="text-[#8CA365] text-xs font-bold uppercase tracking-widest">
                      No new hardware required
                    </span>
                  </div>
                </div>
              </div>
              {/* Step 2 */}
              <div
                className="flex items-start gap-6 bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/8 hover:border-[#8CA365]/30 transition-all duration-300 group"
              >
                <div className="flex flex-col items-center shrink-0">
                  <div
                    className="w-12 h-12 rounded-full bg-[#8CA365] flex items-center justify-center text-white font-black text-lg shadow-lg shadow-[#8CA365]/30 group-hover:scale-110 transition-transform"
                  >
                    2
                  </div>
                  <div className="w-0.5 h-full min-h-[40px] bg-[#8CA365]/20 mt-3">
                  </div>
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2 leading-snug">
                    Step 2: We connect to your calendar and configure your booking script
                  </h3>
                  <p className="text-blue-100/60 text-sm leading-relaxed">
                    We integrate directly with your existing scheduling software — Calendly, Acuity, Google Calendar, Zoho, HubSpot, and 1,000+ more. Our team builds your bespoke call script around your service types, availability rules, intake questions, and brand voice.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="bg-white/10 text-white/70 text-[10px] font-semibold px-3 py-1 rounded-full">
                      Calendly
                    </span>
                    <span className="bg-white/10 text-white/70 text-[10px] font-semibold px-3 py-1 rounded-full">
                      Acuity
                    </span>
                    <span className="bg-white/10 text-white/70 text-[10px] font-semibold px-3 py-1 rounded-full">
                      Google Calendar
                    </span>
                    <span className="bg-white/10 text-white/70 text-[10px] font-semibold px-3 py-1 rounded-full">
                      Zoho
                    </span>
                    <span className="bg-white/10 text-white/70 text-[10px] font-semibold px-3 py-1 rounded-full">
                      HubSpot
                    </span>
                    <span className="bg-white/10 text-white/70 text-[10px] font-semibold px-3 py-1 rounded-full">
                      + 1,000 more
                    </span>
                  </div>
                </div>
              </div>
              {/* Step 3 */}
              <div
                className="flex items-start gap-6 bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/8 hover:border-[#8CA365]/30 transition-all duration-300 group"
              >
                <div className="flex flex-col items-center shrink-0">
                  <div
                    className="w-12 h-12 rounded-full bg-[#8CA365] flex items-center justify-center text-white font-black text-lg shadow-lg shadow-[#8CA365]/30 group-hover:scale-110 transition-transform"
                  >
                    3
                  </div>
                  <div className="w-0.5 h-full min-h-[40px] bg-[#8CA365]/20 mt-3">
                  </div>
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2 leading-snug">
                    Step 3: Our receptionists answer calls and book directly into your calendar in real time
                  </h3>
                  <p className="text-blue-100/60 text-sm leading-relaxed">
                    Every incoming call is answered by a live, trained receptionist — 24 hours a day, 7 days a week, including holidays. They check your live availability, collect caller details, handle rescheduling or cancellations, and confirm the booking directly inside your calendar with zero manual work from your team.
                  </p>
                  <div
                    className="mt-4 inline-flex items-center gap-2 bg-[#8CA365]/15 border border-[#8CA365]/25 rounded-lg px-4 py-2"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#8CA365] animate-pulse">
                    </span>
                    <span className="text-[#8CA365] text-xs font-bold uppercase tracking-widest">
                      Live 24/7 — no voicemail, ever
                    </span>
                  </div>
                </div>
              </div>
              {/* Step 4 */}
              <div
                className="flex items-start gap-6 bg-gradient-to-br from-[#8CA365]/15 to-[#8CA365]/5 border border-[#8CA365]/30 rounded-2xl p-7 group hover:border-[#8CA365]/60 transition-all duration-300"
              >
                <div className="flex flex-col items-center shrink-0">
                  <div
                    className="w-12 h-12 rounded-full bg-[#8CA365] flex items-center justify-center text-white font-black text-lg shadow-lg shadow-[#8CA365]/30 group-hover:scale-110 transition-transform"
                  >
                    4
                  </div>
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2 leading-snug">
                    Step 4: You and your caller receive instant appointment confirmation
                  </h3>
                  <p className="text-blue-100/60 text-sm leading-relaxed">
                    The moment a booking is confirmed, an automated confirmation is sent to your client via SMS or email. A 24-hour reminder follows automatically. You receive a real-time notification so you're always in the loop — without lifting a finger.
                  </p>
                  <div className="mt-4 flex gap-3">
                    <div className="flex items-center gap-1.5 bg-white/10 rounded-lg px-3 py-1.5">
                      <svg
                        className="w-3.5 h-3.5 text-[#8CA365]"
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
                      <span className="text-white/70 text-[10px] font-semibold">
                        SMS confirmation
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-white/10 rounded-lg px-3 py-1.5">
                      <svg
                        className="w-3.5 h-3.5 text-[#8CA365]"
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
                      <span className="text-white/70 text-[10px] font-semibold">
                        Email reminder
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-white/10 rounded-lg px-3 py-1.5">
                      <svg
                        className="w-3.5 h-3.5 text-[#8CA365]"
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
                      <span className="text-white/70 text-[10px] font-semibold">
                        ↓ 80% no-shows
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Bottom CTA */}
            <div className="mt-12 text-center reveal reveal-delay-2">
              <a
                className="inline-flex items-center gap-3 bg-[#8CA365] hover:bg-[#7a9058] text-white font-bold px-8 py-4 rounded-xl transition-colors shadow-lg shadow-[#8CA365]/30 text-base"
                href="#hero-form"
              >
                <svg
                  className="w-5 h-5"
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
                Start Booking More — Set Up in 5 Minutes
              </a>
              <p className="text-blue-100/40 text-xs mt-3">
                No credit card required · Cancel anytime · Live in 24 hours
              </p>
            </div>
          </div>
          {/* HowTo Schema */}
          {/* SECTION 8: INTEGRATIONS — CALENDAR & CRM ECOSYSTEM */}
          <section
            className="w-full bg-gray-50 py-24 px-4 relative overflow-hidden border-y border-gray-100"
          >
            {/* Subtle dot pattern */}
            <div
              className="absolute inset-0 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"
            >
            </div>
            <div className="max-w-7xl mx-auto relative z-10">
              {/* Section Header */}
              <div className="text-center mb-14 reveal">
                <span
                  className="inline-block bg-[#8CA365]/10 text-[#8CA365] text-xs font-bold px-4 py-2 rounded-full border border-[#8CA365]/20 uppercase tracking-widest mb-5"
                >
                  Works With Your Existing Stack
                </span>
                <h2
                  className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#34414A] leading-tight mb-4 max-w-4xl mx-auto"
                >
                  Appointment Scheduling That Works With Your Existing Tools —
                  <span className="text-[#8CA365]">
                    1,000+ Integrations
                  </span>
                </h2>
                <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                  Our receptionists work live inside your calendar and CRM. No migration. No new software. Just instant, accurate bookings inside the tools you already use.
                </p>
              </div>
              {/* Infographic Category Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 reveal reveal-delay-1">
                {/* Category 1: Calendar */}
                <div
                  className="bg-white rounded-2xl p-7 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                      <svg
                        className="w-5 h-5 text-blue-500"
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
                    <div>
                      <h3 className="text-sm font-bold text-[#34414A]">
                        Calendar Integrations
                      </h3>
                      <p className="text-[11px] text-gray-400">
                        Sync live availability
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <div
                      className="flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-xl px-3 py-2"
                    >
                      <div
                        className="w-7 h-7 rounded-lg bg-white flex items-center justify-center shadow-sm border border-blue-100"
                      >
                        <span className="text-[9px] font-black text-blue-600">
                          GC
                        </span>
                      </div>
                      <span className="text-xs font-semibold text-gray-700">
                        Google Calendar
                      </span>
                    </div>
                    <div
                      className="flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-xl px-3 py-2"
                    >
                      <div
                        className="w-7 h-7 rounded-lg bg-white flex items-center justify-center shadow-sm border border-blue-100"
                      >
                        <span className="text-[9px] font-black text-blue-700">
                          OL
                        </span>
                      </div>
                      <span className="text-xs font-semibold text-gray-700">
                        Outlook
                      </span>
                    </div>
                    <div
                      className="flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-xl px-3 py-2"
                    >
                      <div
                        className="w-7 h-7 rounded-lg bg-white flex items-center justify-center shadow-sm border border-blue-100"
                      >
                        <span className="text-[9px] font-black text-gray-600">
                          🍎
                        </span>
                      </div>
                      <span className="text-xs font-semibold text-gray-700">
                        Apple Calendar
                      </span>
                    </div>
                    <div
                      className="flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-xl px-3 py-2"
                    >
                      <div
                        className="w-7 h-7 rounded-lg bg-white flex items-center justify-center shadow-sm border border-blue-100"
                      >
                        <span className="text-[9px] font-black text-blue-500">
                          iC
                        </span>
                      </div>
                      <span className="text-xs font-semibold text-gray-700">
                        iCal
                      </span>
                    </div>
                  </div>
                </div>
                {/* Category 2: Scheduling Software */}
                <div
                  className="bg-white rounded-2xl p-7 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="w-10 h-10 rounded-xl bg-[#8CA365]/10 flex items-center justify-center shrink-0"
                    >
                      <svg
                        className="w-5 h-5 text-[#8CA365]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#34414A]">
                        Scheduling Software
                      </h3>
                      <p className="text-[11px] text-gray-400">
                        Calendly, Acuity & more
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <div
                      className="flex items-center gap-2 bg-green-50 border border-green-100 rounded-xl px-3 py-2"
                    >
                      <div
                        className="w-7 h-7 rounded-lg bg-white flex items-center justify-center shadow-sm border border-green-100"
                      >
                        <span className="text-[9px] font-black text-green-600">
                          CA
                        </span>
                      </div>
                      <span className="text-xs font-semibold text-gray-700">
                        Calendly
                      </span>
                    </div>
                    <div
                      className="flex items-center gap-2 bg-green-50 border border-green-100 rounded-xl px-3 py-2"
                    >
                      <div
                        className="w-7 h-7 rounded-lg bg-white flex items-center justify-center shadow-sm border border-green-100"
                      >
                        <span className="text-[9px] font-black text-green-700">
                          AC
                        </span>
                      </div>
                      <span className="text-xs font-semibold text-gray-700">
                        Acuity
                      </span>
                    </div>
                    <div
                      className="flex items-center gap-2 bg-green-50 border border-green-100 rounded-xl px-3 py-2"
                    >
                      <div
                        className="w-7 h-7 rounded-lg bg-white flex items-center justify-center shadow-sm border border-green-100"
                      >
                        <span className="text-[9px] font-black text-teal-600">
                          SM
                        </span>
                      </div>
                      <span className="text-xs font-semibold text-gray-700">
                        Setmore
                      </span>
                    </div>
                    <div
                      className="flex items-center gap-2 bg-green-50 border border-green-100 rounded-xl px-3 py-2"
                    >
                      <div
                        className="w-7 h-7 rounded-lg bg-white flex items-center justify-center shadow-sm border border-green-100"
                      >
                        <span className="text-[9px] font-black text-purple-600">
                          VG
                        </span>
                      </div>
                      <span className="text-xs font-semibold text-gray-700">
                        Vagaro
                      </span>
                    </div>
                    <div
                      className="flex items-center gap-2 bg-green-50 border border-green-100 rounded-xl px-3 py-2"
                    >
                      <div
                        className="w-7 h-7 rounded-lg bg-white flex items-center justify-center shadow-sm border border-green-100"
                      >
                        <span className="text-[9px] font-black text-pink-600">
                          BS
                        </span>
                      </div>
                      <span className="text-xs font-semibold text-gray-700">
                        Booksy
                      </span>
                    </div>
                  </div>
                </div>
                {/* Category 3: CRM */}
                <div
                  className="bg-white rounded-2xl p-7 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center shrink-0">
                      <svg
                        className="w-5 h-5 text-orange-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#34414A]">
                        CRM Platforms
                      </h3>
                      <p className="text-[11px] text-gray-400">
                        Leads auto-logged
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <div
                      className="flex items-center gap-2 bg-orange-50 border border-orange-100 rounded-xl px-3 py-2"
                    >
                      <div
                        className="w-7 h-7 rounded-lg bg-white flex items-center justify-center shadow-sm border border-orange-100"
                      >
                        <span className="text-[9px] font-black text-orange-600">
                          HS
                        </span>
                      </div>
                      <span className="text-xs font-semibold text-gray-700">
                        HubSpot
                      </span>
                    </div>
                    <div
                      className="flex items-center gap-2 bg-orange-50 border border-orange-100 rounded-xl px-3 py-2"
                    >
                      <div
                        className="w-7 h-7 rounded-lg bg-white flex items-center justify-center shadow-sm border border-orange-100"
                      >
                        <span className="text-[9px] font-black text-blue-700">
                          SF
                        </span>
                      </div>
                      <span className="text-xs font-semibold text-gray-700">
                        Salesforce
                      </span>
                    </div>
                    <div
                      className="flex items-center gap-2 bg-orange-50 border border-orange-100 rounded-xl px-3 py-2"
                    >
                      <div
                        className="w-7 h-7 rounded-lg bg-white flex items-center justify-center shadow-sm border border-orange-100"
                      >
                        <span className="text-[9px] font-black text-red-600">
                          ZH
                        </span>
                      </div>
                      <span className="text-xs font-semibold text-gray-700">
                        Zoho CRM
                      </span>
                    </div>
                    <div
                      className="flex items-center gap-2 bg-orange-50 border border-orange-100 rounded-xl px-3 py-2"
                    >
                      <div
                        className="w-7 h-7 rounded-lg bg-white flex items-center justify-center shadow-sm border border-orange-100"
                      >
                        <span className="text-[9px] font-black text-teal-700">
                          PD
                        </span>
                      </div>
                      <span className="text-xs font-semibold text-gray-700">
                        Pipedrive
                      </span>
                    </div>
                  </div>
                </div>
                {/* Category 4: Practice Management */}
                <div
                  className="bg-white rounded-2xl p-7 border border-gray-200 shadow-sm hover:shadow-md transition-shadow md:col-span-2 lg:col-span-1"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center shrink-0">
                      <svg
                        className="w-5 h-5 text-red-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#34414A]">
                        Practice Management
                      </h3>
                      <p className="text-[11px] text-gray-400">
                        Medical scheduling software
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <div className="flex items-center gap-2 bg-red-50 border border-red-100 rounded-xl px-3 py-2">
                      <div
                        className="w-7 h-7 rounded-lg bg-white flex items-center justify-center shadow-sm border border-red-100"
                      >
                        <span className="text-[9px] font-black text-teal-600">
                          JA
                        </span>
                      </div>
                      <span className="text-xs font-semibold text-gray-700">
                        Jane App
                      </span>
                    </div>
                    <div className="flex items-center gap-2 bg-red-50 border border-red-100 rounded-xl px-3 py-2">
                      <div
                        className="w-7 h-7 rounded-lg bg-white flex items-center justify-center shadow-sm border border-red-100"
                      >
                        <span className="text-[9px] font-black text-blue-600">
                          SP
                        </span>
                      </div>
                      <span className="text-xs font-semibold text-gray-700">
                        SimplePractice
                      </span>
                    </div>
                    <div className="flex items-center gap-2 bg-red-50 border border-red-100 rounded-xl px-3 py-2">
                      <div
                        className="w-7 h-7 rounded-lg bg-white flex items-center justify-center shadow-sm border border-red-100"
                      >
                        <span className="text-[9px] font-black text-purple-600">
                          AH
                        </span>
                      </div>
                      <span className="text-xs font-semibold text-gray-700">
                        Athenahealth
                      </span>
                    </div>
                    <span
                      className="inline-flex items-center gap-1 bg-red-100 text-red-600 text-[10px] font-bold px-2.5 py-1.5 rounded-lg"
                    >
                      <svg
                        className="w-3 h-3"
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
                      HIPAA Compliant
                    </span>
                  </div>
                </div>
                {/* Category 5: Automation */}
                <div
                  className="bg-white rounded-2xl p-7 border border-gray-200 shadow-sm hover:shadow-md transition-shadow md:col-span-2"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center shrink-0">
                      <svg
                        className="w-5 h-5 text-purple-500"
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
                    <div>
                      <h3 className="text-sm font-bold text-[#34414A]">
                        Automation — Zapier, Make (Integromat), n8n — Connect to Anything
                      </h3>
                      <p className="text-[11px] text-gray-400">
                        Trigger workflows, push data, automate follow-ups
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 items-center">
                    <div
                      className="flex items-center gap-2 bg-purple-50 border border-purple-100 rounded-xl px-3 py-2"
                    >
                      <div
                        className="w-7 h-7 rounded-lg bg-white flex items-center justify-center shadow-sm border border-purple-100"
                      >
                        <span className="text-[9px] font-black text-orange-500">
                          ZP
                        </span>
                      </div>
                      <span className="text-xs font-semibold text-gray-700">
                        Zapier
                      </span>
                    </div>
                    <div
                      className="flex items-center gap-2 bg-purple-50 border border-purple-100 rounded-xl px-3 py-2"
                    >
                      <div
                        className="w-7 h-7 rounded-lg bg-white flex items-center justify-center shadow-sm border border-purple-100"
                      >
                        <span className="text-[9px] font-black text-purple-600">
                          MK
                        </span>
                      </div>
                      <span className="text-xs font-semibold text-gray-700">
                        Make
                      </span>
                    </div>
                    <div
                      className="flex items-center gap-2 bg-purple-50 border border-purple-100 rounded-xl px-3 py-2"
                    >
                      <div
                        className="w-7 h-7 rounded-lg bg-white flex items-center justify-center shadow-sm border border-purple-100"
                      >
                        <span className="text-[9px] font-black text-red-600">
                          n8n
                        </span>
                      </div>
                      <span className="text-xs font-semibold text-gray-700">
                        n8n
                      </span>
                    </div>
                    <div
                      className="ml-auto flex items-center gap-2 bg-[#8CA365]/10 border border-[#8CA365]/20 rounded-xl px-4 py-2"
                    >
                      <svg
                        className="w-4 h-4 text-[#8CA365]"
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
                      <span className="text-xs font-bold text-[#8CA365]">
                        Connect to 5,000+ apps via automation
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Bottom infographic bar: total integrations count */}
              <div
                className="mt-10 bg-white border border-gray-200 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm reveal reveal-delay-2"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#8CA365]/10 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-[#8CA365]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xl font-black text-[#34414A]">
                      1,000+ tools supported
                    </p>
                    <p className="text-sm text-gray-400">
                      If your team uses it, we can work inside it
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 justify-center">
                  <span
                    className="bg-gray-50 border border-gray-200 rounded-full px-4 py-1.5 text-xs font-semibold text-gray-600"
                  >
                    📅 Calendar
                  </span>
                  <span
                    className="bg-gray-50 border border-gray-200 rounded-full px-4 py-1.5 text-xs font-semibold text-gray-600"
                  >
                    📋 Scheduling
                  </span>
                  <span
                    className="bg-gray-50 border border-gray-200 rounded-full px-4 py-1.5 text-xs font-semibold text-gray-600"
                  >
                    👥 CRM
                  </span>
                  <span
                    className="bg-gray-50 border border-gray-200 rounded-full px-4 py-1.5 text-xs font-semibold text-gray-600"
                  >
                    🏥 Medical PMS
                  </span>
                  <span
                    className="bg-gray-50 border border-gray-200 rounded-full px-4 py-1.5 text-xs font-semibold text-gray-600"
                  >
                    ⚡ Automation
                  </span>
                </div>
                <a
                  className="shrink-0 bg-[#8CA365] hover:bg-[#7a9058] text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors shadow-sm whitespace-nowrap"
                  href="#hero-form"
                >
                  Check Your Integration →
                </a>
              </div>
            </div>
            {/* SECTION 9: APPOINTMENT REMINDER SYSTEM */}
            <section
              className="w-full bg-[#F8F9FA] py-24 px-4 relative overflow-hidden border-y border-gray-100"
            >
              <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header — centred */}
                <div className="text-center mb-16 reveal">
                  <span
                    className="inline-flex items-center gap-2 bg-amber-50 text-amber-600 text-xs font-bold px-4 py-2 rounded-full border border-amber-200 uppercase tracking-widest mb-5"
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                    Automated Reminder System
                  </span>
                  <h2
                    className="text-3xl md:text-4xl font-extrabold text-[#34414A] leading-tight mb-4 max-w-3xl mx-auto"
                  >
                    Reduce No-Shows by Up to
                    <span className="text-[#8CA365]">
                      80%
                    </span>
                    — Our Automated Appointment Reminder System
                  </h2>
                  <p className="text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
                    Every confirmed booking triggers a smart reminder sequence. Clients confirm, show up, and fill your calendar — automatically.
                  </p>
                </div>
                {/* Main Grid: 3 feature cards top + mock notification below */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10 reveal reveal-delay-1">
                  {/* Feature 1 */}
                  <div
                    className="bg-white rounded-2xl p-7 border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 group"
                  >
                    <div
                      className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-5 group-hover:bg-blue-100 transition-colors"
                    >
                      <svg
                        className="w-6 h-6 text-blue-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                    <h3 className="text-base font-bold text-[#34414A] mb-2 leading-snug">
                      Text & email reminders sent automatically before every appointment
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-3">
                      Instant confirmation on booking, then automated SMS + email reminders fire on your chosen schedule — zero manual effort from your team.
                    </p>
                    <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">
                      appointment reminder answering service
                    </span>
                  </div>
                  {/* Feature 2 */}
                  <div
                    className="bg-white rounded-2xl p-7 border border-gray-200 shadow-sm hover:shadow-md hover:border-amber-200 transition-all duration-300 group"
                  >
                    <div
                      className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center mb-5 group-hover:bg-amber-100 transition-colors"
                    >
                      <svg
                        className="w-6 h-6 text-amber-500"
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
                    <h3 className="text-base font-bold text-[#34414A] mb-2 leading-snug">
                      Custom reminder timing — 24 hours, 2 hours, or your preferred schedule
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-3">
                      Medical practices, law firms, salons, and contractors all have different timing needs. We configure your reminder cadence to match exactly.
                    </p>
                    <span className="text-[10px] font-bold text-amber-500 uppercase tracking-widest">
                      automated appointment reminder service
                    </span>
                  </div>
                  {/* Feature 3 */}
                  <div
                    className="bg-white rounded-2xl p-7 border border-gray-200 shadow-sm hover:shadow-md hover:border-[#8CA365]/40 transition-all duration-300 group"
                  >
                    <div
                      className="w-12 h-12 rounded-xl bg-[#8CA365]/10 flex items-center justify-center mb-5 group-hover:bg-[#8CA365]/20 transition-colors"
                    >
                      <svg
                        className="w-6 h-6 text-[#8CA365]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                    <h3 className="text-base font-bold text-[#34414A] mb-2 leading-snug">
                      Two-way confirmation — callers can confirm, reschedule, or cancel via text reply
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-3">
                      Clients reply "C" to confirm, "R" to reschedule, "X" to cancel. Cancellations reopen the slot instantly for the next caller.
                    </p>
                    <span className="text-[10px] font-bold text-[#8CA365] uppercase tracking-widest">
                      two-way appointment confirmation
                    </span>
                  </div>
                </div>
                {/* Bottom: Notification mockup strip */}
                <div
                  className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 reveal reveal-delay-2"
                >
                  <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
                    {/* Left label */}
                    <div className="shrink-0 lg:w-48">
                      <div
                        className="inline-flex items-center gap-2 bg-[#8CA365] text-white text-xs font-bold px-3 py-1.5 rounded-full mb-3"
                      >
                        <span className="w-2 h-2 rounded-full bg-white animate-pulse">
                        </span>
                        Live sequence
                      </div>
                      <p className="text-xl font-black text-[#34414A]">
                        ↓80%
                      </p>
                      <p className="text-sm text-gray-400">
                        Average no-show reduction
                      </p>
                    </div>
                    {/* Notification timeline */}
                    <div className="flex-1 flex flex-col sm:flex-row gap-3 w-full">
                      {/* Step 1: Booking confirmed */}
                      <div className="flex-1 bg-blue-50 border border-blue-100 rounded-xl p-4 relative">
                        <div
                          className="absolute -top-2 left-4 bg-blue-500 text-white text-[9px] font-black px-2 py-0.5 rounded-full uppercase"
                        >
                          Step 1 · Instant
                        </div>
                        <div className="flex items-center gap-2 mb-2 mt-1">
                          <svg
                            className="w-4 h-4 text-blue-500 shrink-0"
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
                          <span className="text-xs font-bold text-blue-700">
                            Booking Confirmed
                          </span>
                        </div>
                        <p className="text-[11px] text-blue-600/80 leading-relaxed">
                          "Hi Sarah! Appt with Dr. Patel confirmed — Thu 2:30 PM. Reply C/R/X."
                        </p>
                      </div>
                      {/* Arrow */}
                      <div className="hidden sm:flex items-center text-gray-300">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M9 5l7 7-7 7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          />
                        </svg>
                      </div>
                      {/* Step 2: 24h reminder */}
                      <div className="flex-1 bg-amber-50 border border-amber-100 rounded-xl p-4 relative">
                        <div
                          className="absolute -top-2 left-4 bg-amber-500 text-white text-[9px] font-black px-2 py-0.5 rounded-full uppercase"
                        >
                          Step 2 · 24hrs before
                        </div>
                        <div className="flex items-center gap-2 mb-2 mt-1">
                          <svg
                            className="w-4 h-4 text-amber-500 shrink-0"
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
                          <span className="text-xs font-bold text-amber-700">
                            ⏰ Reminder Sent
                          </span>
                        </div>
                        <p className="text-[11px] text-amber-600/80 leading-relaxed">
                          "Reminder: Appt tomorrow 2:30 PM. Reply C to confirm."
                        </p>
                      </div>
                      {/* Arrow */}
                      <div className="hidden sm:flex items-center text-gray-300">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M9 5l7 7-7 7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          />
                        </svg>
                      </div>
                      {/* Step 3: Client replies */}
                      <div className="flex-1 bg-gray-50 border border-gray-200 rounded-xl p-4 relative">
                        <div
                          className="absolute -top-2 left-4 bg-gray-600 text-white text-[9px] font-black px-2 py-0.5 rounded-full uppercase"
                        >
                          Step 3 · Client replies
                        </div>
                        <div className="flex items-center gap-2 mb-2 mt-1">
                          <svg
                            className="w-4 h-4 text-gray-500 shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                            />
                          </svg>
                          <span className="text-xs font-bold text-gray-600">
                            Sarah replies "C"
                          </span>
                        </div>
                        <p className="text-[11px] text-gray-500 leading-relaxed">
                          "C" — confirmed via two-way SMS reply
                        </p>
                      </div>
                      {/* Arrow */}
                      <div className="hidden sm:flex items-center text-gray-300">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M9 5l7 7-7 7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          />
                        </svg>
                      </div>
                      {/* Step 4: Confirmed */}
                      <div className="flex-1 bg-[#8CA365]/10 border border-[#8CA365]/30 rounded-xl p-4 relative">
                        <div
                          className="absolute -top-2 left-4 bg-[#8CA365] text-white text-[9px] font-black px-2 py-0.5 rounded-full uppercase"
                        >
                          Step 4 · Done
                        </div>
                        <div className="flex items-center gap-2 mb-2 mt-1">
                          <svg
                            className="w-4 h-4 text-[#8CA365] shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                            />
                          </svg>
                          <span className="text-xs font-bold text-[#8CA365]">
                            ✓ Confirmed!
                          </span>
                        </div>
                        <p className="text-[11px] text-[#8CA365]/80 leading-relaxed">
                          No-show prevented. Slot secured. Zero manual work.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* MEDICAL SPECIALTIES SERVED <!-- MEDICAL SPECIALTIES SERVED — VERTICAL SEO SILO */}
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
              {/* Ambient glow accents */}
              <div
                className="absolute top-0 left-1/4 w-96 h-96 bg-[#8CA365]/10 rounded-full blur-3xl pointer-events-none"
              >
              </div>
              <div
                className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#8CA365]/8 rounded-full blur-3xl pointer-events-none"
              >
              </div>
              <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16 reveal">
                  <span
                    className="inline-flex items-center gap-2 bg-[#8CA365]/20 text-[#8CA365] text-xs font-bold px-4 py-2 rounded-full border border-[#8CA365]/30 uppercase tracking-widest mb-5"
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                    All Specialties Covered
                  </span>
                  <h2
                    className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight max-w-4xl mx-auto"
                  >
                    Appointment Scheduling Service for Every Industry — Live Receptionists Trained for Your Business
                  </h2>
                  <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
                    Our receptionists aren't generalists. They're trained in the booking workflows, service types, and client expectations of your specific industry — so every caller books, not bounces.
                  </p>
                </div>
                {/* Specialties Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 reveal reveal-delay-1">
                  {/* Specialty 1: Primary Care */}
                  <Link
                    className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7 hover:bg-white/10 hover:border-[#8CA365]/50 hover:-translate-y-1 transition-all duration-300 flex gap-5 items-start"
                    href="/medical-answering-service"
                  >
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#8CA365]/20 flex items-center justify-center text-[#8CA365] group-hover:bg-[#8CA365]/30 transition-colors duration-300"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3
                        className="text-base font-bold text-white mb-2 leading-snug group-hover:text-[#8CA365] transition-colors duration-200"
                      >
                        Medical answering service for primary care physicians & family medicine
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        Same-day appointment booking, prescription refill message routing, and 24/7 after-hours coverage for high-volume family practices.
                      </p>
                      <span
                        className="inline-flex items-center gap-1 text-[#8CA365] text-xs font-semibold mt-3 group-hover:gap-2 transition-all duration-200"
                      >
                        Learn more
                        <svg
                          className="w-3.5 h-3.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M9 5l7 7-7 7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          />
                        </svg>
                      </span>
                    </div>
                  </Link>
                  {/* Specialty 2: Mental Health */}
                  <Link
                    className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7 hover:bg-white/10 hover:border-[#8CA365]/50 hover:-translate-y-1 transition-all duration-300 flex gap-5 items-start"
                    href="/medical-answering-service"
                  >
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#8CA365]/20 flex items-center justify-center text-[#8CA365] group-hover:bg-[#8CA365]/30 transition-colors duration-300"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3
                        className="text-base font-bold text-white mb-2 leading-snug group-hover:text-[#8CA365] transition-colors duration-200"
                      >
                        Medical answering service for mental health & behavioral health practices
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        Empathetic, trauma-informed call handling with crisis escalation protocols. Protecting patient privacy for therapists, psychiatrists, and counselors.
                      </p>
                      <span
                        className="inline-flex items-center gap-1 text-[#8CA365] text-xs font-semibold mt-3 group-hover:gap-2 transition-all duration-200"
                      >
                        Learn more
                        <svg
                          className="w-3.5 h-3.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M9 5l7 7-7 7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          />
                        </svg>
                      </span>
                    </div>
                  </Link>
                  {/* Specialty 3: Dental */}
                  <Link
                    className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7 hover:bg-white/10 hover:border-[#8CA365]/50 hover:-translate-y-1 transition-all duration-300 flex gap-5 items-start"
                    href="/medical-answering-service"
                  >
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#8CA365]/20 flex items-center justify-center text-[#8CA365] group-hover:bg-[#8CA365]/30 transition-colors duration-300"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3
                        className="text-base font-bold text-white mb-2 leading-snug group-hover:text-[#8CA365] transition-colors duration-200"
                      >
                        Medical answering service for dentists & dental practices
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        Dental emergency triage, appointment scheduling, and patient recall management. Capture every new patient inquiry — even after the office closes.
                      </p>
                      <span
                        className="inline-flex items-center gap-1 text-[#8CA365] text-xs font-semibold mt-3 group-hover:gap-2 transition-all duration-200"
                      >
                        Learn more
                        <svg
                          className="w-3.5 h-3.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M9 5l7 7-7 7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          />
                        </svg>
                      </span>
                    </div>
                  </Link>
                  {/* Specialty 4: Urgent Care */}
                  <Link
                    className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7 hover:bg-white/10 hover:border-red-400/40 hover:-translate-y-1 transition-all duration-300 flex gap-5 items-start relative"
                    href="/medical-answering-service"
                  >
                    <div
                      className="absolute top-4 right-4 bg-red-500/20 text-red-400 text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider border border-red-400/20"
                    >
                      High Volume
                    </div>
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center text-red-400 group-hover:bg-red-500/30 transition-colors duration-300"
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
                    <div>
                      <h3
                        className="text-base font-bold text-white mb-2 leading-snug group-hover:text-[#8CA365] transition-colors duration-200"
                      >
                        Medical answering service for urgent care & emergency clinics
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        High-volume overflow answering, wait-time communication, and after-hours symptom triage routing — keeping your urgent care lines moving efficiently.
                      </p>
                      <span
                        className="inline-flex items-center gap-1 text-[#8CA365] text-xs font-semibold mt-3 group-hover:gap-2 transition-all duration-200"
                      >
                        Learn more
                        <svg
                          className="w-3.5 h-3.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M9 5l7 7-7 7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          />
                        </svg>
                      </span>
                    </div>
                  </Link>
                  {/* Specialty 5: OB-GYN / Cardiology / Specialists */}
                  <Link
                    className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7 hover:bg-white/10 hover:border-[#8CA365]/50 hover:-translate-y-1 transition-all duration-300 flex gap-5 items-start"
                    href="/medical-answering-service"
                  >
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#8CA365]/20 flex items-center justify-center text-[#8CA365] group-hover:bg-[#8CA365]/30 transition-colors duration-300"
                    >
                      <svg
                        className="w-6 h-6"
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
                    </div>
                    <div>
                      <h3
                        className="text-base font-bold text-white mb-2 leading-snug group-hover:text-[#8CA365] transition-colors duration-200"
                      >
                        Medical answering service for OB-GYN, cardiology & specialist practices
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        Specialists demand precise, clinically literate call handling. Our receptionists are trained in your specialty's terminology, urgency thresholds, and referral workflows.
                      </p>
                      <span
                        className="inline-flex items-center gap-1 text-[#8CA365] text-xs font-semibold mt-3 group-hover:gap-2 transition-all duration-200"
                      >
                        Learn more
                        <svg
                          className="w-3.5 h-3.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M9 5l7 7-7 7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          />
                        </svg>
                      </span>
                    </div>
                  </Link>
                  {/* Specialty 6: Hospitals & Health Groups */}
                  <Link
                    className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7 hover:bg-white/10 hover:border-[#8CA365]/50 hover:-translate-y-1 transition-all duration-300 flex gap-5 items-start"
                    href="/medical-answering-service"
                  >
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#8CA365]/20 flex items-center justify-center text-[#8CA365] group-hover:bg-[#8CA365]/30 transition-colors duration-300"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3
                        className="text-base font-bold text-white mb-2 leading-snug group-hover:text-[#8CA365] transition-colors duration-200"
                      >
                        Medical answering service for hospitals & multi-provider health groups
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        Enterprise-grade call routing across multiple departments and physician groups. Centralized overflow management for hospital networks and large health organizations.
                      </p>
                      <span
                        className="inline-flex items-center gap-1 text-[#8CA365] text-xs font-semibold mt-3 group-hover:gap-2 transition-all duration-200"
                      >
                        Learn more
                        <svg
                          className="w-3.5 h-3.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M9 5l7 7-7 7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          />
                        </svg>
                      </span>
                    </div>
                  </Link>
                  {/* Specialty 7: Chiro / PT / Allied Health — Full width on last row */}
                  <Link
                    className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7 hover:bg-white/10 hover:border-[#8CA365]/50 hover:-translate-y-1 transition-all duration-300 flex gap-5 items-start md:col-span-2 lg:col-span-1"
                    href="/medical-answering-service"
                  >
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#8CA365]/20 flex items-center justify-center text-[#8CA365] group-hover:bg-[#8CA365]/30 transition-colors duration-300"
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
                    <div>
                      <h3
                        className="text-base font-bold text-white mb-2 leading-snug group-hover:text-[#8CA365] transition-colors duration-200"
                      >
                        Medical answering service for chiropractors, physical therapists & allied health
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        New patient intake, appointment reminders, insurance verification calls, and cancellation management — purpose-built for high-schedule allied health clinics.
                      </p>
                      <span
                        className="inline-flex items-center gap-1 text-[#8CA365] text-xs font-semibold mt-3 group-hover:gap-2 transition-all duration-200"
                      >
                        Learn more
                        <svg
                          className="w-3.5 h-3.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M9 5l7 7-7 7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          />
                        </svg>
                      </span>
                    </div>
                  </Link>
                </div>
                {/* Bottom CTA strip */}
                <div className="mt-12 text-center reveal reveal-delay-2">
                  <p className="text-slate-400 text-sm mb-4">
                    Don't see your specialty? We cover
                    <span className="text-white font-semibold">
                      all licensed medical practices
                    </span>
                    across the United States.
                  </p>
                  <a
                    className="inline-flex items-center gap-2 bg-[#8CA365] hover:bg-[#7a8f57] text-white font-bold px-7 py-3.5 rounded-xl shadow-[0_8px_20px_rgba(140,163,101,0.3)] transition-all hover:-translate-y-0.5"
                    href="#hero-form"
                  >
                    Check if We Serve Your Specialty →
                  </a>
                </div>
              </div>
            </section>
            {/* MEASURABLE OUTCOMES — ROI & RESULTS SECTION */}
            <section className="bg-white py-24 md:py-32 px-4 relative overflow-hidden">
              {/* Subtle background texture */}
              <div className="absolute inset-0 pointer-events-none">
                <div
                  className="absolute inset-0"
                  style={{ backgroundImage: "radial-gradient(#e5e7eb 1.5px, transparent 1.5px)", backgroundSize: "28px 28px" }}
                >
                </div>
                <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent">
                </div>
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent">
                </div>
              </div>
              <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16 reveal">
                  <span
                    className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 text-xs font-bold px-4 py-2 rounded-full border border-amber-200 uppercase tracking-widest mb-5"
                  >
                    <svg
                      className="w-3.5 h-3.5"
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
                    Proven ROI
                  </span>
                  <h2
                    className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#34414A] mb-6 leading-tight max-w-4xl mx-auto"
                  >
                    Measurable Outcomes for Your Business — What Changes When You Switch
                  </h2>
                  <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                    These aren't projections. These are the measurable, real-world results businesses see after switching to a live appointment scheduling answering service.
                  </p>
                </div>
                {/* 3-Stat Outcome Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 reveal reveal-delay-1">
                  {/* Outcome 1: Zero Missed Calls */}
                  <div
                    className="bg-gradient-to-br from-[#8CA365]/5 to-white rounded-3xl p-8 md:p-10 border border-[#8CA365]/20 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col text-center relative overflow-hidden group"
                  >
                    {/* Animated ring accent */}
                    <div
                      className="absolute -top-12 -right-12 w-40 h-40 rounded-full border-[20px] border-[#8CA365]/5 group-hover:border-[#8CA365]/10 transition-colors duration-500 pointer-events-none"
                    >
                    </div>
                    <div className="relative z-10">
                      <div
                        className="text-6xl md:text-7xl font-black text-[#8CA365] mb-2 tracking-tighter leading-none"
                      >
                        0
                      </div>
                      <p className="text-sm font-bold text-[#8CA365] uppercase tracking-widest mb-6">
                        Missed Patient Calls
                      </p>
                      <h3 className="text-lg font-bold text-[#34414A] mb-4 leading-snug">
                        Zero missed calls — what that means for bookings and revenue per month
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Every missed call is a booking lost to a competitor. With 24/7 live scheduling coverage, you capture 100% of inbound booking calls — including evenings, weekends, and holidays when your in-house team is unavailable. More calls answered means more confirmed appointments, every single day.
                      </p>
                    </div>
                  </div>
                  {/* Outcome 2: $38K Savings */}
                  <div
                    className="bg-gradient-to-br from-amber-50/50 to-white rounded-3xl p-8 md:p-10 border border-amber-200/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col text-center relative overflow-hidden group"
                  >
                    {/* Animated ring accent */}
                    <div
                      className="absolute -top-12 -right-12 w-40 h-40 rounded-full border-[20px] border-amber-100/50 group-hover:border-amber-200/50 transition-colors duration-500 pointer-events-none"
                    >
                    </div>
                    <div className="relative z-10">
                      <div
                        className="text-5xl md:text-6xl font-black text-amber-600 mb-2 tracking-tighter leading-none"
                      >
                        $38K
                      </div>
                      <p className="text-sm font-bold text-amber-600 uppercase tracking-widest mb-6">
                        Average Annual Savings
                      </p>
                      <h3 className="text-lg font-bold text-[#34414A] mb-4 leading-snug">
                        Average cost saving: $38,000/year vs. a full-time in-house medical receptionist
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        A full-time in-house medical receptionist averages $42,000/year in salary alone — before benefits, PTO, training, and turnover costs. Our medical answering service delivers superior 24/7 coverage at a fraction of that overhead, saving the average practice over $38,000 annually.
                      </p>
                    </div>
                  </div>
                  {/* Outcome 3: 71% Patient Preference */}
                  <div
                    className="bg-gradient-to-br from-[#0B1F3A]/5 to-white rounded-3xl p-8 md:p-10 border border-[#34414A]/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col text-center relative overflow-hidden group"
                  >
                    {/* Animated ring accent */}
                    <div
                      className="absolute -top-12 -right-12 w-40 h-40 rounded-full border-[20px] border-[#34414A]/5 group-hover:border-[#34414A]/10 transition-colors duration-500 pointer-events-none"
                    >
                    </div>
                    <div className="relative z-10">
                      <div
                        className="text-6xl md:text-7xl font-black text-[#34414A] mb-2 tracking-tighter leading-none"
                      >
                        71%
                      </div>
                      <p className="text-sm font-bold text-[#34414A] uppercase tracking-widest mb-6">
                        Prefer a Human Voice
                      </p>
                      <h3 className="text-lg font-bold text-[#34414A] mb-4 leading-snug">
                        Patient satisfaction: 71% of patients prefer a live human on their first call — not a bot
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        According to patient-preference research (as cited by WellReceived), 71% of patients strongly prefer speaking to a real person when calling a medical office, and 29% would hang up immediately on an AI bot. Live human answering directly drives higher patient retention, satisfaction scores, and first-call resolution rates.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Bottom conversion strip */}
                <div
                  className="mt-14 bg-[#0B1F3A] rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 reveal reveal-delay-2"
                >
                  <div className="flex-grow text-center md:text-left">
                    <p className="text-white font-bold text-xl mb-2">
                      See what your practice could save
                    </p>
                    <p className="text-blue-200/70 text-sm">
                      Get a free estimate based on your call volume, industry, and hours of scheduling coverage needed.
                    </p>
                  </div>
                  <a
                    className="flex-shrink-0 bg-[#8CA365] hover:bg-[#7a8f57] text-white font-bold px-8 py-4 rounded-xl shadow-[0_8px_20px_rgba(140,163,101,0.3)] transition-all hover:-translate-y-0.5 whitespace-nowrap"
                    href="#hero-form"
                  >
                    Calculate My Savings →
                  </a>
                </div>
              </div>
            </section>
            {/* HIPAA COMPLIANCE & SECURITY CROSS-REFERENCE */}
            <section className="w-full bg-[#0f2925] py-24 md:py-32 px-4 relative overflow-hidden">
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
              {/* Security grid pattern overlay */}
              <div
                className="absolute inset-0 bg-[linear-gradient(rgba(140,163,101,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(140,163,101,0.03)_1px,transparent_1px)] [background-size:48px_48px] pointer-events-none"
              >
              </div>
              {/* Ambient glow */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8CA365]/5 rounded-full blur-[120px] pointer-events-none"
              >
              </div>
              <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16 reveal">
                  <span
                    className="inline-flex items-center gap-2 bg-green-500/10 text-green-400 text-xs font-bold px-4 py-2 rounded-full border border-green-500/20 uppercase tracking-widest mb-5"
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                    HIPAA Secured
                  </span>
                  <h2
                    className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight max-w-4xl mx-auto"
                  >
                    HIPAA-Compliant Medical Answering — What Every Practice Should Know Before Choosing a Service
                  </h2>
                  <p className="text-blue-200/60 text-lg max-w-2xl mx-auto leading-relaxed">
                    Compliance isn't a feature we bolt on — it's the foundation we build on. Here's exactly how we protect your patients, your practice, and your license.
                  </p>
                </div>
                {/* 3-Pillar Compliance Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-14 reveal reveal-delay-1">
                  {/* Pillar 1: Certifications */}
                  <div
                    className="bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-10 hover:bg-white/[0.07] transition-all duration-300 flex flex-col relative group"
                  >
                    {/* Animated top bar */}
                    <div
                      className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-[#8CA365] rounded-t-3xl scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
                    >
                    </div>
                    <div
                      className="w-14 h-14 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-6"
                    >
                      <svg
                        className="w-7 h-7 text-green-400"
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
                    <h3 className="text-xl font-bold text-white mb-4 leading-snug">
                      Our HIPAA certifications and what they mean for your practice's compliance
                    </h3>
                    <p className="text-blue-100/60 text-base leading-relaxed flex-grow">
                      We maintain active HIPAA certification through rigorous annual training and third-party audits. This means every receptionist who answers your patient calls has been individually certified in PHI handling, minimum necessary standards, and breach notification protocols — ensuring your practice meets federal compliance requirements at every point of patient contact.
                    </p>
                    {/* Inline trust signals */}
                    <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap gap-3">
                      <span className="inline-flex items-center gap-1.5 text-green-400/80 text-xs font-semibold">
                        <svg
                          className="w-3.5 h-3.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            clipRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            fillRule="evenodd"
                          />
                        </svg>
                        Annual recertification
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-green-400/80 text-xs font-semibold">
                        <svg
                          className="w-3.5 h-3.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            clipRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            fillRule="evenodd"
                          />
                        </svg>
                        Third-party audited
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-green-400/80 text-xs font-semibold">
                        <svg
                          className="w-3.5 h-3.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            clipRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            fillRule="evenodd"
                          />
                        </svg>
                        Individual-level training
                      </span>
                    </div>
                  </div>
                  {/* Pillar 2: BAA */}
                  <div
                    className="bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-10 hover:bg-white/[0.07] transition-all duration-300 flex flex-col relative group"
                  >
                    <div
                      className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-amber-500 rounded-t-3xl scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
                    >
                    </div>
                    <div
                      className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-6"
                    >
                      <svg
                        className="w-7 h-7 text-amber-400"
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
                    <h3 className="text-xl font-bold text-white mb-4 leading-snug">
                      Business Associate Agreement (BAA) — signed before we answer your first patient call
                    </h3>
                    <p className="text-blue-100/60 text-base leading-relaxed flex-grow">
                      A signed BAA is not optional — it's a legal requirement under HIPAA for any third party handling PHI. We execute a fully compliant Business Associate Agreement before onboarding begins, formally establishing our legal obligations to safeguard your patient data. Any answering service that starts handling calls before signing a BAA is putting your practice at risk.
                    </p>
                    <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap gap-3">
                      <span className="inline-flex items-center gap-1.5 text-amber-400/80 text-xs font-semibold">
                        <svg
                          className="w-3.5 h-3.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            clipRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            fillRule="evenodd"
                          />
                        </svg>
                        Executed pre-onboarding
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-amber-400/80 text-xs font-semibold">
                        <svg
                          className="w-3.5 h-3.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            clipRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            fillRule="evenodd"
                          />
                        </svg>
                        Legally binding
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-amber-400/80 text-xs font-semibold">
                        <svg
                          className="w-3.5 h-3.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            clipRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            fillRule="evenodd"
                          />
                        </svg>
                        Digital signature
                      </span>
                    </div>
                  </div>
                  {/* Pillar 3: Encrypted PHI */}
                  <div
                    className="bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-10 hover:bg-white/[0.07] transition-all duration-300 flex flex-col relative group"
                  >
                    <div
                      className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-t-3xl scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
                    >
                    </div>
                    <div
                      className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6"
                    >
                      <svg
                        className="w-7 h-7 text-cyan-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 leading-snug">
                      End-to-end encrypted PHI delivery — the technical standard behind every message
                    </h3>
                    <p className="text-blue-100/60 text-base leading-relaxed flex-grow">
                      Every patient message is transmitted through AES-256 encrypted channels — never via standard email, unprotected SMS, or shared fax lines. Our secure messaging portal ensures that protected health information remains fully encrypted at rest and in transit, meeting and exceeding the HIPAA Security Rule's technical safeguard requirements.
                    </p>
                    <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap gap-3">
                      <span className="inline-flex items-center gap-1.5 text-cyan-400/80 text-xs font-semibold">
                        <svg
                          className="w-3.5 h-3.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            clipRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            fillRule="evenodd"
                          />
                        </svg>
                        AES-256 encryption
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-cyan-400/80 text-xs font-semibold">
                        <svg
                          className="w-3.5 h-3.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            clipRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            fillRule="evenodd"
                          />
                        </svg>
                        Encrypted at rest + transit
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-cyan-400/80 text-xs font-semibold">
                        <svg
                          className="w-3.5 h-3.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            clipRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            fillRule="evenodd"
                          />
                        </svg>
                        Zero unencrypted SMS
                      </span>
                    </div>
                  </div>
                </div>
                {/* Cross-Reference CTA to HIPAA Page */}
                <div className="max-w-3xl mx-auto text-center reveal reveal-delay-2">
                  <div
                    className="bg-white/[0.04] border border-white/10 rounded-2xl p-8 md:p-10 backdrop-blur-sm"
                  >
                    <div className="flex justify-center mb-5">
                      <div className="w-12 h-12 rounded-full bg-[#8CA365]/20 flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-[#8CA365]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          />
                        </svg>
                      </div>
                    </div>
                    <p className="text-white font-bold text-xl mb-3">
                      Want the full compliance deep-dive?
                    </p>
                    <p className="text-blue-200/60 text-sm mb-6 max-w-xl mx-auto">
                      Read our complete HIPAA compliance documentation — including our security architecture, audit procedures, and compliance certifications in full detail.
                    </p>
                    <Link
                      className="inline-flex items-center gap-2 bg-[#8CA365] hover:bg-[#7a8f57] text-white font-bold px-8 py-4 rounded-xl shadow-[0_8px_20px_rgba(140,163,101,0.3)] transition-all hover:-translate-y-0.5"
                      href="/hipaa-compliant-answering-service"
                    >
                      Read Our Full HIPAA Compliance Documentation →
                    </Link>
                  </div>
                </div>
              </div>
            </section>
            {/* SOCIAL PROOF — MEDICAL PROFESSIONAL TESTIMONIALS */}
            <section className="bg-stone-50 py-24 md:py-32 px-4 border-t border-gray-200">
              <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <h2
                  className="block text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#34414A] text-center mb-4 max-w-4xl mx-auto leading-tight reveal"
                >
                  What Businesses Say After Switching to Our Scheduling Answering Service
                </h2>
                <h3
                  className="flex flex-col md:flex-row justify-center items-center gap-2 text-lg font-bold text-gray-600 text-center mb-16 reveal reveal-delay-1"
                >
                  Rated 4.9/5 by business owners, office managers, and service providers across the US
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
                </h3>
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
                        Bookings up 65% in the first month
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
                        "We were losing dozens of bookings every week to voicemail after 5 PM. Within the first month of switching, our confirmed appointments went up 65%. The receptionists book directly into our Acuity calendar — no double-bookings, no manual entry. It has completely transformed our front-desk operations."
                      </p>
                    </div>
                    <div
                      className="bg-slate-50 border-t border-gray-100 p-6 lg:px-10 lg:py-8 flex flex-col gap-2 relative z-10"
                    >
                      <span className="text-[#34414A] font-bold text-sm">
                        Jessica Harmon
                      </span>
                      <span className="text-gray-500 text-xs">
                        Owner, Radiant Skin Studio · 14 months with us
                      </span>
                      <span
                        className="inline-block bg-green-50 border border-green-200 text-green-700 text-[10px] font-bold px-2 py-1 rounded mt-2 w-max uppercase tracking-wider"
                      >
                        Family Medicine
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
                        Zero no-shows since switching
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
                        "Our no-show rate dropped from 22% to under 6% after we added their automated confirmation and reminder system. Callers get a live person every time they call, and a confirmation text immediately after booking. It is the single biggest operational improvement we have made in three years."
                      </p>
                    </div>
                    <div
                      className="bg-slate-50 border-t border-gray-100 p-6 lg:px-10 lg:py-8 flex flex-col gap-2 relative z-10"
                    >
                      <span className="text-[#34414A] font-bold text-sm">
                        Marcus Webb
                      </span>
                      <span className="text-gray-500 text-xs">
                        Operations Manager, Peak Performance PT · 18 months with us
                      </span>
                      <span
                        className="inline-block bg-green-50 border border-green-200 text-green-700 text-[10px] font-bold px-2 py-1 rounded mt-2 w-max uppercase tracking-wider"
                      >
                        Orthopedics
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
                        42 new bookings captured in first 30 days
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
                        "In the first 30 days we captured 42 after-hours bookings that would have hit voicemail. The bilingual scheduling has been a huge win — our Spanish-speaking clients now book at the same rate as everyone else. The service paid for itself within the first week of going live."
                      </p>
                    </div>
                    <div
                      className="bg-slate-50 border-t border-gray-100 p-6 lg:px-10 lg:py-8 flex flex-col gap-2 relative z-10"
                    >
                      <span className="text-[#34414A] font-bold text-sm">
                        Dr. Priya Nair, DDS
                      </span>
                      <span className="text-gray-500 text-xs">
                        Owner, Smile Dental Group · 10 months with us
                      </span>
                      <span
                        className="inline-block bg-green-50 border border-green-200 text-green-700 text-[10px] font-bold px-2 py-1 rounded mt-2 w-max uppercase tracking-wider"
                      >
                        Dental Practice
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* SEO AggregateRating & Review Schema */}
            </section>
            {/* FAQ — MEDICAL ANSWERING FEATURED SNIPPETS */}
            {/* FAQ SECTION (SPLIT-PANE STYLE) */}
            <section className="bg-white py-14 sm:py-24 px-4 border-t border-gray-100" id="faq">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                  <div className="lg:col-span-4 lg:sticky lg:top-24">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#34414A] leading-tight mb-6">
                      Frequently Asked Questions About Appointment Scheduling Answering Services
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
            {/* FINAL CTA — PRACTICE-READY CONVERSION (3 PATHS) */}
            <section className="bg-[#0B1120] py-24 md:py-32 px-4 relative overflow-hidden">
              {/* Ambient glow */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-[#8CA365]/15 rounded-full blur-[160px] pointer-events-none"
              >
              </div>
              {/* Grid pattern */}
              <div
                className="absolute inset-0 bg-[linear-gradient(rgba(140,163,101,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(140,163,101,0.03)_1px,transparent_1px)] [background-size:56px_56px] pointer-events-none"
              >
              </div>
              <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center">
                {/* Section Header */}
                <div className="text-center mb-4 reveal">
                  <span
                    className="inline-flex items-center gap-2 bg-green-500/10 text-green-400 text-xs font-bold px-4 py-2 rounded-full border border-green-500/20 uppercase tracking-widest mb-6"
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        clipRule="evenodd"
                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        fillRule="evenodd"
                      />
                    </svg>
                    Live & Booking in 24 Hours
                  </span>
                  <h2
                    className="text-3xl md:text-4xl lg:text-5xl font-black text-white text-center mb-6 leading-tight tracking-tight"
                  >
                    Ready to Fill Your Calendar While You Focus on Work?
                    <br className="hidden md:block" />
                    <span className="text-[#8CA365]">
                      Start Your Scheduling Answering Service Today
                    </span>
                  </h2>
                  <h3 className="text-lg md:text-xl text-slate-300 text-center font-medium max-w-2xl mx-auto">
                    Live and booking in 24 hours. Calendar synced before we answer your first call.
                  </h3>
                </div>
                {/* 3-Path CTA Cards */}
                <div
                  className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full mt-14 mb-10 reveal reveal-delay-1"
                >
                  {/* Path 1: Get Started (Primary) */}
                  <div
                    className="bg-[#8CA365] rounded-3xl p-8 md:p-9 shadow-[0_10px_40px_rgba(140,163,101,0.35)] flex flex-col items-center text-center transform md:scale-105 z-10 hover:shadow-[0_16px_50px_rgba(140,163,101,0.5)] transition-all duration-300 relative"
                  >
                    {/* "Most Popular" badge */}
                    <span
                      className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-white text-[#8CA365] text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest whitespace-nowrap shadow-md"
                    >
                      Most Popular
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mb-5">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                    <span className="block text-xl font-extrabold text-white mb-2">
                      Get Started Now
                    </span>
                    <p className="text-white/80 text-sm mb-6 leading-relaxed">
                      Instant access. No credit card. BAA executed before your first call. Full HIPAA compliance from day one.
                    </p>
                    <div className="flex flex-col gap-3 mb-7 w-full text-left">
                      <div className="flex items-center gap-2.5 text-white font-medium text-sm">
                        <svg
                          className="w-4 h-4 shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            clipRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            fillRule="evenodd"
                          />
                        </svg>
                        No credit card required
                      </div>
                      <div className="flex items-center gap-2.5 text-white font-medium text-sm">
                        <svg
                          className="w-4 h-4 shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            clipRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            fillRule="evenodd"
                          />
                        </svg>
                        Live within 24 hours
                      </div>
                      <div className="flex items-center gap-2.5 text-white font-medium text-sm">
                        <svg
                          className="w-4 h-4 shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            clipRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            fillRule="evenodd"
                          />
                        </svg>
                        Cancel anytime, no contract
                      </div>
                    </div>
                    <a
                      className="w-full bg-white text-[#8CA365] hover:bg-slate-50 font-black text-base py-4 px-6 rounded-xl transition-all duration-300 shadow-md inline-block"
                      href="#hero-form"
                    >
                      Get Started Now →
                    </a>
                  </div>
                  {/* Path 2: Custom Quote */}
                  <div
                    className="bg-slate-800/60 backdrop-blur-md border border-slate-700 rounded-3xl p-8 md:p-9 flex flex-col items-center text-center hover:border-[#8CA365]/40 transition-all duration-300 group"
                  >
                    <div
                      className="w-12 h-12 rounded-2xl bg-[#8CA365]/10 border border-[#8CA365]/20 flex items-center justify-center mb-5 group-hover:bg-[#8CA365]/20 transition-colors"
                    >
                      <svg
                        className="w-6 h-6 text-[#8CA365]"
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
                    <span className="block text-xl font-extrabold text-white mb-2">
                      Get a Custom Quote for Your Practice
                    </span>
                    <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                      See our custom triage scripts, hear a live sample call, review your PMS integration options, and ask our medical compliance team anything.
                    </p>
                    <div className="flex flex-col gap-3 mb-7 w-full text-left">
                      <div className="flex items-center gap-2.5 text-slate-300 font-medium text-sm">
                        <svg
                          className="w-4 h-4 shrink-0 text-[#8CA365]"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            clipRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            fillRule="evenodd"
                          />
                        </svg>
                        15-minute practice walkthrough
                      </div>
                      <div className="flex items-center gap-2.5 text-slate-300 font-medium text-sm">
                        <svg
                          className="w-4 h-4 shrink-0 text-[#8CA365]"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            clipRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            fillRule="evenodd"
                          />
                        </svg>
                        Live call sample included
                      </div>
                      <div className="flex items-center gap-2.5 text-slate-300 font-medium text-sm">
                        <svg
                          className="w-4 h-4 shrink-0 text-[#8CA365]"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            clipRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            fillRule="evenodd"
                          />
                        </svg>
                        No obligation to purchase
                      </div>
                    </div>
                    <Link
                      className="w-full bg-transparent border border-[#8CA365]/50 text-[#8CA365] hover:bg-[#8CA365] hover:text-white font-bold text-base py-4 px-6 rounded-xl transition-all duration-300 mt-auto inline-block"
                      href="/contact-us"
                    >
                      Get a Custom Quote →
                    </Link>
                  </div>
                  {/* Path 3: Direct Phone */}
                  <div
                    className="bg-slate-800/60 backdrop-blur-md border border-slate-700 rounded-3xl p-8 md:p-9 flex flex-col items-center text-center hover:border-slate-500 transition-all duration-300 group"
                  >
                    <div
                      className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-5 group-hover:bg-blue-500/20 transition-colors"
                    >
                      <svg
                        className="w-6 h-6 text-blue-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                        />
                      </svg>
                    </div>
                    <span className="block text-xl font-extrabold text-white mb-2">
                      Talk to Our Scheduling Team
                    </span>
                    <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                      For multi-location businesses, high-volume practices, or custom integrations — speak directly with a scheduling specialist right now.
                    </p>
                    <div className="flex flex-col gap-3 mb-7 w-full text-left">
                      <div className="flex items-center gap-2.5 text-slate-300 font-medium text-sm">
                        <svg
                          className="w-4 h-4 shrink-0 text-blue-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            clipRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            fillRule="evenodd"
                          />
                        </svg>
                        Live human answers now
                      </div>
                      <div className="flex items-center gap-2.5 text-slate-300 font-medium text-sm">
                        <svg
                          className="w-4 h-4 shrink-0 text-blue-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            clipRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            fillRule="evenodd"
                          />
                        </svg>
                        Enterprise & group pricing
                      </div>
                      <div className="flex items-center gap-2.5 text-slate-300 font-medium text-sm">
                        <svg
                          className="w-4 h-4 shrink-0 text-blue-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            clipRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            fillRule="evenodd"
                          />
                        </svg>
                        Integration questions welcome
                      </div>
                    </div>
                    <a
                      className="w-full bg-transparent border border-blue-500/40 text-blue-400 hover:bg-blue-500/10 font-bold text-base py-4 px-6 rounded-xl transition-all duration-300 mt-auto inline-flex items-center justify-center gap-2"
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
                      (857) 453-1055
                    </a>
                  </div>
                </div>
                {/* Bottom trust micro-copy */}
                <p className="text-slate-500 text-xs text-center max-w-xl reveal reveal-delay-2">
                  By signing up, you agree to our
                  <a className="underline hover:text-slate-300 transition-colors" href="#">
                    Privacy Policy
                  </a>
                  . A BAA is provided to all healthcare clients before any patient calls are handled. All data is stored in HIPAA-compliant infrastructure. No PHI is shared with third parties.
                </p>
              </div>
            </section>
            {/* Mobile Sticky Footer CTA */}
            <div
              className="fixed bottom-0 left-0 w-full bg-[#1a232c] border-t border-slate-800 p-4 z-50 md:hidden flex items-center justify-between shadow-[0_-10px_20px_rgba(0,0,0,0.3)]"
            >
              <span className="text-white font-bold text-sm">
                Missing bookings right now?
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
          </section>
        </section>
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
    </>
  )
}
