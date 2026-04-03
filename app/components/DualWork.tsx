'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const snappy = [0.16, 1, 0.3, 1] as const

const CODE_PROJECTS = [
  {
    name: 'KUAFÖR RANDEVU',
    description: 'Berber salonları için online randevu ve müşteri yönetim sistemi.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
  },
  {
    name: 'STOK TAKİBİ',
    description: 'Küçük işletmeler için envanter ve stok takip uygulaması.',
    tags: ['React', 'Node.js', 'MongoDB'],
  },
  {
    name: 'PORTFÖY MOTORU',
    description: 'Bu siteyi oluşturan, brütalist tasarım odaklı portfolyo şablonu.',
    tags: ['Next.js', 'Tailwind', 'Framer Motion'],
  },
]

const CRAFT_ITEMS = [
  {
    title: 'Klasik Erkek Kesimi',
    description: 'Titizlik. Her kesimde aynı standart, her detayda aynı özen.',
    image: '/sactras.png',
  },
  {
    title: 'Sakal Bakımı',
    description: 'Ustura ile çizilen hatlar — el titremez, göz yanılmaz.',
    image: '/sakaltras.png',
  },
  {
    title: 'Modern Fade',
    description: 'Geleneksel ustalık, modern trendlerle buluşuyor.',
    image: '/fönfön.png',
  },
]

function ParallaxImage({ item }: { item: { title: string; image: string } }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  
  // We make the image container 130% height and move it from -15% to +15%
  const y = useTransform(scrollYProgress, [0, 1], ['-15%', '15%'])

  return (
    <div
      ref={ref}
      className="relative w-full overflow-hidden"
      style={{
        aspectRatio: '16/10',
        background: 'var(--ink)',
      }}
    >
      <motion.div
        className="absolute w-full"
        style={{
          height: '130%',
          top: '-15%',
          y,
        }}
      >
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
          style={{ opacity: 0.9 }}
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </motion.div>
    </div>
  )
}

export default function DualWork() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="islerim"
      ref={ref}
      className="section-padding"
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: snappy }}
        className="font-display mb-4"
        style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
      >
        İKİ ZANAAT, TEK DİSİPLİN
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, ease: snappy, delay: 0.15 }}
        style={{
          color: 'var(--muted)',
          fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)',
          maxWidth: '600px',
          lineHeight: 1.6,
          marginBottom: 'clamp(3rem, 6vh, 5rem)',
        }}
      >
        Kod yazarken de saç keserken de aynı kural geçerli: Detay her şeydir.
      </motion.p>

      {/* Two-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: 'clamp(2rem, 4vw, 4rem)' }}>

        {/* LEFT — CODE */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, ease: snappy, delay: 0.2 }}
        >
          <div className="flex flex-col gap-0">
            {CODE_PROJECTS.map((project, i) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, ease: snappy, delay: 0.3 + i * 0.1 }}
                className="group py-6"
                style={{
                  borderBottom: '1px solid var(--divider)',
                  cursor: 'default',
                }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div
                    className="relative"
                    style={{ paddingLeft: '0' }}
                  >
                    {/* Left border on hover */}
                    <div
                      className="absolute left-0 top-0 h-full w-[3px] transition-all"
                      style={{
                        background: 'var(--accent)',
                        transform: 'scaleY(0)',
                        transformOrigin: 'top',
                        transitionDuration: '200ms',
                        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                        marginLeft: '-1rem',
                      }}
                    />
                    <h4
                      className="font-display"
                      style={{
                        fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)',
                        lineHeight: 1.1,
                        marginBottom: '0.4rem',
                      }}
                    >
                      {project.name}
                    </h4>
                    <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.5 }}>
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono-accent"
                      style={{
                        fontSize: '0.7rem',
                        padding: '0.25rem 0.5rem',
                        border: '1px solid var(--divider)',
                        color: 'var(--muted)',
                        letterSpacing: '0.03em',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT — CRAFT */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, ease: snappy, delay: 0.3 }}
        >
          <div className="flex flex-col gap-6">
            {CRAFT_ITEMS.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, ease: snappy, delay: 0.4 + i * 0.1 }}
              >
                {/* Image */}
                <ParallaxImage item={item} />

                {/* Text below image */}
                <div className="mt-3">
                  <h4
                    className="font-display"
                    style={{
                      fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
                      lineHeight: 1.1,
                      marginBottom: '0.3rem',
                    }}
                  >
                    {item.title}
                  </h4>
                  <p style={{ color: 'var(--muted)', fontSize: '0.85rem', lineHeight: 1.5 }}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
