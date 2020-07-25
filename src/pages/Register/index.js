import React, { useState } from 'react'
import Row from 'components/Row'
import { useHistory } from 'react-router-dom'
import Button from 'components/Button'
import Textfield from 'components/Textfield'
import Column from 'components/Column'
import Toast, { showToast } from 'components/Toast'
import { registerService } from 'services/authService'

function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { push } = useHistory()

  async function handleRegister(e) {
    e.preventDefault()

    const data = { name, email, password }

    const { error } = await registerService(data)
    if (error) {
      error.map(msg => showToast({ type: 'error', message: msg }))
      return null
    }

    push('/chat')
    return window.location.reload()
  }

  return (
    <Column size={5}>
      <Column size={12}>
        <h1>Cadastre-se</h1>
      </Column>

      <Row>
        <Column size={12}>
          <Textfield
            value={name}
            onChange={e => setName(e.target.value)}
            label="Nome"
            name="nome"
          />
          <br />
          <Textfield
            label="Email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <br />
          <Textfield
            type="password"
            label="Senha"
            name="senha"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <br />
          <Button
            color="secondary"
            type="submit"
            fullWidth
            style={{ margin: '1rem 0px' }}
            onClick={handleRegister}
          >
            Cadastrar
          </Button>
          <Toast />
        </Column>
      </Row>
    </Column>
  )
}

export default Register
