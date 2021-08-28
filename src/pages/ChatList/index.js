import React from 'react'
import { useHistory } from 'react-router-dom'
import Row from 'components/Row'
import Column from 'components/Column'
import Typography from 'components/Typography'
import { chatList } from 'mocks/chatList'
import { StyledImage, StyledNumber } from './styles'

function ChatList() {
  const { push } = useHistory()

  const handleClick = id => {
    return push(`/chat-room/${id}`)
  }

  return (
    <Row>
      {chatList.map(item => {
        return (
          <Row
            key={item.id}
            backgroundColor="primary"
            radius="8px"
            alignItems="center"
            margin="2px"
            onClick={() => handleClick(item.id)}
          >
            <Column size={12} margin="8px 2%">
              <Column size={1}>
                <StyledImage image={item.user.avatar} />
              </Column>

              <Column size={9} alignItems="left" direction="column">
                <Typography size="md" weight="bold">
                  {item.user.nickname}
                </Typography>
                <Typography color="secondary">{item.msgPreview}</Typography>
              </Column>

              <Column size={2} direction="column">
                <Typography
                  size="sm"
                  weight={item.newMessages !== '0' ? 'bold' : 'regular'}
                  color={item.newMessages !== '0' ? '#32a852' : 'grey'}
                >
                  {item.time}
                </Typography>

                {item.newMessages !== '0' ? (
                  <StyledNumber>
                    <Typography size="sm" weight="black">
                      {item.newMessages}
                    </Typography>
                  </StyledNumber>
                ) : null}
              </Column>
            </Column>
          </Row>
        )
      })}
    </Row>
  )
}

export default ChatList
