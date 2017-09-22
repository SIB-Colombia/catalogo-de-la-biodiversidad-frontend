import React, {PropTypes} from 'react';
import {PageTemplate, Header, Footer} from 'components';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import * as FileService from '../../../services/FileService';

class PruebaFormsPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      campo: {},
      correo: "pepe@pepe.com"
    }
    this.update = this.update.bind(this);
    this.actualizar = this.actualizar.bind(this);
  }

  componentDidMount() {}

  componentWillMount() {

    FileService.getCampo('5661b2a2f3b30194336dc7a6', 'full_description', '1').then(data => {
      console.log("El dato del get es: ", data);
      this.setState({campo: JSON.stringify(data)});
    }).catch(err => {
      console.log(err);
    })
  }
  actualizar(){
    console.log("Actualizando con ", this.state.correo );
    let dato = JSON.parse(this.state.campo);
    console.log(dato);
    dato["id_user"] = this.state.correo;
    FileService.postCampo('5661b2a2f3b30194336dc7a6', 'full_description', dato).then(data => {
      console.log("El resultado del post es: ", data);
    }).catch(err => {
      console.log(err);
    })
  }

  update(event) {
    var key = event.target.getAttribute("name");
    var obj = {};
    obj[key] = event.target.value;
    this.setState(obj);
    this.setState({error: ''});
  }


  render() {
    return (
      <PageTemplate header={< Header />} footer={< Footer />}  wallpaper=''>
        <TextField name='campo' hintText="Este es el campo"  type="text" value={this.state.campo} fullWidth={true}  onChange={this.update} />

        <TextField name='correo' hintText="Correo"  type="text" value={this.state.correo} fullWidth={true}  onChange={this.update} />
        <RaisedButton label="Actualizar" primary={true} fullWidth={true} className="btn-secondary-modal" onClick={this.actualizar}/>
      </PageTemplate>
    )
  }
}

export default PruebaFormsPage;
