import { createContext, createElement } from 'preact'
import { useContext, useEffect, useRef, useState } from 'preact/hooks'

const port = import.meta.env.VITE_WS_PORT || 7777

const initialState = {
  meta: { version: '1.0' },
  project: {
    name: '',
    repo: '',
    created_at: '',
  },
  tasks: [],
  ci: {
    status: 'unknown',
    last_run: '',
    workflow_url: '',
  },
  nudges: [],
  commits: [],
  reviews: [],
  init_commit: '',
}

const WebSocketContext = createContext({
  state: initialState,
  connected: false,
})

export function WebSocketProvider({ children }) {
  const [state, setState] = useState(initialState)
  const [connected, setConnected] = useState(false)
  const attemptsRef = useRef(0)
  const socketRef = useRef(null)
  const reconnectTimerRef = useRef(null)

  useEffect(() => {
    let cancelled = false

    const loadInitialState = async () => {
      try {
        const response = await fetch('/api/state')
        if (!response.ok) {
          return
        }
        const payload = await response.json()
        if (!cancelled) {
          setState(payload)
        }
      } catch {
      }
    }

    const connect = () => {
      if (cancelled) {
        return
      }

      const socket = new WebSocket(`ws://localhost:${port}/ws`)
      socketRef.current = socket

      socket.onopen = () => {
        attemptsRef.current = 0
        if (!cancelled) {
          setConnected(true)
        }
      }

      socket.onmessage = event => {
        try {
          const payload = JSON.parse(event.data)
          if (!cancelled) {
            setState(payload)
          }
        } catch {
        }
      }

      socket.onerror = () => {
        if (!cancelled) {
          setConnected(false)
        }
      }

      socket.onclose = () => {
        if (cancelled) {
          return
        }
        setConnected(false)
        if (attemptsRef.current >= 5) {
          return
        }
        attemptsRef.current += 1
        reconnectTimerRef.current = window.setTimeout(connect, 2000)
      }
    }

    loadInitialState()
    connect()

    return () => {
      cancelled = true
      setConnected(false)
      if (reconnectTimerRef.current) {
        window.clearTimeout(reconnectTimerRef.current)
      }
      if (socketRef.current) {
        socketRef.current.close()
      }
    }
  }, [])

  return createElement(WebSocketContext.Provider, { value: { state, connected } }, children)
}

export function useDevDive() {
  return useContext(WebSocketContext)
}
