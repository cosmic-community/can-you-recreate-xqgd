import type { LandingPage } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function Hero({ page }: { page: LandingPage }) {
  const m = page.metadata
  const screenshot = m.app_screenshot

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white">
      <div className="container-padded py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            {getMetafieldValue(m.hero_eyebrow) && (
              <span className="inline-block text-sm font-semibold tracking-wide uppercase text-brand-600 bg-brand-100 px-3 py-1 rounded-full mb-5">
                {getMetafieldValue(m.hero_eyebrow)}
              </span>
            )}
            <h1 className="text-4xl md:text-5xl font-extrabold text-ink leading-tight">
              {getMetafieldValue(m.hero_headline)}
            </h1>
            {getMetafieldValue(m.hero_subheadline) && (
              <p className="mt-4 text-xl text-brand-700 font-medium">
                {getMetafieldValue(m.hero_subheadline)}
              </p>
            )}
            {getMetafieldValue(m.hero_description) && (
              <p className="mt-5 text-lg text-ink-light leading-relaxed max-w-xl">
                {getMetafieldValue(m.hero_description)}
              </p>
            )}

            <div className="mt-8 flex flex-wrap gap-4">
              {getMetafieldValue(m.primary_cta_label) && (
                <a
                  href={getMetafieldValue(m.primary_cta_url) || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-600 hover:bg-brand-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  {getMetafieldValue(m.primary_cta_label)}
                </a>
              )}
              {getMetafieldValue(m.secondary_cta_label) && (
                <a
                  href={getMetafieldValue(m.secondary_cta_url) || '#'}
                  className="border border-brand-300 hover:border-brand-500 text-brand-700 font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  {getMetafieldValue(m.secondary_cta_label)}
                </a>
              )}
            </div>

            {getMetafieldValue(m.compliance_note) && (
              <p className="mt-6 text-sm text-ink-light flex items-center gap-2">
                <span>🔒</span>
                {getMetafieldValue(m.compliance_note)}
              </p>
            )}
          </div>

          <div className="relative">
            {screenshot?.imgix_url ? (
              <img
                src={`${screenshot.imgix_url}?w=1200&h=900&fit=crop&auto=format,compress`}
                alt="Therapy Ally dashboard preview"
                width={600}
                height={450}
                className="rounded-2xl shadow-2xl border border-gray-100 w-full h-auto"
              />
            ) : (
              <div className="rounded-2xl shadow-2xl border border-gray-100 bg-white p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-3xl font-bold text-brand-700">12</p>
                    <p className="text-xs text-ink-light uppercase">Clients</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-brand-700">8</p>
                    <p className="text-xs text-ink-light uppercase">Active</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-accent-500">3</p>
                    <p className="text-xs text-ink-light uppercase">Reviews</p>
                  </div>
                </div>
                <div className="bg-brand-50 rounded-xl p-4">
                  <p className="text-sm font-semibold text-ink mb-2">AI Session Summary</p>
                  <ul className="text-sm text-ink-light space-y-1">
                    <li>• Discussed work-related anxiety</li>
                    <li>• Practiced breathing exercises</li>
                    <li>• Set goals for next week</li>
                  </ul>
                  <p className="mt-3 text-xs font-medium text-brand-600">Mood: Improving</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}