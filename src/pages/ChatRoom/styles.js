import styled from 'styled-components'

export const StyledHeader = styled.div`
  position: fixed;
  display: flex;
  z-index: 1;
  width: 350px;
  border-radius: 5px 5px 0px 0px;
  align-items: center;
  justify-content: space-evenly;
  background: ${({ theme }) => theme.colors.primary};
  padding: 10px;
`

export const SenderWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background: #f0f0f0;
  padding: 10px;
  border-radius: 0px 0px 5px 5px;
`

export const StyledInput = styled.div`
  position: relative;
  width: 100%;
`

export const StyledIcon = styled.div`
  width: 30px;
  cursor: pointer;
  padding-left: 4px;
`
