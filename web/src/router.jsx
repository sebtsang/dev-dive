import { createContext } from 'preact'
import { useContext, useEffect, useMemo, useState } from 'preact/hooks'

function currentPath() {
  if (typeof window === 'undefined') {
    return '/'
  }

  const url = new URL(window.location.href)
  const value = url.pathname.replace(/\/+$/g, '')
  return value || '/'
}

function normaliseDestination(destination) {
  if (typeof window === 'undefined') {
    return destination || '/'
  }

  const url = new URL(destination, window.location.origin)
  const value = url.pathname.replace(/\/+$/g, '')
  return `${value || '/'}${url.search}${url.hash}`
}

function isModifiedEvent(event) {
  return event.metaKey || event.ctrlKey || event.shiftKey || event.altKey
}

const RouterContext = createContext({
  path: '/',
  navigate: () => {},
})

export function RouterProvider({ children }) {
  const [path, setPath] = useState(currentPath())

  useEffect(() => {
    const handlePopState = () => {
      setPath(currentPath())
    }

    window.addEventListener('popstate', handlePopState)
    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [])

  const value = useMemo(() => ({
    path,
    navigate(destination, replace = false) {
      const next = normaliseDestination(destination)
      const current = `${currentPath()}${window.location.search}${window.location.hash}`

      if (next !== current) {
        if (replace) {
          window.history.replaceState(null, '', next)
        } else {
          window.history.pushState(null, '', next)
        }
      }

      setPath(currentPath())
      window.scrollTo(0, 0)
    },
  }), [path])

  return (
    <RouterContext.Provider value={value}>
      {children}
    </RouterContext.Provider>
  )
}

export function useRouter() {
  return useContext(RouterContext)
}

export function Link({
  to,
  href,
  onClick,
  replace = false,
  target,
  rel,
  children,
  ...props
}) {
  const { navigate } = useRouter()
  const destination = to || href || '/'

  const handleClick = event => {
    onClick?.(event)
    if (event.defaultPrevented) {
      return
    }
    if (event.button !== 0 || isModifiedEvent(event)) {
      return
    }
    if (target && target !== '_self') {
      return
    }

    const url = new URL(destination, window.location.origin)
    if (url.origin !== window.location.origin) {
      return
    }

    event.preventDefault()
    navigate(destination, replace)
  }

  return (
    <a href={destination} onClick={handleClick} target={target} rel={rel} {...props}>
      {children}
    </a>
  )
}
