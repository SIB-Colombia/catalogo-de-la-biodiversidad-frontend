import React, {PropTypes} from 'react';
import {PageTemplate, Header, Footer, LoginSignin} from 'components';

class LoginSigninPage extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  componentWillMount() {}

  render() {
    return (
      <PageTemplate header={< Header />} footer={< Footer />} wallpaper='Login'>
        <LoginSignin/>
      </PageTemplate>
    )
  }
}

export default LoginSigninPage;
