import React, {PropTypes} from 'react';
import Paper from 'material-ui/Paper';
import {Grid, Row, Col} from 'react-flexbox-grid';
import SchemaForm from 'react-schema-form';
import {
  PageTemplate,
  Header,
  Footer,
  FileSummary,
  FileHeader,
  FileTab,
  FileSummaryMenu,
  FileMostRecent
} from 'components';

import * as FileService from '../../../services/FileService';

class FileSummaryPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: null,
      fileComplete: null,
      files: [],
      images: [],
      user: null
    }
  }

  componentDidMount() {}

  componentWillMount() {

    this.setState({id: this.props.match.params.id})
    this.setState({files: FileService.getFiles()})
    this.setState({images: FileService.getImages()})

    FileService.getFileComplete(this.props.match.params.id).then(complete => {
      console.log('comocom', complete);
      console.log('comocom', complete.taxonRecordNameApprovedInUse.taxonRecordName.scientificName.canonicalName.simple);
      this.setState({fileComplete: complete});
    });

  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props.match.params.id);
  }

  render() {

    return (
      <PageTemplate header={< Header />} footer={< Footer />} wallpaper='File'>
        <FileSummaryMenu/>
        {this.state.fileComplete && <Grid>
          <Row className="animated fadeIn">
            <Col xs={12} lg={12}>

              <FileHeader title={this.state.fileComplete.taxonRecordNameApprovedInUse.taxonRecordName.scientificName.canonicalName.simple} subtitle={this.state.fileComplete.taxonRecordNameApprovedInUse.taxonRecordName.scientificName.canonicalAuthorship.simple}/>
              <FileTab name='summary' id={this.state.id} content= { <FileSummary data = { this.state.files } complete = { this.state.fileComplete } images = { this.state.images } /> }/>

            </Col>
          </Row>
        </Grid>}
        <FileMostRecent id={this.state.id} data={this.state.files}/>
      </PageTemplate>
    )
  }
}

export default FileSummaryPage;
