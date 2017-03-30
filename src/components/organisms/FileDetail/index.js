import React, {PropTypes} from 'react';
import styled from 'styled-components';
import {palette} from 'styled-theme';

import {
  Block,
  Paragraph,
  IconLink,
  IconButton,
  LogoImage,
  Tooltip,
  Image,
  ModalUI,
  ReactSchemaEasyForm
} from 'components'
import {
  Tabs,
  Tab,
  Card,
  Row,
  Col,
  MediaBox,
  Chip,
  Icon,
  Dropdown,
  NavItem,
  Button,
  Input
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
.lateral-menu{
    position:fixed;
    left:0px;
    top:100px;
    z-index:1;
    width:200px;
    .table-of-contents a.active{
            border-left: 2px solid #00838f;
    }
    .material-icons{
            vertical-align: middle;
    }
}

`

class FileDetail extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      schema: {},
      form: {},
      contact: {
        name: '',
        email: '',
        tel: ''
      },
      associatedParty: {}

    }

    // // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy();

    $(document).ready(function() {

      $('.modal').modal();
    });

  }

  openModalForm = (record) => {
    this.setState({associatedParty: record})
    $('#modalForm').modal('open');
  }

  change(propertyName, event) {
    var contact = this.state.contact;
    contact[propertyName] = event.target.value;
    this.setState({contact: contact});
  }

  render() {

    console.log(this.props);

    return (
      <Wrapper className="animated fadeIn">

        {/* <input type="text" value={this.state.contact.name} onChange={(e) => this.change('name', e)}/> */}
        {/* <input type="text" value={this.state.contact.email} onChange={(e) => this.change('email', e)}/> */}
        {/* <input type="text" value={this.state.contact.tel} onChange={(e) => this.change('tel', e)}/> */}
        {/* this.state.answers.map(function(a) {
            return(<Answer name={a.name} value={a.value} handleChange={this._handleChange} />)
          }); */}
        {/* {JSON.stringify(this.state.contact)} */}
        {/* <ReactSchemaEasyForm schema={this.state.schema} form={this.state.form} model={this.props.model}/> */}
        <br/>
        <Row>
          <h5 className="cyan-text text-darken-4">associatedPartys</h5>
          <ul className="collection">
            {this.props.associatedParty.map((record, i) => (
              <Col s={6} key={i}>
                <li className="collection-item avatar">
                  <i className="material-icons circle green">insert_chart</i>
                  <span className="title">
                    <b>associatedParty</b>
                  </span>
                  <p>
                    <b>address</b>:{record.address}<br/>
                    <b>city:</b>
                    {record.city}<br/>
                    <b>country:</b>
                    {record.country}<br/>
                    <b>email:</b>
                    {record.email}<br/>
                    <b>firstName:</b>
                    {record.firstName}<br/>
                    <b>homepage:</b>
                    {record.homepage}<br/>
                    <b>lastName:</b>
                    {record.lastName}<br/>
                    <b>organisation:</b>
                    {record.organisation}<br/>
                    <b>personnelDirectory:</b>
                    {record.personnelDirectory}<br/>
                    <b>personnelIdentifier:</b>
                    {record.personnelIdentifier}<br/>
                    <b>phone:</b>
                    {record.phone}<br/>
                    <b>position:</b>
                    {record.position}<br/>
                    <b>postalCode:</b>
                    {record.postalCode}<br/>
                    <b>role:</b>
                    {record.role}<br/>
                    <b>state:</b>
                    {record.state}<br/>
                  </p>
                  <a onClick={() => this.openModalForm(record)} className="secondary-content dropdown-button">
                    <i className="material-icons">more_horiz</i>
                  </a>
                </li>
              </Col>
            ))}
          </ul>
        </Row>

        <Row>
          <h5 className="cyan-text text-darken-4">reference</h5>
          <ul className="collection">
            {this.props.reference.map((record, i) => (
              <Col s={6} key={i}>
                <li className="collection-item avatar">
                  <i className="material-icons circle blue">insert_chart</i>
                  <span className="title">
                    <b>reference</b>
                  </span>
                  <p>
                    <b>abstract</b>:{record.abstract}<br/>
                    <b>accessed:</b>
                    {record.accessed}<br/>
                    <b>address:</b>
                    {record.address}<br/>
                    <b>chapter:</b>
                    {record.chapter}<br/>
                    <b>created:</b>
                    {record.created}<br/>
                    <b>doi:</b>
                    {record.doi}<br/>
                    <b>edition:</b>
                    {record.edition}<br/>
                    <b>group_id:</b>
                    {record.group_id}<br/>
                    <b>id:</b>
                    {record.id}<br/>
                    <b>institution:</b>
                    {record.institution}<br/>
                    <b>isbn:</b>
                    {record.isbn}<br/>
                    <b>issn:</b>
                    {record.issn}<br/>
                    <b>issue:</b>
                    {record.issue}<br/>
                    <b>last_modified:</b>
                    {record.last_modified}<br/>
                    <b>link:</b>
                    {record.link}<br/>
                    <b>pages:</b>
                    {record.pages}<br/>
                    <b>profile_id:</b>
                    {record.profile_id}<br/>
                    <b>publisher:</b>
                    {record.publisher}<br/>
                    <b>series:</b>
                    {record.series}<br/>
                    <b>source:</b>
                    {record.source}<br/>
                    <b>tags:</b>
                    {record.tags}<br/>
                    <b>title:</b>
                    {record.title}<br/>
                    <b>type:</b>
                    {record.type}<br/>
                    <b>volume:</b>
                    {record.volume}<br/>
                    <b>websites:</b>
                    {record.websites}<br/>
                    <b>year:</b>
                    {record.year}<br/>
                  </p>
                  <a className="secondary-content dropdown-button">
                    <i className="material-icons">more_horiz</i>
                  </a>
                </li>
              </Col>
            ))}
          </ul>
        </Row>

        <Row>
          <div className="lateral-menu card-panel animated bounceInDown">

            <Col className="hide-on-small-only">
              <Icon>list</Icon>
              Índice de ficha
              <ul className="section table-of-contents">
                <li>
                  <a href="#taxo">Taxonomía</a>
                </li>
                <li>
                  <a href="#stateCons">Estado Conservación</a>
                </li>
                <li>
                  <a href="#usetrafic">Uso y tráfico</a>
                </li>
              </ul>
            </Col>
          </div>

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

            <h5 className="cyan-text text-darken-4">Taxonomía</h5>
            <div id="taxo" className="scrollspy">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis nunc finibus, semper eros et, vehicula elit. Etiam vitae ligula sapien. Vivamus tincidunt nisi urna, eget porttitor purus vestibulum sit amet. Sed vitae suscipit neque. Sed rhoncus a massa et suscipit. Nam a turpis lorem. Nam sed dui lacus. Nulla ultricies placerat turpis, sed commodo eros scelerisque quis. Donec molestie mi mi, at ultricies elit vehicula ac. Fusce sagittis posuere venenatis. Vestibulum erat purus, auctor vel volutpat cursus, dignissim id quam. Nullam et ligula vel urna dictum aliquet sit amet ac erat. Nulla viverra lorem commodo erat pulvinar tincidunt. Quisque elementum lacus non magna tempor, sit amet vulputate ligula lobortis. Phasellus egestas dictum diam vel sollicitudin. Integer ultricies erat ac venenatis malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut auctor, risus vel luctus iaculis, eros lacus gravida lectus, non placerat arcu ligula quis magna. Nam lacus elit, pharetra et nibh non, pretium consectetur mauris. Suspendisse ultricies, eros eu maximus vulputate, massa arcu interdum odio, ac consequat metus ante ac dolor. Maecenas et nisl lacinia, lobortis orci ut, mollis risus. Proin interdum odio at risus hendrerit, eget fringilla purus faucibus. Duis massa nibh, vehicula quis dolor nec, tempor feugiat tellus. Sed aliquam, arcu et maximus varius, purus odio vehicula sapien, et aliquam nisl risus eu ante. Praesent sagittis at mi sit amet pulvinar. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin cursus nisi at gravida aliquet. Nam pretium leo erat, quis pellentesque ex imperdiet vitae. Vivamus rutrum accumsan rutrum. Ut vel elementum erat, sit amet pretium ex. Integer dictum tristique libero, eget rhoncus eros. Suspendisse eu erat purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit pellentesque interdum. Vestibulum eget scelerisque mi, nec eleifend nibh. Nulla semper arcu erat, et rhoncus tortor mattis id. Proin id molestie diam. Morbi elementum quis enim consectetur tempus. Cras id libero erat. Vestibulum ut cursus ligula. Curabitur vel enim sit amet ante egestas blandit. Proin lorem lectus, commodo at mauris quis, gravida venenatis erat. Maecenas sodales et erat vel luctus. Duis tincidunt risus ac metus cursus blandit. Sed non orci volutpat, tristique erat cursus, rhoncus sem. Aliquam vitae mattis eros. Praesent in purus commodo, rhoncus augue sed, mollis justo. Donec tincidunt risus nec est euismod varius. Curabitur libero ligula, placerat quis laoreet non, dignissim ac magna.
            </div>

            <h5 className="cyan-text text-darken-4">Estado Conservación</h5>
            <div id="stateCons" className="scrollspy">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis nunc finibus, semper eros et, vehicula elit. Etiam vitae ligula sapien. Vivamus tincidunt nisi urna, eget porttitor purus vestibulum sit amet. Sed vitae suscipit neque. Sed rhoncus a massa et suscipit. Nam a turpis lorem. Nam sed dui lacus. Nulla ultricies placerat turpis, sed commodo eros scelerisque quis. Donec molestie mi mi, at ultricies elit vehicula ac. Fusce sagittis posuere venenatis. Vestibulum erat purus, auctor vel volutpat cursus, dignissim id quam. Nullam et ligula vel urna dictum aliquet sit amet ac erat. Nulla viverra lorem commodo erat pulvinar tincidunt. Quisque elementum lacus non magna tempor, sit amet vulputate ligula lobortis. Phasellus egestas dictum diam vel sollicitudin. Integer ultricies erat ac venenatis malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut auctor, risus vel luctus iaculis, eros lacus gravida lectus, non placerat arcu ligula quis magna. Nam lacus elit, pharetra et nibh non, pretium consectetur mauris. Suspendisse ultricies, eros eu maximus vulputate, massa arcu interdum odio, ac consequat metus ante ac dolor. Maecenas et nisl lacinia, lobortis orci ut, mollis risus. Proin interdum odio at risus hendrerit, eget fringilla purus faucibus. Duis massa nibh, vehicula quis dolor nec, tempor feugiat tellus. Sed aliquam, arcu et maximus varius, purus odio vehicula sapien, et aliquam nisl risus eu ante. Praesent sagittis at mi sit amet pulvinar. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin cursus nisi at gravida aliquet. Nam pretium leo erat, quis pellentesque ex imperdiet vitae. Vivamus rutrum accumsan rutrum. Ut vel elementum erat, sit amet pretium ex. Integer dictum tristique libero, eget rhoncus eros. Suspendisse eu erat purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit pellentesque interdum. Vestibulum eget scelerisque mi, nec eleifend nibh. Nulla semper arcu erat, et rhoncus tortor mattis id. Proin id molestie diam. Morbi elementum quis enim consectetur tempus. Cras id libero erat. Vestibulum ut cursus ligula. Curabitur vel enim sit amet ante egestas blandit. Proin lorem lectus, commodo at mauris quis, gravida venenatis erat. Maecenas sodales et erat vel luctus. Duis tincidunt risus ac metus cursus blandit. Sed non orci volutpat, tristique erat cursus, rhoncus sem. Aliquam vitae mattis eros. Praesent in purus commodo, rhoncus augue sed, mollis justo. Donec tincidunt risus nec est euismod varius. Curabitur libero ligula, placerat quis laoreet non, dignissim ac magna.
            </div>

            <h5 className="cyan-text text-darken-4">Uso y tráfico</h5>
            <div id="usetrafic" className="scrollspy">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis nunc finibus, semper eros et, vehicula elit. Etiam vitae ligula sapien. Vivamus tincidunt nisi urna, eget porttitor purus vestibulum sit amet. Sed vitae suscipit neque. Sed rhoncus a massa et suscipit. Nam a turpis lorem. Nam sed dui lacus. Nulla ultricies placerat turpis, sed commodo eros scelerisque quis. Donec molestie mi mi, at ultricies elit vehicula ac. Fusce sagittis posuere venenatis. Vestibulum erat purus, auctor vel volutpat cursus, dignissim id quam. Nullam et ligula vel urna dictum aliquet sit amet ac erat. Nulla viverra lorem commodo erat pulvinar tincidunt. Quisque elementum lacus non magna tempor, sit amet vulputate ligula lobortis. Phasellus egestas dictum diam vel sollicitudin. Integer ultricies erat ac venenatis malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut auctor, risus vel luctus iaculis, eros lacus gravida lectus, non placerat arcu ligula quis magna. Nam lacus elit, pharetra et nibh non, pretium consectetur mauris. Suspendisse ultricies, eros eu maximus vulputate, massa arcu interdum odio, ac consequat metus ante ac dolor. Maecenas et nisl lacinia, lobortis orci ut, mollis risus. Proin interdum odio at risus hendrerit, eget fringilla purus faucibus. Duis massa nibh, vehicula quis dolor nec, tempor feugiat tellus. Sed aliquam, arcu et maximus varius, purus odio vehicula sapien, et aliquam nisl risus eu ante. Praesent sagittis at mi sit amet pulvinar. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin cursus nisi at gravida aliquet. Nam pretium leo erat, quis pellentesque ex imperdiet vitae. Vivamus rutrum accumsan rutrum. Ut vel elementum erat, sit amet pretium ex. Integer dictum tristique libero, eget rhoncus eros. Suspendisse eu erat purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit pellentesque interdum. Vestibulum eget scelerisque mi, nec eleifend nibh. Nulla semper arcu erat, et rhoncus tortor mattis id. Proin id molestie diam. Morbi elementum quis enim consectetur tempus. Cras id libero erat. Vestibulum ut cursus ligula. Curabitur vel enim sit amet ante egestas blandit. Proin lorem lectus, commodo at mauris quis, gravida venenatis erat. Maecenas sodales et erat vel luctus. Duis tincidunt risus ac metus cursus blandit. Sed non orci volutpat, tristique erat cursus, rhoncus sem. Aliquam vitae mattis eros. Praesent in purus commodo, rhoncus augue sed, mollis justo. Donec tincidunt risus nec est euismod varius. Curabitur libero ligula, placerat quis laoreet non, dignissim ac magna.
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
            </div>

          </Col>

          <Col l={4}>

            <h5 className="cyan-text text-darken-4">Jerarquía Taxonómica</h5>
            <ul className="collection">
              {this.props.data.taxo.map((record, i) => (
                <li className="collection-item" key={i}>
                  {record.name}
                  <b>{record.value}</b>
                </li>
              ))}
            </ul>

            <h5 className="cyan-text text-darken-4">Autores</h5>
            {this.props.data.authors.map((record, i) => (
              <div className="center-align" key={i}>
                <div className="chip">
                  <img src={record.url} alt="Contact Person"/> {record.name}
                </div>
              </div>
            ))}

            <h5 className="cyan-text text-darken-4">Información básica de la ficha</h5>
            <ul className="collection">
              {this.props.data.basic.map((record, i) => (
                <li className="collection-item" key={i}>
                  {record.name}<br/> {record.value}
                </li>
              ))}
            </ul>

          </Col>

        </Row>
        <ModalUI title="Formulario" refe="modalForm">
          <Row>
            <Col l={12} s={12}>
              <Input s={6} label="address" value={this.state.associatedParty.address}/>
              <Input s={6} label="country" value={this.state.associatedParty.country}/>
              <Input s={6} label="email" value={this.state.associatedParty.email}/>
              <Input s={6} label="firstName" value={this.state.associatedParty.firstName}/>
              <Input s={6} label="homepage" value={this.state.associatedParty.homepage}/>
              <Input s={6} label="lastName" value={this.state.associatedParty.lastName}/>
              <Input s={6} label="organisation" value={this.state.associatedParty.organisation}/>
              <Input s={6} label="personnelDirectory" value={this.state.associatedParty.personnelDirectory}/>
              <Input s={6} label="personnelIdentifier" value={this.state.associatedParty.personnelIdentifier}/>
              <Input s={6} label="phone" value={this.state.associatedParty.phone}/>
              <Input s={6} label="position" value={this.state.associatedParty.position}/>
              <Input s={6} label="postalCode" value={this.state.associatedParty.postalCode}/>
              <Input s={6} label="role" value={this.state.associatedParty.role}/>
              <Input s={6} label="state" value={this.state.associatedParty.state}/>
            </Col>
          </Row>
        </ModalUI>
      </Wrapper>

    )
  }
}

export default FileDetail;
