/* eslint-disable no-console */
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
import Column from 'components/Column'
import Row from 'components/Row'
import Typography from 'components/Typography'

function Join() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleFields(e) {
    e.preventDefault()

    try {
      const data = { name, email, password }

      const dados = await api.post('/register', data)

      return console.log('Deu certo', dados)
    } catch (error) {
      return console.log('Deu ERRADO')
    }
  }

  return (
    <>
      <Column
        size={7}
        style={{ background: 'rgba(255, 255, 255, 0.1)' }}
        radius="10px"
        padding="0px 1rem 1rem 1rem"
      >
        <Row>
          <Column size={12} justifyContent="center" margin="2rem 2%">
            <Typography size="xl" weight="light">
              {/* {title} */}
              Join
            </Typography>
          </Column>
        </Row>

        <Row>
          <Column size={12}>
            {/* <Loader color="yellow" loading={loading} /> */}
            <form onSubmit={handleFields}>
              <Textfield
                style={{ marginBottom: '1rem' }}
                label="name"
                placeholder="Name"
                type="text"
                name="name"
                onChange={e => setName(e.target.value)}
              />
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
                label="password"
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
          </Column>
        </Row>
      </Column>
      <Toast />
    </>
  )
}

export default Join
