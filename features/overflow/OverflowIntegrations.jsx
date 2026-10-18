import Link from 'next/link'

// Wordmarks stand in for the real logo files. Each entry becomes an <img> the
// moment a file lands in public/icons — the slot size is already fixed so
// swapping one in cannot shift the layout.
const TOOLS = ['HubSpot', 'Notion', 'Calendly', 'Google Calendar', 'Zendesk', 'Zapier']

const GROUPS = [
  {
    title: 'CRM & Lead Capture',
    body: 'Capture caller details, service needs, and follow-up notes. Where supported, add inquiries to your CRM or deliver them through your agreed process so your team knows where to find each lead.',
    icons: [
      { icon: 'icon-user-plus', className: 'text-[#3f8f5a]' },
      { icon: 'icon-report', className: 'text-[#d9960b]' },
      { icon: 'icon-doc-check', className: 'text-[#2f6fd0]' },
    ],
  },
  {
    title: 'Scheduling & Calendar Tools',
    body: "Use supported calendars and your availability rules to arrange appointments. When direct booking is unavailable, pass the caller's preferred dates and times to your team for confirmation.",
    icons: [
      { icon: 'icon-calendar', className: 'text-[#2f6fd0]' },
      { icon: 'icon-clock', className: 'text-[#7a52c7]' },
      { icon: 'icon-check-circle', className: 'text-[#3f8f5a]' },
    ],
  },
  {
    title: 'Messages & Support Requests',
    body: 'Send useful call details to the right people through supported delivery channels. Define how customer questions and priority requests should be recorded and passed to your team.',
    icons: [
      { icon: 'icon-chat', className: 'text-[#3f8f5a]' },
      { icon: 'icon-mail', className: 'text-[#2f6fd0]' },
      { icon: 'icon-price-tag', className: 'text-[#d04a3f]' },
    ],
  },
]

export default function OverflowIntegrations() {
  return (
    <section
      className="w-full bg-[#fafaf8] px-4 py-14 md:py-16 lg:px-[5%]"
      aria-labelledby="overflow-integrations-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="icon-mask icon-share [--icon-size:1rem] inline-flex items-center gap-2 bg-[#8CA365]/10 text-[#5f7a3a] rounded-full text-sm font-semibold px-4 py-1.5">Platform and integrations</p>
          <h2
            id="overflow-integrations-heading"
            className="mt-3 text-3xl font-extrabold leading-[1.14] tracking-tight text-[#1d4b37] sm:text-[2.2rem]"
          >
            Connect Overflow Calls
            <br />
            With Your Everyday Business Tools
          </h2>
          <p className="mt-3 text-[0.9rem] leading-relaxed text-gray-600">
            Keep caller information moving through your business. Plan lead capture, appointment requests, and message
            delivery around the tools your team uses.
          </p>
        </div>

        <ul className="mt-8 flex list-none flex-wrap items-center justify-center gap-x-10 gap-y-5 sm:gap-x-14">
          {TOOLS.map((tool) => (
            <li
              key={tool}
              className="flex h-10 items-center text-[0.95rem] font-bold tracking-tight text-gray-600"
            >
              {tool}
            </li>
          ))}
        </ul>

        {/* Keeps the tool list honest: naming a product is not a promise that a
            direct integration exists. */}
        <p className="mt-5 text-center text-[0.7rem] text-gray-600">
          Example tools &mdash; compatibility and connection methods confirmed during setup.
        </p>

        <ul className="mt-8 grid list-none grid-cols-1 gap-6 md:grid-cols-3">
          {GROUPS.map((group) => (
            <li key={group.title} className="rounded-xl border border-gray-200/90 bg-white p-5">
              <div className="flex items-center gap-3 rounded-lg bg-[#f3f4f1] px-5 py-6">
                <span
                  className="icon-mask icon-phone [--icon-size:1.2rem] flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#1d4b37] text-white"
                  aria-hidden="true"
                ></span>
                <span className="h-px flex-grow border-t border-dashed border-gray-400/70" aria-hidden="true"></span>
                <span className="flex flex-shrink-0 items-center gap-2">
                  {group.icons.map((item) => (
                    <span
                      key={item.icon}
                      className={`icon-mask ${item.icon} [--icon-size:1.05rem] flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm ${item.className}`}
                      aria-hidden="true"
                    ></span>
                  ))}
                </span>
              </div>

              <h3 className="mt-5 text-[1.05rem] font-bold text-[#1a2e35]">{group.title}</h3>
              <p className="mt-2 text-[0.82rem] leading-relaxed text-gray-600">{group.body}</p>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-col items-start gap-5 rounded-xl bg-[#1d4b37] px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p>
            <span className="block text-[0.95rem] font-bold text-white">
              Have a specific tool in mind? Let&rsquo;s check your setup.
            </span>
            <span className="mt-1 block text-[0.78rem] text-white/70">
              Tell us which phone system and business tools you use.
            </span>
          </p>

          <Link
            prefetch={false}
            href="/contact-us"
            className="icon-mask icon-arrow-right [--icon-size:0.85rem] inline-flex flex-shrink-0 flex-row-reverse items-center gap-2.5 rounded-lg bg-[#8CA365] px-6 py-3 text-[0.82rem] font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#9cb374]"
          >
            Check My Integrations
          </Link>
        </div>
      </div>
    </section>
  )
}
