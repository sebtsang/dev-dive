import { useDevDive } from '../ws'

const routes = [
  { href: '/', label: 'Issues' },
  { href: '/ci', label: 'CI' },
  { href: '/nudges', label: 'Nudges' },
  { href: '/timetrack', label: 'Time' },
  { href: '/commits', label: 'Commits' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/settings', label: 'Settings' },
]

export function Sidebar() {
  const { connected, state } = useDevDive()
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '/'

  return (
    <aside
      style={{
        width: '280px',
        background: 'linear-gradient(180deg, rgba(9, 31, 66, 0.96), rgba(11, 127, 171, 0.88))',
        color: '#f9f3eb',
        borderRadius: '28px',
        padding: '28px 22px',
        boxShadow: '0 24px 60px rgba(11, 31, 66, 0.24)',
        border: '1px solid rgba(255,255,255,0.08)',
        display: 'flex',
        flexDirection: 'column',
        gap: '22px',
      }}
    >
      <div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '10px',
          }}
        >
          <span
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '999px',
              background: connected ? '#6de4a7' : '#ff846f',
              boxShadow: connected ? '0 0 16px rgba(109,228,167,0.8)' : '0 0 16px rgba(255,132,111,0.7)',
            }}
          />
          <span style={{ fontSize: '0.82rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(249,243,235,0.68)' }}>
            {connected ? 'Live sync' : 'Disconnected'}
          </span>
        </div>
        <h1
          style={{
            margin: 0,
            fontSize: '2.2rem',
            fontFamily: '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", serif',
            letterSpacing: '-0.04em',
          }}
        >
          DevDive
        </h1>
        <p style={{ margin: '10px 0 0', lineHeight: 1.6, color: 'rgba(249,243,235,0.74)' }}>
          {state.project.name || 'AI project control room'}
        </p>
      </div>

      <nav style={{ display: 'grid', gap: '10px' }}>
        {routes.map(route => {
          const active = pathname === route.href
          return (
            <a
              key={route.href}
              href={route.href}
              style={{
                textDecoration: 'none',
                padding: '12px 14px',
                borderRadius: '16px',
                fontWeight: 600,
                color: active ? '#11203a' : '#f9f3eb',
                background: active ? '#f9f3eb' : 'rgba(255,255,255,0.08)',
                border: active ? '1px solid rgba(255,255,255,0.34)' : '1px solid transparent',
              }}
            >
              {route.label}
            </a>
          )
        })}
      </nav>

      <div
        style={{
          marginTop: 'auto',
          padding: '16px',
          borderRadius: '18px',
          background: 'rgba(255,255,255,0.08)',
          border: '1px solid rgba(255,255,255,0.12)',
        }}
      >
        <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(249,243,235,0.65)' }}>
          Repo
        </div>
        <div style={{ marginTop: '8px', lineHeight: 1.5 }}>{state.project.repo || 'owner/repo-name'}</div>
      </div>
    </aside>
  )
}
