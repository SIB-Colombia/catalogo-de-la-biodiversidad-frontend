import React from 'react'
import styled from 'styled-components'
import {
  PageTemplate,
  Header,
  Footer,
  FileSummary,
  FileDetail,
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
      detail: false,
      files: []
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

    fetch('https://jsonplaceholder.typicode.com/posts/1/comments', options).then((response) => {
      return response.json()
    }).then((data) => {
      this.setState({files: data})
    })

    fetch('http://localhost:9000/api/file/summary/' + this.state.id, options).then((response) => {
      return response.json()
    }).then((data) => {
      this.setState({summary: data})
    })

    fetch('http://localhost:9000/api/file/detail/' + this.state.id, options).then((response) => {
      return response.json()
    }).then((data) => {
      this.setState({detail: data})
    })

    /*Schemas*/

    fetch('http://localhost:9000/api/schema/build').then((response) => {
      return response.json()
    }).then((data) => {
      this.setState({'ancillary.AncillaryData': data})
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
                {this.state.detail
                  ? <FileDetail data={this.state.detail}/>
                  : <div className="center-align">Cargando detalle....
                    <ProgressBar/></div>}
              </Tab>
              <Tab title="Imágenes"></Tab>
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
