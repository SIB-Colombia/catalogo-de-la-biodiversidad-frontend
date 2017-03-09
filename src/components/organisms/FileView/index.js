import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'

import { Tabs, Tab, Card, Row, Col, MediaBox, Chip } from 'react-materialize';

import { Block, Link } from 'components'

const Cover = styled(Block)`
background:red;
width:100%;
height:calc(60% - 50px);
position:absolute;
left:0px;
top:100px;
z-index:0;
`

const Wrapper = styled(Block)`
background:#f5f5f5 !important;

h4{
  padding:40px;
}
.tabs{
  background:#00838f;
}
h5{
  padding: 10px 0px;
}
.tabs .tab a{
  color :white;
}
.material-placeholder{

  display:inline-block !important; 
  margin:2px 5px;
}
.slick-next:before, .slick-prev:before {
  font-size: 20px;
  line-height: 1;
  opacity: .75;
  color: #00838f;
}
`

class FileView extends React.Component {

  constructor(props) {
    super(props);
  }

  handleClick() {
    console.log('this is:', this);

  }

  render(){

    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      draggable: false,
      centerMode:true,
      responsive:[ 
      { breakpoint: 768, settings: { slidesToShow: 1 } }, 
      { breakpoint: 1024, settings: { slidesToShow: 2 } }, 
      { breakpoint: 2000, settings: { slidesToShow: 4 } }, 
      { breakpoint: 100000, settings: 'unslick'  }
      ] 
    };


    return (
      <Wrapper>
      <div className="container">


      <br/>
      <div className="card-panel">
      <h3 className="cyan-text text-darken-4">Coragyps atratus</h3>


      <Tabs className='tab-demo z-depth-1'>
      <Tab title="Resumen" active  >

      <div className="row">


      <div className="col l12 align-center">

      <h5 className="cyan-text text-darken-4">Imágenes</h5>  
      <center>
      {this.props.data.summary.images.map((record, i) => (
        <img key={i} className="materialboxed" data-caption={'Autor: ' + record.author}width="150" src={record.url} />
        ))}
      </center>
      
      </div>

      <div className="col l8">
      <h5 className="cyan-text text-darken-4">Nombres Comunes</h5>
      <div className="row">
      {this.props.data.summary.names.map((record, i) => (
        <div className="col l6" key={i} >  
        <div>{record.title}</div>
        <div>{record.description}</div>
        <br/>
        </div>
        ))}
      <br/>
      </div>


      <div className="">
      <h5 className="cyan-text text-darken-4">Distribución</h5>
      <p>Mapa de registro publicados</p>

      <div className="row">
      <img src="https://assets.metrolatam.com/co/2015/03/20/captura-de-pantalla-2015-03-20-a-las-12-42-23-1200x600.jpg" className="col l12" />


      </div>
      </div>
      </div>





      <div className="col l4">
      <div className="card-panel grey lighten-5">

      <h5 className="cyan-text text-darken-4">Editores</h5>
      {this.props.data.summary.editors.map((record, i) => (
        <div className="center-align" key={i}>  
        <div className="chip">
        <img src={record.url} alt="Contact Person" />
        {record.name}
        </div>
        </div>

        ))}

      <br/>
      <h5 className="cyan-text text-darken-4">Actividad Reciente</h5>
      {this.props.data.summary.activity.map((record, i) => (
        <div className="center-align" key={i}>  
        <div className="chip">
        <img src={record.url} alt="Contact Person" />
        {record.name}
        </div>
        <p>
        {record.description}
        </p>
        <hr />
        </div>

        ))}


      <br/>
      <h5 className="cyan-text text-darken-4">Grupos</h5>
      {this.props.data.summary.groups.map((record, i) => (
        <div key={i} className="card-panel ">
        <div className="row valign-wrapper">
        <div className="col s2">
        <img src={record.url} alt="" className="circle responsive-img" /> 
        </div>
        <div className="col s10">
        <span className="black-text">
        <b>{record.name}</b>
        <p>{record.description}</p>
        </span>
        </div>
        </div>
        </div>
        ))}

      </div>
      </div>




      </div>


      </Tab>
      <Tab title="Detalles">

      </Tab>
      <Tab title="Imágenes">Test 3</Tab>
      <Tab title="Mapas">Test 4</Tab>
      <Tab title="Comunidad">Test 4</Tab>
      <Tab title="Comentarios">Test 4</Tab>
      </Tabs>

      </div>
      </div>
      </Wrapper>
      );


  }
}

export default FileView


        // <Wrapper>
        //     <div className="container">
        //         <div className="card-panel">
        //             <h3 className="cyan-text text-darken-4">Coragyps atratus</h3>
        //             <Tabs className='tab-demo z-depth-1'>
                    
        //             </Tabs>
        //         </div>
        //     </div>
        // </Wrapper>