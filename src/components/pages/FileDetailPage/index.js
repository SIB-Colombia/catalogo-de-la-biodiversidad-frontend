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
      fileComplete: null,
      files: []
    }
  }

  componentDidMount() {}

  componentWillMount() {

    this.setState({id: this.props.match.params.id})

    FileService.getFileComplete(this.props.match.params.id).then(complete => {
      this.setState({fileComplete: complete});
    });

    FileService.getLastUpdatedRecords().then(data => {
      this.setState({files: data});
    }).catch(err => {
      console.log(err);
    })
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props.match.params.id);
  }

  title() {
    return this.state.fileComplete.taxonRecordNameApprovedInUse.taxonRecordName.scientificName.canonicalName.simple;
  }
  subtitle() {
    return this.state.fileComplete.taxonRecordNameApprovedInUse.taxonRecordName.scientificName.canonicalAuthorship.simple;
  }

  render() {

    return (
      <PageTemplate header={< Header />} footer={< Footer />} wallpaper='File'>
        {this.state.fileComplete && <Grid>
          <Row className="animated fadeIn">
            <Col xs={12} lg={12}>
              <FileHeader title={this.title()} subtitle={this.subtitle()} id={this.state.id} active="detail"/>
              <FileDetail complete={this.state.fileComplete}/>
            </Col>
          </Row>
        </Grid>}
        {this.state.fileComplete && <FileMostRecent id={this.state.id} data={this.state.files}/>}
      </PageTemplate>
    )
  }
}

export default FileDetailPage;
