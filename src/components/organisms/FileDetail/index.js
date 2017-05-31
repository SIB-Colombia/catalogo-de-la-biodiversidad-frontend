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
import {IconLink, Link, FileHeader, TitleSection, Merge} from 'components'

const Wrapper = styled.div `
`

class FileDetail extends React.Component {

  constructor(props) {
    super(props);
  }

  getFeeding() {
    try {
      return this.props.complete.feedingApprovedInUse.feeding.feedingUnstructured;
    } catch (err) {
      return 'Sin información';
    }
  }

  render() {
    return (
      <Wrapper>
        <Row>
          <Col lg={3}>
            <Paper>
              efwef
            </Paper>
          </Col>
          <Col lg={9}>
            <Row>
              <Merge title='Historia Natural' />
              <Col xs={12} lg={12}>
                <Paper zDepth={1} className="paper-padding-3 t100 align-justify">
                  <TitleSection lighter={600} className="padding-bottom-3">Alimentación</TitleSection>
                  {this.getFeeding()}
                </Paper>
              </Col>
              <Merge title='Historia Natural' separator={true} />
              <Col xs={12} lg={12}>
                <Paper zDepth={1} className="paper-padding-3 t100 align-justify">
                  <TitleSection lighter={600} className="padding-bottom-3">Comportamiento</TitleSection>
                  {this.getFeeding()}
                </Paper>
              </Col>
              <Merge title='Historia Natural' separator={true} />
              <Col xs={12} lg={12}>
                <Paper zDepth={1} className="paper-padding-3 t100 align-justify">
                  <TitleSection lighter={600} className="padding-bottom-3">Comportamiento</TitleSection>
                  {this.getFeeding()}
                </Paper>
              </Col>
              <Merge title='Historia Natural' bottom={true} />
            </Row>
            <br/>
            <br/>
            <Row>
              <Merge title='Dinámica población y Amenazas' />
              <Col xs={12} lg={12}>
                <Paper zDepth={1} className="paper-padding-3 t100 align-justify">
                  <TitleSection lighter={600} className="padding-bottom-3">Territorio</TitleSection>
                  {this.getFeeding()}
                </Paper>
              </Col>
              <Merge title='Dinámica población y Amenazas' separator={true} />
              <Col xs={12} lg={12}>
                <Paper zDepth={1} className="paper-padding-3 t100 align-justify">
                  <TitleSection lighter={600} className="padding-bottom-3">Observaciones</TitleSection>
                  {this.getFeeding()}
                </Paper>
              </Col>
              <Merge title='Dinámica población y Amenazas' bottom={true} />
            </Row>
            <br/>
          </Col>
        </Row>
      </Wrapper>
    )
  }
}

export default FileDetail;
