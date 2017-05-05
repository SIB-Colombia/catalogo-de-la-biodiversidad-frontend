import React, {PropTypes} from 'react';
import fetch from 'isomorphic-fetch';
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
  FileComment
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
  }

  componentDidMount() {}

  componentWillMount() {
    injectGlobal `
      body{
        background-image: url(/background/tucan.jpg);
        background-size: cover;
        background-position: center center;
        background-attachment:fixed;
      }
    `;
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
          <FileSummary data={this.state.files} id={this.state.id} images={this.state.images}/>
          <br/>
          <Row>
            <Col xs={12}>
              <Paper zDepth={1} className="box-content" style={{
                paddingTop: '20px'
              }}>
                <h3 className="title-xs color-secondary bold">Fichas relacionadas</h3>
                {this.state.files.length > 0 && <FileCarousel data={this.state.files}/>}
              </Paper>
            </Col>
          </Row>
          <FileComment/>
        </Grid>
      </PageTemplate>
    )
  }
}

export default FileSummaryPage;
