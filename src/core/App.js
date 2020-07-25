import React, { useEffect } from 'react'
import { useStore } from 'core/store'
import Navbar from 'components/Navbar'
import Row from 'components/Row'
import Column from 'components/Column'
import Router from 'core/Router'
import { clearItems, getItem, keys } from 'helpers'
import api from 'api'

function App() {
  const { store, setStore } = useStore()

  async function verifyToken() {
    const token = getItem(keys.token)
    if (token) {
      const { data } = await api.post('/verifyToken', { token })
      if (!data?.isValidToken) {
        setStore(null)
        clearItems()
        window.location.reload()
      }
    }
  }

  useEffect(() => {
    verifyToken()
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <Navbar brand="Hey There" isAuthenticated={!!store.token} />
      <Row>
        <Column size={12} justifyContent="center">
          <Router isAuthenticated={!!store.token} />
        </Column>
      </Row>
    </>
  )
}

export default App
