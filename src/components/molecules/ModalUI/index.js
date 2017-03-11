import React, {PropTypes} from 'react'
import styled, {css} from 'styled-components'
// import { Modal } from 'react-materialize';

const Wrapper = styled.div `
.modal-children{
  margin-top:30px;
}
`

class ModalUI extends React.Component {

  constructor() {
    super()
  }

  componentDidMount() {
    $('.modal').modal();
  }

  componentWillMount() {
    $('.modal').modal('close');
  }

  render() {
    return (
      <Wrapper>
        <div className="modal" id={this.props.refe}>
          <div className="modal-content">
            <h5>{this.props.title}</h5>
            <div className="modal-children">
              {this.props.children}
            </div>
          </div>
          <div className="modal-footer">
            <a className="modal-action modal-close waves-effect waves-green btn-flat">Cerrar</a>
          </div>
        </div>
      </Wrapper>
    )
  }
}

ModalUI.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  id: PropTypes.string,
  // reverse: PropTypes.bool,
  // onClose: PropTypes.func.isRequired,
}

export default ModalUI
