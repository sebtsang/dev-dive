import { Link } from '../router.jsx'
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
    <section className="page">
      <div className="page-hero">
        <div>
          <p className="eyebrow">Actions</p>
          <h1 className="page-title">Build and Release Health</h1>
          <p className="page-subtitle">
            The CI signal sits inside the same operational frame as nudges, drift, and recent delivery activity.
          </p>
        </div>
        <div className="hero-actions">
          {state.ci.workflow_url ? (
            <a className="button" href={state.ci.workflow_url} target="_blank" rel="noreferrer">Open workflow</a>
          ) : (
            <span className="button-secondary">Waiting for workflow URL</span>
          )}
        </div>
      </div>

      <div className="split-grid">
        <section className="panel">
          <div className="panel-header">
            <h2 className="panel-title">Current Run</h2>
            <StatusBadge status={state.ci.status} />
          </div>
          <div className="stack-list">
            <article className="list-card">
              <div className="card-head">
                <div>
                  <div className="panel-kicker">Workflow status</div>
                  <h3 className="card-title" style={{ textTransform: 'capitalize' }}>{state.ci.status.replaceAll('_', ' ')}</h3>
                </div>
                <div className="metric-icon metric-icon--green">CI</div>
              </div>
              {state.ci.status === 'unknown' ? (
                <p className="card-copy">No CI runs detected yet.</p>
              ) : (
                <>
                  <p className="card-copy">Last run completed {timeAgo(state.ci.last_run)}.</p>
                  <div className="issue-meta">
                    <span>{state.ci.workflow_url ? 'Workflow run available' : 'No workflow link yet'}</span>
                    {state.ci.workflow_url ? (
                      <a className="panel-link" href={state.ci.workflow_url} target="_blank" rel="noreferrer">View workflow</a>
                    ) : null}
                  </div>
                </>
              )}
            </article>
          </div>
        </section>

        <section className="panel">
          <div className="panel-header">
            <h2 className="panel-title">Related Signals</h2>
            <Link className="panel-link" to="/reviews">Open reviews</Link>
          </div>
          <div className="stack-list">
            <article className="list-card">
              <div className="panel-kicker">Latest review</div>
              <h3 className="card-title">{latestReview ? `${latestReview.findings.length} findings in latest review` : 'No design reviews yet'}</h3>
              <p className="card-copy">
                {latestReview
                  ? `Reviewed ${timeAgo(latestReview.reviewed_at)}.`
                  : 'Run devdive review to compare the codebase against the original plan.'}
              </p>
            </article>
            <article className="list-card">
              <div className="panel-kicker">Latest nudge</div>
              <h3 className="card-title">{recentNudge ? 'AI advisory available' : 'No nudges yet'}</h3>
              <p className="card-copy">{recentNudge ? recentNudge.message : 'Operational nudges will appear here when CI or reviews need attention.'}</p>
            </article>
          </div>
        </section>
      </div>
    </section>
  )
}
