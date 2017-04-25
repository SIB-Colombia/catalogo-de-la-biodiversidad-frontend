import React from 'react'
import styled from 'styled-components'
import Carousel from 'react-slick'
import {Grid, Row, Col} from 'react-flexbox-grid'
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

import {Link} from 'components';

const Wrapper = styled.div `

margin-bottom:20px;
padding-bottom:30px;

.space{
  margin: 4px;
}

.slick-next:before, .slick-prev:before {
  font-size: 20px;
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
            slidesToShow: 4
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
      <Wrapper className="grey lighten-4">
        <Grid>
          <Row>
            <Col xs={12}>

              <Carousel ref={c => this.slider = c} {...settings}>
                {this.props.data.map((record, i) => (
                  <div key={i}>
                    <Card className="space">
                      <CardHeader title="URL Avatar" subtitle="Subtítulo" avatar="/avatar4.png"/>
                      <CardMedia>
                        <img src="/file.jpg"/>
                      </CardMedia>
                      <CardTitle title="Título" subtitle="Subtítulo"/> {/* <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </CardText> */}
                      <CardActions className="align-center">
                        <Link to={`/file/summary/${record.id}`}>
                          <RaisedButton label="Ver ficha" primary={true} fullWidth={true}/>
                        </Link>
                        {/* <FlatButton label="Action2"/> */}
                      </CardActions>
                    </Card>
                  </div>
                ))}
              </Carousel>

            </Col>
          </Row>
          <br/>
          <br/>
          <div className="align-center">
            <FlatButton icon={< ArrowBack />} onTouchTap={this.previous}/>
            <Link to={`file/search`}>
              <RaisedButton label="Ver todas las fichas" default={true}/>
            </Link>
            <FlatButton icon={< ArrowForward />} onTouchTap={this.next}/>
          </div>
        </Grid>
      </Wrapper>
    )
  }
}

export default FileCarousel
