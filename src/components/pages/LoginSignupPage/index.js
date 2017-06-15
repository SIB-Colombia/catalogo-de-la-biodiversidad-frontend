import React, {PropTypes} from 'react';
import {
  Link,
  PageTemplate,
  Header,
  Footer,
  LoginSignup,
  TitleSection
} from 'components';
import {signup} from '../../../auth';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class LoginSignupPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      lastname: '',
      username: '',
      email: '',
      password: '',
      verify: '',
      error: '',
      register: false
    }
  }

  componentDidMount() {}

  componentWillMount() {}

  register() {
    signup(this.state).then(data => {

      console.log('ddddfff',data);
      if (data.created) {
        this.setState({
          name: '',
          lastname: '',
          username: '',
          email: '',
          password: '',
          verify: '',
          error: '',
          register: true
        });
      } else {
        this.setState({error: data.error});
      }
    });
  }

  update(event) {
    var key = event.target.getAttribute("name");
    var obj = {};
    obj[key] = event.target.value;
    this.setState(obj);
    this.setState({error: ''});
    // if (this.state.pass != this.state.passverify) {
    //   this.setState({error: 'Las contraseñas no coinciden!'});
    // }else {
    //   this.setState({error: ''});
    // }
  }

  handleOpen = () => {
    this.setState({register: false});
  };

  handleClose = () => {
    this.setState({register: false});
  };

  render() {

    const actions = [ < FlatButton label = "Cancelar" primary = {
        true
      }
      onTouchTap = {
        this.handleClose
      } />, < Link to = {
        '/login/signin'
      } > < FlatButton label = "Iniciar Sesión" className = "btn-secondary" onTouchTap = {
        this.handleClose
      } />< /Link>
    ];
    return (
      <PageTemplate header={< Header / >
    }
    footer = { < Footer />
    }
    wallpaper = 'Login' > <Dialog actions={actions} modal={false} open={this.state.register} onRequestClose={this.handleClose}>
      <TitleSection align="center" color="basescale-2" size="sm">Registrado correctamente!</TitleSection>
      <TitleSection align="center" color="grayscale-5 padding-top-2">Ahora puede iniciar sesión</TitleSection>
    </Dialog> < LoginSignup form = {
      this.state
    }
    update = {
      (e) => this.update(e)
    }
    trigger = {
      () => this.register()
    } /> </PageTemplate>)
  }
}

export default LoginSignupPage;
