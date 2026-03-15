import { useDevDive } from '../ws'
import { buildPlanningModel, formatTimeAgo } from '../planning'

function derivedGuidanceItems(model) {
  const items = []

  for (const task of model.issueGuidance.slice(0, 4)) {
    items.push({
      id: `tip-${task.id}`,
      title: task.title,
      message: task.summary,
      detail: task.detail,
      createdAt: task.lastTouchedAt,
      ribbon: task.stale ? 'Progress Check-in' : 'Implementation Tip',
      tone: task.stale ? 'tone-rose' : task.workflowTone,
    })
  }

  return items
}

export function Nudges() {
  const { state } = useDevDive()
  const model = buildPlanningModel(state)
  const liveNudges = [...state.nudges].reverse().map((nudge, index) => ({
    id: `nudge-${index}-${nudge.created_at}`,
    title: nudge.message,
    message: 'Generated from current state transitions, failing signals, or architectural drift.',
    detail: 'Use this as issue guidance, not just a passive notification.',
    createdAt: nudge.created_at,
    ribbon: 'AI Advisory',
    tone: 'tone-purple',
  }))
  const derivedGuidance = derivedGuidanceItems(model)
  const items = [...liveNudges, ...derivedGuidance]

  return (
    <section className="page">
      <div className="page-hero">
        <div>
          <p className="eyebrow">Nudges</p>
          <h1 className="page-title">Advisory Feed</h1>
          <p className="page-subtitle">
            AI guidance now mixes global nudges with issue-level implementation tips and stale-work check-ins.
          </p>
        </div>
        <div className="hero-actions">
          <span className="button-secondary">{items.length} guidance items</span>
        </div>
      </div>

      {items.length === 0 ? (
        <div className="empty-state">No nudges yet. DevDive will suggest improvements as work starts moving.</div>
      ) : (
        <div className="stack-list">
          {items.map(item => (
            <article className="list-card" key={item.id}>
              <div className="card-head">
                <span className={`priority-ribbon ${item.tone}`}>{item.ribbon}</span>
                <span className="card-time">{item.createdAt ? formatTimeAgo(item.createdAt) : 'Planning signal'}</span>
              </div>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-copy">{item.message}</p>
              <p className="detail-text" style={{ marginTop: '12px' }}>{item.detail}</p>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}
