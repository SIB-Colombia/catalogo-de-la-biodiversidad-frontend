import React from 'react';
import styled from 'styled-components';
import {Link} from 'components';

const Wrapper = styled.div `
position: relative;
width: 100%;
iframe,
object,
embed {
  border: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

`
class Video extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <Wrapper style={{
        height: `${this.props.height / 1.8}px`
      }}>
        <iframe src={this.props.record.url}></iframe>
      </Wrapper>
    )
  }
}

export default Video;
