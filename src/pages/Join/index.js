import React, { useState } from 'react'
import GoogleLogin from 'react-google-login'
import Row from 'components/Row'
import { useHistory } from 'react-router-dom'
import Button from 'components/Button'
import Textfield from 'components/Textfield'
import Column from 'components/Column'
import Toast, { showToast } from 'components/Toast'
import { registerService } from 'services/authService'

function Join() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const [url, setUrl] = useState('')
  const { push } = useHistory()
  const { REACT_APP_GOOGLE_CLIENT_ID } = process.env

  const handleJoin = async e => {
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

  const responseGoogle = response => {
    setEmail(response.profileObj.email)
    // setUrl(response.profileObj.imageUrl)
  }

  return (
    <Column size={5}>
      <Column size={12}>
        <h1>Join Hey There</h1>
      </Column>

      <Row>
        <Column size={12}>
          <Textfield
            value={name}
            onChange={e => setName(e.target.value)}
            label="Name"
            name="name"
            placeholder="Name"
          />
          <br />
          <Textfield
            label="Email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <br />
          <Textfield
            type="password"
            label="Password"
            placeholder="Password"
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
            onClick={handleJoin}
          >
            Sign Up
          </Button>
          <br />
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
                Join with Google
              </Button>
            )}
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy="single_host_origin"
          />
          <Toast />
        </Column>
      </Row>
    </Column>
  )
}

export default Join
