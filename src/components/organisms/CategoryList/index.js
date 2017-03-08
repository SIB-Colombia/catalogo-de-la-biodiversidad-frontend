import React from 'react'
import styled from 'styled-components'

import { Block, Link, Heading } from 'components'

const Wrapper = styled(Block)`
padding:50px !important;
img{
  margin:0px 6px;
  width:100px;
  height:100px;
}
`
class CategoryList extends React.Component {

  componentDidMount() {

  }

  render() {
    return (
      <div className="grey lighten-2">
        <div className="row">
          <Wrapper className="col l12 s12 center-align">
            {this.props.data.map((record, i) => (
              <img key={i} src="http://www.guerra-creativa.com/img/uploads/images/3feohuh0.jpg" className="circle z-depth-2" />
            ))}
          </Wrapper>
        </div>
      </div>
    )
  }
}

export default CategoryList


