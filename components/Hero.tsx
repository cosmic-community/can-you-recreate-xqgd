import type { LandingPage } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function Hero({ page }: { page: LandingPage }) {
  const m = page.metadata
  const screenshot = m.app_screenshot

  return (
    // Changed: Cream background matching clinician.therapyally.ai hero section
    <section className="relative overflow-hidden" style={{ backgroundColor: '#f9f7f2' }}>
      <div className="container-padded py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            {/* Changed: Updated eyebrow badge style to pill shape with tight tracking */}
            {getMetafieldValue(m.hero_eyebrow) && (
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-600 bg-brand-100 px-4 py-1.5 rounded-full mb-6">
                {getMetafieldValue(m.hero_eyebrow)}
              </span>
            )}
            {/* Changed: Very bold, tight headline matching site's h1 style */}
            <h1 className="text-5xl md:text-6xl font-black text-ink leading-none tracking-tight">
              {getMetafieldValue(m.hero_headline)}
            </h1>
            {getMetafieldValue(m.hero_subheadline) && (
              // Changed: Subheadline uses muted ink with slightly larger leading
              <p className="mt-5 text-lg md:text-xl text-ink-light leading-relaxed max-w-lg">
                {getMetafieldValue(m.hero_subheadline)}
              </p>
            )}
            {getMetafieldValue(m.hero_description) && (
              <p className="mt-4 text-base text-ink-muted leading-relaxed max-w-lg">
                {getMetafieldValue(m.hero_description)}
              </p>
            )}

            {/* Changed: Pill-shaped CTA buttons matching site */}
            <div className="mt-10 flex flex-wrap gap-4">
              {getMetafieldValue(m.primary_cta_label) && (
                <a
                  href={getMetafieldValue(m.primary_cta_url) || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-brand-600 hover:bg-brand-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 shadow-sm hover:shadow-md text-sm"
                >
                  {getMetafieldValue(m.primary_cta_label)}
                </a>
              )}
              {getMetafieldValue(m.secondary_cta_label) && (
                <a
                  href={getMetafieldValue(m.secondary_cta_url) || '#'}
                  className="inline-flex items-center border-2 border-brand-300 hover:border-brand-600 text-brand-700 hover:text-brand-800 font-semibold px-8 py-4 rounded-full transition-all duration-200 text-sm"
                >
                  {getMetafieldValue(m.secondary_cta_label)}
                </a>
              )}
            </div>

            {/* Changed: Compliance note styling */}
            {getMetafieldValue(m.compliance_note) && (
              <p className="mt-7 text-xs text-ink-muted flex items-center gap-2 tracking-wide">
                <span>🔒</span>
                {getMetafieldValue(m.compliance_note)}
              </p>
            )}
          </div>

          {/* Changed: Screenshot panel with richer shadow and border matching site */}
          <div className="relative">
            {screenshot?.imgix_url ? (
              <img
                src={`${screenshot.imgix_url}?w=1200&h=900&fit=crop&auto=format,compress`}
                alt="Therapy Ally dashboard preview"
                width={600}
                height={450}
                className="rounded-3xl shadow-2xl border border-cream-200 w-full h-auto"
              />
            ) : (
              // Changed: Mock dashboard card matching site's card style
              <div className="rounded-3xl shadow-2xl border border-cream-200 bg-white p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-center">
                    <p className="text-3xl font-black text-brand-700 tracking-tight">12</p>
                    <p className="text-xs font-medium text-ink-muted uppercase tracking-widest mt-1">Clients</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-black text-brand-700 tracking-tight">8</p>
                    <p className="text-xs font-medium text-ink-muted uppercase tracking-widest mt-1">Active</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-black text-accent-500 tracking-tight">3</p>
                    <p className="text-xs font-medium text-ink-muted uppercase tracking-widest mt-1">Reviews</p>
                  </div>
                </div>
                <div className="bg-cream-100 rounded-2xl p-5">
                  <p className="text-sm font-semibold text-ink mb-3 tracking-tight">AI Session Summary</p>
                  <ul className="text-sm text-ink-light space-y-1.5">
                    <li>• Discussed work-related anxiety</li>
                    <li>• Practiced breathing exercises</li>
                    <li>• Set goals for next week</li>
                  </ul>
                  <p className="mt-4 text-xs font-semibold text-brand-600 uppercase tracking-widest">Mood: Improving ↑</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}