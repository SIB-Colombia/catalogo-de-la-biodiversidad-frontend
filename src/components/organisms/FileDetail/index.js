import React, {PropTypes} from 'react'
import styled from 'styled-components'
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import {Grid, Row, Col} from 'react-flexbox-grid';
import {IconLink, Link, FileHeader, TitleSection} from 'components'

const Wrapper = styled.div `
.scrol{
  overflow:auto;
}
`

class FileDetail extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    console.log('-->', this.props.data);

    return (
      <Wrapper>
        <br/>
        {Object.keys(this.props.data).map((record, i) => (
          <div key={i}>
            <Paper className="paper-padding-1 scrol">
              <TitleSection>{record}</TitleSection>
              <pre>
              {JSON.stringify(this.props.data[record], null, 4)}
              </pre>
            </Paper>
            <br/>
          </div>
        ))}
      </Wrapper>
    )
  }
}

export default FileDetail;
