import React, {PropTypes} from 'react'
import styled from 'styled-components'

const Wrapper = styled.img `
`
const Image = ({
  name,
  ...props
}) => {

  var img = `./${name}`;
  return (<Wrapper src={name}/>)
}

export default Image
