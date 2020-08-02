import api from './index'

export const getChatInfoApi = (chatId) => api.get(`chat-info/${chatId}`)

export const getMessagesApi = (chatId) => api.get(`chat/${chatId}`)

export const sendMessagesApi = (chatId, message) =>
  api.post(`chat/${chatId}`, message)
