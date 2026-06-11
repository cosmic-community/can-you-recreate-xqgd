import { getLandingPage, getClinicalFeatures, getMetafieldValue } from '@/lib/cosmic'
import ClinicalSection from '@/components/ClinicalSection'

export const metadata = {
  title: 'Clinical Tools — Therapy Ally',
}

export default async function ClinicalFeaturesPage() {
  const [page, features] = await Promise.all([
    getLandingPage(),
    getClinicalFeatures(),
  ])

  const heading =
    (page && getMetafieldValue(page.metadata.clinical_heading)) || 'Clinical Tools'
  const intro = page ? getMetafieldValue(page.metadata.clinical_intro) : ''

  return (
    <div className="pt-10">
      <ClinicalSection heading={heading} intro={intro} features={features} />
    </div>
  )
}