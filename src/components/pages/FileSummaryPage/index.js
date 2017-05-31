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
    this.setState({images: FileService.getImages()})

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
        <FileSummaryMenu/> {this.state.fileComplete && <Grid>
          <Row className="animated fadeIn">
            <Col xs={12} lg={12}>
              <FileHeader title={this.title()} subtitle={this.subtitle()} id={this.state.id} active="summary"/>
              <FileSummary complete={this.state.fileComplete} images={this.state.images}/>
            </Col>
          </Row>
        </Grid>}
        {this.state.fileComplete && <FileMostRecent id={this.state.id} data={this.state.files}/>}
      </PageTemplate>
    )
  }
}

export default FileSummaryPage;
