export default function SectionDivider() {
  return (
    <div className="flex justify-center py-4">
      <hr
        className="border-none h-px w-[120px]"
        style={{ background: 'var(--divider)' }}
      />
    </div>
  )
}
