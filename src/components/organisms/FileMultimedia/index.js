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

import {size, palette} from 'styled-theme';
import ArrowDropDown from 'material-ui/svg-icons/navigation/arrow-drop-down';
import ArrowDropUp from 'material-ui/svg-icons/navigation/arrow-drop-up';
import Scrollchor from 'react-scrollchor';
import Masonry from 'react-masonry-component';
import ReactAudioPlayer from 'react-audio-player';
import MenuItem from 'material-ui/MenuItem';

const Wrapper = styled.div `

.box{
  margin-bottom: 1rem;
  .box-content{
    height: 180px;
    overflow: hidden;
    &.more{
      height: auto;
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

  .spacing{
    margin-bottom: 20px;
  }
  .col-grid{
    img{
      width: 100%;
    }
    margin: 10px;
    width: calc(20% - 20px);
    @media ${size('xs')}{
      width: 100%;
    }
    @media ${size('sm')}{
        width: calc(33% - 20px);
    }
    @media ${size('md')}{
        width: calc(25% - 20px);
    }
    @media ${size('lg')}{
        width: calc(20% - 20px);
    }

  }

  .player{
    margin-bottom: 10px;
    audio{
      width: 100% !important;
    }
    .title-player{
      padding: 2px;
      color: #316971;
      font-weight: 600;
    }
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

class FileMultimedia extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sections: []
    }
  }

  componentWillMount() {

  }

  render() {
    return (
      <Wrapper>
        <Row>
          <Col xs={12} sm={12} md={3} lg={3}>
            <Paper zDepth={1} className="box-menu">
              <div className="paper-padding-3 title-menu">Multimedia</div>
              {Object.keys(this.props.complete).map((section,i) => (
                <Scrollchor key={i} to={`#${section}`} animate={{offset: -80, duration: 600}}  className="nav-link"><MenuItem>{section}</MenuItem></Scrollchor>
              ))}
            </Paper>
          </Col>
          <Col xs={12} sm={12} md={9} lg={9}>
          {Object.keys(this.props.complete).map((section,i) => (<div key={Math.random()} >
                <FileDetailTitleBlock text={section} id={section} />
                <Paper zDepth={1} className="paper-padding-3 t100 align-justify color-text box">
                  <div className={`box-content more`}>
                    {section == 'Imágenes' && <Masonry>
                      {this.props.complete[section].map((child,i) => (
                        <div key={i}  className="col-grid">
                          <img src={child} />
                        </div>
                      ))}
                    </Masonry>}
                    {section == 'Sonidos' && <Row>
                      {this.props.complete[section].map((child,i) => (
                        <Col key={i} xs={12} sm={12} md={6} lg={6} className="player">
                          <div className="title-player">Título</div>
                          <ReactAudioPlayer
                            src={child}
                            controls
                          />
                        </Col>
                      ))}
                    </Row>}
                    {section == 'Otros' && <Row>
                      {this.props.complete[section].map((child,i) => (
                        <Col key={i} xs={12} sm={12} md={6} lg={6} className="align-center">
                          <a href={child} target="_blank" >{child}</a>
                        </Col>
                      ))}
                    </Row>}
                  </div>
                </Paper>
            </div>
          ))}
          </Col>
        </Row>
      </Wrapper>
    )
  }
}

export default FileMultimedia;
