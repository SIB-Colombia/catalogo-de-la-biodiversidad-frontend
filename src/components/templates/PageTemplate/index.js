import React from 'react';
import PropTypes from 'prop-types';
import styled, {injectGlobal} from 'styled-components';

const Wrapper = styled.div `
`
const Header = styled.header `
    margin-bottom:65px;
`
const Content = styled.section `
  height: 100%;
  padding-bottom: 152px;
`
const Footer = styled.footer `
  margin-top: 10px;
`
const PageTemplate = ({
  header,
  children,
  wallpaper,
  footer,
  ...props
}) => {

  if (wallpaper) {

    //Custom wallpaper
    if (wallpaper.indexOf('.jpg') > -1 || wallpaper.indexOf('.png') > -1) {

      injectGlobal `
  body{
    background-image: url('${wallpaper}');
    background-size: cover;
    background-position: center center;
    background-attachment:fixed;
  }
`
    } else {

      //Module wallpaper

      switch (wallpaper) {
        case 'File':
          injectGlobal `
      body{
        background-image: url('https://s3.amazonaws.com/sib-resources/images/catalogo/destacadas/png/f-moluscos.png');
        background-size: cover;
        /*background-position: center center;*/
        background-position: top center;
        background-attachment:fixed;
        background-repeat: no-repeat;
        background-color: white;
      }
    `
          break;
        case 'Login':
          injectGlobal `
      body{
        background-image: url(/background/23890_orig.jpg);
        background-size: cover;
        background-position: center center;
        background-attachment:fixed;
      }
    `
          break;
        case 'Static':
          injectGlobal `
      body{
        background-image: url(/background/82168_orig.jpg);
        background-size: cover;
        background-position: center center;
        background-attachment:fixed;
      }
    `
          break;
        default:

      }
    }
  }

  return (
    <Wrapper {...props}>
      {header
        ? <Header>{header}</Header>
        : false}
      <Content>{children}</Content>
      {footer
        ? <Footer>{footer}</Footer>
        : false}
    </Wrapper>
  )
}

// PageTemplate.propTypes = {
//   header: PropTypes.node.isRequired,
//   footer: PropTypes.node.isRequired,
//   children: PropTypes.any.isRequired
// }

export default PageTemplate;
