import React from 'react'
import styled from 'styled-components'
import {Grid, Row, Col} from 'react-flexbox-grid'
import Paper from 'material-ui/Paper';
import {Link} from 'components';
import {palette} from 'styled-theme';

const Wrapper = styled.div `

background: ${palette('grayscale', 2)};
padding: 50px 5px;
.paper{
  text-align: center;
  height: 100px;
  width: 100px;
  margin: 10px;
  display: inline-block;
  img{
    width: 100%;
  }
}

`
class CategoryCarousel extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

    const categories = [
      'IconosTaxones_anfibios.svg',
      'IconosTaxones_artrópodos.svg',
      'IconosTaxones_aves.svg',
      'IconosTaxones_mamíferos.svg',
      'IconosTaxones_moluscos.svg',
      'IconosTaxones_plantas.svg',
      'IconosTaxones_reptiles.svg'
    ];

    return (
      <Wrapper className="grey lighten-4">
        <Grid>
          <Row>
            <Col xs={12} className="align-center">
              {categories.map((record, i) => (
                <Paper key={i} zDepth={1} circle={true} className="paper">
                  <img src={'/categories/' + record}/>
                </Paper>
              ))}
            </Col>
          </Row>
        </Grid>
      </Wrapper>
    )
  }
}

export default CategoryCarousel
