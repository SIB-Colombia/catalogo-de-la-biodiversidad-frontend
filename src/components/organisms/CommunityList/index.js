import React from 'react'
import styled from 'styled-components'
import {Block, Link} from 'components'
import Slider from 'react-slick'

const Wrapper = styled(Block)`
margin-bottom:20px;
padding-bottom:30px;
h4{
  padding:40px;
}
img{
  border: 7px solid white;
}
.slick-next:before, .slick-prev:before {
  font-size: 20px;
  line-height: 1;
  opacity: .75;
  color: #00838f;
}
`
class CommunityList extends React.Component {

  render() {

    var settings = {
      dots: true,
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
            slidesToShow: 2
          }
        }, {
          breakpoint: 2000,
          settings: {
            slidesToShow: 4
          }
        }, {
          breakpoint: 100000,
          settings: 'unslick'
        }
      ]
    };

    return (
      <Wrapper className="grey lighten-4">
        <h4 className="center-align">Comunidad</h4>
        <div className="container">
          <div className="row">
            <Slider {...settings}>
              {this.props.data.map((record, i) => (
                <div key={i}>
                  <div className="center-align">
                    <center>
                      <img width="200" src="http://www.iconsfind.com/wp-content/uploads/2015/08/20150831_55e46b12d72da.png" alt="" className="circle"/>
                      <h6>{record.name} {i}</h6>
                    </center>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className=" col s12 center-align">
            <br/>
            <button className="btn waves-effect waves-light cyan darken-3">Explorar toda la comunidad
              <i className="material-icons right">more_horiz</i>
            </button>
          </div>
        </div>
      </Wrapper>
    )
  }
}

export default CommunityList
