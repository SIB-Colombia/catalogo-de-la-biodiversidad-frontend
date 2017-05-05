import React from 'react';
import styled from 'styled-components';
import {IconLink, Link, HeaderSearchAdvance} from 'components';
import {Grid, Row, Col} from 'react-flexbox-grid';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import Tune from 'material-ui/svg-icons/image/tune';
import Search from 'material-ui/svg-icons/action/search';
import {size, palette} from 'styled-theme';

const Wrapper = styled.nav `
position:fixed;
top:0%;
width:100%;
background: red !important;
z-index: 10 !important;
.box-nav-search-content{
	text-align: center;
	padding: 6px 0px;
	@media ${size('xs')}{
		display: none;
	}
	.box-search-color{
		background: ${palette('grayscale', 1)};

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
	color: ${palette('grayscale', 3)} !important;
}
.box-logo{
	@media ${size('xs')}{
		text-align: center;
	}
}
.box-link{
	text-align:right;
	a {
		height:100% !important;
		line-height: 4 !important;
	}
	@media ${size('xs')}{
		display: none;
	}
}
.brand-logo {
	display: inline-block;
	font-size: 2.1rem;
	padding: 0;
	white-space: nowrap;
	margin-top: 7px;
}
`

const Title = styled.div `
display:inline-block;
vertical-align: middle;
color: ${palette('grayscale', 5)};
`
const TitleMain = styled.div `
font-size:14px;
text-transform: uppercase;
margin-top: -5px;
line-height: 1;
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

  constructor(props) {
    super(props);
  }

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
    //console.log(this.props.filter);
    const actions = [ < FlatButton label = "Cancelar" primary = {
        true
      }
      onTouchTap = {
        this.handleClose
      } />, < Link to = "/file/search" > < RaisedButton label = "Buscar" className = "btn-secondary-modal" onTouchTap = {
        this.handleSearch
      } /> </Link>
    ];

    const customContentStyle = {
      width: '90%',
      maxWidth: 'none'
    };

    return (
      <Wrapper>
        <Paper>
          <Grid fluid>
            <Row>
              <Col xs={12} sm={3} md={3} lg={3} className="box-logo">
                {this.props.filter}
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
              <Col xs={12} sm={5} md={6} lg={6} className="box-nav-search-content">
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
              <Col xs={12} sm={4} md={3} lg={3} className="box-link">
                <Link to="/login/signup" activeClassName="active">
                  <FlatButton label="Registrarse"/>
                </Link>
                <Link to="/login/signin" activeClassName="active">
                  <FlatButton label="Ingresar"/>
                </Link>
              </Col>
            </Row>
          </Grid>
          <Dialog titleClassName="modal-header-style" title="Búsqueda avanzada" contentStyle={customContentStyle} actions={actions} modal={false} open={this.state.open} onRequestClose={this.handleClose} autoScrollBodyContent={true}>
            <HeaderSearchAdvance/>
          </Dialog>
        </Paper>
      </Wrapper>
    )
  }
}

export default Header;
