import { loginApi, registerApi } from 'api/auth'
import { setItem, keys } from 'helpers'

export const loginService = async info => {
  try {
    const { data } = await loginApi(info)

    setItem(keys.token, data.token)
    return data
  } catch (error) {
    return error
  }
}

export const registerService = async info => {
  try {
    const { data, error } = await registerApi(info)
    if (error) return Promise.reject(error)
    const { error: loginError } = await loginService(info)
    if (loginError) return Promise.reject(loginError)

    return data
  } catch (error) {
    return error
  }
}
