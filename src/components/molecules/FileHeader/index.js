import React from 'react';
import styled from 'styled-components';
import {Link} from 'components';
import Paper from 'material-ui/Paper';
import Badge from 'material-ui/Badge';
import {palette} from 'styled-theme';

const Wrapper = styled.div `
padding-top: 200px;
.box-history{
  float: right;
}
.box-content{
  padding: 20px;
  overflow:hidden;
}
.main-title{
  color:${palette('basescale', 3)};
  font-style: italic;
  float:left;
  font-weight: 500;
}
.main-subtitle{
  color:${palette('basescale', 3)};
  line-height: 4;
  margin-left: 30px;
}
`
class FileHeader extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrapper>
        <Paper zDepth={1} className="box-content">
          <div className="box-history align-right">
            <Badge badgeContent={'EX'} className="badge cr"/>
            <Badge badgeContent={'CR'} className="badge ex"/>
            <Badge badgeContent={'EN'} className="badge en"/>
          </div>
          <h3 className="title-lg align-left main-title">{this.props.title}</h3>
          <span className="main-subtitle">{this.props.subtitle}</span>
        </Paper>
      </Wrapper>
    )
  }
}

export default FileHeader;
