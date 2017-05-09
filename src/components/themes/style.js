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

.title-xxs{
  font-size: ${theme.fonts.xxs} !important;
  text-align: center;
  margin: 0;
  font-weight: lighter;
  color:${theme.palette.grayscale[6]} !important;
  &.bold{
    font-weight: bold;
  }
}

.title-xs{
  font-size: ${theme.fonts.xs} !important;
  text-align: center;
  margin: 0;
  font-weight: lighter;
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
  padding: 15px;
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

/*Colors*/

.color-primary{
  color: ${theme.palette.primary[0]} !important;
}
.color-secondary{
  color: ${theme.palette.secondary[0]} !important;
}
.color-option{
  color: ${theme.palette.option[0]} !important;
}
.color-text{
  color: ${theme.palette.text[0]} !important;
}

/*grayscale*/

.color-grayscale-0{
  color: ${theme.palette.grayscale[0]} !important;
}
.color-grayscale-1{
  color: ${theme.palette.grayscale[1]} !important;
}
.color-grayscale-2{
  color: ${theme.palette.grayscale[2]} !important;
}
.color-grayscale-3{
  color: ${theme.palette.grayscale[3]} !important;
}
.color-grayscale-4{
  color: ${theme.palette.grayscale[4]} !important;
}
.color-grayscale-5{
  color: ${theme.palette.grayscale[5]} !important;
}
.color-grayscale-6{
  color: ${theme.palette.grayscale[6]} !important;
}

/*basescale*/

.color-basescale-0{
  color: ${theme.palette.basescale[0]} !important;
}
.color-basescale-1{
  color: ${theme.palette.basescale[1]} !important;
}
.color-basescale-2{
  color: ${theme.palette.basescale[2]} !important;
}
.color-basescale-3{
  color: ${theme.palette.basescale[3]} !important;
}
.color-basescale-4{
  color: ${theme.palette.basescale[4]} !important;
}
.color-basescale-5{
  color: ${theme.palette.basescale[5]} !important;
}
.color-basescale-6{
  color: ${theme.palette.basescale[6]} !important;
}
.color-basescale-7{
  color: ${theme.palette.basescale[7]} !important;
}
.color-basescale-8{
  color: ${theme.palette.basescale[8]} !important;
}
.color-basescale-9{
  color: ${theme.palette.basescale[9]} !important;
}

/*Papers*/

.paper-padding-1{
  padding: 10px 15px;
}
.paper-padding-2{
  padding: 20px 25px;
}
.paper-padding-3{
  padding: 30px 35px;
}
.paper-padding-4{
  padding: 40px 45px;
}
.paper-padding-5{
  padding: 50px 55px;
}


/*Paddings*/

.padding-top-1{
  padding-top: 10px;
}
.padding-top-2{
  padding-top: 20px;
}
.padding-top-3{
  padding-top: 30px;
}

.padding-bottom-1{
  padding-bottom: 10px;
}
.padding-bottom-2{
  padding-bottom: 20px;
}
.padding-bottom-3{
  padding-bottom: 30px;
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
