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
import Copyright from 'material-ui/svg-icons/action/copyright';
import Info from 'material-ui/svg-icons/action/info';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';
import IconButton from 'material-ui/IconButton';

import Carousel from 'react-slick';

const CarouselPreview = require('react-responsive-carousel').Carousel;
import ReactTooltip from 'react-tooltip'

const Wrapper = styled.div `
.cc{
  svg{
    line-height: 0;
    vertical-align: middle;
    margin-right: 3px;
    margin-top: -3px;
  }
  .i-social{
    svg{
      color: #316971 !important;
    }
  }
}
.cursive{
  font-style: italic;
}
`

class FileSummary extends React.Component {

  constructor(props) {
    super(props);
  }

  getCommonNames() {
    try {
      return this.props.complete.commonNamesAtomizedApprovedInUse.commonNamesAtomized;
    } catch (err) {
      return [];
    }
  }

  getTaxo() {
    try {
      return this.props.complete.hierarchyApprovedInUse.hierarchy[0];
    } catch (err) {
      return 'Sin información';
    }
  }

  getAbstract() {
    try {
      return this.props.complete.abstractApprovedInUse.abstract;
    } catch (err) {
      return 'Sin información';
    }
  }

  getHabitat() {
    try {
      return this.props.complete.habitatsApprovedInUse.habitats.habitatUnstructured;
    } catch (err) {
      return 'Sin información';
    }
  }

  // componentDidMount() {
  //   var event = document.createEvent('HTMLEvents');
  //   event.initEvent('resize', true, false);
  //   setTimeout(function() {
  //     window.dispatchEvent(event);
  //   }, 500);
  // }

  changeTab(tab) {

    console.log(tab.props['data-route']);
  }

  render() {

    const background = ['i3.jpg', 'i2.jpg', 'i1.jpg', 'i4.jpg', 'i5.jpg'];

    return (
      <Wrapper>

        {/* <Row>
          <Col xs={12} lg={12}>
            <br/>
            <Paper zDepth={1} className="paper-padding-1">
              <TitleSection className="padding-bottom-1" bold={true}>Imágenes</TitleSection>
              <div>
                <Gallery images={this.props.images}/>
              </div>
            </Paper>
          </Col>
        </Row> */}
        <br/>
        <Row>
          <Col xs={12} lg={8}>
            <Row>
              <Col xs={12} lg={12}>
                <Paper zDepth={1} className="paper-padding-3">
                  <TitleSection lighter={600} className="padding-bottom-3">Imágenes</TitleSection>
                  <CarouselPreview showArrows={true} dynamicHeight={true}>
                    {background.map((record, i) => (
                      <div key={i}>
                        <img className="" src={'/demo/' + record}/>
                        <p className="legend">Autor: Ejemplo {i}</p>
                      </div>
                    ))}
                  </CarouselPreview>
                </Paper>
              </Col>
            </Row>
            <br/>
            <Row>
              <Col xs={12} lg={12}>
                <Paper zDepth={1} className="paper-padding-3 t100 align-justify title-xxs color-text">
                  {this.getAbstract()}...
                </Paper>
                <div className="align-center">
                  <FlatButton fullWidth={true} label="Ver más" primary={true}/>
                </div>
              </Col>
            </Row>
            <br/>

            <Row>
              <Col xs={12} lg={12}>
                <Paper zDepth={1} className="paper-padding-3">
                  <TitleSection lighter={600} className="padding-bottom-3">Observaciones</TitleSection>
                  <div className="align-center">
                    <Paper zDepth={2}>
                      <HumboldtMap/>
                    </Paper>
                  </div>

                </Paper>
              </Col>
            </Row>
            <br/>
            <Row>
              <Col xs={12} lg={12}>
                <Paper zDepth={1} className="paper-padding-3">
                  <TitleSection lighter={600} className="padding-bottom-3">Distribución (Descripción general de la distribución)</TitleSection>
                  <div className="align-justify t100 color-text">
                    <span className="color-basescale-3 t400">Habitat:</span>
                    {this.getHabitat()}
                  </div>
                </Paper>
              </Col>
            </Row>
            <br/>
          </Col>

          <Col xs={12} lg={4}>

            <Row>
              <Col xs={12} lg={12}>
                <Paper zDepth={1} className="paper-padding-2 cc">
                  <Row>
                    <Col xs={6} sm={6} md={6} lg={6} className="align-left">
                      <Copyright/>
                      <span className="i-cc">CC - BY - 0</span>
                    </Col>
                    <Col xs={6} sm={6} md={6} lg={6} className="align-right">
                      <span className="i-social">
                        <Info />
                      </span>
                      <span className="i-social">
                        <Info />
                      </span>
                    </Col>
                  </Row>
                </Paper>
              </Col>
            </Row>
            <br/>

            <Row>
              <Col xs={12} lg={12}>
                <Paper zDepth={1} className="paper-padding-3">
                  <TitleSection lighter={600} className="padding-bottom-2">Nombres comunes</TitleSection>

                  {this.getCommonNames().map((record, i) => (
                    <li className="color-basescale-3 title-xxs align-left" key={i} data-tip={record.language}>
                      {record.name}
                    </li>
                  ))}

                </Paper>
              </Col>
            </Row>
            <br/>
            <Row>
              <Col xs={12} lg={12}>
                <Paper zDepth={1} className="paper-padding-3">
                  <TitleSection lighter={600} className="padding-bottom-2">Taxonomía</TitleSection>

                  <Table className="tb-color-base-scale-3">
                    <TableBody displayRowCheckbox={false}>
                      <TableRow>
                        <TableRowColumn>
                          <b>Reino</b>
                        </TableRowColumn>
                        <TableRowColumn>{this.getTaxo().kingdom}</TableRowColumn>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn>
                          <b>Phylum</b>
                        </TableRowColumn>
                        <TableRowColumn>{this.getTaxo().phylum}</TableRowColumn>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn>
                          <b>Clase</b>
                        </TableRowColumn>
                        <TableRowColumn>{this.getTaxo().classHierarchy}</TableRowColumn>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn>
                          <b>Orden</b>
                        </TableRowColumn>
                        <TableRowColumn>{this.getTaxo().order}</TableRowColumn>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn>
                          <b>Familia</b>
                        </TableRowColumn>
                        <TableRowColumn>{this.getTaxo().family}</TableRowColumn>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn>
                          <b>Género</b>
                        </TableRowColumn>
                        <TableRowColumn>{this.getTaxo().genus}</TableRowColumn>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn>
                          <b>Especie</b>
                        </TableRowColumn>
                        <TableRowColumn className="cursive">{this.getTaxo().parentTaxon}</TableRowColumn>
                      </TableRow>
                    </TableBody>
                  </Table>

                </Paper>
              </Col>
            </Row>
            <br/>
            <Row>
              <Col xs={12} lg={12}>
                <Paper zDepth={1} className="paper-padding-3">
                  <TitleSection lighter={600} className="padding-bottom-2">Editores</TitleSection>
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
                <Paper zDepth={1} className="paper-padding-3">
                  <TitleSection lighter={600} className="padding-bottom-2">Actividad reciente</TitleSection>
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
                <Paper zDepth={1} className="paper-padding-3">
                  <TitleSection lighter={600} className="padding-bottom-2">Colecciones en línea</TitleSection>
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
          </Col>
        </Row>
        <ReactTooltip/>
      </Wrapper>
    )
  }
}

export default FileSummary;
