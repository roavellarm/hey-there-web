export const keys = {
  token: 'token',
  data: 'data',
}

export const setItem = (key, data) => {
  return localStorage.setItem(key, data)
}

export const getItem = key => {
  return localStorage.getItem(key)
}

export const clearItems = () => {
  localStorage.clear()
  return window.location.reload()
}

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('currentUser'))
}

export const setCurrentUser = data => {
  return localStorage.setItem('currentUser', JSON.stringify(data))
}
