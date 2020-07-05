import React from 'react'
import Router from 'core/Router'
import Navbar from 'components/Navbar'
import Row from 'components/Row'
import Column from 'components/Column'

function App() {
  const links = [
    { name: 'NEW CONTACT', path: '/new-contact' },
    { name: 'PROFILE', path: '/profile' },
    { name: 'LOGIN', path: '/login' },
    { name: 'REGISTER', path: '/register' },
  ]

  return (
    <>
      <Navbar brand="Hey There" links={links} />
      <Row>
        <Column size={12} justifyContent="center">
          <Router />
        </Column>
      </Row>
    </>
  )
}

export default App
