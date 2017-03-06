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

const PrimaryNavigation = (props) => {
	return (
		<Ul {...props} className="right hide-on-med-and-down">
		<li>


		<form>
		<div className="input-field col s12">
		<i className="material-icons prefix">search</i>
		<input id="icon_prefix" type="text" className="validate" />
		<label for="icon_prefix">Buscar</label>
		</div>
		</form>


		</li>
		<li><Link to="/" onlyActiveOnIndex className="grey-text text-darken-3" activeClassName="active"  >Registrarse</Link></li>
		<li><Link to="/sample-page" className="grey-text text-darken-3" activeClassName="active">Ingresar</Link></li>
		</Ul>
		)
}

PrimaryNavigation.propTypes = {
	reverse: PropTypes.bool,
}

export default PrimaryNavigation