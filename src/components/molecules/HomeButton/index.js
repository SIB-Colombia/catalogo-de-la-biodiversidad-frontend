import React from 'react';
import styled from 'styled-components';
import {Link} from 'components';
import {size, palette} from 'styled-theme';
import Copyright from 'material-ui/svg-icons/action/copyright';

const Wrapper = styled.div `
.carousel-middle{
  color: white;
  font-size: 22px;
  font-weight: 500;
  border: 2px solid white;
  padding: 15px 30px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  background: rgba(0,0,0,0.2);
  transition: .5s ease;
  &:hover{
    cursor: pointer;
    background: rgba(255,255,255,0.2);
  }

}
.carousel-footer{
  font-style: italic !important;
  position: absolute;
  bottom: 35px;
  right: 0px;
  padding: 10px 20px;
  background: rgba(0,0,0,0.5);
  color: white;
  font-size: 11px;

  @media ${size('xs')}{
    bottom: 0px;
  }

  @media ${size('sm')}{
    bottom: 55px;
	}


  svg{
    margin-left: 5px !important;
    vertical-align: middle !important;
    color:white !important;
    height: 18px !important;
    width: 18px !important;
  }
}
`
class HomeButton extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <Wrapper {...this.props}>
        <div className="carousel-middle animated fadeIn">EXPLORA EL CATÁLOGO</div>
        {this.props.footer && <div className="carousel-footer">{this.props.footer}
          <Copyright/></div>}
      </Wrapper>
    )
  }
}

export default HomeButton;
