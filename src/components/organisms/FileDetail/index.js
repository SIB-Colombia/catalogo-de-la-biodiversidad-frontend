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
import {
  IconLink,
  Link,
  FileHeader,
  TitleSection,
  FileDetailTitle,
  FileDetailTitleBlock
} from 'components'
import Scrollspy from 'react-scrollspy';
import {palette} from 'styled-theme';
import ArrowDropDown from 'material-ui/svg-icons/navigation/arrow-drop-down';

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
  .spacing{
    margin-bottom: 20px;
  }
  .paragraph{
    line-height: 1.8;
  }
`

class FileDetail extends React.Component {

  constructor(props) {
    super(props);

    /*for (var key in this.props.complete) {
      if (key.indexOf('InUse') >= -1) {
        var obj = this.props.complete[key];
        if (typeof this.props.complete[key] === 'object') {
          console.log(`key: ${key}`, obj);

          for (var key2 in obj) {
            if (typeof obj[key2] === 'object') {

            }
          }
        }
      }
    }*/
    console.log(this.props.complete.migratoryApprovedInUse);
    this.scan(this.props.complete.migratoryApprovedInUse,'');
    //console.log('b->',b);

  }


  scan(obj, stack) {
    for (var property in obj) {
      if (obj.hasOwnProperty(property)) {
        if (typeof obj[property] == "object") {
          this.scan(obj[property], stack + '.' + property);
        } else {
          if(obj[property] && property != "_id"){
            console.log(`${property}: ${obj[property]}`);
          }
        }
      }
    }
  }

  format(obj) {

    let i = 0;
    let elements = [];
    console.log(obj);

    for (var key in obj) {

      console.log(typeof obj[key]);

      switch (typeof obj[key]) {
        case 'string':
          elements[i] = (
            <div key={i} className="paragraph">
              <b>{key}:
              </b>
              {obj[key]}</div>
          );
          break;
        case 'object':

          for (var key2 in obj[key]) {
            for (var key3 in obj[key][key2]) {
              console.log(key3);
              //elements[i] = (<div key={i} className="paragraph"><b>{key3}: </b> {obj[key][key2]}</div>);
            }
          }

          break;
        case 'array':
          console.log('array');
          break;
        default:

      }

      i++;
    }

    return elements;

    //return (<div className="paragraph"> </div>);
    //console.log('123',obj);
  }

  getFeeding() {
    try {
      return this.props.complete.feedingApprovedInUse.feeding.feedingUnstructured;
    } catch (err) {
      return false;
    }
  }

  migratoryApprovedInUse() {
    try {
      return this.props.complete.migratoryApprovedInUse;
    } catch (err) {
      return false;
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
                  <a href="#section-1">migratoryApprovedInUse</a>
                </li>
              </Scrollspy>
            </Paper>
            <br/>
          </Col>

          <Col lg={9} xs={12}>
            <Row>
              <Col xs={12} lg={12}>
                <FileDetailTitleBlock text='migratoryApprovedInUse' id="section-1"/>
                <Paper zDepth={1} className="paper-padding-3 t100 align-justify color-text">
                  <FileDetailTitle text={'migratory'}/> {/* {this.format(this.props.complete.migratoryApprovedInUse.migratory)} */}

                  <div className="viewMore">
                    <button>VER MÁS
                      <ArrowDropDown/>
                    </button>
                  </div>
                </Paper>
              </Col>
            </Row>

          </Col>
        </Row>

      </Wrapper>
    )
  }
}

export default FileDetail;
