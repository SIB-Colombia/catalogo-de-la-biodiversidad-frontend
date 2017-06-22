import React from 'react';
import styled from 'styled-components';
import {Link, FileCard, HomeTitle} from 'components';
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

padding: 40px 0;
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
          breakpoint: '49rem',
          settings: {
            slidesToShow: 1
          }
        }, {
          breakpoint: '65rem',
          settings: {
            slidesToShow: 3
          }
        }, {
          breakpoint: '1000rem',
          settings: {
            slidesToShow: 5
          }
        }
      ]
    };

    return (
      <Wrapper>
        <Grid className="container">
          <Row>
            <Col xs={12}>
              <HomeTitle text={this.props.title} />
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
