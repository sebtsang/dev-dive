import { Link } from '../router.jsx'
import { useDevDive } from '../ws'
import { StatusBadge } from '../components/StatusBadge'
import { buildPlanningModel, formatTimeAgo } from '../planning'

function recentActivity(state) {
  const events = []

  for (const item of (state.commits || []).slice(-4)) {
    events.push({
      id: `commit-${item.commit_hash}`,
      title: item.summary || 'Commit analysis recorded',
      body: `Used real code changes to move ${item.tasks_progressed?.length || 0} issues forward and close ${item.tasks_updated?.length || 0}.`,
      time: item.analysed_at,
      tone: 'blue',
      icon: 'CM',
    })
  }

  for (const item of (state.nudges || []).slice(-3)) {
    events.push({
      id: `nudge-${item.created_at}`,
      title: 'AI guidance posted',
      body: item.message,
      time: item.created_at,
      tone: 'purple',
      icon: 'AI',
    })
  }

  for (const item of (state.reviews || []).slice(-2)) {
    events.push({
      id: `review-${item.reviewed_at}`,
      title: item.findings.length === 0 ? 'Review cleared the current window' : `Review found ${item.findings.length} drift items`,
      body: item.findings.length === 0
        ? 'No architectural drift detected in the latest review scope.'
        : item.findings[0]?.finding || 'Recent work needs follow-up before it is complete.',
      time: item.reviewed_at,
      tone: item.findings.some(finding => finding.severity === 'critical') ? 'rose' : 'green',
      icon: 'RV',
    })
  }

  if (state.ci?.last_run) {
    events.push({
      id: `ci-${state.ci.last_run}`,
      title: `CI is ${state.ci.status.replaceAll('_', ' ')}`,
      body: state.ci.workflow_url ? 'Latest workflow run is linked on the Actions page.' : 'Waiting for a workflow run URL.',
      time: state.ci.last_run,
      tone: state.ci.status === 'failing' ? 'rose' : 'green',
      icon: 'CI',
    })
  }

  return events
    .filter(item => item.time)
    .sort((left, right) => new Date(right.time) - new Date(left.time))
    .slice(0, 6)
}

