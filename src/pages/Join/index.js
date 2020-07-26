import React, { useState } from 'react'
import Form from 'components/Form'
import { useHistory } from 'react-router-dom'
import Toast, { showToast } from 'components/Toast'
import { registerService } from 'services/authService'

function Join() {
  const [fields, setFields] = useState({})
  const [loading, setLoading] = useState(false)

  const handleFields = e => {
    const { name, value } = e.target
    setFields({ ...fields, [name]: value })
  }

  const { push } = useHistory()

  const handleJoin = async e => {
    setLoading(true)
    e.preventDefault()
    const { error } = await registerService(fields)
    setLoading(false)

    if (error) {
      typeof error === 'string'
        ? showToast({ type: error, message: error })
        : error.map(msg => showToast({ type: 'error', message: msg }))
      return null
    }

    push('/chat')
    return window.location.reload()
  }

  const responseGoogle = response => {
    const { email, imageUrl: url, name } = response.profileObj
    setFields({ ...fields, email, url, name })
  }

  const onKeyDown = event => {
    const { keyCode } = event
    if (keyCode === 13) return handleJoin(event)
    return null
  }

  const renderComponents = [
    { type: 'input', name: 'Name' },
    { type: 'input', name: 'Email' },
    { type: 'input', name: 'Password' },
    { type: 'button', name: 'Sign Up', onClick: handleJoin },
    { type: 'googleButton', name: 'Join with Google', responseGoogle },
  ]

  return (
    <>
      <Form
        title="Join Hey There"
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

export default Join
