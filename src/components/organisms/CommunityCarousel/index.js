import React from 'react'
import styled from 'styled-components'
import Carousel from 'react-slick'
import {Grid, Row, Col} from 'react-flexbox-grid'
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import ArrowBack from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import ArrowForward from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import {Link} from 'components';

const Wrapper = styled.div `

margin-bottom:20px;
padding-bottom:30px;
background: #dadada;

.space{
  margin: 4px;
}

.slick-next:before, .slick-prev:before {
  font-size: 20px;
  line-height: 1;
  opacity: .75;
  color: grey;
}
h3{
  color:#333;
  text-align: center;
  font-weight: lighter;
}

.box-community{

  text-align: center;
  padding: 30px;

.box-circle{

  border-radius: 100%;
  border:10px solid white;
  img{
    width: 100%;
  }

}
.name-user{
  color:#333;
  padding-top: 10px;
}


}

`
class CommunityCarousel extends React.Component {

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

              <h3>Comunidad</h3>

              <Carousel ref={c => this.slider = c} {...settings}>
                {this.props.data.map((record, i) => (
                  <div key={i} className="box-community">
                    <div className="box-circle">
                      <center>
                        <img src="/avatar.png"/>
                      </center>
                    </div>
                    <div className="name-user">Usuario</div>
                  </div>
                ))}
              </Carousel>

            </Col>
          </Row>
          <br/>
          <br/>
          <div className="align-center">
            <FlatButton icon={< ArrowBack />} onTouchTap={this.previous}/>
            <Link to={`file/detail/11`}>
              <RaisedButton label="Ver toda la comunidad" default={true}/>
            </Link>
            <FlatButton icon={< ArrowForward />} onTouchTap={this.next}/>
          </div>
        </Grid>
      </Wrapper>
    )
  }
}

export default CommunityCarousel
