import React, {PropTypes} from 'react'
import styled from 'styled-components'
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import {Grid, Row, Col} from 'react-flexbox-grid';
import {
  IconLink,
  Link,
  FileHeader,
  TitleSection,
  FileCarousel,
  FileComment
} from 'components'

const Wrapper = styled.div `
box-shadow: 0 -22px 80px 60px #fff;
`

class FileMostRecent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrapper>
        <Paper zDepth={1} className="paper-padding-2">
          <TitleSection align="center" color="basescale-6" className="padding-top-2" >Fichas relacionadas</TitleSection>
          <FileCarousel data={this.props.data}/>
          <Divider/>
          <TitleSection align="center" color="basescale-6" className="padding-top-2 padding-bottom-3">Comentarios</TitleSection>
          <FileComment/>
        </Paper>
      </Wrapper>
    )
  }
}

export default FileMostRecent;
