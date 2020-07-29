import { getMessagesApi } from 'api/message'

export const getMessagesService = async chatId => {
  try {
    const data = await getMessagesApi(chatId)
    return data
  } catch (error) {
    return { error }
  }
}
