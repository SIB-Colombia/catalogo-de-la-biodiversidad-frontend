import React, {PropTypes} from 'react';
import Paper from 'material-ui/Paper';
import {injectGlobal} from 'styled-components';
import {Grid, Row, Col} from 'react-flexbox-grid';
import SchemaForm from 'react-schema-form';
import {
  PageTemplate,
  Header,
  Footer,
  FileSummary,
  FileCarousel,
  FileComment,
  FileHeader,
  FileTab
} from 'components';

import * as FileService from '../../../services/FileService';

class FileSummaryPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: null,
      files: [],
      images: []
    }
    injectGlobal `
      body{
        background-image: url(/background/tucan.jpg);
        background-size: cover;
        background-position: center center;
        background-attachment:fixed;
      }
    `
  }

  componentDidMount() {}

  componentWillMount() {


    FileService.getFile(this.props.match.params.id).then(data => {
      console.log(data);
    })

    this.setState({id: this.props.match.params.id})
    this.setState({files: FileService.getFiles()})
    this.setState({images: FileService.getImages()})
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props.match.params.id);
  }

  render() {

    return (
      <PageTemplate header={< Header />} footer={< Footer />}>
        <Grid>
          <Row>
            <Col xs={12} lg={12}>
              <FileHeader title={'Coragyps Atratus'} subtitle={'Bechstein, 1793'}/>
              <FileTab name='summary' id={this.state.id} content={<FileSummary data={this.state.files} images={this.state.images}/>}  />
            </Col>
            <Col xs={12}>
              <Paper zDepth={1}>
                <h3 className="title-xs color-secondary bold">Fichas relacionadas</h3>
                {this.state.files.length > 0 && <FileCarousel data={this.state.files}/>}
              </Paper>
            </Col>
            <Col xs={12}>
              <FileComment/>
            </Col>
          </Row>
        </Grid>
      </PageTemplate>
    )
  }
}

export default FileSummaryPage;
