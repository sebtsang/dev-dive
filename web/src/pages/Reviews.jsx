import { Link } from '../router.jsx'
import { useDevDive } from '../ws'
import { StatusBadge } from '../components/StatusBadge'
import { buildPlanningModel, formatTimeAgo } from '../planning'

export function Reviews() {
  const { state } = useDevDive()
  const model = buildPlanningModel(state)
  const reviews = [...state.reviews].reverse()
  const latest = reviews[0]

  return (
    <section className="page">
      <div className="page-hero">
        <div>
          <p className="eyebrow">Reviews</p>
          <h1 className="page-title">Architecture Reviews</h1>
          <p className="page-subtitle">
            Review windows separate code that looks ready from work that is actually complete after the latest review pass.
          </p>
        </div>
      </div>

      {latest && latest.findings.length === 0 ? (
        <div className="banner">No drift detected in the latest review window.</div>
      ) : null}

      <div className="metric-grid">
        <article className="metric-card">
          <div className="metric-card__top">
            <div className="metric-card__label">Ready For Approval</div>
            <div className="metric-icon metric-icon--amber">RV</div>
          </div>
          <div className="metric-card__value">{model.reviewQueue.length}</div>
        </article>
        <article className="metric-card">
          <div className="metric-card__top">
            <div className="metric-card__label">Actually Complete</div>
            <div className="metric-icon metric-icon--green">OK</div>
          </div>
          <div className="metric-card__value">{model.completedTasks.length}</div>
        </article>
        <article className="metric-card">
          <div className="metric-card__top">
            <div className="metric-card__label">Commits In Scope</div>
            <div className="metric-icon metric-icon--blue">CM</div>
          </div>
          <div className="metric-card__value">{model.commitsSinceReview.length}</div>
        </article>
        <article className="metric-card">
          <div className="metric-card__top">
            <div className="metric-card__label">Latest Findings</div>
            <div className="metric-icon metric-icon--purple">DR</div>
          </div>
          <div className="metric-card__value">{latest?.findings.length || 0}</div>
        </article>
      </div>

      <div className="split-grid">
        <section className="panel">
          <div className="panel-header">
            <h2 className="panel-title">Incremental Review Scope</h2>
            <Link className="panel-link" to="/commits">Open commits</Link>
          </div>
          <div className="stack-list">
            <article className="list-card">
              <div className="card-head">
                <div>
                  <div className="panel-kicker">Review baseline</div>
                  <h3 className="card-title">{model.latestReviewAt ? `Last review ${formatTimeAgo(model.latestReviewAt)}` : 'No review baseline yet'}</h3>
                </div>
                <StatusBadge status={model.latestReviewAt ? 'active' : 'manual'} />
              </div>
              <p className="card-copy">
                {model.latestReviewAt
                  ? `${model.commitsSinceReview.length} commits and ${model.reviewQueue.length} issues are waiting to be re-evaluated.`
                  : `The first review should inspect all ${state.commits.length} analysed commits since init.`}
              </p>
            </article>
            <article className="list-card">
              <div className="card-head">
                <div>
                  <div className="panel-kicker">Approval gate</div>
                  <h3 className="card-title">{model.reviewQueue.length} issues appear ready, {model.completedTasks.length} are actually complete</h3>
                </div>
                <StatusBadge status="review" />
              </div>
              <p className="card-copy">
                DevDive now keeps a separate in-review state so changed code can be approved before it settles into complete.
              </p>
            </article>
          </div>
        </section>

        <section className="panel">
          <div className="panel-header">
            <h2 className="panel-title">Approval Queue</h2>
            <Link className="panel-link" to="/issues">Open board</Link>
          </div>
          {model.reviewQueue.length === 0 ? (
            <div className="empty-state">No issues are waiting on approval right now.</div>
          ) : (
            <div className="stack-list">
              {model.reviewQueue.slice(0, 5).map(task => (
                <article className="list-card" key={`review-${task.id || task.title}`}>
                  <div className="card-head">
                    <div>
                      <div className="panel-kicker">{task.id ? `Issue #${task.id}` : 'Planned task'}</div>
                      <h3 className="card-title">{task.title}</h3>
                    </div>
                    <StatusBadge status={task.workflowStage} />
                  </div>
                  <p className="card-copy">{task.nextAction}</p>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>

      {reviews.length === 0 ? (
        <div className="empty-state">No design reviews yet. DevDive reviews your architecture every 10 commits.</div>
      ) : (
        <div className="stack-list">
          {reviews.map(review => (
            <article className="list-card" key={review.reviewed_at}>
              <div style={{ marginBottom: '12px', color: 'var(--text-muted)' }}>
                Reviewed {formatTimeAgo(review.reviewed_at)}
              </div>
              {review.findings.length === 0 ? (
                <div className="card-copy">No findings for this review.</div>
              ) : (
                <div className="stack-list">
                  {review.findings.map((finding, index) => (
                    <article key={`${finding.file}-${finding.detected_at}-${index}`} className="summary-card">
                      <div className="card-head">
                        <code className="mono">{finding.file}</code>
                        <StatusBadge status={finding.severity} />
                      </div>
                      <p className="card-copy">{finding.finding}</p>
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
