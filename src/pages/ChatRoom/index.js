import React, { useEffect, useState } from 'react'
import { FiSend } from 'react-icons/fi'
import { useParams } from 'react-router-dom'
import { rgb } from 'polished'
import Row from 'components/Row'
import Column from 'components/Column'
import Typography from 'components/Typography'
import Avatar from 'components/Avatar'
import Toast, { showToast } from 'components/Toast'
import {
  getChatInfoService,
  getMessagesService,
  sendMessageService,
} from 'services/messageService'
import { getCurrentUser } from 'helpers'
import TextArea from 'components/TextArea'
import { StyledHeader, SenderWrapper, StyledInput, StyledIcon } from './styles'

function ChatRoom() {
  const { id } = useParams()
  const [messages, setMessages] = useState([])
  const [message, setMessage] = useState('')
  const [otherUser, setOtherUser] = useState({ name: '' })
  const { email: currentUserEmail } = getCurrentUser(getCurrentUser)

  const getChatInfo = async () => {
    const { data, error } = await getChatInfoService(id)
    if (error) return showToast('error', error)
    setOtherUser(data.otherUser)
    return data
  }

  const getMessages = async () => {
    const { data, error } = await getMessagesService(id)
    if (error) return showToast('error', error)
    return setMessages(data.messages)
  }

  const sendMessage = async () => {
    const { data, error } = await sendMessageService(id, {
      author: currentUserEmail,
      content: message,
    })
    if (error) return showToast('error', error)
    setMessage('')
    return setMessages(data.messages)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      getChatInfo()
      getMessages()
    }, 2000)
    return () => clearInterval(interval)
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <Row>
        <Column size={12} background="#574B5D" radius="5px">
          <StyledHeader>
            <Avatar size="50px" src={otherUser.avatar} border="green" />
            <Typography>{otherUser.name}</Typography>
          </StyledHeader>

          <Row
            style={{
              height: '800px',
              maxHeight: '800px',
              overflowY: 'auto',
            }}
          >
            {messages.map((item, index) => {
              return (
                <div key={index}>
                  {item.message.author !== currentUserEmail ? (
                    <>
                      <Column
                        size={9}
                        background="white"
                        padding="4px 4px 4px 20px"
                        radius="0px 20px 4px 20px"
                      >
                        <Typography size="md" weight="light" color="black">
                          {item.message.content}
                        </Typography>
                      </Column>
                      <Column size={3} />
                    </>
                  ) : (
                    <>
                      <Column size={3} />
                      <Column
                        size={9}
                        background="lightBlue"
                        alignItems="right"
                        padding="4px 4px 4px 10px"
                        radius="16px 4px 20px 0px"
                      >
                        <Typography size="md" weight="light" color="black">
                          {item.message.content}
                        </Typography>
                      </Column>
                    </>
                  )}
                </div>
              )
            })}
          </Row>
          <SenderWrapper>
            <StyledInput>
              <TextArea
                padding="8px 15px"
                radius="20px"
                value={message}
                placeholder="Type a message"
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={sendMessage}
                name="message"
              />
            </StyledInput>
            <StyledIcon onClick={sendMessage}>
              <FiSend color={rgb(145, 145, 145)} size="24" />
            </StyledIcon>
          </SenderWrapper>
        </Column>
        <Toast />
      </Row>
    </>
  )
}

export default ChatRoom
