'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const snappy = [0.16, 1, 0.3, 1] as const

const STEPS = [
  {
    number: '01',
    title: 'DİNLE',
    description:
      'Müşterinin ihtiyacını anla. Müşteri ne istediğini her zaman bilmez — ama sen bilmelisin.',
  },
  {
    number: '02',
    title: 'PLANLA',
    description:
      'Doğru araçları seç. Her saça aynı makine girmez, her projeye aynı framework de.',
  },
  {
    number: '03',
    title: 'UYGULA',
    description:
      'Elini titretme. Tereddüt detayda kaybolmaktır. Keskin ol, net ol.',
  },
]

export default function Process() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      className="section-padding"
      style={{ background: 'var(--ink)', color: 'var(--paper)' }}
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: snappy }}
        className="font-display mb-4"
        style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
      >
        SÜREÇ
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, ease: snappy, delay: 0.15 }}
        style={{
          color: 'var(--divider)',
          fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)',
          maxWidth: '550px',
          lineHeight: 1.6,
          marginBottom: 'clamp(3rem, 6vh, 5rem)',
        }}
      >
        Kod yazarken de saç keserken de aynı: Önce dinle, sonra planla, sonunda uygula.
      </motion.p>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 'clamp(2rem, 4vw, 4rem)' }}>
        {STEPS.map((step, i) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, ease: snappy, delay: 0.25 + i * 0.15 }}
            className="relative"
          >
            {/* Number */}
            <div
              className="font-display"
              style={{
                fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                color: 'var(--accent)',
                lineHeight: 1,
                marginBottom: '0.75rem',
              }}
            >
              {step.number}
            </div>

            {/* Connecting Line (between steps on desktop) */}
            {i < STEPS.length - 1 && (
              <div
                className="hidden md:block absolute top-8 h-px"
                style={{
                  left: '100%',
                  width: 'clamp(2rem, 4vw, 4rem)',
                  background: 'var(--muted)',
                  opacity: 0.3,
                }}
              />
            )}

            {/* Title */}
            <h3
              className="font-display mb-3"
              style={{
                fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)',
                letterSpacing: '0.05em',
              }}
            >
              {step.title}
            </h3>

            {/* Description */}
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                lineHeight: 1.65,
                color: 'var(--divider)',
                maxWidth: '320px',
              }}
            >
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
