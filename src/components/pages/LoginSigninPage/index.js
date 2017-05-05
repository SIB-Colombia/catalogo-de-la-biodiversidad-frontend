import React, {PropTypes} from 'react';
import {injectGlobal} from 'styled-components';
import {PageTemplate, Header, Footer, LoginSignin} from 'components';

class LoginSigninPage extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  componentWillMount() {
    injectGlobal `
      body{
        background-image: url(/background/23890_orig.jpg);
        background-size: cover;
        background-position: center center;
        background-attachment:fixed;
      }
    `;
  }

  render() {
    return (
      <PageTemplate header={< Header />} footer={< Footer />}>
        <LoginSignin/>
      </PageTemplate>
    )
  }
}

export default LoginSigninPage;