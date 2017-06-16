import React from 'react';
import styled from 'styled-components';
import {Link} from 'components';

const Wrapper = styled.div `
background: rgba(0, 0, 0, 0.4);
user-select: none;
padding: 15px 20px;
color: white;
font-weight: bold;
font-size: 25px;
margin-left: 30px;
border:1px solid white;
border-bottom: 0px;
&.separator{
  padding: 0px 20px;
  border-top: 0px;
  color: transparent;
}
&.bottom{
  padding: 0px 20px;
  border-top: 0px;
  color: transparent;
  border-bottom: 1px solid white;
}
`
class Merge extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const separator = (this.props.separator ? 'separator': '');
    const bottom = (this.props.bottom ? 'bottom': '');


    return (
      <Wrapper className={`${separator} ${bottom}`}>
        {this.props.title}
      </Wrapper>
    )
  }
}

export default Merge;
