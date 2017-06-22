import React, {PropTypes} from 'react';
import {PageTemplate, Header, Footer, LoginRecover} from 'components';

class LoginSignupPage extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  componentWillMount() {
  }

  render() {
    return (
      <PageTemplate header={< Header />} footer={< Footer />}  wallpaper='Login'>
        <LoginRecover/>
      </PageTemplate>
    )
  }
}

export default LoginSignupPage;
