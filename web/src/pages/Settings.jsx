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
      <div class="page-hero">
        <div>
          <p class="eyebrow">Settings</p>
          <h1 class="page-title">Project Configuration</h1>
          <p class="page-subtitle">
            Read-only project metadata sourced from the live `devdive.json` state.
          </p>
        </div>
      </div>

      <div class="settings-grid">
        <article class="summary-card">
          <div class="panel-kicker">Project Name</div>
          <h3 class="card-title">{state.project.name || 'Unknown'}</h3>
        </article>
        <article class="summary-card">
          <div class="panel-kicker">Repo</div>
          <h3 class="card-title">{state.project.repo || 'Unknown'}</h3>
        </article>
        <article class="summary-card">
          <div class="panel-kicker">Created</div>
          <h3 class="card-title">{formatDate(state.project.created_at)}</h3>
        </article>
        <article class="summary-card">
          <div class="panel-kicker">Schema Version</div>
          <h3 class="card-title">{state.meta?.version || '1.0'}</h3>
        </article>
        <article class="summary-card">
          <div class="panel-kicker">Init Commit</div>
          <h3 class="card-title mono">{state.init_commit || 'Unknown'}</h3>
        </article>
        <article class="summary-card">
          <div class="panel-kicker">Rollback</div>
          <p class="card-copy">Run <code class="mono">devdive rollback --sha &lt;commit-sha&gt;</code> to restore a prior state snapshot.</p>
        </article>
        <article class="summary-card">
          <div class="panel-kicker">Configuration</div>
          <p class="card-copy">To change settings, edit your .env file and restart DevDive.</p>
        </article>
      </div>
    </section>
  )
}
