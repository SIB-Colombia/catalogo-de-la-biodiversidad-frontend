import React, {PropTypes} from 'react';
import fetch from 'isomorphic-fetch';
import RaisedButton from 'material-ui/RaisedButton';
import {PageTemplate, Header, Footer, FileSearchMenu, FileSearchResult} from 'components';

import * as FileService from '../../../services/FileService';

class FileSearchPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      files: []
    }
  }

  componentDidMount() {}

  componentWillMount() {

    FileService.getLastUpdatedRecords().then(data => {
      this.setState({files: data});
    }).catch(err => {
      console.log(err);
    })
  }

  render() {

    return (
      <PageTemplate header={< Header filter = { < FileSearchMenu />
      } />} footer={< Footer />}>
        {/* <FileSearchMenu/>  */}
        {this.state.files.length > 0 && <FileSearchResult data={this.state.files}/>}
      </PageTemplate>
    )
  }
}

export default FileSearchPage;
