import type { LandingPage } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function Hero({ page }: { page: LandingPage }) {
  const m = page.metadata
  const screenshot = m.app_screenshot

  return (
    // Changed: Hero uses corrected deep teal-dark gradient matching production
    <section className="relative overflow-hidden hero-gradient">
      <div className="container-padded pt-20 pb-28 lg:pt-28 lg:pb-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            {getMetafieldValue(m.hero_eyebrow) && (
              // Changed: Eyebrow pill — teal tinted border on dark bg matching production
              <span className="inline-flex items-center text-xs font-semibold tracking-widest uppercase text-accent-300 bg-white/5 border border-accent-500/30 px-3 py-1.5 rounded-full mb-6">
                {getMetafieldValue(m.hero_eyebrow)}
              </span>
            )}
            {/* Changed: White heading on dark teal bg */}
            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-white leading-tight tracking-tight">
              {getMetafieldValue(m.hero_headline)}
            </h1>
            {getMetafieldValue(m.hero_subheadline) && (
              // Changed: Slightly muted white subheadline matching production
              <p className="mt-5 text-lg text-white/75 font-normal leading-relaxed max-w-xl">
                {getMetafieldValue(m.hero_subheadline)}
              </p>
            )}
            {getMetafieldValue(m.hero_description) && (
              <p className="mt-4 text-base text-white/50 leading-relaxed max-w-xl">
                {getMetafieldValue(m.hero_description)}
              </p>
            )}

            <div className="mt-10 flex flex-wrap gap-4">
              {getMetafieldValue(m.primary_cta_label) && (
                // Changed: Primary CTA corrected to teal-green matching production
                <a
                  href={getMetafieldValue(m.primary_cta_url) || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-accent-500 hover:bg-accent-400 text-white font-semibold px-7 py-3.5 rounded-lg transition-all duration-200 shadow-lg hover:-translate-y-0.5"
                >
                  {getMetafieldValue(m.primary_cta_label)}
                </a>
              )}
              {getMetafieldValue(m.secondary_cta_label) && (
                // Changed: Secondary CTA outlined white button on dark bg
                <a
                  href={getMetafieldValue(m.secondary_cta_url) || '#'}
                  className="inline-flex items-center border border-white/25 hover:border-white/50 text-white font-semibold px-7 py-3.5 rounded-lg transition-all duration-200 hover:bg-white/5"
                >
                  {getMetafieldValue(m.secondary_cta_label)}
                </a>
              )}
            </div>

            {getMetafieldValue(m.compliance_note) && (
              // Changed: Compliance note muted on dark background
              <p className="mt-6 text-sm text-white/40 flex items-center gap-2">
                <span>🔒</span>
                {getMetafieldValue(m.compliance_note)}
              </p>
            )}
          </div>

          <div className="relative">
            {screenshot?.imgix_url ? (
              // Changed: Screenshot card on dark bg with subtle border
              <div className="relative">
                <div className="absolute inset-0 bg-accent-500/10 rounded-3xl blur-3xl scale-110" />
                <img
                  src={`${screenshot.imgix_url}?w=1200&h=900&fit=crop&auto=format,compress`}
                  alt="Therapy Ally dashboard preview"
                  width={600}
                  height={450}
                  className="relative rounded-2xl shadow-2xl border border-white/10 w-full h-auto"
                />
              </div>
            ) : (
              // Changed: Mock dashboard — dark card matching production app preview
              <div className="relative">
                <div className="absolute inset-0 bg-accent-500/10 rounded-3xl blur-3xl scale-110" />
                <div className="relative rounded-2xl shadow-2xl border border-white/10 bg-hero-dark/80 backdrop-blur-sm overflow-hidden">
                  {/* Dashboard header bar */}
                  <div className="bg-hero-darkest/80 px-6 py-4 border-b border-white/5 flex items-center justify-between">
                    <span className="text-sm font-semibold text-white/80">Clinician Console</span>
                    <span className="text-xs text-accent-400 font-medium">● Live</span>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="bg-white/5 rounded-xl p-4 text-center">
                        <p className="text-2xl font-bold text-white">12</p>
                        <p className="text-xs text-white/40 mt-1">Clients</p>
                      </div>
                      <div className="bg-white/5 rounded-xl p-4 text-center">
                        <p className="text-2xl font-bold text-white">8</p>
                        <p className="text-xs text-white/40 mt-1">Active</p>
                      </div>
                      <div className="bg-accent-500/20 rounded-xl p-4 text-center border border-accent-500/30">
                        <p className="text-2xl font-bold text-accent-300">3</p>
                        <p className="text-xs text-accent-400/70 mt-1">Reviews</p>
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-5 border border-white/5">
                      <div className="flex items-center justify-between mb-3">
                        <p className="text-sm font-semibold text-white">Session Summary</p>
                        <span className="text-xs text-accent-400 bg-accent-500/10 px-2 py-0.5 rounded-full">AI Generated</span>
                      </div>
                      <ul className="text-sm text-white/55 space-y-2">
                        <li className="flex items-start gap-2"><span className="text-accent-400 mt-0.5">·</span>Discussed work-related anxiety</li>
                        <li className="flex items-start gap-2"><span className="text-accent-400 mt-0.5">·</span>Practiced breathing exercises</li>
                        <li className="flex items-start gap-2"><span className="text-accent-400 mt-0.5">·</span>Set goals for next week</li>
                      </ul>
                      <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
                        <span className="text-xs text-white/30">Mood trend</span>
                        <span className="text-xs font-semibold text-accent-400">Improving ↑</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Changed: Fade to white for seamless section transition */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}