import React, { useState } from 'react'
// import Form from 'components/Form'
// import { useHistory } from 'react-router-dom'
// import { useStore } from 'core/store'
// import { setItem, keys } from 'helpers'
// import { registerService } from 'services/authService'
import Toast from 'components/Toast'
import Textfield from 'components/Textfield'
import Button from 'components/Button'
import api from 'api'

function Join() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleFields(e) {
    e.preventDefault()

    try {
      const data = { email, password }

      const dados = await api.post('/login', data)

      return console.log('Deu certo', dados)
    } catch (error) {
      return console.log('Deu ERRADO')
    }
  }

  return (
    <>
      <form onSubmit={handleFields}>
        <Textfield
          style={{ marginBottom: '1rem' }}
          label="email"
          placeholder="Email"
          type="email"
          name="name"
          onChange={e => setEmail(e.target.value)}
        />

        <Textfield
          style={{ marginBottom: '1rem' }}
          label="assword"
          placeholder="Password"
          type="password"
          name="senha"
          onChange={e => setPassword(e.target.value)}
        />

        <Button
          color="submitColor"
          type="submit"
          fullWidth
          style={{ margin: '1rem 0px' }}
        >
          Sign up
        </Button>
      </form>
      <Toast />
    </>
  )
}

export default Join
