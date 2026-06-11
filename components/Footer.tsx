import Link from 'next/link'

export default function Footer() {
  return (
    // Changed: Footer uses deep teal-dark matching production footer bg
    <footer className="bg-hero-darkest text-white">
      <div className="container-padded py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="text-xl">🧠</span>
              <span className="font-bold text-base tracking-tight text-white">Therapy Ally</span>
            </div>
            <p className="text-white/35 text-sm leading-relaxed max-w-xs">
              Structured AI support for modern therapy practices. Built with a
              privacy-first architecture designed for HIPAA compliance.
            </p>
          </div>

          <div>
            {/* Changed: Footer column headings slightly brighter matching production */}
            <h4 className="font-semibold text-xs tracking-widest uppercase text-white/50 mb-5">Explore</h4>
            <ul className="space-y-3 text-sm text-white/35">
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#privacy" className="hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#clinical" className="hover:text-white transition-colors">Clinical Tools</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-xs tracking-widest uppercase text-white/50 mb-5">Account</h4>
            <ul className="space-y-3 text-sm text-white/35">
              <li>
                <a href="https://clinician.therapyally.ai/clinician-signup" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Get Started
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

        {/* Changed: Footer divider and copyright — very muted matching production */}
        <div className="border-t border-white/5 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/20">
          <span>© {new Date().getFullYear()} Therapy Ally. All rights reserved.</span>
          <span>Built for mental health professionals</span>
        </div>
      </div>
    </footer>
  )
}