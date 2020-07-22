import React, { useEffect, useState } from 'react'
import PropType from 'prop-types'
import Navbar from 'components/Navbar'
import Row from 'components/Row'
import Column from 'components/Column'

function Layout(props) {
  const { isAuthenticated, children } = props

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

  useEffect(() => {
    handleLinks()
  }, [])

  return (
    <Row>
      <Navbar
        brand="Hey There"
        isAuthenticated={isAuthenticated}
        links={links}
      />
      <Row>
        <Column size={12} justifyContent="center">
          {children}
        </Column>
      </Row>
    </Row>
  )
}

Layout.propTypes = {
  isAuthenticated: PropType.bool.isRequired,
  children: PropType.oneOfType([PropType.node, PropType.array]).isRequired,
}

export default Layout
