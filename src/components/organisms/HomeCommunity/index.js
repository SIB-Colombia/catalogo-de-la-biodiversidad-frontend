import React from 'react'
import styled from 'styled-components'
import {Grid, Row, Col} from 'react-flexbox-grid'
import Paper from 'material-ui/Paper';
import {Link, HomeTitle} from 'components';
import {palette} from 'styled-theme';
const CarouselPreview = require('react-responsive-carousel').Carousel;

const Wrapper = styled.div `
  background: white;
  padding: 40px 0;
  .box{
    padding: 50px 0;
    .box-img{
      text-align: center;
      img{
        max-width: 200px;
        border-radius: 100%;
      }
    }
    .box-text{
      .hp-name{
        text-align: left;
        color:${palette('secondary',0)};;
        font-weight: bold;
        font-size: 20px;
        padding: 4px 0;
      }
      .hp-description{
        color:#333;
        font-weight: lighter;
        font-size: 18px;
        line-height: 2;
        text-align: justify;
        padding-bottom: 5px;
      }
      .hp-rol{
        text-align: left;
        color:#333;
        font-weight: bold;
        font-size: 16px;
        line-height: 2;
        text-align: justify;
        font-style: italic;
      }
    }
  }
  .carousel .control-dots .dot{
    width: 12px;
    height: 12px;
    background: ${palette('secondary',0)};
  }
  .carousel .slide{
    background: transparent;
  }
`
class HomeCommunity extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

    const communities = [
      {
        name: 'Brigitte Baptiste',
        rol: 'Directora, Instituto Humboldt',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sollicitudin, lectus efficitur viverra tincidunt, purus ex feugiat est, nec congue ipsum nisl non mi. Integer eu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sollicitudin, lectus efficitur viverra tincidunt, purus ex feugiat est, nec congue ipsum nisl non mi. Integer eu'
      }, {
        name: 'Brigitte Baptiste',
        rol: 'Directora, Instituto Humboldt',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sollicitudin, lectus efficitur viverra tincidunt, purus ex feugiat est, nec congue ipsum nisl non mi. Integer eu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sollicitudin, lectus efficitur viverra tincidunt, purus ex feugiat est, nec congue ipsum nisl non mi. Integer eu'
      }, {
        name: 'Brigitte Instituto',
        rol: 'Directora, Instituo Humboldt',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sollicitudin, lectus efficitur viverra tincidunt, purus ex feugiat est, nec congue ipsum nisl non mi. Integer eu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sollicitudin, lectus efficitur viverra tincidunt, purus ex feugiat est, nec congue ipsum nisl non mi. Integer eu'
      }
    ];

    return (
      <Wrapper>
        <Grid className="container">
          <HomeTitle text='Comunidad'/>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12}>
              <CarouselPreview showThumbs={false} showStatus={false}>
                {communities.map((record, i) => (

                  <Row key={i} className="box">
                    <Col className="box-img" xs={12} sm={4} md={3} lg={3}>
                      <img src={`/human.png`}/>
                    </Col>
                    <Col className="box-text" xs={12} sm={8} md={9} lg={9}>
                      <div className="hp-description">
                        {record.description}
                      </div>
                      <div className="hp-name">{record.name}</div>
                      <div className="hp-rol">{record.rol}</div>
                    </Col>
                  </Row>

                ))}
              </CarouselPreview>
            </Col>
          </Row>
        </Grid>
      </Wrapper>
    )
  }
}

export default HomeCommunity
