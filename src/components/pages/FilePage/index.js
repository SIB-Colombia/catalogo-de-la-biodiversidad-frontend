import React from 'react'
import styled from 'styled-components'
import config from '../../config'

import {
  PageTemplate,
  Header,
  Footer,
  FileSummary,
  FileDetail,
  FileImage,
  FileList
} from 'components'

import {Tabs, Tab, Row, Col, ProgressBar} from 'react-materialize';

const Wrapper = styled.div `
background:#ffffff !important;
z-index:1 !important;
.tabs{
	background:#00838f;
}
.tabs .tab a{
	color :white;
}
.main-title{
	margin: 10px 0px 30px 0px;
}
.background-section{
}
`

class FilePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: this.props.params.fileId,
      summary: false,
      files: [],
      // detail
      info: false,
      schema: false,
      // associatedParty: false,
      reference: false,
      ancillaryData: false
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentWillMount() {
    var options = {
      method: 'GET',
      // mode: 'cors',
      // headers: new Headers({
      // 'Authorization': 'bearer example'
      // })
    };

    // fetch(`${config.server}/api/hello/home`, options).then((response) => {
    //   return response.json()
    // }).then((data) => {
    //   this.setState({files: data})
    // })

    fetch(`${config.server}/api/file/summary/${this.state.id}`, options).then((response) => {
      return response.json()
    }).then((data) => {
      this.setState({summary: data})
    })

    fetch(`${config.server}/api/file/detail/${this.state.id}`, options).then((response) => {
      return response.json()
    }).then((data) => {
      this.setState({'detail': data})
    })

    /*get Schemas and Data */

    fetch(`${config.server}/api/reference/show/${this.state.id}`).then((response) => {
      return response.json()
    }).then((data) => {
      this.setState({'reference': data})
    })

    fetch(`${config.server}/api/ancillaryData/show/${this.state.id}`).then((response) => {
      return response.json()
    }).then((data) => {
      this.setState({'ancillaryData': data})
    })

  }

  render() {

    return (
      <PageTemplate header={< Header />} footer={< Footer />}>
        <br/>
        <Wrapper className="container">
          <div className="card-panel">
            <h3 className="cyan-text text-darken-4 main-title">Coragyps atratus</h3>
            <Tabs className='tab-demo z-depth-1'>
              <Tab title="Resumen" active>
                {this.state.summary
                  ? <FileSummary data={this.state.summary}/>
                  : <div className="center-align">Cargando resumen....
                    <ProgressBar/></div>}
              </Tab>
              <Tab title="Detalles">
                {this.state.detail && this.state.reference && this.state.ancillaryData
                  ? <FileDetail data={this.state.detail} reference={this.state.reference} ancillaryData={this.state.ancillaryData}/>
                  : <div className="center-align">Cargando detalle....
                    <ProgressBar/></div>}
                {/* {this.state.detail && this.state.schema && this.state.reference.length > 0 && this.state.ancillaryData.length > 0
                  ? <FileDetail data={this.state.detail} schema={this.state.schema} data-reference={this.state.reference} data-ancillaryData={this.state.ancillaryData}/>
                  : <div className="center-align">Cargando detalle....
                    <ProgressBar/></div>} */}
              </Tab>
              <Tab title="Imágenes">
                <FileImage/>
              </Tab>
              <Tab title="Mapas"></Tab>
              <Tab title="Comunidad"></Tab>
              <Tab title="Comentarios"></Tab>
            </Tabs>
          </div>
        </Wrapper>
      </PageTemplate>
    )
  }
}

export default FilePage;
//{ this.state.files.length > 0 ? <FileList data={this.state.files} /> : <div>ergergergergerg</div> }
//{this.state.viewDetail ? (this.state.files ? <FileList data={this.state.files} /> : null) : null}
