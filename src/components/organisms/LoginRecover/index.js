import React, {PropTypes} from 'react'
import styled from 'styled-components'
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {Grid, Row, Col} from 'react-flexbox-grid';
import {IconLink, Link} from 'components';

const Wrapper = styled.div `

text-align: center;
padding: 40px 0px;

h3{
  margin: 0;
  color:#333;
  font-weight: lighter;
}
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

class LoginRecover extends React.Component {

  render() {
    return (
      <Wrapper>
        <Grid>
          <Row>
            <Col xs={10} sm={6} md={4} lg={4} lgOffset={4} mdOffset={4} smOffset={3} xsOffset={1}>
              <Paper zDepth={1} className="login-content animated fadeIn">
                <IconLink to="/" icon="catalogo" className="brand-logo"></IconLink>
                <h3>Recuperar contraseña</h3>
                <TextField hintText="Ingrese aquí su correo electrónico" type="email" floatingLabelText="Ingrese su correo electrónico" fullWidth={true}/>
                <br/>
                <br/>
                <RaisedButton label="Aceptar" primary={true} fullWidth={true} className="btn-secondary-modal"/>
              </Paper>
            </Col>
          </Row>
        </Grid>
      </Wrapper>
    )
  }
}

export default LoginRecover;
