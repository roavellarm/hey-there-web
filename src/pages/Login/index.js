import React, { useState } from 'react'
import GoogleLogin from 'react-google-login'
import { useHistory } from 'react-router-dom'
import ToastAnimated, { showToast } from 'components/Toast'
import Column from 'components/Column'
import Textfield from 'components/Textfield'
import Button from 'components/Button'
import Row from 'components/Row'
import { loginService } from 'services/authService'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const [url, setUrl] = useState('')
  const { REACT_APP_GOOGLE_CLIENT_ID } = process.env
  const { push } = useHistory()

  const responseGoogle = response => {
    setEmail(response.profileObj.email)
    // setUrl(response.profileObj.imageUrl)
  }

  async function handleLogin(e) {
    e.preventDefault()

    const { error } = await loginService({ email, password })
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
        <h1>LOGIN</h1>
      </Column>

      <Row>
        <Column size={12}>
          <Textfield
            label="Email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <br />
          <Textfield
            type="password"
            label="Password"
            name="password"
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
            Enter
          </Button>
          <br />
          <GoogleLogin
            clientId={REACT_APP_GOOGLE_CLIENT_ID}
            render={renderProps => (
              <Button
                color="primary"
                type="submit"
                leftIcon="AiFillGoogleCircle"
                fullWidth
                style={{ margin: '1rem 0px' }}
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                Login with Google
              </Button>
            )}
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy="single_host_origin"
          />
          <ToastAnimated />
        </Column>
      </Row>
    </Column>
  )
}

export default Login
