import type { OrderedItem } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function FeatureCard({ item }: { item: OrderedItem }) {
  const emoji = getMetafieldValue(item.metadata?.icon_emoji)
  const title = getMetafieldValue(item.metadata?.title) || item.title
  const description = getMetafieldValue(item.metadata?.description)

  return (
    // Changed: Feature cards updated to match production - white bg, stronger shadow on hover, rounded corners
    <div className="bg-white rounded-2xl border border-gray-100 p-7 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
      {emoji && (
        // Changed: Emoji in branded pill container matching production card icons
        <div className="w-12 h-12 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center text-2xl mb-5">
          {emoji}
        </div>
      )}
      <h3 className="text-base font-semibold text-ink mb-2">{title}</h3>
      {description && (
        <p className="text-ink-light text-sm leading-relaxed">{description}</p>
      )}
    </div>
  )
}