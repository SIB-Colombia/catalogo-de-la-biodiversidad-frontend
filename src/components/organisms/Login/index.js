import React from 'react'
import styled from 'styled-components'

import GoogleMapReact from 'google-map-react';
import {
  Tabs,
  Tab,
  Card,
  Row,
  Col,
  MediaBox,
  Chip,
  Input
} from 'react-materialize';

import {Block, Link} from 'components'

const Wrapper = styled(Block)`
background:#f5f5f5 !important;

h4{
  padding:40px;
}
.tabs{
  background:#00838f;
}
h5{
  padding: 10px 0px;
}
.tabs .tab a{
  color :white;
}
.imagesPreview{
  margin:0px 3px;
}
.material-placeholder{
  display:inline-block;
}
`

const FileContent = ({
  ...props
}) => (

  <Wrapper {...props}>

    <div className="row">
      <div className="col l2 offset-l2">

        <div className="row">
          <div className="input-field col s12">
            <input id="first_name" type="text" className="validate"/>
            <label for="first_name">Nombre de usuario</label>
          </div>
        </div>
        <div class="row">
          <div className="input-field col s12">
            <input id="first_name" type="password" className="validate"/>
            <label for="first_name">Contraseña</label>
          </div>
        </div>
        <div class="row">
          <div className="input-field col s12 center-align">
            <button className="btn waves-effect waves-light" type="submit" name="action">Submit
              <i className="material-icons right">send</i>
            </button>
          </div>
        </div>
      </div>
    </div>

  </Wrapper>
);

export default FileContent
