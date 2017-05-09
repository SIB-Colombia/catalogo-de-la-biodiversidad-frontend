import React from 'react';
import styled from 'styled-components';
import {Link} from 'components';
import IconMenu from 'material-ui/IconMenu';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
// import ChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';



const Wrapper = styled.div `
  position: fixed;
  right: 15px;
  bottom: 15px;
  z-index: 10;
`
class FileSummaryMenu extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrapper className="animated fadeInRight">
         <IconMenu iconButtonElement={< FloatingActionButton className = "btn-primary-floating" > <ContentAdd/> < /FloatingActionButton>} anchorOrigin={{
          horizontal: 'right',
          vertical: 'bottom'
        }} targetOrigin={{
          horizontal: 'right',
          vertical: 'bottom'
        }}>
          <MenuItem primaryText="Nomenclatura y Clasificación" rightIcon={<ArrowDropRight />}
          menuItems={[
            <MenuItem primaryText="Ejemplo 1" />,
            <MenuItem primaryText="Ejemplo 2" />,
            <Divider />,
            <MenuItem primaryText="Ejemplo 3" />,
          ]}/>
          <MenuItem primaryText="Descripción taxonómica"/>
          <MenuItem primaryText="Historia Natural I"/>
          <MenuItem primaryText="Historia Natural II"/>
          <MenuItem primaryText="Invasividad"/>
          <MenuItem primaryText="Hábitat y Distribución" rightIcon={<ArrowDropRight />}
          menuItems={[
            <MenuItem primaryText="Ejemplo 1" />,
            <MenuItem primaryText="Ejemplo 2" />,
            <Divider />,
            <MenuItem primaryText="Ejemplo 3" />,
          ]}/>
          <MenuItem primaryText="Dinámica poblacional y Amenazas"/>
          <MenuItem primaryText="Usos, Manejo y Conservación"/>
          <MenuItem primaryText="Partes asociadas"/>
          <MenuItem primaryText="Referencias"/>
          <MenuItem primaryText="Información Adicional"/>
        </IconMenu>

      </Wrapper>
    )
  }
}

export default FileSummaryMenu;
