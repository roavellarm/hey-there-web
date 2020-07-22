import React, { useState, useEffect } from 'react'
import Router from 'core/Router'
import Navbar from 'components/Navbar'
import Row from 'components/Row'
import Column from 'components/Column'
import api from 'api'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [links, setLinks] = useState([])

  const handleLinks = () => {
    if (isAuthenticated) {
      setLinks(
        links.concat([
          { name: 'CHATS', path: '/chat' },
          { name: 'NEW CONTACT', path: '/new-contact' },
          { name: 'PROFILE', path: '/profile' },
        ])
      )
      return links
    }
    setLinks(
      links.concat([
        { name: 'LOGIN', path: '/login' },
        { name: 'REGISTER', path: '/register' },
      ])
    )
    return links
  }

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
    handleLinks()
  }, [])

  return (
    <>
      <Navbar
        brand="Hey There"
        isAuthenticated={isAuthenticated}
        links={links}
      />
      <Row>
        <Column size={12} justifyContent="center">
          <Router isAuthenticated={isAuthenticated} />
        </Column>
      </Row>
    </>
  )
}

export default App
