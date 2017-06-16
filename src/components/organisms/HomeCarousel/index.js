import React from 'react';
import styled from 'styled-components';
import {Link, HomeCard, Video,HomeStadistics} from 'components';
import {Grid, Row, Col} from 'react-flexbox-grid';
import RaisedButton from 'material-ui/RaisedButton';
const CarouselPreview = require('react-responsive-carousel').Carousel;
// import {Polar} from 'react-chartjs-2';

const Wrapper = styled.div `

  .slide-background{
    background: #fff;
    padding: 50px;
    overflow: auto;
  }
  .carousel .slide{
    background: #fff !important;
  }
  .control-dots{
        margin: 30px 0 !important;
  }
  .carousel .control-dots .dot{

    width: 12px;
    height: 12px;
  }
`
class HomeCarousel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      dona: null
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

    this.setState({
      dona: {
        datasets: [
          {
            data: [
              11, 16, 7, 3, 14
            ],
            backgroundColor: [
              '#FF6384', '#4BC0C0', '#FFCE56', '#E7E9ED', '#36A2EB'
            ],
            label: 'My dataset' // for legend
          }
        ],
        labels: ['Animal', 'Vegetal', 'Protista', 'Fungi', 'Mónera']
      }
    });

  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {

    const background = [
      {
        type: 'image',
        url: '89714_orig.jpg',
        copyright : 'Ejemplo de pie de página número 1'
      }, {
        type: 'video',
        url: 'https://www.youtube.com/embed/Rh4txXeKlME?rel=0&amp;controls=0&amp;showinfo=0'
        // url: 'https://www.youtube.com/embed/Rh4txXeKlME?rel=0&amp;controls=0&amp;showinfo=0;autoplay=1'
      }, {
        type: 'image',
        url: '11285_orig.jpg',
        copyright : 'Ejemplo de pie de página número 3'
      }, {
        type: 'image',
        url: '77419_orig.jpg',
        copyright : 'Ejemplo de pie de página número 4'
      }
    ];

    return (
      <Wrapper>
        <CarouselPreview showThumbs={false}>
          {background.map((record, i) => (
            <div key={i} className={(record.type === 'chart'
              ? 'slide-background'
              : 'default-back')}>
              {record.type === 'video' && <Video record={record} height={this.state.height}/>}
              {record.type === 'image' && <HomeCard record={record} height={this.state.height}/>}
              {/* {record.type === 'chart' && <Polar data={this.state.dona} width={250} height={250} options={{
                maintainAspectRatio: false
              }}/>} */}
            </div>
          ))}
        </CarouselPreview>
        <HomeStadistics />
      </Wrapper>
    )
  }
}

export default HomeCarousel
