import React, {PropTypes} from 'react'
import styled from 'styled-components'
import Paper from 'material-ui/Paper';
import {Grid, Row, Col} from 'react-flexbox-grid';
import {IconLink, Link} from 'components';

const Wrapper = styled.div `

  position: absolute;
  left: 50%;
  transform: translate(-50%, -20%);
  -webkit-transform: translate(-50%, -20%);
  -moz-transform: translate(-50%, -20%);
  -ms-transform: translate(-50%, -20%);

.hs-Box{
  padding: 10px;
  text-align: center;

  .hs-count{
    font-size: 30px;
    color: #333;
    font-weight: 600;
  }

  .hs-title{
    font-size: 15px;
    color:#444;
    font-weight: lighter;
    margin-left: 10px;
  }
}
`

class HomeStadistics extends React.Component {

  render() {
    return (
      <Wrapper>
        <Grid className="container">
          <Paper className="hs-Box animated fadeInUp">
            <Row>
              <Col xs={12} sm={6} md={2} lg={2} mdOffset={2} lgOffset={2}>
                <span className="hs-count">4600</span>
                <span className="hs-title">ESPECIES</span>
              </Col>
              <Col xs={12} sm={6} md={2} lg={2}>
                <span className="hs-count">2500</span>
                <span className="hs-title">FLORA</span>
              </Col>
              <Col xs={12} sm={6} md={2} lg={2}>
                <span className="hs-count">1800</span>
                <span className="hs-title">FAUNA</span>
              </Col>
              <Col xs={12} sm={6} md={2} lg={2}>
                <span className="hs-count">3</span>
                <span className="hs-title">USUARIOS</span>
              </Col>
            </Row>
          </Paper>
        </Grid>
      </Wrapper>
    )
  }
}

export default HomeStadistics;
