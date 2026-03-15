import { useDevDive } from '../ws'
import { StatusBadge } from '../components/StatusBadge'

function timeAgo(hours) {
  if (hours <= 1) {
    return 'Updated just now'
  }
  if (hours < 24) {
    return `Updated ${Math.round(hours)}h ago`
  }
  return `Updated ${Math.round(hours / 24)}d ago`
}

function columnTone(key) {
  if (key === 'todo') {
    return 'tone-slate'
  }
  if (key === 'in_progress') {
    return 'tone-blue'
  }
  if (key === 'review') {
    return 'tone-amber'
  }
  if (key === 'rejected') {
    return 'tone-rose'
  }
  return 'tone-green'
}

function IssueCard({ task, index }) {
  const initials = (task.title || 'T')
    .split(/\s+/)
    .slice(0, 2)
    .map(word => word[0]?.toUpperCase())
    .join('')

  return (
    <article class="issue-card">
      <div class="issue-card__head">
        <span class="issue-id">{task.id ? `#${task.id}` : 'Task'}</span>
        <StatusBadge status={task.status} />
      </div>
      <h3 class="issue-title">{task.title}</h3>
      <div class="pill-row">
        {(task.labels || []).map(label => (
          <span class={`label-tag ${index % 4 === 0 ? 'tone-blue' : index % 4 === 1 ? 'tone-purple' : index % 4 === 2 ? 'tone-amber' : 'tone-slate'}`} key={`${task.id}-${label}`}>
            {label}
          </span>
        ))}
      </div>
      <p class="card-copy" style={{ marginTop: '14px' }}>{task.design_notes}</p>
      <div class="issue-meta">
        <div class="status-row">
          <span class="avatar-chip">{initials}</span>
          <span>{Number(task.estimate_hours || 0).toFixed(1)}h</span>
        </div>
        {task.issue_url ? (
          <a class="panel-link" href={task.issue_url} target="_blank" rel="noreferrer">
            Open issue
          </a>
        ) : (
          <span>{timeAgo((index + 1) * 3)}</span>
        )}
      </div>
    </article>
  )
}

export function Issues() {
  const { state } = useDevDive()
  const todoTasks = state.tasks.filter(task => task.status === 'todo')
  const inProgressTasks = state.tasks.filter(task => task.status === 'in_progress')
  const reviewTasks = state.tasks.filter(task => task.status === 'review')
  const rejectedTasks = state.tasks.filter(task => task.status === 'rejected')
  const completedTasks = state.tasks.filter(task => task.status === 'complete')
  const totalHours = state.tasks.reduce((sum, task) => sum + Number(task.estimate_hours || 0), 0)
  const columns = [
    { key: 'todo', title: 'To Do', tasks: todoTasks },
    { key: 'in_progress', title: 'In Progress', tasks: inProgressTasks },
    { key: 'review', title: 'In Review', tasks: reviewTasks },
    { key: 'rejected', title: 'Rejected', tasks: rejectedTasks },
    { key: 'complete', title: 'Done', tasks: completedTasks },
  ]

  return (
    <section class="page">
      <div class="page-hero">
        <div>
          <p class="eyebrow">Issues</p>
          <h1 class="page-title">{state.project.name || 'Sprint Board'}</h1>
          <p class="page-subtitle">
            Active development board for the generated plan, grouped into the working states that matter most day to day.
          </p>
        </div>
        <div class="hero-actions">
          <span class="button-secondary">{totalHours.toFixed(1)}h scoped</span>
          <a class="button" href="/commits">New activity</a>
        </div>
      </div>

      <div class="board-toolbar">
        <div class="toolbar-row">
          <span class="toolbar-chip">Filters</span>
          <span class="toolbar-chip">Assignee</span>
          <span class="toolbar-chip">Label</span>
          <span class="toolbar-chip">Milestone</span>
        </div>
        <div class="toolbar-row">
          <span class="toolbar-chip--active">Only my issues</span>
          <span class="toolbar-chip">Recently updated</span>
        </div>
      </div>

      {state.tasks.length === 0 ? (
        <div class="empty-state">No tasks yet. Run devdive init to get started.</div>
      ) : (
        <div class="board-grid">
          {columns.map(column => (
            <section class="board-column" key={column.key}>
              <div class="board-column__head">
                <div class="board-column__title">
                  <span>{column.title}</span>
                  <span class={`board-count ${columnTone(column.key)}`}>{column.tasks.length}</span>
                </div>
                <span class="ghost-action">...</span>
              </div>

              <div class="board-stack">
                {column.tasks.length === 0 ? (
                  <div class="board-empty">Nothing parked here yet.</div>
                ) : (
                  column.tasks.map((task, index) => (
                    <IssueCard task={task} index={index} key={`${column.key}-${task.id}-${task.title}`} />
                  ))
                )}
                {column.key === 'todo' ? <div class="dashed-card">+ Create Issue</div> : null}
              </div>
            </section>
          ))}
        </div>
      )}
    </section>
  )
}
