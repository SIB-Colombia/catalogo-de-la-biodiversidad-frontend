import React from 'react';
import styled from 'styled-components';
import {Link, HomeCard} from 'components';
import {Grid, Row, Col} from 'react-flexbox-grid';
import Carousel from 'react-slick';
import RaisedButton from 'material-ui/RaisedButton';

const Wrapper = styled.div `

`
class HomeCarousel extends React.Component {

  constructor(props) {
    super(props);
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
      lazyLoad: true,
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
            <div key={i}>
              <HomeCard record={record} height={this.state.height}/>
            </div>
          ))}
        </Carousel>
      </Wrapper>
    )
  }
}

export default HomeCarousel
