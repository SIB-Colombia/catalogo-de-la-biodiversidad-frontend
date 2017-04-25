import React, {PropTypes} from 'react';
import config from '../../config';

import {PageTemplate, Header, Footer} from 'components';

class FilePage extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {}

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <PageTemplate header={< Header />} footer={< Footer />}>
        {this.props.children}
      </PageTemplate>
    )
  }
}

export default FilePage;
