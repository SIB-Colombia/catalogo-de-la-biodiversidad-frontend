import React, {PropTypes} from 'react';
import styled from 'styled-components';
import {palette} from 'styled-theme';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import {Grid, Row, Col} from 'react-flexbox-grid';
import {
  IconLink,
  Link,
  FileHeader,
  TitleSection,
  FileCarousel,
  FileComment,
  HomeTitle
} from 'components';

import * as FileService from '../../../services/FileService';

const Wrapper = styled.div `
border-top: 45px solid ${palette('grayscale', 6)} !important;
.background-1{
background: #E2E7E7 !important;
}
.background-2{
background: rgba(248, 248, 248, 0.9) !important;
}
box-shadow: 0 -22px 180px 1100px #E2E7E7;
`

class FileMostRecent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      comments: []
    }
  }

  componentWillMount() {
    this.renderCommments();
  }

  renderCommments = () => {
    FileService.getComments(this.props.id).then(comments => {

      console.log('comments',comments);
      this.setState({comments: comments});
    })
  }

  render() {
    return (
      <Wrapper>
        <Paper zDepth={0} className="paper-padding-2 background-1">
          <FileCarousel data={this.props.data} title="Fichas relacionadas"/>
        </Paper>
        <Paper zDepth={0} className="paper-padding-2 background-2">
          <FileComment id={this.props.id} comments={this.state.comments} update={this.renderCommments}/>
        </Paper>
      </Wrapper>
    )
  }
}

export default FileMostRecent;
