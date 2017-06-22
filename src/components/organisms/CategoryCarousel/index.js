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
        image: 'https://s3.amazonaws.com/sib-resources/images/catalogo/inicio/png/h-invertebrados.png',
        title: 'INVERTEBRADOS'
      },
      {
        image: 'https://s3.amazonaws.com/sib-resources/images/catalogo/inicio/png/h-vertebrados.png',
        title: 'VERTEBRADOS'
      },
      {
        image: 'https://s3.amazonaws.com/sib-resources/images/catalogo/inicio/png/h-plantas.png',
        title: 'PLANTAS'
      },
      {
        image: 'https://s3.amazonaws.com/sib-resources/images/catalogo/inicio/png/h-hongos.png',
        title: 'HONGOS'
      },
      {
        image: 'https://s3.amazonaws.com/sib-resources/images/catalogo/inicio/png/h-chromista.png',
        title: 'CHROMISTA'
      },
      {
        image: 'https://s3.amazonaws.com/sib-resources/images/catalogo/inicio/png/h-otros.png',
        title: 'OTROS'
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
                    <img src={`${record.image}`}/>
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
