import React, {PropTypes} from 'react';
import Paper from 'material-ui/Paper';
import {injectGlobal} from 'styled-components';
import {Grid, Row, Col} from 'react-flexbox-grid';
import SchemaForm from 'react-schema-form';
import {
  PageTemplate,
  Header,
  Footer,
  FileDetail,
  FileCarousel,
  FileComment,
  FileHeader,
  FileTab,
  FileMostRecent
} from 'components';

import * as FileService from '../../../services/FileService';

class FileDetailPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: null,
      files: [],
      blocks: false,
      images: []
    }
  }

  componentDidMount() {}

  componentWillMount() {

    FileService.getFile(this.props.match.params.id).then(data => {
      this.setState({blocks: data})
    })

    this.setState({id: this.props.match.params.id})
    this.setState({files: FileService.getFiles()})

  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props.match.params.id);
  }

  render() {

    return (
      <PageTemplate header={< Header />} footer={< Footer />}  wallpaper='File'>
        <Grid>
          <Row className="animated fadeIn">
            <Col xs={12} lg={12} >
              <FileHeader title={'Coragyps Atratus'} subtitle={'Bechstein, 1793'}/>
              {this.state.blocks && <FileTab name='detail' id={this.state.id}  content={<FileDetail data={this.state.blocks} />} />}
            </Col>
          </Row>
        </Grid>
        <FileMostRecent data={this.state.files} />
      </PageTemplate>
    )
  }
}

export default FileDetailPage;
