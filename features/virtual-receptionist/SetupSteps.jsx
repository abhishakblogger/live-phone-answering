'use client'

import Link from 'next/link'
import { useState } from 'react'

// Illustrations are inline SVG rather than image files: they stay sharp at any
// size, take their colours from the palette, and add no network requests.
function BriefIllustration() {
  return (
    <svg viewBox="0 0 260 200" className="w-full h-auto" aria-hidden="true">
      <path
        d="M22 108c-8-44 26-84 74-88 46-4 88 14 108 48 20 34 6 78-28 96-34 18-86 20-118 4-18-9-30-32-36-60z"
        fill="#eef6e8"
      />
      <rect x="72" y="126" width="104" height="46" rx="6" fill="#34414A" />
      <rect x="86" y="136" width="76" height="26" rx="3" fill="#f7fbf5" />
      <circle cx="124" cy="82" r="24" fill="#295657" />
      <path d="M96 126c0-18 12-30 28-30s28 12 28 30z" fill="#8CA365" />
      <rect x="186" y="70" width="52" height="8" rx="4" fill="#8CA365" />
      <rect x="186" y="88" width="40" height="8" rx="4" fill="#c8dcb4" />
      <rect x="186" y="106" width="46" height="8" rx="4" fill="#c8dcb4" />
    </svg>
  )
}

function RulesIllustration() {
  return (
    <svg viewBox="0 0 260 200" className="w-full h-auto" aria-hidden="true">
      <path
        d="M26 100c0-42 34-76 78-80 44-4 86 16 104 52 18 36 2 76-34 92-36 16-88 14-118-6-18-12-30-34-30-58z"
        fill="#eef6e8"
      />
      <rect x="74" y="44" width="112" height="132" rx="10" fill="#ffffff" />
      <rect x="74" y="44" width="112" height="26" rx="10" fill="#0f2925" />
      <circle cx="98" cy="96" r="9" fill="#8CA365" />
      <rect x="116" y="91" width="56" height="9" rx="4.5" fill="#dfe9d6" />
      <circle cx="98" cy="126" r="9" fill="#8CA365" />
      <rect x="116" y="121" width="46" height="9" rx="4.5" fill="#dfe9d6" />
      <circle cx="98" cy="156" r="9" fill="#c8dcb4" />
      <rect x="116" y="151" width="52" height="9" rx="4.5" fill="#dfe9d6" />
    </svg>
  )
}

function ConnectIllustration() {
  return (
    <svg viewBox="0 0 260 200" className="w-full h-auto" aria-hidden="true">
      <path
        d="M24 96c4-40 38-72 82-76 44-4 84 18 100 54 16 36-2 74-36 90-34 16-84 12-112-10-18-14-36-34-34-58z"
        fill="#eef6e8"
      />
      <rect x="96" y="40" width="68" height="126" rx="14" fill="#0f2925" />
      <rect x="106" y="56" width="48" height="90" rx="6" fill="#f7fbf5" />
      <circle cx="130" cy="158" r="5" fill="#8CA365" />
      <path d="M176 78a34 34 0 010 48" stroke="#8CA365" strokeWidth="7" strokeLinecap="round" fill="none" />
      <path d="M196 62a58 58 0 010 80" stroke="#c8dcb4" strokeWidth="7" strokeLinecap="round" fill="none" />
      <path d="M84 78a34 34 0 000 48" stroke="#8CA365" strokeWidth="7" strokeLinecap="round" fill="none" />
    </svg>
  )
}

function UpdatesIllustration() {
  return (
    <svg viewBox="0 0 260 200" className="w-full h-auto" aria-hidden="true">
      <path
        d="M20 104c0-44 36-78 80-82 44-4 88 18 106 54 18 36 0 74-36 90-36 16-86 12-114-10-20-16-36-30-36-52z"
        fill="#eef6e8"
      />
      <rect x="60" y="46" width="76" height="130" rx="14" fill="#0f2925" />
      <rect x="70" y="62" width="56" height="96" rx="6" fill="#f7fbf5" />
      <rect x="148" y="60" width="86" height="42" rx="10" fill="#ffffff" />
      <rect x="160" y="74" width="46" height="8" rx="4" fill="#8CA365" />
      <rect x="148" y="116" width="86" height="42" rx="10" fill="#8CA365" />
      <rect x="160" y="130" width="52" height="8" rx="4" fill="#ffffff" />
    </svg>
  )
}

