import { useDevDive } from '../ws'
import { buildPlanningModel, formatTimeAgo } from '../planning'

export function CommitLog() {
  const { state } = useDevDive()
  const model = buildPlanningModel(state)
  const commits = [...(state.commits || [])].reverse()
  const stateCommits = [...(state.state_commits || [])].sort((left, right) => new Date(right.timestamp) - new Date(left.timestamp))
  const progressedCount = commits.reduce((sum, commit) => sum + (commit.tasks_progressed?.length || 0), 0)
  const completedCount = commits.reduce((sum, commit) => sum + (commit.tasks_updated?.length || 0), 0)

  return (
    <section className="page">
      <div className="page-hero">
        <div>
          <p className="eyebrow">Commits</p>
          <h1 className="page-title">Delivery Timeline</h1>
          <p className="page-subtitle">
            Local commit analysis and synced GitHub-backed DevDive state history.
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

      <div className="panel" style={{ marginBottom: '1.5rem' }}>
        <div className="panel-header">
          <h2 className="panel-title">Recent Repository Commit Analysis</h2>
        </div>
        {commits.length === 0 ? (
          <div className="empty-state">No commits analysed yet. DevDive analyses your commits as you push.</div>
        ) : (
          <div className="stack-list">
            {commits.map(commit => (
              <article className="list-card" key={`${commit.commit_hash}-${commit.analysed_at}`}>
                <div className="card-head">
                  <strong className="mono">{(commit.commit_hash || '').slice(0, 7) || 'unknown'}</strong>
                  <span className="card-time">{formatTimeAgo(commit.analysed_at)}</span>
                </div>
                <h3 className="card-title">{commit.summary}</h3>
                <p className="card-copy">Commit analysis updated task progress without relying on manual issue-closing keywords.</p>
                <div className="pill-row">
                  {(commit.tasks_updated || []).map(id => (
                    <span className="label-tag tone-green" key={`closed-${commit.commit_hash}-${id}`}>
                      closed #{id}
                    </span>
                  ))}
                  {(commit.tasks_progressed || []).map(id => (
                    <span className="label-tag tone-blue" key={`progress-${commit.commit_hash}-${id}`}>
                      progressed #{id}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      <div className="panel">
        <div className="panel-header">
          <h2 className="panel-title">Recent GitHub State Commits</h2>
        </div>
        {stateCommits.length === 0 ? (
          <div className="empty-state">No GitHub state commits have been synced yet.</div>
        ) : (
          <div className="stack-list">
            {stateCommits.map(commit => (
              <article className="list-card" key={`${commit.sha}-${commit.timestamp}`}>
                <div className="card-head">
                  <strong className="mono">{(commit.sha || '').slice(0, 7) || 'unknown'}</strong>
                  <span className="card-time">{formatTimeAgo(commit.timestamp)}</span>
                </div>
                <h3 className="card-title">{commit.message}</h3>
                <p className="card-copy">This timeline comes from GitHub commits to the tracked `devdive.json` state file.</p>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
