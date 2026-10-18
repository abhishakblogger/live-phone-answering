import Link from 'next/link'

const BENEFITS = [
  {
    icon: 'icon-user-clock',
    title: 'Fewer Scheduling Interruptions',
    body: 'Let receptionists handle routine booking inquiries while your staff focus on customers and ongoing work. Keep appointment calls from repeatedly breaking up the day.',
  },
  {
    icon: 'icon-chats',
    title: 'Less Back-and-Forth With Callers',
    body: 'Collect the right details and check supported availability during the conversation. Give callers a booking or a clear next step when your team needs to confirm.',
  },
  {
    icon: 'icon-intake-list',
    title: 'Better Preparation for Appointments',
    body: 'Gather service needs, contact details, and approved intake information before the visit. Help your team understand what the customer needs before the appointment begins.',
  },
  {
    icon: 'icon-calendar-heart',
    title: 'A More Helpful Booking Experience',
    body: "Give callers a real person to discuss available times, appointment changes, and routine questions. Keep the conversation aligned with your business's instructions.",
  },
]

export default function SchedulingBenefits() {
  return (
    <section
      className="w-full bg-[#faf9f4] px-4 py-14 md:py-16 lg:px-[5%]"
      aria-labelledby="scheduling-benefits-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="icon-mask icon-smile [--icon-size:1rem] inline-flex items-center gap-2 bg-[#8CA365]/10 text-[#5f7a3a] rounded-full text-sm font-semibold px-4 py-1.5">
            Benefits of appointment answering
          </p>
          <h2
            id="scheduling-benefits-heading"
            className="mt-4 text-3xl font-extrabold leading-[1.14] tracking-tight text-[#1b4332] sm:text-[2.5rem]"
          >
            Spend Less Time Managing Calls
            <br />
            and More Time Serving Customers
          </h2>
          <p className="mt-3 text-[0.95rem] leading-relaxed text-gray-600">
            Give customers help with scheduling while your team stays focused on the appointments, projects, and people
            already in front of them.
          </p>
        </div>

        <div className="mt-9 grid grid-cols-1 items-stretch gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1fr)] lg:gap-11">
          {/* Photo and caption panel stacked inside one clipped, rounded box. */}
          <figure className="flex flex-col overflow-hidden rounded-2xl">
            <span className="relative block min-h-[16rem] flex-grow">
            <img
              src="/images/scheduling-receptionist.webp"
              alt="A business owner going through appointment details with a customer across a desk"
              width={1024}
              height={1024}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
            />
            </span>
            <figcaption className="bg-[#1d4b37] px-5 py-4">
              <span className="block text-[0.95rem] font-bold text-white">Be present for the people you serve.</span>
              <span className="mt-1 block text-[0.8rem] leading-relaxed text-white/70">
                Let live receptionists help with the scheduling conversation.
              </span>
            </figcaption>
          </figure>

          <ul className="list-none divide-y divide-gray-300/50">
            {BENEFITS.map((benefit, index) => (
              <li key={benefit.title} className={`flex items-start gap-4 py-4 ${index === 0 ? 'lg:pt-0' : ''}`}>
                <span
                  className={`icon-mask ${benefit.icon} [--icon-size:2.1rem] mt-0.5 flex-shrink-0 text-[#6b8a3e]`}
                  aria-hidden="true"
                ></span>
                <span className="min-w-0">
                  <span className="block text-[0.96rem] font-bold leading-snug text-[#1b4332]">{benefit.title}</span>
                  <span className="mt-1 block text-[0.82rem] leading-relaxed text-gray-600">{benefit.body}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-9 flex flex-col items-start gap-5 border-t border-gray-300/50 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[1.15rem] font-extrabold text-[#1a2e35]">Make room for the work that needs you.</p>
          <Link
            prefetch={false}
            href="/contact-us"
            className="icon-mask icon-arrow-right [--icon-size:0.95rem] inline-flex flex-shrink-0 flex-row-reverse items-center gap-3 rounded-lg bg-[#8CA365] px-6 py-3 text-[0.9rem] font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#9cb374]"
          >
            Get My Scheduling Quote
          </Link>
        </div>
      </div>
    </section>
  )
}
