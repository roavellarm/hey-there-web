import React, { useState } from 'react'
import GoogleLogin from 'react-google-login'
import Column from 'components/Column'

function Login() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [avatarImg, setAvatarImg] = useState('')
  const [loginType, setLoginType] = useState('')
  const { REACT_APP_GOOGLE_CLIENT_ID } = process.env
  const responseGoogle = response => {
    setName(response.profileObj.name)
    setEmail(response.profileObj.email)
    setAvatarImg(response.profileObj.imageUrl)
    setLoginType('google')

    const data = {
      name,
      email,
      avatarImg,
      loginType,
    }
    // eslint-disable-next-line no-console
    console.log(data)
  }

  return (
    <Column size={12}>
      <h1>Login</h1>
      <h2>{`Welcome: ${name}`}</h2>
      <h2>{`Email: ${email}`}</h2>
      <img src={avatarImg} alt={name} />
      <GoogleLogin
        clientId={}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy="single_host_origin"
      />
    </Column>
  )
}

export default Login
