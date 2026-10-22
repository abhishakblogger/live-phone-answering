import Link from 'next/link'

// Deep green with a bloom out of the top-left, matching the other dark bands.
// Inline so no arbitrary-value class can fail to compile.
const SECTION_BACKGROUND = {
  backgroundImage: [
    'radial-gradient(60% 58% at 8% 0%, rgba(138,186,126,0.30) 0%, rgba(18,54,39,0) 58%)',
    'linear-gradient(155deg, #1a4836 0%, #163f2e 45%, #11321f 100%)',
  ].join(','),
}

const STEPS = [
  {
    number: '01',
    icon: 'icon-chats',
    title: 'Tell us about your business',
    body: 'Share your services, opening hours, and the questions callers ask most often. We use this to build the brief your receptionists work from.',
  },
  {
    number: '02',
    icon: 'icon-sliders',
    title: 'Set your call-handling rules',
    body: 'Choose your greeting, the details to collect on every call, and who to transfer to. You decide what happens when nobody is available.',
  },
  {
    number: '03',
    icon: 'icon-phone-ring',
    title: 'Connect and test your calls',
    body: 'Set up call forwarding from your existing number, then place a test call and hear the experience for yourself before you go live.',
  },
  {
    number: '04',
    icon: 'icon-doc-arrow',
    title: 'Start receiving calls and updates',
    body: 'Caller details and messages reach your team the way you chose. Request changes to your greeting, questions or routing at any time.',
  },
]

export default function SetupSteps() {
  return (
    <section
      className="relative w-full overflow-hidden py-14 md:py-16"
      style={SECTION_BACKGROUND}
      aria-labelledby="setup-heading"
    >
      <div className="site-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="icon-mask icon-bolt [--icon-size:1rem] inline-flex items-center gap-2 bg-white/10 text-[#a8c47d] rounded-full text-sm font-semibold px-4 py-1.5">
            Set up around your business
          </p>
          <h2
            id="setup-heading"
            className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.14] tracking-tight text-white"
          >
            How Our Virtual Receptionist
            <br />
            Service Works
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-white/65">
            You set the instructions. We help put the right call-handling process in place.
          </p>
        </div>

        <ol className="mt-12 grid list-none grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-7 lg:grid-cols-4 lg:gap-x-6">
          {STEPS.map((step, index) => (
            <li key={step.number} className="relative">
              <div className="relative flex h-full flex-col items-center rounded-xl bg-[#f7f7f0] px-5 pb-6 pt-12 text-center">
                <span
                  className="absolute -top-5 left-1/2 flex h-11 w-11 -translate-x-1/2 items-center border-2 border-white justify-center rounded-full bg-[#8CA365] text-base font-bold text-white"
                  aria-hidden="true"
                >
                  {step.number}
                </span>

                <span className={`icon-mask ${step.icon} [--icon-size:3.2rem] text-[#4f6630]`} aria-hidden="true"></span>

                <h3 className="mt-4 text-[1.1rem] font-bold text-[#1b4332]">{step.title}</h3>
                <p className="mt-2.5 flex-grow text-base leading-relaxed text-gray-600">{step.body}</p>
              </div>

              {index < STEPS.length - 1 && (
                <span
                  className="icon-mask icon-arrow-right [--icon-size:1.25rem] absolute left-full top-[32%] ml-3 hidden -translate-x-1/2 -translate-y-1/2 text-[#8CA365] lg:block"
                  aria-hidden="true"
                ></span>
              )}
            </li>
          ))}
        </ol>

        <div className="mt-10 text-center">
          <Link
            prefetch={false}
            href="/contact-us"
            className="icon-mask icon-arrow-right [--icon-size:0.95rem] inline-flex flex-row-reverse items-center gap-3 rounded-lg bg-[#8CA365] px-7 py-3.5 text-lg font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#9cb374]"
          >
            Plan My Setup
          </Link>
          <p className="mt-3 text-sm text-white/45">
            Agree on backup contacts and next steps before your calls go live.
          </p>
        </div>
      </div>
    </section>
  )
}
