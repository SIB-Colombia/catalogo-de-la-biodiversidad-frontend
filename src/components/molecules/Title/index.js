import React, { PropTypes } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
display:inline-block;
vertical-align: middle;
`
const Main = styled.div`
font-size:14px;
text-transform: uppercase; 
line-height:1;
`
const Sub = styled.div`
font-size:14px;
text-transform: uppercase; 
line-height:1;
`

const Title = ({...props}) => {
  return (
    <Wrapper className="grey-text text-darken-2">
        <Main>
            <b>Catálogo</b> de
        </Main>
        <Sub>
            la Biodiversidad
        </Sub>
    </Wrapper>
    )
}

Title.propTypes = {
 // nombre: PropTypes.string.isRequired
}

export default Title