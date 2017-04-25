import React from 'react'
import styled from 'styled-components'
import {Grid, Row, Col} from 'react-flexbox-grid'
// import {Block, Footer} from 'components'
// import { Footer } from 'react-materialize';

import {Link} from 'components';

const Wrapper = styled.footer `

position: absolute;
right: 0;
bottom: 0;
left: 0;
padding: 15px 0px;
background-color: #212121;
text-align: center;

a{
	margin:0px 5px;
	color:#f5f5f5;
	text-decoration: none;
}
`
const FooterPage = (props) => {
  return (
    <Wrapper>
      <Grid fluid>
        <Row>
          <Col xs={12} sm={6} md={6} lg={6}>
	        <Link to={`static/about`}>
              Sobre el Catálogo
            </Link>
            |
	        <Link to={`static/about`}>
              SIB Colombia
            </Link>
            |
	        <Link to={`static/about`}>
              Términos
            </Link>
          </Col>
          <Col xs={12} sm={6} md={6} lg={6}>
	        <Link to={`static/about`}>
	        	SIB Colombia
            </Link>
            
          </Col>
        </Row>
      </Grid>
    </Wrapper>
  )
}
export default FooterPage
