import type { OrderedItem } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function FeatureCard({ item }: { item: OrderedItem }) {
  const emoji = getMetafieldValue(item.metadata?.icon_emoji)
  const title = getMetafieldValue(item.metadata?.title) || item.title
  const description = getMetafieldValue(item.metadata?.description)

  return (
    <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow">
      {emoji && <div className="text-3xl mb-4">{emoji}</div>}
      <h3 className="text-lg font-semibold text-ink mb-2">{title}</h3>
      {description && (
        <p className="text-ink-light text-sm leading-relaxed">{description}</p>
      )}
    </div>
  )
}