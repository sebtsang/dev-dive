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
  const commits = [...state.commits].reverse()

  return (
    <section class="page">
      <div class="page-hero">
        <div>
          <p class="eyebrow">Commits</p>
          <h1 class="page-title">Delivery Timeline</h1>
          <p class="page-subtitle">
            Semantic commit summaries from the LLM instead of keyword-based issue closing.
          </p>
        </div>
      </div>

      {commits.length === 0 ? (
        <div class="empty-state">No commits analysed yet. DevDive analyses your commits as you push.</div>
      ) : (
        <div class="stack-list">
          {commits.map(commit => (
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
    </section>
  )
}
