export const keys = {
  token: 'token',
  data: 'data',
}

export const setItem = (key, data) => localStorage.setItem(key, data)

export const getItem = key => localStorage.getItem(key)

export const clearItems = () => {
  localStorage.clear()
  return window.location.reload()
}
