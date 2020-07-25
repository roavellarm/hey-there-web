import React, { useState } from 'react'
import GoogleLogin from 'react-google-login'
import { useHistory } from 'react-router-dom'
import ToastAnimated, { showToast } from 'components/Toast'
import Column from 'components/Column'
import Textfield from 'components/Textfield'
import Button from 'components/Button'
import Row from 'components/Row'
import Typography from 'components/Typography'
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
    <Column size={4}>
      <Row>
        <Column size={12} justifyContent="center" margin="2rem 2%">
          <Typography size="xl" weight="light">
            Welcome back
          </Typography>
        </Column>
      </Row>

      <Row>
        <Column size={12}>
          <Textfield
            style={{ marginBottom: '1rem' }}
            label="Email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <Textfield
            style={{ marginBottom: '1rem' }}
            type="password"
            label="Password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <Button
            color="submitColor"
            type="submit"
            fullWidth
            style={{ margin: '1rem 0px' }}
            onClick={handleLogin}
          >
            Login
          </Button>

          <Column size={12} justifyContent="center">
            <Typography size="sm" weight="bold">
              OR
            </Typography>
          </Column>

          <GoogleLogin
            clientId={REACT_APP_GOOGLE_CLIENT_ID}
            render={renderProps => (
              <Button
                color="googleColor"
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
        </Column>
      </Row>
      <ToastAnimated />
    </Column>
  )
}

export default Login
