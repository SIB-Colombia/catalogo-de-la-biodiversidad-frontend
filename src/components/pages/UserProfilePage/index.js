import React from 'react';
import {PageTemplate, Header, Footer, UserProfile} from 'components';

import {isAuthenticated} from '../../../auth';
// import * as FileService from '../../../services/FileService';

class UserProfilePage extends React.Component {

  constructor(props) {
    super(props);

  }
  componentDidMount() {}

  componentWillMount() {}

  render() {

    return (
      <PageTemplate header={< Header />} footer={< Footer />}>
        <UserProfile data={isAuthenticated()}/>
      </PageTemplate>
    )
  }
}

export default UserProfilePage;
