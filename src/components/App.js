import React from 'react'
import PropTypes from 'prop-types'
import {injectGlobal, ThemeProvider} from 'styled-components'

// https://github.com/diegohaz/arc/wiki/Styling
import theme from './themes/default'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

injectGlobal `

html {
  height: 100%;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

*{
  font-family: 'Open Sans', sans-serif !important;
}

body {
  background-color: #e4e4e4;
  position: relative;
  margin: 0;
  min-height: calc(100% - 65px);
}

.modal-header-style{
      color:white !important;
	    background: #00bcd4;
}


  .align-center{
    text-align: center;
  }
  .align-justify{
    text-align: justify;
  }
  .align-left{
    text-align: left;
  }
  .align-right{
    text-align: right;
  }
`

const App = ({children}) => {

  let styles = '';

  switch (children.props.route.path) {
    case '/login':
      styles = `background-image: url('../background5.jpg');`;
      break;
    case '/static':
      styles = `background-image: url('../background3.png');`;
      break;
    case '/file':
      styles = `background-image: url('../../background9.jpg');`;
      break;
    default:
  }

  if (styles) {
    styles += `
    background-size: cover;
    background-attachment:fixed;
    `;
  } else {
    styles = `background: #eaeaea;`;
  }

  injectGlobal `
  body{
    ${styles}
  }
  `

  return (
    <MuiThemeProvider theme={theme}>
      {children}
    </MuiThemeProvider>
  )
}

App.propTypes = {
  children: PropTypes.any
}

export default App
