import theme from './default';

const style = `
html {
  height: 100%;
  box-sizing: border-box;
}
body {
  position: relative;
  margin: 0;
  min-height: calc(100% - 65px);
}
*,
*:before,
*:after {
  box-sizing: inherit;
}
*{
  font-family: ${theme.fonts.primary} !important;
}
a{
  text-decoration: none !important;
}
.modal-header-style{
  /*color:white !important;*/
  /*background:  ${theme.palette.secondary[0]};*/
}

/*Titles*/

.title-xs{
  font-size: ${theme.fonts.xs} !important;
  text-align: center;
  margin: 0;
  font-weight: lighter;
  padding: 0 0 15px 0;
  color:${theme.palette.grayscale[6]} !important;
  &.bold{
    font-weight: bold;
  }
}

.title-sm{
  font-size: ${theme.fonts.xs} !important;
  text-align: center;
  margin: 0;
  font-weight: lighter;
  padding: 0 0 15px 0;
  font-size: ${theme.fonts.sm} !important;
  &.bold{
    font-weight: bold;
  }
}

.title-md{
  font-size: ${theme.fonts.xs} !important;
  text-align: center;
  margin: 0;
  font-weight: lighter;
  padding: 0 0 15px 0;
  font-size: ${theme.fonts.md} !important;
  &.bold{
    font-weight: bold;
  }
}

.title-lg{
  font-size: ${theme.fonts.xs} !important;
  text-align: center;
  margin: 0;
  font-weight: lighter;
  zpadding: 0 0 15px 0;
  font-size: ${theme.fonts.lg} !important;
  &.bold{
    font-weight: bold;
  }
}

/*Butons*/

.btn-primary, .btn-primary-floating button{
  background-color: ${theme.palette.primary[0]} !important;
  color:white !important;

  svg{
    color:white !important;
    vertical-align: text-top;
  }
  &.inverse{
    background-color: ${theme.palette.grayscale[0]} !important;
    color:${theme.palette.primary[0]} !important;
    svg{
      color:${theme.palette.primary[0]} !important;
    }
  }
}

.btn-primary-modal{
  button{
    background-color: ${theme.palette.primary[0]} !important;
  }
  span{
    color:white !important;
  }
}

.btn-secondary, .btn-secondary-floating button,.btn-secondary.modal button{
  background-color: ${theme.palette.secondary[0]} !important;
  &.padding{
    color:white !important;
  }
  padding: 0 10px !important;
  svg{
    color:white !important;
    vertical-align: text-top;
  }
  &.inverse{
    background-color: ${theme.palette.grayscale[0]} !important;
    color:${theme.palette.secondary[0]} !important;
    svg{
      color:${theme.palette.secondary[0]} !important;
    }
  }
}

.btn-secondary-modal{
  button{
    background-color: ${theme.palette.secondary[0]} !important;
  }
  span{
    color:white !important;
  }
}

.btn-primary:hover:not(.inverse),.btn-secondary:hover:not(.inverse),.btn-primary-modal:hover {
  opacity: 0.5;
  color:white !important;
}

/*Badges */

.badge{
    &.cr,&.ex,&.en{
      span{
        color:white !important;
        font-weight: bold !important;
      }
    }
    &.cr{
      span{
        background: ${theme.palette.basescale[9]} !important;
      }
    }
    &.ex{
      span{
        background: ${theme.palette.basescale[7]} !important;
      }
    }
    &.en{
      span{
        background: ${theme.palette.basescale[8]} !important;
      }
    }
}

.card-star{
  position: absolute !important;
  z-index: 1 !important;
  padding: 0 5px !important;

  img{
    background-color: ${theme.palette.secondary[0]} !important;
    padding: 5px 5px 7px 5px !important;
    width: 30px !important;
    height: 30px !important;
    border-radius: 0 !important;
    border-bottom-left-radius: 2em !important;
    border-bottom-right-radius: 2em !important;
  }
}


span[role=menuitem] {
  color: ${theme.palette.text[0]} !important;
}

/*Colors*/

.color-primary{
  color: ${theme.palette.primary[0]} !important;
}
.color-secondary{
  color: ${theme.palette.secondary[0]} !important;
}
.color-text{
  color: ${theme.fonts.text[0]} !important;
}

/*Aligns*/

.align-center{
  text-align: center !important;
}
.align-justify{
  text-align: justify !important;
}
.align-left{
  text-align: left !important;
}
.align-right{
  text-align: right !important;
}
`;

export default style;
