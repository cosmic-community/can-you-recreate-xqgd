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
    // Changed: White background section matching site's how-it-works section
    <section className="py-24 bg-white" id="how-it-works">
      <div className="container-padded">
        <SectionHeading heading={heading} intro={intro} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {steps.map((step) => {
            const num = getMetafieldValue(step.metadata?.step_number)
            const title = getMetafieldValue(step.metadata?.title) || step.title
            const description = getMetafieldValue(step.metadata?.description)
            return (
              <div
                key={step.id}
                // Changed: Step cards with cream background and rounded-2xl border
                className="flex gap-5 rounded-2xl p-7 border"
                style={{ backgroundColor: '#f9f7f2', borderColor: '#ebe4d5' }}
              >
                {/* Changed: Step number circle in brand teal */}
                <div className="flex-shrink-0 w-11 h-11 rounded-full bg-brand-600 text-white flex items-center justify-center font-black text-sm tracking-tight">
                  {num || getMetafieldValue(step.metadata?.icon_emoji)}
                </div>
                <div>
                  <h3 className="text-base font-bold text-ink mb-1.5 tracking-tight">{title}</h3>
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