import React, {PropTypes} from 'react'
import styled, {css} from 'styled-components'
import {font, palette} from 'styled-theme'
import {Link as RouterLink} from 'react-router'

const styles = css `
  &:hover {

  }
`;

const StyledLink = styled(({
  theme,
  reverse,
  palette,
  ...props
}) => <RouterLink {...props}/>)`${styles}`;

const Anchor = styled.a `${styles}`;

const Link = ({
  ...props
}) => {
  if (props.to) {
    return <StyledLink {...props}/>
  }
  return <Anchor {...props}/>
}

Link.propTypes = {
  palette: PropTypes.string,
  reverse: PropTypes.bool,
  to: PropTypes.string
}

Link.defaultProps = {
  palette: 'primary'
}

export default Link
