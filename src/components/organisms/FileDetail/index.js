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


`

class FileDetail extends React.Component {

  constructor(props) {
    super(props);

    console.log(this.props);
  }


  render() {
    return (
      <Wrapper>
      ergerg
      </Wrapper>
    )
  }
}

export default FileDetail;
