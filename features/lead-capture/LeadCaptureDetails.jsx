import Link from 'next/link'

const QUESTIONS = [
  {
    icon: 'icon-user',
    title: 'Who Is Calling?',
    body: 'Name, callback number, and email when relevant.',
  },
  {
    icon: 'icon-report',
    title: 'What Do They Need?',
    body: 'Service requested, location, and the reason for the enquiry.',
  },
  {
    icon: 'icon-check-circle',
    title: 'Does the Enquiry Fit?',
    body: 'Answers to your approved questions about service area, requirements, and timeframe.',
  },
  {
    icon: 'icon-arrow-right',
    title: 'What Happens Next?',
    body: 'Transfer outcome, callback request, and the agreed follow-up destination.',
  },
]

// A worked example, labelled as one on screen. The two-column pair sits first,
// then the full-width rows, exactly as in the reference.
const PAIRED_ROWS = [
  { icon: 'icon-calendar', label: 'Appointment request', value: 'New patient consultation' },
  { icon: 'icon-user', label: 'Patient status', value: 'First-time caller' },
]

const FULL_ROWS = [
  { icon: 'icon-chat', label: 'Reason for call', value: 'Asking about appointment availability' },
  { icon: 'icon-id-card', label: 'Contact details', value: 'Name and callback number captured' },
]

const STAGES = [
  { label: 'Capture', title: 'Record the enquiry', body: 'Who called and what they need.' },
  { label: 'Qualification', title: 'Check your criteria', body: 'Apply your agreed intake rules.' },
  { label: 'Follow-up', title: 'Make the next move', body: 'Your team takes the agreed next step.' },
]

