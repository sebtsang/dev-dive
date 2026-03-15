import { useDevDive } from '../ws'

function formatDate(value) {
  if (!value) {
    return 'Unknown'
  }
  return new Date(value).toLocaleString()
}

export function Settings() {
  const { state } = useDevDive()

  return (
    <section class="page">
      <h2 class="page-title">Settings</h2>
      <p class="page-subtitle">
        Read-only project metadata sourced from the live `devdive.json` state.
      </p>

      <div class="list-stack">
        <div class="card">
          <div class="stat-label">Project Name</div>
          <div>{state.project.name || 'Unknown'}</div>
        </div>
        <div class="card">
          <div class="stat-label">Repo</div>
          <div>{state.project.repo || 'Unknown'}</div>
        </div>
        <div class="card">
          <div class="stat-label">Created</div>
          <div>{formatDate(state.project.created_at)}</div>
        </div>
        <div class="card">
          <div class="stat-label">Schema Version</div>
          <div>{state.meta?.version || '1.0'}</div>
        </div>
        <div class="card">
          <div class="stat-label">Init Commit</div>
          <div class="mono">{state.init_commit || 'Unknown'}</div>
        </div>
        <div class="card">
          <div class="stat-label">Rollback</div>
          <div>To roll back the dashboard to a previous state, run: <code class="mono">devdive rollback --sha &lt;commit-sha&gt;</code></div>
        </div>
        <div class="card">
          <div class="stat-label">Configuration</div>
          <div>To change settings, edit your .env file and restart DevDive.</div>
        </div>
      </div>
    </section>
  )
}
