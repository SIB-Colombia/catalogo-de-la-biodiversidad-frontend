import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import {
  PageTemplate,
  Header,
  Footer,
  HomeCarousel,
  FileCarousel,
  CategoryCarousel,
  GroupCarousel,
  CommunityCarousel
} from 'components';

import * as FileService from '../../../services/FileService';

class HomePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      files: [],
      value: 1
    }
  }
  componentDidMount() {}

  componentWillMount() {
    // console.log(this.props.location.pathname);
    // console.log(FileService.getList());
    this.setState({files: FileService.getFiles()});
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {

    return (
      <PageTemplate header={< Header />} footer={< Footer />}>
        {this.state.files.length > 0 && <HomeCarousel data={this.state.files}/>}
        <br/>
        <br/> {this.state.files.length > 0 && <div className="align-center">
          <DropDownMenu value={this.state.value} onChange={this.handleChange}>
            <MenuItem value={1} primaryText="Fichas recientes"/>
            <MenuItem value={2} primaryText="Fichas más vistadas"/>
            <MenuItem value={3} primaryText="Fichas en peligro"/>
            <MenuItem value={4} primaryText="Fichas por actualizar"/>
          </DropDownMenu>
        </div>}
        {this.state.files.length > 0 && <FileCarousel data={this.state.files}/>}
        <CategoryCarousel/> {this.state.files.length > 0 && <GroupCarousel data={this.state.files}/>}
        {this.state.files.length > 0 && <CommunityCarousel data={this.state.files}/>}
      </PageTemplate>
    )
  }
}

export default HomePage;
