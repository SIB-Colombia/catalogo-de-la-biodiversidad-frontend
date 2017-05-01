import React, {PropTypes} from 'react';
import styled from 'styled-components';
import {font, palette} from 'styled-theme';
import {IconLink, Link, Gallery, HumboldtMap} from 'components';
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
import theme from '../../themes/default';

const Wrapper = styled.div `
padding-top: 200px;

.btnFilters{
  position: fixed;
  right: 15px;
  bottom: 15px;
  z-index: 10;
}

.box-history{
  float: right;
}

.map{
  padding: 20px;
  img{
    width: 100%;
  }
}

.main-title{
  color: ${theme.palette.grayscale[6]};
  font-style: italic;
  float:left;
}
.main-subtitle{
  color: ${theme.palette.grayscale[5]};
  line-height: 4;
  margin-left: 30px;
}
.box-content{
  padding: 20px;
  overflow:hidden;
}
.colorTab{
	/*margin-top:20px;*/
}
.colorTab > div:first-child{
	background-color: ${theme.palette.grayscale[1]} !important;
}
.colorTab > div:nth-child(2) div{
	background-color: ${theme.palette.secondary[0]} !important;
}
.colorTab > div > button{
  color: ${theme.palette.grayscale[6]} !important;
  font-weight: 700 !important;
  &:not(:last-child){
    border-right: 2px solid ${theme.palette.grayscale[1]} !important;
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
        <div className="btnFilters animated fadeInRight">

          <IconMenu iconButtonElement={< FloatingActionButton className = "btn-primary-floating" > <ContentAdd/> < /FloatingActionButton>} anchorOrigin={{
            horizontal: 'right',
            vertical: 'bottom'
          }} targetOrigin={{
            horizontal: 'right',
            vertical: 'bottom'
          }}>
            <MenuItem primaryText="Nomenclatura y Clasificación"/>
            <MenuItem primaryText="Descripción taxonómica"/>
            <MenuItem primaryText="Historia Natural I"/>
            <MenuItem primaryText="Historia Natural II"/>
            <MenuItem primaryText="Invasividad"/>
            <MenuItem primaryText="Hábitat y Distribución"/>
            <MenuItem primaryText="Dinámica poblacional y Amenazas"/>
            <MenuItem primaryText="Usos, Manejo y Conservación"/>
            <MenuItem primaryText="Partes asociadas"/>
            <MenuItem primaryText="Referencias"/>
            <MenuItem primaryText="Información Adicional"/>
          </IconMenu>

          {/* <FloatingActionButton className="btn-primary-floating">
            <ContentAdd/>
          </FloatingActionButton> */}
        </div>
        <Row>
          <Col xs={12} lg={12}>
            <Paper zDepth={1} className="box-content">
              <div className="box-history align-right">
                <Badge badgeContent={'EX'} className="badge cr"/>
                <Badge badgeContent={'CR'} className="badge ex"/>
                <Badge badgeContent={'EN'} className="badge en"/>
              </div>
              <h3 className="title-lg align-left main-title bold">Coragyps Atratus</h3>
              <span className="main-subtitle">Bechstein, 1793</span>
            </Paper>
            <Row>
              <Col xs={12} lg={12}>

                <Tabs initialSelectedIndex={0} className="colorTab">
                  <Tab label="Resumen">
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
                  </Tab>
                  <Tab label="Detalles" data-route={`/file/detail/${this.props.id}`} onActive={this.changeTab}></Tab>
                  <Tab label="Imágenes" data-route={`/file/images/${this.props.id}`} onActive={this.changeTab}></Tab>
                  <Tab label="Mapas" data-route={`/file/maps/${this.props.id}`} onActive={this.changeTab}></Tab>
                  <Tab label="Comunidad" data-route={`/file/community/${this.props.id}`} onActive={this.changeTab}></Tab>
                  <Tab label="Comentarios" data-route={`/file/comments/${this.props.id}`} onActive={this.changeTab}></Tab>
                </Tabs>
              </Col>
            </Row>
          </Col>
        </Row>
      </Wrapper>
    )
  }
}

export default FileSummary;
