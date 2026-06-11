import type { LandingPage } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function Hero({ page }: { page: LandingPage }) {
  const m = page.metadata
  const screenshot = m.app_screenshot

  return (
    // Changed: Updated hero to use dark navy gradient matching production site
    <section className="relative overflow-hidden hero-gradient">
      <div className="container-padded py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            {getMetafieldValue(m.hero_eyebrow) && (
              // Changed: Updated eyebrow pill to use accent orange matching production
              <span className="inline-flex items-center text-xs font-semibold tracking-widest uppercase text-accent-400 bg-white/10 border border-white/20 px-3 py-1.5 rounded-full mb-6">
                {getMetafieldValue(m.hero_eyebrow)}
              </span>
            )}
            {/* Changed: White text for dark hero background */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
              {getMetafieldValue(m.hero_headline)}
            </h1>
            {getMetafieldValue(m.hero_subheadline) && (
              // Changed: Softer white/muted text for subheadline on dark bg
              <p className="mt-5 text-lg text-blue-100/80 font-normal leading-relaxed max-w-xl">
                {getMetafieldValue(m.hero_subheadline)}
              </p>
            )}
            {getMetafieldValue(m.hero_description) && (
              <p className="mt-4 text-base text-blue-100/60 leading-relaxed max-w-xl">
                {getMetafieldValue(m.hero_description)}
              </p>
            )}

            <div className="mt-10 flex flex-wrap gap-4">
              {getMetafieldValue(m.primary_cta_label) && (
                // Changed: Primary CTA uses teal accent matching production button style
                <a
                  href={getMetafieldValue(m.primary_cta_url) || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-accent-500 hover:bg-accent-400 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-accent-500/25 hover:shadow-accent-400/30 hover:-translate-y-0.5"
                >
                  {getMetafieldValue(m.primary_cta_label)}
                </a>
              )}
              {getMetafieldValue(m.secondary_cta_label) && (
                // Changed: Secondary CTA as outlined white button on dark bg
                <a
                  href={getMetafieldValue(m.secondary_cta_url) || '#'}
                  className="inline-flex items-center border border-white/30 hover:border-white/60 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 hover:bg-white/10"
                >
                  {getMetafieldValue(m.secondary_cta_label)}
                </a>
              )}
            </div>

            {getMetafieldValue(m.compliance_note) && (
              // Changed: Compliance note with muted white on dark background
              <p className="mt-6 text-sm text-blue-100/50 flex items-center gap-2">
                <span>🔒</span>
                {getMetafieldValue(m.compliance_note)}
              </p>
            )}
          </div>

          <div className="relative">
            {screenshot?.imgix_url ? (
              // Changed: Screenshot with subtle glow effect matching production
              <div className="relative">
                <div className="absolute inset-0 bg-brand-400/20 rounded-3xl blur-3xl scale-110" />
                <img
                  src={`${screenshot.imgix_url}?w=1200&h=900&fit=crop&auto=format,compress`}
                  alt="Therapy Ally dashboard preview"
                  width={600}
                  height={450}
                  className="relative rounded-2xl shadow-2xl border border-white/10 w-full h-auto"
                />
              </div>
            ) : (
              // Changed: Mock dashboard with dark card style matching production
              <div className="relative">
                <div className="absolute inset-0 bg-brand-400/20 rounded-3xl blur-3xl scale-110" />
                <div className="relative rounded-2xl shadow-2xl border border-white/10 bg-slate-800/60 backdrop-blur-sm p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-white">12</p>
                      <p className="text-xs text-blue-200/60 uppercase tracking-wide mt-1">Clients</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-white">8</p>
                      <p className="text-xs text-blue-200/60 uppercase tracking-wide mt-1">Active</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-accent-400">3</p>
                      <p className="text-xs text-blue-200/60 uppercase tracking-wide mt-1">Reviews</p>
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 border border-white/5">
                    <p className="text-sm font-semibold text-white mb-2">AI Session Summary</p>
                    <ul className="text-sm text-blue-100/70 space-y-1.5">
                      <li>• Discussed work-related anxiety</li>
                      <li>• Practiced breathing exercises</li>
                      <li>• Set goals for next week</li>
                    </ul>
                    <p className="mt-3 text-xs font-semibold text-accent-400">Mood: Improving ↑</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Changed: Added bottom wave/fade to transition from dark hero to white content */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}