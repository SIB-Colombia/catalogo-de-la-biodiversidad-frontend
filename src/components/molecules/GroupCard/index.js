import React from 'react';
import styled from 'styled-components';
import {Link, TitleSection} from 'components';
import {size, palette, font} from 'styled-theme';
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';
import {isAuthenticated} from '../../../auth';

const Wrapper = styled.div `
.card-title  > span:first-child{
  font-size: ${font('xxs')} !important;
  color: ${palette('basescale', 2)} !important;
}
`
class GroupCard extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrapper>
        <Link to={`/file/summary/${this.props.record.id}`}>
          <Card className="space-card">
            {/* {isAuthenticated() && <CardHeader avatar="/star2.png" className="card-star"/>} */}
            <CardHeader avatar="/star2.png" className="card-star"/>
            <CardMedia>
              <img src="/bird1.jpg"/>
            </CardMedia>
            <CardTitle title="Título" subtitle="Subtítulo" className="card-title"/> {/* <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </CardText> */}
          </Card>
        </Link>
      </Wrapper>
    )
  }
}

export default GroupCard;
