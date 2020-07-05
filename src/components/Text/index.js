import React from 'react'
import PropTypes from 'prop-types'
import StyledText from './styles'

function Text({ children, ...props }) {
  const { fontSize, fontWeight, paddingLeft, paddingRight, color } = props

  return (
    <StyledText
      fontSize={fontSize}
      fontWeight={fontWeight}
      paddingLeft={paddingLeft}
      paddingRight={paddingRight}
      color={color}
    >
      {children}
    </StyledText>
  )
}

Text.propTypes = {
  color: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]).isRequired,

  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  paddingLeft: PropTypes.string,
  paddingRight: PropTypes.string,
}

Text.defaultProps = {
  fontSize: '15px',
  fontWeight: undefined,
  paddingLeft: undefined,
  paddingRight: undefined,
}
export default Text
