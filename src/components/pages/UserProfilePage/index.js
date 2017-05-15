import React from 'react';
import {PageTemplate, Header, Footer, UserProfile} from 'components';

import {isAuthenticated} from '../../../auth';
// import * as FileService from '../../../services/FileService';

class UserProfilePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null
    }
  }
  componentDidMount() {}

  componentWillMount() {
    isAuthenticated().then(user => {
      this.setState({user: user});
    })
  }

  render() {

    return (
      <PageTemplate header={< Header />} footer={< Footer />}>
        {this.state.user && <UserProfile data={this.state.user}/>}
      </PageTemplate>
    )
  }
}

export default UserProfilePage;
