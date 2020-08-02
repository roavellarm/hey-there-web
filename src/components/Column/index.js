import React from 'react'
import PropTypes from 'prop-types'
import StyledColumn from './styles'

function Column({ size, children, ...props }) {
  return (
    <StyledColumn size={size} {...props}>
      {children}
    </StyledColumn>
  )
}

Column.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
  size: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
}

Column.defaultProps = {
  size: 1,
  children: undefined,
}

export default Column
