import React from 'react'
import PropType from 'prop-types'
import { FaUserCircle } from 'react-icons/fa'
import { StyledImage } from './styles'

function Avatar({ src, size, border }) {
  return (
    <>
      {src ? (
        <StyledImage size={size} src={src} border={border} />
      ) : (
        <FaUserCircle
          size={size}
          border={border}
          style={{ border: `3px solid ${border}`, borderRadius: '100%' }}
        />
      )}
    </>
  )
}

Avatar.propTypes = {
  src: PropType.string,
  size: PropType.string,
  border: PropType.string,
}

Avatar.defaultProps = {
  src: undefined,
  size: undefined,
  border: undefined,
}

export default Avatar
