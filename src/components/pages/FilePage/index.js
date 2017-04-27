import React, {PropTypes} from 'react';

import {PageTemplate, Header, Footer} from 'components';

class FilePage extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {}

  componentDidMount() {

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
