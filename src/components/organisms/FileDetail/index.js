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
import Scrollspy from 'react-scrollspy';
import {palette} from 'styled-theme';

const Wrapper = styled.div `
  .fx{
    /*position: fixed;*/
  }
  .menu-scrollspy{
    padding: 5px;
      li{
        padding: 8px 0px;
      }
      a{
          font-size: 14px;
          color: ${palette('grayscale', 6)} !important;
          &:hover{
              color: ${palette('primary', 0)} !important;
          }
      }
     .is-current{
      color: ${palette('primary', 0)} !important;
      a{
        color: ${palette('primary', 0)} !important;
      }
    }
  }
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
          <Col lg={3} xs={12}>
            <Paper className="menu-scrollspy">
              <Scrollspy items={['section-1', 'section-2', 'section-3']} currentClassName="is-current">
                <li>
                  <a href="#section-1">Historia natural</a>
                </li>
                <li>
                  <a href="#section-2">Dinámica población y Amenazas</a>
                </li>
                <li>
                  <a href="#section-3">section 3</a>
                </li>
              </Scrollspy>
            </Paper>
            <br/>
          </Col>

          <Col lg={9} xs={12}>
            <Row>
              <div id="section-1"></div>
              <Merge title='Historia Natural'/>
              <Col xs={12} lg={12}>
                <Paper zDepth={1} className="paper-padding-3 t100 align-justify color-text">
                  <TitleSection lighter={600} className="padding-bottom-3">Alimentación</TitleSection>
                  {this.getFeeding()}
                </Paper>
              </Col>
              <Merge title='Historia Natural' separator={true}/>
              <Col xs={12} lg={12}>
                <Paper zDepth={1} className="paper-padding-3 t100 align-justify color-text">
                  <TitleSection lighter={600} className="padding-bottom-3">Comportamiento</TitleSection>
                  {this.getFeeding()}
                </Paper>
              </Col>
              <Merge title='Historia Natural' separator={true}/>
              <Col xs={12} lg={12}>
                <Paper zDepth={1} className="paper-padding-3 t100 align-justify color-text">
                  <TitleSection lighter={600} className="padding-bottom-3">Comportamiento</TitleSection>
                  {this.getFeeding()}
                </Paper>
              </Col>
              <Merge title='Historia Natural' bottom={true}/>
            </Row>
            <br/>
            <br/>
            <Row>
              <div id="section-2"></div>
              <Merge title='Dinámica población y Amenazas'/>
              <Col xs={12} lg={12}>
                <Paper zDepth={1} className="paper-padding-3 t100 align-justify color-text">
                  <TitleSection lighter={600} className="padding-bottom-3">Territorio</TitleSection>
                  {this.getFeeding()}
                </Paper>
              </Col>
              <Merge title='Dinámica población y Amenazas' separator={true}/>
              <Col xs={12} lg={12}>
                <Paper zDepth={1} className="paper-padding-3 t100 align-justify color-text">
                  <TitleSection lighter={600} className="padding-bottom-3">Observaciones</TitleSection>
                  {this.getFeeding()}
                </Paper>
              </Col>
              <Merge title='Dinámica población y Amenazas' bottom={true}/>
            </Row>
            <br/>
            <section id="section-3">section 3</section>
          </Col>
        </Row>
      </Wrapper>
    )
  }
}

export default FileDetail;
