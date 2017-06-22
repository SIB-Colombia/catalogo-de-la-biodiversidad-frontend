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
	background-color: ${palette('grayscale', 0)} !important;
	/*border: 1px solid #d2d2d2 !important;*/
}
.tabs > div:nth-child(2) div{
	background-color: ${palette('secondary', 0)} !important;
	display: none !important;
}
.tabs > div > button{
  color: ${palette('grayscale', 6)} !important;
	a{
		color:${palette('basescale', 3)};
		font-weight: bold;
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
          } > Detalles < /Link>}>
					{this.props.name == 'detail'
						? this.props.content
						: ''}
					</Tab>
          <Tab label={< Link to = {
            `/file/images/${this.props.id}`
          } > Imágenes < /Link>}>
					{this.props.name == 'images'
						? this.props.content
						: ''}
					</Tab>
          <Tab label={< Link to = {
            `/file/maps/${this.props.id}`
          } > Mapas < /Link>}>
					{this.props.name == 'maps'
						? this.props.content
						: ''}
					</Tab>
          <Tab label={< Link to = {
            `/file/community/${this.props.id}`
          } > Comunidad < /Link>}>
					{this.props.name == 'community'
						? this.props.content
						: ''}
					</Tab>
          <Tab label={< Link to = {
            `/file/comments/${this.props.id}`
          } > Comentarios < /Link>}>
					{this.props.name == 'comments'
						? this.props.content
						: ''}
					</Tab>
        </Tabs>
      </Wrapper>
    )
  }
}

export default FileTab;
