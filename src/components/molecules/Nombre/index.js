import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { Label, Block } from 'components'

const Error = styled(Block)`
  margin: 0.5rem 0 0;
`

const Wrapper = styled.div`
`

const Titulo = styled.div`
	float: left;
    font-weight: bold;
	text-transform: uppercase; 
    margin-right: 5px;
`
const Subtitulo = styled.div`
	text-transform: uppercase; 
`


const Nombre = ({ titulo, subtitulo, posttitulo, ...props }) => {
  return (
    <Wrapper>
      {titulo && <Block>
      	<Titulo>{titulo}</Titulo>
      	<Subtitulo> {posttitulo}</Subtitulo>
      	<Subtitulo>{subtitulo}</Subtitulo>
      	</Block>}
    </Wrapper>
  )
}

Nombre.propTypes = {
  nombre: PropTypes.string.isRequired
}

export default Nombre
