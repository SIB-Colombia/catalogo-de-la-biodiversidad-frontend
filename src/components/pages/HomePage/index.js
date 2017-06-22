import React from 'react';
import {
  PageTemplate,
  Header,
  Footer,
  HomeCarousel,
  FileCarousel,
  CategoryCarousel,
  GroupCarousel,
  CommunityCarousel,
  HomePrinciples,
  HomeCommunity,
  HomeJoin,
  HomeFooter
} from 'components';

import {isAuthenticated} from '../../../auth';
import * as FileService from '../../../services/FileService';

class HomePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      files: [],
      value: 1,
      user: null
    }

  }
  componentDidMount() {}

  componentWillMount() {

    // console.log(this.props.location.pathname);
    FileService.getLastUpdatedRecords().then(data => {
      this.setState({files: data});
    }).catch(err => {
      console.log(err);
    })
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {

    return (
      <PageTemplate header={< Header />} footer={< Footer />}>
        {this.state.files.length > 0 && <HomeCarousel/>}
        <CategoryCarousel/>
        {this.state.files.length > 0 && <FileCarousel data={this.state.files} title="Fichas recientes"/>}<br/>
        <HomePrinciples/>
        <HomeCommunity />
        {!isAuthenticated() && <HomeJoin />}
        {/* <HomeFooter /> */}
        {/* {this.state.files.length > 0 && <GroupCarousel data={this.state.files}/>} */}
        {/* {this.state.files.length > 0 && <CommunityCarousel data={this.state.files}/>} */}
      </PageTemplate>
    )
  }
}

export default HomePage;
