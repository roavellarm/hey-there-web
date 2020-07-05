import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Row from 'components/Row'
import {
  StyledMessagesContainer,
  StyledFieldArea,
  StyledButton,
  StyledMessage,
  StyledTextField,
  HoverText,
} from './styles'

const getMessages = id => {
  return [
    {
      name: 'Rodrigo Avellar',
      email: 'roavellarm@gmail.com',
      message: 'Opa! Tranquilo?',
    },
  ]
}

const currentUser = {
  name: 'Rodrigo Avellar',
  email: 'roavellarm@gmail.com',
}

function ChatRoom({ match }) {
  const [message, setMessage] = useState(undefined)
  const [chatMessages, setChatMessages] = useState([])
  const { id } = match.params

  const getUserEmail = () => currentUser.email

  const onSendMessage = async () => {
    // try {
    //   await sendMessage(id, message)
    //   setMessage('')
    // } catch (error) {
    //   console.log(error)
    // }
  }

  const onGetMessages = async () => {
    try {
      const response = await getMessages(+id)
      setChatMessages(response.data)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  }

  useEffect(() => {
    onGetMessages()
  }, [])

  return (
    <StyledMessagesContainer>
      <Link to="/">
        <HoverText>
          <h1>Titulo do Chat </h1>
        </HoverText>
      </Link>
      {chatMessages.map(m => (
        <Row key={m.email}>
          <StyledMessage isUser={getUserEmail() === m.email}>
            <strong>
              <div>{m.name}</div>
            </strong>
            <div>{m.message}</div>
          </StyledMessage>
        </Row>
      ))}
      <StyledFieldArea>
        <StyledTextField
          value={message}
          onKeyDown={({ keyCode }) => {
            return keyCode === 13 ? onSendMessage() : undefined
          }}
          onChange={({ target }) => setMessage(target.value)}
        />
        <StyledButton onClick={() => onSendMessage()}>Send</StyledButton>
      </StyledFieldArea>
    </StyledMessagesContainer>
  )
}

export default ChatRoom
