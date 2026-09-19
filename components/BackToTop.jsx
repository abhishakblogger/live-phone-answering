'use client'

import { useEffect, useState } from 'react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      aria-label="Back to Top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-8 right-8 w-12 h-12 bg-navy text-white rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 z-[999] shadow-lg hover:bg-green hover:-translate-y-1 border-none text-lg ${
        visible ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
    >
      ↑
    </button>
  )
}
