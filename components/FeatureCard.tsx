import type { OrderedItem } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function FeatureCard({ item }: { item: OrderedItem }) {
  const emoji = getMetafieldValue(item.metadata?.icon_emoji)
  const title = getMetafieldValue(item.metadata?.title) || item.title
  const description = getMetafieldValue(item.metadata?.description)

  return (
    // Changed: White cards with subtle border and stronger hover shadow matching site
    <div className="bg-white rounded-2xl border p-7 shadow-sm hover:shadow-lg transition-all duration-200" style={{ borderColor: '#ebe4d5' }}>
      {/* Changed: Emoji icon with light cream circle background */}
      {emoji && (
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-5 text-2xl" style={{ backgroundColor: '#f0eeea' }}>
          {emoji}
        </div>
      )}
      <h3 className="text-base font-bold text-ink mb-2 tracking-tight">{title}</h3>
      {description && (
        <p className="text-ink-light text-sm leading-relaxed">{description}</p>
      )}
    </div>
  )
}