export function Dashboard() {
  const { state } = useDevDive()
  const model = buildPlanningModel(state)
  const activity = recentActivity(state)
  const activeIssues = model.tasks.filter(task => task.workflowStage !== 'complete' && task.workflowStage !== 'rejected')
  const priorityTasks = model.priorityTasks.slice(0, 3)
  const staleTasks = model.staleTasks.slice(0, 4)

  return (
    <section className="page">
      <div className="page-hero">
        <div>
          <p className="eyebrow">Dashboard</p>
          <h1 className="page-title">{state.project.name || 'DevDive Overview'}</h1>
          <p className="page-subtitle">
            A README-led operations view that uses repo evidence, recent commits, and review windows to prioritize what should move next.
          </p>
        </div>
        <div className="hero-actions">
          <Link className="button-secondary" to="/issues">Open issue flow</Link>
          <Link className="button" to="/reviews">Inspect review window</Link>
        </div>
      </div>

      <div className="metric-grid">
        <article className="metric-card">
          <div className="metric-card__top">
            <div className="metric-card__label">Active Issues</div>
            <div className="metric-icon metric-icon--blue">IS</div>
          </div>
          <div className="metric-card__value">
            {activeIssues.length}
            <span className="metric-card__delta">{model.tasks.length} tracked</span>
          </div>
        </article>
        <article className="metric-card">
          <div className="metric-card__top">
            <div className="metric-card__label">Ready For Approval</div>
            <div className="metric-icon metric-icon--amber">RV</div>
          </div>
          <div className="metric-card__value">
            {model.reviewQueue.length}
            <span className="metric-card__delta">{model.completedTasks.length} confirmed complete</span>
          </div>
        </article>
        <article className="metric-card">
          <div className="metric-card__top">
            <div className="metric-card__label">Stale Check-ins</div>
            <div className="metric-icon metric-icon--purple">CK</div>
          </div>
          <div className="metric-card__value">
            {model.staleTasks.length}
            <span className="metric-card__delta">{state.nudges.length} nudges recorded</span>
          </div>
        </article>
        <article className="metric-card">
          <div className="metric-card__top">
            <div className="metric-card__label">Commits Since Review</div>
            <div className="metric-icon metric-icon--green">CM</div>
          </div>
          <div className="metric-card__value">
            {model.commitsSinceReview.length}
            <span className="metric-card__delta">
              {model.latestReviewAt ? `Latest review ${formatTimeAgo(model.latestReviewAt)}` : 'No review baseline yet'}
            </span>
          </div>
        </article>
      </div>

      <div className="split-grid">
        <section className="panel">
          <div className="panel-header">
            <h2 className="panel-title">Recent Activity</h2>
            <Link className="panel-link" to="/commits">Open timeline</Link>
          </div>
          {activity.length === 0 ? (
            <div className="empty-state">No recent activity yet. Run init and start committing to populate the dashboard.</div>
          ) : (
            <div className="timeline-list">
              {activity.map(item => (
                <article className="timeline-item" key={item.id}>
                  <div className={`timeline-icon timeline-icon--${item.tone}`}>{item.icon}</div>
                  <div>
                    <h3 className="timeline-title">{item.title}</h3>
                    <p className="timeline-copy">{item.body}</p>
                  </div>
                  <div className="timeline-time">{formatTimeAgo(item.time)}</div>
                </article>
              ))}
            </div>
          )}
        </section>

        <section className="panel">
          <div className="panel-header">
            <h2 className="panel-title">Priority Queue</h2>
            <Link className="panel-link" to="/issues">View board</Link>
          </div>
          {priorityTasks.length === 0 ? (
            <div className="empty-state">No active tasks. Run devdive init to generate a project plan.</div>
          ) : (
            <div className="priority-list">
              {priorityTasks.map(task => (
                <article className="priority-card" key={task.id || task.title}>
                  <div className="card-head">
                    <span className={`priority-ribbon ${task.workflowTone}`}>{task.prioritySummary}</span>
                    <StatusBadge status={task.workflowStage} />
                  </div>
                  <h3 className="priority-title">{task.title}</h3>
                  <p className="card-copy">{task.nextAction}</p>
                  <div className="issue-meta">
                    <span>{Number(task.estimate_hours || 0).toFixed(1)}h estimate</span>
                    <span>{task.id ? `#${task.id}` : 'Untracked'}</span>
                  </div>
                </article>
              ))}
              <div className="dashed-card">+ Build Priority List</div>
            </div>
          )}
        </section>
      </div>

      <div className="split-grid">
        <section className="panel">
          <div className="panel-header">
            <h2 className="panel-title">Intent Signals</h2>
            <Link className="panel-link" to="/settings">Refine guidance</Link>
          </div>
          <div className="stack-list">
            {model.intentSources.map(source => (
              <article className="list-card" key={source.title}>
                <div className="card-head">
                  <div>
                    <div className="panel-kicker">{source.title}</div>
                    <h3 className="card-title">{source.status === 'active' ? 'Connected to live planning' : 'Needs manual refresh'}</h3>
                  </div>
                  <StatusBadge status={source.status} />
                </div>
                <p className="card-copy">{source.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="panel">
          <div className="panel-header">
            <h2 className="panel-title">Stale Check-ins</h2>
            <Link className="panel-link" to="/nudges">Open guidance</Link>
          </div>
          {staleTasks.length === 0 ? (
            <div className="empty-state">No stale work right now. Recent commits are keeping the board warm.</div>
          ) : (
            <div className="stack-list">
              {staleTasks.map(task => (
                <article className="list-card" key={`stale-${task.id || task.title}`}>
                  <div className="card-head">
                    <div>
                      <div className="panel-kicker">{task.id ? `Issue #${task.id}` : 'Planned task'}</div>
                      <h3 className="card-title">{task.title}</h3>
                    </div>
                    <StatusBadge status={task.workflowStage} />
                  </div>
                  <p className="card-copy">{task.nextAction}</p>
                  <div className="issue-meta">
                    <span>{task.lastTouchedAt ? `Last touched ${formatTimeAgo(task.lastTouchedAt)}` : 'No commit evidence yet'}</span>
                    <span>{task.commitCount} related commits</span>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </section>
  )
}
