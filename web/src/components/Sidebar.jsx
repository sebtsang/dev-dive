import { useDevDive } from '../ws'

const routes = [
  { href: '/', label: 'Dashboard' },
  { href: '/issues', label: 'Issues' },
  { href: '/ci', label: 'Actions' },
  { href: '/nudges', label: 'Nudges' },
  { href: '/timetrack', label: 'Time' },
  { href: '/commits', label: 'Commits' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/settings', label: 'Settings' },
]

export function Sidebar() {
  const { connected, state } = useDevDive()
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '/'
  const initials = (state.project?.name || 'DD')
    .split(/[\s-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map(chunk => chunk[0]?.toUpperCase())
    .join('') || 'DD'

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 20,
        borderBottom: '1px solid rgba(122, 147, 191, 0.14)',
        background: 'rgba(10, 16, 27, 0.9)',
        backdropFilter: 'blur(14px)',
      }}
    >
      <div
        style={{
          width: 'min(1560px, calc(100% - 48px))',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          gap: '22px',
          padding: '14px 0',
          flexWrap: 'wrap',
        }}
      >
        <a
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            marginRight: '8px',
          }}
        >
          <span
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '13px',
              display: 'grid',
              placeItems: 'center',
              fontWeight: 800,
              background: 'linear-gradient(180deg, #2f81f7, #1f6bd8)',
              color: 'white',
              boxShadow: '0 10px 24px rgba(47, 129, 247, 0.28)',
            }}
          >
            DD
          </span>
          <div>
            <div style={{ fontSize: '1.9rem', fontWeight: 800, letterSpacing: '-0.03em', color: '#f4f7fb' }}>DevDive</div>
            <div style={{ color: '#8f9db6', marginTop: '-2px' }}>{state.project.name || 'Project control room'}</div>
          </div>
        </a>

        <nav
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            marginRight: 'auto',
          }}
        >
          {routes.map(route => {
            const active = pathname === route.href
            return (
              <a
                key={route.href}
                href={route.href}
                style={{
                  padding: '12px 16px',
                  borderRadius: '14px',
                  fontWeight: 700,
                  color: active ? '#63a5ff' : '#c2cce0',
                  background: active ? 'rgba(47, 129, 247, 0.16)' : 'transparent',
                  border: active ? '1px solid rgba(47, 129, 247, 0.22)' : '1px solid transparent',
                }}
              >
                {route.label}
              </a>
            )
          })}
        </nav>

        <div
          style={{
            minWidth: '280px',
            flex: '0 1 340px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '12px 16px',
            borderRadius: '16px',
            border: '1px solid rgba(122, 147, 191, 0.16)',
            background: '#141e31',
            color: '#8f9db6',
          }}
        >
          <span style={{ fontWeight: 800 }}>?</span>
          <input
            type="text"
            placeholder="Search issues, tasks..."
            style={{
              flex: 1,
              background: 'transparent',
              border: 0,
              outline: 'none',
              color: '#dfe7f5',
            }}
          />
          <span
            style={{
              padding: '4px 8px',
              borderRadius: '10px',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.06)',
              fontSize: '0.8rem',
            }}
          >
            /
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 14px',
              borderRadius: '14px',
              background: 'rgba(17, 26, 43, 0.88)',
              border: '1px solid rgba(122, 147, 191, 0.14)',
              color: '#8f9db6',
            }}
          >
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '999px',
                background: connected ? '#2bc48a' : '#56657f',
                boxShadow: connected ? '0 0 14px rgba(43, 196, 138, 0.5)' : 'none',
              }}
            />
            {connected ? 'Live' : 'Offline'}
          </span>
          <span
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '999px',
              display: 'grid',
              placeItems: 'center',
              fontWeight: 800,
              color: '#f4f7fb',
              background: 'linear-gradient(180deg, #273652, #172131)',
              border: '1px solid rgba(122, 147, 191, 0.18)',
            }}
          >
            {initials}
          </span>
        </div>
      </div>
    </header>
  )
}
