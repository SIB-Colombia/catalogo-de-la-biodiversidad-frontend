import React from 'react'
import styled from 'styled-components'
import {palette} from 'styled-theme'

import {Block, Footer} from 'components'
// import { Footer } from 'react-materialize';

const Wrapper = styled(Footer)`

a{
	margin:0px 5px;
}
`
const FooterPage = (props) => {
  return (
    <Wrapper className="page-footer grey darken-4">
      <div className="footer-copyright">
        <div className="container">
          <a className="grey-text text-lighten-4 left" href="">
            Sobre el Catálogo |</a>
          <a className="grey-text text-lighten-4 left" href="">
            SIB Colombia |</a>
          <a className="grey-text text-lighten-4 left" href="">
            Términos
          </a>
          <a className="grey-text text-lighten-4 right" href="">SIB Colombia</a>
        </div>
      </div>
    </Wrapper>
  )
}
export default FooterPage
