import React, {PropTypes} from 'react';
import {PageTemplate, Header, Footer, LoginSignin} from 'components';
import Snackbar from 'material-ui/Snackbar';
import {signin} from '../../../auth';

class LoginSigninPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      error: ''
    }
  }

  componentDidMount() {}

  componentWillMount() {}

  login() {
    signin(this.state).then(data => {
      if (data.token) {
        window.location.href = '/';
      } else {
        this.setState({error: data.message});
      }
    });
  }

  update(event) {
    var key = event.target.getAttribute("name");
    var obj = {};
    obj[key] = event.target.value;
    this.setState(obj);
    this.setState({error: ''});
  }

  render() {
    return (
      <PageTemplate header={< Header />} footer={< Footer />} wallpaper='Login'>
        <LoginSignin form={this.state} update={(e) => this.update(e)} trigger={() => this.login()}/>
      </PageTemplate>
    )
  }
}

export default LoginSigninPage;
