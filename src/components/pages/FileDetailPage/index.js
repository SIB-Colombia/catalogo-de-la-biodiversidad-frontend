import React, {PropTypes} from 'react';
import Paper from 'material-ui/Paper';
import {Grid, Row, Col} from 'react-flexbox-grid';
import RaisedButton from 'material-ui/RaisedButton';

import {SchemaForm, utils} from 'react-schema-form';
import RcSelect from 'react-schema-form-rc-select/lib/RcSelect';

import {PageTemplate, Header, Footer} from 'components';

class FileDetailPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: null,
      validationResult: {},
      schema: {},
      form: [],
      model: {},
      schemaJson: '',
      formJson: ''
    }
    this.onModelChange = this.onModelChange.bind(this);
    this.onValidate = this.onValidate.bind(this);
    this.onFormChange = this.onFormChange.bind(this);
    this.onSchemaChange = this.onSchemaChange.bind(this);
  }

  componentDidMount() {}

  componentWillMount() {

    this.setState({id: this.props.params.id})

    this.setState({
      "schema": {
        "type": "object",
        "title": "Comment",
        "properties": {
          "name": {
            "title": "Nombre",
            "type": "string",
            "default": "Leonardo R"
          },
          "email": {
            "title": "Email",
            "type": "string",
            "pattern": "^\\S+@\\S+$",
            "validationMessage": "Email must be of proper format: example@example",
            "description": "Email will be used for evil."
          },
          "environment": {
            "type": "string",
            "title": "Environment",
            "enum": [
              "LOCAL",
              "SIT1",
              "SIT2",
              "SIT3",
              "UAT1",
              "UAT2"
            ]
          },
          "comment": {
            "title": "Comment",
            "type": "string",
            "maxLength": 20,
            "validationMessage": "Don't be greedy! 20 Characters max please :)",
            "description": "Please write your comment here."
          }
        },
        "required": ["name", "email", "comment"]
      },
      "form": [
        "name",
        "email",
        "environment", {
          "key": "comment",
          "type": "textarea",
          "placeholder": "Make a comment"
        }
      ]

    })

  }

  onModelChange(key, val) {
    console.log('ExamplePage.onModelChange:', key, val);
    var newModel = this.state.model;
    utils.selectOrSet(key, newModel, val);
    this.setState({model: newModel});
    console.log(this.state.model);
  }

  onValidate() {
    console.log('ExamplePage.onValidate is called');
    let result = utils.validateBySchema(this.state.schema, this.state.model);
    this.setState({validationResult: result});
  }

  onFormChange(val) {
    try {
      let f = JSON.parse(val);
      this.setState({formJson: val, form: f});
    } catch (e) {}
  }

  onSchemaChange() {
    try {
      let s = JSON.parse(val);
      this.setState({schemaJson: val, schema: s});
    } catch (e) {}
  }

  render() {

    var mapper = {
      "rc-select": RcSelect
    };

    return (
      <PageTemplate header={< Header />} footer={< Footer />}>
        <Grid>
          <Row>
            <Col xs={12}>
              <Paper style={{
                'padding': '20px'
              }}>
                <h3>Schema:</h3>
                <pre>{JSON.stringify(this.state.schema,undefined,2,2)}</pre>
                <h3>Form:</h3>
                <pre>{JSON.stringify(this.state.form,undefined,2,2)}</pre>
                <SchemaForm schema={this.state.schema} form={this.state.form} model={this.state.model} onModelChange={this.onModelChange} mapper={mapper}/> {/* {this.state.model} */}
                <h3>Model:</h3>
                <pre>{JSON.stringify(this.state.model,undefined,2,2)}</pre>
                <h3>Validation:</h3>
                <RaisedButton primary={true} label="Validate" onTouchTap={this.onValidate}/>
                <pre>{JSON.stringify(this.state.validationResult,undefined,2,2)}</pre>
              </Paper>
            </Col>
          </Row>
        </Grid>
      </PageTemplate>
    )
  }
}

export default FileDetailPage;
