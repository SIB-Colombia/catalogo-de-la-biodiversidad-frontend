import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div `
`
const Header = styled.header `
    margin-bottom:65px;
`

const Hero = styled.section `

`

const Content = styled.section `
  height: 100%;
  padding-bottom: 80px;

`
const Footer = styled.footer `
  margin-top: 10px;
`

const PageTemplate = ({
  header,
  children,
  footer,
  ...props
}) => {
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
