import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-slick';
import {Grid, Row, Col} from 'react-flexbox-grid';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Menu from 'material-ui/svg-icons/navigation/menu';
import ArrowBack from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import Chip from 'material-ui/Chip';
import {List, ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import Subheader from 'material-ui/Subheader';
import {Link} from 'components';
import {size, palette} from 'styled-theme';
import Scrollchor from 'react-scrollchor';


const Wrapper = styled.div `

float: left;
left: -32px;
position: relative;
width: 35px;

@media ${size('sm')}{
  position: absolute;
  left: 0;
  top:0;
  button{
      width: 30px !important;
  }
}
.index{
  color: #444;
  font-weight: 600;
  font-size: 25px;
  text-align: center;
  padding: 15px 5px 15px 5px;
  border-bottom: 1px solid #e8e8e8;
}

.style-btn{
  box-shadow: none !important;

  /*margin-top: 3.5px;*/
  button{
    background-color: ${palette('primary', 0)} !important;
    height: 64px !important;
    border-radius: 0 !important;
    svg{
    }
  }
}

`
class FileDetailMenu extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      open: false,
      sections: []
    }
  }

  componentWillMount() {

    let sections = [];
    for (var property in this.props.complete) {
      if(property.indexOf('InUse') > -1){
        sections[property] = true;
      }
    }
    this.setState({sections :sections});
  }

  handleToggleMenu = () => this.setState({
    open: !this.state.open
  });


  render() {

    return (
      <Wrapper>
        <div className="btnFilters animated fadeInLeft">
          <FloatingActionButton onTouchTap={this.handleToggleMenu} className="style-btn">
            <Menu/>
          </FloatingActionButton>
        </div>
        <Drawer open={this.state.open} containerClassName="drawer">
            <div className="index">Índice de ficha</div>
            {Object.keys(this.state.sections).map((section,i) => (
              <Scrollchor key={i} to={`#${section}`} animate={{offset: -80, duration: 600}}  className="nav-link"><MenuItem>{section}</MenuItem></Scrollchor>
            ))}
        </Drawer>
      </Wrapper>
    )
  }
}

export default FileDetailMenu;
