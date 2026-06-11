import type { LandingPage } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function FinalCTA({ page }: { page: LandingPage }) {
  const m = page.metadata
  const heading = getMetafieldValue(m.final_cta_heading)
  const subtext = getMetafieldValue(m.final_cta_subtext)

  if (!heading) return null

  return (
    <section className="py-20 bg-gradient-to-b from-brand-50 to-white">
      <div className="container-padded text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-ink">{heading}</h2>
        {subtext && (
          <p className="mt-4 text-lg text-ink-light">{subtext}</p>
        )}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {getMetafieldValue(m.primary_cta_label) && (
            <a
              href={getMetafieldValue(m.primary_cta_url) || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-600 hover:bg-brand-700 text-white font-semibold px-7 py-3 rounded-lg transition-colors"
            >
              {getMetafieldValue(m.primary_cta_label)}
            </a>
          )}
        </div>
      </div>
    </section>
  )
}