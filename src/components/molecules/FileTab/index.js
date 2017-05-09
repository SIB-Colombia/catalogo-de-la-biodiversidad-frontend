import React from 'react';
import styled from 'styled-components';
import {size, palette} from 'styled-theme';
import {Link} from 'components';
import {Tabs, Tab} from 'material-ui/Tabs';
import Paper from 'material-ui/Paper';
import Badge from 'material-ui/Badge';

const Wrapper = styled.div `
.tabs{
	/*margin-top:20px;*/
}
.tabs > div:first-child{
	background-color: ${palette('grayscale', 1)} !important;
}
.tabs > div:nth-child(2) div{
	background-color: ${palette('secondary', 0)} !important;
}
.tabs > div > button{
  color: ${palette('grayscale', 6)} !important;
  font-weight: 700 !important;
	a{
		color: ${palette('grayscale', 6)} !important;
		font-weight: 700 !important;
		text-decoration: none;
    width: 100%;
    height: 100%;
    vertical-align: middle;
    line-height: 3.3;
	}
  &:not(:last-child){
    border-right: 1px solid ${palette('grayscale', 2)} !important;
  }
}
`
class FileTab extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      location: 0
    }
  }

  componentWillMount() {
    var index = ['summary', 'detail', 'maps', 'community', 'comments'];
    var geo = index.indexOf(this.props.name);
    this.setState({location: geo})
  }

  render() {
    return (
      <Wrapper>
        <Tabs initialSelectedIndex={this.state.location} className="tabs">
          <Tab label={< Link to = {
            `/file/summary/${this.props.id}`
          } > Resumen < /Link>}>
            {this.props.name == 'summary'
              ? this.props.content
              : ''}
          </Tab>
          <Tab label={< Link to = {
            `/file/detail/${this.props.id}`
          } > Detalles < /Link>}></Tab>
          <Tab label={< Link to = {
            `/file/images/${this.props.id}`
          } > Imágenes < /Link>}></Tab>
          <Tab label={< Link to = {
            `/file/maps/${this.props.id}`
          } > Mapas < /Link>}></Tab>
          <Tab label={< Link to = {
            `/file/community/${this.props.id}`
          } > Comunidad < /Link>}></Tab>
          <Tab label={< Link to = {
            `/file/comments/${this.props.id}`
          } > Comentarios < /Link>}></Tab>
        </Tabs>
      </Wrapper>
    )
  }
}

export default FileTab;
