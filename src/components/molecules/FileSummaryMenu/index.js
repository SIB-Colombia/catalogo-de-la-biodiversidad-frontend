import React from 'react';
import styled from 'styled-components';
import {Link} from 'components';
import Paper from 'material-ui/Paper';
import Badge from 'material-ui/Badge';

const Wrapper = styled.div `
.btnFilters{
  position: fixed;
  right: 15px;
  bottom: 15px;
  z-index: 10;
}
`
class FileSummaryMenu extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrapper className="btnFilters animated fadeInRight">
        <IconMenu iconButtonElement={< FloatingActionButton className = "btn-primary-floating" > <ContentAdd/> < /FloatingActionButton>} anchorOrigin={{
          horizontal: 'right',
          vertical: 'bottom'
        }} targetOrigin={{
          horizontal: 'right',
          vertical: 'bottom'
        }}>
          <MenuItem primaryText="Nomenclatura y Clasificación"/>
          <MenuItem primaryText="Descripción taxonómica"/>
          <MenuItem primaryText="Historia Natural I"/>
          <MenuItem primaryText="Historia Natural II"/>
          <MenuItem primaryText="Invasividad"/>
          <MenuItem primaryText="Hábitat y Distribución"/>
          <MenuItem primaryText="Dinámica poblacional y Amenazas"/>
          <MenuItem primaryText="Usos, Manejo y Conservación"/>
          <MenuItem primaryText="Partes asociadas"/>
          <MenuItem primaryText="Referencias"/>
          <MenuItem primaryText="Información Adicional"/>
        </IconMenu>
        {/* <FloatingActionButton className="btn-primary-floating">
            <ContentAdd/>
          </FloatingActionButton> */}
      </Wrapper>
    )
  }
}

export default FileSummaryMenu;
