import type { Testimonial } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function TestimonialsSection({
  testimonials,
}: {
  testimonials: Testimonial[]
}) {
  if (testimonials.length === 0) return null

  return (
    // Changed: Deep navy background matching site's testimonial section
    <section className="py-24" id="testimonials" style={{ backgroundColor: '#07141a' }}>
      <div className="container-padded">
        {/* Changed: Section label in testimonials header */}
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#3fa89f' }}>
            What clinicians say
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
            Trusted by therapists
          </h2>
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
                // Changed: Slightly lighter navy card on dark background
                className="rounded-2xl p-8"
                style={{ backgroundColor: '#0c1d22', border: '1px solid #132830' }}
              >
                <blockquote className="text-base leading-relaxed" style={{ color: '#c8d8dd' }}>
                  &ldquo;{quote}&rdquo;
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-4">
                  {/* Changed: Initials circle in brand teal */}
                  <div className="w-11 h-11 rounded-full bg-brand-600 flex items-center justify-center font-bold text-sm text-white flex-shrink-0">
                    {initials}
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">{name}</p>
                    <p className="text-xs mt-0.5" style={{ color: '#487e90' }}>
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