// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, unknown>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface CosmicImage {
  url: string;
  imgix_url: string;
}

export interface LandingPage extends CosmicObject {
  type: 'landing-page';
  metadata: {
    page_title?: string;
    meta_description?: string;
    hero_eyebrow?: string;
    hero_headline?: string;
    hero_subheadline?: string;
    hero_description?: string;
    primary_cta_label?: string;
    primary_cta_url?: string;
    secondary_cta_label?: string;
    secondary_cta_url?: string;
    compliance_note?: string;
    quote_callout?: string;
    how_it_works_heading?: string;
    how_it_works_intro?: string;
    privacy_heading?: string;
    privacy_intro?: string;
    clinical_heading?: string;
    clinical_intro?: string;
    final_cta_heading?: string;
    final_cta_subtext?: string;
    logo_image?: CosmicImage;
    app_screenshot?: CosmicImage;
  };
}

export interface HowItWorksStep extends CosmicObject {
  type: 'how-it-works-steps';
  metadata: {
    step_number?: number;
    title?: string;
    description?: string;
    icon_emoji?: string;
    order?: number;
  };
}

export interface PrivacyFeature extends CosmicObject {
  type: 'privacy-features';
  metadata: {
    title?: string;
    description?: string;
    icon_emoji?: string;
    order?: number;
  };
}

export interface ClinicalFeature extends CosmicObject {
  type: 'clinical-features';
  metadata: {
    title?: string;
    description?: string;
    icon_emoji?: string;
    order?: number;
  };
}

export interface ClientExperienceItem extends CosmicObject {
  type: 'client-experience-items';
  metadata: {
    title?: string;
    description?: string;
    icon_emoji?: string;
    order?: number;
  };
}

export interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    quote?: string;
    author_name?: string;
    author_title?: string;
    author_initials?: string;
    organization?: string;
  };
}

// Generic ordered item used by several card grids
export interface OrderedItem extends CosmicObject {
  metadata: {
    title?: string;
    description?: string;
    icon_emoji?: string;
    order?: number;
  };
}

export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}