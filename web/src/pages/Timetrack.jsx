import { useDevDive } from '../ws'
import { StatusBadge } from '../components/StatusBadge'

export function Timetrack() {
  const { state } = useDevDive()
  const total = state.tasks.reduce((sum, task) => sum + Number(task.estimate_hours || 0), 0)
  const completed = state.tasks
    .filter(task => task.status === 'complete')
    .reduce((sum, task) => sum + Number(task.estimate_hours || 0), 0)
  const remaining = Math.max(total - completed, 0)
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100)

  return (
    <section class="page">
      <div class="page-hero">
        <div>
          <p class="eyebrow">Time</p>
          <h1 class="page-title">Burndown and Throughput</h1>
          <p class="page-subtitle">
            A simple burndown readout from the plan estimates and the task statuses DevDive keeps in sync.
          </p>
        </div>
      </div>

      {state.tasks.length === 0 ? (
        <div class="empty-state">No tasks yet.</div>
      ) : (
        <>
          <div class="metric-grid">
            <article class="metric-card">
              <div class="metric-card__top">
                <div class="metric-card__label">Estimated</div>
                <div class="metric-icon metric-icon--blue">ET</div>
              </div>
              <div class="metric-card__value">{total.toFixed(1)}h</div>
            </article>
            <article class="metric-card">
              <div class="metric-card__top">
                <div class="metric-card__label">Completed</div>
                <div class="metric-icon metric-icon--green">DN</div>
              </div>
              <div class="metric-card__value">{completed.toFixed(1)}h</div>
            </article>
            <article class="metric-card">
              <div class="metric-card__top">
                <div class="metric-card__label">Remaining</div>
                <div class="metric-icon metric-icon--amber">RM</div>
              </div>
              <div class="metric-card__value">{remaining.toFixed(1)}h</div>
            </article>
          </div>

          <div class="panel">
            <div class="panel-header">
              <strong>Burndown Progress</strong>
              <span>{percent}%</span>
            </div>
            <div class="progress-track">
              <div class="progress-fill" style={{ width: `${percent}%` }} />
            </div>
          </div>

          <div class="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Estimate</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {state.tasks.map(task => (
                  <tr key={`${task.id}-${task.title}`}>
                    <td>{task.title}</td>
                    <td>{Number(task.estimate_hours || 0).toFixed(1)}h</td>
                    <td><StatusBadge status={task.status} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </section>
  )
}
