import React from 'react';
import styled from 'styled-components';
import {Link, FileCard,TitleSection} from 'components';
import Carousel from 'react-slick';
import {Grid, Row, Col} from 'react-flexbox-grid';
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import ArrowBack from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import ArrowForward from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import Comment from 'material-ui/svg-icons/communication/comment';
import Badge from 'material-ui/Badge';

const Wrapper = styled.div `

.space-card{
  margin: 0px 10px;
}
.slick-next:before, .slick-prev:before {
  font-size:   20px;
  line-height: 1;
  opacity: .75;
  color: grey;
}
`
class FileCarousel extends React.Component {

  constructor(props) {
    super(props)
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)

  }

  componentDidMount() {}

  next() {
    this.slider.slickNext()
  }
  previous() {
    this.slider.slickPrev()
  }

  render() {

    var settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      lazyLoad: true,
      slidesToScroll: 1,
      draggable: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1
          }
        }, {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3
          }
        }, {
          breakpoint: 1368,
          settings: {
            slidesToShow: 5
          }
        }, {
          breakpoint: 2000,
          settings: {
            slidesToShow: 5
          }
        }, {
          breakpoint: 100000,
          settings: 'unslick'
        }
      ]
    };

    return (
      <Wrapper className="padding-bottom-3">
        <Grid>
          <Row>
            <Col xs={12}>
              <TitleSection align="center" color="grayscale-6" className="padding-top-3 padding-bottom-3">{this.props.title}</TitleSection>
              <Carousel ref={c => this.slider = c} {...settings}>
                {this.props.data.map((record, i) => (
                  <div key={i}>
                    <FileCard record={record}/>
                  </div>
                ))}
              </Carousel>
            </Col>
          </Row>
          <br/>
          <br/>
          <div className="align-center">
            <FlatButton icon={< ArrowBack />} onTouchTap={this.previous}/>
            <Link to={`/file/search`}>
              <RaisedButton label="Ver más" default={true}/>
            </Link>
            <FlatButton icon={< ArrowForward />} onTouchTap={this.next}/>
          </div>
        </Grid>
      </Wrapper>
    )
  }
}

export default FileCarousel
