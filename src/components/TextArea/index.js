import React from 'react'
import PropTypes from 'prop-types'
import StyledTextarea from './styles'
import Label from '../Label'

function TextArea(props) {
  const {
    isRequired,
    name,
    onChange,
    onKeyDown,
    radius,
    value,
    label,
    type,
  } = props
  return (
    <div>
      {label && <Label isRequired={isRequired}>{label}</Label>}
      <div>
        <StyledTextarea
          {...props}
          key={name}
          value={value}
          type={type}
          radius={radius}
          onChange={onChange}
          onKeyDown={(e) => (e.keyCode === 13 ? onKeyDown() : undefined)}
        />
      </div>
    </div>
  )
}

TextArea.propTypes = {
  onChange: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func,
  value: PropTypes.string,
  isRequired: PropTypes.bool,
  label: PropTypes.string,
  radius: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
}

TextArea.defaultProps = {
  onKeyDown: undefined,
  value: undefined,
  radius: undefined,
  isRequired: false,
  label: undefined,
  type: 'text',
}

export default TextArea
