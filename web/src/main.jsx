import { render } from 'preact'
import { LocationProvider, Router } from 'preact-iso'

import { WebSocketProvider, useDevDive } from './ws'
import { Sidebar } from './components/Sidebar'
import { Dashboard } from './pages/Dashboard'
import { Issues } from './pages/Issues'
import { CI } from './pages/CI'
import { Nudges } from './pages/Nudges'
import { Timetrack } from './pages/Timetrack'
import { CommitLog } from './pages/CommitLog'
import { Reviews } from './pages/Reviews'
import { Settings } from './pages/Settings'

function timeAgo(isoString) {
  if (!isoString) {
    return 'No recent sync'
  }

  const diff = Date.now() - new Date(isoString).getTime()
  const minutes = Math.floor(diff / 60000)
  if (minutes < 1) {
    return 'Just now'
  }
  if (minutes < 60) {
    return `${minutes}m ago`
  }
  const hours = Math.floor(minutes / 60)
  if (hours < 24) {
    return `${hours}h ago`
  }
  const days = Math.floor(hours / 24)
  return `${days}d ago`
}

function lastSynced(state) {
  const timestamps = [
    state.project?.created_at,
    state.ci?.last_run,
    ...(state.commits || []).map(item => item.analysed_at),
    ...(state.nudges || []).map(item => item.created_at),
    ...(state.reviews || []).map(item => item.reviewed_at),
  ].filter(Boolean)

  if (timestamps.length === 0) {
    return ''
  }

  return timestamps
    .map(value => new Date(value).getTime())
    .sort((left, right) => right - left)
    .map(value => new Date(value).toISOString())[0]
}

function ShellFooter() {
  const { connected, state } = useDevDive()

  return (
    <footer class="shell-footer">
      <div class="shell-footer__group">
        <span class={`footer-dot ${connected ? 'footer-dot--live' : 'footer-dot--idle'}`} />
        <span>{connected ? 'All systems operational' : 'Live sync unavailable'}</span>
        <span class="footer-divider" />
        <span>Last synced {timeAgo(lastSynced(state))}</span>
      </div>
      <div class="shell-footer__group shell-footer__group--muted">
        <span>{state.project?.repo || 'devdive'}</span>
        <span class="footer-divider" />
        <span>Shortcuts</span>
      </div>
    </footer>
  )
}

