import { useDevDive } from '../ws'

function timeAgo(isoString) {
  if (!isoString) {
    return 'Unknown time'
  }

  const diff = Date.now() - new Date(isoString).getTime()
  const minutes = Math.floor(diff / 60000)
  if (minutes < 1) {
    return 'Just now'
  }
  if (minutes < 60) {
    return `${minutes} minute${minutes === 1 ? '' : 's'} ago`
  }
  const hours = Math.floor(minutes / 60)
  if (hours < 24) {
    return `${hours} hour${hours === 1 ? '' : 's'} ago`
  }
  const days = Math.floor(hours / 24)
  return `${days} day${days === 1 ? '' : 's'} ago`
}

export function Nudges() {
  const { state } = useDevDive()
  const nudges = [...state.nudges].reverse()

  return (
    <section class="page">
      <h2 class="page-title">AI Nudges</h2>
      <p class="page-subtitle">
        Short prompts from the planner when CI breaks, drift appears, or work starts slipping.
      </p>

      {nudges.length === 0 ? (
        <div class="empty-state">No nudges yet. DevDive will suggest improvements as you work.</div>
      ) : (
        <div class="list-stack">
          {nudges.map(nudge => (
            <article class="card" key={`${nudge.created_at}-${nudge.message}`}>
              <div style={{ fontSize: '1.05rem', lineHeight: 1.6 }}>{nudge.message}</div>
              <div style={{ marginTop: '12px', color: 'var(--muted)' }}>{timeAgo(nudge.created_at)}</div>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}
