import React, {PropTypes} from 'react'
import styled, {css} from 'styled-components'
// import {Modal} from 'react-materialize';

const Wrapper = styled.div `

`

class ReactSchemaEasyForm extends React.Component {

  constructor(props) {
    super(props);
    // this.state = {
    //   schema: {}
    // }
  }

  componentDidMount() {}

  componentWillMount() {

    // for (let control in this.props.schema) {
    //   this.props.schema[control].value = '';
    // }
    // this.setState({schema: this.props.schema});
  }

  // change(propertyName, event) {
  //   let model = this.state.schema;
  //   model[propertyName].value = event.target.value;
  //   this.setState({schema: model});
  // }

  //value={this.state.schema[control]}

  render() {

    // console.log('render');
    // console.log('easy->', this.props);
    // console.log('---x', this.state);

    let indents = [];

    // this.setState({'reference': 'jeje'});

    for (let control in this.props.schema) {

      // console.log('');
      // console.log(control, '->', this.props.schema[control].instance);

      let temp = '';

      switch (this.props.schema[control].instance) {
        case 'String':
          temp = <div className="input-field col s6" key={control}>
            <input type="text" className="validate" value={this.props.schema[control].value} onChange={(e) => this.props.update(control, e)}/>
            <label>{control}</label>
          </div>
          break;
        case 'Number':
          temp = <div className="input-field col s6" key={control}>
            <input type="number" className="validate" value={this.props.schema[control].value} onChange={(e) => this.props.change(control, e)}/>
            <label>{control}</label>
          </div>
          break;
        case 'Date':
          temp = <div className="input-field col s6" key={control}>
            {control}:<input type="date" className="" value={this.props.schema[control].value} onChange={(e) => this.props.change(control, e)}/>
          </div>
          break;
        case 'ObjectID':

          break;
        default:

      }
      indents.push(temp);
    }

    // console.log('---As:', this.props.schema);

    return (
      <Wrapper>
        {/* hehe:{JSON.stringify(this.state.schema)} */}

        <div className="row">
          <form className="col s12">
            {indents}
          </form>
        </div>
      </Wrapper>
    )
  }

}

// ReactSchemaEasyForm.propTypes = {
// children: PropTypes.node,
// title: PropTypes.string,
// id: PropTypes.string,
// reverse: PropTypes.bool,
// onClose: PropTypes.func.isRequired,
// }

export default ReactSchemaEasyForm;
