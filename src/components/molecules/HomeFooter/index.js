import React from 'react';
import styled from 'styled-components';
import {Link, HomeButton} from 'components';
import {Grid, Row, Col} from 'react-flexbox-grid'

const Wrapper = styled.div `
background: #00292B;
padding: 30px 0;
.t1{
  img{
    vertical-align: middle;
    max-width: 300px;
  }
}
.t2{
  color:white;
  line-height: 3.3;
  a{
    color:white;
    margin: 10px;
  }
}

`
class HomeFooter extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <Wrapper>
        <Grid>
          <Row>
            <Col xs={12} sm={6} md={6} lg={6}>
              <div className="align-left t1">
                <img src="/SiB-Footer-02.svg"/>
              </div>
            </Col>
            <Col xs={12} sm={6} md={6} lg={6}>
              <div className="align-right t2">
                <Link to='/static/about'>Sobre el Catálogo</Link>
                |
                <Link to='/static/about'>Términos de uso</Link>
              </div>
            </Col>
          </Row>
        </Grid>
      </Wrapper>
    )
  }
}

export default HomeFooter;
