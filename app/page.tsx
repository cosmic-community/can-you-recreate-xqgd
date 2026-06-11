import {
  getLandingPage,
  getHowItWorksSteps,
  getPrivacyFeatures,
  getClinicalFeatures,
  getTestimonials,
  getMetafieldValue,
} from '@/lib/cosmic'
import Hero from '@/components/Hero'
import QuoteCallout from '@/components/QuoteCallout'
import HowItWorksSection from '@/components/HowItWorksSection'
import PrivacySection from '@/components/PrivacySection'
import ClinicalSection from '@/components/ClinicalSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import FinalCTA from '@/components/FinalCTA'

export default async function HomePage() {
  const [page, steps, privacy, clinical, testimonials] = await Promise.all([
    getLandingPage(),
    getHowItWorksSteps(),
    getPrivacyFeatures(),
    getClinicalFeatures(),
    getTestimonials(),
  ])

  if (!page) {
    return (
      <div className="container-padded py-32 text-center">
        <h1 className="text-2xl font-bold text-ink">No landing page found</h1>
        <p className="mt-2 text-ink-light">
          Add a Landing Page object in Cosmic to populate this site.
        </p>
      </div>
    )
  }

  const m = page.metadata

  return (
    <>
      <Hero page={page} />
      <QuoteCallout quote={getMetafieldValue(m.quote_callout)} />
      <HowItWorksSection
        heading={getMetafieldValue(m.how_it_works_heading) || 'How It Works'}
        intro={getMetafieldValue(m.how_it_works_intro)}
        steps={steps}
      />
      <PrivacySection
        heading={getMetafieldValue(m.privacy_heading) || 'Privacy'}
        intro={getMetafieldValue(m.privacy_intro)}
        features={privacy}
      />
      <ClinicalSection
        heading={getMetafieldValue(m.clinical_heading) || 'Clinical Tools'}
        intro={getMetafieldValue(m.clinical_intro)}
        features={clinical}
      />
      <TestimonialsSection testimonials={testimonials} />
      <FinalCTA page={page} />
    </>
  )
}