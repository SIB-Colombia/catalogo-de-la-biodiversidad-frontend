import React from 'react';
import styled from 'styled-components';
import {Link} from 'components';

const Wrapper = styled.div `
.box-home{
  background: white;
  position: relative;
}
`
class HomeCard extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
console.log('contraction');

    return (
      <Wrapper>
        <div className="box-home" style={{
          color: "white",
          height: this.props.height / 1.8,
          backgroundImage: `url(/background/${this.props.record})`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover'
        }}></div>
      </Wrapper>
    )
  }
}

export default HomeCard;
