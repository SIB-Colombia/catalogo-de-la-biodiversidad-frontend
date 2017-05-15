import React, {PropTypes} from 'react'
import styled from 'styled-components'
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import {Grid, Row, Col} from 'react-flexbox-grid';
import {IconLink, Link, FileHeader, TitleSection} from 'components'
import DatePicker from 'material-ui/DatePicker';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';

const Wrapper = styled.div `
.paper{
  margin-top: 5vh;
  .img-profile{
    border-radius: 100%;
    width: 100%;
    max-width: 250px;
    padding: 20px;
  }
}
.file{
  cursor: pointer;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  opacity: 0;
}
.cover-file{
   vertical-align: middle;
}
`

class UserProfile extends React.Component {

  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {

    return (
      <Wrapper>
        <Grid>
          <Row>
            <Col xs={12} sm={12} lg={6} lgOffset={3}>
              <Paper className="paper paper-padding-1">
                <TitleSection color='basescale-1' size='sm' >{this.props.data.name} {this.props.data.lastname}</TitleSection>
                <Row>
                  <Col xs={12} lg={12} className="align-center">
                    <img src={this.props.data.photo || '/avatar3.png'} className="img-profile"/>
                    <br/>
                    <FlatButton label="Cambiar imagen" labelPosition="before" className='cover-file' containerElement="label">
                      <input type="file" className='file'/>
                    </FlatButton>
                  </Col>
                  <Col xs={12} lg={6} >
                    <TextField name='name' value={this.props.data.name} onChange={this.props.update} hintText="Escriba aquí su nombre" floatingLabelText="Nombre" fullWidth={true}/>
                    <TextField name='username' value={this.props.data.username} onChange={this.props.update} hintText="Escriba aquí su nombre" floatingLabelText="Nombre de usuario" fullWidth={true}/>
                    {/* <DatePicker name='date' hintText="Landscape Dialog" mode="landscape"/> */}
                    <TextField name='phone' value='' onChange={this.props.update} hintText="Escriba aquí su nombre" floatingLabelText="Fecha nacimiento" fullWidth={true}/>
                    <TextField name='phone' value='' onChange={this.props.update} hintText="Escriba aquí su nombre" floatingLabelText="Teléfono de contacto" fullWidth={true}/>
                  </Col>
                  <Col xs={12} lg={6}>
                    <TextField name='lastname' value={this.props.data.lastname} onChange={this.props.update} hintText="Escriba aquí su nombre" floatingLabelText="Apellidos" fullWidth={true}/>
                    <TextField name='email' value={this.props.data.email} onChange={this.props.update} hintText="Escriba aquí su nombre" floatingLabelText="Correo electrónico" fullWidth={true}/>
                    <SelectField floatingLabelText="Género" value='1'>
                      <MenuItem value={1} primaryText="Hombre"/>
                      <MenuItem value={2} primaryText="Mujer"/>
                      <MenuItem value={3} primaryText="Otro"/>
                    </SelectField>
                    <TextField name='mobile' value='' onChange={this.props.update} hintText="Escriba aquí su nombre" floatingLabelText="Teléfono móvil" fullWidth={true}/>
                  </Col>
                  <Col xs={12} lg={12} className="align-center padding-top-3 padding-bottom-3">
                    <RaisedButton label="Guardar" className="btn-secondary-modal"/>
                  </Col>
                </Row>
              </Paper>
            </Col>
          </Row>
        </Grid>
      </Wrapper>
    )
  }
}

export default UserProfile;
