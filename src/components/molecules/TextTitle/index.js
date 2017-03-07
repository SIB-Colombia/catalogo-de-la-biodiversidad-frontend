import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { Label, Block } from 'components'

const Error = styled(Block)`

`

const Wrapper = styled.a`
`

const titile = styled.div`
	
    font-weight: bold;
	text-transform: uppercase; 
    
`
const subtitle = styled.div`
	text-transform: uppercase; 
`


const TextTitle = ({ title, middelTitle, subtitle, ...props }) => {
  return (
    <Wrapper>
      {title && <Block>
      	<title>{title}</title>
      	<subtitle> {middelTitle}</subtitle>
      	<subtitle>{subtitle}</subtitle>
      	</Block>}
    </Wrapper>
  )
}

TextTitle.propTypes = {
 // nombre: PropTypes.string.isRequired
}

export default TextTitle
