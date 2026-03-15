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
    return `${minutes} minute${minutes === 1 ? '' : 's'} ago`
  }
  const hours = Math.floor(minutes / 60)
  if (hours < 24) {
    return `${hours} hour${hours === 1 ? '' : 's'} ago`
  }
  const days = Math.floor(hours / 24)
  return `${days} day${days === 1 ? '' : 's'} ago`
}

export function CommitLog() {
  const { state } = useDevDive()
  const commits = [...state.commits].reverse()

  return (
    <section class="page">
      <h2 class="page-title">Commit Analysis</h2>
      <p class="page-subtitle">
        Semantic commit summaries from the LLM instead of keyword-based issue closing.
      </p>

      {commits.length === 0 ? (
        <div class="empty-state">No commits analysed yet. DevDive analyses your commits as you push.</div>
      ) : (
        <div class="list-stack">
          {commits.map(commit => (
            <article class="card" key={`${commit.commit_hash}-${commit.analysed_at}`}>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap' }}>
                <strong class="mono">{(commit.commit_hash || '').slice(0, 7) || 'unknown'}</strong>
                <span style={{ color: 'var(--muted)' }}>{timeAgo(commit.analysed_at)}</span>
              </div>
              <div style={{ marginTop: '10px', fontSize: '1.03rem', lineHeight: 1.6 }}>{commit.summary}</div>
              <div class="pill-row">
                {(commit.tasks_updated || []).map(id => (
                  <span
                    key={`closed-${commit.commit_hash}-${id}`}
                    style={{
                      padding: '6px 10px',
                      borderRadius: '999px',
                      background: '#dff5e7',
                      color: '#1e7c49',
                      fontWeight: 700,
                      fontSize: '0.78rem',
                    }}
                  >
                    closed #{id}
                  </span>
                ))}
                {(commit.tasks_progressed || []).map(id => (
                  <span
                    key={`progress-${commit.commit_hash}-${id}`}
                    style={{
                      padding: '6px 10px',
                      borderRadius: '999px',
                      background: '#d8ebff',
                      color: '#155e9a',
                      fontWeight: 700,
                      fontSize: '0.78rem',
                    }}
                  >
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
