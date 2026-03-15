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
    return `${minutes} minutes ago`
  }
  const hours = Math.floor(minutes / 60)
  if (hours < 24) {
    return `${hours} hours ago`
  }
  const days = Math.floor(hours / 24)
  return `${days} days ago`
}

export function Nudges() {
  const { state } = useDevDive()
  const nudges = [...state.nudges].reverse()

  return (
    <section class="page">
      <div class="page-hero">
        <div>
          <p class="eyebrow">Nudges</p>
          <h1 class="page-title">Advisory Feed</h1>
          <p class="page-subtitle">
            Short prompts from the planner when CI breaks, drift appears, or work starts slipping.
          </p>
        </div>
        <div class="hero-actions">
          <span class="button-secondary">{nudges.length} total nudges</span>
        </div>
      </div>

      {nudges.length === 0 ? (
        <div class="empty-state">No nudges yet. DevDive will suggest improvements as you work.</div>
      ) : (
        <div class="stack-list">
          {nudges.map(nudge => (
            <article class="list-card" key={`${nudge.created_at}-${nudge.message}`}>
              <div class="card-head">
                <span class="priority-ribbon tone-purple">AI Advisory</span>
                <span class="card-time">{timeAgo(nudge.created_at)}</span>
              </div>
              <h3 class="card-title">{nudge.message}</h3>
              <p class="card-copy">Generated from current state transitions, failing signals, or architectural drift.</p>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}
