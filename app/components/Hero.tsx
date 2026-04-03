'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const snappy = [0.16, 1, 0.3, 1] as const

export default function Hero() {
  return (
    <section
      id="hakkimda"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden"
      style={{ paddingTop: '6rem' }}
    >
      {/* ═══ BACKGROUND IMAGE ═══ */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25, ease: snappy, delay: 0.1 }}
        className="absolute inset-0 z-0"
        style={{ pointerEvents: 'none' }}
      >
        {/* The photograph */}
        <Image
          src="/yazber.png"
          alt="Özgür KoçER — Berber önlüğüyle, elinde makine, arkasında kod"
          fill
          priority
          className="object-cover object-top"
          sizes="100vw"
          style={{
            filter: 'contrast(1.35) grayscale(1)',
          }}
        />

        {/* 
          Dot matrix overlay — brütalist "kirlilik" efekti
          Repeating 2px dots, çok ince, baskı hissi verir
        */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(26,26,26,0.12) 1px, transparent 1px)`,
            backgroundSize: '3px 3px',
            mixBlendMode: 'multiply',
          }}
        />

        {/* 
          Gradient overlays — metin okunabilirliği için
          Sol tarafı daha kapalı (metin orada), sağ tarafı daha açık (görsel orada)
        */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(
              to right,
              rgba(245, 240, 235, 0.92) 0%,
              rgba(245, 240, 235, 0.75) 35%,
              rgba(245, 240, 235, 0.35) 60%,
              rgba(245, 240, 235, 0.08) 100%
            )`,
          }}
        />


      </motion.div>

      {/* ═══ CONTENT ═══ */}
      <div className="relative z-10 section-padding">
        <div className="max-w-5xl">
          {/* Top label */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: snappy, delay: 0.3 }}
            className="font-mono-accent"
            style={{ color: 'var(--muted)', fontSize: '0.85rem', letterSpacing: '0.05em', marginBottom: 'clamp(4rem, 12vh, 8rem)' }}
          >
            PORTFOLYO — 2026
          </motion.p>

          {/* Name */}
          <div className="font-display" style={{ lineHeight: 0.85, paddingTop: 'clamp(0.5rem, 2vw, 1.5rem)' }}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: snappy, delay: 0.4 }}
              style={{
                fontSize: 'clamp(4rem, 14vw, 12rem)',
                textShadow: '2px 2px 0px var(--paper), -1px -1px 0px var(--paper)',
                color: 'var(--accent)',
              }}
            >
              ÖZGÜR
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: snappy, delay: 0.55 }}
              style={{
                fontSize: 'clamp(4rem, 14vw, 12rem)',
                textShadow: '2px 2px 0px var(--paper), -1px -1px 0px var(--paper)',
                color: 'var(--accent)',
              }}
            >
              KOÇER
            </motion.div>
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: snappy, delay: 0.75 }}
            className="mt-8"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(1rem, 2vw, 1.35rem)',
              color: 'var(--muted)',
              maxWidth: '500px',
              lineHeight: 1.5,
            }}
          >
            Berber hassasiyetine sahip yazılımcı.
            <br />
            <span style={{ color: 'var(--ink)' }}>
              Her satırda titizlik, her kesimde standart.
            </span>
          </motion.p>

          {/* Role tags — overlapping stripe */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: snappy, delay: 0.9 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            {['YAZILIMCI', 'BERBER', 'ZANAAT\u00C7I'].map((tag) => (
              <span
                key={tag}
                className="font-mono-accent"
                style={{
                  fontSize: '0.7rem',
                  letterSpacing: '0.1em',
                  padding: '0.4rem 0.8rem',
                  border: '1px solid var(--ink)',
                  color: 'var(--ink)',
                  background: 'rgba(245, 240, 235, 0.8)',
                }}
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </div>


    </section>
  )
}
