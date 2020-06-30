import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  color: ${({ theme }) => theme?.navbar?.color || 'white'};
  background-color: ${({ theme, backgroundColor }) => {
    if (backgroundColor) return backgroundColor
    return theme?.navbar?.backgroundColor || 'lightGrey'
  }};

  padding: ${({ theme }) => theme?.navbar?.padding || '0.5rem'};
  height: ${({ theme }) => theme?.navbar?.height};
`

export const StyledLink = styled.div`
  display: flex;
  padding-left: 5px;
  padding-right: 5px;
  justify-content: space-evenly;
`
