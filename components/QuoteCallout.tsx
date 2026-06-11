export default function QuoteCallout({ quote }: { quote: string }) {
  if (!quote) return null

  return (
    // Changed: Updated quote section to match production - subtle off-white bg with border accent
    <section className="py-16 bg-brand-50">
      <div className="container-padded">
        <div className="max-w-4xl mx-auto text-center">
          {/* Changed: Large open-quote mark matching production style */}
          <div className="text-6xl text-brand-200 font-serif leading-none mb-4">&ldquo;</div>
          <blockquote className="text-xl md:text-2xl font-medium text-brand-800 leading-relaxed">
            {quote}
          </blockquote>
        </div>
      </div>
    </section>
  )
}