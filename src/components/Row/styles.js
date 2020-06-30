import styled from 'styled-components'

const StyledRow = styled.div`
  display: ${({ inline }) => (inline ? 'flex' : null)};
  align-items: ${({ inline }) => (inline ? 'center' : null)};
  flex-direction: ${({ inline }) => (inline ? 'inline' : null)};
  flex-wrap: ${({ wrap }) => (wrap ? 'wrap' : null)};
  position: relative;
  width: 100%;
  background-color: ${props => {
    if (props.backgroundColor === 'primary') return props.theme.colors.primary
    if (props.backgroundColor === 'secondary')
      return props.theme.colors.secondary
    if (props.backgroundColor === 'textPrimary')
      return props.theme.colors.textPrimary
    if (props.backgroundColor === 'textSecondary')
      return props.theme.colors.textSecondary
    if (props.backgroundColor === 'silver') return props.theme.colors.silver
    if (props.backgroundColor === 'white') return props.theme.colors.white
    if (props.backgroundColor === 'black') return props.theme.colors.black
    if (props.backgroundColor === 'success') return props.theme.colors.success
    if (props.backgroundColor === 'warning') return props.theme.colors.warning
    if (props.backgroundColor === 'danger') return props.theme.colors.danger
    if (props.backgroundColor === 'error') return props.theme.colors.error
    return null
  }};

  &::after {
    content: '';
    display: table;
    clear: both;
  }
`
export default StyledRow
