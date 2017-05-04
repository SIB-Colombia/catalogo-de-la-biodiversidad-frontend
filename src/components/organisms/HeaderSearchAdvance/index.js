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
      value: 1
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

        <Row className="box-search">
          <Col xs={12} sm={12} md={12} lg={2}>
            <SelectField fullWidth={true} value={this.state.value} onChange={this.handleChange} maxHeight={200}>
              {items}
            </SelectField>
          </Col>
          <Col xs={12} sm={12} md={12} lg={10}>
            <TextField hintText="Buscar..." fullWidth={true}/>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6} md={3} lg={3}>
            <SelectField fullWidth={true} floatingLabelText="Grupo biológico" value={this.state.value} onChange={this.handleChange}>
              <MenuItem value={1} primaryText="Opción 1"/>
              <MenuItem value={2} primaryText="Opción 2"/>
            </SelectField>
          </Col>
          <Col xs={12} sm={6} md={3} lg={3}>
            <SelectField fullWidth={true} floatingLabelText="Departamentos" value={this.state.value} onChange={this.handleChange}>
              <MenuItem value={1} primaryText="Opción 1"/>
              <MenuItem value={2} primaryText="Opción 2"/>
            </SelectField>
          </Col>
          <Col xs={12} sm={6} md={3} lg={3}>
            <SelectField fullWidth={true} floatingLabelText="Ecosistema" value={this.state.value} onChange={this.handleChange}>
              <MenuItem value={1} primaryText="Opción 1"/>
              <MenuItem value={2} primaryText="Opción 2"/>
            </SelectField>
          </Col>
          <Col xs={12} sm={6} md={3} lg={3}>
            <SelectField fullWidth={true} floatingLabelText="Estado de amenaza" value={this.state.value} onChange={this.handleChange}>
              <MenuItem value={1} primaryText="Opción 1"/>
              <MenuItem value={2} primaryText="Opción 2"/>
            </SelectField>
          </Col>
        </Row>
        <br/>
        <Row>
          <Subheader>Mostrar</Subheader>
          <Col xs={12} sm={6} md={6} lg={6}>
            <Checkbox label="Salvaje"/>
            <Checkbox label="En cautividad"/>
            <Checkbox label="Verificable"/>
            <Checkbox label="Grado de investigación"/>
            <Checkbox label="Necesita identificador"/>
          </Col>
          <Col xs={12} sm={6} md={6} lg={6}>
            <Checkbox label="Amenazado"/>
            <Checkbox label="Introducida"/>
            <Checkbox label="Popular"/>
            <Checkbox label="Tiene sonidos"/>
            <Checkbox label="Tiene Fotos"/>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6} md={6} lg={6}>
            <Subheader>Revisada</Subheader>
            <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
              <RadioButton value="indiferente" label="Cualquiera"/>
              <RadioButton value="si" label="Sí"/>
              <RadioButton value="no" label="No"/>
            </RadioButtonGroup>
            <br/>
            <SelectField fullWidth={true} floatingLabelText="Rango" value={this.state.value} onChange={this.handleChange}>
              <MenuItem value={1} primaryText="Opción 1"/>
              <MenuItem value={2} primaryText="Opción 2"/>
            </SelectField>
            <SelectField fullWidth={true} floatingLabelText="Ordenado por" value={this.state.value} onChange={this.handleChange}>
              <MenuItem value={1} primaryText="Opción 1"/>
              <MenuItem value={2} primaryText="Opción 2"/>
            </SelectField>
          </Col>
          <Col xs={12} sm={6} md={6} lg={6}>
            <TextField floatingLabelText="Persona" fullWidth={true}/>
            <TextField floatingLabelText="Proyecto" fullWidth={true}/>
            <DatePicker floatingLabelText="Fecha observación" mode="landscape" fullWidth={true}/>
            <SelectField fullWidth={true} floatingLabelText="Licencia" value={this.state.value} onChange={this.handleChange}>
              <MenuItem value={1} primaryText="Opción 1"/>
              <MenuItem value={2} primaryText="Opción 2"/>
            </SelectField>
          </Col>

        </Row>
      </Wrapper>
    )
  }
}

export default HeaderSearchAdvance
