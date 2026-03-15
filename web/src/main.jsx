import { render } from 'preact'
import { LocationProvider, Router } from 'preact-iso'

import { WebSocketProvider } from './ws'
import { Sidebar } from './components/Sidebar'
import { Issues } from './pages/Issues'
import { CI } from './pages/CI'
import { Nudges } from './pages/Nudges'
import { Timetrack } from './pages/Timetrack'
import { CommitLog } from './pages/CommitLog'
import { Reviews } from './pages/Reviews'
import { Settings } from './pages/Settings'

function App() {
  return (
    <>
      <style>{`
        :root {
          --ink: #11203a;
          --muted: #5c6780;
          --panel: rgba(255, 252, 246, 0.86);
          --panel-strong: #fffef9;
          --line: rgba(17, 32, 58, 0.12);
          --accent: #0b7fab;
          --accent-warm: #d56a3a;
          --shadow: 0 20px 60px rgba(17, 32, 58, 0.14);
          font-family: "Avenir Next", "Trebuchet MS", sans-serif;
          color: var(--ink);
          background:
            radial-gradient(circle at top left, rgba(213, 106, 58, 0.18), transparent 30%),
            linear-gradient(135deg, #f2eadf 0%, #dbe7f1 45%, #f7f5ef 100%);
        }

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          min-height: 100vh;
          color: var(--ink);
          background: transparent;
        }

        a {
          color: inherit;
        }

        .app-shell {
          min-height: 100vh;
          display: flex;
          gap: 24px;
          padding: 20px;
        }

        .content-shell {
          flex: 1;
          display: flex;
          min-width: 0;
        }

        .page {
          width: 100%;
          background: var(--panel);
          border: 1px solid var(--line);
          border-radius: 28px;
          box-shadow: var(--shadow);
          padding: 32px;
          backdrop-filter: blur(18px);
        }

        .page-title {
          margin: 0 0 8px;
          font-family: "Iowan Old Style", "Palatino Linotype", "Book Antiqua", serif;
          font-size: clamp(2rem, 4vw, 3rem);
          line-height: 1;
          letter-spacing: -0.04em;
        }

        .page-subtitle {
          margin: 0 0 24px;
          color: var(--muted);
          max-width: 62ch;
          line-height: 1.6;
        }

        .stat-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 16px;
          margin-bottom: 24px;
        }

        .stat-card,
        .card {
          background: var(--panel-strong);
          border: 1px solid var(--line);
          border-radius: 22px;
          padding: 18px 20px;
        }

        .stat-label {
          margin: 0 0 8px;
          font-size: 0.78rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--muted);
        }

        .stat-value {
          margin: 0;
          font-size: 1.9rem;
          font-weight: 700;
        }

        .empty-state {
          min-height: 280px;
          display: grid;
          place-items: center;
          text-align: center;
          color: var(--muted);
          border: 1px dashed rgba(17, 32, 58, 0.18);
          border-radius: 26px;
          background: rgba(255, 255, 255, 0.45);
          padding: 24px;
        }

        .table-wrap {
          overflow-x: auto;
          border: 1px solid var(--line);
          border-radius: 22px;
          background: var(--panel-strong);
        }

        table {
          width: 100%;
          border-collapse: collapse;
        }

        th,
        td {
          padding: 14px 16px;
          text-align: left;
          vertical-align: top;
          border-bottom: 1px solid var(--line);
        }

        th {
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--muted);
        }

        tr:last-child td {
          border-bottom: 0;
        }

        .mono {
          font-family: "SFMono-Regular", "Menlo", "Monaco", monospace;
        }

        .list-stack {
          display: grid;
          gap: 16px;
        }

        .pill-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 12px;
        }

        .banner {
          background: rgba(30, 137, 78, 0.14);
          border: 1px solid rgba(30, 137, 78, 0.26);
          color: #1e653f;
          border-radius: 18px;
          padding: 14px 16px;
          margin-bottom: 18px;
        }

        .progress-track {
          width: 100%;
          height: 16px;
          border-radius: 999px;
          background: rgba(17, 32, 58, 0.1);
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          border-radius: 999px;
          background: linear-gradient(90deg, var(--accent), var(--accent-warm));
        }

        @media (max-width: 900px) {
          .app-shell {
            flex-direction: column;
            padding: 14px;
          }

          .page {
            padding: 22px;
            border-radius: 24px;
          }
        }
      `}</style>
      <WebSocketProvider>
        <LocationProvider>
          <div class="app-shell">
            <Sidebar />
            <main class="content-shell">
              <Router>
                <Issues path="/" />
                <CI path="/ci" />
                <Nudges path="/nudges" />
                <Timetrack path="/timetrack" />
                <CommitLog path="/commits" />
                <Reviews path="/reviews" />
                <Settings path="/settings" />
                <Issues default />
              </Router>
            </main>
          </div>
        </LocationProvider>
      </WebSocketProvider>
    </>
  )
}

render(<App />, document.getElementById('app'))
