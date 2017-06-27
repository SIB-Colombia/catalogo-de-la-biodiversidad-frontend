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
import MenuItem from 'material-ui/MenuItem';

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
  .paragraph{
    line-height: 1.8;
    margin: 10px 0;
  }
  .block-container{
    padding: 15px 20px;
    background: #f7f7f7 !important;

    .block-child{
      padding: 20px;
      margin-top: 10px;
      margin-bottom: 20px;
      /*border: 1px solid #dedede;*/
      /*border-radius: 5px;*/
      /*background: #fbfbfb;*/
      color: #7f969a !important;
      font-size: 14px;
      font-weight: lighter;
      .paragraph{

      }
      .paragraph-list{

      }
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


  .box-menu{
    margin-bottom: 20px;
    overflow: auto;
    .title-menu{
      color: #555;
      font-weight: 600;
      font-size: 20px;
      border-bottom: 1px solid #eaeaea;
    }

    .nav-link{
      span{
        font-weight: 400 !important;

        font-size: 15px !important;
      }
    }
  }

`

class FileDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      sections: [],
      expanded: [],
      expandedreferences: []
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


  references(keyName,obj){

      let array = [];
      //console.log('cantidad', obj);

      obj.forEach((elem,i )=> {

        let block = [];

        for (let child in elem) {

          if (elem.hasOwnProperty(child)) {
            if(typeof elem[child] == 'object' && elem[child] && elem[child].length > 0){

              let list = [];

              elem[child].forEach((elem,j) => {
                if(elem){
                  list[j] = (<li key={Math.random()} >{elem}</li>);
                }
              });

              if(list.length > 0){
                block.push(<div key={Math.random()} className="paragraph-list"><b>{child}:</b><ul>{list}</ul></div>);
              }

            }else{
              if(elem[child] && typeof elem[child] == 'string' && !child.match(/^_id$|^__t$|^id_record$|^id_user$|^version$/)){
                block.push(<div key={Math.random()} className="paragraph" ><b>{child}:</b> {elem[child]}</div>);
              }
            }
          }
        }
        // for (let author in elem.authors) {
        //     authors.push(<li key={Math.random()} >{elem.authors[author]}</li>);
        // }
        array.push(<Paper key={Math.random()} className="block-child">{block}</Paper>);
      });

      //let rara = `sa${Math.floor(Math.random() * 10000) + 1}`

      return (<Paper key={Math.random()}  className="block-container"><b>{keyName}: </b>{array}</Paper>);

      //  obj[rara] = (<Paper key={Math.random()}  className="block-container"><b onTouchTap={(e) => this.viewMoreRef(e, rara,array)} >{keyName}: </b>{this.state.expandedreferences['lol']}</Paper>);
      //let obja = this.state.expandedreferences;
      // obja[rara]['ele'] = array;
      //obja[rara]= 'jajaja';

    //  this.setState({expandedreferences: obja});

    //  return (<Paper key={Math.random()} className="block-container"><b ref={rara} onTouchTap={(e) => this.viewMoreRef(e, this)} >{keyName}: </b>jejeje</Paper>);


  }


  scan(obj, array, stack) {

    for (var property in obj) {
      if (obj.hasOwnProperty(property)) {
        if (typeof obj[property] == "object") {

          let keyName =  stack + '.' + property;

          //console.log(keyName);
          // console.log('stack',stack);
          if(keyName.indexOf('reference') > -1 && obj[property].length > 0){
            //this.references('Referencias',obj[property]);
            array.push(this.references('Referencias',obj[property]));
          }else{
            if(keyName.split('.').length == 2){
                // console.log(`${keyName}->`);
                array.push(<FileDetailTitle key={Math.random()} text={keyName.replace('.','')}/>);
            }
            this.scan(obj[property], array, keyName);
          }
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

  viewMoreRef(e, element) {

    //this.setState({sections :sections});
    // console.log(e);
    // console.log(element);
    //  console.log(e);
    //  console.log(rara);
    //console.log(array);
    //console.log(this.refs[refName])

    // console.log(rara);
    // let obj = this.state.expandedreferences;
    // console.log(obj);
    //console.log('ddd');
    // let obja = this.state.expandedreferences;
    // obja[rara]['ele'] = array;
    // obja[0]= 'jojo';

    // this.setState({expandedreferences: obja});
    // obj[rara] = !obj[rara];
    // obj['lol'] = 'jejejej';
    // obj[rara] = 'jejejeje';
    // console.log(obj);
    // this.setState({expandedreferences: obj});

  };

  initalShow(obj){
    return obj.slice(0, 3);
  }


  render() {
    //console.log('r',this.state.sections);
    return (
      <Wrapper>
        <Row>

          <Col xs={12} sm={12} md={3} lg={3}>
            <Paper zDepth={1} className="box-menu">
              <div className="paper-padding-3 title-menu">Índice de ficha</div>
              {Object.keys(this.state.sections).map((section,i) => (
                <Scrollchor key={i} to={`#${section}`} animate={{offset: -80, duration: 600}}  className="nav-link"><MenuItem>{section}</MenuItem></Scrollchor>
              ))}
            </Paper>
          </Col>



          <Col xs={12} sm={12} md={9} lg={9} >

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
