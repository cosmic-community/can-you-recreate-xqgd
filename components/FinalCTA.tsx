import type { LandingPage } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function FinalCTA({ page }: { page: LandingPage }) {
  const m = page.metadata
  const heading = getMetafieldValue(m.final_cta_heading)
  const subtext = getMetafieldValue(m.final_cta_subtext)

  if (!heading) return null

  return (
    // Changed: Cream background final CTA section matching site
    <section className="py-28" style={{ backgroundColor: '#f9f7f2' }}>
      <div className="container-padded text-center max-w-2xl mx-auto">
        {/* Changed: Large bold headline with tight tracking */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-ink leading-none tracking-tight">
          {heading}
        </h2>
        {subtext && (
          <p className="mt-6 text-base text-ink-light leading-relaxed">{subtext}</p>
        )}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {getMetafieldValue(m.primary_cta_label) && (
            <a
              href={getMetafieldValue(m.primary_cta_url) || '#'}
              target="_blank"
              rel="noopener noreferrer"
              // Changed: Pill-style large CTA button
              className="inline-flex items-center bg-brand-600 hover:bg-brand-700 text-white font-semibold px-9 py-4 rounded-full transition-all duration-200 shadow-sm hover:shadow-md text-sm"
            >
              {getMetafieldValue(m.primary_cta_label)}
            </a>
          )}
        </div>
        {/* Changed: Added small tagline below CTA */}
        <p className="mt-6 text-xs text-ink-muted tracking-wide">
          Setup takes less than 5 minutes. No credit card required.
        </p>
      </div>
    </section>
  )
}