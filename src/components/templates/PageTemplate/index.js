import React, { PropTypes } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
background: #e8e8e8;
`

const Header = styled.header`
`

const Hero = styled.section`
`

const Content = styled.section`
`

const Footer = styled.footer`
`

const PageTemplate = ({ header, hero, children, footer, ...props }) => {
  return (
    <Wrapper {...props}>
      <Header>{header}</Header>
      {hero && <Hero>{hero}</Hero>}
      <Content>{children}</Content>
      <Footer>{footer}</Footer>
    </Wrapper>
  )
}

PageTemplate.propTypes = {
  header: PropTypes.node.isRequired,
  hero: PropTypes.node,
  footer: PropTypes.node.isRequired,
  children: PropTypes.any.isRequired,
}

export default PageTemplate
