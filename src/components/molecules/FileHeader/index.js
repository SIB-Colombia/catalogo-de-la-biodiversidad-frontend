import React from 'react';
import styled from 'styled-components';
import {Link, FileStatus, MenuHorizontal} from 'components';
import Paper from 'material-ui/Paper';
import Badge from 'material-ui/Badge';
import {palette} from 'styled-theme';

const Wrapper = styled.div `
padding-top: 45vh;
.title-content{
  padding: 20px 20px 0px 40px;
}
.main-title{
  color:${palette('basescale', 3)};
  font-style: italic;
  display: inline-block;
  font-weight: 500;
}
.main-subtitle{
  color:${palette('basescale', 3)};
  display: inline-block;
  margin-left: 20px;
  font-weight: lighter;
}
`
class FileHeader extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrapper>
        <Paper>
          <FileStatus title="EN" description="AMENAZADO"/>
          <div className="title-content">
            <div className="title-lg align-left main-title">{this.props.title}</div>
            <div className="main-subtitle">{this.props.subtitle}</div>
          </div>
          <MenuHorizontal id={this.props.id} active={this.props.active}/>
        </Paper>
      </Wrapper>
    )
  }
}

export default FileHeader;
