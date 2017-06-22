import React from 'react';
import styled from 'styled-components';
import {Link, HomeButton} from 'components';

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

    return (
      <Wrapper>
        <div className="box-home" style={{
          color: "white",
          height: this.props.height / 1.8,
          backgroundImage: `url(/background/${this.props.record.url})`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover'
        }}>
          <HomeButton footer={this.props.record.copyright} />
        </div>
      </Wrapper>
    )
  }
}

export default HomeCard;
