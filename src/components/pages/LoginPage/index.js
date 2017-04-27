import React, {PropTypes} from 'react';

import {PageTemplate, Header, Footer} from 'components';

class LoginPage extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  componentWillMount() {}

  render() {
    return (
      <PageTemplate header={< Header />} footer={< Footer />}>
        {this.props.children}
      </PageTemplate>
    )
  }
}

export default LoginPage;
