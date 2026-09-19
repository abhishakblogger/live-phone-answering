import Link from 'next/link'
import NewsletterForm from './NewsletterForm'

export default function SiteFooter() {
  return (
    <footer className="pt-32 pb-10 bg-[#1a232c] relative mt-24">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-5xl bg-gradient-to-r from-[#8CA365] to-[#6b7d4c] rounded-3xl p-10 shadow-2xl flex flex-col md:flex-row items-center justify-between z-20">
        <div>
          <h3 className="text-3xl font-extrabold text-white mb-2">Ready to stop missing leads?</h3>
          <p className="text-green-100 text-lg">Get started today. Setup in 5 minutes.</p>
        </div>
        <Link
          href="/contact-us"
          className="mt-6 md:mt-0 bg-white text-[#34414A] font-bold py-3 px-8 rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 whitespace-nowrap"
        >
          Get Started
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="mb-6">
              <img src="/images/LPA_Footer_logo.png" alt="Live Phone Answering" className="h-30 w-auto" />
            </div>

            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-slate-300 backdrop-blur-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              Systems Operational
            </div>

            <p className="text-slate-400 text-sm leading-relaxed">
              100% US-based receptionists handling your calls 24/7/365. We make sure you never miss another lead or important client
              call.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold uppercase tracking-wider text-sm mb-6">Company</h4>
            <ul className="space-y-4">
              {[
                { href: '/', label: 'Home' },
                { href: '/about-us', label: 'About Us' },
                { href: '/how-it-works', label: 'How It Works' },
                { href: '/pricing', label: 'Pricing & FAQs' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors duration-300 flex items-center group text-sm font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold uppercase tracking-wider text-sm mb-6">Solutions &amp; Contact</h4>
            <ul className="space-y-4 mb-6">
              {[
                { href: '/services', label: 'Our Services' },
                { href: '/industries-served', label: 'Industries Served' },
                { href: '/contact-us', label: 'Contact Support' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors duration-300 flex items-center group text-sm font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="space-y-3 pt-2 border-t border-slate-800">
              <div className="flex items-center gap-3 text-slate-400 text-sm hover:text-white transition-colors cursor-pointer group pt-2">
                <svg className="w-4 h-4 text-[#8CA365]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
                <a href="tel:8574531055" className="font-medium">
                  (857) 453-1055
                </a>
              </div>
              <div className="flex items-center gap-3 text-slate-400 text-sm hover:text-white transition-colors cursor-pointer group">
                <svg
                  className="w-4 h-4 group-hover:scale-110 transition-transform duration-300 text-[#8CA365]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                <a href="mailto:hello@livephoneanswering.com" className="font-medium">
                  hello@livephoneanswering.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold uppercase tracking-wider text-sm mb-6">Stay Connected</h4>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Subscribe to our newsletter for the latest updates and tips.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-slate-500 text-sm">© 2026 LivePhoneAnswering.com. All rights reserved.</div>
          <div className="flex gap-6 text-slate-500 text-sm">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <a href="/sitemap.xml" className="hover:text-white transition-colors">
              Sitemap
            </a>
          </div>
          <div className="flex gap-4 text-slate-500">
            <a href="#" aria-label="Facebook" className="hover:text-[#8CA365] hover:-translate-y-1 transition-all duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-[#8CA365] hover:-translate-y-1 transition-all duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-[#8CA365] hover:-translate-y-1 transition-all duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
