import axios from 'axios'

const isLocalhost = window.location.origin.includes('localhost')

const api = axios.create({
  baseURL: isLocalhost
    ? 'http://localhost:3001'
    : 'https://heythere-staging-api.herokuapp.com',
})

export default api
