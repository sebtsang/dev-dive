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
    return `${minutes} minutes ago`
  }
  const hours = Math.floor(minutes / 60)
  if (hours < 24) {
    return `${hours} hours ago`
  }
  const days = Math.floor(hours / 24)
  return `${days} days ago`
}

export function Reviews() {
  const { state } = useDevDive()
  const reviews = [...state.reviews].reverse()
  const latest = reviews[0]

  return (
    <section class="page">
      <div class="page-hero">
        <div>
          <p class="eyebrow">Reviews</p>
          <h1 class="page-title">Architecture Reviews</h1>
          <p class="page-subtitle">
            Drift checks against the original design notes attached to each planned task.
          </p>
        </div>
      </div>

      {latest && latest.findings.length === 0 ? (
        <div class="banner">No drift detected in latest review.</div>
      ) : null}

      {reviews.length === 0 ? (
        <div class="empty-state">No design reviews yet. DevDive reviews your architecture every 10 commits.</div>
      ) : (
        <div class="stack-list">
          {reviews.map(review => (
            <article class="list-card" key={review.reviewed_at}>
              <div style={{ marginBottom: '12px', color: 'var(--text-muted)' }}>
                Reviewed {timeAgo(review.reviewed_at)}
              </div>
              {review.findings.length === 0 ? (
                <div class="card-copy">No findings for this review.</div>
              ) : (
                <div class="stack-list">
                  {review.findings.map((finding, index) => (
                    <article
                      key={`${finding.file}-${finding.detected_at}-${index}`}
                      class="summary-card"
                    >
                      <div class="card-head">
                        <code class="mono">{finding.file}</code>
                        <StatusBadge status={finding.severity} />
                      </div>
                      <p class="card-copy">{finding.finding}</p>
                    </article>
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
