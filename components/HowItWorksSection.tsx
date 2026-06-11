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
    <section className="py-20 bg-white" id="how-it-works">
      <div className="container-padded">
        <SectionHeading heading={heading} intro={intro} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step) => {
            const num = getMetafieldValue(step.metadata?.step_number)
            const title = getMetafieldValue(step.metadata?.title) || step.title
            const description = getMetafieldValue(step.metadata?.description)
            return (
              <div
                key={step.id}
                className="flex gap-5 bg-brand-50 rounded-xl p-6"
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-full bg-brand-600 text-white flex items-center justify-center font-bold">
                  {num || getMetafieldValue(step.metadata?.icon_emoji)}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-ink mb-1">{title}</h3>
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