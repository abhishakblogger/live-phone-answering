import Link from 'next/link'

const POINTS = [
  {
    icon: 'icon-chat',
    title: 'A Welcoming Voice for Your Business',
    body: 'Make callers feel heard with a professional greeting and clear answers based on your approved information.',
  },
  {
    icon: 'icon-calendar',
    title: 'Appointments Guided by Your Rules',
    body: 'Follow your availability, appointment types, and booking policies using supported scheduling tools.',
  },
  {
    icon: 'icon-report',
    title: 'Clear Details for Your Team',
    body: 'Capture caller information and appointment needs, with requests passed to your team when confirmation is required.',
  },
]

export default function SchedulingReceptionists() {
  return (
    <section
      className="w-full bg-[#f8f7f1] px-4 py-14 md:py-16 lg:px-[5%]"
      aria-labelledby="scheduling-receptionists-heading"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-stretch gap-9 lg:grid-cols-2 lg:gap-12">
        {/* Photo grows to match the column beside it, so the two stay level. */}
        <figure className="flex flex-col overflow-hidden rounded-xl">
          <span className="relative block min-h-[18rem] flex-grow">
            <img
              src="/images/zero-bot-frustration-live-answering-service.webp"
              alt="A live virtual receptionist wearing a headset handling an appointment call at a desk"
              width={1200}
              height={1200}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </span>
          <figcaption className="flex items-center gap-5 bg-[#1d4b37] px-6 py-5">
            <span
              className="icon-mask icon-headset-call [--icon-size:2rem] flex-shrink-0 border-r border-white/20 pr-5 text-[#a8c47d]"
              aria-hidden="true"
            ></span>
            <span className="min-w-0">
              <span className="block text-[0.95rem] font-bold text-white">A real conversation. A clear next step.</span>
              <span className="mt-1 block text-[0.84rem] leading-relaxed text-white/70">
                Appointment support that follows your instructions.
              </span>
            </span>
          </figcaption>
        </figure>

        <div>
          <p className="icon-mask icon-headset [--icon-size:1rem] inline-flex items-center gap-2 bg-[#8CA365]/10 text-[#5f7a3a] rounded-full text-sm font-semibold px-4 py-1.5">
            Live receptionist support
          </p>

          <h2
            id="scheduling-receptionists-heading"
            className="mt-4 text-3xl font-extrabold leading-[1.12] tracking-tight text-[#1b4332] sm:text-[2.4rem]"
          >
            Live Virtual Receptionists
            <br />
            for Appointment
            <br />
            Scheduling
          </h2>

          <p className="mt-4 text-[0.95rem] leading-relaxed text-gray-600">
            Give callers a helpful person to speak with when they need to book, reschedule, or ask about an
            appointment. Our receptionists follow your business&rsquo;s greeting, intake questions, and scheduling
            instructions.
          </p>

          <ul className="mt-6 list-none divide-y divide-gray-300/50 border-t border-gray-300/50">
            {POINTS.map((point) => (
              <li key={point.title} className="flex items-start gap-4 py-4">
                <span
                  className={`icon-mask ${point.icon} [--icon-size:1.3rem] flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#eaf1dd] text-[#1d4b37]`}
                  aria-hidden="true"
                ></span>
                <span className="min-w-0">
                  <span className="block text-[1rem] font-bold leading-snug text-[#1b4332]">{point.title}</span>
                  <span className="mt-1 block text-[0.84rem] leading-relaxed text-gray-600">{point.body}</span>
                </span>
              </li>
            ))}
          </ul>

          <Link
            prefetch={false}
            href="/contact-us"
            className="icon-mask icon-arrow-right [--icon-size:1rem] mt-6 flex w-full flex-row-reverse items-center justify-center gap-3 rounded-lg bg-[#1d4b37] px-7 py-4 text-[1.02rem] font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#164032]"
          >
            Build My Receptionist Plan
          </Link>

          <p className="mt-3 text-[0.84rem] text-gray-600">
            Tell us how you handle appointments. We&rsquo;ll plan the support around you.
          </p>
        </div>
      </div>
    </section>
  )
}
