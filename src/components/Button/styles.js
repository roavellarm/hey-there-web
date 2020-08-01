import styled from 'styled-components'
import { rgba } from 'polished'

function getBackground({ theme, color, isOutline, isGradient }) {
  if (isGradient)
    return `linear-gradient(to right, ${theme.colors.primary} 0%, ${rgba(
      theme.colors.primary,
      theme.opacities.default
    )} 100%);`
  if (isOutline) return 'transparent'
  if (!color) return theme.colors.primary
  return theme.colors[color]
}

function getOpacity({ theme, isDisabled, isLoading }) {
  if (isDisabled) return theme.opacities.default
  if (isLoading) return theme.opacities.soft
  return 1
}

function getCursor({ isDisabled, isLoading }) {
  if (isDisabled || isLoading) return 'not-allowed'
  return 'pointer'
}

function getWidth({ fullWidth }) {
  if (fullWidth) return '100%'
  return 'initial'
}

function getBorder({ theme, isOutline, color }) {
  if (!isOutline) return 'none'
  return `solid ${theme.colors[color]}`
}

function getFontColor({ theme, isOutline, color }) {
  if (['silver', 'warning', 'white'].includes(color)) {
    return theme.colors.black
  }
  if (isOutline) return theme.colors[color || 'white']
  return theme.colors.white
}

function getPadding({ hasIcon }) {
  if (hasIcon) return '0px 12px'
  return '10px 12px'
}

const StyledButton = styled.button`
  color: ${getFontColor};
  box-shadow: ${(props) => props.theme.shadows.box.soft};
  font-size: ${(props) => props.theme.typography.size.sm};
  background: ${getBackground};
  border: ${getBorder};
  opacity: ${getOpacity};
  cursor: ${getCursor};
  width: ${getWidth};
  padding: ${getPadding};
  border-radius: ${(props) => props.theme.border.radius};
  font-weight: ${(props) => props.theme.typography.weight.bold};
  letter-spacing: 1px;

  position: relative;
  overflow: hidden;
  -webkit-appearance: none;

  position: relative;
  text-align: center;
  text-decoration: none;
  transition: all 150ms ease-out;
  vertical-align: top;
  white-space: nowrap;
  margin: 0.5rem;
  height: 37px;

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #leftIcon {
    padding-right: 5px;
  }

  #rightIcon {
    padding-left: 5px;
  }

  :active,
  :focus {
    outline: none;
  }

  :active {
    transform: ${(props) =>
      !props.isDisabled && !props.isLoading && `translate(1px, -1px)`};
    box-shadow: ${(props) => rgba(props.theme.colors.primary, 0.2)} 0 1px 3px
      2px;
  }

  &:hover {
    filter: brightness(1.5);
  }
`

export default StyledButton
