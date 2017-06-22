import React from 'react';
import styled from 'styled-components';
import {Link} from 'components';
import Copyright from 'material-ui/svg-icons/action/copyright';
import {size, palette} from 'styled-theme';

const Wrapper = styled.div `

font-size: 20px;
padding: 0;
font-weight: 600;
color:#316971 !important;
&::after{
  content: "";
  color: blue;
  position: relative;
  left: 0px;
  display: block;
  height: 0px;
  width: 100px;
  margin: 15px 0;
  border-top: 2px solid ${palette('primary', 0)};
}
&.white{
  color: white;
  &::after{
    border-top: 2px solid white;
  }
}

`
class FileDetailTitle extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrapper {...this.props}>
        {this.props.text}
      </Wrapper>
    )
  }
}

export default FileDetailTitle;
