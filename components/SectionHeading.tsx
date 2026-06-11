// Changed: Updated SectionHeading to match clinician.therapyally.ai heading style

interface SectionHeadingProps {
  heading: string
  intro?: string
  centered?: boolean
}

export default function SectionHeading({
  heading,
  intro,
  centered = false,
}: SectionHeadingProps) {
  const alignment = centered ? 'text-center' : 'text-left'

  return (
    <div className={`max-w-2xl ${centered ? 'mx-auto' : ''} ${alignment}`}>
      {/* Changed: Black-weight heading with tight letter spacing matching site */}
      <h2 className="text-3xl md:text-4xl font-black text-ink tracking-tight leading-none">
        {heading}
      </h2>
      {intro && (
        // Changed: Intro paragraph with muted ink and comfortable leading
        <p className="mt-4 text-base text-ink-light leading-relaxed">
          {intro}
        </p>
      )}
    </div>
  )
}