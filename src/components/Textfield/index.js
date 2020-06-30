import React from 'react'
import InputMask from 'react-input-mask'
import PropTypes from 'prop-types'
import { StyledTextfield } from './styles'
import Label from '../Label'

function Textfield(props) {
  const { label, fullWidth, value, onChange, isRequired } = props
  return (
    <div>
      {label && <Label isRequired={isRequired}>{label}</Label>}
      <InputMask {...props}>
        {inputProps => (
          <StyledTextfield
            {...props}
            value={value}
            onChange={onChange}
            fullWidth={fullWidth}
            {...inputProps}
          />
        )}
      </InputMask>
    </div>
  )
}

Textfield.propTypes = {
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  fullWidth: PropTypes.bool,
  isRequired: PropTypes.bool,
}

Textfield.defaultProps = {
  value: undefined,
  fullWidth: false,
  isRequired: false,
  name: '',
  label: '',
}

export default Textfield
