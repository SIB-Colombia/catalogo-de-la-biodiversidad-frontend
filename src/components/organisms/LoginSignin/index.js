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

class LoginSignin extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrapper>
        <Grid>
          <Row>
            <Col xs={10} sm={6} md={4} lg={4} lgOffset={4} mdOffset={4} smOffset={3} xsOffset={1}>
              <Paper zDepth={1} className="login-content animated fadeIn">
                <IconLink to="/" icon="catalogo" className="brand-logo"></IconLink>
                {/* <h3>Bienvenido al Catálogo de la Biodiversidad de Colombia</h3> */}
                <TitleSection align='center' color='grayscale-6'>Bienvenido al Catálogo de la Biodiversidad de Colombia</TitleSection>
                <TextField name='username' hintText="Escriba aquí su nombre usuario" floatingLabelText="Nombre de usuario" value={this.props.form.username} onChange={this.props.update} fullWidth={true}/>
                <TextField name='password' hintText="Escriba aquí su contraseña" floatingLabelText="Contraseña" type="password" value={this.props.form.password} onChange={this.props.update} fullWidth={true}/>
                <br/>
                <TitleSection align='center' color='basescale-7' size="xxs" >{this.props.form.error}</TitleSection>
                <br/>
                <RaisedButton label="Ingresar" primary={true} fullWidth={true} className="btn-secondary-modal" onClick={this.props.trigger}/>
                <br/>
                <br/>
                <Link to="/login/signup" className="grey-text text-darken-2" activeClassName="active">
                  <FlatButton label="Registrarse"/>
                </Link>
                <Link to="/login/recover" className="grey-text text-darken-2" activeClassName="active">
                  <FlatButton label="Olvidé mis datos"/>
                </Link>
              </Paper>
            </Col>
          </Row>
        </Grid>
      </Wrapper>
    )
  }
}

export default LoginSignin;
