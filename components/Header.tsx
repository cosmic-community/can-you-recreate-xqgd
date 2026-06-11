'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)

  const navLinks = [
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Privacy', href: '/privacy-features' },
    { label: 'Clinical Tools', href: '/clinical-features' },
    { label: 'Client Experience', href: '/client-experience' },
  ]

  return (
    // Changed: Updated header to match production site - clean white with subtle border
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="container-padded flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="text-xl">🧠</span>
          {/* Changed: Brand name uses deep navy matching production */}
          <span className="font-bold text-base text-brand-900 tracking-tight">Therapy Ally</span>
        </Link>

        {/* Changed: Nav links use darker text matching production */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-light hover:text-brand-700 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://clinician.therapyally.ai/login"
            target="_blank"
            rel="noopener noreferrer"
            // Changed: Sign in link with cleaner text style
            className="text-sm font-medium text-ink-light hover:text-brand-700 transition-colors"
          >
            Sign In
          </a>
          {/* Changed: CTA button uses orange accent matching production Get Started button */}
          <a
            href="https://clinician.therapyally.ai/clinician-signup"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold bg-accent-500 hover:bg-accent-400 text-white px-5 py-2 rounded-lg transition-all duration-200 shadow-sm hover:shadow-accent-400/25"
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
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-ink-light hover:text-brand-700 py-1.5"
              >
                {link.label}
              </Link>
            ))}
            {/* Changed: Mobile CTA uses accent orange */}
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