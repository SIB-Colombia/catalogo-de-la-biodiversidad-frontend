import React from 'react'
import styled from 'styled-components'
import {Grid, Row, Col} from 'react-flexbox-grid'
import Paper from 'material-ui/Paper';
import {Link, HomeTitle} from 'components';
import {palette} from 'styled-theme';

const Wrapper = styled.div `
  background: white;
  padding: 40px 0;
  .box{

    padding: 10px 5px;

    .box-img{
      text-align: center;
      img{
        max-width: 100px;
        border-radius: 100%;
      }
    }
    .box-text{
      .hp-title{
        color:#333;
        font-weight: 600;
        font-size: 23px;
        padding-bottom: 5px;
      }
      .hp-description{
        color:#333;
        font-weight: lighter;
        font-size: 16px;
        line-height: 2;
        text-align: justify;
      }
    }
  }

`
class HomePrinciples extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

    const categories = [
      {
        title: 'Principio 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sollicitudin, lectus efficitur viverra tincidunt, purus ex feugiat est, nec congue ipsum nisl non mi. Integer eu'
      }, {
        title: 'Principio 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sollicitudin, lectus efficitur viverra tincidunt, purus ex feugiat est, nec congue ipsum nisl non mi. Integer eu'
      }, {
        title: 'Principio 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sollicitudin, lectus efficitur viverra tincidunt, purus ex feugiat est, nec congue ipsum nisl non mi. Integer eu'
      }, {
        title: 'Principio 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sollicitudin, lectus efficitur viverra tincidunt, purus ex feugiat est, nec congue ipsum nisl non mi. Integer eu'
      }, {
        title: 'Principio 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sollicitudin, lectus efficitur viverra tincidunt, purus ex feugiat est, nec congue ipsum nisl non mi. Integer eu'
      }, {
        title: 'Principio 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sollicitudin, lectus efficitur viverra tincidunt, purus ex feugiat est, nec congue ipsum nisl non mi. Integer eu'
      }
    ];

    return (
      <Wrapper>
        <Grid className="container">
          <HomeTitle text='Principios del Catálogo'/>
          <Row>
            {categories.map((record, i) => (
              <Col key={i} xs={12} sm={6} ms={6} lg={6}>
                <Row className="box">
                  <Col className="box-img" xs={12} sm={6} ms={3} lg={3}>
                    <img src={`/file.jpg`}/>
                  </Col>
                  <Col className="box-text" xs={12} sm={6} ms={9} lg={9}>
                    <div className="hp-title">{record.title}</div>
                    <div className="hp-description">{record.description}</div>
                  </Col>
                </Row>
              </Col>
            ))}
          </Row>
        </Grid>
      </Wrapper>
    )
  }
}

export default HomePrinciples
