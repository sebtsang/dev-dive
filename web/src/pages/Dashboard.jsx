import { useDevDive } from '../ws'
import { StatusBadge } from '../components/StatusBadge'

function timeAgo(isoString) {
  if (!isoString) {
    return 'No updates yet'
  }

  const diff = Date.now() - new Date(isoString).getTime()
  const minutes = Math.floor(diff / 60000)
  if (minutes < 1) {
    return 'Just now'
  }
  if (minutes < 60) {
    return `${minutes} minutes ago`
  }
  const hours = Math.floor(minutes / 60)
  if (hours < 24) {
    return `${hours} hours ago`
  }
  const days = Math.floor(hours / 24)
  return `${days} days ago`
}

function recentActivity(state) {
  const events = []

  ;(state.commits || []).slice(-4).forEach(item => {
    events.push({
      id: `commit-${item.commit_hash}`,
      title: item.summary || 'Commit analysis recorded',
      body: `Tracked work updated for ${item.tasks_updated?.length || 0} closed tasks and ${item.tasks_progressed?.length || 0} active tasks.`,
      time: item.analysed_at,
      tone: 'blue',
      icon: 'CM',
    })
  })

  ;(state.nudges || []).slice(-3).forEach(item => {
    events.push({
      id: `nudge-${item.created_at}`,
      title: 'AI nudge generated',
      body: item.message,
      time: item.created_at,
      tone: 'purple',
      icon: 'AI',
    })
  })

  ;(state.reviews || []).slice(-2).forEach(item => {
    events.push({
      id: `review-${item.reviewed_at}`,
      title: item.findings.length === 0 ? 'Design review passed cleanly' : `Design review found ${item.findings.length} items`,
      body: item.findings.length === 0
        ? 'No drift detected against the planned architecture.'
        : item.findings[0]?.finding || 'Architectural drift requires attention.',
      time: item.reviewed_at,
      tone: item.findings.some(finding => finding.severity === 'critical') ? 'rose' : 'green',
      icon: 'RV',
    })
  })

  if (state.ci?.last_run) {
    events.push({
      id: `ci-${state.ci.last_run}`,
      title: `CI is ${state.ci.status.replaceAll('_', ' ')}`,
      body: state.ci.workflow_url ? 'Latest workflow run is available from the actions page.' : 'No workflow link is available yet.',
      time: state.ci.last_run,
      tone: state.ci.status === 'failing' ? 'rose' : 'green',
      icon: 'CI',
    })
  }

  return events
    .filter(item => item.time)
    .sort((left, right) => new Date(right.time) - new Date(left.time))
    .slice(0, 5)
}

export function Dashboard() {
  const { state } = useDevDive()
  const openTasks = state.tasks.filter(task => task.status !== 'done')
  const inProgress = state.tasks.filter(task => task.status === 'in_progress')
  const doneTasks = state.tasks.filter(task => task.status === 'done')
  const findings = state.reviews[0]?.findings || []
  const activity = recentActivity(state)
  const priorityTasks = [...openTasks]
    .sort((left, right) => {
      const leftRank = left.status === 'in_progress' ? 0 : 1
      const rightRank = right.status === 'in_progress' ? 0 : 1
      return leftRank - rightRank
    })
    .slice(0, 3)

  return (
    <section class="page">
      <div class="page-hero">
        <div>
          <p class="eyebrow">Dashboard</p>
          <h1 class="page-title">{state.project.name || 'DevDive Overview'}</h1>
          <p class="page-subtitle">
            A live command view for work in motion, review pressure, and the next tasks that deserve attention.
          </p>
        </div>
        <div class="hero-actions">
          <a class="button-secondary" href="/issues">Open board</a>
          <a class="button" href="/reviews">Review latest drift</a>
        </div>
      </div>

      <div class="metric-grid">
        <article class="metric-card">
          <div class="metric-card__top">
            <div class="metric-card__label">Open Issues</div>
            <div class="metric-icon metric-icon--blue">OI</div>
          </div>
          <div class="metric-card__value">
            {openTasks.length}
            <span class="metric-card__delta metric-card__delta--up">{doneTasks.length} closed</span>
          </div>
        </article>
        <article class="metric-card">
          <div class="metric-card__top">
            <div class="metric-card__label">In Progress</div>
            <div class="metric-icon metric-icon--amber">IP</div>
          </div>
          <div class="metric-card__value">
            {inProgress.length}
            <span class="metric-card__delta">{state.tasks.length} total tasks</span>
          </div>
        </article>
        <article class="metric-card">
          <div class="metric-card__top">
            <div class="metric-card__label">AI Nudges</div>
            <div class="metric-icon metric-icon--purple">AI</div>
          </div>
          <div class="metric-card__value">
            {state.nudges.length}
            <span class="metric-card__delta">{findings.length} active review findings</span>
          </div>
        </article>
        <article class="metric-card">
          <div class="metric-card__top">
            <div class="metric-card__label">CI Status</div>
            <div class="metric-icon metric-icon--green">CI</div>
          </div>
          <div class="metric-card__value">
            <span style={{ fontSize: '2.35rem', fontFamily: 'inherit', textTransform: 'capitalize' }}>
              {state.ci.status.replaceAll('_', ' ')}
            </span>
          </div>
          <StatusBadge status={state.ci.status} />
        </article>
      </div>

      <div class="split-grid">
        <section class="panel">
          <div class="panel-header">
            <h2 class="panel-title">Recent Activity</h2>
            <a class="panel-link" href="/commits">View all</a>
          </div>
          {activity.length === 0 ? (
            <div class="empty-state">No recent activity yet. Run init and start committing to populate the dashboard.</div>
          ) : (
            <div class="timeline-list">
              {activity.map(item => (
                <article class="timeline-item" key={item.id}>
                  <div class={`timeline-icon timeline-icon--${item.tone}`}>{item.icon}</div>
                  <div>
                    <h3 class="timeline-title">{item.title}</h3>
                    <p class="timeline-copy">{item.body}</p>
                  </div>
                  <div class="timeline-time">{timeAgo(item.time)}</div>
                </article>
              ))}
            </div>
          )}
        </section>

        <section class="panel">
          <div class="panel-header">
            <h2 class="panel-title">Priority Tasks</h2>
            <a class="panel-link" href="/issues">View board</a>
          </div>
          {priorityTasks.length === 0 ? (
            <div class="empty-state">No active tasks. Run devdive init to generate a project plan.</div>
          ) : (
            <div class="priority-list">
              {priorityTasks.map((task, index) => {
                const tone = task.status === 'in_progress' ? 'tone-blue' : index === 0 ? 'tone-rose' : 'tone-slate'
                const label = task.status === 'in_progress' ? 'In Progress' : index === 0 ? 'High Priority' : 'Backlog'

                return (
                  <article class="priority-card" key={task.id || task.title}>
                    <div class="card-head">
                      <span class={`priority-ribbon ${tone}`}>{label}</span>
                      <StatusBadge status={task.status} />
                    </div>
                    <h3 class="priority-title">{task.title}</h3>
                    <p class="card-copy">{task.design_notes}</p>
                    <div class="issue-meta">
                      <span>{Number(task.estimate_hours || 0).toFixed(1)}h estimate</span>
                      <span>{task.id ? `#${task.id}` : 'Untracked'}</span>
                    </div>
                  </article>
                )
              })}
              <div class="dashed-card">+ Add Priority Task</div>
            </div>
          )}
        </section>
      </div>
    </section>
  )
}
