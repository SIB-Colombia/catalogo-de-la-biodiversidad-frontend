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

import {palette} from 'styled-theme';
import ArrowDropDown from 'material-ui/svg-icons/navigation/arrow-drop-down';
import Scrollchor from 'react-scrollchor';


const Wrapper = styled.div `


.box{
  margin-bottom: 1rem;
  overflow: auto !important;
  .main-box{

  }
}
  .fx{
    /*position: fixed;*/
  }
  /*.menu-scrollspy{
    .index{
      color: #444;
      font-weight: 600;
      font-size: 25px;
      text-align: center;
      padding: 15px 5px 15px 5px;
      border-bottom: 1px solid #e8e8e8;
    }
    padding: 5px;
    overflow: auto;
      li{
        padding: 8px 5px;
      }
      a{
          font-size: 13px;
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
  }*/
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
    margin: 10px 0;
  }

`

class FileDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      sections: []
    }
    //console.log(this.props.complete.migratoryApprovedInUse);
  }

  componentWillMount() {
    let sections = [];
    //this.scan(this.props.complete.migratoryApprovedInUse,array,'');
    //console.log(this.props.complete['migratoryApprovedInUse']);
    for (var property in this.props.complete) {

      if(property.indexOf('InUse') > -1){
        let array = [];
        this.scan(this.props.complete[property], array, '');
        sections[property] = array;
      }
    }
    this.setState({sections :sections});
  }

  scan(obj, array, stack) {

    for (var property in obj) {
      if (obj.hasOwnProperty(property)) {
        if (typeof obj[property] == "object") {

          let keyName =  stack + '.' + property;
          if(keyName.split('.').length == 2){
              // console.log(`${keyName}->`);
              array.push(<FileDetailTitle key={Math.random()} text={keyName.replace('.','')}/>);
          }

          this.scan(obj[property], array, keyName);
        } else {
          if(obj[property] && !property.match(/^_id$|^__t$|^id_record$|^id_user$|^version$/)){
            //console.log('>',stack);
            if(Number.isInteger(parseInt(property))){
              let nameParent = stack.split('.')[1];
              let transform = stack.replace(/\d/g,' ').replace(/\./g,' ');
              // let transform = stack.replace(/\d/g,'/').replace(/\./g,' ').replace(nameParent,'');
              array.push(<div className="paragraph" key={Math.random()} ><b>{transform}:</b> {obj[property]}</div>);
              // console.log(`<b>${transform}:</b> ${obj[property]}`);
            }else{
              array.push(<div className="paragraph" key={Math.random()} ><b>{property}:</b> {obj[property]}</div>);
              // let temp = this.state.detail;
            }
          }
        }
      }
    }
  }

  render() {
    //console.log('r',this.state.sections);
    return (
      <Wrapper>
        <Row>
          {/* <Col lg={3} xs={12}>
            <Paper className="menu-scrollspy">
              <div className="index">Índice de ficha</div>
              <ul>
                {Object.keys(this.state.sections).map((section,i) => (
                  <li><Scrollchor to={`#${section}`} animate={{offset: -80, duration: 600}}  className="nav-link">{section}</Scrollchor></li>
                ))}
              </ul>
            </Paper>
            <br/>
          </Col> */}

          <Col lg={12} xs={12}>

            {Object.keys(this.state.sections).map((section,i) => (<Row key={Math.random()} >
              <Col xs={12} sm={12} md={12} lg={12} className="main-box">
                <FileDetailTitleBlock text={section} id={section} />
                <Paper zDepth={1} className="paper-padding-3 t100 align-justify color-text box">
                  {this.state.sections[section]}
                  <div className="viewMore">
                    <button>VER MÁS
                      <ArrowDropDown/>
                    </button>
                  </div>
                </Paper>
              </Col>
            </Row>
          ))}

          </Col>
        </Row>

      </Wrapper>
    )
  }
}

export default FileDetail;
