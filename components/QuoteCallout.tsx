export default function QuoteCallout({ quote }: { quote: string }) {
  if (!quote) return null

  return (
    // Changed: Production-accurate quote style — light teal-tinted bg with left accent border
    <section className="py-16 bg-[#f0f5f5]">
      <div className="container-padded">
        <div className="max-w-3xl mx-auto">
          {/* Changed: Left border accent quote style matching production */}
          <blockquote className="border-l-4 border-accent-500 pl-8 py-2">
            <p className="text-xl md:text-2xl font-medium text-hero-mid leading-relaxed">
              &ldquo;{quote}&rdquo;
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  )
}