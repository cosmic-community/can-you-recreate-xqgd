import Link from 'next/link'

export default function Footer() {
  return (
    // Changed: Footer uses deepest navy matching production site footer
    <footer className="bg-brand-900 text-white">
      <div className="container-padded py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="text-xl">🧠</span>
              {/* Changed: Footer brand name in clean white */}
              <span className="font-bold text-base tracking-tight">Therapy Ally</span>
            </div>
            <p className="text-blue-200/50 text-sm leading-relaxed max-w-xs">
              Structured AI support for modern therapy practices. Built with a
              privacy-first architecture designed for HIPAA compliance.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm tracking-wide mb-5 text-white/80">Explore</h4>
            <ul className="space-y-3 text-sm text-blue-200/50">
              <li><Link href="/how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
              <li><Link href="/privacy-features" className="hover:text-white transition-colors">Privacy</Link></li>
              <li><Link href="/clinical-features" className="hover:text-white transition-colors">Clinical Tools</Link></li>
              <li><Link href="/client-experience" className="hover:text-white transition-colors">Client Experience</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm tracking-wide mb-5 text-white/80">Account</h4>
            <ul className="space-y-3 text-sm text-blue-200/50">
              <li>
                <a href="https://clinician.therapyally.ai/clinician-signup" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Clinician Console
                </a>
              </li>
              <li>
                <a href="https://clinician.therapyally.ai/login" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Sign In
                </a>
              </li>
              <li>
                <a href="https://clinician.therapyally.ai/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="https://clinician.therapyally.ai/terms" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Changed: Footer bottom bar with subtler divider */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-blue-200/30">
          <span>© {new Date().getFullYear()} Therapy Ally. All rights reserved.</span>
          <span>Built for mental health professionals</span>
        </div>
      </div>
    </footer>
  )
}