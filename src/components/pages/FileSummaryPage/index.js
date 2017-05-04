import React, {PropTypes} from 'react';
import fetch from 'isomorphic-fetch';
import Paper from 'material-ui/Paper';
import {Grid, Row, Col} from 'react-flexbox-grid';
import SchemaForm from 'react-schema-form';

import {
  PageTemplate,
  Header,
  Footer,
  Config,
  FileSummary,
  FileCarousel,
  FileComment
} from 'components';

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

    this.setState({id: this.props.params.id})
    this.setState({files: Config.service.files})
    this.setState({images: Config.service.images})
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.params.id);

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
