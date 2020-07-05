import styled from 'styled-components'

const StyledText = styled.text`
  font-size: ${props => `${props.theme.typography.size.md}px`};
  font-weight: ${props => props.theme.typography.weight.bold};
  padding-left: 3px;
  padding-right: 13px;
  color: ${color => color || 'orange'};
`

export default StyledText
