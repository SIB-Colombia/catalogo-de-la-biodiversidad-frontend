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
        'http://illuzone.net/wp-content/uploads/2015/01/Red-Panda-4.jpg',
        'http://i.dailymail.co.uk/i/pix/2014/01/08/article-2535743-1A7C03F700000578-450_634x750.jpg',
        'http://illuzone.net/wp-content/uploads/2015/01/Red-Panda-4.jpg',
        'http://illuzone.net/wp-content/uploads/2015/01/Red-Panda-4.jpg',
        'http://illuzone.net/wp-content/uploads/2015/01/Red-Panda-4.jpg',
        'http://illuzone.net/wp-content/uploads/2015/01/Red-Panda-4.jpg',
        'http://illuzone.net/wp-content/uploads/2015/01/Red-Panda-4.jpg',
        'http://illuzone.net/wp-content/uploads/2015/01/Red-Panda-4.jpg',
        'http://illuzone.net/wp-content/uploads/2015/01/Red-Panda-4.jpg',
        'http://illuzone.net/wp-content/uploads/2015/01/Red-Panda-4.jpg',
        'https://c402277.ssl.cf1.rackcdn.com/photos/1876/images/story_full_width/Snow-Leopard_08.15.2012_Find-Your-Inner-Animal.jpg?1345554887',
        'http://illuzone.net/wp-content/uploads/2015/01/Red-Panda-4.jpg',
        'http://illuzone.net/wp-content/uploads/2015/01/Red-Panda-4.jpg',
        'http://illuzone.net/wp-content/uploads/2015/01/Red-Panda-4.jpg',
        'http://illuzone.net/wp-content/uploads/2015/01/Red-Panda-4.jpg',
        'http://www.erdekesseg.hu/wp-content/uploads/2014/09/allatos-szelfik-00010.jpg',
        'http://illuzone.net/wp-content/uploads/2015/01/Red-Panda-4.jpg',
        'http://illuzone.net/wp-content/uploads/2015/01/Red-Panda-4.jpg',
        'http://illuzone.net/wp-content/uploads/2015/01/Red-Panda-4.jpg',
        'http://illuzone.net/wp-content/uploads/2015/01/Red-Panda-4.jpg',
        'http://illuzone.net/wp-content/uploads/2015/01/Red-Panda-4.jpg'
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
      'Otros' : []
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
