import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Row from 'components/Row'
import Column from 'components/Column'
import Typography from 'components/Typography'
import { getMessagesService } from 'services/messageService'
import { getCurrentUser } from 'helpers'

function ChatRoom() {
  const { id } = useParams()
  const [messages, setMessages] = useState([])
  const { email: currentUserEmail } = getCurrentUser(getCurrentUser)

  const getMessages = async () => {
    const { data, error } = await getMessagesService(id)
    if (error) return alert('Ferrou!')
    setMessages(data.messages)
    return data
  }

  useEffect(() => {
    getMessages()
  }, [])

  return (
    <>
      <Row>
        <Column size={12} background="black">
          <Column size={12}>
            <h1>Chat Room</h1>
          </Column>
          {messages.map(item => {
            return (
              <>
                {item.message.author !== currentUserEmail ? (
                  <Row>
                    <Column
                      size={9}
                      background="white"
                      padding="4px 4px 4px 10px"
                      radius="0px 20px 4px 20px"
                    >
                      <Typography color="black">
                        {item.message.content}
                      </Typography>
                    </Column>
                    <Column size={3} />
                  </Row>
                ) : (
                  <Row>
                    <Column size={3} />
                    <Column
                      size={9}
                      background="lightBlue"
                      alignItems="right"
                      padding="4px 4px 4px 10px"
                      radius="16px 4px 20px 0px"
                    >
                      <Typography color="black">
                        {item.message.content}
                      </Typography>
                    </Column>
                  </Row>
                )}
              </>
            )
          })}
        </Column>
      </Row>
    </>
  )
}

export default ChatRoom
