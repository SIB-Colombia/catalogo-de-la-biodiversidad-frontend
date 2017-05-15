import React from 'react';
import styled from 'styled-components';
import {Grid, Row, Col} from 'react-flexbox-grid';
import {Link} from 'components';
import {palette} from 'styled-theme';

const Wrapper = styled.footer `
position: absolute;
right: 0;
bottom: 0;
left: 0;
padding: 15px 0px;
background-color: ${palette('grayscale', 6)};
text-align: center;
color:${palette('option', 0)};
a{
	margin:0px 5px;
	font-size: 13px;
	font-weight: bold;
	color:${palette('option', 0)};
	text-decoration: none;
}
`
const FooterPage = (props) => {
  return (
    <Wrapper>
      <Grid fluid>
        <Row>
          <Col xs={12} sm={6} md={6} lg={6}>
            <Link to={`/static/about`}>
              Sobre el Catálogo
            </Link>
            |
            <Link to={`/static/about`}>
              SIB Colombia
            </Link>
            |
            <Link to={`/static/about`}>
              Términos
            </Link>
          </Col>
          <Col xs={12} sm={6} md={6} lg={6}>
            <Link to={`/static/about`}>
              SIB Colombia
            </Link>
          </Col>
        </Row>
      </Grid>
    </Wrapper>
  )
}
export default FooterPage;
