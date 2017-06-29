import React, {PropTypes} from 'react';
import {PageTemplate, Header, Footer, AdminUser} from 'components';

class AdminUserPage extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  componentWillMount() {}

  render() {
    return (
      <PageTemplate header={< Header />} footer={< Footer />}  wallpaper=''>
        <AdminUser/>
      </PageTemplate>
    )
  }
}

export default AdminUserPage;
