import FeatureGrid from '@/components/FeatureGrid'

const GREEN = 'bg-[#8CA365]/10 text-[#8CA365] group-hover:bg-[#8CA365]/20'
const TEAL = 'bg-[#295657]/10 text-[#295657] group-hover:bg-[#295657]/20'

const FEATURES = [
  {
    title: '100% US-Based Agents',
    tone: GREEN,
    icon: 'icon-users',
    body: 'Every call is answered by a trained, US-based receptionist — never offshore or AI. Your callers speak to a real person who understands their needs.',
  },
  {
    title: '24/7/365 Coverage',
    tone: TEAL,
    icon: 'icon-clock',
    body: 'Nights, weekends, holidays — we never close. Your business stays open around the clock so you never miss a single lead or urgent call.',
  },
  {
    title: 'Custom Call Scripts',
    tone: GREEN,
    icon: 'icon-pencil',
    body: 'We follow your exact call-handling instructions — greetings, FAQs, escalation rules, and transfer protocols. Every call sounds like your in-house team.',
  },
  {
    title: 'HIPAA Compliant',
    tone: TEAL,
    icon: 'icon-shield-check',
    body: 'Our systems and agents are fully HIPAA-trained and compliant. Medical practices, therapists, and healthcare providers can trust us with sensitive data.',
  },
  {
    title: 'Setup in Under 5 Minutes',
    tone: GREEN,
    icon: 'icon-bolt',
    body: "No complex installations or IT teams needed. Forward your number, share your script, and we start answering. It's really that simple.",
  },
  {
    title: 'No Contracts, No Hidden Fees',
    tone: TEAL,
    icon: 'icon-dollar',
    body: 'Cancel anytime. No setup fees, no long-term commitments. Pay only for the plan that fits your call volume. Transparent pricing, always.',
  },
]

export default function WhyChooseUs() {
  return (
    <FeatureGrid
      headingId="why-choose-us-heading"
      eyebrow="Why Choose Us"
      eyebrowClassName="icon-mask icon-shield-check inline-flex items-center gap-2 bg-[#8CA365]/10 text-[#6b8a3e] rounded-full text-sm font-semibold px-4 py-1.5 mb-5"
      heading="What Sets Our Answering Services Apart"
      intro="We don't just answer your phones — we become an extension of your team, trained to represent your brand exactly the way you want."
      features={FEATURES}
      sectionClassName="py-20 md:py-28 bg-slate-50 relative overflow-hidden font-sans"
      tileClassName="w-14 h-14"
      iconSizeClassName="[--icon-size:1.75rem]"
    />
  )
}
