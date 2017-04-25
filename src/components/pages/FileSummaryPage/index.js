import React, {PropTypes} from 'react';
import config from '../../config';
import fetch from 'isomorphic-fetch';
import Paper from 'material-ui/Paper';
import {Grid, Row, Col} from 'react-flexbox-grid';
import SchemaForm from 'react-schema-form';

import {PageTemplate, Header, Footer, FileSummary, FileCarousel} from 'components';

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
    this.setState({
      images: [
        {
          src: '/detail1.jpg',
          thumbnail: '/detail1.jpg',
          caption: 'Photo by Jessica Weiller'
        }, {
          src: '/detail1.jpg',
          thumbnail: '/detail1.jpg',
          caption: 'Photo by Piotr Łaskawski'
        }, {
          src: '/detail1.jpg',
          thumbnail: '/detail1.jpg',
          caption: 'Photo by Michel Bosma'
        }, {
          src: '/detail1.jpg',
          thumbnail: '/detail1.jpg',
          caption: 'Photo by Lion F.'
        }, {
          src: '/detail1.jpg',
          thumbnail: '/detail1.jpg',
          caption: 'Photo by Robert M.'
        }
      ]
    })

    this.setState({files: config.demo})

    // fetch(`${config.server}/api/hello/home`, config.http).then((response) => {
    //   return response.json()
    // }).then((data) => {
    //   this.setState({files: data})
    // })

  }

  render() {

    return (
      <PageTemplate header={< Header />} footer={< Footer />}>
        <Grid className="animated fadeIn">
          <FileSummary data={this.state.files} id={this.state.id} images={this.state.images}/>
          <br/>
          <Row>
            <Col xs={12}>
              <Paper zDepth={1} className="box-content">
                {this.state.files.length > 0 && <FileCarousel data={this.state.files}/>}
              </Paper>
            </Col>
          </Row>
        </Grid>
      </PageTemplate>
    )
  }
}

export default FileSummaryPage;
