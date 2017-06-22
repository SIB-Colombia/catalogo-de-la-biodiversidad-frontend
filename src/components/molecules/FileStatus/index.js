import React from 'react';
import styled from 'styled-components';
import {Link} from 'components';
import Badge from 'material-ui/Badge';
import {palette} from 'styled-theme';

const Wrapper = styled.div `
position: relative;
float: right;
top:0%;
right: 0%;
.badge{
  &.description{
    margin-left: 1px;
    span{
      padding-left: 10px;
      padding-right: 10px;
    }
  }
}
`
class FileStatus extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrapper className="align-right">
        {/* <Badge badgeContent={'EX'} className="badge cr"/> */}
        {/* <Badge badgeContent={'CR'} className="badge ex"/> */}
        {/* <Badge badgeContent={this.props.description} className={`badge description ${this.props.title}`} /> */}
        {/* <Badge badgeContent={this.props.title} className={`badge ${this.props.title}`} /> */}
        {this.props.description && <div className={`badge ${this.props.title} description`}>
          <span>{this.props.description}</span>
        </div>}
        <div className={`badge ${this.props.title}`}>
          <span>{this.props.title}</span>
        </div>
      </Wrapper>
    )
  }
}

export default FileStatus;
