'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about-us', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/industries-served', label: 'Industries Served' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/pricing', label: 'Pricing' },
]

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <div className="bg-navy text-white/75 text-[0.76rem] py-2.5 px-[5%] flex items-center justify-between gap-3 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer pointer-events-none"></div>
        <div className="hidden md:flex items-center gap-5 relative z-10">
          <span className="flex items-center gap-1.5">🕐 Live agents available 24/7/365</span>
          <div className="w-px h-3.5 bg-white/15"></div>
          <span className="flex items-center gap-1.5">⭐ Rated 4.9/5 by 2,400+ US businesses</span>
          <div className="w-px h-3.5 bg-white/15"></div>
          <span className="flex items-center gap-1.5">
            🔒{' '}
            <Link href="/hipaa-compliant-answering-service" className="hover:underline hover:text-white transition-all">
              HIPAA Compliant
            </Link>{' '}
            · No Setup Fees
          </span>
        </div>
        <div className="flex items-center gap-4 ml-auto md:ml-0 relative z-10">
          <a href="tel:8574531055" className="flex items-center gap-1.5 text-green font-semibold hover:opacity-80 transition-opacity">
            📞 (857) 453-1055
          </a>
          <div className="w-px h-3.5 bg-white/15"></div>
          <Link
            href="/pricing"
            className="bg-green text-white py-1 px-3.5 rounded-full font-semibold text-[0.75rem] hover:bg-green-dark transition-colors"
          >
            View Pricing
          </Link>
        </div>
      </div>

      <header
        id="site-header"
        className={`sticky z-[1000] mx-auto transition-all duration-300 ${
          scrolled
            ? 'top-4 w-[95%] max-w-[1280px] bg-white/30 backdrop-blur-xl backdrop-saturate-150 border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.08)] rounded-2xl'
            : 'top-0 w-full bg-white border-b border-gray-100'
        }`}
      >
        <div className="px-4 md:px-8 h-[68px] md:h-[88px] flex items-center gap-4 md:gap-8 max-w-[1280px] mx-auto w-full">
          <div className="flex items-center h-[52px] md:h-[80px] w-[160px] sm:w-[200px] md:w-[260px] shrink-0">
            <Link href="/" className="block w-full h-full" aria-label="LivePhoneAnswering Home">
              <img src="/images/logo.webp" alt="Live Phone Answering" className="w-full h-full object-contain object-left"
            width={400}
            height={234}
            loading="eager"
            fetchPriority="high"
          />
            </Link>
          </div>

          <ul className="hidden lg:flex items-center gap-2 list-none flex-1 lg:justify-center">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="px-3 py-2 text-[0.875rem] font-medium text-gray-700 rounded-lg hover:text-navy hover:bg-gray-50 transition-all"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-2.5 shrink-0">
            <Link
              href="/contact-us"
              className="relative overflow-hidden btn-shimmer text-[0.87rem] font-bold text-white px-5 py-2.5 rounded-lg bg-green hover:bg-green-dark shadow-green-glow hover:-translate-y-px transition-all"
            >
              Contact Us →
            </Link>
          </div>

          <button
            className="flex lg:hidden flex-col gap-[5px] cursor-pointer p-1.5 ml-auto"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="block w-[22px] h-[2px] bg-navy rounded transition-all"></span>
            <span className="block w-[22px] h-[2px] bg-navy rounded transition-all"></span>
            <span className="block w-[22px] h-[2px] bg-navy rounded transition-all"></span>
          </button>
        </div>

        <div className={`${menuOpen ? '' : 'hidden'} lg:hidden border-t border-border bg-white px-[5%] py-4 space-y-1`}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 space-y-2 border-t border-border mt-2">
            <Link
              href="/contact-us"
              onClick={() => setMenuOpen(false)}
              className="block w-full text-center py-2.5 rounded-xl font-bold bg-green text-white text-sm hover:bg-green-dark transition-colors"
            >
              Contact Us &rarr;
            </Link>
          </div>
        </div>
      </header>
    </>
  )
}
