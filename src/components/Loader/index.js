import React from 'react'
import PropType from 'prop-types'
import { css } from '@emotion/core'
import { FadeLoader } from 'react-spinners'

const override = css`
  display: flex;
  margin: 0 auto;
`

function Loader({ theme }) {
  return (
    <div className="sweet-loading">
      <FadeLoader
        css={override}
        height={15}
        width={15}
        radius={100}
        margin={10}
        color={theme.colors.primary || 'blue'}
        loading
      />
    </div>
  )
}

Loader.propTypes = {
  theme: PropType.shape({
    colors: PropType.shape({
      primary: PropType.string,
    }),
  }),
}

Loader.defaultProps = {
  theme: undefined,
}

export default Loader
