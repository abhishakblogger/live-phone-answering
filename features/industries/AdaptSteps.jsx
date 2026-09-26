import ProcessSteps from '@/components/ProcessSteps'

// Same layout as the shared process section; copy and accents are this page's.
const STEPS = [
  {
    number: 1,
    accent: 'bg-[#34414A]',
    title: 'Learn Your Workflow',
    body: 'We study your industry terminology, compliance needs, CRM tools, and call-handling protocols. We learn what matters most to your callers.',
  },
  {
    number: 2,
    accent: 'bg-[#8CA365]',
    title: 'Train Dedicated Agents',
    body: 'Your receptionists are trained on your exact scripts, escalation rules, and FAQ responses. They know your business inside-out before the first call.',
    badge: 'Industry-specific training included',
  },
  {
    number: 3,
    accent: 'bg-[#34414A]',
    title: 'Start Answering Calls',
    body: 'Forward your number and we go live. Every call is handled per your instructions — messages, bookings, transfers, and urgent escalations.',
  },
]

export default function AdaptSteps() {
  return (
    <ProcessSteps
      variant="dark"
      steps={STEPS}
      heading={
        <>
          How We Adapt to <span className="text-[#8CA365]">Your Industry</span>
        </>
      }
      intro="Every business is different. Here's how we train our team to speak your language and follow your exact protocols."
    />
  )
}
