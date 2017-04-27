import React from 'react'
import styled from 'styled-components'
import Carousel from 'react-slick'
import {Grid, Row, Col} from 'react-flexbox-grid'
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import {Link} from 'components';

const Wrapper = styled.div `

.box-home{
  background: white;
  position: relative;

}

`
class HomeCarousel extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      width: 0,
      height: 0
    }

    this.updateDimensions = this.updateDimensions.bind(this);
  }

  updateDimensions() {
    this.setState({width: window.innerWidth, height: window.innerHeight});
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillMount() {
    this.updateDimensions();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {

    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      // lazyLoad: true,
      slidesToShow: 1,
      adaptiveHeight: true,
      slidesToScroll: 1,
      draggable: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {}
        }, {
          breakpoint: 1024,
          settings: {}
        }, {
          breakpoint: 1368,
          settings: {}
        }, {
          breakpoint: 2000,
          settings: {}
        }, {
          breakpoint: 100000,
          settings: 'unslick'
        }
      ]
    };

    const background = ['11285_orig.jpg', '89714_orig.jpg', '77419_orig.jpg', '53388_orig.jpg'];

    return (
      <Wrapper className="grey lighten-4">
        <Carousel ref={c => this.slider = c} {...settings}>
          {background.map((record, i) => (
            <div key={i} className="box-home" style={{
              color: "white",
              height: this.state.height - 250,
              backgroundImage: `url(/background/${record})`,
              backgroundPosition: 'center center',
              backgroundSize: 'cover'
            }}></div>
          ))}
        </Carousel>
      </Wrapper>
    )
  }
}

export default HomeCarousel
