import React from 'react';
import styled from 'styled-components';
import {Link, HomeButton} from 'components';
import {Grid, Row, Col} from 'react-flexbox-grid'

const Wrapper = styled.div `
background-image: -webkit-radial-gradient(#0098A6, #008E9B);
background-image: radial-gradient(#0098A6, #008E9B);
padding: 70px 0px 70px 0px;
.t1{
  color: white;
  font-size: 40px;
  font-weight: 600;
  padding: 20px;
}
.t2{
  padding: 20px;

}
.hj-button{
  color: white;
  font-size: 22px;
  font-weight: 500;
  border: 2px solid white;
  padding: 15px 30px;
  transition: .5s ease;
  &:hover{
    cursor: pointer;
    background: rgba(255,255,255,0.2);
  }
}
`
class HomeJoin extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <Wrapper>
        <Grid className="container">
          <Row>
            <Col xs={12} sm={12} md={6} lg={6} className="align-center t1">
              ¿Qué esperas?
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} className="align-center t2">
              <Link to='/login/signup'><div className="hj-button">ÚNETE AL CATÁLOGO</div></Link>
            </Col>
          </Row>
        </Grid>
      </Wrapper>
    )
  }
}

export default HomeJoin;
