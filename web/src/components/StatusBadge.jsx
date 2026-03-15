const colors = {
  todo: { background: 'rgba(143, 157, 182, 0.14)', border: 'rgba(143, 157, 182, 0.2)', color: '#b8c2d5' },
  in_progress: { background: 'rgba(47, 129, 247, 0.16)', border: 'rgba(47, 129, 247, 0.24)', color: '#7db1ff' },
  review: { background: 'rgba(241, 166, 56, 0.16)', border: 'rgba(241, 166, 56, 0.2)', color: '#ffbf69' },
  rejected: { background: 'rgba(241, 91, 122, 0.16)', border: 'rgba(241, 91, 122, 0.2)', color: '#ff8da5' },
  complete: { background: 'rgba(43, 196, 138, 0.16)', border: 'rgba(43, 196, 138, 0.22)', color: '#7addaf' },
  passing: { background: 'rgba(43, 196, 138, 0.16)', border: 'rgba(43, 196, 138, 0.22)', color: '#7addaf' },
  failing: { background: 'rgba(241, 91, 122, 0.16)', border: 'rgba(241, 91, 122, 0.2)', color: '#ff8da5' },
  pending: { background: 'rgba(241, 166, 56, 0.16)', border: 'rgba(241, 166, 56, 0.2)', color: '#ffbf69' },
  unknown: { background: 'rgba(143, 157, 182, 0.14)', border: 'rgba(143, 157, 182, 0.2)', color: '#b8c2d5' },
  critical: { background: 'rgba(241, 91, 122, 0.16)', border: 'rgba(241, 91, 122, 0.2)', color: '#ff8da5' },
  warning: { background: 'rgba(241, 166, 56, 0.16)', border: 'rgba(241, 166, 56, 0.2)', color: '#ffbf69' },
  info: { background: 'rgba(143, 157, 182, 0.14)', border: 'rgba(143, 157, 182, 0.2)', color: '#b8c2d5' },
}

export function StatusBadge({ status }) {
  const aliases = { open: 'todo', done: 'complete' }
  const value = aliases[status] || status || 'unknown'
  const palette = colors[value] || colors.unknown

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '6px 10px',
        borderRadius: '999px',
        background: palette.background,
        border: `1px solid ${palette.border}`,
        color: palette.color,
        fontSize: '0.78rem',
        fontWeight: 700,
        textTransform: 'capitalize',
        whiteSpace: 'nowrap',
      }}
    >
      {value.replaceAll('_', ' ')}
    </span>
  )
}
