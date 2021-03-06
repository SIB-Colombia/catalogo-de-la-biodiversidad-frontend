import React, {PropTypes} from 'react';
import Paper from 'material-ui/Paper';
import {injectGlobal} from 'styled-components';
import {Grid, Row, Col} from 'react-flexbox-grid';
import SchemaForm from 'react-schema-form';
import {
  PageTemplate,
  Header,
  Footer,
  FileMultimedia,
  FileHeader,
  FileMostRecent,
  Loading,
  FileMultimediaMenu
} from 'components';

import * as FileService from '../../../services/FileService';

class FileMultimediaPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: null,
      fileComplete: null,
      files: [],
      sections: null
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
    });

    let obj = {
      'Imágenes' : [
        'https://s3.amazonaws.com/sib-resources/images/catalogo/destacadas/jpg/36192444754_eff43f93ed_k.jpg',
        'https://s3.amazonaws.com/sib-resources/images/catalogo/destacadas/jpg/36219992913_caa44eccca_k.jpg',
        'https://s3.amazonaws.com/sib-resources/images/catalogo/destacadas/jpg/36220009163_78e344dabc_k2.jpg',
        'https://s3.amazonaws.com/sib-resources/images/catalogo/destacadas/jpg/36630866500_31537e7c27_h.jpg'
      ],
      'Sonidos' : [
        '/demo/sound.mp3',
        '/demo/sound.mp3',
        '/demo/sound.mp3',
        '/demo/sound.mp3',
        '/demo/sound.mp3',
        '/demo/sound.mp3',
        '/demo/sound.mp3',
        '/demo/sound.mp3',
        '/demo/sound.mp3',
        '/demo/sound.mp3',
        '/demo/sound.mp3'
      ],
      'Otros' : [
        'https://opensource.org/licenses/MIT',
        'https://opensource.org/licenses/MIT',
        'https://opensource.org/licenses/MIT',
        'https://opensource.org/licenses/MIT',
        'https://opensource.org/licenses/MIT',
        'https://opensource.org/licenses/MIT'
      ]
    };

    this.setState({sections: obj});

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
      <PageTemplate header={<Header/>} footer={<Footer/>} wallpaper='File'>
        {this.state.fileComplete && <Grid className="container">
          <Row className="animated fadeIn">
            <Col xs={12} lg={12}>
              <FileHeader title={this.title()} subtitle={this.subtitle()} id={this.state.id} active="multimedia"/>
              <FileMultimedia complete={this.state.sections}/>
            </Col>
          </Row>
        </Grid> || <Loading text='Cargando multimedia...'/>}
        {this.state.files.length > 0 && <FileMostRecent id={this.state.id} data={this.state.files}/> || <Loading/>}
      </PageTemplate>
    )
  }
}

export default FileMultimediaPage;
