import React from 'react'
import styled from 'styled-components'
//import { Button, Card, Row, Col } from 'react-materialize';

import { IconLink, PrimaryNavigation, Link, TextTitle } from 'components'

// const Wrapper = styled(Block)`
// `

const Wrapper = styled.nav`

.brand-logo {
	margin-left:20px;
}
`
const TitleContent = styled.div`
display:inline-block;
vertical-align: middle;
`

const Titulo = styled.div`
font-size:14px;
text-transform: uppercase; 
line-height:1;
`
const Subtitulo = styled.div`
font-size:14px;
text-transform: uppercase; 
line-height:1;
`

// const StyledIconLink = styled(IconLink)`
// display: inline-block;
// transform-origin: center;
// `

// const Header = (props) => {
//   return (
//     <Wrapper palette="white" opaque reverse {...props}>
//     <StyledIconLink to="/" icon="catalogo" height={100} />
//     <PrimaryNavigation reverse />
//     </Wrapper>
//     )
// }

 // <StyledIconLink to="/" icon="catalogo" height={100} />
 // 
 const Header = (props) => {
 	return (
 		<Wrapper>
 		<div className="nav-wrapper grey lighten-3">
 		<IconLink to="/" icon="catalogo" className="brand-logo grey-text text-darken-3" >
 		<TitleContent>
 		<Titulo><b>Catálogo</b> de</Titulo>
 		<Subtitulo>la Biodiversidad</Subtitulo>
 		</TitleContent>
 		</IconLink>
 		
 		



 		<PrimaryNavigation reverse />
 		</div>
 		</Wrapper>
 		)
 }

 export default Header

		// <Link  to="/" href="#" className="brand-logo grey-text text-darken-3">
		// </Link>	
		// 
		// // <IconLink to="/" icon="catalogo" className="brand-logo grey-text text-darken-3" />
 		//<TextTitle className="brand-logo" title="Catálogo" middleTitle="de" subtitle="la Biodiversidad" />