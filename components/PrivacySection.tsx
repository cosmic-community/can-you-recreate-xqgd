import type { PrivacyFeature } from '@/types'
import SectionHeading from '@/components/SectionHeading'
import FeatureCard from '@/components/FeatureCard'

export default function PrivacySection({
  heading,
  intro,
  features,
}: {
  heading: string
  intro?: string
  features: PrivacyFeature[]
}) {
  if (features.length === 0) return null

  return (
    // Changed: Updated to very light slate/gray bg matching production privacy section
    <section className="py-24 bg-slate-50" id="privacy">
      <div className="container-padded">
        <SectionHeading heading={heading} intro={intro} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {features.map((feature) => (
            <FeatureCard key={feature.id} item={feature} />
          ))}
        </div>
      </div>
    </section>
  )
}