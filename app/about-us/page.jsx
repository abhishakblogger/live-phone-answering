import Link from 'next/link'

export const metadata = {
  title: "About Us | Live Phone Answering",
  description: "Learn more about Live Phone Answering, our mission, our US-based team, and how we help businesses grow with 24/7 professional answering services.",
  alternates: { canonical: "/about-us" },
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
      {/* ABOUT US HERO SECTION */}
      <main className="w-full">
        <section
          className="relative overflow-hidden bg-white min-h-[70vh] flex items-center px-4 py-12 sm:py-16 lg:px-[5%]"
          aria-label="About Us Hero"
        >
          {/* Decorative blurred background elements (matching homepage) */}
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
            {/* Left Column (Copy & Animated Counters) */}
            <div className="flex flex-col items-start z-10">
              {/* Eyebrow badge (matching homepage style) */}
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
                Who Is Live Phone Answering?
              </div>
              {/* H1 */}
              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#34414A] leading-tight mt-4 md:mt-6"
              >
                About Live Phone Answering — The Human Team Behind Every Call
              </h1>
              {/* Subheadline */}
              <p className="text-base sm:text-lg text-gray-600 mt-4 max-w-xl">
                As a leading live phone answering company, we've spent the last 3–5 years becoming the voice US businesses trust to never miss a call. We are HIPAA certified, BBB accredited, and built on a single belief: every caller deserves a real human.
              </p>
              {/* Button Group (matching homepage style) */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
                <Link
                  href="/contact-us"
                  className="inline-flex justify-center items-center bg-[#8CA365] hover:bg-[#7a8f57] text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-transform hover:-translate-y-1 text-center"
                >
                  Get Started Now
                </Link>
                <Link
                  href="/how-it-works"
                  className="inline-flex justify-center items-center bg-white border-2 border-[#34414A] text-[#34414A] hover:bg-slate-50 font-bold py-3 px-8 rounded-lg transition-colors text-center"
                >
                  See How It Works
                </Link>
              </div>
              {/* The Animated Counter Grid */}
              <div
                className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-6 border-t border-gray-200 pt-8 mt-8 w-full"
              >
                {/* Stat 1 */}
                <div className="flex flex-col">
                  <div className="text-3xl sm:text-4xl font-black text-[#8CA365] mb-1 animate-countUp">
                    3–5
                  </div>
                  <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">
                    Years in Business
                  </div>
                </div>
                {/* Stat 2 */}
                <div className="flex flex-col">
                  <div className="text-3xl sm:text-4xl font-black text-[#34414A] mb-1 animate-countUp">
                    10,000+
                  </div>
                  <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">
                    Businesses Served
                  </div>
                </div>
                {/* Stat 3 */}
                <div className="flex flex-col">
                  <div className="text-3xl sm:text-4xl font-black text-[#34414A] mb-1 animate-countUp">
                    1M+
                  </div>
                  <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">
                    Calls Answered
                  </div>
                </div>
                {/* Stat 4 */}
                <div className="flex flex-col">
                  <div
                    className="text-3xl sm:text-4xl font-black text-amber-500 mb-1 flex items-center gap-2 animate-countUp"
                  >
                    4.9
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                  </div>
                  <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">
                    Google Rating
                  </div>
                </div>
              </div>
            </div>
            {/* Right Column (Photo Collage with decorative elements matching homepage) */}
            <div
              className="relative w-full z-10 mt-8 lg:mt-0 flex items-center justify-center min-h-[500px] lg:min-h-[600px]"
            >
              {/* Decorative Background Elements (matching homepage) */}
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
              {/* Main Image (Background/Large) */}
              <img
                src="/images/office-receptionists.png"
                alt="Live Phone Answering Team in Office"
                className="absolute right-0 top-10 w-4/5 h-[400px] lg:h-[450px] object-cover rounded-3xl shadow-xl border-2 border-gray-100 z-10 transition-transform duration-700 hover:-translate-y-2"
              />
              {/* Secondary Image (Foreground/Overlapping) */}
              <img
                src="/images/zoom-gallery-view.png"
                alt="Remote Agents Video Call"
                className="absolute left-0 bottom-8 w-3/5 h-[220px] lg:h-[250px] object-cover rounded-2xl shadow-lg border-2 border-white z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500"
              />
              {/* Trust Badge (Floating) - matching homepage badge style */}
              <div
                className="absolute right-0 sm:-right-2 top-28 bg-white/90 backdrop-blur-sm rounded-xl shadow-md px-3 py-2 flex items-center gap-2 animate-fadeUp z-30 border border-[#8CA365]/20"
                style={{ animationDelay: "0.8s" }}
              >
                <svg
                  className="w-5 h-5 text-blue-500"
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
                <span className="text-xs font-bold text-[#34414A]">
                  Verified US Team
                </span>
              </div>
              {/* HIPAA Badge (Floating bottom-left) */}
              <div
                className="absolute bottom-2 left-0 sm:left-2 bg-white/90 backdrop-blur-sm rounded-xl shadow-md px-3 py-2 animate-fadeUp z-30 border border-[#8CA365]/20"
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
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[0.65rem] text-gray-500 font-medium">
                      Compliance
                    </p>
                    <p className="text-sm font-extrabold text-[#34414A]">
                      HIPAA Certified
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* EDITORIAL ORIGIN STORY SECTION */}
        <section className="bg-stone-50 py-14 sm:py-24 px-4 border-y border-gray-200">
          <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#34414A] text-center mb-10 md:mb-16 max-w-4xl mx-auto leading-tight"
            >
              Why We Started Live Phone Answering — And the Problem We're Solving
            </h2>
            {/* The Editorial Split Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
              {/* Left Column (Founder Portrait & Signature - span 5) */}
              <div className="lg:col-span-5 flex flex-col items-center lg:items-end relative">
                <div className="relative w-full max-w-md">
                  {/* Subtle decorative offset background block */}
                  <div
                    className="absolute inset-0 translate-x-4 translate-y-4 rounded-2xl border-2 border-[#8CA365] -z-10"
                  >
                  </div>
                  {/* Portrait Image */}
                  <img
                    src="/images/about-live-phone-answering.png"
                    alt="About Live Phone Answering"
                    className="w-full aspect-[4/5] object-cover rounded-2xl shadow-xl z-10"
                  />
                </div>
              </div>
              {/* Right Column (The Narrative - span 7) */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <span className="block text-xl md:text-2xl font-bold text-[#34414A] mb-6 leading-snug">
                  The moment that changed everything: a missed call that cost a business its biggest client.
                </span>
                <p
                  className="text-gray-700 leading-relaxed text-lg mb-6 first-letter:text-6xl first-letter:font-black first-letter:text-[#8CA365] first-letter:mr-3 first-letter:float-left first-letter:leading-[0.8] first-letter:mt-2"
                >
                  A few years ago, I was deeply involved in generating high-value leads for local contractors—specifically in high-ticket niches like epoxy flooring, concrete, and premium home services. I was routing dozens of highly qualified prospects to these businesses every single week. To monitor the flow, I even set up dedicated US tracking numbers.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg mb-10">
                  But as I watched the call logs, I noticed a devastating trend. These hardworking business owners were up on ladders, running noisy equipment, or managing crews. They couldn't answer the phone. I literally listened as $5,000 to $10,000 jobs went straight to a generic voicemail, only for the caller to hang up and instantly dial the next competitor on Google. It was heartbreaking.
                </p>
                <span className="block text-xl md:text-2xl font-bold text-[#34414A] mb-6 leading-snug">
                  Our founding principle: no business should ever lose a customer to voicemail.
                </span>
                <p className="text-gray-700 leading-relaxed text-lg mb-8">
                  I realized that generating leads wasn't enough; securing them at the exact moment of intent was the real bottleneck. That’s why Live Phone Answering was born. We built a team of highly trained, US-based professionals specifically designed to act as an immediate, empathetic extension of these businesses. We turned missed connections into booked calendars, giving owners their time—and their revenue—back.
                </p>
                <a
                  href="#team"
                  className="inline-flex items-center gap-2 text-[#8CA365] font-bold text-lg hover:gap-4 transition-all w-max group"
                >
                  Meet the team that makes it happen
                  <svg
                    className="w-5 h-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* BY THE NUMBERS SECTION */}
        <section className="bg-[#0f2925] py-14 sm:py-24 px-4 relative overflow-hidden">
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
          {/* Tech-inspired grid pattern overlay */}
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "28px 28px" }}
          >
          </div>
          {/* Radial glow */}
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(140,163,101,0.08)_0%,_transparent_70%)]"
          >
          </div>
          <div className="max-w-6xl mx-auto relative z-10">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div
                className="inline-flex items-center gap-2 bg-[#8CA365]/10 border border-[#8CA365]/30 text-[#8CA365] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-6"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#8CA365] animate-pulse inline-block">
                </span>
                Live Operational Data
              </div>
              <span
                className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight max-w-3xl mx-auto"
              >
                Live Phone Answering by the Numbers —
                <span className="text-[#8CA365]">
                  4 Years
                </span>
                of Real Results
              </span>
            </div>
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {/* Stat 1 — Calls Answered */}
              <div
                className="group relative bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#8CA365]/40 rounded-2xl p-8 flex flex-col items-start gap-5 transition-all duration-300 overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8CA365]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                >
                </div>
                <div
                  className="w-12 h-12 rounded-xl bg-[#8CA365]/10 border border-[#8CA365]/20 flex items-center justify-center text-[#8CA365] group-hover:bg-[#8CA365] group-hover:text-white group-hover:border-[#8CA365] transition-all duration-300 shrink-0"
                >
                  <svg
                    className="w-5 h-5"
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
                  <div className="text-4xl font-black text-white tracking-tight mb-1">
                    1,482,904
                  </div>
                  <div className="text-sm font-bold text-[#8CA365] uppercase tracking-wider mb-2">
                    Calls Answered
                  </div>
                  <div className="text-sm text-slate-400 leading-relaxed">
                    Handled with zero dropped calls since our founding.
                  </div>
                </div>
              </div>
              {/* Stat 2 — Businesses Supported */}
              <div
                className="group relative bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#8CA365]/40 rounded-2xl p-8 flex flex-col items-start gap-5 transition-all duration-300 overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8CA365]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                >
                </div>
                <div
                  className="w-12 h-12 rounded-xl bg-[#8CA365]/10 border border-[#8CA365]/20 flex items-center justify-center text-[#8CA365] group-hover:bg-[#8CA365] group-hover:text-white group-hover:border-[#8CA365] transition-all duration-300 shrink-0"
                >
                  <svg
                    className="w-5 h-5"
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
                <div>
                  <div className="text-4xl font-black text-white tracking-tight mb-1">
                    10,243
                  </div>
                  <div className="text-sm font-bold text-[#8CA365] uppercase tracking-wider mb-2">
                    Businesses Supported
                  </div>
                  <div className="text-sm text-slate-400 leading-relaxed">
                    Across all 50 US states and multiple high-ticket industries.
                  </div>
                </div>
              </div>
              {/* Stat 3 — Average Answer Time */}
              <div
                className="group relative bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#8CA365]/40 rounded-2xl p-8 flex flex-col items-start gap-5 transition-all duration-300 overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8CA365]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                >
                </div>
                <div
                  className="w-12 h-12 rounded-xl bg-[#8CA365]/10 border border-[#8CA365]/20 flex items-center justify-center text-[#8CA365] group-hover:bg-[#8CA365] group-hover:text-white group-hover:border-[#8CA365] transition-all duration-300 shrink-0"
                >
                  <svg
                    className="w-5 h-5"
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
                <div>
                  <div className="text-4xl font-black text-white tracking-tight mb-1">
                    11.4 Sec
                  </div>
                  <div className="text-sm font-bold text-[#8CA365] uppercase tracking-wider mb-2">
                    Average Answer Time
                  </div>
                  <div className="text-sm text-slate-400 leading-relaxed">
                    Connecting your leads to a live human in under 4 rings.
                  </div>
                </div>
              </div>
              {/* Stat 4 — Reviews (FEATURED) */}
              <div
                className="group relative bg-gradient-to-br from-[#8CA365]/15 to-[#8CA365]/5 border-2 border-[#8CA365]/60 hover:border-[#8CA365] rounded-2xl p-8 flex flex-col items-start gap-5 transition-all duration-300 overflow-hidden shadow-[0_0_30px_rgba(140,163,101,0.12)]"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8CA365] to-transparent"
                >
                </div>
                <div className="flex items-center gap-3 w-full">
                  <div
                    className="w-12 h-12 rounded-xl bg-[#8CA365]/20 border border-[#8CA365]/40 flex items-center justify-center text-yellow-400 shrink-0"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                  </div>
                  <span
                    className="text-xs font-bold text-[#8CA365] uppercase tracking-widest bg-[#8CA365]/10 px-3 py-1 rounded-full border border-[#8CA365]/20"
                  >
                    Featured
                  </span>
                </div>
                <div>
                  <div className="text-4xl font-black text-white tracking-tight mb-1">
                    4.9/5
                  </div>
                  <div className="text-sm font-bold text-[#8CA365] uppercase tracking-wider mb-2">
                    Across 2,145 Reviews
                  </div>
                  <div className="text-sm text-slate-300 leading-relaxed">
                    Verified Google reviews from real, growing businesses.
                  </div>
                </div>
              </div>
              {/* Stat 5 — HIPAA Compliant */}
              <div
                className="group relative bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#8CA365]/40 rounded-2xl p-8 flex flex-col items-start gap-5 transition-all duration-300 overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8CA365]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                >
                </div>
                <div
                  className="w-12 h-12 rounded-xl bg-[#8CA365]/10 border border-[#8CA365]/20 flex items-center justify-center text-[#8CA365] group-hover:bg-[#8CA365] group-hover:text-white group-hover:border-[#8CA365] transition-all duration-300 shrink-0"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-4xl font-black text-white tracking-tight mb-1">
                    100%
                  </div>
                  <div className="text-sm font-bold text-[#8CA365] uppercase tracking-wider mb-2">
                    HIPAA-Compliant
                  </div>
                  <div className="text-sm text-slate-400 leading-relaxed">
                    Bank-level encryption and secure call handling protocols.
                  </div>
                </div>
              </div>
              {/* Stat 6 — Uninterrupted Service */}
              <div
                className="group relative bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#8CA365]/40 rounded-2xl p-8 flex flex-col items-start gap-5 transition-all duration-300 overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8CA365]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                >
                </div>
                <div
                  className="w-12 h-12 rounded-xl bg-[#8CA365]/10 border border-[#8CA365]/20 flex items-center justify-center text-[#8CA365] group-hover:bg-[#8CA365] group-hover:text-white group-hover:border-[#8CA365] transition-all duration-300 shrink-0"
                >
                  <svg
                    className="w-5 h-5"
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
                <div>
                  <div className="text-4xl font-black text-white tracking-tight mb-1">
                    4 Years
                  </div>
                  <div className="text-sm font-bold text-[#8CA365] uppercase tracking-wider mb-2">
                    Uninterrupted Service
                  </div>
                  <div className="text-sm text-slate-400 leading-relaxed">
                    Day, night, weekends, and holidays—we never clock out.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* CERTIFICATIONS & ACCREDITATIONS SECTION */}
        <section className="bg-white py-14 sm:py-24 px-4 border-t border-gray-100">
          <div className="max-w-7xl mx-auto relative z-10">
            {/* Header Section */}
            <div className="text-center mb-16 max-w-4xl mx-auto">
              <span
                className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#34414A] leading-tight mb-6"
              >
                Certified, Accredited, and Held to the Highest Industry Standards
              </span>
              <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
                Trust isn't just a marketing promise; it's a verifiable guarantee. We undergo rigorous third-party audits to ensure your business and customer data remain absolutely secure.
              </p>
            </div>
            {/* The 2-Column Trust Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left: Dynamic Image */}
              <div
                className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square bg-slate-50 rounded-[2.5rem] border border-gray-100 shadow-inner overflow-hidden flex items-center justify-center p-8 group"
              >
                <div
                  className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent opacity-70"
                >
                </div>
                <img
                  id="cert-display-img"
                  src="/images/cert-hipaa.png"
                  alt="Certification Illustration"
                  className="relative z-10 w-full h-full object-contain object-center transition-all duration-500 transform group-hover:scale-105"
                />
              </div>
              {/* Right: Interactive List */}
              <div className="flex flex-col gap-4">
                {/* Item 1: HIPAA */}
                <div
                  className="cert-tab cursor-pointer bg-white rounded-2xl p-6 border-2 border-[#8CA365] shadow-md transition-all duration-300 relative group flex items-start gap-5 opacity-100"
                  data-img="images/cert-hipaa.png"
                  data-color="border-[#8CA365]"
                  data-text="text-green"
                  data-bg="bg-green"
                >
                  <div
                    className="shrink-0 bg-green-50 text-green p-3 rounded-xl group-hover:bg-green group-hover:text-white transition-colors"
                  >
                    <svg
                      className="w-8 h-8"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                      <path d="M11 9h2v3h3v2h-3v3h-2v-3H8v-2h3V9z" />
                    </svg>
                  </div>
                  <div>
                    <h4
                      className="text-lg font-bold text-[#34414A] mb-2 group-hover:text-green transition-colors"
                    >
                      HIPAA Certified
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Protecting Every Medical and Healthcare Call. Every receptionist undergoes comprehensive, federally mandated HIPAA training to ensure strict compliance in handling sensitive patient intake.
                    </p>
                  </div>
                </div>
                {/* Item 2: BBB */}
                <div
                  className="cert-tab cursor-pointer bg-white rounded-2xl p-6 border-2 border-transparent hover:border-gray-200 transition-all duration-300 relative group flex items-start gap-5 opacity-60 hover:opacity-100"
                  data-img="images/cert-bbb.png"
                  data-color="border-blue-500"
                  data-text="text-blue-500"
                  data-bg="bg-blue-500"
                >
                  <div
                    className="shrink-0 bg-blue-50 text-blue-500 p-3 rounded-xl group-hover:bg-blue-500 group-hover:text-white transition-colors"
                  >
                    <svg
                      className="w-8 h-8"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 2L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-3zm-2 16l-4-4 1.41-1.41L10 15.17l6.59-6.59L18 10l-8 8z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4
                      className="text-lg font-bold text-[#34414A] mb-2 group-hover:text-blue-500 transition-colors"
                    >
                      BBB Accredited Business
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Verified Trust and Transparency. Our accreditation and top-tier rating with the Better Business Bureau reflect our unwavering commitment to transparent billing and ethical operations.
                    </p>
                  </div>
                </div>
                {/* Item 3: Data Security */}
                <div
                  className="cert-tab cursor-pointer bg-white rounded-2xl p-6 border-2 border-transparent hover:border-gray-200 transition-all duration-300 relative group flex items-start gap-5 opacity-60 hover:opacity-100"
                  data-img="images/cert-security.png"
                  data-color="border-slate-800"
                  data-text="text-slate-800"
                  data-bg="bg-slate-800"
                >
                  <div
                    className="shrink-0 bg-slate-100 text-slate-800 p-3 rounded-xl group-hover:bg-slate-800 group-hover:text-white transition-colors"
                  >
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4
                      className="text-lg font-bold text-[#34414A] mb-2 group-hover:text-slate-800 transition-colors"
                    >
                      Data Security & Privacy
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Beyond standard certifications, we safeguard your operations using bank-level 256-bit encryption, strict internal access controls, and secure CRM API integrations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* SERVICE MODEL & OPERATIONAL TRANSPARENCY SECTION */}
        <section
          className="bg-white py-14 sm:py-24 px-4 border-t border-gray-100 relative overflow-hidden"
        >
          <div className="max-w-7xl mx-auto relative z-10">
            {/* Header Section */}
            <div className="text-center mb-20 max-w-4xl mx-auto">
              <span
                className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#34414A] leading-tight mb-6"
              >
                How We're Built: US-Led Management, 24/7 Global Receptionist Coverage
              </span>
              <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
                Transparency is our standard. We combine stateside operational strategy with a dedicated global workforce to provide your business with uninterrupted, premium call handling at a scale that makes sense.
              </p>
            </div>
            {/* The Split Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              {/* Left Column (The Global Hub Visual) */}
              <div
                className="relative w-full rounded-3xl overflow-hidden group flex items-center justify-center p-1 bg-gradient-to-br from-gray-100 to-gray-50 border border-gray-200 shadow-sm transition-all duration-500 hover:shadow-md"
              >
                <img
                  src="/images/customer-support-operations.png"
                  alt="Customer Support Operations"
                  className="w-full h-auto object-cover rounded-3xl shadow-lg border border-white/50 group-hover:scale-[1.02] group-hover:shadow-xl transition-all duration-700"
                />
              </div>
              {/* Right Column (The Sequential Nodes) */}
              <div className="relative flex flex-col gap-10">
                {/* The Connecting Line */}
                <div
                  className="absolute left-[1.15rem] top-8 bottom-8 w-0.5 bg-gradient-to-b from-[#8CA365] via-gray-200 to-gray-200 hidden md:block z-0"
                >
                </div>
                {/* Node 1 */}
                <div className="relative flex items-start gap-6 group">
                  {/* Icon Wrapper */}
                  <div
                    className="w-10 h-10 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center text-gray-400 flex-shrink-0 z-10 group-hover:border-[#8CA365] group-hover:bg-green-50 group-hover:text-[#8CA365] transition-all duration-300 shadow-sm"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                  </div>
                  {/* Content Block */}
                  <div className="pt-1.5">
                    <span className="block text-xl font-bold text-[#34414A] mb-3 leading-snug">
                      US-based leadership sets every standard — training, scripts, quality control
                    </span>
                    <p className="text-gray-600 leading-relaxed">
                      Our US-based account managers work directly with you to build custom call flows, qualify leads for high-ticket services (from epoxy flooring to emergency repairs), and ensure our quality assurance constantly meets strict domestic standards.
                    </p>
                  </div>
                </div>
                {/* Node 2 */}
                <div className="relative flex items-start gap-6 group">
                  {/* Icon Wrapper */}
                  <div
                    className="w-10 h-10 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center text-gray-400 flex-shrink-0 z-10 group-hover:border-[#8CA365] group-hover:bg-green-50 group-hover:text-[#8CA365] transition-all duration-300 shadow-sm"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  </div>
                  {/* Content Block */}
                  <div className="pt-1.5">
                    <span className="block text-xl font-bold text-[#34414A] mb-3 leading-snug">
                      Our global receptionist team enables true 24/7 coverage without quality compromise
                    </span>
                    <p className="text-gray-600 leading-relaxed">
                      To guarantee that a midnight emergency call or weekend inquiry is never missed, we utilize a highly vetted, dedicated global workforce. This structural advantage allows us to offer genuine 24/7/365 coverage while keeping your overhead costs aggressively low.
                    </p>
                  </div>
                </div>
                {/* Node 3 */}
                <div className="relative flex items-start gap-6 group">
                  {/* Icon Wrapper */}
                  <div
                    className="w-10 h-10 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center text-gray-400 flex-shrink-0 z-10 group-hover:border-[#8CA365] group-hover:bg-green-50 group-hover:text-[#8CA365] transition-all duration-300 shadow-sm"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                  </div>
                  {/* Content Block */}
                  <div className="pt-1.5">
                    <span className="block text-xl font-bold text-[#34414A] mb-3 leading-snug">
                      Every receptionist passes our 40-hour training programme before answering a single call
                    </span>
                    <p className="text-gray-600 leading-relaxed">
                      We don't believe in "on-the-job" learning at your expense. Every global agent undergoes an intensive, 40-hour certification process focusing on empathetic communication, dispatch software mastery, and exact adherence to your business scripts before ever picking up a live line.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
        {/* FINAL TRUST CTA SECTION */}
        <section className="bg-[#0f2925] py-24 px-4 lg:px-8 relative overflow-hidden">
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
          {/* Glowing Accent */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#8CA365] rounded-full mix-blend-screen filter blur-[200px] opacity-20 pointer-events-none"
          >
          </div>
          <div className="max-w-5xl mx-auto relative z-10">
            {/* The Elevated Trust Card */}
            <div
              className="bg-white rounded-[2rem] p-10 md:p-16 lg:p-20 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] border border-gray-100 text-center flex flex-col items-center relative overflow-hidden"
            >
              {/* Decorative Top Border */}
              <div
                className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-[#8CA365] to-transparent opacity-80"
              >
              </div>
              {/* Header Section */}
              <span
                className="block text-3xl md:text-4xl lg:text-5xl font-black text-[#34414A] mb-6 leading-tight tracking-tight max-w-3xl"
              >
                Ready to Work With a Phone Answering Team You Can Actually Trust?
              </span>
              <span className="block text-lg md:text-xl text-gray-600 mb-12 font-medium">
                Start your setup — or talk to our team directly.
              </span>
              {/* The Dual CTA Group */}
              <div
                className="flex flex-col md:flex-row items-center justify-center gap-6 w-full max-w-3xl mb-12"
              >
                {/* Primary CTA (Get Started) */}
                <Link
                  href="/pricing"
                  className="w-full md:w-auto bg-[#8CA365] hover:bg-[#7a8f57] text-white font-extrabold text-lg py-4 px-10 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Get Started Now
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
                {/* Secondary CTA (Phone) */}
                <a
                  href="tel:8574531055"
                  className="w-full md:w-auto bg-white border-2 border-[#34414A] text-[#34414A] hover:bg-slate-50 font-extrabold text-lg py-4 px-8 rounded-xl transition-colors duration-300 flex items-center justify-center gap-3"
                >
                  <svg
                    className="w-5 h-5"
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
                  Talk to a Person Now: (857) 453-1055
                </a>
              </div>
              {/* The "Real Business" Footer Anchor */}
              <div
                className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 border-t border-gray-100 pt-8 w-full max-w-3xl"
              >
                {/* Item 1 (Management) */}
                <div
                  className="flex items-center gap-2 text-sm font-semibold text-gray-500 uppercase tracking-wider"
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
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  US-Based Account Management
                </div>
                {/* Item 2 (Operations) */}
                <div
                  className="flex items-center gap-2 text-sm font-semibold text-gray-500 uppercase tracking-wider"
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
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Global 24/7 Operations
                </div>
                {/* Item 3 (Guarantee) */}
                <div
                  className="flex items-center gap-2 text-sm font-semibold text-[#8CA365] uppercase tracking-wider"
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
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  Always a Real Human
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
    </>
  )
}
