export default function Footer() {
  return (
    <footer
      className="section-padding flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
      style={{
        background: 'var(--ink)',
        color: 'var(--paper)',
        paddingTop: '2rem',
        paddingBottom: '2rem',
        borderTop: '1px solid rgba(245, 240, 235, 0.1)',
      }}
    >
      <div className="flex flex-col gap-1">
        <span
          className="font-mono-accent"
          style={{ fontSize: '0.75rem', color: 'var(--divider)', letterSpacing: '0.03em' }}
        >
          © 2026 Özgür KoçER
        </span>
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.8rem',
            color: 'var(--muted)',
            fontStyle: 'italic',
          }}
        >
          İstanbul&apos;dan, özenle.
        </span>
      </div>

      <a
        href="#"
        className="font-mono-accent link-underline"
        style={{
          fontSize: '0.7rem',
          color: 'var(--divider)',
          letterSpacing: '0.08em',
          textDecoration: 'none',
        }}
      >
        ↑ BAŞA DÖN
      </a>
    </footer>
  )
}
