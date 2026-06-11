import type { LandingPage } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function FinalCTA({ page }: { page: LandingPage }) {
  const m = page.metadata
  const heading = getMetafieldValue(m.final_cta_heading)
  const subtext = getMetafieldValue(m.final_cta_subtext)

  if (!heading) return null

  return (
    // Changed: Final CTA uses dark navy gradient matching production bottom section
    <section className="py-24 hero-gradient">
      <div className="container-padded text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight tracking-tight">
          {heading}
        </h2>
        {subtext && (
          <p className="mt-5 text-lg text-blue-100/70 leading-relaxed">{subtext}</p>
        )}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {getMetafieldValue(m.primary_cta_label) && (
            // Changed: Final CTA button uses accent orange matching production
            <a
              href={getMetafieldValue(m.primary_cta_url) || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-accent-500 hover:bg-accent-400 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-accent-500/30 hover:shadow-accent-400/40 hover:-translate-y-0.5 text-base"
            >
              {getMetafieldValue(m.primary_cta_label)}
            </a>
          )}
        </div>
        {/* Changed: Added trust signal below CTA matching production */}
        <p className="mt-6 text-sm text-blue-100/40">
          🔒 Privacy-first architecture. HIPAA-compliant. No credit card required.
        </p>
      </div>
    </section>
  )
}