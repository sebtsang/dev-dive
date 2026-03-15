import { Link } from '../router.jsx'
import { useDevDive } from '../ws'
import { StatusBadge } from '../components/StatusBadge'
import { buildPlanningModel, formatTimeAgo } from '../planning'

const columns = [
  { key: 'todo', title: 'To Do' },
  { key: 'in_progress', title: 'In Progress' },
  { key: 'review', title: 'In Review' },
  { key: 'rejected', title: 'Rejected' },
  { key: 'complete', title: 'Complete' },
]

function IssueCard({ task, index }) {
  const initials = (task.title || 'T')
    .split(/\s+/)
    .slice(0, 2)
    .map(word => word[0]?.toUpperCase())
    .join('')

  return (
    <article className="issue-card">
      <div className="issue-card__head">
        <span className="issue-id">{task.id ? `#${task.id}` : 'Task'}</span>
        <StatusBadge status={task.workflowStage} />
      </div>
      <h3 className="issue-title">{task.title}</h3>
      <div className="pill-row">
        {(task.labels || []).map(label => (
          <span className={`label-tag ${index % 4 === 0 ? 'tone-blue' : index % 4 === 1 ? 'tone-purple' : index % 4 === 2 ? 'tone-amber' : 'tone-slate'}`} key={`${task.id}-${label}`}>
            {label}
          </span>
        ))}
        {task.stale ? <span className="label-tag tone-rose">stale</span> : null}
        {task.readyForApproval ? <span className="label-tag tone-amber">approval gate</span> : null}
      </div>
      <p className="card-copy" style={{ marginTop: '14px' }}>{task.nextAction}</p>
      <div className="issue-meta">
        <div className="status-row">
          <span className="avatar-chip">{initials}</span>
          <span>{Number(task.estimate_hours || 0).toFixed(1)}h</span>
          <span>{task.commitCount} commits</span>
        </div>
        {task.issue_url ? (
          <a className="panel-link" href={task.issue_url} target="_blank" rel="noreferrer">
            Open issue
          </a>
        ) : (
          <span>{task.lastTouchedAt ? `Touched ${formatTimeAgo(task.lastTouchedAt)}` : 'No code evidence yet'}</span>
        )}
      </div>
    </article>
  )
}

export function Issues() {
  const { state } = useDevDive()
  const model = buildPlanningModel(state)
  const totalHours = model.tasks.reduce((sum, task) => sum + Number(task.estimate_hours || 0), 0)

  return (
    <section className="page">
      <div className="page-hero">
        <div>
          <p className="eyebrow">Issues</p>
          <h1 className="page-title">{state.project.name || 'Issue Flow'}</h1>
          <p className="page-subtitle">
            Workflow states are derived from README-led planning, actual commit evidence, and the latest review window rather than a blank-slate board.
          </p>
        </div>
        <div className="hero-actions">
          <span className="button-secondary">{totalHours.toFixed(1)}h scoped</span>
          <Link className="button" to="/reviews">Review current window</Link>
        </div>
      </div>

      <div className="board-toolbar">
        <div className="toolbar-row">
          <span className="toolbar-chip">README intent</span>
          <span className="toolbar-chip">Repo files</span>
          <span className="toolbar-chip">Commit evidence</span>
          <span className="toolbar-chip">Drift review</span>
        </div>
        <div className="toolbar-row">
          <span className="toolbar-chip--active">{model.reviewQueue.length} awaiting approval</span>
          <span className="toolbar-chip">{model.staleTasks.length} stale check-ins</span>
        </div>
      </div>

      {model.tasks.length === 0 ? (
        <div className="empty-state">No tasks yet. Run devdive init to get started.</div>
      ) : (
        <div className="board-grid">
          {columns.map(column => (
            <section className="board-column" key={column.key}>
              <div className="board-column__head">
                <div className="board-column__title">
                  <span>{column.title}</span>
                  <span className={`board-count ${model.tasksByStage[column.key][0]?.workflowTone || 'tone-slate'}`}>
                    {model.tasksByStage[column.key].length}
                  </span>
                </div>
                <span className="ghost-action">...</span>
              </div>

              <div className="board-stack">
                {model.tasksByStage[column.key].length === 0 ? (
                  <div className="board-empty">
                    {column.key === 'review'
                      ? 'Nothing is waiting on approval yet.'
                      : column.key === 'complete'
                        ? 'Completed work will settle here after review clears it.'
                        : 'Nothing parked here yet.'}
                  </div>
                ) : (
                  model.tasksByStage[column.key].map((task, index) => (
                    <IssueCard task={task} index={index} key={`${column.key}-${task.id}-${task.title}`} />
                  ))
                )}
                {column.key === 'todo' ? <div className="dashed-card">+ Rebuild from README</div> : null}
              </div>
            </section>
          ))}
        </div>
      )}
    </section>
  )
}
