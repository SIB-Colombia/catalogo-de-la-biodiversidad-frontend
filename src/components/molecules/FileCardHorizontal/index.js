import React from 'react';
import styled from 'styled-components';
import {Link, TitleSection,FileStatus} from 'components';
import {size, palette, font} from 'styled-theme';
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
  .img-media{
    text-align: center;
    img{
      height: auto;
      max-width: 100%;
    }
  }
  .options{
    padding: 0px 20px 0px 0px;
  }

.card-title{
  font-size: ${font('xxs')} !important;
	color: ${palette('basescale', 2)} !important;
  font-weight: 500;
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
          <Paper>
            <Row>
              <Col xs={12} sm={4} md={4} lg={4} className="img-media">
                <img src={`https://s3.amazonaws.com/sib-resources/images/catalogo/miniatura/png/t-anfibios.png`}/>
              </Col>
              <Col xs={12} sm={8} md={8} lg={8} className="paper-padding-1">
                <div className="options">
                  <TitleSection className="padding-bottom-1 card-title">{this.props.record.name}</TitleSection>
                  <FlatButton className="btn-option align-left" fullWidth={true}>
                    <Comment/> {this.props.record.comment}
                  </FlatButton>
                  <p className="align-justify">
                    Lorem ipsum dolor sit amet, consectetur piscing elipiscing elipiscing eliadipiscing elit. Morbi luctus leo non sapien tempus, ac cursus lectus tristique. Donec vitae mattis ante. Donec vitae mattis ante
                  </p>
                  <FileStatus />
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
