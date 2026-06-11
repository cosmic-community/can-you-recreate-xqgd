import { getLandingPage, getPrivacyFeatures, getMetafieldValue } from '@/lib/cosmic'
import PrivacySection from '@/components/PrivacySection'

export const metadata = {
  title: 'Privacy & Security — Therapy Ally',
}

export default async function PrivacyFeaturesPage() {
  const [page, features] = await Promise.all([
    getLandingPage(),
    getPrivacyFeatures(),
  ])

  const heading =
    (page && getMetafieldValue(page.metadata.privacy_heading)) || 'Privacy & Security'
  const intro = page ? getMetafieldValue(page.metadata.privacy_intro) : ''

  return (
    <div className="pt-10">
      <PrivacySection heading={heading} intro={intro} features={features} />
    </div>
  )
}