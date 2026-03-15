import { useDevDive } from '../ws'
import { StatusBadge } from '../components/StatusBadge'

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

export function Reviews() {
  const { state } = useDevDive()
  const reviews = [...state.reviews].reverse()
  const latest = reviews[0]

  return (
    <section class="page">
      <h2 class="page-title">Design Reviews</h2>
      <p class="page-subtitle">
        Architectural drift checks against the original design notes attached to each planned task.
      </p>

      {latest && latest.findings.length === 0 ? (
        <div class="banner">No drift detected in latest review.</div>
      ) : null}

      {reviews.length === 0 ? (
        <div class="empty-state">No design reviews yet. DevDive reviews your architecture every 10 commits.</div>
      ) : (
        <div class="list-stack">
          {reviews.map(review => (
            <article class="card" key={review.reviewed_at}>
              <div style={{ marginBottom: '12px', color: 'var(--muted)' }}>
                Reviewed {timeAgo(review.reviewed_at)}
              </div>
              {review.findings.length === 0 ? (
                <div style={{ color: 'var(--muted)' }}>No findings for this review.</div>
              ) : (
                <div class="list-stack">
                  {review.findings.map((finding, index) => (
                    <div
                      key={`${finding.file}-${finding.detected_at}-${index}`}
                      style={{
                        padding: '14px',
                        borderRadius: '18px',
                        background: 'rgba(17, 32, 58, 0.04)',
                        border: '1px solid rgba(17, 32, 58, 0.08)',
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px', flexWrap: 'wrap' }}>
                        <code class="mono">{finding.file}</code>
                        <StatusBadge status={finding.severity} />
                      </div>
                      <div style={{ marginTop: '10px', lineHeight: 1.6 }}>{finding.finding}</div>
                    </div>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      )}
    </section>
  )
}
