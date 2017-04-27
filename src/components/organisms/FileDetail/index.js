import React, {PropTypes} from 'react'
import styled from 'styled-components'
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import {Grid, Row, Col} from 'react-flexbox-grid';
import {IconLink, Link} from 'components'

const Wrapper = styled.div `
padding-top: 150px;

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
.detail-content{
  padding: 20px;
}
`

class FileDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: null
    }
  }

  componentWillMount() {
    this.setState({id: this.props.params.id})
  }

  changeTab(tab) {
    console.log(tab.props['data-route']);
  }

  render() {
    return (
      <Wrapper>
        <Grid>
          <Row>
            <Col xs={12}>
              <Paper zDepth={1} className="detail-content">
                <h3 className="about-main-title">Coragyps Atratus</h3>
                <Row>
                  <Col lg={12}>
                    <Tabs initialSelectedIndex={1}>
                      <Tab label="Resumen" data-route={`/file/summary/${this.state.id}`} onActive={this.changeTab}></Tab>
                      <Tab label="Detalles">
                        <div>
                          <h2>Tab Two</h2>
                          <p>
                            This is another example tab.
                          </p>
                        </div>
                      </Tab>
                      <Tab label="Imágenes" data-route={`/file/images/${this.state.id}`} onActive={this.changeTab}></Tab>
                      <Tab label="Mapas" data-route={`/file/maps/${this.state.id}`} onActive={this.changeTab}></Tab>
                      <Tab label="Comunidad" data-route={`/file/community/${this.state.id}`} onActive={this.changeTab}></Tab>
                      <Tab label="Comentarios" data-route={`/file/comments/${this.state.id}`} onActive={this.changeTab}></Tab>
                    </Tabs>
                  </Col>
                </Row>
              </Paper>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col lg={8}>
              <Paper zDepth={1} className="detail-content">
                e
              </Paper>
            </Col>
          </Row>
        </Grid>
      </Wrapper>
    )
  }
}

export default FileDetail;
