export default function QuoteCallout({ quote }: { quote: string }) {
  if (!quote) return null

  return (
    // Changed: Cream background section with large italic quote matching site
    <section className="py-20" style={{ backgroundColor: '#f0eeea' }}>
      <div className="container-padded">
        <blockquote className="max-w-3xl mx-auto text-center">
          {/* Changed: Large, italic, tight tracking quote style */}
          <p className="text-2xl md:text-3xl font-medium text-navy-900 leading-snug tracking-tight italic" style={{ color: '#0c1d22' }}>
            &ldquo;{quote}&rdquo;
          </p>
        </blockquote>
      </div>
    </section>
  )
}