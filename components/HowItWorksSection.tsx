import type { HowItWorksStep } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'
import SectionHeading from '@/components/SectionHeading'

export default function HowItWorksSection({
  heading,
  intro,
  steps,
}: {
  heading: string
  intro?: string
  steps: HowItWorksStep[]
}) {
  if (steps.length === 0) return null

  return (
    // Changed: How it works on clean white bg matching production
    <section className="py-24 bg-white" id="how-it-works">
      <div className="container-padded">
        <SectionHeading heading={heading} intro={intro} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12">
          {steps.map((step) => {
            const num = getMetafieldValue(step.metadata?.step_number)
            const title = getMetafieldValue(step.metadata?.title) || step.title
            const description = getMetafieldValue(step.metadata?.description)
            return (
              <div
                key={step.id}
                // Changed: Step cards — teal-tinted light bg with teal border matching production
                className="flex gap-5 bg-brand-50 rounded-2xl p-7 border border-brand-100 hover:border-brand-200 transition-colors"
              >
                {/* Changed: Step number badge uses teal-green accent matching production */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent-500 text-white flex items-center justify-center font-bold text-base shadow-sm">
                  {num || getMetafieldValue(step.metadata?.icon_emoji)}
                </div>
                <div>
                  {/* Changed: Step title uses deep teal-dark ink */}
                  <h3 className="text-base font-semibold text-hero-mid mb-2">{title}</h3>
                  {description && (
                    <p className="text-ink-light text-sm leading-relaxed">
                      {description}
                    </p>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}