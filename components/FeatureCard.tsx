import type { OrderedItem } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function FeatureCard({ item }: { item: OrderedItem }) {
  const emoji = getMetafieldValue(item.metadata?.icon_emoji)
  const title = getMetafieldValue(item.metadata?.title) || item.title
  const description = getMetafieldValue(item.metadata?.description)

  return (
    // Changed: Feature cards — white bg, teal-tinted subtle border matching production
    <div className="bg-white rounded-2xl border border-brand-100 p-7 hover:shadow-md hover:border-brand-200 transition-all duration-200">
      {emoji && (
        // Changed: Emoji in teal-tinted container matching production card icon style
        <div className="w-12 h-12 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center text-2xl mb-5">
          {emoji}
        </div>
      )}
      {/* Changed: Card title uses deep teal-dark text matching production */}
      <h3 className="text-base font-semibold text-hero-mid mb-2">{title}</h3>
      {description && (
        <p className="text-ink-light text-sm leading-relaxed">{description}</p>
      )}
    </div>
  )
}