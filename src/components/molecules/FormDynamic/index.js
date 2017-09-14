import React from 'react';
import styled from 'styled-components';
import { Link } from 'components';
import Badge from 'material-ui/Badge';
import { palette } from 'styled-theme';
import { SchemaForm } from 'react-schema-form';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import FloatingActionButton from 'material-ui/FloatingActionButton';

const Wrapper = styled.div`
top: 0px;
float: left;
margin-top: -4px;
`

class FormDynamic extends React.Component {

  constructor() {
    super();
    // super(props);
    this.state = {
      open: false,
      schema: {
        "type": "object"
      },
      form: [],
      model: {
        "name": "Steve",
        "environment": "LOCAL"
      }
    }
  }


  componentWillMount() {

    // console.log('->model', this.props.data);

    let array = [];
    this.scan(this.props.data, array, '');
    // console.log('scan->', array);

    let fields = {};
    let sections = [];

    array.forEach((elem, j) => {
      // console.log(elem.property);
      // console.log(elem.value);
      let key = elem.property;
      // let obj = {};
      fields[key] = {
        "title": key,
        "type": "string",
        "default": elem.value || ''
      }
      // fields.(obj);
      // fields.push(obj);
      sections.push(elem.property);
    })


    // console.log('->',fields);
    // console.log('->',sections);

    this.setState({
      schema: {
        "type": "object",
        "properties": fields
      },
      form: sections
    });

  }

  scan(obj, array, stack) {

    for (var property in obj) {
      if (obj.hasOwnProperty(property)) {
        if (typeof obj[property] == "object") {

          let keyName = stack + '.' + property;

          //console.log(keyName);
          // console.log('stack',stack);
          if (keyName.indexOf('reference') > -1 && obj[property].length > 0) {
            //this.references('Referencias',obj[property]);
            // array.push(this.references('Referencias', obj[property]));
          } else {
            if (keyName.split('.').length == 2) {
              // console.log(`${keyName}->`);
              // array.push(<FileDetailTitle key={Math.random()} text={keyName.replace('.', '')} />);
            }
            this.scan(obj[property], array, keyName);
          }
        } else {
          if (obj[property] && !property.match(/^_id$|^__t$|^id_record$|^id_user$|^version$/)) {
            //console.log('>',stack);
            if (Number.isInteger(parseInt(property))) {
              let nameParent = stack.split('.')[1];
              let property = stack.replace(/\d/g, ' ').replace(/\./g, ' ');
              // let transform = stack.replace(/\d/g,'/').replace(/\./g,' ').replace(nameParent,'');
              // array.push(<div className="paragraph" key={Math.random()} ><b>{transform}:</b> {obj[property]}</div>);
              array.push({
                property,
                value: obj[property]
              });
              // console.log(`<b>${transform}:</b> ${obj[property]}`);
            } else {
              array.push({
                property,
                value: obj[property]
              });

              // array.push(<div className="paragraph" key={Math.random()} ><b>{property}:</b> {obj[property]}</div>);
              // let temp = this.state.detail;
            }
          }
        }
      }
    }
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSave = () => {

    console.log('section->', this.props.title);
    alert('ok');
  };


  render() {

    const actions = [< FlatButton label="Cancelar" primary={
      true
    }
      onTouchTap={
        this.handleClose
      } />, < RaisedButton label="Guardar" className="btn-secondary-modal" onTouchTap={this.handleSave} />
    ];

    const customContentStyle = {
      width: '90%',
      maxWidth: 'none'
    };

    return (
      <Wrapper className="inline">
        <FloatingActionButton mini={true} onTouchTap={this.handleOpen} className="btn-secondary-modal">
          <ModeEdit />
        </FloatingActionButton>
        <Dialog titleClassName="modal-header-style" title={this.props.title} contentStyle={customContentStyle} actions={actions} modal={false} open={this.state.open} onRequestClose={this.handleClose} autoScrollBodyContent={true}>
          <SchemaForm schema={this.state.schema} form={this.state.form} model={this.props.data} onModelChange={this.props.onModelChange} />
        </Dialog>
      </Wrapper>
    )
  }
}

export default FormDynamic;
