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
import {Grid, Row, Col} from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import Badge from 'material-ui/Badge';
import Comment from 'material-ui/svg-icons/communication/comment';

const Wrapper = styled.div `
.paper-horizontal{
  /*padding: 15px 20px;*/
  h3{
    font-size: 23px;
    font-weight: lighter;
  }
  .img-media{
    text-align: center;
    img{
      height: 100%;
      width: 100%;
    }
  }
  .options{
    padding: 0px 20px 0px 0px;
  }
}
`

class FileCardHorizontal extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrapper>
        <Link to={`/file/summary/${this.props.record.id}`}>
          <Paper className="paper-horizontal">
            <Row>
              <Col xs={12} sm={4} md={4} lg={4} className="img-media">
                <img src={this.props.record.image}/>
              </Col>
              <Col xs={12} sm={8} md={8} lg={8}>
                <div className="options">
                  <h3>{this.props.record.name}</h3>
                  <FlatButton className="btn-secondary inverse align-left padding" fullWidth={true}>
                    <Comment/> {this.props.record.comment}
                  </FlatButton>
                  <p className="align-justify">
                    Lorem ipsum dolor sit amet, consectetur piscing elipiscing elipiscing eliadipiscing elit. Morbi luctus leo non sapien tempus, ac cursus lectus tristique. Donec vitae mattis ante. Donec vitae mattis ante
                  </p>
                  <div className="box-history align-right">
                    <Badge badgeContent={'EX'} className="badge cr"/>
                    <Badge badgeContent={'CR'} className="badge ex"/>
                    <Badge badgeContent={'EN'} className="badge en"/>
                  </div>
                </div>
              </Col>
            </Row>
          </Paper>
        </Link>
      </Wrapper>
    )
  }
}

export default FileCardHorizontal;
