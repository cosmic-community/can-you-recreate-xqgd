export default function QuoteCallout({ quote }: { quote: string }) {
  if (!quote) return null

  return (
    <section className="py-16 bg-white">
      <div className="container-padded">
        <blockquote className="max-w-4xl mx-auto text-center text-2xl md:text-3xl font-medium text-brand-700 leading-snug">
          “{quote}”
        </blockquote>
      </div>
    </section>
  )
}