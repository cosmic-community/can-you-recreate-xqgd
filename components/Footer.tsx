import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-white mt-24">
      <div className="container-padded py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🧠</span>
              <span className="font-bold text-lg">Therapy Ally</span>
            </div>
            <p className="text-brand-200 text-sm leading-relaxed max-w-xs">
              Structured AI support for modern therapy practices. Built with a
              privacy-first architecture designed for HIPAA compliance.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm text-brand-200">
              <li><Link href="/how-it-works" className="hover:text-white">How It Works</Link></li>
              <li><Link href="/privacy-features" className="hover:text-white">Privacy</Link></li>
              <li><Link href="/clinical-features" className="hover:text-white">Clinical Tools</Link></li>
              <li><Link href="/client-experience" className="hover:text-white">Client Experience</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Account</h4>
            <ul className="space-y-2 text-sm text-brand-200">
              <li>
                <a href="https://clinician.therapyally.ai/clinician-signup" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  Clinician Console
                </a>
              </li>
              <li>
                <a href="https://clinician.therapyally.ai/login" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  Sign In
                </a>
              </li>
              <li>
                <a href="https://clinician.therapyally.ai/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="https://clinician.therapyally.ai/terms" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-800 mt-10 pt-6 text-sm text-brand-300">
          © {new Date().getFullYear()} Therapy Ally. All rights reserved.
        </div>
      </div>
    </footer>
  )
}