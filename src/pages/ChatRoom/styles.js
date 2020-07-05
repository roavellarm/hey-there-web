import styled from 'styled-components'

export const StyledMessagesContainer = styled.div``

export const StyledMessage = styled.div`
  background: ${({ isUser }) => (isUser ? '#3f51b5' : 'silver')};
  color: ${({ isUser }) => (isUser ? '#FAFAFA' : 'black')};
  text-align: ${({ isUser }) => (isUser ? 'right' : 'left')};
  float: ${({ isUser }) => (isUser ? 'right' : 'left')};
  padding: 10px;
  border-radius: 10px 0 10px 0;
  margin: 3px 10px;
  min-width: 100px;
  letter-spacing: 1px;
`

export const StyledTextField = styled.input`
  width: 100%;
  font-size: 1.3em;
`

export const StyledButton = styled.button`
  background: #3f51b5;
  color: #fafafa;
  width: 100px;
  letter-spacing: 1px;
  font-weight: 600;
  font-size: 1.1em;
  border: none;
`

export const StyledFieldArea = styled.div`
  display: flex;
  width: 100%;
  position: fixed;
  bottom: 0;
  height: 50px;
`

export const HoverText = styled.div`
  :hover {
    cursor: pointer;
  }
`