export default function LeadCaptureDetails() {
  return (
    <section
      className="w-full bg-[#faf9f4] px-4 py-14 md:py-16 lg:px-[5%]"
      aria-labelledby="lead-capture-details-heading"
    >
      <div className="mx-auto max-w-6xl">
        <p className="icon-mask icon-report [--icon-size:1rem] inline-flex items-center gap-2 bg-[#8CA365]/10 text-[#5f7a3a] rounded-full text-sm font-semibold px-4 py-1.5">
          Clear details. Informed follow-up.
        </p>
        <h2
          id="lead-capture-details-heading"
          className="mt-4 text-3xl font-extrabold leading-[1.14] tracking-tight text-[#1b4332] sm:text-[2.5rem]"
        >
          The Lead Details Your Team
          <br />
          Needs to Follow Up
        </h2>
        <p className="mt-3 max-w-4xl text-[0.95rem] leading-relaxed text-gray-600">
          Know who called, what they need, and what should happen next. We collect the information agreed for your
          business and organize it for your team.
        </p>

        <div className="mt-8 grid grid-cols-1 items-stretch gap-9 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1fr)] lg:gap-12">
          <ul className="flex h-full list-none flex-col divide-y divide-gray-300/50">
            {QUESTIONS.map((question, index) => (
              <li key={question.title} className={`flex flex-1 items-center gap-4 py-4 ${index === 0 ? 'lg:pt-0' : ''}`}>
                <span
                  className={`icon-mask ${question.icon} [--icon-size:1.2rem] flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#f0efe7] text-[#1b4332]`}
                  aria-hidden="true"
                ></span>
                <span className="min-w-0">
                  <span className="block text-[1rem] font-bold leading-snug text-[#1a2e35]">{question.title}</span>
                  <span className="mt-1 block text-[0.84rem] leading-relaxed text-gray-600">{question.body}</span>
                </span>
              </li>
            ))}
          </ul>

          <div className="flex h-full flex-col">
            <div className="flex flex-grow flex-col overflow-hidden rounded-xl bg-white shadow-lg">
              <div className="flex items-center justify-between gap-4 bg-[#1d4b37] px-5 py-3.5">
                <span className="min-w-0">
                  <span className="block text-[0.62rem] font-bold uppercase tracking-[0.16em] text-white/60">
                    Illustrative lead summary
                  </span>
                  <span className="mt-1 block text-[1.2rem] font-extrabold leading-tight text-white">
                    Medical Appointment Enquiry
                  </span>
                </span>
                <span
                  className="icon-mask icon-medical-cross [--icon-size:1.7rem] flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[#8CA365] text-[#1d4b37]"
                  aria-hidden="true"
                ></span>
              </div>

              <p className="icon-mask icon-clock [--icon-size:1rem] flex items-center gap-2.5 bg-[#f4f4ee] px-5 py-2.5 text-[0.84rem] text-gray-600 before:text-[#5f7a3a]">
                Callback requested today
              </p>

              <div className="divide-y divide-gray-200">
                <div className="grid grid-cols-1 divide-y divide-gray-200 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
                  {PAIRED_ROWS.map((row) => (
                    <div key={row.label} className="flex items-center gap-3.5 px-5 py-3">
                      <span
                        className={`icon-mask ${row.icon} [--icon-size:1.2rem] flex-shrink-0 text-[#4f6630]`}
                        aria-hidden="true"
                      ></span>
                      <span className="min-w-0">
                        <span className="block text-[0.6rem] font-bold uppercase tracking-[0.14em] text-gray-500">
                          {row.label}
                        </span>
                        <span className="mt-0.5 block text-[0.9rem] font-bold text-[#1a2e35]">{row.value}</span>
                      </span>
                    </div>
                  ))}
                </div>

                {FULL_ROWS.map((row) => (
                  <div key={row.label} className="flex items-center gap-3.5 px-5 py-3">
                    <span
                      className={`icon-mask ${row.icon} [--icon-size:1.2rem] flex-shrink-0 text-[#4f6630]`}
                      aria-hidden="true"
                    ></span>
                    <span className="min-w-0">
                      <span className="block text-[0.6rem] font-bold uppercase tracking-[0.14em] text-gray-500">
                        {row.label}
                      </span>
                      <span className="mt-0.5 block text-[0.9rem] font-bold text-[#1a2e35]">{row.value}</span>
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-auto flex items-center gap-4 bg-[#1d4b37] px-5 py-3.5">
                <span
                  className="icon-mask icon-arrow-right [--icon-size:1.1rem] flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-[#8CA365] text-[#a8c47d]"
                  aria-hidden="true"
                ></span>
                <span className="min-w-0">
                  <span className="block text-[0.6rem] font-bold uppercase tracking-[0.14em] text-white/60">
                    Next step for your team
                  </span>
                  <span className="mt-0.5 block text-[1.05rem] font-bold text-white">Practice team to follow up</span>
                  <span className="mt-0.5 block text-[0.8rem] text-white/70">
                    Transfer unavailable. Request sent to the agreed practice contact.
                  </span>
                </span>
              </div>
            </div>

            {/* The example is medical, so it is explicitly not advice or a booking. */}
            <p className="mt-2.5 text-[0.76rem] text-gray-500">
              Example only. No medical advice or appointment confirmation.
            </p>
          </div>
        </div>

        <div className="mt-9 grid grid-cols-1 gap-6 rounded-xl bg-[#f2f1ea] px-6 py-6 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-gray-300/60">
          {STAGES.map((stage, index) => (
            <div key={stage.label} className={index > 0 ? 'sm:pl-8' : 'sm:pr-8'}>
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#5f7a3a]">{stage.label}</p>
              <p className="mt-1.5 text-[1.15rem] font-extrabold text-[#1a2e35]">{stage.title}</p>
              <p className="mt-1 text-[0.84rem] text-gray-600">{stage.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-5 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.8rem] text-gray-600">
            Qualification checks are included only where agreed in your plan.
          </p>
          <Link
            prefetch={false}
            href="/contact-us"
            className="icon-mask icon-arrow-right [--icon-size:0.9rem] inline-flex flex-shrink-0 flex-row-reverse items-center gap-3 rounded-lg bg-[#1d4b37] px-6 py-3.5 text-[0.88rem] font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#164032]"
          >
            Customize My Lead Intake
          </Link>
        </div>
      </div>
    </section>
  )
}
