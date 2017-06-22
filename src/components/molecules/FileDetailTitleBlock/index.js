import React from 'react';
import styled from 'styled-components';
import {Link} from 'components';
import Paper from 'material-ui/Paper';
import Copyright from 'material-ui/svg-icons/action/copyright';
import {size, palette} from 'styled-theme';

const Wrapper = styled.div `
.fdtb-main{
  padding: 30px;
  color: ${palette('basescale',1)} !important;
  font-size: 25px;
  font-weight: 600;
}

`
class FileDetailTitleBlock extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrapper {...this.props}>
        <Paper className="fdtb-main">
          {this.props.text}
        </Paper>
      </Wrapper>
    )
  }
}

export default FileDetailTitleBlock;
