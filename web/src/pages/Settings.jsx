import { useDevDive } from '../ws'
import { StatusBadge } from '../components/StatusBadge'
import {
  buildPlanningModel,
  formatDateTime,
  planAssumptions,
  planGroups,
} from '../planning'

export function Settings() {
  const { state } = useDevDive()
  const model = buildPlanningModel(state)

  return (
    <section className="page">
      <div className="page-hero">
        <div>
          <p className="eyebrow">Settings</p>
          <h1 className="page-title">Project Configuration and Intent</h1>
          <p className="page-subtitle">
            Project metadata, planning assumptions, and the commands that refine README-led intent over time.
          </p>
        </div>
      </div>

      <div className="settings-grid">
        <article className="summary-card">
          <div className="panel-kicker">Project Name</div>
          <h3 className="card-title">{state.project.name || 'Unknown'}</h3>
        </article>
        <article className="summary-card">
          <div className="panel-kicker">Repo</div>
          <h3 className="card-title">{state.project.repo || 'Unknown'}</h3>
        </article>
        <article className="summary-card">
          <div className="panel-kicker">Created</div>
          <h3 className="card-title">{formatDateTime(state.project.created_at)}</h3>
        </article>
        <article className="summary-card">
          <div className="panel-kicker">Schema Version</div>
          <h3 className="card-title">{state.meta?.version || '1.0'}</h3>
        </article>
        <article className="summary-card">
          <div className="panel-kicker">Init Commit</div>
          <h3 className="card-title mono">{state.init_commit || 'Unknown'}</h3>
        </article>
        <article className="summary-card">
          <div className="panel-kicker">Rollback</div>
          <p className="card-copy">Run <code className="mono">devdive rollback --sha &lt;commit-sha&gt;</code> to restore a prior state snapshot.</p>
        </article>
      </div>

      <div className="split-grid">
        <section className="panel">
          <div className="panel-header">
            <h2 className="panel-title">Intent Sources</h2>
            <span className="panel-link">README first</span>
          </div>
          <div className="stack-list">
            {model.intentSources.map(source => (
              <article className="list-card" key={source.title}>
                <div className="card-head">
                  <div>
                    <div className="panel-kicker">{source.title}</div>
                    <h3 className="card-title">{source.detail}</h3>
                  </div>
                  <StatusBadge status={source.status} />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="panel">
          <div className="panel-header">
            <h2 className="panel-title">Refine Intent</h2>
            <span className="panel-link">CLI recipes</span>
          </div>
          <div className="stack-list">
            {model.commandRecipes.map(recipe => (
              <article className="list-card" key={recipe.command}>
                <div className="panel-kicker">{recipe.title}</div>
                <h3 className="card-title mono">{recipe.command}</h3>
                <p className="card-copy">{recipe.detail}</p>
              </article>
            ))}
          </div>
        </section>
      </div>

      <div className="split-grid">
        <section className="panel">
          <div className="panel-header">
            <h2 className="panel-title">Plan Scope</h2>
            <span className="panel-link">Message file</span>
          </div>
          <div className="stack-list">
            {planGroups.map(group => (
              <article className="list-card" key={group.key}>
                <div className="panel-kicker">{group.title}</div>
                <div className="stack-list">
                  {group.items.map(item => (
                    <div className="card-copy" key={item}>- {item}</div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="panel">
          <div className="panel-header">
            <h2 className="panel-title">Assumptions</h2>
            <span className="panel-link">Operational rules</span>
          </div>
          <div className="stack-list">
            {planAssumptions.map(item => (
              <article className="list-card" key={item}>
                <p className="card-copy">{item}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  )
}
