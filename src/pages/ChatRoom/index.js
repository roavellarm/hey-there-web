import React from 'react'
import Row from 'components/Row'
import Column from 'components/Column'
import Typography from 'components/Typography'

function ChatRoom() {
  return (
    <>
      <Row>
        <Column size={12} justifyContent="center" background="black">
          <Column size={12}>
            <h1>Chat Room</h1>
          </Column>

          <Row>
            <Column
              size={10}
              background="white"
              // justifyContent="left"
              // alignItems="left"
              padding="5px"
              radius="5px"
            >
              <Typography alignText="left" color="black">
                Oi! Tudo bem?
              </Typography>
            </Column>
          </Row>

          <Row>
            <Column
              size={10}
              background="white"
              // justifyContent="right"
              // alignItems="left"
              padding="5px"
              radius="5px"
            >
              <Typography alignText="left" color="black">
                Tudo! E ctg?
              </Typography>
            </Column>
          </Row>
        </Column>
      </Row>
    </>
  )
}

export default ChatRoom
