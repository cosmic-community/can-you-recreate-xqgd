import { createBucketClient } from '@cosmicjs/sdk'
import type {
  LandingPage,
  HowItWorksStep,
  PrivacyFeature,
  ClinicalFeature,
  ClientExperienceItem,
  Testimonial,
  OrderedItem,
} from '@/types'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
})

// Simple error helper for Cosmic SDK
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error
}

// Safely render any metafield value as a string
export function getMetafieldValue(field: unknown): string {
  if (field === null || field === undefined) return ''
  if (typeof field === 'string') return field
  if (typeof field === 'number' || typeof field === 'boolean') return String(field)
  if (typeof field === 'object' && field !== null && 'value' in field) {
    return String((field as { value: unknown }).value)
  }
  if (typeof field === 'object' && field !== null && 'key' in field) {
    return String((field as { key: unknown }).key)
  }
  return ''
}

function sortByOrder<T extends OrderedItem>(items: T[]): T[] {
  return [...items].sort((a, b) => {
    const aOrder = typeof a.metadata?.order === 'number' ? a.metadata.order : 9999
    const bOrder = typeof b.metadata?.order === 'number' ? b.metadata.order : 9999
    return aOrder - bOrder
  })
}

export async function getLandingPage(): Promise<LandingPage | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'landing-page' })
      .depth(1)
    return response.object as LandingPage
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error('Failed to fetch landing page')
  }
}

export async function getHowItWorksSteps(): Promise<HowItWorksStep[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'how-it-works-steps' })
      .depth(1)
    const steps = response.objects as HowItWorksStep[]
    return [...steps].sort((a, b) => {
      const aNum = typeof a.metadata?.step_number === 'number' ? a.metadata.step_number : 9999
      const bNum = typeof b.metadata?.step_number === 'number' ? b.metadata.step_number : 9999
      return aNum - bNum
    })
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch how-it-works steps')
  }
}

export async function getPrivacyFeatures(): Promise<PrivacyFeature[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'privacy-features' })
      .depth(1)
    return sortByOrder(response.objects as PrivacyFeature[])
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch privacy features')
  }
}

export async function getClinicalFeatures(): Promise<ClinicalFeature[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'clinical-features' })
      .depth(1)
    return sortByOrder(response.objects as ClinicalFeature[])
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch clinical features')
  }
}

export async function getClientExperienceItems(): Promise<ClientExperienceItem[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'client-experience-items' })
      .depth(1)
    return sortByOrder(response.objects as ClientExperienceItem[])
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch client experience items')
  }
}

export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'testimonials' })
      .depth(1)
    return response.objects as Testimonial[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch testimonials')
  }
}