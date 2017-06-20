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
      padding: 5px 25px;
      border:none;
      font-weight: bold;
      color: ${palette('grayscale', 5)};
      background: ${palette('grayscale', 1)};
      cursor: pointer;
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
  }

  getFeeding() {
    try {
      return this.props.complete.feedingApprovedInUse.feeding.feedingUnstructured;
    } catch (err) {
      return 'Sin información';
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
                  <a href="#section-1">Historia natural</a>
                </li>
                <li>
                  <a href="#section-2">Dinámica población y Amenazas</a>
                </li>
              </Scrollspy>
            </Paper>
            <br/>
          </Col>

          <Col lg={9} xs={12}>
            <Row>
              <Col xs={12} lg={12}>
                <FileDetailTitleBlock text='Historia Natural' id="section-1"/>
                <Paper zDepth={1} className="paper-padding-3 t100 align-justify color-text">
                  <FileDetailTitle text="Alimentación"/>
                  <div className="paragraph">
                    {this.getFeeding()}
                  </div>
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
