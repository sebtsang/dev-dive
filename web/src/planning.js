const STALE_HOURS = 72

export const planGroups = [
  {
    key: 'core',
    title: 'Core Features',
    items: [
      'Plan init from the README, current repo files, and recent commit history.',
      'Re-evaluate GitHub issues from real code changes and update their state.',
      'Detect README changes and update the board when project intent shifts.',
      'Review project drift against the README, codebase, and recent work.',
    ],
  },
  {
    key: 'workflow',
    title: 'Workflow Features',
    items: [
      'Refine project intent by updating the README or plan.',
      'Add AI issue guidance with implementation tips and advice.',
      'Add progress check-ins for stale or slow-moving work.',
      'Build a priority list from existing issues and current code state.',
    ],
  },
  {
    key: 'evaluation',
    title: 'Evaluation Features',
    items: [
      'Re-evaluate issues incrementally using the last reviewed commit window.',
      'Distinguish todo, in progress, review, rejected, and complete.',
      'Separate ready for approval from actually complete.',
      'Review changed code for poor implementation and queue follow-up work.',
    ],
  },
]

export const planAssumptions = [
  'README is the primary source of project intent.',
  'Codebase and commit history are used as evidence of progress.',
  'Review should inspect actual files, not just devdive.json.',
  'Sync should keep GitHub issue state and local state aligned.',
]

const priorityLabels = new Set(['auth', 'api', 'database', 'backend', 'security'])

const toneByStage = {
  todo: 'tone-slate',
  in_progress: 'tone-blue',
  review: 'tone-amber',
  rejected: 'tone-rose',
  complete: 'tone-green',
}

const labelByStage = {
  todo: 'To Do',
  in_progress: 'In Progress',
  review: 'In Review',
  rejected: 'Rejected',
  complete: 'Complete',
}

function toMillis(value) {
  const parsed = new Date(value || '').getTime()
  return Number.isFinite(parsed) ? parsed : 0
}

function hoursBetween(value) {
  const millis = toMillis(value)
  if (!millis) {
    return Number.POSITIVE_INFINITY
  }
  return (Date.now() - millis) / 3600000
}

function normaliseStatus(status) {
  switch ((status || '').toLowerCase()) {
    case 'open':
      return 'todo'
    case 'done':
      return 'complete'
    default:
      return (status || 'todo').toLowerCase()
  }
}

function buildTouchMap(state) {
  const touches = {}

  for (const commit of state.commits || []) {
    const analysedAt = commit.analysed_at || ''
    const commitHash = commit.commit_hash || ''

    for (const id of commit.tasks_progressed || []) {
      const current = touches[id] || { commitCount: 0 }
      touches[id] = {
        ...current,
        commitCount: current.commitCount + 1,
        lastTouchedAt: analysedAt,
        lastProgressedAt: analysedAt,
        lastCommitHash: commitHash,
      }
    }

    for (const id of commit.tasks_updated || []) {
      const current = touches[id] || { commitCount: 0 }
      touches[id] = {
        ...current,
        commitCount: current.commitCount + 1,
        lastTouchedAt: analysedAt,
        lastUpdatedAt: analysedAt,
        lastCommitHash: commitHash,
      }
    }
  }

  return touches
}

function latestReview(state) {
  const reviews = state.reviews || []
  return reviews.length > 0 ? reviews[reviews.length - 1] : null
}

function deriveWorkflowStage(task, touch, latestReviewAt) {
  const base = normaliseStatus(task.status)

  if (base === 'rejected' || base === 'review' || base === 'in_progress') {
    return base
  }

  if (base === 'complete') {
    const lastTouchedAt = touch.lastTouchedAt || ''
    if (!latestReviewAt) {
      return 'review'
    }
    if (toMillis(lastTouchedAt) > toMillis(latestReviewAt)) {
      return 'review'
    }
    return 'complete'
  }

  return touch.lastProgressedAt ? 'in_progress' : 'todo'
}

function buildGuidance(task, stage, stale, commitCount) {
  const labels = task.labels || []

  if (stage === 'review') {
    return 'Code looks implemented, but it still needs a clean review pass before it counts as complete.'
  }
  if (stale && stage === 'in_progress') {
    return 'Work started but has gone quiet. Schedule a progress check-in before the issue drifts.'
  }
  if (stale) {
    return 'This issue has not moved recently. Re-scope it or reconnect it to the current README intent.'
  }
  if (labels.some(label => priorityLabels.has((label || '').toLowerCase()))) {
    return task.design_notes || 'This issue touches a core system path. Validate it against the existing codebase before changing state.'
  }
  if (commitCount > 0) {
    return task.design_notes || 'Recent code evidence exists. Use the latest commit window when deciding the next state change.'
  }
  return task.design_notes || 'No implementation evidence yet. Start from the current README and repository structure.'
}

function priorityScore(task) {
  let score = 0

  if (task.workflowStage === 'review') {
    score += 40
  } else if (task.workflowStage === 'in_progress') {
    score += 28
  } else if (task.workflowStage === 'todo') {
    score += 14
  }

  if (task.stale) {
    score += 22
  }

  if ((task.labels || []).some(label => priorityLabels.has((label || '').toLowerCase()))) {
    score += 14
  }

  score += Math.min(Number(task.estimate_hours || 0), 13)
  score += Math.min(task.commitCount || 0, 6)

  return score
}

