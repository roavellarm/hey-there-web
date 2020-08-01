import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Toast, { showToast } from 'components/Toast'
import Form from 'components/Form'
import { setCurrentUser, setItem, keys } from 'helpers'
import { loginService } from 'services/authService'

function Login() {
  const [fields, setFields] = useState()
  const [loading, setLoading] = useState(false)
  const { push } = useHistory()

  const handleFields = (e) => {
    const { name, value } = e.target
    setFields({ ...fields, [name]: value })
  }

  const handleLogin = async (params) => {
    setLoading(true)

    const { data, error } = await loginService(params)

    setLoading(false)
    if (error) {
      typeof error === 'string'
        ? showToast('error', error)
        : error.map((msg) => showToast('error', msg))
      return null
    }

    setItem(keys.token, data.token)
    setCurrentUser(data.currentUser)
    setFields({ ...fields, password: '' })
    push('/chat')
    window.location.reload()
    return null
  }

  const responseGoogle = (response) => {
    const { googleId, email, imageUrl: avatar, name } = response.profileObj
    const password = `@HeyThere${googleId}`
    handleLogin({ password, email, avatar, name })
  }

  const onKeyDown = (event) => {
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
        loading={loading}
      />
      <Toast />
    </>
  )
}

export default Login
