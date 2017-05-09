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
import {IconLink, Link, FileHeader} from 'components'

const Wrapper = styled.div `
padding-top: 150px;

.img-size{
  width: 60%;
  padding: 15px;
}
h3{
  text-align: center;
  margin: 0;
  color:#444;
  font-weight: bold;
}
.detail-content{
  padding: 20px;
}
`

class FileDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: null
    }
  }

  componentWillMount() {
    this.setState({id: this.props.params.id})
  }

  changeTab(tab) {
    console.log(tab.props['data-route']);
  }

  render() {
    return (
      <Wrapper>
        <Row>
          <Col xs={12} lg={12}>
            <FileHeader title={'Coragyps Atratus'} subtitle={'Bechstein, 1793'} />
            <Row>
              <Col xs={12} lg={12}>

                jojojoj
              </Col>
            </Row>
          </Col>
        </Row>
      </Wrapper>
    )
  }
}

export default FileDetail;
