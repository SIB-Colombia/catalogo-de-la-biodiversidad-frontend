import React from 'react'
import styled from 'styled-components'

import { IconLink, PrimaryNavigation, Nombre, Block } from 'components'

const Wrapper = styled(Block)`
  display: flex;
  align-items: center;
  padding: 1rem;

  & > :not(:first-child) {
    margin-left: 1rem;
  }
`

const StyledIconLink = styled(IconLink)`
  display: inline-block;
  transform-origin: center;
`

const Header = (props) => {
  return (
    <Wrapper opaque {...props}>
      <StyledIconLink to="/" icon="catalogo" height={100} />
      <Nombre titulo="Catálogo" posttitulo="de" subtitulo="la Biodiversidad" />
      <PrimaryNavigation reverse />
    </Wrapper>
  )
}

export default Header
