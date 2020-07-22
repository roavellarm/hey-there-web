import React, { useEffect, useState } from 'react'
import Router from 'core/Router'
import api from 'api'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  async function verifyToken() {
    const token = localStorage.getItem('token')
    if (token) {
      const { data } = await api.post('/auth/verifyToken', { token })
      setIsAuthenticated(data.isValidToken)

      return data.isValidToken
    }
    return isAuthenticated
  }

  useEffect(() => {
    verifyToken()
  }, [])

  return <Router isAuthenticated={isAuthenticated} />
}

export default App
