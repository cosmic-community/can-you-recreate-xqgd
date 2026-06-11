import type { Testimonial } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function TestimonialsSection({
  testimonials,
}: {
  testimonials: Testimonial[]
}) {
  if (testimonials.length === 0) return null

  return (
    // Changed: Testimonials section uses deep teal-dark hero gradient matching production
    <section className="py-24 hero-gradient">
      <div className="container-padded">
        <div className="text-center mb-12">
          {/* Changed: Section heading in white on dark bg */}
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">What clinicians are saying</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => {
            const quote = getMetafieldValue(t.metadata?.quote)
            const name = getMetafieldValue(t.metadata?.author_name)
            const titleText = getMetafieldValue(t.metadata?.author_title)
            const initials = getMetafieldValue(t.metadata?.author_initials)
            const org = getMetafieldValue(t.metadata?.organization)
            return (
              <figure
                key={t.id}
                // Changed: Testimonial cards — dark teal card with teal left accent border matching production
                className="bg-white/5 rounded-2xl p-8 border border-white/10 border-l-4 border-l-accent-500"
              >
                <blockquote className="text-base leading-relaxed text-white/80 mb-6">
                  &ldquo;{quote}&rdquo;
                </blockquote>
                <figcaption className="flex items-center gap-4">
                  {/* Changed: Avatar with teal-green accent matching production */}
                  <div className="w-10 h-10 rounded-full bg-accent-500/25 border border-accent-500/50 flex items-center justify-center font-bold text-sm text-accent-300 flex-shrink-0">
                    {initials}
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">{name}</p>
                    <p className="text-xs text-white/40 mt-0.5">
                      {titleText}
                      {org ? ` · ${org}` : ''}
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