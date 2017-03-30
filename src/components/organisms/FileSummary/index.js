import React, {PropTypes} from 'react'
import styled from 'styled-components'
import {palette} from 'styled-theme'
import {
  Block,
  Paragraph,
  IconLink,
  IconButton,
  LogoImage,
  Tooltip,
  Image
} from 'components'
import {
  Tabs,
  Tab,
  Card,
  Row,
  Col,
  MediaBox,
  Chip
} from 'react-materialize';

const Wrapper = styled(Block)`
h5{
  padding: 10px 0px;
  font-weight: bold;
}
.material-placeholder{

  display:inline-block !important;
  margin:2px 5px;
}
`

class FileSummary extends React.Component {

  componentDidMount() {
    $('.materialboxed').materialbox();

  }

  render() {

    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      draggable: false,
      centerMode: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1
          }
        }, {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2
          }
        }, {
          breakpoint: 2000,
          settings: {
            slidesToShow: 4
          }
        }, {
          breakpoint: 100000,
          settings: 'unslick'
        }
      ]
    };
    return (
      <Wrapper className="animated fadeIn">
        <Row>
          <Col l={12}>
            <h5 className="cyan-text text-darken-4">Imágenes</h5>
            <center>
              {this.props.data.images.map((record, i) => (<img width="150" key={i} className="materialboxed" data-caption={'Autor: ' + record.author} src={record.url}/>))}
            </center>
          </Col>
          <Col l={8} m={12} s={12}>
            <h5 className="cyan-text text-darken-4">Nombres Comunes</h5>

            {this.props.data.names.map((record, i) => (
              <Col s={6} key={i}>
                <div>{record.title}</div>
                <div>{record.description}</div>
                <br/>
              </Col>
            ))}

            <h5 className="cyan-text text-darken-4">Distribución</h5>
            <p>Mapa de registro publicados</p>
            <img src="https://assets.metrolatam.com/co/2015/03/20/captura-de-pantalla-2015-03-20-a-las-12-42-23-1200x600.jpg" className="responsive-img"/>
          </Col>
          <Col l={4}>
            <h5 className="cyan-text text-darken-4">Editores</h5>
            {this.props.data.editors.map((record, i) => (
              <div className="center-align" key={i}>
                <div className="chip">
                  <img src={record.url} alt="Contact Person"/> {record.name}
                </div>
              </div>
            ))}
            <h5 className="cyan-text text-darken-4">Actividad reciente</h5>
            <ul className="collection">
              {this.props.data.activity.map((record, i) => (
                <li key={i} className="collection-item avatar">
                  <img src={record.url} className="circle"/>
                  <span className="title">{record.name}</span>
                  <p>
                    {record.description}
                    <br/> {record.description}
                  </p>
                </li>
              ))}
            </ul>
            <h5 className="cyan-text text-darken-4">Grupos</h5>
            <ul className="collection">
              {this.props.data.groups.map((record, i) => (
                <li key={i} className="collection-item avatar">
                  <img src={record.url} className="circle"/>
                  <span className="title">{record.name}</span>
                  <p>
                    {record.description}
                    <br/> {record.description}
                  </p>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Wrapper>
    )
  }
}

export default FileSummary;
