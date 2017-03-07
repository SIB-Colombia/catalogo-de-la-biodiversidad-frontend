import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { palette } from 'styled-theme'

import { Block, Paragraph, IconLink, IconButton, LogoImage, Tooltip, Imageu } from 'components'

const Wrapper = styled(Block)`
height: calc(100vh - 3.75rem) !important;
max-height: 700px;
@media screen and (max-width: 640px) {
    padding: 1rem;
}
`

class Hero extends React.Component {

    static propTypes = {}

    componentDidMount() {


        
    }

    render() {
        return (
            <Wrapper className="carousel carousel-slider center" data-indicators="true">
            <div className="carousel-fixed-item center">

            </div>
            <div className="carousel-item cyan darken-3 white-text" href="#one!">
            </div>
            <div className="carousel-item amber white-text" href="#two!">
            <img src="https://i.ytimg.com/vi/nLFn8xNJvHY/maxresdefault.jpg"/>
            </div>
            <div className="carousel-item green white-text" href="#three!">
            </div>
            <div className="carousel-item blue white-text" href="#four!">
            </div>
            </Wrapper>
            )
    }
}

export default Hero;