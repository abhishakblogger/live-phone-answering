import Link from 'next/link'

export const metadata = {
  title: "Pricing — Flat-Rate Plans from $199/mo | Live Phone Answering",
  description: "Live answering plans from $199/month for 100 minutes. Starter, Growth and Business tiers — no setup fees, no contracts, extra minutes at $1.99/min.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    type: 'website',
    siteName: 'LivePhoneAnswering',
    locale: 'en_US',
    images: [{ url: '/images/Phone Answering Services.webp', width: 1122, height: 1402, alt: 'Live Phone Answering Service' }],
    title: "Pricing — Flat-Rate Plans from $199/mo | Live Phone Answering",
    description: "Live answering plans from $199/month for 100 minutes. Starter, Growth and Business tiers — no setup fees, no contracts, extra minutes at $1.99/min.",
    url: "/pricing",
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/Phone Answering Services.webp'],
    title: "Pricing — Flat-Rate Plans from $199/mo | Live Phone Answering",
    description: "Live answering plans from $199/month for 100 minutes. Starter, Growth and Business tiers — no setup fees, no contracts, extra minutes at $1.99/min.",
  },
}

export default function PricingPage() {
  return (
    <>
      {/* HERO SECTION (Mint Green) */}
      <section
        className="relative overflow-hidden py-16 sm:py-20 lg:py-24 px-4 lg:px-[5%]"
        aria-label="Pricing Hero"
      >
        {/* Mint green gradient background */}
        <div
          className="absolute inset-0 z-0"
          style={{ background: "linear-gradient(160deg, #c6ecb5 0%, #d4f1c4 20%, #e2f5d8 40%, #eef8e8 60%, #f5fbf2 80%, #ffffff 100%)" }}
        >
        </div>
        {/* Creative background elements */}
        <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
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
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: "linear-gradient(#295657 1px, transparent 1px), linear-gradient(90deg, #295657 1px, transparent 1px)", backgroundSize: "48px 48px" }}
          >
          </div>
          <div
            className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.03]"
            style={{ background: "repeating-linear-gradient(135deg, #295657, #295657 1px, transparent 1px, transparent 40px)" }}
          >
          </div>
        </div>
        {/* Content */}
        <div className="max-w-3xl mx-auto text-center relative z-10">
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
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Simple, Transparent Pricing
          </div>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.6rem] font-extrabold text-[#1a2e35] leading-[1.1] tracking-tight"
            style={{ animation: "blobFadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s both" }}
          >
            Flat-Rate Plans,
            <br className="hidden sm:block" />
            Zero Surprises
          </h1>
          <p
            className="text-base sm:text-lg text-[#3d5c42] mt-5 max-w-2xl mx-auto leading-relaxed"
            style={{ animation: "blobFadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.2s both" }}
          >
            No per-minute charges, no hidden fees, no long-term contracts. Just real people answering your business calls at a predictable monthly rate.
          </p>
          <div
            className="flex flex-wrap justify-center gap-3 mt-8"
            style={{ animation: "blobFadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.3s both" }}
          >
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
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-sm font-semibold text-[#34414A]">
                Flat Rate Billing
              </span>
            </div>
            <div
              className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm border border-white/60"
            >
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
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-sm font-semibold text-[#34414A]">
                No Setup Fees
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
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-sm font-semibold text-[#34414A]">
                Cancel Anytime
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* PRICING CARDS SECTION */}
      <section
        className="relative bg-white py-14 sm:py-20 px-4 overflow-hidden border-t border-gray-100"
        id="pricing"
      >
        {/* Subtle Background Decoration */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div
            className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-[#8CA365]/5 rounded-full blur-3xl"
          >
          </div>
          <div className="absolute bottom-0 -left-20 w-96 h-96 bg-[#295657]/5 rounded-full blur-3xl">
          </div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-6">
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
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Simple Monthly Minute Plans · Live Receptionists · No Long-Term Contract
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#34414A] leading-tight mb-4">
              Live Phone Answering Pricing
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Choose the monthly minutes your business needs. Our live receptionists answer calls, take messages, route callers, and help you capture more opportunities without hiring in-house staff.
            </p>
          </div>
          {/* Billing Message */}
          <div className="max-w-4xl mx-auto mb-10">
            <div
              className="flex items-center justify-center bg-slate-50 border border-gray-200 rounded-2xl p-4"
            >
              <div className="text-[#34414A] text-sm font-semibold">
                Start with the minutes you need. Upgrade anytime as your call volume grows.
              </div>
            </div>
          </div>
          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
            {/* Starter Plan */}
            <div
              className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl border border-gray-100 flex flex-col transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="rounded-full bg-[#f2f5ea] px-4 py-1 text-xs font-bold text-[#6f8750]">
                  Starter
                </span>
                <span className="rounded-full bg-[#eef8f0] px-4 py-1 text-xs font-bold text-[#4f8a63]">
                  100 Minutes
                </span>
              </div>
              <h3 className="text-2xl font-bold text-[#34414A] mb-3">
                Starter Answering
              </h3>
              <p className="text-sm leading-7 text-gray-500 min-h-[72px]">
                For small businesses that need professional live answering for overflow calls, missed calls, or light monthly call volume.
              </p>
              <div className="mt-8">
                <p className="text-sm font-semibold text-gray-500">
                  Starting at
                </p>
                <div className="mt-1 flex items-end gap-1">
                  <span className="text-5xl font-extrabold tracking-tight text-[#34414A]">
                    $199
                  </span>
                  <span className="pb-2 text-sm font-semibold text-gray-500">
                    /month
                  </span>
                </div>
                <p className="mt-3 text-sm font-semibold text-[#6f8750]">
                  Extra minutes: $1.99/min
                </p>
              </div>
              <div className="my-7 h-px bg-gray-100">
              </div>
              <ul className="space-y-4 text-sm font-medium text-gray-600 flex-1">
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
              <Link
                href="/contact-us"
                className="mt-9 flex w-full items-center justify-center rounded-lg border-2 border-[#34414A] px-5 py-4 text-sm font-bold text-[#34414A] transition hover:bg-[#34414A] hover:text-white"
              >
                Start Starter Plan
              </Link>
            </div>
            {/* Growth Plan */}
            <div
              className="relative bg-white rounded-3xl p-8 shadow-xl border-2 border-[#8CA365] flex flex-col transition-all duration-300 hover:-translate-y-1 md:-mt-4 md:mb-[-16px]"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span
                  className="rounded-full bg-[#8CA365] px-5 py-2 text-xs font-extrabold text-white shadow-lg"
                >
                  Best Value
                </span>
              </div>
              <div className="flex items-center justify-between mb-6 mt-2">
                <span className="rounded-full bg-[#f2f5ea] px-4 py-1 text-xs font-bold text-[#6f8750]">
                  Growth
                </span>
                <span className="rounded-full bg-[#eef8f0] px-4 py-1 text-xs font-bold text-[#4f8a63]">
                  250 Minutes
                </span>
              </div>
              <h3 className="text-2xl font-bold text-[#34414A] mb-3">
                Growth Answering
              </h3>
              <p className="text-sm leading-7 text-gray-500 min-h-[72px]">
                For growing businesses that need consistent call answering, lead capture, call routing, and customer support throughout the month.
              </p>
              <div className="mt-8">
                <p className="text-sm font-semibold text-gray-500">
                  Starting at
                </p>
                <div className="mt-1 flex items-end gap-1">
                  <span className="text-5xl font-extrabold tracking-tight text-[#34414A]">
                    $497.50
                  </span>
                  <span className="pb-2 text-sm font-semibold text-gray-500">
                    /month
                  </span>
                </div>
                <p className="mt-3 text-sm font-semibold text-[#6f8750]">
                  Extra minutes: $1.99/min
                </p>
              </div>
              <div className="my-7 h-px bg-gray-100">
              </div>
              <ul className="space-y-4 text-sm font-medium text-gray-600 flex-1">
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
              <Link
                href="/contact-us"
                className="mt-9 flex w-full items-center justify-center rounded-lg bg-[#8CA365] px-5 py-4 text-sm font-bold text-white transition hover:bg-[#7a8f57] shadow-lg"
              >
                Get Growth Plan
              </Link>
            </div>
            {/* Business Plan */}
            <div
              className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl border border-gray-100 flex flex-col transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="rounded-full bg-[#f2f5ea] px-4 py-1 text-xs font-bold text-[#6f8750]">
                  Business
                </span>
                <span className="rounded-full bg-[#eef8f0] px-4 py-1 text-xs font-bold text-[#4f8a63]">
                  500 Minutes
                </span>
              </div>
              <h3 className="text-2xl font-bold text-[#34414A] mb-3">
                Business Answering
              </h3>
              <p className="text-sm leading-7 text-gray-500 min-h-[72px]">
                For busy businesses that receive higher call volume and need reliable live answering support without hiring a full-time receptionist.
              </p>
              <div className="mt-8">
                <p className="text-sm font-semibold text-gray-500">
                  Starting at
                </p>
                <div className="mt-1 flex items-end gap-1">
                  <span className="text-5xl font-extrabold tracking-tight text-[#34414A]">
                    $995
                  </span>
                  <span className="pb-2 text-sm font-semibold text-gray-500">
                    /month
                  </span>
                </div>
                <p className="mt-3 text-sm font-semibold text-[#6f8750]">
                  Extra minutes: $1.99/min
                </p>
              </div>
              <div className="my-7 h-px bg-gray-100">
              </div>
              <ul className="space-y-4 text-sm font-medium text-gray-600 flex-1">
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
              <Link
                href="/contact-us"
                className="mt-9 flex w-full items-center justify-center rounded-lg border-2 border-[#34414A] px-5 py-4 text-sm font-bold text-[#34414A] transition hover:bg-[#34414A] hover:text-white"
              >
                Choose Business Plan
              </Link>
            </div>
          </div>
          {/* Custom Volume Plan */}
          <div
            className="mx-auto mt-12 max-w-5xl rounded-3xl bg-slate-50 border border-gray-200 p-8 text-center shadow-sm"
          >
            <h3 className="text-2xl font-bold text-[#34414A]">
              Need 1,000+ Minutes or Special Coverage?
            </h3>
            <p className="mx-auto mt-3 max-w-3xl text-sm leading-7 text-gray-600">
              Custom volume plans are available for high-call-volume businesses, after-hours answering, weekend coverage, bilingual answering, medical workflows, legal intake, dispatch support, and multi-location businesses.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <span
                className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-[#34414A] shadow-sm"
              >
                24/7 Answering
              </span>
              <span
                className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-[#34414A] shadow-sm"
              >
                After-Hours Support
              </span>
              <span
                className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-[#34414A] shadow-sm"
              >
                Call Overflow
              </span>
              <span
                className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-[#34414A] shadow-sm"
              >
                Bilingual Answering
              </span>
              <span
                className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-[#34414A] shadow-sm"
              >
                Appointment Scheduling
              </span>
              <span
                className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-[#34414A] shadow-sm"
              >
                CRM Entry
              </span>
            </div>
            <Link
              href="/contact-us"
              className="mt-8 inline-flex items-center justify-center rounded-lg bg-[#34414A] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#2a353d]"
            >
              Request Custom Quote
            </Link>
          </div>
          {/* Billing Notes */}
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 bg-slate-50 p-6">
              <h4 className="text-lg font-bold text-[#34414A]">
                How Minutes Are Calculated
              </h4>
              <p className="mt-3 text-sm leading-7 text-gray-600">
                Minutes are based on receptionist handling time, including live talk time, message taking, call notes, and required after-call work.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-slate-50 p-6">
              <h4 className="text-lg font-bold text-[#34414A]">
                Additional Minutes
              </h4>
              <p className="mt-3 text-sm leading-7 text-gray-600">
                If your monthly included minutes are used, extra minutes are billed at your plan's additional-minute rate.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-slate-50 p-6">
              <h4 className="text-lg font-bold text-[#34414A]">
                Upgrade Anytime
              </h4>
              <p className="mt-3 text-sm leading-7 text-gray-600">
                Start with a smaller plan and move to a larger minute package as your call volume grows.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* WHAT'S INCLUDED IN EVERY PLAN */}
      <section
        className="py-20 md:py-28 bg-slate-50 relative overflow-hidden font-sans border-t border-gray-100"
      >
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
              Included With Every Plan
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#34414A] tracking-tight mb-4">
              What's Included In Every Plan
            </h2>
            <p className="text-lg text-gray-600">
              No matter which plan you choose, you get the full suite of professional features. No upsells, no locked tiers.
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#34414A] mb-3">
                Dedicated US Receptionists
              </h3>
              <p className="text-gray-600 leading-relaxed">
                100% US-based, professionally trained receptionists dedicated to your account. They know your business inside-out.
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
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#34414A] mb-3">
                Unlimited Minutes
              </h3>
              <p className="text-gray-600 leading-relaxed">
                During your dedicated answering hours, every call is handled — no per-minute charges, no overage fees, ever.
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
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#34414A] mb-3">
                Custom Call Scripts
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Your branded greeting, FAQ answers, and call-handling instructions — included and customizable at no extra cost.
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
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#34414A] mb-3">
                Instant Notifications
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Real-time call summaries delivered via SMS, email, or app. Full caller details and actions taken — immediately.
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
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#34414A] mb-3">
                Appointment Booking
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We schedule appointments directly into your calendar — Google Calendar, Calendly, Acuity, and more.
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
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#34414A] mb-3">
                HIPAA Compliant
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Every plan includes HIPAA-compliant protocols for medical, legal, and regulated industries. Signed BAAs available.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* PRICING FAQ (Split-Pane) */}
      <section className="bg-white py-14 sm:py-24 px-4 border-t border-gray-100" id="pricing-faq">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column */}
            <div className="lg:col-span-4 lg:sticky lg:top-24">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#34414A] leading-tight mb-6">
                Pricing Questions Answered
              </h2>
              <p className="text-gray-600 mb-8">
                Everything you need to know about billing, contracts, and what's included in your plan.
              </p>
              <div className="bg-slate-50 border border-gray-200 rounded-2xl p-6">
                <h4 className="font-bold text-[#34414A] mb-2">
                  Need a custom quote?
                </h4>
                <p className="text-sm text-gray-600 mb-4">
                  We'll build a plan around your exact hours and volume.
                </p>
                <Link
                  href="/contact-us"
                  className="text-sm font-bold text-[#8CA365] hover:text-[#7a8f57] flex items-center gap-2"
                >
                  Get Custom Quote
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
                className="prc-faq-item bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300"
              >
                <div
                  className="prc-faq-q flex justify-between items-center w-full p-6 cursor-pointer group text-left"
                >
                  <h3
                    className="text-lg font-bold text-[#34414A] pr-4 group-hover:text-[#8CA365] transition-colors"
                  >
                    What does "flat rate" mean — are there any per-minute charges?
                  </h3>
                  <div
                    className="prc-faq-icon w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-gray-500 group-hover:bg-[#8CA365] group-hover:text-white transition-all transform duration-300 shrink-0"
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
                <div className="prc-faq-a max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                  <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                    Absolutely zero per-minute charges. "Flat rate" means you pay a fixed monthly fee for dedicated answering hours. During those hours, every call is answered — whether it's 5 calls or 50. No surprise bills at the end of the month.
                  </div>
                </div>
              </div>
              {/* FAQ 2 */}
              <div
                className="prc-faq-item bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300"
              >
                <div
                  className="prc-faq-q flex justify-between items-center w-full p-6 cursor-pointer group text-left"
                >
                  <h3
                    className="text-lg font-bold text-[#34414A] pr-4 group-hover:text-[#8CA365] transition-colors"
                  >
                    Are there any contracts or long-term commitments?
                  </h3>
                  <div
                    className="prc-faq-icon w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-gray-500 group-hover:bg-[#8CA365] group-hover:text-white transition-all transform duration-300 shrink-0"
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
                <div className="prc-faq-a max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                  <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                    No contracts whatsoever. All plans are month-to-month. You can cancel anytime with no penalties or cancellation fees. We believe our service should earn your business every month.
                  </div>
                </div>
              </div>
              {/* FAQ 3 */}
              <div
                className="prc-faq-item bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300"
              >
                <div
                  className="prc-faq-q flex justify-between items-center w-full p-6 cursor-pointer group text-left"
                >
                  <h3
                    className="text-lg font-bold text-[#34414A] pr-4 group-hover:text-[#8CA365] transition-colors"
                  >
                    What happens to calls outside my dedicated hours?
                  </h3>
                  <div
                    className="prc-faq-icon w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-gray-500 group-hover:bg-[#8CA365] group-hover:text-white transition-all transform duration-300 shrink-0"
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
                <div className="prc-faq-a max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                  <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                    Outside your dedicated hours, calls can be routed to voicemail, forwarded to your cell, or you can upgrade to after-hours or 24/7 coverage with a custom plan. We'll help you choose the right setup for your business.
                  </div>
                </div>
              </div>
              {/* FAQ 4 */}
              <div
                className="prc-faq-item bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300"
              >
                <div
                  className="prc-faq-q flex justify-between items-center w-full p-6 cursor-pointer group text-left"
                >
                  <h3
                    className="text-lg font-bold text-[#34414A] pr-4 group-hover:text-[#8CA365] transition-colors"
                  >
                    Can I upgrade or downgrade my plan anytime?
                  </h3>
                  <div
                    className="prc-faq-icon w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-gray-500 group-hover:bg-[#8CA365] group-hover:text-white transition-all transform duration-300 shrink-0"
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
                <div className="prc-faq-a max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                  <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                    Yes! You can switch plans at any time. If your call volume grows and you need more hours, just let us know and we'll adjust your plan. Downgrades take effect at the start of your next billing cycle.
                  </div>
                </div>
              </div>
              {/* FAQ 5 */}
              <div
                className="prc-faq-item bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300"
              >
                <div
                  className="prc-faq-q flex justify-between items-center w-full p-6 cursor-pointer group text-left"
                >
                  <h3
                    className="text-lg font-bold text-[#34414A] pr-4 group-hover:text-[#8CA365] transition-colors"
                  >
                    Is there a setup fee or onboarding cost?
                  </h3>
                  <div
                    className="prc-faq-icon w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-gray-500 group-hover:bg-[#8CA365] group-hover:text-white transition-all transform duration-300 shrink-0"
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
                <div className="prc-faq-a max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                  <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                    No setup fees. Onboarding, script creation, agent training, and configuration are all included free of charge. The only cost is your monthly plan rate — we secure your dedicated answering member with your first month upfront.
                  </div>
                </div>
              </div>
              {/* FAQ 6 */}
              <div
                className="prc-faq-item bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300"
              >
                <div
                  className="prc-faq-q flex justify-between items-center w-full p-6 cursor-pointer group text-left"
                >
                  <h3
                    className="text-lg font-bold text-[#34414A] pr-4 group-hover:text-[#8CA365] transition-colors"
                  >
                    What payment methods do you accept?
                  </h3>
                  <div
                    className="prc-faq-icon w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-gray-500 group-hover:bg-[#8CA365] group-hover:text-white transition-all transform duration-300 shrink-0"
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
                <div className="prc-faq-a max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                  <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                    We accept all major credit cards (Visa, Mastercard, American Express), ACH bank transfers, and can accommodate invoicing for custom enterprise plans. Billing is monthly and automatic.
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
            Start Saving With Flat-Rate Answering
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            No per-minute billing, no hidden fees. Just professional receptionists answering your calls at a price that makes sense for your business.
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
                Plans from $199/mo
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
                No contracts
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
                Free setup
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
              href="/contact-us"
              className="w-full sm:w-auto inline-flex justify-center items-center bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white hover:bg-white/20 font-bold py-4 px-10 rounded-xl transition-all hover:-translate-y-1 text-lg"
            >
              Request Custom Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
