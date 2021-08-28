/* eslint-disable no-unused-vars */
import Row from 'components/Row'
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
// import Row from 'components/Row'
import {
  StyledMessagesContainer,
  StyledFieldArea,
  StyledButton,
  // StyledMessage,
  StyledTextField,
  HoverText,
  StyledMessage,
} from './styles'

// eslint-disable-next-line no-unused-vars
const getMessages = [
  {
    name: 'Rodrigo Avellar',
    email: 'roavellarm@gmail.com',
    message: 'Opa! Tranquilo?',
  },
  {
    name: 'Gustavo Sohne',
    email: 'gustavo@gmail.com',
    message: 'Eaeee! Tranquilo?',
  },
]

const currentUser = {
  name: 'Rodrigo Avellar',
  email: 'roavellarm@gmail.com',
}

function ChatRoom() {
  const [message, setMessage] = useState(undefined)
  const [chatMessages, setChatMessages] = useState([])
  // eslint-disable-next-line react/prop-types
  const { id } = useParams()
  console.log(id)

  // const getUserEmail = () => currentUser.email

  // const onSendMessage = async () => {
  //   try {
  //     await sendMessage(id, message)
  //     setMessage('')
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  //  612968d112b4d300047c94dc

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <StyledMessagesContainer>
      <Link to="/">
        <HoverText>
          <h1>Titulo do Chat </h1>
        </HoverText>
      </Link>
      {getMessages.map(m => (
        <Row key={m.email}>
          <StyledMessage>
            <strong>
              <div>{m.email}</div>
            </strong>
            <div>{m.message}</div>
          </StyledMessage>
        </Row>
      ))}

      <StyledButton onClick="only">Send</StyledButton>
      {/* </StyledFieldArea> */}
    </StyledMessagesContainer>
  )
}

export default ChatRoom
