import { useDevDive } from '../ws'
import { StatusBadge } from '../components/StatusBadge'

export function Issues() {
  const { state } = useDevDive()
  const totalHours = state.tasks.reduce((sum, task) => sum + Number(task.estimate_hours || 0), 0)
  const doneTasks = state.tasks.filter(task => task.status === 'done').length

  return (
    <section class="page">
      <h2 class="page-title">Issue Board</h2>
      <p class="page-subtitle">
        Planned work, current status, and the design notes that each task is meant to protect.
      </p>

      <div class="stat-grid">
        <div class="stat-card">
          <p class="stat-label">Total Estimate</p>
          <p class="stat-value">{totalHours.toFixed(1)}h</p>
        </div>
        <div class="stat-card">
          <p class="stat-label">Completion</p>
          <p class="stat-value">{doneTasks}/{state.tasks.length}</p>
        </div>
      </div>

      {state.tasks.length === 0 ? (
        <div class="empty-state">No tasks yet. Run devdive init to get started.</div>
      ) : (
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Status</th>
                <th>Estimate</th>
                <th>Design Notes</th>
                <th>Issue Link</th>
              </tr>
            </thead>
            <tbody>
              {state.tasks.map(task => (
                <tr key={`${task.id}-${task.title}`}>
                  <td>{task.title}</td>
                  <td><StatusBadge status={task.status} /></td>
                  <td>{Number(task.estimate_hours || 0).toFixed(1)}h</td>
                  <td>{task.design_notes}</td>
                  <td>
                    {task.issue_url ? (
                      <a href={task.issue_url} target="_blank" rel="noreferrer">
                        Open issue {'->'}
                      </a>
                    ) : (
                      'Pending'
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}
