import React, {PropTypes} from 'react';
import {PageTemplate, Header, Footer} from 'components';

class AdminPage extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  componentWillMount() {
  }

  render() {
    return (
      <PageTemplate header={< Header />} footer={< Footer />}  wallpaper=''>
        hi admin, show statistics
      </PageTemplate>
    )
  }
}

export default AdminPage;
