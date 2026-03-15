import { useDevDive } from '../ws'
import { StatusBadge } from '../components/StatusBadge'

function timeAgo(isoString) {
  if (!isoString) {
    return 'No runs yet'
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

export function CI() {
  const { state } = useDevDive()

  return (
    <section class="page">
      <h2 class="page-title">Continuous Integration</h2>
      <p class="page-subtitle">
        Latest workflow health from GitHub Actions, surfaced directly inside the dashboard.
      </p>

      <div class="card" style={{ display: 'grid', gap: '16px', maxWidth: '420px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <StatusBadge status={state.ci.status} />
          <strong style={{ fontSize: '1.1rem' }}>{state.ci.status.replaceAll('_', ' ')}</strong>
        </div>
        {state.ci.status === 'unknown' ? (
          <div style={{ color: 'var(--muted)' }}>No CI runs detected yet.</div>
        ) : (
          <>
            <div>Last run: {timeAgo(state.ci.last_run)}</div>
            {state.ci.workflow_url ? (
              <a href={state.ci.workflow_url} target="_blank" rel="noreferrer">
                View workflow run {'->'}
              </a>
            ) : null}
          </>
        )}
      </div>
    </section>
  )
}
