'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)

  const navLinks = [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Privacy', href: '#privacy' },
    { label: 'Clinical Tools', href: '#clinical' },
  ]

  return (
    // Changed: White header with very subtle bottom border — matches production exactly
    <header className="sticky top-0 z-40 bg-white border-b border-gray-100">
      <div className="container-padded flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="text-xl">🧠</span>
          {/* Changed: Brand name in deep teal-dark matching production */}
          <span className="font-bold text-base text-hero-mid tracking-tight">Therapy Ally</span>
        </Link>

        {/* Changed: Nav links use medium gray matching production nav style */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-light hover:text-brand-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://clinician.therapyally.ai/login"
            target="_blank"
            rel="noopener noreferrer"
            // Changed: Sign in uses muted text matching production
            className="text-sm font-medium text-ink-light hover:text-brand-600 transition-colors"
          >
            Sign In
          </a>
          {/* Changed: CTA button corrected to teal-green matching production Get Started */}
          <a
            href="https://clinician.therapyally.ai/clinician-signup"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold bg-accent-500 hover:bg-accent-600 text-white px-5 py-2 rounded-lg transition-all duration-200 shadow-sm"
          >
            Get Started
          </a>
        </div>

        <button
          className="md:hidden p-2 text-ink"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="container-padded py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-ink-light hover:text-brand-600 py-1.5"
              >
                {link.label}
              </a>
            ))}
            {/* Changed: Mobile CTA uses teal-green accent */}
            <a
              href="https://clinician.therapyally.ai/clinician-signup"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold bg-accent-500 text-white px-4 py-2.5 rounded-lg text-center mt-1"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  )
}