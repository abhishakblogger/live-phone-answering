const STEPS = [
  {
    number: 1,
    accent: 'bg-[#34414A]',
    title: 'Forward Your Business Number',
    body: 'Keep your existing business number or choose a new local/toll-free one. With a simple call-forwarding setup, you control exactly when we take your calls—24/7, after hours, or on demand.',
  },
  {
    number: 2,
    accent: 'bg-[#8CA365]',
    title: 'We Answer as Your Business',
    body: 'Our professional, US-based receptionists answer using your customized, branded greeting. We handle FAQs, screen solicitors, and treat your callers with empathy.',
    badge: 'Average answer time: Under 4 rings',
  },
  {
    number: 3,
    accent: 'bg-[#34414A]',
    title: 'Get Instant Message Alerts',
    body: 'The second a call ends, your team is notified. Receive full lead details, accurate messages, and booked appointment notifications directly via Text, Email, or our App.',
  },
]

function BoltIcon() {
  return (
    <svg className="w-3.5 h-3.5 text-amber-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.381z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function Step({ step }) {
  return (
    <li className="bg-white rounded-3xl p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.2)] flex flex-col items-center text-center h-full relative z-10 transition-transform duration-300 hover:-translate-y-1 border border-white/50">
      <div
        className={`w-16 h-16 ${step.accent} text-white rounded-full flex items-center justify-center border-[6px] border-white shadow-sm mb-6 z-10 relative`}
        aria-hidden="true"
      >
        <span className="text-xl font-bold">{step.number}</span>
      </div>
      <h3 className="text-xl font-bold text-[#34414A] mb-4">{step.title}</h3>
      <p className="text-gray-600 leading-relaxed text-[15px] flex-grow">{step.body}</p>
      {step.badge && (
        <p className="mt-6 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-[11px] sm:text-xs font-bold tracking-wide">
          <BoltIcon />
          {step.badge}
        </p>
      )}
    </li>
  )
}

export default function HowItWorks() {
  return (
    <section
      className="py-20 md:py-32 relative overflow-hidden font-sans"
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
    >
      <div className="absolute inset-0 bg-[#0f2925] z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-[#8CA365]/40 rounded-full blur-[120px] animate-pulse pointer-events-none"></div>
        <div className="absolute bottom-0 -right-20 w-[700px] h-[700px] bg-[#00cc7a]/20 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#215153]/60 rounded-full blur-[120px] pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
          <h2
            id="how-it-works-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight"
          >
            How Our Live Phone Answering Service Works
            <br className="hidden md:block" />
            — Set Up in
            <span className="text-[#8CA365]"> Under 5 Minutes</span>
          </h2>
        </div>

        <div className="relative">
          {/* Decorative connector between the three cards on desktop. */}
          <div
            className="hidden md:block absolute top-[3.5rem] left-[15%] right-[15%] border-t-2 border-dashed border-white/30 z-0"
            aria-hidden="true"
          ></div>

          {/* An ordered list states the sequence to crawlers and screen readers,
              which a grid of divs cannot. */}
          <ol className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch list-none">
            {STEPS.map((step) => (
              <Step key={step.number} step={step} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
