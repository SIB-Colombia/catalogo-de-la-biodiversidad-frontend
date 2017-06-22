import React from 'react';
import {PageTemplate, Header, Footer, UserProfile} from 'components';

// import {isAuthenticated, getUser} from '../../../auth';
// import * as FileService from '../../../services/FileService';

class UserProfilePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null
    }
  }
  componentDidMount() {}

  componentWillMount() {}

  render() {

    return (
      <PageTemplate header={< Header />} footer={< Footer />} wallpaper={'profile'}>
        <UserProfile/>
      </PageTemplate>
    )
  }
}

export default UserProfilePage;
