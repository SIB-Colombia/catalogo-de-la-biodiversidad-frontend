import React, {PropTypes} from 'react'
import styled, {css} from 'styled-components'

import {Row, Col} from 'react-materialize';

class SelectUI extends React.Component {

  constructor() {
    super()
  }

  componentDidMount() {}

  componentWillMount() {}

  render() {
    return (
      <div>
        <label>{this.props.title}</label>
        <select className="browser-default" defaultValue=''>
          <option value="" disabled>{this.props.hover}</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>
      </div>
    )
  }
}

SelectUI.propTypes = {
  // children: PropTypes.node,
  // title: PropTypes.string,
  // id: PropTypes.string,
  // reverse: PropTypes.bool,
  // onClose: PropTypes.func.isRequired,
}

export default SelectUI
