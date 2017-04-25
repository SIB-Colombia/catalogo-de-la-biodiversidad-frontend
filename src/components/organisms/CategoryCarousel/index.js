import React from 'react'
import styled from 'styled-components'
import {Grid, Row, Col} from 'react-flexbox-grid'
import Paper from 'material-ui/Paper';
import {Link} from 'components';

const Wrapper = styled.div `

background: #dadada;
padding: 50px 5px;

`
class CategoryCarousel extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {}

  render() {

    const style = {
      height: 100,
      width: 100,
      margin: 20,
      textAlign: 'center',
      display: 'inline-block'
    }

    return (
      <Wrapper className="grey lighten-4">
        <Grid>
          <Row>
            <Col xs={12} className="align-center">
              <Paper style={style} zDepth={1} circle={true}/>
              <Paper style={style} zDepth={1} circle={true}/>
              <Paper style={style} zDepth={1} circle={true}/>
              <Paper style={style} zDepth={1} circle={true}/>
              <Paper style={style} zDepth={1} circle={true}/>
              <Paper style={style} zDepth={1} circle={true}/>
              <Paper style={style} zDepth={1} circle={true}/>
            </Col>
          </Row>
        </Grid>
      </Wrapper>
    )
  }
}

export default CategoryCarousel
