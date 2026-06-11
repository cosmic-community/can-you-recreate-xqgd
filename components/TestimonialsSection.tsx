import type { Testimonial } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function TestimonialsSection({
  testimonials,
}: {
  testimonials: Testimonial[]
}) {
  if (testimonials.length === 0) return null

  return (
    // Changed: Updated testimonials section to use deep navy matching production site
    <section className="py-24 bg-brand-900 text-white">
      <div className="container-padded">
        {/* Changed: Added section header for testimonials area */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white">What clinicians are saying</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t) => {
            const quote = getMetafieldValue(t.metadata?.quote)
            const name = getMetafieldValue(t.metadata?.author_name)
            const titleText = getMetafieldValue(t.metadata?.author_title)
            const initials = getMetafieldValue(t.metadata?.author_initials)
            const org = getMetafieldValue(t.metadata?.organization)
            return (
              <figure
                key={t.id}
                // Changed: Testimonial cards with subtle border and slightly lighter bg matching production
                className="bg-brand-800/60 rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-colors"
              >
                {/* Changed: Added large quote mark styling like production */}
                <div className="text-4xl text-brand-500 font-serif mb-4 leading-none">&ldquo;</div>
                <blockquote className="text-base leading-relaxed text-blue-50">
                  {quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-4">
                  {/* Changed: Avatar circle with accent color matching production */}
                  <div className="w-11 h-11 rounded-full bg-accent-500/20 border border-accent-500/40 flex items-center justify-center font-bold text-sm text-accent-300">
                    {initials}
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">{name}</p>
                    <p className="text-xs text-blue-200/60 mt-0.5">
                      {titleText}
                      {org ? `, ${org}` : ''}
                    </p>
                  </div>
                </figcaption>
              </figure>
            )
          })}
        </div>
      </div>
    </section>
  )
}