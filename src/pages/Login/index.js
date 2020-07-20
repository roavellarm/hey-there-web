import React, { useState } from 'react'
import GoogleLogin from 'react-google-login'
import Column from 'components/Column'
import Textfield from 'components/Textfield'
import Label from 'components/Label'
import Button from 'components/Button'
import Row from 'components/Row'
import api from 'services/api'
import { useHistory } from 'react-router-dom'

function Login() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [url, setUrl] = useState('')
  const { REACT_APP_GOOGLE_CLIENT_ID } = process.env

  const history = useHistory()

  const responseGoogle = response => {
    // eslint-disable-next-line no-console
    console.log(response.profileObj)

    setName(response.profileObj.name)
    setEmail(response.profileObj.email)
    setUrl(response.profileObj.imageUrl)
  }

  async function handleLogin(e) {
    e.preventDefault()

    const data = { email, password }

    try {
      await api.post('/login', data)

      alert('Login efetuado com sucesso!')
      history.push('/')
    } catch (error) {
      alert('Erro no Login!!')
    }
  }

  return (
    <Column size={5}>
      <Column size={12}>
        <h1>Login</h1>
      </Column>

      <Row>
        <Column size={12}>
          <Row>
            <Column size={12} justifyContent="center">
              {/* <h2>{`Welcome: ${name}`}</h2>
      <h2>{`Email: ${email}`}</h2> */}
              <img src={url} alt={name} />
              <GoogleLogin
                clientId={REACT_APP_GOOGLE_CLIENT_ID}
                buttonText="Login with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy="single_host_origin"
              />

              <br />
              <Label> Or </Label>
            </Column>
          </Row>

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
            onClick={handleLogin}
          >
            Entrar
          </Button>
        </Column>
      </Row>
    </Column>
  )
}

export default Login
