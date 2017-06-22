import React from 'react';
import styled from 'styled-components';
import {size, palette} from 'styled-theme';
import {Link} from 'components';

const Wrapper = styled.div `
  font-weight: lighter;
`
class TitleSection extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const align = this.props.align ?  'align-' + this.props.align : 'align-left';
    const color = this.props.color ?  'color-' + this.props.color : 'color-basescale-3';
    const size = this.props.size ?  'title-' + this.props.size : 'title-xxs';
    const bold = this.props.bold ? 'bold' : '';
    const lighter = this.props.lighter ? `t${this.props.lighter}` : '';
    const style = `${align} ${color} ${size} ${bold} ${lighter} ${this.props.className || ''}`;

    return (
      <Wrapper className={style}>
        {this.props.children}
      </Wrapper>
    )
  }
}

export default TitleSection;
