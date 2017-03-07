import React from 'react'
import styled from 'styled-components'

import { Block, Link } from 'components'
import Slider from 'react-slick'


const Wrapper = styled(Block)`
margin-bottom:20px;
padding-bottom:30px;
h4{
  padding:40px;
}
.space{
  margin:0px 10px;
}
.slick-next:before, .slick-prev:before {
  font-size: 20px;
  line-height: 1;
  opacity: .75;
  color: #00838f;
}
`

class GroupsList extends React.Component {

  componentDidMount() {


  }

  render() {

    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      draggable: false,
      responsive:[ 
      { breakpoint: 768, settings: { slidesToShow: 1 } }, 
      { breakpoint: 1024, settings: { slidesToShow: 2 } }, 
      { breakpoint: 2000, settings: { slidesToShow: 4 } }, 
      { breakpoint: 100000, settings: 'unslick'  }
      ] 
    };

    return (
      <Wrapper className="grey lighten-4">
      <h4 className="center-align">Grupos</h4>
      <div className="container">
      <div className="row">
      <Slider {...settings}>
      {this.props.data.map((record, i) => (
        <div key={i}>
        <div className="card space">
        <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src="https://maxcdn.icons8.com/Color/PNG/512/Animals/pelican-512.png" />
        </div>
        <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
        {record.name}
        </span>
        <p><a href="#">{record.body}</a></p>
        </div>
        <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">{record.name}<i className="material-icons right">close</i></span>
        <p>{record.body}</p>
        </div>
        </div>
        </div>
        ))}
      </Slider>
      </div>
      <div className=" col s12 center-align">
      <br/>
      <button className="btn waves-effect waves-light cyan darken-3">Explorar todos los grupos
      <i className="material-icons right">more_horiz</i>
      </button>
      </div>
      </div>
      </Wrapper>
      )
  }
}

export default GroupsList