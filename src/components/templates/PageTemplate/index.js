import React, {PropTypes} from 'react'
import styled from 'styled-components'

const Wrapper = styled.div `
background: #e8e8e8;
`

const Header = styled.header `
`

const Hero = styled.section `
`

const Content = styled.section `
margin-top:65px;
`

const Footer = styled.footer `
`

const PageTemplate = ({
  header,
  children,
  footer,
  ...props
}) => {
  return (
    <Wrapper {...props}>
      <Header>{header}</Header>
      <Content>{children}</Content>
      <Footer>{footer}</Footer>
    </Wrapper>
  )
}

PageTemplate.propTypes = {
  header: PropTypes.node.isRequired,
  footer: PropTypes.node.isRequired,
  children: PropTypes.any.isRequired
}

export default PageTemplate
