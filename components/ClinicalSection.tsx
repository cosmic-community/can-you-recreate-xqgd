import type { ClinicalFeature } from '@/types'
import SectionHeading from '@/components/SectionHeading'
import FeatureCard from '@/components/FeatureCard'

export default function ClinicalSection({
  heading,
  intro,
  features,
}: {
  heading: string
  intro?: string
  features: ClinicalFeature[]
}) {
  if (features.length === 0) return null

  return (
    <section className="py-20 bg-white" id="clinical">
      <div className="container-padded">
        <SectionHeading heading={heading} intro={intro} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <FeatureCard key={feature.id} item={feature} />
          ))}
        </div>
      </div>
    </section>
  )
}