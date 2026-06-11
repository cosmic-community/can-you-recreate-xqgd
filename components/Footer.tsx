import Link from 'next/link'

export default function Footer() {
  return (
    // Changed: Deep navy footer matching clinician.therapyally.ai dark footer
    <footer className="bg-navy-950 text-white mt-24" style={{ backgroundColor: '#07141a' }}>
      <div className="container-padded py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <span className="text-2xl">🧠</span>
              {/* Changed: White brand name, black weight */}
              <span className="font-black text-lg tracking-tight text-white">Therapy Ally</span>
            </div>
            <p className="text-navy-300 text-sm leading-relaxed max-w-xs" style={{ color: '#6d9bab' }}>
              Structured AI support for modern therapy practices. Built with a
              privacy-first architecture designed for HIPAA compliance.
            </p>
          </div>

          <div>
            {/* Changed: Section headings in lighter tone */}
            <h4 className="font-semibold text-sm uppercase tracking-widest mb-5 text-white/60">Explore</h4>
            <ul className="space-y-3 text-sm" style={{ color: '#6d9bab' }}>
              <li><Link href="/how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
              <li><Link href="/privacy-features" className="hover:text-white transition-colors">Privacy</Link></li>
              <li><Link href="/clinical-features" className="hover:text-white transition-colors">Clinical Tools</Link></li>
              <li><Link href="/client-experience" className="hover:text-white transition-colors">Client Experience</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest mb-5 text-white/60">Account</h4>
            <ul className="space-y-3 text-sm" style={{ color: '#6d9bab' }}>
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

        {/* Changed: Divider and copyright in muted navy tone */}
        <div className="mt-12 pt-6 text-xs tracking-wide" style={{ borderTop: '1px solid #132830', color: '#366475' }}>
          © {new Date().getFullYear()} Therapy Ally. All rights reserved.
        </div>
      </div>
    </footer>
  )
}