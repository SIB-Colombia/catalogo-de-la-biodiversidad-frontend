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
    padding: 10px 20px 20px 20px;

  }
.card{
  transition: .5s ease;
  -webkit-transition: .5s ease;
  &:hover{
    -webkit-transform: scale(0.9);
    -ms-transform: scale(0.9);
    transform: scale(0.9);
  }
}

.card-title{
  text-overflow: ellipsis;
  white-space: nowrap;
  font-style: italic;
}
.card-subtitle{
  font-size: 12px !important;
}
.card-right{
  width: 100% !important;
  padding: 10px !important;
}
.card-footer{
  margin: 0 !important;
  font-size: 13px !important;
  background:  ${palette('basescale', 10)} !important;;
  padding: 0 12px !important;
  height: 30px !important;
  line-height: 30px !important;
  color:white !important;
  border-radius: 0px !important;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}

`

class FileCardHorizontal extends React.Component {

  constructor(props) {
    super(props);
  }

  title(text){
    return text.split(' ').slice(0,2).join(' ');
  }
  subtitle(text){
    return text.split(' ').slice(2).join(' ');
  }
  
  formatDate(date) {
    let d = new Date(date).toISOString()
    return d.substring(0, 10)+" "+d.substring(11, 16);
  }
  
  imagen(record){
    if (record.imageInfo.thumbnailImage)
      return record.imageInfo.thumbnailImage
    else if(this.props.record.imageInfo.mainImage)
      return this.props.record.imageInfo.mainImage
    return "https://s3.amazonaws.com/sib-resources/images/catalogo/miniatura/png/t-anfibios.png"
  }
  
  render() {
    return (
      <Wrapper>
        <Link to={`/file/summary/${this.props.record.id}`}>
          <Paper className="card">
            <Row>
              <Col xs={12} sm={4} md={4} lg={4} className="img-media">
                <img src={this.imagen(this.props.record)}/>
              </Col>
              <Col xs={12} sm={8} md={8} lg={8} className="card-right">
                <div className="options">
                  <FileStatus title="EN"/>
                  <TitleSection className="padding-bottom-1 card-title">{this.title(this.props.record.scientificNameSimple)}</TitleSection>
                  <TitleSection className="card-subtitle">{this.subtitle(this.props.record.scientificNameSimple)}</TitleSection>
                  <p className="align-justify">
                    Lorem ipsum dolor sit amet, consectetur piscing elipiscing elipiscing eliadipiscing elit. Morbi luctus leo non sapien tempus, ac cursus lectus tristique. Donec vitae mattis ante. Donec vitae mattis ante
                  </p>
                  <div className="align-left padding card-footer">
                    {this.formatDate(this.props.record.creation_date)}
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
