import type { Testimonial } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function TestimonialsSection({
  testimonials,
}: {
  testimonials: Testimonial[]
}) {
  if (testimonials.length === 0) return null

  return (
    <section className="py-20 bg-brand-900 text-white">
      <div className="container-padded">
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
                className="bg-brand-800 rounded-2xl p-8"
              >
                <blockquote className="text-lg leading-relaxed text-brand-50">
                  “{quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-600 flex items-center justify-center font-bold">
                    {initials}
                  </div>
                  <div>
                    <p className="font-semibold">{name}</p>
                    <p className="text-sm text-brand-200">
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