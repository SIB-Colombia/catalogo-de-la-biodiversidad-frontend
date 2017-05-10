import React, {PropTypes} from 'react';
import {PageTemplate, Header, Footer, LoginSignup} from 'components';

class LoginSignupPage extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  componentWillMount() {}

  render() {
    return (
      <PageTemplate header={< Header />} footer={< Footer />} wallpaper='Login'>
        <LoginSignup/>
      </PageTemplate>
    )
  }
}

export default LoginSignupPage;
