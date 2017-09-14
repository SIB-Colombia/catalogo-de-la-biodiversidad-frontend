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
import ArrowDropDown from 'material-ui/svg-icons/navigation/arrow-drop-down';
import ArrowDropUp from 'material-ui/svg-icons/navigation/arrow-drop-up';

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
.box{
  margin-bottom: 1rem;
}
.viewMore{
    text-align: right;
    margin-top: 10px;
    button{
      text-decoration: none;
      transition: .5s ease;
      padding: 5px 25px;
      border:none;
      font-weight: bold;
      color: ${palette('grayscale', 5)};
      background: ${palette('grayscale', 1)};
      cursor: pointer;
      &:hover{
        opacity: 0.8;
      }
      svg{
        vertical-align: middle;
      }
    }
}
`

class FileSummary extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: []
    }

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


  viewMore(e, idx) {
      let obj = this.state.expanded;
      obj[idx] = !obj[idx];
      this.setState({expanded: obj});
  };


  changeTab(tab) {

    console.log(tab.props['data-route']);
  }

  render() {

    const background = /*['i3.jpg', 'i2.jpg', 'i1.jpg', 'i4.jpg', 'i5.jpg'];*/
['https://s3.amazonaws.com/sib-resources/images/catalogo/destacadas/jpg/36192444754_eff43f93ed_k.jpg',
'https://s3.amazonaws.com/sib-resources/images/catalogo/destacadas/jpg/36219992913_caa44eccca_k.jpg',
'https://s3.amazonaws.com/sib-resources/images/catalogo/destacadas/jpg/36220009163_78e344dabc_k2.jpg',
'https://s3.amazonaws.com/sib-resources/images/catalogo/destacadas/jpg/36630866500_31537e7c27_h.jpg']  ;




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
        <Row>
          <Col xs={12} lg={8}>
            <Row>
              <Col xs={12} lg={12}>
                <Paper zDepth={1} className="paper-padding-3 box">
                  <TitleSection lighter={600} className="padding-bottom-3">Imágenes</TitleSection>
                  <CarouselPreview showArrows={true} dynamicHeight={true} showStatus={false} emulateTouch={true}>
                    {background.map((record, i) => (
                      <div key={i}>
                        <img className="" src={record}/>
                        <p className="legend">Autor: Autor Número {i}</p>
                      </div>
                    ))}
                  </CarouselPreview>
                </Paper>
              </Col>
            </Row>

            <Row>
              <Col xs={12} lg={12}>
                <Paper zDepth={1} className="paper-padding-3 t100 align-justify title-xxs color-text box">
                  {this.getAbstract()}
                  <div className="viewMore">
                    <button onTouchTap={(e) => this.viewMore(e, 'abstract')} >
                      {this.state.expanded['abstract'] ? 'VER MENOS': 'VER MÁS'  }
                      {this.state.expanded['abstract'] ? <ArrowDropUp/>  : <ArrowDropDown/>}
                    </button>
                  </div>
                </Paper>
              </Col>
            </Row>


            <Row>
              <Col xs={12} lg={12}>
                <Paper zDepth={1} className="paper-padding-3 box">
                  <TitleSection lighter={600} className="padding-bottom-3">Observaciones</TitleSection>
                  <div className="align-center">
                    <Paper zDepth={2}>
                      <HumboldtMap/>
                    </Paper>
                  </div>

                </Paper>
              </Col>
            </Row>

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
          </Col>

          <Col xs={12} lg={4}>

            <Row>
              <Col xs={12} lg={12}>
                <Paper zDepth={1} className="paper-padding-2 cc box">
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


            <Row>
              <Col xs={12} lg={12}>
                <Paper zDepth={1} className="paper-padding-3 box">
                  <TitleSection lighter={600} className="padding-bottom-2">Nombres comunes</TitleSection>

                  {this.getCommonNames().map((record, i) => (
                    <li className="color-basescale-3 title-xxs align-left" key={i} data-tip={record.language}>
                      {record.name}
                    </li>
                  ))}

                </Paper>
              </Col>
            </Row>


            <Row>
              <Col xs={12} lg={12}>
                <Paper zDepth={1} className="paper-padding-3 box">
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


            <Row>
              <Col xs={12} lg={12}>
                <Paper zDepth={1} className="paper-padding-3 box">
                  <TitleSection lighter={600} className="padding-bottom-2">Editores</TitleSection>
                  <List>
                    <ListItem primaryText="Chelsea Otakan" leftAvatar={< Avatar src = "../../human.png" />}/>
                    <ListItem primaryText="James Anderson" leftAvatar={< Avatar src = "../../human.png" />}/>
                  </List>
                  {/* <RaisedButton label="Añadir sección de ficha" primary={true} fullWidth={true}/> */}
                </Paper>
              </Col>
            </Row>


            <Row>
              <Col xs={12} lg={12}>
                <Paper zDepth={1} className="paper-padding-3 box">
                  <TitleSection lighter={600} className="padding-bottom-2">Actividad reciente</TitleSection>
                  <List>
                    <ListItem leftAvatar={< Avatar src = "../../human.png" />} primaryText="Brunch this weekend?" secondaryText={< p > <span className="color-it">Brendan Lim</span> - ll be in your neighborhood doing errands this weekend.Do you want to grab brunch
                      ? </p>} secondaryTextLines={2}/>
                    <Divider inset={true}/>
                    <ListItem leftAvatar={< Avatar src = "../../human.png" />} primaryText={< p > Summer BBQ < span className = "color-it-light" > 4 < /span></p >} secondaryText={< p > <span className="color-it">to me, Scott, Jennifer</span>--Wish I could come,
                    but I & apos;
                    m out of town this weekend. < /p>} secondaryTextLines={2}/>
                  </List>
                </Paper>
              </Col>
            </Row>


            <Row>
              <Col xs={12} lg={12}>
                <Paper zDepth={1} className="paper-padding-3 box">
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
        <ReactTooltip />
      </Wrapper>
    )
  }
}

export default FileSummary;
