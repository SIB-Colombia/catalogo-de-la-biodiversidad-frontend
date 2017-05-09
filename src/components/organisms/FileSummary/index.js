import React, {PropTypes} from 'react';
import styled from 'styled-components';
import {
  IconLink,
  Link,
  Gallery,
  HumboldtMap,
  Theme,
  FileHeader
} from 'components';
import {Grid, Row, Col} from 'react-flexbox-grid';
import Carousel from 'react-slick';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import Avatar from 'material-ui/Avatar';
import Subheader from 'material-ui/Subheader';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import ActionInfo from 'material-ui/svg-icons/action/info';
import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Badge from 'material-ui/Badge';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import {blue500, yellow600} from 'material-ui/styles/colors';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import {palette} from 'styled-theme';

const Wrapper = styled.div `
.map{
  img{
    width: 100%;
  }
}
`

class FileSummary extends React.Component {

  constructor(props) {
    super(props);
  }

  changeTab(tab) {

    console.log(tab.props['data-route']);
  }

  render() {

    return (
      <Wrapper>

        <Row className="animated slideInUp">
          <Col xs={12} lg={12}>
            <br/>
            <Paper zDepth={1} className="box-content">
              <h3 className="title-xs align-left color-secondary bold">Imágenes</h3>
              <div>
                <Gallery images={this.props.images}/>
              </div>
            </Paper>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col xs={12} lg={8}>
            <Row className="animated slideInUp">
              <Col xs={12} lg={12}>
                <Paper zDepth={1} className="box-content">
                  <List>
                    <h3 className="title-xs align-left color-secondary bold">Nombres comunes</h3>
                    <Row>
                      <Col xs={12} lg={6}>
                        <ListItem primaryText="Chulo" secondaryText="Hola Mundo Hola Mundo Hola Mundo"/>
                      </Col>
                      <Col xs={12} lg={6}>
                        <ListItem primaryText="Gallinazo" secondaryText="Hola Mundo Hola Mundo Hola Mundo"/>
                      </Col>
                      <Col xs={12} lg={6}>
                        <ListItem primaryText="Gamuro" secondaryText="Hola Mundo Hola Mundo Hola Mundo"/>
                      </Col>
                      <Col xs={12} lg={6}>
                        <ListItem primaryText="Gamuro" secondaryText="Hola Mundo Hola Mundo Hola Mundo"/>
                      </Col>
                    </Row>
                  </List>
                </Paper>
              </Col>
            </Row>
            <br/>
            <Row>
              <Col xs={12} lg={12}>
                <Paper zDepth={1} className="box-content">
                  <h3 className="title-xs align-left color-secondary bold">Distribución</h3>
                  <div className="align-center map">
                    <Paper zDepth={2}>
                      <HumboldtMap/>
                    </Paper>
                    <br/>
                    <br/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel urna at mauris cursus imperdiet ut at turpis. Praesent eget dolor non lorem tincidunt porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel urna at mauris cursus imperdiet ut at turpis. Praesent eget dolor non lorem tincidunt porttitor.
                  </div>
                  <div className="align-center">
                    <FlatButton fullWidth={true} label="Ver más" primary={true}/>
                  </div>
                </Paper>
              </Col>
            </Row>
            <br/>
            <Row>
              <Col xs={12} lg={12}>
                <Paper zDepth={1} className="box-content">
                  <h3 className="title-xs align-left color-secondary bold">Historia natural</h3>
                  <div className="align-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel urna at mauris cursus imperdiet ut at turpis. Praesent eget dolor non lorem tincidunt porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel urna at mauris cursus imperdiet ut at turpis. Praesent eget dolor non lorem tincidunt porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel urna at mauris cursus imperdiet ut at turpis. Praesent eget dolor non lorem tincidunt porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel urna at mauris cursus imperdiet ut at turpis. Praesent eget dolor non lorem tincidunt porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel urna at mauris cursus imperdiet ut at turpis. Praesent eget dolor non lorem tincidunt porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel urna at mauris cursus imperdiet ut at turpis. Praesent eget dolor non lorem tincidunt porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel urna at mauris cursus imperdiet ut at turpis. Praesent eget dolor non lorem tincidunt porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel urna at mauris cursus imperdiet ut at turpis. Praesent eget dolor non lorem tincidunt porttitor.
                    <div className="align-center">
                      <FlatButton fullWidth={true} label="Ver más" primary={true}/>
                    </div>
                  </div>
                </Paper>
              </Col>
            </Row>

          </Col>
          <Col xs={12} lg={4}>
            <Row className="animated slideInUp">
              <Col xs={12} lg={12}>
                <Paper zDepth={1} className="box-content">
                  <List>
                    <h3 className="title-xs align-left color-secondary bold">Editores</h3>
                    <ListItem primaryText="Chelsea Otakan" leftAvatar={< Avatar src = "../../avatar3.png" />}/>
                    <ListItem primaryText="James Anderson" leftAvatar={< Avatar src = "../../avatar4.png" />}/>
                  </List>
                  {/* <RaisedButton label="Añadir sección de ficha" primary={true} fullWidth={true}/> */}
                </Paper>
              </Col>
            </Row>
            <br/>
            <Row>
              <Col xs={12} lg={12}>
                <Paper zDepth={1} className="box-content">
                  <List>
                    <h3 className="title-xs align-left color-secondary bold">Activida reciente</h3>
                    <ListItem leftAvatar={< Avatar src = "../../avatar.png" />} primaryText="Brunch this weekend?" secondaryText={< p > <span style={{
                      color: darkBlack
                    }}>Brendan Lim</span> - ll be in your neighborhood doing errands this weekend.Do you want to grab brunch
                      ? </p>} secondaryTextLines={2}/>
                    <Divider inset={true}/>
                    <ListItem leftAvatar={< Avatar src = "../../avatar3.png" />} primaryText={< p > Summer BBQ < span style = {{color: lightBlack}} > 4 < /span></p >} secondaryText={< p > <span style={{
                      color: darkBlack
                    }}>to me, Scott, Jennifer</span>--Wish I could come,
                    but I & apos;
                    m out of town this weekend. < /p>} secondaryTextLines={2}/>
                  </List>
                </Paper>
              </Col>
            </Row>
            <br/>
            <Row>
              <Col xs={12} lg={12}>
                <Paper zDepth={1} className="box-content">
                  <List>
                    <h3 className="title-xs align-left color-secondary bold">Grupos</h3>
                    <ListItem leftAvatar={< Avatar icon = { < ActionAssignment />
                    }
                    backgroundColor = {
                      blue500
                    } />} primaryText="Aves de Colombia" secondaryText="Jan 20, 2014"/>
                    <ListItem leftAvatar={< Avatar icon = { < EditorInsertChart />
                    }
                    backgroundColor = {
                      yellow600
                    } />} primaryText="Aves de Colombia" secondaryText="Jan 10, 2014"/>
                  </List>
                </Paper>
              </Col>
            </Row>
            <br/>
            <Row>
              <Col xs={12} lg={12}>
                <Paper zDepth={1} className="box-content">
                  <List>
                    <h3 className="title-xs align-left color-secondary bold">Información básica de la ficha</h3>
                    <ListItem primaryText="Fecha de elaboración" secondaryText="Jan 20, 2014"/>
                    <ListItem primaryText="Fecha de elaboración" secondaryText="Jan 20, 2014"/>
                    <ListItem primaryText="Fecha de elaboración" secondaryText="Jan 20, 2014"/>
                  </List>
                </Paper>
              </Col>
            </Row>
          </Col>
        </Row>
      </Wrapper>
    )
  }
}

export default FileSummary;
