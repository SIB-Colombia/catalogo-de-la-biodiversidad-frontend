import React from 'react';
import styled from 'styled-components';
import {Link} from 'components';
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

margin-bottom:20px;
padding-bottom:30px;

.space   {
  margin: 4px;
}

.box-history{
  float: right;
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
                    <Link to={`/file/summary/${record.id}`}>
                      <Card className="space">
                        <CardMedia>
                          <img src={record.image} />
                        </CardMedia>
                        <CardTitle title={record.name} subtitle={record.description}>
                          <div className="box-history align-right">
                            <Badge badgeContent={'EX'} className="badge cr"/>
                            <Badge badgeContent={'CR'} className="badge ex"/>
                            <Badge badgeContent={'EN'} className="badge en"/>
                          </div>
                        </CardTitle>
                        {/* <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </CardText> */}
                        <CardActions>
                          {/* <RaisedButton label="Ver ficha" primary={true} fullWidth={true}/> */}
                          <FlatButton fullWidth={true} className="btn-secondary">
                            <Comment/>
                            {record.comment}
                          </FlatButton>
                        </CardActions>
                      </Card>
                    </Link>
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
