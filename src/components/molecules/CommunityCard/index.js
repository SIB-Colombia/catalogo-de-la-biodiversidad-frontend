import React from 'react';
import styled from 'styled-components';
import {Link} from 'components';
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';

const Wrapper = styled.div `
.box-community{
  text-align: center;
  padding:0 30px;
  .box-circle{
    border-radius: 100%;
    border:3px solid white;
    img{
      width: 100%;
    }
  }
  .name-user{
    color:#333;
    padding-top: 10px;
  }
}
`
class CommunityCard extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrapper>
        <div className="box-community">
          <div className="box-circle">
            <center>
              <img src="/avatar.png"/>
            </center>
          </div>
          <div className="name-user">Usuario</div>
        </div>
      </Wrapper>
    )
  }
}

export default CommunityCard;
