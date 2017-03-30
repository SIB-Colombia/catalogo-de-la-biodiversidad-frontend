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
  Input,
  MediaBox,
  Chip,
  Icon
} from 'react-materialize';

const Wrapper = styled(Block)`
`

class FileImage extends React.Component {

  componentDidMount() {
    setTimeout(function() {

      $('.autocomplete').autocomplete({
        data: {
          "Apple": null,
          "Microsoft": null,
          "Google": 'http://placehold.it/250x250'
        },
        limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
        onAutocomplete: function(val) {
          // Callback function when value is autcompleted.
        },
        minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
      });

      $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15, // Creates a dropdown of 15 years to control year
        // The title label to use for the month nav buttons
        labelMonthNext: 'Mes siguiente',
        labelMonthPrev: 'Mes anterior',

        // The title label to use for the dropdown selectors
        labelMonthSelect: 'Selecciona un mes',
        labelYearSelect: 'Selecciona un año',

        // Months and weekdays
        monthsFull: [
          'Enero',
          'Febrero',
          'Marzo',
          'Abril',
          'Mayo',
          'Junio',
          'Julio',
          'Agosto',
          'Septiembre',
          'Octubre',
          'Noviembre',
          'Diciembre'
        ],
        monthsShort: [
          'Ene',
          'Feb',
          'Mar',
          'Abr',
          'May',
          'Jun',
          'Jul',
          'Ago',
          'Sep',
          'Oct',
          'Nov',
          'Dic'
        ],
        weekdaysFull: [
          'Domingo',
          'Lunes',
          'Martes',
          'Miércoles',
          'Jueves',
          'Viernes',
          'Sábado'
        ],
        weekdaysShort: [
          'Dom',
          'Lun',
          'Mar',
          'Mie',
          'Jue',
          'Vie',
          'Sab'
        ],

        // Materialize modified
        weekdaysLetter: [
          'D',
          'L',
          'M',
          'X',
          'J',
          'V',
          'S'
        ],

        // Today and clear
        today: 'Hoy',
        clear: 'Limpiar',
        close: 'Cerrar'
      });
    }, 100);
  }

  render() {
    return (
      <Wrapper className="animated fadeIn">
        <br/>
        <h5>Elementos para formulario</h5>
        <Row>
          <Input placeholder="Placeholder" s={6} label="Nombre"/>
          <Input s={6} label="Apellido"/>
          <Input s={12} label="Deshabilitado" defaultValue="Campo no editable" disabled/>
          <Input type="password" label="password" s={12}/>
          <Input type="email" label="Email" s={12} validate={true}/>
        </Row>
        <Row>
          <Input s={6} label="Nombre" validate>
            <Icon>account_circle</Icon>
          </Input>
          <Input s={6} label="Teléfono" validate type='tel'>
            <Icon>phone</Icon>
          </Input>
        </Row>
        <Row>
          <div className="input-field col s12">
            <textarea id="textarea1" className="materialize-textarea"></textarea>
            <label>Caja de texto</label>
          </div>
        </Row>
        <Row>
          <Input s={12} type='select' label="Seleccione una opción" defaultValue='2'>
            <option value='1'>Opción 1</option>
            <option value='2'>Opción 2</option>
            <option value='3'>Opción 3</option>
          </Input>
        </Row>
        <Row>
          <div>
            <Input name='group1' type='radio' value='rojo' label='rojo'/>
            <Input name='group1' type='radio' value='amarillo' label='amarillo'/>
            <Input name='group1' type='radio' value='verde' label='verde' className='with-gap'/>
            <Input name='group1' type='radio' value='azul' label='azul' disabled='disabled'/>
          </div>
        </Row>
        <Row>
          <Input name='group1' type='checkbox' value='rojo' label='rojo'/>
          <Input name='group1' type='checkbox' value='amarillo' label='amarillo' defaultValue='checked'/>
          <Input name='group1' type='checkbox' value='verde' label='verde' className='filled-in' defaultChecked='checked'/>
          <Input name='group1' type='checkbox' value='azul' label='azul' disabled='disabled'/>
        </Row>
        <Row>
          <Input name='on' type='switch' value='1'/>
        </Row>
        <Row>
          Autocompletado:
          <div className="input-field col s12">
            <i className="material-icons prefix">textsms</i>
            <input type="text" id="autocomplete-input" className="autocomplete"/> {/* <label for="autocomplete-input">Autocomplete</label> */}
          </div>
        </Row>
        <Row>
          Fecha:
          <input type="date" className="datepicker"/>
        </Row>
        <Row>
          <div className="file-field input-field">
            <div className="btn">
              <span>Archivo</span>
              <input type="file"/>
            </div>
            <div className="file-path-wrapper">
              <input className="file-path validate" type="text"/>
            </div>
          </div>
        </Row>
        <Row>
          Rango:
          <p className="range-field">
            <input type="range" id="test5" min="0" max="100"/>
          </p>
        </Row>
      </Wrapper>
    )
  }
}

export default FileImage;
