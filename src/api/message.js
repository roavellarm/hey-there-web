import api from './index'

export const getMessagesApi = (chatId) => api.get(`chat/${chatId}`)
