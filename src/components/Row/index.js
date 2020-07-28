import React from 'react'
import PropTypes from 'prop-types'
import StyledRow from './styles'

function Row({ children, alignItems, ...props }) {
  return (
    <StyledRow alignItems={alignItems} {...props}>
      {children}
    </StyledRow>
  )
}

Row.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  alignItems: PropTypes.string,
}

Row.defaultProps = {
  alignItems: undefined,
}

export default Row
