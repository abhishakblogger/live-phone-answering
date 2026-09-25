import FaqSection from '@/components/FaqSection'
import { homeFaq } from '@/components/faq-content'
import HumanVsBots from '@/features/homepage/HumanVsBots'
import IndustriesTabs from '@/components/IndustriesTabs'
import HowItWorks from '@/features/homepage/HowItWorks'
import CoreServices from '@/features/homepage/CoreServices'
import TrustBar from '@/features/homepage/TrustBar'
import HeroSection from '@/features/homepage/HeroSection'
import IntegrationsSection from '@/features/homepage/IntegrationsSection'
import Testimonials from '@/components/Testimonials'

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
      <HeroSection />
      <TrustBar />
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
      <CoreServices />
      <HowItWorks />
      <IndustriesTabs />
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
      <IntegrationsSection />
      <Testimonials id="about-us" />
      <HumanVsBots />
      <FaqSection {...homeFaq} />
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
