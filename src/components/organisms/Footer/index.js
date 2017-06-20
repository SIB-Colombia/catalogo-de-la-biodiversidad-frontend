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
color:white;
background-color: #00292B;
.footer-a{
	padding: 28px 0;
	.t1{
	  img{
	    vertical-align: middle;
	    max-width: 300px;
	  }
	}
	.t2{
	  line-height: 3.3;
	  a{
	    margin: 10px;
			font-weight: 500;
	  }
	}
}
.footer-b{
	background-color: #111;
	.footer-license{
		padding: 10px 0px;
		font-weight: lighter;
		font-size: 14px;
	}
}

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
			<Grid className="footer-a">
				<Row>
					<Col xs={12} sm={6} ms={6} lg={6}>
						<div className="align-left t1">
							<img src="/SiB-Footer-02.svg"/>
						</div>
					</Col>
					<Col xs={12} sm={6} ms={6} lg={6}>
						<div className="align-right t2">
							<Link to='/static/about'>Sobre el Catálogo</Link>
							|
							<Link to='/static/about'>Términos de uso</Link>
						</div>
					</Col>
				</Row>
			</Grid>
      <Grid fluid className="footer-b">
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} className="align-center footer-license">
            Creative Commons 4.0 - 2017
          </Col>
        </Row>
      </Grid>
    </Wrapper>
  )
}
export default FooterPage;
