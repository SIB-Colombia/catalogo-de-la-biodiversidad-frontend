import React from 'react'
import styled from 'styled-components'
import {Grid, Row, Col} from 'react-flexbox-grid'
import Paper from 'material-ui/Paper';
import {Link, HomeTitle} from 'components';
import {palette} from 'styled-theme';

const Wrapper = styled.div `

background: ${palette('grayscale', 2)};
background-image: -webkit-radial-gradient(#0098A6, #008E9B);
background-image: radial-gradient(#0098A6, #008E9B);
padding: 80px 0px 80px 0px;
.box{
  display: inline-block;
  span{
    color:white;
    font-weight: lighter;
  }
  .paper{
    text-align: center;
    height: 130px;
    width: 130px;
    margin: 10px 15px;
    img{
      width: 100%;
    }
    &:hover{
      cursor: pointer;
      opacity: 0.7;
    }
  }
}
`
class CategoryCarousel extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

    const categories = [
      {
        image: 'IconosTaxones_anfibios.svg',
        title: 'ANFIBIOS'
      },
      {
        image: 'IconosTaxones_artrópodos.svg',
        title: 'ARTRÓPODOS'
      },
      {
        image: 'IconosTaxones_aves.svg',
        title: 'AVES'
      },
      {
        image: 'IconosTaxones_mamíferos.svg',
        title: 'MAMÍFEROS'
      },
      {
        image: 'IconosTaxones_moluscos.svg',
        title: 'MOLÚSCOS'
      },
      {
        image: 'IconosTaxones_plantas.svg',
        title: 'PLANTAS'
      },
      {
        image: 'IconosTaxones_reptiles.svg',
        title: 'REPTÍLES'
      }
    ];

    return (
      <Wrapper>
        <Grid>
          <Row className="container">
            <HomeTitle text='Explora a través de grupos biológicos' className='white'/>
            <Col xs={12} sm={12} md={12} lg={12} className="align-center">
              {categories.map((record, i) => (
                <div key={i} className="box">
                  <Paper zDepth={1} circle={true} className="paper">
                    <img src={`/categories/${record.image}`}/>
                  </Paper>
                  <span>{record.title}</span>
                </div>
              ))}
            </Col>
          </Row>
        </Grid>
      </Wrapper>
    )
  }
}

export default CategoryCarousel
