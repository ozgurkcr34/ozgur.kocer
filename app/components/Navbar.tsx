'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  { href: '#hakkimda', label: 'HAKKIMDA' },
  { href: '#islerim', label: 'İŞLERİM' },
  { href: '#iletisim', label: 'İLETİŞİM' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-all"
        style={{
          padding: scrolled ? '0.75rem clamp(1.5rem, 5vw, 6rem)' : '1.25rem clamp(1.5rem, 5vw, 6rem)',
          background: scrolled ? 'rgba(245, 240, 235, 0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(8px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--ink)' : '1px solid transparent',
          transitionDuration: '200ms',
          transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Monogram */}
        <a
          href="#"
          className="font-display relative z-10"
          style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            lineHeight: 1,
            letterSpacing: '0.05em',
            color: 'var(--ink)',
            textDecoration: 'none',
          }}
        >
          ÖK
          <span
            className="absolute bottom-0 left-0 w-full h-[3px]"
            style={{ background: 'var(--accent)' }}
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="link-underline"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.8rem',
                fontWeight: 500,
                letterSpacing: '0.12em',
                color: 'var(--ink)',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden relative z-10 flex flex-col justify-center items-center w-8 h-8 gap-[5px]"
          aria-label="Menüyü aç"
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
        >
          <span
            className="block w-6 h-[2px] transition-all"
            style={{
              background: menuOpen ? 'var(--paper)' : 'var(--ink)',
              transform: menuOpen ? 'rotate(45deg) translateY(3.5px)' : 'none',
              transitionDuration: '200ms',
              transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          />
          <span
            className="block w-6 h-[2px] transition-all"
            style={{
              background: menuOpen ? 'var(--paper)' : 'var(--ink)',
              transform: menuOpen ? 'rotate(-45deg) translateY(-3.5px)' : 'none',
              transitionDuration: '200ms',
              transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          />
        </button>
      </nav>

      {/* Mobile Full-Screen Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center"
            style={{ background: 'var(--ink)' }}
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.1 + i * 0.08,
                  duration: 0.35,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="font-display mb-6"
                style={{
                  fontSize: 'clamp(2.5rem, 8vw, 4rem)',
                  color: 'var(--paper)',
                  textDecoration: 'none',
                  lineHeight: 1.1,
                }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