function App() {
  return (
    <>
      <style>{`
        :root {
          --bg: #0c1320;
          --bg-deep: #0a101b;
          --panel: #111a2b;
          --panel-soft: #151f33;
          --panel-strong: #182338;
          --line: rgba(122, 147, 191, 0.16);
          --line-strong: rgba(122, 147, 191, 0.26);
          --text: #f4f7fb;
          --text-muted: #8f9db6;
          --text-soft: #a8b5cb;
          --blue: #2f81f7;
          --blue-soft: rgba(47, 129, 247, 0.14);
          --green: #2bc48a;
          --green-soft: rgba(43, 196, 138, 0.14);
          --amber: #f1a638;
          --amber-soft: rgba(241, 166, 56, 0.16);
          --rose: #f15b7a;
          --rose-soft: rgba(241, 91, 122, 0.16);
          --purple: #9a68ff;
          --purple-soft: rgba(154, 104, 255, 0.16);
          --shadow: 0 22px 48px rgba(5, 10, 18, 0.36);
          font-family: "Avenir Next", "Segoe UI", sans-serif;
          color: var(--text);
          background:
            radial-gradient(circle at top right, rgba(47, 129, 247, 0.12), transparent 26%),
            radial-gradient(circle at bottom left, rgba(154, 104, 255, 0.08), transparent 24%),
            linear-gradient(180deg, #0c1320 0%, #0a111c 100%);
        }

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          min-height: 100vh;
          color: var(--text);
          background: transparent;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        button,
        input {
          font: inherit;
        }

        .shell {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        .shell-main {
          width: min(1560px, calc(100% - 48px));
          margin: 0 auto;
          display: flex;
          flex: 1;
          padding: 34px 0 110px;
        }

        .page {
          width: 100%;
          display: grid;
          gap: 28px;
        }

        .page-hero {
          display: flex;
          justify-content: space-between;
          gap: 24px;
          align-items: flex-start;
          flex-wrap: wrap;
        }

        .eyebrow {
          margin: 0 0 12px;
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          color: var(--text-muted);
        }

        .page-title {
          margin: 0 0 10px;
          font-family: "Iowan Old Style", "Palatino Linotype", "Book Antiqua", serif;
          font-size: clamp(2.25rem, 4vw, 3.35rem);
          line-height: 1;
          letter-spacing: -0.04em;
        }

        .page-subtitle {
          margin: 0;
          color: var(--text-muted);
          max-width: 62ch;
          line-height: 1.6;
        }

        .hero-actions,
        .toolbar-row,
        .pill-row,
        .status-row,
        .detail-row {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          align-items: center;
        }

        .hero-actions {
          justify-content: flex-end;
        }

        .button,
        .button-secondary,
        .toolbar-chip,
        .toolbar-chip--active {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          border-radius: 14px;
          border: 1px solid var(--line);
          padding: 12px 18px;
          background: var(--panel-soft);
          color: var(--text-soft);
          font-weight: 600;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.02);
        }

        .button {
          background: linear-gradient(180deg, #2f81f7, #1f6bd8);
          color: white;
          border-color: rgba(47, 129, 247, 0.34);
        }

        .toolbar-chip--active {
          background: var(--blue-soft);
          color: #7db1ff;
          border-color: rgba(47, 129, 247, 0.28);
        }

        .metric-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 18px;
        }

        .metric-card,
        .panel,
        .issue-card,
        .priority-card,
        .list-card,
        .summary-card {
          background: linear-gradient(180deg, rgba(18, 27, 43, 0.96), rgba(15, 23, 37, 0.96));
          border: 1px solid var(--line);
          border-radius: 22px;
          box-shadow: var(--shadow);
        }

        .metric-card {
          padding: 24px 26px;
          display: grid;
          gap: 18px;
          min-height: 166px;
        }

        .metric-card__top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 18px;
        }

        .metric-card__label,
        .panel-kicker,
        .muted-label {
          color: var(--text-muted);
          font-size: 0.96rem;
        }

        .metric-card__value {
          display: flex;
          align-items: baseline;
          gap: 12px;
          flex-wrap: wrap;
          font-family: "Iowan Old Style", "Palatino Linotype", "Book Antiqua", serif;
          font-size: 3rem;
          line-height: 1;
          letter-spacing: -0.04em;
        }

        .metric-card__delta {
          font-size: 1rem;
          color: var(--text-muted);
          font-family: "Avenir Next", "Segoe UI", sans-serif;
        }

        .metric-card__delta--up {
          color: #5ed59d;
        }

        .metric-card__delta--down {
          color: #ef738e;
        }

        .metric-icon {
          width: 44px;
          height: 44px;
          border-radius: 14px;
          display: grid;
          place-items: center;
          font-weight: 800;
          font-size: 1rem;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .metric-icon--blue {
          color: #68a8ff;
          background: rgba(47, 129, 247, 0.12);
        }

        .metric-icon--amber {
          color: #ffb14c;
          background: rgba(241, 166, 56, 0.14);
        }

        .metric-icon--purple {
          color: #ba8bff;
          background: rgba(154, 104, 255, 0.14);
        }

        .metric-icon--green {
          color: #63d89f;
          background: rgba(43, 196, 138, 0.14);
        }

        .split-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.7fr) minmax(320px, 0.85fr);
          gap: 24px;
          align-items: start;
        }

        .panel {
          padding: 22px 24px;
        }

        .panel-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          margin-bottom: 18px;
        }

        .panel-title {
          margin: 0;
          font-family: "Iowan Old Style", "Palatino Linotype", "Book Antiqua", serif;
          font-size: 2rem;
          line-height: 1.05;
          letter-spacing: -0.03em;
        }

        .panel-link {
          color: #5d9cff;
          font-weight: 600;
        }

        .timeline-list,
        .stack-list,
        .priority-list {
          display: grid;
          gap: 14px;
        }

        .timeline-item,
        .stack-item {
          display: grid;
          grid-template-columns: auto 1fr auto;
          gap: 16px;
          align-items: start;
          padding: 20px 22px;
          border-top: 1px solid rgba(122, 147, 191, 0.1);
        }

        .timeline-item:first-child {
          border-top: 0;
        }

        .timeline-icon {
          width: 46px;
          height: 46px;
          border-radius: 18px;
          display: grid;
          place-items: center;
          font-weight: 800;
          background: var(--panel-strong);
          color: var(--text);
        }

        .timeline-icon--blue { color: #69a7ff; background: rgba(47, 129, 247, 0.14); }
        .timeline-icon--purple { color: #bd8dff; background: rgba(154, 104, 255, 0.14); }
        .timeline-icon--green { color: #63d89f; background: rgba(43, 196, 138, 0.14); }
        .timeline-icon--rose { color: #ef738e; background: rgba(241, 91, 122, 0.14); }

        .timeline-title,
        .priority-title,
        .issue-title,
        .card-title {
          margin: 0 0 8px;
          font-size: 1.02rem;
          line-height: 1.45;
          font-weight: 700;
        }

        .timeline-copy,
        .card-copy,
        .subtle-text,
        .detail-text {
          margin: 0;
          color: var(--text-muted);
          line-height: 1.6;
        }

        .timeline-time,
        .card-time,
        .mono-muted {
          color: var(--text-muted);
          font-size: 0.92rem;
        }

        .priority-card,
        .issue-card,
        .list-card,
        .summary-card {
          padding: 20px 22px;
        }

        .priority-ribbon,
        .label-tag,
        .board-count {
          display: inline-flex;
          align-items: center;
          border-radius: 999px;
          padding: 6px 12px;
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-weight: 700;
          border: 1px solid transparent;
        }

        .tone-rose {
          background: var(--rose-soft);
          color: #ff8da5;
        }

        .tone-blue {
          background: var(--blue-soft);
          color: #7eb2ff;
        }

        .tone-green {
          background: var(--green-soft);
          color: #75dca9;
        }

        .tone-amber {
          background: var(--amber-soft);
          color: #ffbf69;
        }

        .tone-purple {
          background: var(--purple-soft);
          color: #c7a0ff;
        }

        .tone-slate {
          background: rgba(143, 157, 182, 0.12);
          color: #aab6ca;
        }

        .ghost-action {
          width: 42px;
          height: 42px;
          border-radius: 14px;
          display: grid;
          place-items: center;
          border: 1px solid var(--line);
          color: var(--text-muted);
          background: var(--panel-soft);
        }

        .board-toolbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 18px;
          flex-wrap: wrap;
        }

        .board-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(280px, 1fr));
          gap: 22px;
          align-items: start;
        }

        .board-column {
          min-height: 720px;
          padding: 18px;
          border-radius: 24px;
          background: linear-gradient(180deg, rgba(14, 22, 35, 0.96), rgba(12, 18, 30, 0.96));
          border: 1px solid rgba(67, 88, 122, 0.28);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.02);
        }

        .board-column__head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          margin-bottom: 18px;
        }

        .board-column__title {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.12em;
        }

        .board-stack {
          display: grid;
          gap: 16px;
        }

        .issue-card__head,
        .card-head {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 14px;
          margin-bottom: 14px;
        }

        .issue-id,
        .code-pill {
          color: var(--text-muted);
          font-family: "SFMono-Regular", "Menlo", "Monaco", monospace;
          font-size: 0.88rem;
        }

        .issue-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 14px;
          color: var(--text-muted);
          font-size: 0.92rem;
          margin-top: 18px;
        }

        .avatar-chip {
          width: 28px;
          height: 28px;
          border-radius: 999px;
          display: grid;
          place-items: center;
          background: linear-gradient(180deg, #273652, #1a2538);
          border: 1px solid rgba(122, 147, 191, 0.18);
          color: var(--text-soft);
          font-size: 0.74rem;
          font-weight: 800;
        }

        .board-empty {
          min-height: 180px;
          display: grid;
          place-items: center;
          border-radius: 18px;
          border: 1px dashed rgba(122, 147, 191, 0.18);
          color: var(--text-muted);
          background: rgba(17, 26, 43, 0.4);
          text-align: center;
          padding: 20px;
        }

        .dashed-card {
          border: 1px dashed rgba(93, 118, 161, 0.34);
          border-radius: 18px;
          padding: 22px;
          color: var(--text-soft);
          display: grid;
          place-items: center;
          min-height: 74px;
          background: rgba(12, 19, 31, 0.62);
        }

        .settings-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 18px;
        }

        .table-wrap {
          overflow-x: auto;
          border-radius: 22px;
          border: 1px solid var(--line);
          background: linear-gradient(180deg, rgba(18, 27, 43, 0.96), rgba(15, 23, 37, 0.96));
          box-shadow: var(--shadow);
        }

        table {
          width: 100%;
          border-collapse: collapse;
        }

        th,
        td {
          padding: 16px 18px;
          text-align: left;
          vertical-align: top;
          border-bottom: 1px solid rgba(122, 147, 191, 0.12);
        }

        th {
          color: var(--text-muted);
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 0.14em;
        }

        td {
          color: var(--text-soft);
        }

        tr:last-child td {
          border-bottom: 0;
        }

        .mono {
          font-family: "SFMono-Regular", "Menlo", "Monaco", monospace;
        }

        .banner {
          background: rgba(43, 196, 138, 0.12);
          border: 1px solid rgba(43, 196, 138, 0.2);
          color: #7addaf;
          border-radius: 18px;
          padding: 14px 16px;
        }

        .progress-track {
          width: 100%;
          height: 14px;
          border-radius: 999px;
          background: rgba(122, 147, 191, 0.12);
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          border-radius: 999px;
          background: linear-gradient(90deg, #2f81f7, #57c9ff);
        }

        .empty-state {
          min-height: 220px;
          display: grid;
          place-items: center;
          text-align: center;
          color: var(--text-muted);
          border: 1px dashed rgba(122, 147, 191, 0.18);
          border-radius: 22px;
          background: rgba(17, 26, 43, 0.46);
          padding: 24px;
        }

        .shell-footer {
          position: fixed;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 18px;
          padding: 14px 24px;
          border-top: 1px solid rgba(122, 147, 191, 0.14);
          background: rgba(10, 16, 27, 0.9);
          backdrop-filter: blur(14px);
          color: var(--text-muted);
          font-size: 0.94rem;
        }

        .shell-footer__group {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .shell-footer__group--muted {
          color: #7f93b4;
        }

        .footer-dot {
          width: 10px;
          height: 10px;
          border-radius: 999px;
          display: inline-block;
        }

        .footer-dot--live {
          background: var(--green);
          box-shadow: 0 0 16px rgba(43, 196, 138, 0.6);
        }

        .footer-dot--idle {
          background: #53637c;
        }

        .footer-divider {
          width: 1px;
          height: 14px;
          background: rgba(122, 147, 191, 0.18);
        }

        @media (max-width: 1240px) {
          .split-grid {
            grid-template-columns: 1fr;
          }

          .board-grid {
            grid-template-columns: repeat(2, minmax(280px, 1fr));
          }
        }

        @media (max-width: 860px) {
          .shell-main {
            width: calc(100% - 28px);
            padding: 22px 0 132px;
          }

          .page-hero {
            flex-direction: column;
          }

          .board-grid {
            grid-template-columns: 1fr;
          }

          .timeline-item,
          .stack-item {
            grid-template-columns: auto 1fr;
          }

          .timeline-time {
            grid-column: 2;
          }

          .shell-footer {
            padding: 14px 16px;
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
      <WebSocketProvider>
        <LocationProvider>
          <div class="shell">
            <Sidebar />
            <main class="shell-main">
              <Router>
                <Dashboard path="/" />
                <Issues path="/issues" />
                <CI path="/ci" />
                <Nudges path="/nudges" />
                <Timetrack path="/timetrack" />
                <CommitLog path="/commits" />
                <Reviews path="/reviews" />
                <Settings path="/settings" />
                <Dashboard default />
              </Router>
            </main>
            <ShellFooter />
          </div>
        </LocationProvider>
      </WebSocketProvider>
    </>
  )
}

render(<App />, document.getElementById('app'))