const STEPS = [
  {
    label: 'Tell us about your business',
    title: 'Tell us about your business',
    body: 'Share your services, opening hours, and the questions callers ask most often. We use this to build the brief your receptionists work from, so they answer as part of your team from the very first call.',
    Illustration: BriefIllustration,
  },
  {
    label: 'Set your call-handling rules',
    title: 'Set your call-handling rules',
    body: 'Choose your greeting, the details to collect on every call, and who to transfer to. You also decide what should happen when nobody on your team is available to take the call.',
    Illustration: RulesIllustration,
  },
  {
    label: 'Connect and test your calls',
    title: 'Connect and test your calls',
    body: 'Set up call forwarding from your existing number, then place a test call and hear the experience for yourself. Adjust anything that does not sound right before you go live.',
    Illustration: ConnectIllustration,
  },
  {
    label: 'Start receiving calls and updates',
    title: 'Start receiving calls and updates',
    body: 'Caller details and messages reach your team the way you chose. Request changes to your greeting, questions or routing whenever your needs change.',
    Illustration: UpdatesIllustration,
  },
]

export default function SetupSteps() {
  const [active, setActive] = useState(0)
  const go = (next) => setActive((next + STEPS.length) % STEPS.length)

  return (
    <section className="w-full bg-white py-20 md:py-24 px-4" aria-labelledby="setup-heading">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-14">
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

        {/* The rail between the numbers is an li::after, so the whole connected
            stepper costs no extra elements. */}
        {/* A tablist must contain its tabs directly, so this is a div of
            buttons rather than an ol/li — the rail lives on button::after. */}
        <div
          role="tablist"
          aria-label="Setup steps"
          className="grid grid-cols-2 gap-y-8 sm:grid-cols-4 mb-10 md:mb-14"
        >
          {STEPS.map((step, index) => {
            const isActive = index === active
            return (
              <button
                key={step.label}
                type="button"
                role="tab"
                id={`setup-tab-${index}`}
                aria-selected={isActive}
                aria-controls={`setup-panel-${index}`}
                onClick={() => setActive(index)}
                className="group relative flex w-full flex-col items-center gap-3 px-2 text-center after:absolute after:top-6 after:left-[calc(50%+1.75rem)] after:right-[calc(-50%+1.75rem)] after:hidden after:h-px after:bg-[#8CA365]/40 after:content-[''] sm:after:block sm:last:after:hidden"
              >
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-full text-base font-bold transition-colors ${
                    isActive
                      ? 'bg-[#8CA365] text-white'
                      : 'border-2 border-[#8CA365]/40 bg-white text-[#5f7a3a] group-hover:border-[#8CA365]'
                  }`}
                >
                  {index + 1}
                </span>
                <span
                  className={`text-sm font-bold leading-snug transition-colors ${
                    isActive ? 'text-[#34414A]' : 'text-[#5f7a3a]'
                  }`}
                >
                  {step.label}
                </span>
              </button>
            )
          })}
        </div>

        <div className="relative">
          <button
            type="button"
            onClick={() => go(active - 1)}
            aria-label="Previous step"
            className="icon-mask icon-chevron-down [--icon-size:1.5rem] absolute left-0 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 rotate-90 items-center justify-center rounded-full text-[#8CA365] transition-colors hover:bg-[#eef6e8] lg:flex"
          ></button>

          {STEPS.map((step, index) => {
            const { Illustration } = step
            return (
              <div
                key={step.label}
                id={`setup-panel-${index}`}
                role="tabpanel"
                aria-labelledby={`setup-tab-${index}`}
                className={
                  index === active
                    ? 'grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12 lg:px-16'
                    : 'hidden'
                }
              >
                <div className="mx-auto w-full max-w-[320px] md:max-w-[380px]">
                  <Illustration />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-[#34414A] mb-4">{step.title}</h3>
                  <p className="text-base text-gray-600 leading-relaxed">{step.body}</p>
                </div>
              </div>
            )
          })}

          <button
            type="button"
            onClick={() => go(active + 1)}
            aria-label="Next step"
            className="icon-mask icon-chevron-down [--icon-size:1.5rem] absolute right-0 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 -rotate-90 items-center justify-center rounded-full text-[#8CA365] transition-colors hover:bg-[#eef6e8] lg:flex"
          ></button>
        </div>

        <div className="mt-14 flex flex-col sm:flex-row sm:items-center gap-5 rounded-2xl bg-[#f2f9ee] px-6 py-6 sm:px-8">
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
