import React, {PropTypes} from 'react'
import styled from 'styled-components'
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {Grid, Row, Col} from 'react-flexbox-grid';
import {IconLink, Link, TitleSection} from 'components'

const Wrapper = styled.div `

text-align: center;
padding: 40px 0px;

.brand-logo{
  font-size: 10em;
}
.login-content{
  padding: 20px;
  height: 100%;
}
.po{
  height: 100% !important;
}
`

class LoginSignup extends React.Component {

  render() {
    return (
      <Wrapper>
        <Grid>
          <Row>
            <Col xs={10} sm={6} md={4} lg={4} lgOffset={4} mdOffset={4} smOffset={3} xsOffset={1}>
              <Paper zDepth={1} className="login-content animated fadeIn">
                <IconLink to="/" icon="catalogo" className="brand-logo"></IconLink>
                <TitleSection align='center' color='grayscale-6'>Formulario de registro</TitleSection>
                <TextField name='name' value={this.props.form.name} onChange={this.props.update} hintText="Escriba aquí su nombre" floatingLabelText="Nombre" fullWidth={true}/>
                <TextField name='lastname' value={this.props.form.lastname} onChange={this.props.update} hintText="Escriba aquí su apellido" floatingLabelText="Apellido" fullWidth={true}/>
                <TextField name='username' value={this.props.form.username} onChange={this.props.update} hintText="Escriba aquí su nombre usuario" floatingLabelText="Nombre de usuario" fullWidth={true}/>
                <TextField name='email' value={this.props.form.email} onChange={this.props.update} hintText="Escriba aquí su correo" floatingLabelText="Correo electrónico" fullWidth={true}/>
                <TextField name='password' value={this.props.form.password} onChange={this.props.update} hintText="Escriba aquí su contraseña" floatingLabelText="Contraseña" type="password" fullWidth={true}/>
                <TextField name='verify' value={this.props.form.verify} onChange={this.props.update} hintText="Escriba aquí nuevamente su contraseña" floatingLabelText="Verificar contraseña" type="password" fullWidth={true}/>
                <br/>
                <TitleSection align='center' color='basescale-7' size="xxs">{this.props.form.error}</TitleSection>
                <br/>
                <RaisedButton label="Crear Cuenta" primary={true} fullWidth={true} className="btn-secondary-modal" onClick={this.props.trigger}/>
              </Paper>
            </Col>
          </Row>
        </Grid>
      </Wrapper>
    )
  }
}

export default LoginSignup;
