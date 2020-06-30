import React from 'react'
import PropType from 'prop-types'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel as ReactCarousel } from 'react-responsive-carousel'
import styled from 'styled-components'

export const StyledLegend = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background: rgba(255, 255, 255, 0.4);
  font-size: ${({ theme }) => theme.typography.size.xxl};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  padding: 10;
`

function Carousel(props) {
  const { productList } = props

  return (
    <ReactCarousel
      infiniteLoop
      autoPlay
      showThumbs={false}
      showStatus={false}
      showIndicators={false}
      interval={3000}
      // centerMode
      width="100%"
    >
      {productList
        .filter(product => !!product.headerImage)
        .map(product => {
          return (
            <div key={product._id}>
              <img
                alt={product.nickname}
                src={product.headerImage}
                height="300"
                width="auto"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
              <StyledLegend>{product.nickname}</StyledLegend>
            </div>
          )
        })}
    </ReactCarousel>
  )
}

Carousel.propTypes = {
  productList: PropType.arrayOf(PropType.shape({})).isRequired,
}

export default Carousel