function prioritySummary(task) {
  if (task.workflowStage === 'review') {
    return 'Ready for approval'
  }
  if (task.stale) {
    return 'Needs check-in'
  }
  if (task.workflowStage === 'in_progress') {
    return 'Active implementation'
  }
  return 'Backlog candidate'
}

export function formatTimeAgo(value, empty = 'No signal yet') {
  if (!value) {
    return empty
  }

  const diff = Date.now() - toMillis(value)
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

export function formatDateTime(value) {
  if (!value) {
    return 'Unknown'
  }
  return new Date(value).toLocaleString()
}

export function buildPlanningModel(state) {
  const review = latestReview(state)
  const latestReviewAt = review?.reviewed_at || ''
  const touches = buildTouchMap(state)
  const projectStartedAt = state.project?.created_at || ''
  const commitsSinceReview = (state.commits || []).filter(commit => {
    if (!latestReviewAt) {
      return true
    }
    return toMillis(commit.analysed_at) > toMillis(latestReviewAt)
  })

  const tasks = (state.tasks || []).map(task => {
    const touch = touches[task.id] || { commitCount: 0 }
    const lastTouchedAt = touch.lastTouchedAt || ''
    const workflowStage = deriveWorkflowStage(task, touch, latestReviewAt)
    const ageAnchor = lastTouchedAt || projectStartedAt
    const stale = workflowStage !== 'complete' && workflowStage !== 'rejected' && hoursBetween(ageAnchor) >= STALE_HOURS
    const commitCount = touch.commitCount || 0
    const nextAction = buildGuidance(task, workflowStage, stale, commitCount)

    const enriched = {
      ...task,
      workflowStage,
      workflowLabel: labelByStage[workflowStage] || labelByStage.todo,
      workflowTone: toneByStage[workflowStage] || toneByStage.todo,
      lastTouchedAt,
      lastCommitHash: touch.lastCommitHash || '',
      commitCount,
      stale,
      readyForApproval: workflowStage === 'review',
      actuallyComplete: workflowStage === 'complete',
      nextAction,
    }

    enriched.priorityScore = priorityScore(enriched)
    enriched.prioritySummary = prioritySummary(enriched)
    return enriched
  })

  const tasksByStage = {
    todo: [],
    in_progress: [],
    review: [],
    rejected: [],
    complete: [],
  }

  for (const task of tasks) {
    tasksByStage[task.workflowStage] = tasksByStage[task.workflowStage] || []
    tasksByStage[task.workflowStage].push(task)
  }

  const priorityTasks = [...tasks]
    .filter(task => task.workflowStage !== 'complete' && task.workflowStage !== 'rejected')
    .sort((left, right) => right.priorityScore - left.priorityScore)

  const staleTasks = [...tasks]
    .filter(task => task.stale)
    .sort((left, right) => right.priorityScore - left.priorityScore)

  const reviewQueue = [...tasksByStage.review]
    .sort((left, right) => right.priorityScore - left.priorityScore)

  const completedTasks = [...tasksByStage.complete]
    .sort((left, right) => toMillis(right.lastTouchedAt) - toMillis(left.lastTouchedAt))

  const intentSources = [
    {
      title: 'README Intent',
      status: state.init_commit ? 'active' : 'manual',
      detail: state.init_commit
        ? 'Use the README as the planning baseline and refine it when project intent changes.'
        : 'No init baseline recorded yet.',
    },
    {
      title: 'Repository Evidence',
      status: tasks.length > 0 ? 'active' : 'manual',
      detail: tasks.length > 0
        ? `${tasks.length} tracked issues are mapped onto the current project state.`
        : 'Run init to generate an issue-backed project plan.',
    },
    {
      title: 'Recent Commit History',
      status: state.commits?.length ? 'active' : 'manual',
      detail: state.commits?.length
        ? `${state.commits.length} analysed commits are available as evidence for re-evaluation.`
        : 'No analysed commits yet. The review window will stay empty until code starts moving.',
    },
  ]

  const issueGuidance = priorityTasks.slice(0, 6).map(task => ({
    id: task.id || task.title,
    title: task.title,
    workflowStage: task.workflowStage,
    workflowLabel: task.workflowLabel,
    workflowTone: task.workflowTone,
    summary: task.nextAction,
    detail: task.design_notes || 'No design notes available yet.',
    stale: task.stale,
    issueURL: task.issue_url,
    lastTouchedAt: task.lastTouchedAt,
  }))

  const commandRecipes = [
    {
      title: 'Refine intent from the README',
      command: 'devdive init --from-readme',
      detail: 'Use this when the README or plan changes enough that the issue board should be regenerated.',
    },
    {
      title: 'Re-sync issue state from real work',
      command: 'devdive sync',
      detail: 'Pull the current state back into alignment after new commits, issue changes, or nudges.',
    },
    {
      title: 'Run an incremental drift review',
      command: 'devdive review',
      detail: 'Use recent commit evidence to separate ready-for-approval work from actually complete work.',
    },
  ]

  return {
    latestReview: review,
    latestReviewAt,
    commitsSinceReview,
    tasks,
    tasksByStage,
    priorityTasks,
    staleTasks,
    reviewQueue,
    completedTasks,
    issueGuidance,
    intentSources,
    commandRecipes,
  }
}
