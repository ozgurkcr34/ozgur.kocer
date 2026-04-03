'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const snappy = [0.16, 1, 0.3, 1] as const

const SOCIALS = [
  {
    label: 'GITHUB',
    href: 'https://github.com/ozgurkcr34',
  },
  {
    label: 'LINKEDIN',
    href: 'https://www.linkedin.com/in/mustafa-özgür-koçer-00465a103',
  },
]

export default function Contact() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="iletisim"
      ref={ref}
      className="section-padding"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: snappy }}
        className="font-display mb-4"
        style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
      >
        İLETİŞİM
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, ease: snappy, delay: 0.15 }}
        style={{
          color: 'var(--muted)',
          fontSize: 'clamp(0.95rem, 1.8vw, 1.15rem)',
          maxWidth: '500px',
          lineHeight: 1.6,
          marginBottom: 'clamp(2rem, 4vh, 3.5rem)',
        }}
      >
        Bir proje mi var aklında? Yoksa sadece güzel bir fade mi istiyorsun?
        <br />
        Her iki durumda da yaz.
      </motion.p>

      {/* Email */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, ease: snappy, delay: 0.3 }}
        className="mb-10"
      >
        <a
          href="mailto:ozgurkocer1907@hotmail.com"
          className="link-underline font-display"
          style={{
            fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)',
            color: 'var(--accent)',
            textDecoration: 'none',
            lineHeight: 1.2,
          }}
        >
          ozgurkocer1907@hotmail.com
        </a>
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, ease: snappy, delay: 0.45 }}
        className="flex gap-8"
      >
        {SOCIALS.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.8rem',
              fontWeight: 500,
              letterSpacing: '0.12em',
              color: 'var(--ink)',
              textDecoration: 'none',
            }}
          >
            {social.label}
          </a>
        ))}
      </motion.div>
    </section>
  )
}
