import { useDevDive } from '../ws'
import { buildPlanningModel, formatTimeAgo } from '../planning'

export function CommitLog() {
  const { state } = useDevDive()
  const model = buildPlanningModel(state)
  const commits = [...state.commits].reverse()
  const completedCount = state.commits.reduce((sum, commit) => sum + (commit.tasks_updated?.length || 0), 0)
  const progressedCount = state.commits.reduce((sum, commit) => sum + (commit.tasks_progressed?.length || 0), 0)

  return (
    <section className="page">
      <div className="page-hero">
        <div>
          <p className="eyebrow">Commits</p>
          <h1 className="page-title">Delivery Timeline</h1>
          <p className="page-subtitle">
            Recent commits are treated as planning evidence so issue state can be re-evaluated incrementally instead of by keyword heuristics.
          </p>
        </div>
      </div>

      <div className="metric-grid">
        <article className="metric-card">
          <div className="metric-card__top">
            <div className="metric-card__label">Analysed Commits</div>
            <div className="metric-icon metric-icon--blue">CM</div>
          </div>
          <div className="metric-card__value">{state.commits.length}</div>
        </article>
        <article className="metric-card">
          <div className="metric-card__top">
            <div className="metric-card__label">Since Last Review</div>
            <div className="metric-icon metric-icon--amber">RV</div>
          </div>
          <div className="metric-card__value">{model.commitsSinceReview.length}</div>
        </article>
        <article className="metric-card">
          <div className="metric-card__top">
            <div className="metric-card__label">Issues Progressed</div>
            <div className="metric-icon metric-icon--purple">IP</div>
          </div>
          <div className="metric-card__value">{progressedCount}</div>
        </article>
        <article className="metric-card">
          <div className="metric-card__top">
            <div className="metric-card__label">Issues Completed</div>
            <div className="metric-icon metric-icon--green">DN</div>
          </div>
          <div className="metric-card__value">{completedCount}</div>
        </article>
      </div>

      {commits.length === 0 ? (
        <div className="empty-state">No commits analysed yet. DevDive analyses your commits as you push.</div>
      ) : (
        <div className="stack-list">
          {commits.map(commit => {
            const withinReviewWindow = model.latestReviewAt
              ? new Date(commit.analysed_at) > new Date(model.latestReviewAt)
              : true

            return (
              <article className="list-card" key={`${commit.commit_hash}-${commit.analysed_at}`}>
                <div className="card-head">
                  <strong className="mono">{(commit.commit_hash || '').slice(0, 7) || 'unknown'}</strong>
                  <span className="card-time">{formatTimeAgo(commit.analysed_at)}</span>
                </div>
                <h3 className="card-title">{commit.summary}</h3>
                <p className="card-copy">
                  {withinReviewWindow
                    ? 'This commit is still inside the active review window.'
                    : 'This commit has already been covered by the latest review window.'}
                </p>
                <div className="pill-row">
                  {(commit.tasks_updated || []).map(id => (
                    <span className="label-tag tone-green" key={`closed-${commit.commit_hash}-${id}`}>
                      complete #{id}
                    </span>
                  ))}
                  {(commit.tasks_progressed || []).map(id => (
                    <span className="label-tag tone-blue" key={`progress-${commit.commit_hash}-${id}`}>
                      progress #{id}
                    </span>
                  ))}
                </div>
              </article>
            )
          })}
        </div>
      )}
    </section>
  )
}
