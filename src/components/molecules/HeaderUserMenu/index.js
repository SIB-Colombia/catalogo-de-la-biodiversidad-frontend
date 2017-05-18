import React from 'react';
import styled from 'styled-components';
import {Link} from 'components';
import {font, size, palette} from 'styled-theme';

import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import Download from 'material-ui/svg-icons/file/file-download';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import ArrowDropDown from 'material-ui/svg-icons/navigation/arrow-drop-down';
import Home from 'material-ui/svg-icons/action/home';
import Settings from 'material-ui/svg-icons/action/settings';
import Exit from 'material-ui/svg-icons/action/exit-to-app';
import Account from 'material-ui/svg-icons/action/account-circle';
import Info from 'material-ui/svg-icons/action/info';
import {logout, isAuthenticated} from '../../../auth';

const Wrapper = styled.div `
float: right;
height: 100%;
.picture{
  width: 40px;
  border-radius: 100%;
}
.iconUser{
  height: 100%;
  button{
  width: auto !important;
  }
  svg{
    color: ${palette('grayscale', 6)} !important;
    height: 42px !important;
    width: 42px !important;
  }
}

`
class HeaderUserMenu extends React.Component {

  constructor(props) {
    super(props);

  }

  exit() {
    logout();
  }

  render() {
    return (
      <Wrapper>
        <IconMenu className='iconUser' iconButtonElement={< IconButton > <img src={isAuthenticated().photo || '/avatar3.png'} className="picture"/> < /IconButton>} anchorOrigin={{
          horizontal: 'right',
          vertical: 'top'
        }} targetOrigin={{
          horizontal: 'right',
          vertical: 'top'
        }}>
          <MenuItem primaryText="Escritorio" leftIcon={< Home />}/>
          <Link to={'/user/profile'}><MenuItem primaryText="Perfil" leftIcon={< Account />}/></Link>
          <MenuItem primaryText="Notificaciones" leftIcon={< Info />}/>
          <MenuItem primaryText="Ajustes de cuenta" leftIcon={< Settings />}/>
          <Divider/>
          <MenuItem primaryText="Cerrar sesión" onTouchTap={() => {
            this.exit()
          }} leftIcon={< Exit />}/>
        </IconMenu>
      </Wrapper>
    )
  }
}

export default HeaderUserMenu;
