import Link from 'next/link'

export const metadata = {
  title: "Live Phone Answering Services — Virtual Receptionist & More | LivePhoneAnswering.com",
  description: "Explore our full range of live phone answering services including virtual receptionist, medical answering, appointment scheduling, after-hours, and bilingual answering for US businesses.",
  alternates: { canonical: "/services" },
}

export default function ServicesPage() {
  return (
    <>
      {/* HERO SECTION */}
      <section
        className="relative overflow-hidden py-16 sm:py-20 lg:py-24 px-4 lg:px-[5%]"
        aria-label="Services Hero"
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
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Our Services
          </div>
          {/* Headline */}
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.6rem] font-extrabold text-[#1a2e35] leading-[1.1] tracking-tight"
            style={{ animation: "blobFadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s both" }}
          >
            Professional Answering Services That Grow Your Business
          </h1>
          {/* Sub-headline */}
          <p
            className="text-base sm:text-lg text-[#3d5c42] mt-5 max-w-2xl mx-auto leading-relaxed"
            style={{ animation: "blobFadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.2s both" }}
          >
            From live call answering to appointment booking, after-hours coverage and bilingual support — every service is delivered by trained, US-based receptionists who follow your exact script.
          </p>
          {/* Service feature pills */}
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
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="text-sm font-semibold text-[#34414A]">
                Live Call Answering
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
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="text-sm font-semibold text-[#34414A]">
                Appointment Booking
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
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
              <span className="text-sm font-semibold text-[#34414A]">
                After-Hours Coverage
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
                  d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                />
              </svg>
              <span className="text-sm font-semibold text-[#34414A]">
                Bilingual Support
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
            <Link
              href="/pricing"
              className="inline-flex justify-center items-center bg-white/80 backdrop-blur-sm border-2 border-[#34414A]/20 text-[#34414A] hover:bg-white font-bold py-3.5 px-9 rounded-xl transition-all hover:-translate-y-0.5 text-center shadow-sm"
            >
              View Pricing Plans
            </Link>
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
                98.5%
              </span>
              <p className="text-xs text-[#5a6c6e] font-medium">
                Satisfaction
              </p>
            </div>
            <div className="text-center">
              <span className="text-2xl font-extrabold text-[#34414A]">
                10+
              </span>
              <p className="text-xs text-[#5a6c6e] font-medium">
                Services
              </p>
            </div>
            <div className="text-center">
              <span className="text-2xl font-extrabold text-[#34414A]">
                2,400+
              </span>
              <p className="text-xs text-[#5a6c6e] font-medium">
                Calls/Month
              </p>
            </div>
          </div>
        </div>
        {/* Floating decorative dots */}
        <div
          className="absolute top-12 left-[10%] w-3 h-3 rounded-full bg-[#8CA365]/40 z-[2]"
          style={{ animation: "blobFloat 5s ease-in-out infinite" }}
        >
        </div>
        <div
          className="absolute top-1/3 right-[8%] w-2.5 h-2.5 rounded-full bg-[#295657]/30 z-[2]"
          style={{ animation: "blobFloat 4s ease-in-out infinite 1s" }}
        >
        </div>
        <div
          className="absolute bottom-20 left-[15%] w-2 h-2 rounded-full bg-[#8CA365]/30 z-[2]"
          style={{ animation: "blobFloat 6s ease-in-out infinite 2s" }}
        >
        </div>
        <div
          className="absolute bottom-1/3 right-[12%] w-3.5 h-3.5 rounded-full bg-[#295657]/20 z-[2]"
          style={{ animation: "blobFloat 5s ease-in-out infinite 3s" }}
        >
        </div>
        {/* Bottom gradient transition to white */}
        <div
          className="absolute bottom-0 left-0 right-0 h-20 z-[3]"
          style={{ background: "linear-gradient(180deg, transparent 0%, #ffffff 100%)" }}
        >
        </div>
      </section>
      {/* Services Grid Section */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden font-sans">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <a
              href="#"
              className="block group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all border border-gray-100"
            >
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">
                  👩‍💼
                </span>
              </div>
              <h3
                className="text-xl font-bold text-[#34414A] mb-3 group-hover:text-[#8CA365] transition-colors"
              >
                Virtual Receptionist
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Professional remote receptionists who handle your calls just like an in-house employee.
              </p>
              <span
                className="text-[#8CA365] font-semibold flex items-center gap-1 group-hover:gap-2 transition-all"
              >
                Learn More →
              </span>
            </a>
            {/* Service 2 */}
            <a
              href="#"
              className="block group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all border border-gray-100"
            >
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">
                  ⚕️
                </span>
              </div>
              <h3
                className="text-xl font-bold text-[#34414A] mb-3 group-hover:text-[#8CA365] transition-colors"
              >
                Medical Answering
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Compassionate, accurate message taking for medical practices and healthcare providers.
              </p>
              <span
                className="text-[#8CA365] font-semibold flex items-center gap-1 group-hover:gap-2 transition-all"
              >
                Learn More →
              </span>
            </a>
            {/* Service 3 */}
            <a
              href="#"
              className="block group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all border border-gray-100"
            >
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">
                  🔒
                </span>
              </div>
              <h3
                className="text-xl font-bold text-[#34414A] mb-3 group-hover:text-[#8CA365] transition-colors"
              >
                HIPAA Compliant
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Secure, compliant answering services that protect patient health information (PHI).
              </p>
              <span
                className="text-[#8CA365] font-semibold flex items-center gap-1 group-hover:gap-2 transition-all"
              >
                Learn More →
              </span>
            </a>
            {/* Service 4 */}
            <a
              href="#"
              className="block group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all border border-gray-100"
            >
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">
                  📅
                </span>
              </div>
              <h3
                className="text-xl font-bold text-[#34414A] mb-3 group-hover:text-[#8CA365] transition-colors"
              >
                Appointment Scheduling
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We book appointments directly into your calendar, reducing back-and-forth communication.
              </p>
              <span
                className="text-[#8CA365] font-semibold flex items-center gap-1 group-hover:gap-2 transition-all"
              >
                Learn More →
              </span>
            </a>
            {/* Service 5 */}
            <a
              href="#"
              className="block group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all border border-gray-100"
            >
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">
                  🌙
                </span>
              </div>
              <h3
                className="text-xl font-bold text-[#34414A] mb-3 group-hover:text-[#8CA365] transition-colors"
              >
                After-Hours Answering
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Extend your business hours. We cover evenings, weekends, and holidays so you don't have to.
              </p>
              <span
                className="text-[#8CA365] font-semibold flex items-center gap-1 group-hover:gap-2 transition-all"
              >
                Learn More →
              </span>
            </a>
            {/* Service 6 */}
            <Link
              href="/"
              className="block group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all border border-gray-100"
            >
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">
                  🌐
                </span>
              </div>
              <h3
                className="text-xl font-bold text-[#34414A] mb-3 group-hover:text-[#8CA365] transition-colors"
              >
                Bilingual Answering
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Support your diverse customer base with fluent English and Spanish speaking agents.
              </p>
              <span
                className="text-[#8CA365] font-semibold flex items-center gap-1 group-hover:gap-2 transition-all"
              >
                Learn More →
              </span>
            </Link>
          </div>
        </div>
      </section>
      {/* WHY CHOOSE US */}
      <section className="py-20 md:py-28 bg-slate-50 relative overflow-hidden font-sans">
        {/* Subtle bg decoration */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-[#8CA365]/5 rounded-full blur-3xl"
          >
          </div>
          <div className="absolute bottom-0 -left-20 w-96 h-96 bg-[#295657]/5 rounded-full blur-3xl">
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Section Header */}
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
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              Why Choose Us
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#34414A] tracking-tight mb-4">
              What Sets Our Answering Services Apart
            </h2>
            <p className="text-lg text-gray-600">
              We don't just answer your phones — we become an extension of your team, trained to represent your brand exactly the way you want.
            </p>
          </div>
          {/* Features Grid */}
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
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#34414A] mb-3">
                100% US-Based Agents
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Every call is answered by a trained, US-based receptionist — never offshore or AI. Your callers speak to a real person who understands their needs.
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
                24/7/365 Coverage
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Nights, weekends, holidays — we never close. Your business stays open around the clock so you never miss a single lead or urgent call.
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
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#34414A] mb-3">
                Custom Call Scripts
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We follow your exact call-handling instructions — greetings, FAQs, escalation rules, and transfer protocols. Every call sounds like your in-house team.
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
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#34414A] mb-3">
                HIPAA Compliant
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our systems and agents are fully HIPAA-trained and compliant. Medical practices, therapists, and healthcare providers can trust us with sensitive data.
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#34414A] mb-3">
                Setup in Under 5 Minutes
              </h3>
              <p className="text-gray-600 leading-relaxed">
                No complex installations or IT teams needed. Forward your number, share your script, and we start answering. It's really that simple.
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
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#34414A] mb-3">
                No Contracts, No Hidden Fees
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Cancel anytime. No setup fees, no long-term commitments. Pay only for the plan that fits your call volume. Transparent pricing, always.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ SECTION (Split-Pane) */}
      <section className="bg-white py-14 sm:py-24 px-4 border-t border-gray-100" id="services-faq">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-24">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#34414A] leading-tight mb-6">
                Frequently Asked Questions About Our Services
              </h2>
              <p className="text-gray-600 mb-8">
                Everything you need to know about how our answering services work, what's included, and how we can help your business.
              </p>
              <div className="bg-slate-50 border border-gray-200 rounded-2xl p-6">
                <h4 className="font-bold text-[#34414A] mb-2">
                  Have a specific question?
                </h4>
                <p className="text-sm text-gray-600 mb-4">
                  Our team is here to help you build the perfect custom call flow.
                </p>
                <Link
                  href="/contact-us"
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
                </Link>
              </div>
            </div>
            {/* Right Column (The Accordion List) */}
            <div className="lg:col-span-8 flex flex-col gap-4">
              {/* FAQ 1 */}
              <div
                className="svc-faq-item bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300"
              >
                <div
                  className="svc-faq-q flex justify-between items-center w-full p-6 cursor-pointer group text-left"
                >
                  <h3
                    className="text-lg font-bold text-[#34414A] pr-4 group-hover:text-[#8CA365] transition-colors"
                  >
                    What is a virtual receptionist service?
                  </h3>
                  <div
                    className="svc-faq-icon w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-gray-500 group-hover:bg-[#8CA365] group-hover:text-white transition-all transform duration-300"
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
                <div className="svc-faq-a max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                  <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                    A virtual receptionist is a real, trained professional who answers your business calls remotely. They greet callers using your custom script, take messages, book appointments, transfer urgent calls, and handle FAQs — exactly like an in-house receptionist, but without the overhead costs.
                  </div>
                </div>
              </div>
              {/* FAQ 2 */}
              <div
                className="svc-faq-item bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300"
              >
                <div
                  className="svc-faq-q flex justify-between items-center w-full p-6 cursor-pointer group text-left"
                >
                  <h3
                    className="text-lg font-bold text-[#34414A] pr-4 group-hover:text-[#8CA365] transition-colors"
                  >
                    How does after-hours answering work?
                  </h3>
                  <div
                    className="svc-faq-icon w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-gray-500 group-hover:bg-[#8CA365] group-hover:text-white transition-all transform duration-300"
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
                <div className="svc-faq-a max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                  <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                    When your office closes, calls are forwarded to our team automatically. We answer using your after-hours script, handle messages, route urgent calls to your on-call staff, and send you a full summary by text or email. Your callers never hear a voicemail.
                  </div>
                </div>
              </div>
              {/* FAQ 3 */}
              <div
                className="svc-faq-item bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300"
              >
                <div
                  className="svc-faq-q flex justify-between items-center w-full p-6 cursor-pointer group text-left"
                >
                  <h3
                    className="text-lg font-bold text-[#34414A] pr-4 group-hover:text-[#8CA365] transition-colors"
                  >
                    Is your medical answering service HIPAA compliant?
                  </h3>
                  <div
                    className="svc-faq-icon w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-gray-500 group-hover:bg-[#8CA365] group-hover:text-white transition-all transform duration-300"
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
                <div className="svc-faq-a max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                  <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                    Yes. All our agents are HIPAA-trained, and our systems are fully compliant with HIPAA regulations. We handle patient health information (PHI) securely, with encrypted messaging and strict access protocols. We sign BAAs (Business Associate Agreements) with all healthcare clients.
                  </div>
                </div>
              </div>
              {/* FAQ 4 */}
              <div
                className="svc-faq-item bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300"
              >
                <div
                  className="svc-faq-q flex justify-between items-center w-full p-6 cursor-pointer group text-left"
                >
                  <h3
                    className="text-lg font-bold text-[#34414A] pr-4 group-hover:text-[#8CA365] transition-colors"
                  >
                    Can you book appointments directly into my calendar?
                  </h3>
                  <div
                    className="svc-faq-icon w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-gray-500 group-hover:bg-[#8CA365] group-hover:text-white transition-all transform duration-300"
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
                <div className="svc-faq-a max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                  <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                    Absolutely. Our receptionists integrate with popular scheduling tools like Google Calendar, Calendly, Acuity, and more. We book appointments in real-time based on your availability, reducing back-and-forth communication and keeping your schedule full.
                  </div>
                </div>
              </div>
              {/* FAQ 5 */}
              <div
                className="svc-faq-item bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300"
              >
                <div
                  className="svc-faq-q flex justify-between items-center w-full p-6 cursor-pointer group text-left"
                >
                  <h3
                    className="text-lg font-bold text-[#34414A] pr-4 group-hover:text-[#8CA365] transition-colors"
                  >
                    Do you offer bilingual answering in Spanish?
                  </h3>
                  <div
                    className="svc-faq-icon w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-gray-500 group-hover:bg-[#8CA365] group-hover:text-white transition-all transform duration-300"
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
                <div className="svc-faq-a max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                  <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                    Yes! We have fluent English and Spanish speaking receptionists available 24/7. Your Spanish-speaking callers will receive the same professional, courteous experience in their preferred language — no separate phone lines or confusing menus needed.
                  </div>
                </div>
              </div>
              {/* FAQ 6 */}
              <div
                className="svc-faq-item bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300"
              >
                <div
                  className="svc-faq-q flex justify-between items-center w-full p-6 cursor-pointer group text-left"
                >
                  <h3
                    className="text-lg font-bold text-[#34414A] pr-4 group-hover:text-[#8CA365] transition-colors"
                  >
                    How quickly can I get started?
                  </h3>
                  <div
                    className="svc-faq-icon w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-gray-500 group-hover:bg-[#8CA365] group-hover:text-white transition-all transform duration-300"
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
                <div className="svc-faq-a max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                  <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                    Most businesses are fully set up in under 5 minutes. Simply choose your plan, share your call-handling instructions, forward your number, and we start answering. No long onboarding process, no technical setup required.
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
            Ready to Stop Missing Calls & Start Growing?
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Join 2,400+ US businesses who trust our professional receptionists. Setup takes less than 5 minutes — no contracts, no hidden fees.
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
                No lock-in contracts
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
                100% US-based receptionists
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
                HIPAA compliant
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
