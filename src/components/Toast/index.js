import React from 'react'
import PropType from 'prop-types'
import Snackbar from '@material-ui/core/Snackbar'
import SnackbarContent from '@material-ui/core/SnackbarContent'

function Toast({ theme, message, type, open, onClose, duration }) {
  function getColor(color) {
    if (color === 'success') return theme.colors.success || 'green'
    if (color === 'error') return theme.colors.error || 'red'
    if (color === 'warning') return theme.colors.warning || 'yellow'
    return null
  }

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open}
        autoHideDuration={duration}
        onClose={onClose}
      >
        <SnackbarContent
          message={message}
          style={{
            backgroundColor: type ? getColor(type) : null,
            fontFamily: theme.typography.type.primary || 'inherit',
            fontSize: theme.typography.size.sm || 'inherit',
            fontWeight: theme.typography.weight.bold || 'inherit',
          }}
        />
      </Snackbar>
    </div>
  )
}

Toast.propTypes = {
  message: PropType.string.isRequired,
  type: PropType.string,
  open: PropType.bool.isRequired,
  onClose: PropType.func.isRequired,
  duration: PropType.number,
  theme: PropType.shape({
    colors: PropType.shape({
      success: PropType.string,
      error: PropType.string,
      warning: PropType.string,
    }),
    typography: PropType.shape({
      type: PropType.shape({
        primary: PropType.string,
      }),
      size: PropType.string,
      weight: PropType.shape({
        bold: PropType.string,
      }),
    }),
  }),
}

Toast.defaultProps = {
  theme: undefined,
  type: undefined,
  duration: 3000,
}

export default Toast
