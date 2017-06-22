import React from 'react';
import styled from 'styled-components';
import {Link, FileStatus, MenuHorizontal} from 'components';
import Paper from 'material-ui/Paper';
import Badge from 'material-ui/Badge';
import {palette} from 'styled-theme';
import Copyright from 'material-ui/svg-icons/action/copyright';

const Wrapper = styled.div `
padding-top: 55vh;
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
.author{
  text-align: left;
  margin-bottom: 50px;
  .legend{
    color:white;
    background: rgba(0,0,0,0.6);
    position: relative;
    width: auto;
    padding: 8px 10px;
    font-style: italic;
    font-size: 12px;
    min-width: 250px;
    max-width: 250px;
    float: right;
    svg{
      width: 17px !important;
      height: 17px !important;
      color: white !important;
      vertical-align: middle;
      margin-top: -3px;
      margin-right: 3px;
    }
  }
}
`
class FileHeader extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrapper>
        <div className="author">
          <div className="legend">
            <Copyright/>
            Ivo Antusek
          </div>
        </div>
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
