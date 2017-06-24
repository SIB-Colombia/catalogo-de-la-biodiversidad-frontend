import React from 'react';
import styled from 'styled-components';
import {Grid, Row, Col} from 'react-flexbox-grid';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import Checkbox from 'material-ui/Checkbox';
import Subheader from 'material-ui/Subheader';
import DatePicker from 'material-ui/DatePicker';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

const Wrapper = styled.div `
.box-search{
  margin-top: 8px;
}
`

class HeaderSearchAdvance extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      files: 1,
      search: 1,
      biologicalGroup: 1,
      departments: 1,
      ecosystem: 1,
      stateThreat: 1,
      range: 1,
      orderBy: 1,
      license: 1
    };

  }

  handleChange = (event, index, value) => {

    this.setState({value});
  };

  render() {
    const items = [];
    for (let i = 0; i < 10; i++) {
      items.push(<MenuItem value={i} key={i} primaryText={`Fichas ${i}`}/>);
    }

    return (
      <Wrapper>
        <Row>
          <Col xs={12} sm={3} md={3} lg={3}>
            <Subheader><strong>Taxonomía</strong></Subheader>
            
            <Subheader>Reino</Subheader>
            <Checkbox label="Reino"/>
            <Checkbox label="Animales"/>
            <Checkbox label="Plantas"/>
            <Checkbox label="Hongos"/>
            <Checkbox label="Bacterias"/>
            <Checkbox label="Arquea"/>

            <Subheader>Grupos de Animales</Subheader>
            <Checkbox label="Mamíferos"/>
            <Checkbox label="Aves"/>
            <Checkbox label="Reptiles"/>
            <Checkbox label="Anfibios"/>
            <Checkbox label="Peces"/>
            <Checkbox label="Insectos"/>
            <Checkbox label="Escarabajos"/>
            <Checkbox label="Mariposas"/>
            <Checkbox label="Hormigas"/>
            <Checkbox label="Abejas"/>
            <Checkbox label="Moscas y zancudos"/>
            <Checkbox label="Arácnidos"/>
            <Checkbox label="Moluscos"/>
            <Checkbox label="Decápodos"/>
            <Checkbox label="Equinodermos"/>
            <Checkbox label="Esponjas"/>
            <Checkbox label="Corales y afines"/>
           
          </Col>
          <Col xs={12} sm={3} md={3} lg={3}>
            
            <Subheader><strong>Taxonomía</strong></Subheader>

            <Subheader>Grupos de Plantas</Subheader>
            <Checkbox label="Orquídeas"/>
            <Checkbox label="Magnolias y afines"/>
            <Checkbox label="Palmas"/>
            <Checkbox label="Frailejones"/>
            <Checkbox label="Cactus"/>
            <Checkbox label="Bromelias, labiadas y pasifloras"/>
            <Checkbox label="Fanerógamas"/>
            <Checkbox label="Helechos y afines"/>
            <Checkbox label="Zamias"/>
            <Checkbox label="Musgos y afines"/>
            
            <hr/>
            <Subheader><strong>Multimedia</strong></Subheader>

            <Checkbox label="Con Imágenes"/>
            <Checkbox label="Sin imágenes"/>
            <Checkbox label="Con videos"/>
            <Checkbox label="Sin Videos"/>
            <Checkbox label="Con sonidos"/>
            <Checkbox label="Sin sonidos"/>
          </Col>
          <Col xs={12} sm={3} md={3} lg={3}>
            <Subheader><strong>Departamento</strong></Subheader>
            <Checkbox label="Amazonas"/>
            <Checkbox label="Antioquia"/>
            <Checkbox label="Arauca"/>
            <Checkbox label="Archipiélago de San Andrés, Providencia y Santa Catalina"/>
            <Checkbox label="Atlántico"/>
            <Checkbox label="Bogotá, D.C."/>
            <Checkbox label="Bolívar"/>
            <Checkbox label="Boyacá"/>
            <Checkbox label="Caldas"/>
            <Checkbox label="Caquetá"/>
            <Checkbox label="Casanare"/>
            <Checkbox label="Cauca"/>
            <Checkbox label="Cesar"/>
            <Checkbox label="Chocó"/>
            <Checkbox label="Córdoba"/>
            <Checkbox label="Cundinamarca"/>
            <Checkbox label="Guainía"/>
            <Checkbox label="Guaviare"/>
            <Checkbox label="Huila"/>
            <Checkbox label="La Guajira"/>
            <Checkbox label="Magdalena"/>
            <Checkbox label="Meta"/>
            <Checkbox label="Nariño"/>
            <Checkbox label="Norte de Santander"/>
            <Checkbox label="Putumayo"/>
            <Checkbox label="Quindío"/>
            <Checkbox label="Risaralda"/>
            <Checkbox label="Santander"/>
            <Checkbox label="Sucre"/>
            <Checkbox label="Tolima"/>
            <Checkbox label="Valle del Cauca"/>
            <Checkbox label="Vaupés"/>
            <Checkbox label="Vichada"/>
          </Col>
          
          <Col xs={12} sm={3} md={3} lg={3}>
            <Subheader><strong>Temática</strong></Subheader>
            
            <Subheader>Categorías de Amenaza Global</Subheader>
            <Checkbox label="Especies Amenazadas"/>
            <Checkbox label="No evaluado (NE)"/>
            <Checkbox label="Datos insuficientes (DE)"/>
            <Checkbox label="Preocupación menor (LC)"/>
            <Checkbox label="Casi amenazado (NT)"/>
            <Checkbox label="Vulnerable (VU)"/>
            <Checkbox label="En peligro (EN)"/>
            <Checkbox label="En peligro crítico (CR)"/>
            <Checkbox label="Extinto en estado silvestre (EW)"/>
            <Checkbox label="Extinto (EX)"/>
           
            <Subheader>Comercio Internacional</Subheader>
            <Checkbox label="Especies reportadas en CITES"/>
            <Checkbox label="Apéndice I"/>
            <Checkbox label="Apéndice II"/>
            <Checkbox label="Apéndice III"/>
 
            <Subheader>Invasoras</Subheader>
            <Checkbox label="Especies Invasoras"/>
          </Col>
          
        </Row>
      </Wrapper>
    )
  }
}

export default HeaderSearchAdvance
