import React, { useState } from 'react'
import Row from 'components/Row'
import { useHistory } from 'react-router-dom'
import Button from 'components/Button'
import Textfield from 'components/Textfield'
import Column from 'components/Column'
import api from '../../api/index'

function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const history = useHistory()

  async function handleRegister(e) {
    e.preventDefault()

    const data = { name, email, password }

    try {
      await api.post('/register', data)

      // eslint-disable-next-line no-alert
      alert('Cadastro efetuado com sucesso!')
      history.push('/chat')
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert('Erro no cadastro!!')
    }
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
        </Column>
      </Row>
    </Column>
  )
}

export default Register
