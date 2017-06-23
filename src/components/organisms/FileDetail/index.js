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
import ArrowDropUp from 'material-ui/svg-icons/navigation/arrow-drop-up';
import Scrollchor from 'react-scrollchor';


const Wrapper = styled.div `

.box{
  margin-bottom: 1rem;
  .box-content{
    height: 180px;
    overflow: hidden;
    &.more{
      height: auto;
      overflow: auto;
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
    margin: 10px 0;
  }

`

class FileDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      sections: [],
      expanded: []
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

  viewMore(e, idx) {
    let obj = this.state.expanded;
    obj[idx] = !obj[idx];
    this.setState({expanded: obj});
  };

  initalShow(obj){
    return obj.slice(0, 4);
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
                  <div className={`box-content animated ${(this.state.expanded[i] ? 'more' : '')}`}>
                    {this.state.expanded[i] ? this.state.sections[section] : this.initalShow(this.state.sections[section])}
                  </div>
                  <div className="viewMore">
                    <button onTouchTap={(e) => this.viewMore(e, i)} >
                      {this.state.expanded[i] ? 'VER MENOS': 'VER MÁS'  }
                      {this.state.expanded[i] ? <ArrowDropUp/>  : <ArrowDropDown/>}
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
