import users from './users'

export default () => {
  const user1 = users[0]
  const user2 = users[1]

  return [
    {
      idParam: 1,
      sender: user1.id,
      receiver: user2.id,
      content: 'Hey!! how are you doing?',
      sended: true,
      received: true,
      readed: true,
    },
    {
      idParam: 1,
      sender: user2.id,
      receiver: user1.id,
      content: "I'm fine! And you?",
      sended: true,
      received: true,
      readed: true,
    },
    {
      idParam: 1,
      sender: user1.id,
      receiver: user2.id,
      content: 'Not too bad...',
      sended: true,
      received: true,
      readed: true,
    },
  ]
}
