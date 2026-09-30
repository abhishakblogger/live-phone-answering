import Link from 'next/link'

const STEPS = [
  {
    number: '01',
    title: 'Tell us about your business',
    body: 'Share your services, opening hours, and common caller questions.',
  },
  {
    number: '02',
    title: 'Set your call-handling rules',
    body: 'Choose your greeting, intake questions, and transfer preferences.',
  },
  {
    number: '03',
    title: 'Connect and test your calls',
    body: 'Set up call forwarding and check the experience with a test call.',
  },
  {
    number: '04',
    title: 'Start receiving calls and updates',
    body: 'Receive caller details and request changes as your needs evolve.',
  },
]

// Label/value pairs, so this renders as a <dl> rather than nested divs.
const INSTRUCTIONS = [
  ['Greeting', 'Answer using our business name'],
  ['New inquiries', 'Collect name, number, and reason for calling'],
  ['Call transfers', 'Try the designated team member first'],
  ['If no one answers', 'Take a message and request a callback'],
  ['Unfamiliar questions', 'Record the question for our team'],
]

export default function SetupSteps() {
  return (
    <section className="w-full bg-white py-20 md:py-24 px-4" aria-labelledby="setup-heading">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <p className="icon-mask icon-sliders inline-flex items-center gap-2 bg-[#8CA365]/10 text-[#6b8a3e] rounded-full text-sm font-semibold px-4 py-1.5 mb-5">
            Set up around your business
          </p>
          <h2
            id="setup-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#34414A] leading-tight tracking-tight mb-5"
          >
            How Our Virtual Receptionist
            <br className="hidden sm:block" /> Service Works
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            You set the instructions. We help put the right call-handling process in place.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,330px)_1fr] gap-10 lg:gap-12 items-start">
          {/* The rail between circles is an li::after that runs from one circle's
              bottom edge to the next one's top, so it adapts to any row height. */}
          <ol className="list-none">
            {STEPS.map((step) => (
              <li
                key={step.number}
                className="relative flex items-start gap-5 pb-8 last:pb-0 after:absolute after:left-5 after:top-11 after:bottom-0 after:w-px after:bg-[#8CA365]/40 after:content-[''] last:after:hidden"
              >
                <span
                  className="relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-[#8CA365]/40 bg-[#eef6e8] text-xs font-bold text-[#295657]"
                  aria-hidden="true"
                >
                  {step.number}
                </span>
                <span className="min-w-0 pt-1">
                  <span className="block text-lg font-bold text-[#34414A]">{step.title}</span>
                  <span className="mt-1 block text-sm text-gray-600 leading-relaxed">{step.body}</span>
                </span>
              </li>
            ))}
          </ol>

          <div className="relative">
            <p className="text-center text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-4">
              Example call instructions
            </p>

            <div className="rounded-3xl bg-white border border-gray-100 shadow-xl overflow-hidden">
              <p className="icon-mask icon-sliders [--icon-size:1.25rem] flex items-center gap-3 bg-[#0f2925] px-6 py-5 text-base font-bold text-white before:text-[#8CA365]">
                Your business. Your preferences.
              </p>

              <dl className="px-6 py-2">
                {INSTRUCTIONS.map(([label, value]) => (
                  <div
                    key={label}
                    className="grid grid-cols-1 sm:grid-cols-[minmax(0,8.5rem)_1fr] gap-1 sm:gap-3 py-4 border-b border-gray-100 last:border-b-0"
                  >
                    <dt className="text-[10px] font-bold uppercase tracking-[0.14em] text-gray-400 sm:pt-0.5">
                      {label}
                    </dt>
                    <dd className="text-sm text-[#34414A]">{value}</dd>
                  </div>
                ))}
              </dl>

              <p className="icon-mask icon-pencil [--icon-size:1.125rem] m-6 mt-2 flex items-center gap-3 rounded-2xl bg-[#eef6e8] px-5 py-4 text-sm text-gray-600 before:text-[#295657]">
                Instructions can evolve with your business.
              </p>
            </div>

            {/* Dotted arc sweeping from the card up to the phone badge. One
                <path>, so the whole flourish costs two elements. */}
            <svg
              className="hidden lg:block absolute -top-10 -right-6 w-48 h-40 text-[#8CA365]/50"
              viewBox="0 0 190 160"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="3 7"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M2 152C40 152 96 140 126 108C150 82 152 52 150 30" />
            </svg>

            <span
              className="icon-mask icon-phone [--icon-size:1.5rem] hidden lg:flex absolute -top-4 -right-2 h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg text-[#0f2925]"
              aria-hidden="true"
            ></span>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mt-12 flex flex-col sm:flex-row sm:items-center gap-5 rounded-2xl bg-[#f2f9ee] px-6 py-6 sm:px-8">
          <span
            className="icon-mask icon-shield-check [--icon-size:1.375rem] flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white text-[#295657]"
            aria-hidden="true"
          ></span>
          <span className="flex-grow">
            <span className="block text-base font-bold text-[#34414A]">A clear plan for the unexpected</span>
            <span className="block text-sm text-gray-500 mt-1">
              Agree on backup contacts and next steps before your calls go live.
            </span>
          </span>
          <Link
            prefetch={false}
            href="/contact-us"
            className="inline-flex items-center gap-2 flex-shrink-0 text-sm font-semibold text-[#34414A] hover:text-[#8CA365] transition-colors"
          >
            Plan your setup &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}
