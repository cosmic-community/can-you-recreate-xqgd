import { getLandingPage, getHowItWorksSteps, getMetafieldValue } from '@/lib/cosmic'
import HowItWorksSection from '@/components/HowItWorksSection'

export const metadata = {
  title: 'How It Works — Therapy Ally',
}

export default async function HowItWorksPage() {
  const [page, steps] = await Promise.all([
    getLandingPage(),
    getHowItWorksSteps(),
  ])

  const heading =
    (page && getMetafieldValue(page.metadata.how_it_works_heading)) || 'How It Works'
  const intro = page ? getMetafieldValue(page.metadata.how_it_works_intro) : ''

  return (
    <div className="pt-10">
      <HowItWorksSection heading={heading} intro={intro} steps={steps} />
    </div>
  )
}