import React from 'react';
import styled from 'styled-components';
import {Link,TitleSection} from 'components';
import {size, palette,font} from 'styled-theme';
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Badge from 'material-ui/Badge';
import Comment from 'material-ui/svg-icons/communication/comment';

const Wrapper = styled.div `

.card-title  > span:first-child{
  font-size: ${font('xxs')} !important;
	color: ${palette('basescale', 2)} !important;
}
.box-history{
  float: right;
}
`

class FileCard extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrapper>
        <Link to={`/file/summary/${this.props.record.id}`}>
          <Card className="space-card">
            <CardMedia>
              <img src={this.props.record.image}/>
            </CardMedia>
            <CardTitle title={this.props.record.name} className="card-title" subtitle={this.props.record.description}>
              <div className="box-history align-right">
                <Badge badgeContent={'EX'} className="badge cr"/>
                <Badge badgeContent={'CR'} className="badge ex"/>
                <Badge badgeContent={'EN'} className="badge en"/>
              </div>
            </CardTitle>
            <CardActions className="align-center">
              <FlatButton fullWidth={true} className="btn-secondary align-left padding">
                <Comment/> {this.props.record.comment}
              </FlatButton>
            </CardActions>
          </Card>
        </Link>
      </Wrapper>
    )
  }
}

export default FileCard;
