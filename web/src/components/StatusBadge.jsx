const colors = {
  open: { background: '#dde1e8', color: '#3f4756' },
  in_progress: { background: '#d8ebff', color: '#155e9a' },
  done: { background: '#dff5e7', color: '#1e7c49' },
  passing: { background: '#dff5e7', color: '#1e7c49' },
  failing: { background: '#ffd9d4', color: '#9b3429' },
  pending: { background: '#fff1c9', color: '#8c6200' },
  unknown: { background: '#dde1e8', color: '#3f4756' },
  critical: { background: '#ffd9d4', color: '#9b3429' },
  warning: { background: '#fff1c9', color: '#8c6200' },
  info: { background: '#dde1e8', color: '#3f4756' },
}

export function StatusBadge({ status }) {
  const value = status || 'unknown'
  const palette = colors[value] || colors.unknown

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '6px 10px',
        borderRadius: '999px',
        background: palette.background,
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
