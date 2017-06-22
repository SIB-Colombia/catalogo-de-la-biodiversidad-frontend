import React from 'react';
import styled from 'styled-components';
import {Link} from 'components';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import CircularProgress from 'material-ui/CircularProgress';


const Wrapper = styled.div `
text-align: center;
padding: 40px 20px;
.text{
  color:#555;
  font-size: 12px;
  padding-top: 10px;
  font-weight: lighter;
  color:#EF7748;

}
`
class Loading extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <Wrapper>
        <CircularProgress size={30} thickness={3} color={'#EF7748'}/>
        {this.props.text && <div className="text">{this.props.text}</div>}
      </Wrapper>
    )
  }
}

export default Loading;
