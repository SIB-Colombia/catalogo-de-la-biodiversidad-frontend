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
            <Checkbox label="Animales" name="kingdom" value="Animalia"/>
            <Checkbox label="Plantas" name="kingdom" value="Plantae"/>
            <Checkbox label="Hongos" name="kingdom" value="Fungi"/>
            <Checkbox label="Bacterias" name="kingdom" value="Bacteria"/>
            <Checkbox label="Arquea" name="kingdom" value="Archaea"/>

            <Subheader>Grupos de Animales</Subheader>
            <Checkbox label="Mamíferos" name="class" value="Mammalia"/>
            <Checkbox label="Aves" name="class" value="Aves"/>
            <Checkbox label="Reptiles" name="class" value="Reptilia"/>
            <Checkbox label="Anfibios" name="class" value="Amphibia"/>
            <Checkbox label="Peces" name="class" value="Actinopterygii, Sarcopterygii, Elasmobranchii, Chondrichthyes"/>
            <Checkbox label="Insectos" name="class" value="Insecta"/>
            <Checkbox label="Escarabajos" name="order" value="Coleoptera"/>
            <Checkbox label="Mariposas" name="order" value="Lepidoptera"/>
            <Checkbox label="Hormigas" name="family" value="Formicidae"/>
            <Checkbox label="Abejas" name="family" value="Apidae, Colletidae, Halictidae"/>
            <Checkbox label="Moscas y zancudos" name="order" value="Diptera"/>
            <Checkbox label="Arácnidos" name="class" value="Arachnida"/>
            <Checkbox label="Moluscos" name="phylum" value="Mollusca"/>
            <Checkbox label="Decápodos" name="order" value="Decapoda"/>
            <Checkbox label="Equinodermos" name="phylum" value="Echinodermata"/>
            <Checkbox label="Esponjas" name="phylum" value="Porifera"/>
            <Checkbox label="Corales y afines" name="class" value="Anthozoa, Hydrozoa"/>
          </Col>
          <Col xs={12} sm={3} md={3} lg={3}>
            
            <Subheader><strong>Taxonomía</strong></Subheader>

            <Subheader>Grupos de Plantas</Subheader>
            <Checkbox label="Orquídeas" name="family" value="Orchidaceae"/>
            <Checkbox label="Magnolias y afines" name="family" value="Magnoliaceae, Podocarpaceae, Myristicaceae"/>
            <Checkbox label="Palmas" name="family" value="Arecaceae"/>
            <Checkbox label="Frailejones" name="genus" value="Carramboa, Coespeletia, Espeletia,Espeletiopsis, Libanothamnus, Paramiflos, Ruilopezia,Tamania"/>
            <Checkbox label="Cactus" name="family" value="Cactaceae"/>
            <Checkbox label="Bromelias, labiadas y pasifloras" name="family" value="Bromeliaceae, Labiatae, Passifloraceae"/>
            <Checkbox label="Fanerógamas" name="family" value="Chrysobalanaceae,Dichapetalaceae,Lecythidaceae"/>
            <Checkbox label="Helechos y afines" name="class" value="Polypodiopsida, Lycopodiopsida, Equisetopsida, Psilotopsida, Marattiopsida"/>
            <Checkbox label="Zamias" name="family" value="Zamiaceae"/>
            <Checkbox label="Musgos y afines" name="phylum" value="Bryophyta,Hepaticophyta,Anthocerophyta,Marchantiophyta"/>
      
            <hr/>
            <Subheader><strong>Multimedia</strong></Subheader>
 
            <Checkbox label="Con Imágenes" name="Image" value="TRUE"/>
            <Checkbox label="Sin imágenes" name="Image" value="FALSE"/>
            <Checkbox label="Con videos" name="MovingImage" value="TRUE"/>
            <Checkbox label="Sin Videos" name="MovingImage" value="FALSE"/>
            <Checkbox label="Con sonidos" name="Sound" value="TRUE"/>
            <Checkbox label="Sin sonidos" name="Sound" value="FALSE"/>
          </Col>
          <Col xs={12} sm={3} md={3} lg={3}>
            <Subheader><strong>Departamento</strong></Subheader>
            <Checkbox label="Amazonas"  name="stateProvinceAtomized" value="Amazonas"/>
            <Checkbox label="Antioquia"  name="stateProvinceAtomized" value="Antioquia"/>
            <Checkbox label="Arauca"  name="stateProvinceAtomized" value="Arauca"/>
            <Checkbox label="Archipiélago de San Andrés, Providencia y Santa Catalina"  name="stateProvinceAtomized" value="Archipiélago de San Andrés, Providencia y Santa Catalina"/>
            <Checkbox label="Atlántico"  name="stateProvinceAtomized" value="Atlántico"/>
            <Checkbox label="Bogotá, D.C."  name="stateProvinceAtomized" value="Bogotá, D.C."/>
            <Checkbox label="Bolívar"  name="stateProvinceAtomized" value="Bolívar"/>
            <Checkbox label="Boyacá"  name="stateProvinceAtomized" value="Boyacá"/>
            <Checkbox label="Caldas"  name="stateProvinceAtomized" value="Caldas"/>
            <Checkbox label="Caquetá"  name="stateProvinceAtomized" value="Caquetá"/>
            <Checkbox label="Casanare"  name="stateProvinceAtomized" value="Casanare"/>
            <Checkbox label="Cauca"  name="stateProvinceAtomized" value="Cauca"/>
            <Checkbox label="Cesar"  name="stateProvinceAtomized" value="Cesar"/>
            <Checkbox label="Chocó"  name="stateProvinceAtomized" value="Chocó"/>
            <Checkbox label="Córdoba"  name="stateProvinceAtomized" value="Córdoba"/>
            <Checkbox label="Cundinamarca"  name="stateProvinceAtomized" value="Cundinamarca"/>
            <Checkbox label="Guainía"  name="stateProvinceAtomized" value="Guainía"/>
            <Checkbox label="Guaviare"  name="stateProvinceAtomized" value="Guaviare"/>
            <Checkbox label="Huila"  name="stateProvinceAtomized" value="Huila"/>
            <Checkbox label="La Guajira"  name="stateProvinceAtomized" value="La Guajira"/>
            <Checkbox label="Magdalena"  name="stateProvinceAtomized" value="Magdalena"/>
            <Checkbox label="Meta"  name="stateProvinceAtomized" value="Meta"/>
            <Checkbox label="Nariño"  name="stateProvinceAtomized" value="Nariño"/>
            <Checkbox label="Norte de Santander"  name="stateProvinceAtomized" value="Norte de Santander"/>
            <Checkbox label="Putumayo"  name="stateProvinceAtomized" value="Putumayo"/>
            <Checkbox label="Quindío"  name="stateProvinceAtomized" value="Quindío"/>
            <Checkbox label="Risaralda"  name="stateProvinceAtomized" value="Risaralda"/>
            <Checkbox label="Santander"  name="stateProvinceAtomized" value="Santander"/>
            <Checkbox label="Sucre"  name="stateProvinceAtomized" value="Sucre"/>
            <Checkbox label="Tolima"  name="stateProvinceAtomized" value="Tolima"/>
            <Checkbox label="Valle del Cauca"  name="stateProvinceAtomized" value="Valle del Cauca"/>
            <Checkbox label="Vaupés"  name="stateProvinceAtomized" value="Vaupés"/>
            <Checkbox label="Vichada"  name="stateProvinceAtomized" value="Vichada"/>
          </Col>
          
          <Col xs={12} sm={3} md={3} lg={3}>
            <Subheader><strong>Temática</strong></Subheader>
            
            <Subheader>Categorías de Amenaza Global</Subheader>
            <Checkbox label="Especies Amenazadas" name="ThreatCategory" value="En Peligro crítico (CR) OR En Peligro (EN) OR Vulnerable (VU)"/>
            <Checkbox label="No evaluado (NE)" name="ThreatCategory" value="No evaluado (NE)"/>
            <Checkbox label="Datos insuficientes (DE)" name="ThreatCategory" value="Datos insuficientes (DE)"/>
            <Checkbox label="Preocupación menor (LC)" name="ThreatCategory" value="Preocupación menor (LC)"/>
            <Checkbox label="Casi amenazado (NT)" name="ThreatCategory" value="Casi amenazado (NT)"/>
            <Checkbox label="Vulnerable (VU)" name="ThreatCategory" value="Vulnerable (VU)"/>
            <Checkbox label="En peligro (EN)" name="ThreatCategory" value="En peligro (EN)"/>
            <Checkbox label="En peligro crítico (CR)" name="ThreatCategory" value="En peligro crítico (CR)"/>
            <Checkbox label="Extinto en estado silvestre (EW)" name="ThreatCategory" value="Extinto en estado silvestre (EW)"/>
            <Checkbox label="Extinto (EX)" name="ThreatCategory" value="Extinto (EX)"/>
       
            <Subheader>Comercio Internacional</Subheader>
            <Checkbox label="Especies reportadas en CITES" name="ApendixCITES" value="Apéndice I, Apéndice II, Apéndice III"/>
            <Checkbox label="Apéndice I" name="ApendixCITES" value="Apéndice I"/>
            <Checkbox label="Apéndice II" name="ApendixCITES" value="Apéndice II"/>
            <Checkbox label="Apéndice III" name="ApendixCITES" value="Apéndice III"/>

            <Subheader>Invasoras</Subheader>
            <Checkbox label="Especies Invasoras" name="Invasiveness" value="TRUE"/>
          </Col>
          
        </Row>
      </Wrapper>
    )
  }
}

export default HeaderSearchAdvance
