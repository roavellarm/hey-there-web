import React, { useState } from 'react'
import GoogleLogin from 'react-google-login'
import Column from 'components/Column'

function Login() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [url, setUrl] = useState('')

  const responseGoogle = response => {
    // eslint-disable-next-line no-console
    console.log(response.profileObj)

    setName(response.profileObj.name)
    setEmail(response.profileObj.email)
    setUrl(response.profileObj.imageUrl)
  }

  return (
    <Column size={12}>
      <h1>Login</h1>
      <h2>{`Welcome: ${name}`}</h2>
      <h2>{`Email: ${email}`}</h2>
      <img src={url} alt={name} />
      <GoogleLogin
        clientId="500788707906-bf6cvk9j4na6rsgkk9m19unbbahal1do.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy="single_host_origin"
      />
    </Column>
  )
}

export default Login
