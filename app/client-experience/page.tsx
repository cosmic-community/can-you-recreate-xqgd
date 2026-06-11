import { getClientExperienceItems } from '@/lib/cosmic'
import SectionHeading from '@/components/SectionHeading'
import FeatureCard from '@/components/FeatureCard'

export const metadata = {
  title: 'The Client Experience — Therapy Ally',
}

export default async function ClientExperiencePage() {
  const items = await getClientExperienceItems()

  return (
    <div className="pt-10">
      <section className="py-20 bg-white">
        <div className="container-padded">
          <SectionHeading
            heading="The Client Experience"
            intro="Clients have real-time, evidence-based conversational support aligned with your guidance and therapeutic approach — safe, structured, and fully under their control."
          />
          {items.length === 0 ? (
            <p className="text-center text-ink-light">
              No client experience items found. Add some in Cosmic to populate this page.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {items.map((item) => (
                <FeatureCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}