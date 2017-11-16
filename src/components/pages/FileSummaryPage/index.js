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
  FileMostRecent,
  Loading
} from 'components';

import * as FileService from '../../../services/FileService';

class FileSummaryPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: null,
      fileComplete: null,
      files: [],
      images: []
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
  
  has(obj, key) {
      return key.split(".").every(function(x) {
          if(typeof obj != "object" || obj === null || ! x in obj)
              return false;
          obj = obj[x];
          return true;
      });
  }

  title() {
    if (this.has(this.state.fileComplete, 'taxonRecordNameApprovedInUse.taxonRecordName.scientificName.canonicalName.simple'))
      return this.state.fileComplete.taxonRecordNameApprovedInUse.taxonRecordName.scientificName.canonicalName.simple
    return ""
  }
  subtitle() {
    if (this.state.fileComplete)
      if (this.state.fileComplete.taxonRecordNameApprovedInUse)
        if (this.state.fileComplete.taxonRecordNameApprovedInUse.taxonRecordName)
          if (this.state.fileComplete.taxonRecordNameApprovedInUse.taxonRecordName.scientificName)
            if (this.state.fileComplete.taxonRecordNameApprovedInUse.taxonRecordName.scientificName.canonicalAuthorship)
              return this.state.fileComplete.taxonRecordNameApprovedInUse.taxonRecordName.scientificName.canonicalAuthorship.simple;
    return ""
  }

  render() {

    let file="File"

    if(this.has(this.state, 'fileComplete.imageInfo.mainImage')){
      console.log("--- ", this.state.fileComplete.imageInfo.mainImage)
      file = this.state.fileComplete.imageInfo.mainImage
    }

    return (
      <PageTemplate header={< Header />} footer={< Footer />} wallpaper={file}>
        <FileSummaryMenu/> {this.state.fileComplete && <Grid className="container">
          <Row className="animated fadeIn">
            <Col xs={12} lg={12}>
              <FileHeader title={this.title()} subtitle={this.subtitle()} id={this.state.id} active="summary"/>
              <FileSummary complete={this.state.fileComplete} images={this.state.images}/>
            </Col>
          </Row>
        </Grid> || <Loading text='Cargando resumen...'/>}
        {this.state.files.length > 0 && <FileMostRecent id={this.state.id} data={this.state.files}/> || <Loading/>}
      </PageTemplate>
    )
  }
}

export default FileSummaryPage;
