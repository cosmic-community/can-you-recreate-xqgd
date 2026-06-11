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
    // Changed: Privacy section uses teal-tinted light bg alternating with white
    <section className="py-24 bg-[#f0f5f5]" id="privacy">
      <div className="container-padded">
        <SectionHeading heading={heading} intro={intro} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {features.map((feature) => (
            <FeatureCard key={feature.id} item={feature} />
          ))}
        </div>
      </div>
    </section>
  )
}