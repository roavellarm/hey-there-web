/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { toast } from 'react-toastify'
// eslint-disable-next-line import/no-unresolved
import { StyledToast } from './styles'

export const showToast = ({ type, message }) => {
  switch (type) {
    case 'success':
      toast.success(message)
      break
    case 'warn':
      toast.warn(message)
      break
    case 'error':
      toast.error(message)
      break
    default:
      toast.info(message)
  }
}
export default () => {
  return <StyledToast />
}
