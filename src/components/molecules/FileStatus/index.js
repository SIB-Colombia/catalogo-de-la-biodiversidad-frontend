import React from 'react';
import styled from 'styled-components';
import {Link} from 'components';
import Badge from 'material-ui/Badge';
import {palette} from 'styled-theme';

const Wrapper = styled.div `
float: right;
`
class FileStatus extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrapper className="align-right">
        <Badge badgeContent={'EX'} className="badge cr"/>
        <Badge badgeContent={'CR'} className="badge ex"/>
        <Badge badgeContent={'EN'} className="badge en"/>
      </Wrapper>
    )
  }
}

export default FileStatus;
