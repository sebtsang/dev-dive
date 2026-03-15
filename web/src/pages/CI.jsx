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
    return `${minutes} minutes ago`
  }
  const hours = Math.floor(minutes / 60)
  if (hours < 24) {
    return `${hours} hours ago`
  }
  const days = Math.floor(hours / 24)
  return `${days} days ago`
}

export function CI() {
  const { state } = useDevDive()
  const latestReview = state.reviews[0]
  const recentNudge = state.nudges[state.nudges.length - 1]

  return (
    <section class="page">
      <div class="page-hero">
        <div>
          <p class="eyebrow">Actions</p>
          <h1 class="page-title">Build and Release Health</h1>
          <p class="page-subtitle">
            The CI signal sits inside the same operational frame as nudges, drift, and recent delivery activity.
          </p>
        </div>
        <div class="hero-actions">
          {state.ci.workflow_url ? (
            <a class="button" href={state.ci.workflow_url} target="_blank" rel="noreferrer">Open workflow</a>
          ) : (
            <span class="button-secondary">Waiting for workflow URL</span>
          )}
        </div>
      </div>

      <div class="split-grid">
        <section class="panel">
          <div class="panel-header">
            <h2 class="panel-title">Current Run</h2>
            <StatusBadge status={state.ci.status} />
          </div>
          <div class="stack-list">
            <article class="list-card">
              <div class="card-head">
                <div>
                  <div class="panel-kicker">Workflow status</div>
                  <h3 class="card-title" style={{ textTransform: 'capitalize' }}>{state.ci.status.replaceAll('_', ' ')}</h3>
                </div>
                <div class="metric-icon metric-icon--green">CI</div>
              </div>
              {state.ci.status === 'unknown' ? (
                <p class="card-copy">No CI runs detected yet.</p>
              ) : (
                <>
                  <p class="card-copy">Last run completed {timeAgo(state.ci.last_run)}.</p>
                  <div class="issue-meta">
                    <span>{state.ci.workflow_url ? 'Workflow run available' : 'No workflow link yet'}</span>
                    {state.ci.workflow_url ? (
                      <a class="panel-link" href={state.ci.workflow_url} target="_blank" rel="noreferrer">View workflow</a>
                    ) : null}
                  </div>
                </>
              )}
            </article>
          </div>
        </section>

        <section class="panel">
          <div class="panel-header">
            <h2 class="panel-title">Related Signals</h2>
            <a class="panel-link" href="/reviews">Open reviews</a>
          </div>
          <div class="stack-list">
            <article class="list-card">
              <div class="panel-kicker">Latest review</div>
              <h3 class="card-title">{latestReview ? `${latestReview.findings.length} findings in latest review` : 'No design reviews yet'}</h3>
              <p class="card-copy">
                {latestReview
                  ? `Reviewed ${timeAgo(latestReview.reviewed_at)}.`
                  : 'Run devdive review to compare the codebase against the original plan.'}
              </p>
            </article>
            <article class="list-card">
              <div class="panel-kicker">Latest nudge</div>
              <h3 class="card-title">{recentNudge ? 'AI advisory available' : 'No nudges yet'}</h3>
              <p class="card-copy">{recentNudge ? recentNudge.message : 'Operational nudges will appear here when CI or reviews need attention.'}</p>
            </article>
          </div>
        </section>
      </div>
    </section>
  )
}
