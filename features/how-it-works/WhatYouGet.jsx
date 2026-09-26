import FeatureGrid from '@/components/FeatureGrid'

const GREEN = 'bg-[#8CA365]/10 text-[#8CA365] group-hover:bg-[#8CA365]/20'
const TEAL = 'bg-[#295657]/10 text-[#295657] group-hover:bg-[#295657]/20'

const FEATURES = [
  {
    title: 'Custom Call Scripts',
    tone: GREEN,
    icon: 'icon-chat',
    body: 'We follow your exact greeting, FAQ answers, escalation rules, and transfer protocols. Every call sounds like your in-house team.',
  },
  {
    title: 'Instant Notifications',
    tone: TEAL,
    icon: 'icon-bell',
    body: 'Get real-time alerts via SMS, email, or our app the moment a call ends. Full caller details, message, and actions taken — all at your fingertips.',
  },
  {
    title: 'Appointment Scheduling',
    tone: GREEN,
    icon: 'icon-calendar',
    body: 'We book directly into Google Calendar, Calendly, Acuity, and other scheduling tools. Your calendar stays full without lifting a finger.',
  },
  {
    title: 'CRM Integration',
    tone: TEAL,
    icon: 'icon-refresh',
    body: 'Leads flow directly into ServiceTitan, Clio, HubSpot, Salesforce, and more. No manual data entry — every lead is captured automatically.',
  },
  {
    title: 'Bilingual Receptionists',
    tone: GREEN,
    icon: 'icon-translate',
    body: 'Fluent English and Spanish-speaking agents available 24/7. Serve your Spanish-speaking callers without separate phone lines.',
  },
  {
    title: 'Online Dashboard',
    tone: TEAL,
    icon: 'icon-report',
    body: 'Access your call history, messages, and analytics anytime from your online portal. Track call volumes, response times, and lead quality.',
  },
]

export default function WhatYouGet() {
  return (
    <FeatureGrid
      headingId="what-you-get-heading"
      eyebrow="What's Included"
      eyebrowClassName="icon-mask icon-check inline-flex items-center gap-2 bg-[#8CA365]/10 text-[#6b8a3e] rounded-full text-sm font-semibold px-4 py-1.5 mb-5"
      heading="Everything You Get With Our Service"
      intro="No hidden extras. Every plan includes the tools and features you need to run your business professionally."
      features={FEATURES}
      sectionClassName="py-20 md:py-28 bg-slate-50 relative overflow-hidden font-sans"
      tileClassName="w-16 h-16"
      iconSizeClassName="[--icon-size:2.25rem]"
    />
  )
}
