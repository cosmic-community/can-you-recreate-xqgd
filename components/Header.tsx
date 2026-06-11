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
    // Changed: White header with subtle border matching site's clean nav bar
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-cream-200" style={{ borderColor: '#ebe4d5' }}>
      <div className="container-padded flex items-center justify-between h-[68px]">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="text-2xl">🧠</span>
          {/* Changed: Brand name in dark navy matching site logo style */}
          <span className="font-black text-lg tracking-tight text-navy-900">Therapy Ally</span>
        </Link>

        {/* Changed: Nav links with tighter tracking and muted default color */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-light hover:text-brand-600 transition-colors tracking-wide"
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
            className="text-sm font-medium text-ink-light hover:text-brand-600 transition-colors"
          >
            Sign In
          </a>
          {/* Changed: Pill-style CTA button matching site */}
          <a
            href="https://clinician.therapyally.ai/clinician-signup"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold bg-brand-600 hover:bg-brand-700 text-white px-5 py-2.5 rounded-full transition-all duration-200 shadow-sm"
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
        <div className="md:hidden border-t bg-white" style={{ borderColor: '#ebe4d5' }}>
          <div className="container-padded py-5 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-ink-light hover:text-brand-600 py-1 tracking-wide"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://clinician.therapyally.ai/clinician-signup"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold bg-brand-600 text-white px-5 py-3 rounded-full text-center mt-2"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  )
}