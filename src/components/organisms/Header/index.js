import React from 'react'
import styled from 'styled-components'
import {
  Button,
  Card,
  Row,
  Col,
  Input,
  Icon,
  Modal
} from 'react-materialize';
import {
  IconLink,
  PrimaryNavigation,
  Link,
  ModalUI,
  SelectUI,
  Title
} from 'components'

const Wrapper = styled.nav `
position:fixed;
top:0%;
width:100%;
z-index: 99999;
.box-search {
	.row{
		margin-bottom:0px !important;
	}
	.material-icons{
		margin-top: 4px;
	}
}
.input-field input{
	padding-left:0px !important;
}
.modal{
	color:initial;
}
.input-advance{
	.input-field{
		border: 1px solid #e0e0e0;
		height: 45px;
		padding: 5px;
		line-height: 2;
	}
}
`

class Header extends React.Component {

  openAdvance = () => {
    $('#modalAdvance').modal('open');
  }

  render() {
    return (
      <Wrapper className="nav-wrapper grey lighten-5">
        <Row>
          <Col s={3}>
            <IconLink to="/" icon="catalogo" className="brand-logo">
              <Title/>
            </IconLink>
          </Col>
          <Col s={6} className="box-search grey lighten-3 hide-on-med-and-down">
            <Row>
              <Col s={1} className="grey-text text-darken-2 center-align">
                <Icon>
                  search
                </Icon>
              </Col>
              <Input s={10} label="Buscar..." className="grey-text text-darken-2"></Input>
              <Col s={1} className="grey-text text-darken-2 center-align">
                <span onClick={this.openAdvance}>
                  <Icon>
                    tune
                  </Icon>
                </span>
              </Col>
            </Row>
          </Col>
          <Col s={3}>
            <PrimaryNavigation reverse/>
          </Col>
        </Row>
        <ModalUI title="Búsqueda Avanzada" refe="modalAdvance">
          <Row>
            <Col l={12} s={12}>
              <Col l={2} s={12}>
                <SelectUI title="" hover="Fichas"/>
              </Col>
              <Col l={10} s={12} className="input-advance">
                <Input l={12} s={12} placeholder="Buscar..." className="grey-text text-darken-2"></Input>
              </Col>
            </Col>
            <Col l={3} s={12}>
              <SelectUI title="Grupo Biológico" hover="Seleccionar"/>
            </Col>
            <Col l={3} s={12}>
              <SelectUI title="Departamentos" hover="Seleccionar"/>
            </Col>
            <Col l={3} s={12}>
              <SelectUI title="Ecosistema" hover="Seleccionar"/>
            </Col>
            <Col l={3} s={12}>
              <SelectUI title="Estado Amenaza" hover="Seleccionar"/>
            </Col>
            <Col l={12} s={12} className="center-align">
              <a className="btn waves-effect waves-light cyan darken-3">Buscar</a>
            </Col>
          </Row>
        </ModalUI>
      </Wrapper>
    )
  }
}

export default Header
