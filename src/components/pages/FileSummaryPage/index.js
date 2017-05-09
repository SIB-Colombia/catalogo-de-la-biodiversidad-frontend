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
        <FileSummaryMenu/>
        <Grid>
          <Row className="animated fadeIn">
            <Col xs={12} lg={12}>
              <FileHeader title={'Coragyps Atratus'} subtitle={'Bechstein, 1793'}/>
              <FileTab name='summary' id={this.state.id} content={<FileSummary data={this.state.files} images={this.state.images}/>}  />
            </Col>
          </Row>
        </Grid>
        <FileMostRecent data={this.state.files} />
      </PageTemplate>
    )
  }
}

export default FileSummaryPage;
