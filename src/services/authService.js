import { loginApi, registerApi } from 'api/auth'

export const loginService = async (info) => {
  try {
    const { data, error } = await loginApi(info)
    if (error) return Promise.reject(error)

    return { data }
  } catch (error) {
    return error
  }
}

export const registerService = async (info) => {
  try {
    const { data, error } = await registerApi(info)
    if (error) return Promise.reject(error)

    return { data }
  } catch (error) {
    return error
  }
}
