import React from 'react';
import styled from 'styled-components';
import {Link, HomeCard, Video} from 'components';
import {Grid, Row, Col} from 'react-flexbox-grid';
import RaisedButton from 'material-ui/RaisedButton';
const CarouselPreview = require('react-responsive-carousel').Carousel;

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

    const background = [
      {
        type: 'video',
        url: 'https://www.youtube.com/embed/Rh4txXeKlME?rel=0&amp;controls=0&amp;showinfo=0'
        // url: 'https://www.youtube.com/embed/Rh4txXeKlME?rel=0&amp;controls=0&amp;showinfo=0;autoplay=1'
      }, {
        type: 'image',
        url: '89714_orig.jpg'
      }, {
        type: 'image',
        url: '11285_orig.jpg'
      }, {
        type: 'image',
        url: '77419_orig.jpg'
      }
    ];

    return (
      <Wrapper>
        <CarouselPreview showThumbs={false}>
          {background.map((record, i) => (
            <div key={i}>
              {record.type === 'video' && <Video record={record} height={this.state.height}/>}
              {record.type === 'image' && <HomeCard record={record.url} height={this.state.height}/>}
            </div>
          ))}
        </CarouselPreview>
      </Wrapper>
    )
  }
}

export default HomeCarousel
