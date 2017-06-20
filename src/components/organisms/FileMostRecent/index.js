import React, {PropTypes} from 'react';
import styled from 'styled-components';
import {palette} from 'styled-theme';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import {Grid, Row, Col} from 'react-flexbox-grid';
import Copyright from 'material-ui/svg-icons/action/copyright';
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

&::before{
  content: "";
  background: ${palette('grayscale',0)};
  height: 100vh;
  width: 100%;
  display: block;
  position: absolute;
  margin-top: -100vh;
  z-index: -1;
  box-shadow: 0 -22px 180px 80px ${palette('grayscale',0)};
}

 margin-top: 80px;
/*box-shadow: 0 -22px 180px 50vh rgba(266,231,231,0.99);*/

.bar-middle{
  position: relative;
  margin-top: -20px;
  background: #316971 !important;
  padding: 10px;
  text-align: center;
  line-height: 0;
  svg{
    color: white !important;
  }
  &::before {
    content: "";
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 10px 10px 10px;
    border-color: transparent transparent #316971 transparent;
    position: relative;
    top: -48px;
    left: 22px;
  }
}
.background-1{
  background: rgba(248, 248, 248, 0.97) !important;
}
.background-2{
  background: rgba(248, 248, 248, 0.93) !important;
}
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
      this.setState({comments: comments});
    })
  }

  render() {
    return (
      <Wrapper>
        <div className="bar-middle"><Copyright /></div>
        <Paper zDepth={0} className="background-1">
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
