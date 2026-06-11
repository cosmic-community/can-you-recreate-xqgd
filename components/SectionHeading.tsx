export default function SectionHeading({
  heading,
  intro,
  center = true,
}: {
  heading: string
  intro?: string
  center?: boolean
}) {
  return (
    // Changed: Section heading uses deep teal-dark ink color matching production
    <div className={`max-w-3xl ${center ? 'mx-auto text-center' : ''} mb-12`}>
      <h2 className="text-3xl md:text-4xl font-bold text-hero-mid tracking-tight">{heading}</h2>
      {intro && (
        <p className="mt-4 text-lg text-ink-light leading-relaxed">{intro}</p>
      )}
    </div>
  )
}