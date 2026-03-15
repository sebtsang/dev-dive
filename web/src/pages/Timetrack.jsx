import { Link } from '../router.jsx'
import { useDevDive } from '../ws'
import { StatusBadge } from '../components/StatusBadge'
import { buildPlanningModel, formatTimeAgo } from '../planning'

export function Timetrack() {
  const { state } = useDevDive()
  const model = buildPlanningModel(state)
  const total = model.tasks.reduce((sum, task) => sum + Number(task.estimate_hours || 0), 0)
  const completed = model.completedTasks.reduce((sum, task) => sum + Number(task.estimate_hours || 0), 0)
  const review = model.reviewQueue.reduce((sum, task) => sum + Number(task.estimate_hours || 0), 0)
  const remaining = Math.max(total - completed, 0)
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100)

  return (
    <section className="page">
      <div className="page-hero">
        <div>
          <p className="eyebrow">Time</p>
          <h1 className="page-title">Burndown and Throughput</h1>
          <p className="page-subtitle">
            Burndown now distinguishes implemented work waiting on review from work that is actually complete.
          </p>
        </div>
      </div>

      {model.tasks.length === 0 ? (
        <div className="empty-state">No tasks yet.</div>
      ) : (
        <>
          <div className="metric-grid">
            <article className="metric-card">
              <div className="metric-card__top">
                <div className="metric-card__label">Estimated</div>
                <div className="metric-icon metric-icon--blue">ET</div>
              </div>
              <div className="metric-card__value">{total.toFixed(1)}h</div>
            </article>
            <article className="metric-card">
              <div className="metric-card__top">
                <div className="metric-card__label">Complete</div>
                <div className="metric-icon metric-icon--green">OK</div>
              </div>
              <div className="metric-card__value">{completed.toFixed(1)}h</div>
            </article>
            <article className="metric-card">
              <div className="metric-card__top">
                <div className="metric-card__label">Awaiting Review</div>
                <div className="metric-icon metric-icon--amber">RV</div>
              </div>
              <div className="metric-card__value">{review.toFixed(1)}h</div>
            </article>
            <article className="metric-card">
              <div className="metric-card__top">
                <div className="metric-card__label">Remaining</div>
                <div className="metric-icon metric-icon--purple">RM</div>
              </div>
              <div className="metric-card__value">{remaining.toFixed(1)}h</div>
            </article>
          </div>

          <div className="panel">
            <div className="panel-header">
              <strong>Burndown Progress</strong>
              <span>{percent}%</span>
            </div>
            <div className="progress-track">
              <div className="progress-fill" style={{ width: `${percent}%` }} />
            </div>
          </div>

          <div className="split-grid">
            <section className="panel">
              <div className="panel-header">
                <h2 className="panel-title">Workflow Timing</h2>
                <Link className="panel-link" to="/issues">Open board</Link>
              </div>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Estimate</th>
                      <th>Stage</th>
                      <th>Last Touched</th>
                    </tr>
                  </thead>
                  <tbody>
                    {model.tasks.map(task => (
                      <tr key={`${task.id}-${task.title}`}>
                        <td>{task.title}</td>
                        <td>{Number(task.estimate_hours || 0).toFixed(1)}h</td>
                        <td><StatusBadge status={task.workflowStage} /></td>
                        <td>{task.lastTouchedAt ? formatTimeAgo(task.lastTouchedAt) : 'No code evidence yet'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="panel">
              <div className="panel-header">
                <h2 className="panel-title">Check-ins</h2>
                <Link className="panel-link" to="/nudges">Open guidance</Link>
              </div>
              {model.staleTasks.length === 0 ? (
                <div className="empty-state">No stale tasks are asking for a check-in.</div>
              ) : (
                <div className="stack-list">
                  {model.staleTasks.slice(0, 4).map(task => (
                    <article className="list-card" key={`checkin-${task.id || task.title}`}>
                      <div className="card-head">
                        <div>
                          <div className="panel-kicker">{task.id ? `Issue #${task.id}` : 'Planned task'}</div>
                          <h3 className="card-title">{task.title}</h3>
                        </div>
                        <StatusBadge status={task.workflowStage} />
                      </div>
                      <p className="card-copy">{task.nextAction}</p>
                    </article>
                  ))}
                </div>
              )}
            </section>
          </div>
        </>
      )}
    </section>
  )
}
