import type { LandingPage } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function FinalCTA({ page }: { page: LandingPage }) {
  const m = page.metadata
  const heading = getMetafieldValue(m.final_cta_heading)
  const subtext = getMetafieldValue(m.final_cta_subtext)

  if (!heading) return null

  return (
    // Changed: Final CTA uses teal-dark hero gradient matching production
    <section className="py-24 hero-gradient">
      <div className="container-padded text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight tracking-tight">
          {heading}
        </h2>
        {subtext && (
          <p className="mt-5 text-lg text-white/65 leading-relaxed">{subtext}</p>
        )}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {getMetafieldValue(m.primary_cta_label) && (
            // Changed: CTA button corrected to teal-green matching production
            <a
              href={getMetafieldValue(m.primary_cta_url) || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-accent-500 hover:bg-accent-400 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 shadow-lg hover:-translate-y-0.5 text-base"
            >
              {getMetafieldValue(m.primary_cta_label)}
            </a>
          )}
        </div>
        {/* Changed: Trust signal text below CTA */}
        <p className="mt-6 text-sm text-white/35">
          🔒 Privacy-first architecture. HIPAA-compliant. No credit card required.
        </p>
      </div>
    </section>
  )
}