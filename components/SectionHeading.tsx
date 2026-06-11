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
    <div className={`max-w-3xl ${center ? 'mx-auto text-center' : ''} mb-12`}>
      <h2 className="text-3xl md:text-4xl font-bold text-ink">{heading}</h2>
      {intro && (
        <p className="mt-4 text-lg text-ink-light leading-relaxed">{intro}</p>
      )}
    </div>
  )
}