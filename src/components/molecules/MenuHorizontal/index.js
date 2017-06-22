import React from 'react';
import styled from 'styled-components';
import {size, palette} from 'styled-theme';
import {Link} from 'components';

const Wrapper = styled.nav `
ol {
  display: table;
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  text-align: center;
  white-space: nowrap;
}
li {
  overflow: hidden;
  display: table-cell;
  padding: 20px;
  text-overflow: ellipsis;
  color:${palette('basescale', 3)};
  font-weight: bold;
  cursor: pointer;
  &.active{
    color:${palette('basescale', 5)};
    cursor: default;
  }
  &:hover{
    color:${palette('basescale', 5)};
  }
}
`
class MenuHorizontal extends React.Component {

  constructor(props) {
    super(props);
  }

  redirect = (path) => {
    if(this.props.active != path){
      window.location.href = `/file/${path}/${this.props.id}`;
    }
  }

  render() {

    return (
      <Wrapper>
        <ol>
          <li onClick={e => this.redirect('summary')} className={(this.props.active === 'summary' ? 'active' : '')} >Resumen</li>
          <li onClick={e => this.redirect('detail')}className={(this.props.active === 'detail' ? 'active' : '')}>Detalles</li>
          <li onClick={e => this.redirect('multimedia')}className={(this.props.active === 'multimedia' ? 'active' : '')}>Multimedia</li>
          <li onClick={e => this.redirect('eeee')} className={(this.props.active === 'maps' ? 'active' : '')}>Mapas</li>
          <li className={(this.props.active === 'community' ? 'active' : '')}>Comunidad</li>
          <li className={(this.props.active === 'literature' ? 'active' : '')}>Literatura</li>
          <li className={(this.props.active === 'data' ? 'active' : '')}>Datos</li>
        </ol>
      </Wrapper>
    )
  }
}

export default MenuHorizontal;
