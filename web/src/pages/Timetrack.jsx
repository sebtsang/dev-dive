import { useDevDive } from '../ws'
import { StatusBadge } from '../components/StatusBadge'

export function Timetrack() {
  const { state } = useDevDive()
  const total = state.tasks.reduce((sum, task) => sum + Number(task.estimate_hours || 0), 0)
  const completed = state.tasks
    .filter(task => task.status === 'done')
    .reduce((sum, task) => sum + Number(task.estimate_hours || 0), 0)
  const remaining = Math.max(total - completed, 0)
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100)

  return (
    <section class="page">
      <h2 class="page-title">Time Track</h2>
      <p class="page-subtitle">
        A simple burndown readout from the plan estimates and the task statuses DevDive keeps in sync.
      </p>

      {state.tasks.length === 0 ? (
        <div class="empty-state">No tasks yet.</div>
      ) : (
        <>
          <div class="stat-grid">
            <div class="stat-card">
              <p class="stat-label">Estimated</p>
              <p class="stat-value">{total.toFixed(1)}h</p>
            </div>
            <div class="stat-card">
              <p class="stat-label">Completed</p>
              <p class="stat-value">{completed.toFixed(1)}h</p>
            </div>
            <div class="stat-card">
              <p class="stat-label">Remaining</p>
              <p class="stat-value">{remaining.toFixed(1)}h</p>
            </div>
          </div>

          <div class="card" style={{ marginBottom: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
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
