/* eslint-disable no-console */
import React, { useState } from 'react'
// import Form from 'components/Form'
// import { useHistory } from 'react-router-dom'
// import { useStore } from 'core/store'
// import { setItem, keys } from 'helpers'
// import { registerService } from 'services/authService'
import Toast, { showToast } from 'components/Toast'
import Textfield from 'components/Textfield'
import Button from 'components/Button'
import Column from 'components/Column'
import Row from 'components/Row'
import Typography from 'components/Typography'
// import { useHistory } from 'react-router-dom'
import Loader from 'components/Loader'
import api from '../../api'

function Join() {
  const [email, setEmail] = useState('asd@gmail.com')
  const [password, setPassword] = useState('JoGu3340')
  const [loading, setLoading] = useState(false)
  // const history = useHistory()

  async function handleFields(e) {
    e.preventDefault()
    try {
      const dados = { email, password }
      setLoading(true)
      const data = await api.post('/login', dados)
      setLoading(false)

      console.log(data)

      // history.push('/chat-room/:id')

      return showToast({ type: 'success', message: `Deu certo!` })
    } catch (error) {
      return showToast({ type: 'error', message: 'Deu ERRADO!' })
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
              Login
            </Typography>
          </Column>
        </Row>

        <Row>
          <Column size={12}>
            <Loader color="yellow" loading={loading} />
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
                // color="submitColor"
                type="submit"
                fullWidth
                style={{ margin: '1rem 0px', background: 'green' }}
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
