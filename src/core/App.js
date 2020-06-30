import React from 'react'
import Router from 'core/Router'
import Navbar from 'components/Navbar'
import Column from 'components/Column'

function App() {
  const links = [
    { name: 'CHATS', path: '/' },
    { name: 'NEW CONTACT', path: '/new-contact' },
    { name: 'PROFILE', path: '/profile' },
    { name: 'LOGIN', path: '/login' },
    { name: 'REGISTER', path: '/register' },
  ]

  return (
    <>
      <Navbar brand="Hey There" links={links} />
      <Column size={12} alignItems="center">
        <Router />
      </Column>
    </>
  )
}

export default App
