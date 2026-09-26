'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

const INDUSTRY_TAB_DATA = {
  'Law Firms': {
    title: 'Law Firms & Legal Professionals',
    desc: 'Capture every potential case without being interrupted during focus time or in court.',
    list: ['Full legal intake and conflict checks', 'Live transfer of urgent client calls', 'Direct booking for initial consultations'],
    emoji: '⚖️',
    label: 'Legal Intake Dashboard',
  },
  'Medical & Health': {
    title: 'Medical & Healthcare Practices',
    desc: 'HIPAA-compliant answering that prioritizes patient care and urgent medical inquiries.',
    list: ['Patient appointment scheduling', 'Secure message forwarding', 'Urgent call escalation protocols'],
    emoji: '🏥',
    label: 'Medical Support Panel',
  },
  'Real Estate': {
    title: 'Real Estate Agents & Brokers',
    desc: 'Never miss a hot lead. We handle showing requests and property inquiries 24/7.',
    list: ['Live lead qualification', 'Showing request bookings', 'Instant lead notifications to your CRM'],
    emoji: '🏠',
    label: 'Real Estate CRM Link',
  },
  'Home Services': {
    title: 'Service Trades & Contractors',
    desc: 'From HVAC to Plumbing, we handle the dispatching while you handle the tools.',
    list: ['Emergency service dispatch', 'Job quote request intake', 'Schedule management for crews'],
    emoji: '❄️',
    label: 'Contractor Dispatch Hub',
  },
}

export default function SiteScripts() {
  const pathname = usePathname()

  useEffect(() => {
    const cleanups = []
    const on = (el, event, handler) => {
      el.addEventListener(event, handler)
      cleanups.push(() => el.removeEventListener(event, handler))
    }

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
            revealObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    )
    document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el))
    cleanups.push(() => revealObserver.disconnect())

    const idle = window.requestIdleCallback || ((fn) => setTimeout(fn, 1))
    const cancelIdle = window.cancelIdleCallback || clearTimeout
    const idleId = idle(() => {

    document.querySelectorAll('#features-accordion .accordion-header').forEach((header) => {
      on(header, 'click', () => {
        const item = header.closest('.accordion-item')
        const isActive = item.classList.contains('is-active')
        document.querySelectorAll('#features-accordion .accordion-item').forEach((el) => {
          el.classList.remove('is-active', 'border-[#8CA365]')
        })
        if (!isActive) item.classList.add('is-active', 'border-[#8CA365]')
      })
    })

    const industryTabButtons = document.querySelectorAll('.industry-tab-btn')
    industryTabButtons.forEach((btn) => {
      on(btn, 'click', () => {
        industryTabButtons.forEach((b) => {
          b.classList.remove('text-[#8CA365]', 'border-[#8CA365]', 'font-bold')
          b.classList.add('text-gray-500', 'border-transparent', 'font-medium')
        })
        btn.classList.add('text-[#8CA365]', 'border-[#8CA365]', 'font-bold')
        btn.classList.remove('text-gray-500', 'border-transparent', 'font-medium')

        document.querySelectorAll('.industry-panel').forEach((p) => {
          p.classList.remove('block', 'animate-fadeIn')
          p.classList.add('hidden')
        })
        const target = document.getElementById(btn.getAttribute('data-target'))
        if (target) {
          target.classList.remove('hidden')
          target.classList.add('block', 'animate-fadeIn')
        }
      })
    })

    const indTabs = document.querySelectorAll('.ind-tab')
    indTabs.forEach((tab) => {
      on(tab, 'click', () => {
        const data = INDUSTRY_TAB_DATA[tab.textContent.trim()]
        if (!data) return
        indTabs.forEach((t) => t.classList.remove('active'))
        tab.classList.add('active')

        document.querySelector('.ind-text-title').textContent = data.title
        document.querySelector('.ind-text p').textContent = data.desc
        document.querySelector('.ind-list').innerHTML = data.list
          .map(
            (item) => `
              <li class="flex items-center gap-3 text-gray-700 font-medium">
                <svg class="text-green shrink-0" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
                ${item}
              </li>
            `
          )
          .join('')
        document.querySelector('.ind-visual span').textContent = data.emoji
        document.querySelector('.ind-visual .font-bold').textContent = data.label
      })
    })

    const clockEl = document.getElementById('live-clock')
    const tzEl = document.getElementById('live-timezone')
    if (clockEl && tzEl) {
      const updateLiveClock = () => {
        const now = new Date()
        clockEl.textContent = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })
        tzEl.textContent = now.toLocaleDateString('en-US', { day: '2-digit', timeZoneName: 'short' }).slice(4)
      }
      updateLiveClock()
      const timer = setInterval(updateLiveClock, 1000)
      cleanups.push(() => clearInterval(timer))
    }

    document.querySelectorAll('form').forEach((form) => {
      on(form, 'submit', async (event) => {
        event.preventDefault()
        const submitBtn = form.querySelector('button[type="submit"], input[type="submit"]')
        const originalText = submitBtn ? submitBtn.innerText || submitBtn.value : 'Submit'
        const setButton = (text, disabled) => {
          if (!submitBtn) return
          if (submitBtn.tagName === 'INPUT') submitBtn.value = text
          else submitBtn.innerText = text
          submitBtn.disabled = disabled
        }
        setButton('Sending...', true)

        const { default: emailjs } = await import('@emailjs/browser')
        emailjs.init('8SvPluKr3Xb-PIAbh')
        emailjs.sendForm('service_8v9labn', 'template_et80ndw', form).then(
          () => {
            window.location.href = '/thank-you'
          },
          (error) => {
            console.error('EmailJS Error:', error)
            alert('Failed to send message. Please try again.')
            setButton(originalText, false)
          }
        )
      })
    })

    })
    cleanups.push(() => cancelIdle(idleId))

    return () => cleanups.forEach((fn) => fn())
  }, [pathname])

  return null
}
