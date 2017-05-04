import React, {PropTypes} from 'react';
import fetch from 'isomorphic-fetch';
import RaisedButton from 'material-ui/RaisedButton';
import {
  PageTemplate,
  Header,
  Footer,
  Config,
  FileSearchMenu,
  FileSearchResult
} from 'components';

class FileSearchPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      files: []
    }
  }

  componentDidMount() {}

  componentWillMount() {
    this.setState({files: Config.service.files})
  }

  render() {

    return (
      <PageTemplate header={< Header filter={<FileSearchMenu/>} />} footer={< Footer />}>
        {/* <FileSearchMenu/>  */}
        {this.state.files.length > 0 && <FileSearchResult data={this.state.files}/>}
      </PageTemplate>
    )
  }
}

export default FileSearchPage;
