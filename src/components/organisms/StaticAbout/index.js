import React, {PropTypes} from 'react'
import styled from 'styled-components'
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {Grid, Row, Col} from 'react-flexbox-grid';
import {IconLink, Link} from 'components';

const Wrapper = styled.div `
padding-top: 150px;
padding-bottom: 40px;
text-align: center;
.img-size{
  width: 60%;
  padding: 15px;
}
h3{
  text-align: center;
  margin: 0;
  color:#444;
  font-weight: bold;
}
.static-content{
  padding: 20px;
  height: 100%;
  .about-main-title{
    font-size: 30px;
    margin: 40px 0;
  }
  .about-main-subtitle{
    font-size: 22px;
    margin: 40px 0;
  }
  .about-section-title{
  }
}
`

class StaticAbout extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrapper>
        <Grid className="container">
          <Row>
            <Col xs={12}>
              <Paper zDepth={1} className="static-content animated fadeIn">
                <h3 className="about-main-title">Quiénes somos</h3>
                <Row>
                  <Col xs={12} lg={6} lgOffset={3} className="align-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porta sollicitudin justo, a rhoncus urna cursus vel. Ut eleifend libero id velit faucibus vulputate. Integer id velit a lacus semper lobortis ut a libero. Ut feugiat nisl in pulvinar sollicitudin. Mauris faucibus erat quis velit sodales hendrerit. Curabitur bibendum nibh in massa aliquam, quis tristique nisl pulvinar. Quisque ac tincidunt nunc, placerat dictum orci. Nam erat nunc, faucibus vel faucibus in, elementum in arcu. Sed rutrum tristique ipsum sed blandit. Curabitur non libero a turpis tincidunt dictum.
                  </Col>
                </Row>
                <h3 className="about-main-subtitle">¿Qué tipo de información se puede aportar?</h3>
                <Row>
                  {Array(8).fill(1).map((el, i) => <Col key={i} xs={12} sm={6} md={4} lg={3}>
                    <img src="/file.jpg" className="img-size"/>
                    <h3 className="about-section-title">
                      Taxonomía
                    </h3>
                    <p className="align-justify">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porta sollicitudin justo, a rhoncus urna cursus vel. Ut eleifend libero id velit faucibus vulputate. Integer id velit a lacus semper lobortis ut a libero
                    </p>
                  </Col>)}
                </Row>
              </Paper>
            </Col>
          </Row>
        </Grid>
      </Wrapper>
    )
  }
}

export default StaticAbout;
