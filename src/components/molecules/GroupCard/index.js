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
            <CardHeader avatar="/star2.png" className="card-star"/>
            <CardMedia>
              <img src="/bird1.jpg"/>
            </CardMedia>
            <CardTitle title="Título" subtitle="Subtítulo"/> {/* <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </CardText> */}
          </Card>
        </Link>
      </Wrapper>
    )
  }
}

export default GroupCard;
