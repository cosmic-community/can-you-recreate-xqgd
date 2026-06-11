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
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="container-padded flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🧠</span>
          <span className="font-bold text-lg text-brand-700">Therapy Ally</span>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-light hover:text-brand-600 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://clinician.therapyally.ai/login"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-ink-light hover:text-brand-600"
          >
            Sign In
          </a>
          <a
            href="https://clinician.therapyally.ai/clinician-signup"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold bg-brand-600 hover:bg-brand-700 text-white px-4 py-2 rounded-lg transition-colors"
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
                className="text-sm font-medium text-ink-light hover:text-brand-600 py-1"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://clinician.therapyally.ai/clinician-signup"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold bg-brand-600 text-white px-4 py-2 rounded-lg text-center"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  )
}