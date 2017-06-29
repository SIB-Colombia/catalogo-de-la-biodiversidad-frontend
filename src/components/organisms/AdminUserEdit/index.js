import React, {PropTypes} from 'react'
import styled from 'styled-components'
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {Grid, Row, Col} from 'react-flexbox-grid';
import {IconLink, Link, Loading} from 'components';



const Wrapper = styled.div `

`

class AdminUserEdit extends React.Component {

  constructor(props) {
    super(props);
    this.state= {
      updated: null
    }
  }

  componentWillMount(){

  }


  render() {
    return (
      <Wrapper>
        chances
      </Wrapper>
    )
  }
}

export default AdminUserEdit;
