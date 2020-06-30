import React from 'react'
import Router from 'core/Router'
import Navbar from 'components/Navbar'

function App() {
  const links = [
    { name: 'Chat', path: '/' },
    { name: 'New Contact', path: '/new-contact' },
    { name: 'Profile', path: '/profile' },
    { name: 'Login', path: '/login' },
    { name: 'Register', path: '/register' },
  ]

  return (
    <>
      <Navbar brand="Hey There" links={links} />
      <Router />
    </>
  )
}

export default App
