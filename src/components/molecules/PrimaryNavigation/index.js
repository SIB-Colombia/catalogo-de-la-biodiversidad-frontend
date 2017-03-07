import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { palette } from 'styled-theme'

import { Link } from 'components'

const Ul = styled.ul`

form{

	width:300px;
}

.input-field{

	i{
		color:#333;
		text-align:center;
	}

	input{

		color:#333;
		margin-left: 20px;
	}
}
`

class PrimaryNavigation extends React.Component {

	componentDidMount() {


	}

	render() {
		return (
			<Ul {...this.props} className="right hide-on-med-and-down">
			<li>

			</li>
			<li><Link to="/" onlyActiveOnIndex className="grey-text text-darken-3" activeClassName="active"  >Registrarse</Link></li>
			<li><Link to="/sample-page" className="grey-text text-darken-3" activeClassName="active">Ingresar</Link></li>
			</Ul>
			)
	}
}

export default PrimaryNavigation;