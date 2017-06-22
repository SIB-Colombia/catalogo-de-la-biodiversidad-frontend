import React from 'react';
import styled from 'styled-components';
import {Link} from 'components';
import Copyright from 'material-ui/svg-icons/action/copyright';
import {size, palette} from 'styled-theme';

const Wrapper = styled.div `

font-size: 25px;
padding: 30px 10px;
font-weight: 500;
margin-left: 20px;
color:#333;
&::after{
  content: "";
  color: blue;
  position: relative;
  left: -20px;
  display: block;
  height: 0px;
  width: 80px;
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
class HomeTitle extends React.Component {

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

export default HomeTitle;
