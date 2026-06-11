# Therapy Ally Clinician Console

![App Preview](https://imgix.cosmicjs.com/e125d2a0-65be-11f1-8e52-17b2565830aa-autopilot-photo-1582213782179-e0d53f98f2ca-1781200592005.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A beautiful, modern, and fully responsive recreation of the Therapy Ally™ clinician website, built with Next.js 16 and powered by [Cosmic](https://www.cosmicjs.com). This application brings structured AI support content for mental health professionals into a fast, content-driven marketing site.

## Features

- 🏠 **Dynamic Landing Page** — Hero, how-it-works, privacy, clinical tools, client experience, testimonials, and final CTA all powered by Cosmic
- 🔢 **How It Works** — Ordered, step-by-step onboarding flow
- 🔒 **Privacy Features** — Privacy-first architecture cards for HIPAA-aligned trust
- 🛠️ **Clinical Tools** — Workflow-focused feature grid for clinicians
- 💬 **Client Experience** — A dedicated page covering the client-side journey
- 🗣️ **Testimonials** — Real practitioner quotes with attribution
- 📱 **Fully Responsive** — Mobile-first layout with a clean, calming therapeutic aesthetic
- ⚡ **Server Components** — Fast data fetching with Next.js App Router

## Clone this Project

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6a2af644c3293c121782aeb1&clone_repository=6a2af772c3293c121782af15)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for: Can you recreate the entire site here by scraping the html and css and then bringing it into this cms with the same sections and styling\"

### Code Generation Prompt

> "Build a Next.js application for a website called "Can you recreate". The content is managed in Cosmic CMS with the following object types: landing-page, how-it-works-steps, privacy-features, clinical-features, client-experience-items, testimonials. Create a beautiful, modern, responsive design with a homepage and pages for each content type. Can you recreate the entire site here by scraping the html and css and then bringing it into this cms with the same sections and styling"

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Cosmic](https://www.cosmicjs.com/docs)

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) or Node.js 18+
- A Cosmic account with the bucket containing your content

### Installation

```bash
bun install
```

Create your environment variables (these are provided automatically when cloning in Cosmic):

```
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

Run the development server:

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Cosmic SDK Examples

```typescript
import { cosmic } from '@/lib/cosmic'

// Fetch the landing page singleton
const { object } = await cosmic.objects
  .findOne({ type: 'landing-page' })
  .depth(1)

// Fetch ordered how-it-works steps
const { objects } = await cosmic.objects
  .find({ type: 'how-it-works-steps' })
  .depth(1)
```

## Cosmic CMS Integration

This app reads from these Cosmic object types:

- `landing-page` — Singleton with all page copy and imagery
- `how-it-works-steps` — Ordered onboarding steps
- `privacy-features` — Privacy/security cards
- `clinical-features` — Clinician tool cards
- `client-experience-items` — Client journey cards
- `testimonials` — Practitioner quotes

Learn more in the [Cosmic docs](https://www.cosmicjs.com/docs).

## Deployment Options

- **Vercel** — Import the repo and set the three Cosmic environment variables
- **Netlify** — Configure build command `bun run build` and the environment variables

Set `COSMIC_BUCKET_SLUG`, `COSMIC_READ_KEY`, and `COSMIC_WRITE_KEY` in your hosting dashboard.
<!-- README_END -->