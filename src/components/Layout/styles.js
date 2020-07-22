import styled from 'styled-components'

export const StyledLayout = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  color: ${({ theme }) => theme?.navbar?.color || 'white'};
  height: ${({ theme }) => theme?.navbar?.height};
`
