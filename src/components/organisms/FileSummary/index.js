import React, {PropTypes} from 'react';
import styled from 'styled-components';
import {palette} from 'styled-theme';
import {
  Link,
  Gallery,
  HumboldtMap,
  Theme,
  FileHeader,
  TitleSection
} from 'components';
import {Grid, Row, Col} from 'react-flexbox-grid';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import Avatar from 'material-ui/Avatar';
import Subheader from 'material-ui/Subheader';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart';

const Wrapper = styled.div `
.color-it{

}
.color-it-light{

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

        <Row>
          <Col xs={12} lg={12}>
            <br/>
            <Paper zDepth={1} className="paper-padding-1">
              <TitleSection className="padding-bottom-1">Imágenes</TitleSection>
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
                <Paper zDepth={1} className="paper-padding-1">
                  <TitleSection>Nombres comunes</TitleSection>
                  <List>
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
                <Paper zDepth={1} className="paper-padding-1">
                  <TitleSection className="padding-bottom-1">Distribución</TitleSection>
                  <div className="align-center">
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
                <Paper zDepth={1} className="paper-padding-1">
                  <TitleSection className="padding-bottom-1">Historia natural</TitleSection>
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
            <Row>
              <Col xs={12} lg={12}>
                <Paper zDepth={1} className="paper-padding-1">
                  <TitleSection>Editores</TitleSection>
                  <List>
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
                <Paper zDepth={1} className="paper-padding-1">
                  <TitleSection>Actividad reciente</TitleSection>
                  <List>
                    <ListItem leftAvatar={< Avatar src = "../../avatar.png" />} primaryText="Brunch this weekend?" secondaryText={< p > <span className="color-it">Brendan Lim</span> - ll be in your neighborhood doing errands this weekend.Do you want to grab brunch
                      ? </p>} secondaryTextLines={2}/>
                    <Divider inset={true}/>
                    <ListItem leftAvatar={< Avatar src = "../../avatar3.png" />} primaryText={< p > Summer BBQ < span className = "color-it-light" > 4 < /span></p >} secondaryText={< p > <span className="color-it">to me, Scott, Jennifer</span>--Wish I could come,
                    but I & apos;
                    m out of town this weekend. < /p>} secondaryTextLines={2}/>
                  </List>
                </Paper>
              </Col>
            </Row>
            <br/>
            <Row>
              <Col xs={12} lg={12}>
                <Paper zDepth={1} className="paper-padding-1">
                  <TitleSection>Grupos</TitleSection>
                  <List>
                    <ListItem leftAvatar={< Avatar icon = { < ActionAssignment />
                    }
                    backgroundColor = {
                      '#333'
                    } />} primaryText="Aves de Colombia" secondaryText="Jan 20, 2014"/>
                    <ListItem leftAvatar={< Avatar icon = { < EditorInsertChart />
                    }
                    backgroundColor = {
                      '#333'
                    } />} primaryText="Aves de Colombia" secondaryText="Jan 10, 2014"/>
                  </List>
                </Paper>
              </Col>
            </Row>
            <br/>
            <Row>
              <Col xs={12} lg={12}>
                <Paper zDepth={1} className="paper-padding-1">
                  <TitleSection>Información básica de la ficha</TitleSection>
                  <List>
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
