import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Toast, { showToast } from 'components/Toast'
import Form from 'components/Form'
import { loginService } from 'services/authService'

function Login() {
  const [fields, setFields] = useState({})
  const { push } = useHistory()

  const handleFields = e => {
    const { name, value } = e.target
    setFields({ ...fields, [name]: value })
  }

  const responseGoogle = response => {
    const { email, imageUrl: url } = response.profileObj
    setFields({ ...fields, email, url })
  }

  async function handleLogin(e) {
    e.preventDefault()

    const { error } = await loginService(fields)
    if (error) {
      error.map(msg => showToast({ type: 'error', message: msg }))
      return null
    }

    push('/chat')
    return window.location.reload()
  }

  const onKeyDown = event => {
    const { keyCode } = event
    if (keyCode === 13) return handleLogin(event)
    return null
  }

  const renderComponents = [
    { type: 'input', name: 'Email' },
    { type: 'input', name: 'Password' },
    { type: 'button', name: 'Login', onClick: handleLogin },
    { type: 'googleButton', name: 'Login with Google', responseGoogle },
  ]

  return (
    <>
      <Form
        title="Welcome back"
        renderComponents={renderComponents}
        onKeyDown={onKeyDown}
        fields={fields}
        handleFields={handleFields}
      />
      <Toast />
    </>
  )
}

export default Login
