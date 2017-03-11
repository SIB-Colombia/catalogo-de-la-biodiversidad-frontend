import React, {PropTypes} from 'react'
import styled from 'styled-components'
import {palette} from 'styled-theme'

import {
  Block,
  Paragraph,
  IconLink,
  IconButton,
  LogoImage,
  Tooltip,
  Image
} from 'components'

const Wrapper = styled(Block)`
height: calc(100vh - 3.75rem) !important;
max-height: 700px;
@media screen and (max-width: 640px) {
    padding: 1rem;
}
`
class Hero extends React.Component {

  componentDidMount() {}

  render() {
    return (
      <Wrapper className="carousel carousel-slider center" data-indicators="true">
        <div className="carousel-fixed-item center"></div>
        <div className="carousel-item cyan darken-3 white-text" href="#two!">
          <Image name="hero1.jpg"/>
        </div>
        <div className="carousel-item cyan darken-3 white-text" href="#two!">
          <Image name="hero2.png"/>
        </div>
        <div className="carousel-item cyan darken-3 white-text" href="#two!">
          <Image name="hero3.png"/>
        </div>
        <div className="carousel-item cyan darken-3 white-text" href="#two!">
          <Image name="hero4.png"/>
        </div>
      </Wrapper>
    )
  }
}

export default Hero;
