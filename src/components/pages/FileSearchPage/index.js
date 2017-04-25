import React, {PropTypes} from 'react';
import config from '../../config';
import fetch from 'isomorphic-fetch';
import RaisedButton from 'material-ui/RaisedButton';

import {PageTemplate, Header, Footer, FileSearchMenu, FileSearchResult} from 'components';

class FileSearchPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      files: []
    }
  }

  componentDidMount() {}

  componentWillMount() {

    // fetch(`${config.server}/api/hello/home`, config.http).then((response) => {
    //   return response.json()
    // }).then((data) => {
    //   this.setState({files: data})
    // })

    this.setState({files: config.demo})

  }

  render() {

    return (
      <PageTemplate header={< Header />} footer={< Footer />}>
        <FileSearchMenu/> {this.state.files.length > 0 && <FileSearchResult data={this.state.files}/>}
      </PageTemplate>
    )
  }
}

export default FileSearchPage;
