import { getMessagesApi, sendMessagesApi, getChatInfoApi } from 'api/message'

export const getChatInfoService = async (chatId) => {
  try {
    const data = await getChatInfoApi(chatId)
    return data
  } catch (error) {
    return { error }
  }
}

export const getMessagesService = async (chatId) => {
  try {
    const data = await getMessagesApi(chatId)
    return data
  } catch (error) {
    return { error }
  }
}

export const sendMessageService = async (chatId, message) => {
  try {
    const data = await sendMessagesApi(chatId, message)
    return data
  } catch (error) {
    return { error }
  }
}
