import React from 'react'
import styled from 'styled-components'
import {Grid, Row, Col} from 'react-flexbox-grid'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon'
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'
import Tune from 'material-ui/svg-icons/image/tune'
import Search from 'material-ui/svg-icons/action/search'

import {IconLink, Link, HeaderSearchAdvance} from 'components'

const Wrapper = styled.nav `

position:fixed;
top:0%;
width:100%;
z-index: 2000;



.box-nav-search-content{

	text-align: center;
	padding: 6px 0px;

	.box-search-color{
		background: #eee;

	}

	.box-nav-advance{
	  cursor: pointer;
	  &:hover{
	    opacity: 0.5;
	  }
	}

	.box-nav-search{
	  padding:2px;
	}

	.box-nav-icon{
	  padding-top: 13px;

	}
}

svg{
	color: #555 !important;
}

.box-link{

	text-align:right;
	a {
		height:100% !important;
		line-height: 4 !important;
	}
}

.brand-logo {
 position: absolute;
 color: #fff;
 display: inline-block;
 font-size: 2.1rem;
 padding: 0;
 white-space: nowrap;
 margin-top: 6px;
}
`
const Title = styled.div `
display:inline-block;
vertical-align: middle;
color:#616161;
`
const TitleMain = styled.div `
font-size:14px;
text-transform: uppercase;
line-height:1;
b{
	margin-right: 2px;
}
`
const TitleSub = styled.div `
font-size:14px;
text-transform: uppercase;
line-height:1;
`

class Header extends React.Component {

  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleSearch = () => {
    console.log('buscar');
  };

  render() {

    const actions = [
		< FlatButton label = "Cancelar" primary = {
				true
			}
			onTouchTap = {
				this.handleClose
			} />, 
      <Link to="/file/search">
		  < RaisedButton label = "Buscar" primary = {
		    true
		  }
		  onTouchTap = {
		    this.handleSearch
	      } />
      </Link>
    ]

    return (
      <Wrapper>
        <Paper>
          <Grid fluid>
            <Row>
              <Col xs={3} sm={3} md={3} lg={3}>
                <IconLink to="/" icon="catalogo" className="brand-logo">
                  <Title>
                    <TitleMain>
                      <b>Catálogo</b>
                      de
                    </TitleMain>
                    <TitleSub>
                      la Biodiversidad
                    </TitleSub>
                  </Title>
                </IconLink>
              </Col>
              <Col xs={6} sm={6} md={6} lg={6} className="box-nav-search-content">
                <div className="box-search-color">
                  <Row>
                    <Col xs={1} sm={2} md={2} lg={1} className="box-nav-icon">
                      <Search/>
                    </Col>
                    <Col xs={10} sm={8} md={8} lg={10} className="box-nav-search">
                      <TextField hintText="Buscar..." fullWidth={true}/>
                    </Col>
                    <Col xs={1} sm={1} md={2} lg={1} className="box-nav-icon">
                      <a onTouchTap={this.handleOpen} className="box-nav-advance">
                        <Tune/>
                      </a>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col xs={3} sm={3} md={3} lg={3} className="box-link">
                <Link to="/login/signup" onlyActiveOnIndex className="grey-text text-darken-2" activeClassName="active">
                  <FlatButton label="Registrarse"/>
                </Link>
                <Link to="/login/signin" onlyActiveOnIndex className="grey-text text-darken-2" activeClassName="active">
                  <FlatButton label="Ingresar"/>
                </Link>
              </Col>
            </Row>
          </Grid>
          <Dialog titleClassName="modal-header-style" title="Búsqueda avanzada" actions={actions} modal={false} open={this.state.open} onRequestClose={this.handleClose} autoScrollBodyContent={true}>
            <HeaderSearchAdvance/>
          </Dialog>
        </Paper>
      </Wrapper>
    )
  }
}

export default Header
