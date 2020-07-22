import React from 'react'
import { useHistory } from 'react-router-dom'
import PropType from 'prop-types'
import Select from 'components/Select'
import DropdownMenu from 'components/DropdownMenu'
import { Wrapper, Content, StyledBrand, StyledLink } from './styles'

function Navbar(props) {
  const {
    backgroundColor,
    brand,
    links,
    select,
    dropdown,
    isAuthenticated,
  } = props
  const { push } = useHistory()

  const handelOption = e => {
    const { value } = e.target
    push(value)
  }
  const handleBrandClick = () => {
    if (isAuthenticated) return push('/chat')
    return push('/')
  }

  const logOut = () => {
    localStorage.clear()
    return push('/')
  }

  return (
    <Wrapper backgroundColor={backgroundColor}>
      <Content>
        {brand && <StyledBrand onClick={handleBrandClick}>{brand}</StyledBrand>}

        {links &&
          links.map((link, index) => {
            return (
              <StyledLink key={index} onClick={() => push(link.path)}>
                {link.name}
              </StyledLink>
            )
          })}
        {isAuthenticated && <StyledLink onClick={logOut}>Logout</StyledLink>}
        {dropdown && (
          <DropdownMenu
            width="150px"
            title={dropdown.title}
            options={dropdown.options}
            onSelectOption={handelOption}
          />
        )}

        {select && (
          <Select
            width="150px"
            name="navbar"
            options={select.options}
            onChange={handelOption}
            placeholder={select.placeholder}
          />
        )}
      </Content>
    </Wrapper>
  )
}

Navbar.propTypes = {
  backgroundColor: PropType.string,
  isAuthenticated: PropType.bool.isRequired,
  brand: PropType.string,
  links: PropType.arrayOf(
    PropType.shape({
      name: PropType.string,
      path: PropType.string,
    })
  ),
  select: PropType.shape({
    placeholder: PropType.string,
    options: PropType.arrayOf(
      PropType.shape({
        label: PropType.string,
        value: PropType.string,
      })
    ),
  }),
  dropdown: PropType.shape({
    title: PropType.string,
    options: PropType.arrayOf(
      PropType.shape({
        name: PropType.string,
        action: PropType.string,
      })
    ),
  }),
}

Navbar.defaultProps = {
  backgroundColor: undefined,
  brand: undefined,
  links: undefined,
  dropdown: undefined,
  select: undefined,
}

export default Navbar
