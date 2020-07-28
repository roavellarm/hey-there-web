import React from 'react'
import Row from 'components/Row'
import Column from 'components/Column'
import Typography from 'components/Typography'

function ChatRoom() {
  return (
    <>
      <Row>
        <Column size={12} background="black">
          <Column size={12}>
            <h1>Chat Room</h1>
          </Column>

          <Row>
            <Column
              size={9}
              background="white"
              padding="4px 4px 4px 10px"
              radius="0px 20px 4px 20px"
            >
              <Typography color="black">Oi! Tudo bem?</Typography>
            </Column>
            <Column size={3} />
          </Row>

          <Row>
            <Column size={3} />
            <Column
              size={9}
              background="lightBlue"
              alignItems="right"
              padding="4px 4px 4px 10px"
              radius="16px 4px 20px 0px"
            >
              <Typography color="black">Tudo! E ctg?</Typography>
            </Column>
          </Row>
        </Column>
      </Row>
    </>
  )
}

export default ChatRoom
