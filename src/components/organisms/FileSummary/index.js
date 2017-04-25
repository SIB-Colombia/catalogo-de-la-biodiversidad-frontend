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
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import ActionInfo from 'material-ui/svg-icons/action/info';
import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';


import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import {blue500, yellow600} from 'material-ui/styles/colors';

import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import Carousel from 'react-slick'
import {Gallery} from 'components';

const Wrapper = styled.div `
padding-top: 120px;

.btnFilters{
  position: fixed;
  right: 15px;
  bottom: 15px;
  z-index: 10;
}

.map{
  padding: 20px;
  img{
    width: 100%;

  }
}
h3{
  text-align: center;
  margin: 0;
  color:#444;
  margin-bottom: 30px;
  font-weight: bold;
}
.main-title{
  text-align: left;
  color: white;
  font-size: 43px;
  text-shadow: rgb(99, 99, 99) 1px 1px 0px, rgb(55, 55, 55) 1px 1px 5px, #a2a2a2 4px 2px 40px;

}
.box-content{
  padding: 20px;
}
.colorTab > div:first-child{
    /* background-color: #009688 !important;*/
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
          <FloatingActionButton>
            <ContentAdd/>
          </FloatingActionButton>
        </div>
        <Row>
          <Col xs={12} lg={12}>
            {/* <Paper zDepth={1} className="box-content"> */}
            <h3 className="main-title">Coragyps Atratus</h3>
            {/* </Paper> */}
            <Row>
              <Col xs={12} lg={12}>
                <Tabs initialSelectedIndex={0} className="colorTab">
                  <Tab label="Resumen">
                    <Row>
                      <Col xs={12} lg={12}>
                        <br/>
                        <Paper zDepth={1} className="box-content">
                          <Subheader>Imágenes</Subheader>
                          <div>
                            <Gallery images={this.props.images}/>
                          </div>
                        </Paper>
                      </Col>
                    </Row>
                    <br/>
                    <Row>
                      <Col xs={12} lg={8}>
                        <Row>
                          <Col xs={12} lg={12}>
                            <Paper zDepth={1} className="box-content">
                              <List>
                                <Subheader>Nombres comunes</Subheader>
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
                              <Subheader>Distribución</Subheader>
                              <div className="align-center map">
                                <Paper zDepth={2}>
                                  <img src="../../map.jpg"/>
                                </Paper>
                                <br/>
                                <br/>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel urna at mauris cursus imperdiet ut at turpis. Praesent eget dolor non lorem tincidunt porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel urna at mauris cursus imperdiet ut at turpis. Praesent eget dolor non lorem tincidunt porttitor.
                              </div>
                              <div className="align-right">
                                <FlatButton label="Ver más" primary={true}/>
                              </div>
                            </Paper>
                          </Col>
                        </Row>
                        <br/>
                        <Row>
                          <Col xs={12} lg={12}>
                            <Paper zDepth={1} className="box-content">
                              <Subheader>Historia natural</Subheader>
                              <div className="align-justify">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel urna at mauris cursus imperdiet ut at turpis. Praesent eget dolor non lorem tincidunt porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel urna at mauris cursus imperdiet ut at turpis. Praesent eget dolor non lorem tincidunt porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel urna at mauris cursus imperdiet ut at turpis. Praesent eget dolor non lorem tincidunt porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel urna at mauris cursus imperdiet ut at turpis. Praesent eget dolor non lorem tincidunt porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel urna at mauris cursus imperdiet ut at turpis. Praesent eget dolor non lorem tincidunt porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel urna at mauris cursus imperdiet ut at turpis. Praesent eget dolor non lorem tincidunt porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel urna at mauris cursus imperdiet ut at turpis. Praesent eget dolor non lorem tincidunt porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel urna at mauris cursus imperdiet ut at turpis. Praesent eget dolor non lorem tincidunt porttitor.
                                <div className="align-right">
                                  <FlatButton label="Ver más" primary={true}/>
                                </div>
                              </div>
                            </Paper>
                          </Col>
                        </Row>

                      </Col>
                      <Col xs={12} lg={4}>
                        <Row>
                          <Col xs={12} lg={12}>
                            <Paper zDepth={1} className="box-content">
                              <List>
                                <Subheader>Editores</Subheader>
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
                                <Subheader>Activida reciente</Subheader>
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
                                <Subheader>Grupos</Subheader>
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
                                <Subheader>Información básica de la ficha</Subheader>
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
