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

export function CommitLog() {
  const { state } = useDevDive()
  const analysedCommits = [...(state.commits || [])].reverse()
  const stateCommits = [...(state.state_commits || [])]
    .sort((left, right) => new Date(right.timestamp) - new Date(left.timestamp))

  return (
    <section class="page">
      <div class="page-hero">
        <div>
          <p class="eyebrow">Commits</p>
          <h1 class="page-title">Delivery Timeline</h1>
          <p class="page-subtitle">
            Local commit analysis and synced DevDive state commits from GitHub.
          </p>
        </div>
      </div>

      <div class="panel" style={{ marginBottom: '1.5rem' }}>
        <div class="panel-header">
          <h2 class="panel-title">Recent Repository Commit Analysis</h2>
        </div>
        {analysedCommits.length === 0 ? (
          <div class="empty-state">No local commit analysis yet. DevDive analyses project commits as they are evaluated.</div>
        ) : (
          <div class="stack-list">
            {analysedCommits.map(commit => (
              <article class="list-card" key={`${commit.commit_hash}-${commit.analysed_at}`}>
                <div class="card-head">
                  <strong class="mono">{(commit.commit_hash || '').slice(0, 7) || 'unknown'}</strong>
                  <span class="card-time">{timeAgo(commit.analysed_at)}</span>
                </div>
                <h3 class="card-title">{commit.summary}</h3>
                <p class="card-copy">Commit analysis updated task progress without relying on manual issue-closing keywords.</p>
                <div class="pill-row">
                  {(commit.tasks_updated || []).map(id => (
                    <span class="label-tag tone-green" key={`closed-${commit.commit_hash}-${id}`}>
                      closed #{id}
                    </span>
                  ))}
                  {(commit.tasks_progressed || []).map(id => (
                    <span class="label-tag tone-blue" key={`progress-${commit.commit_hash}-${id}`}>
                      progressed #{id}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      <div class="panel">
        <div class="panel-header">
          <h2 class="panel-title">Synced DevDive State Commits</h2>
        </div>
        {stateCommits.length === 0 ? (
          <div class="empty-state">No remote DevDive state commits have been synced yet.</div>
        ) : (
          <div class="stack-list">
            {stateCommits.map(commit => (
              <article class="list-card" key={`${commit.sha}-${commit.timestamp}`}>
                <div class="card-head">
                  <strong class="mono">{(commit.sha || '').slice(0, 7) || 'unknown'}</strong>
                  <span class="card-time">{timeAgo(commit.timestamp)}</span>
                </div>
                <h3 class="card-title">{commit.message}</h3>
                <p class="card-copy">This timeline comes from GitHub commits to the tracked `devdive.json` state file.</p>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
