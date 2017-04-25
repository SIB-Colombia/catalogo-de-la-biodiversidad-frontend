import React, {PropTypes} from 'react';
import config from '../../config';
// import fetch from 'isomorphic-fetch';

import {PageTemplate, Header, Footer, StaticAbout} from 'components';

class StaticPage extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  componentWillMount() {}

  render() {
    return (
      <PageTemplate header={< Header />} footer={< Footer />}>
        <StaticAbout/>
      </PageTemplate>
    )
  }
}

export default StaticPage;
