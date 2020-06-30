import styled from 'styled-components'

export const StyledImage = styled.div`
  position: absolute;
  display: flex;
  height: 60px;
  width: 60px;
  padding: 0px;
  margin: 0px;
  border-radius: 100%;
  background: ${({ image }) => `url(${image})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

export const StyledNumber = styled.div`
  display: flex;
  height: 20px;
  width: 20px;
  background: #32a852;
  padding: 4px;
  border-radius: 100%;
  justify-content: center;
  align-items: center;
`
