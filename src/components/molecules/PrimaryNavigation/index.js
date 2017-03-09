import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { Link } from 'components'

const Ul = styled.ul`

`

class PrimaryNavigation extends React.Component {

	render() {
		return (
			<Ul {...this.props} className="right hide-on-med-and-down">
				<li>
					<Link to="/" onlyActiveOnIndex  className="grey-text text-darken-2" activeClassName="active"  >
						Registrarse
					</Link>
				</li>
				<li>
					<Link to="/sample-page"  className="grey-text text-darken-2" activeClassName="active">
						Ingresar
					</Link>
				</li>
			</Ul>
			)
		}
	}

export default PrimaryNavigation;