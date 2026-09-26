import FeatureGrid from '@/components/FeatureGrid'

const GREEN = 'bg-[#8CA365]/10 text-[#8CA365] group-hover:bg-[#8CA365]/20'
const TEAL = 'bg-[#295657]/10 text-[#295657] group-hover:bg-[#295657]/20'

const FEATURES = [
  {
    title: 'Dedicated US Receptionists',
    tone: GREEN,
    icon: 'icon-users',
    body: '100% US-based, professionally trained receptionists dedicated to your account. They know your business inside-out.',
  },
  {
    title: 'Unlimited Minutes',
    tone: TEAL,
    icon: 'icon-clock',
    body: 'During your dedicated answering hours, every call is handled — no per-minute charges, no overage fees, ever.',
  },
  {
    title: 'Custom Call Scripts',
    tone: GREEN,
    icon: 'icon-chat',
    body: 'Your branded greeting, FAQ answers, and call-handling instructions — included and customizable at no extra cost.',
  },
  {
    title: 'Instant Notifications',
    tone: TEAL,
    icon: 'icon-bell',
    body: 'Real-time call summaries delivered via SMS, email, or app. Full caller details and actions taken — immediately.',
  },
  {
    title: 'Appointment Booking',
    tone: GREEN,
    icon: 'icon-calendar',
    body: 'We schedule appointments directly into your calendar — Google Calendar, Calendly, Acuity, and more.',
  },
  {
    title: 'HIPAA Compliant',
    tone: TEAL,
    icon: 'icon-shield-check',
    body: 'Every plan includes HIPAA-compliant protocols for medical, legal, and regulated industries. Signed BAAs available.',
  },
]

export default function IncludedFeatures() {
  return (
    <FeatureGrid
      headingId="included-heading"
      eyebrow="Included With Every Plan"
      eyebrowClassName="icon-mask icon-check inline-flex items-center gap-2 bg-[#8CA365]/10 text-[#6b8a3e] rounded-full text-sm font-semibold px-4 py-1.5 mb-5"
      heading="What's Included In Every Plan"
      intro="No matter which plan you choose, you get the full suite of professional features. No upsells, no locked tiers."
      features={FEATURES}
      sectionClassName="py-20 md:py-28 bg-slate-50 relative overflow-hidden font-sans border-t border-gray-100"
      tileClassName="w-16 h-16"
      iconSizeClassName="[--icon-size:2.25rem]"
    />
  )
}
