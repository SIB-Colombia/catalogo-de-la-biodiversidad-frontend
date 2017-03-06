import React from 'react'
import styled from 'styled-components'


import GoogleMapReact from 'google-map-react';
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

.imagesPreview{

margin:0px 3px;

}

.material-placeholder{
  display:inline-block;
}
`
var data = {

  summary:{

    images:[
    {
      url:'https://ih1.redbubble.net/image.22685802.7502/flat,800x800,075,t.u1.jpg',
      author:'Hola Mundo'
    } ,
    {
      url:'https://ih1.redbubble.net/image.22685802.7502/flat,800x800,075,t.u1.jpg',
      author:'Hola Mundo'
    },
    {
      url:'https://ih1.redbubble.net/image.22685802.7502/flat,800x800,075,t.u1.jpg',
      author:'Hola Mundo'
    },
    {
      url:'https://ih1.redbubble.net/image.22685802.7502/flat,800x800,075,t.u1.jpg',
      author:'Hola Mundo'
    }
    ],
    names:[
    {
      title:'CHULO',
      description:'Español Colombia- Región Andina',
    },
    {
      title:'CHULO',
      description:'Español Colombia- Región Andina',
    },
    {
      title:'CHULO',
      description:'Español Colombia- Región Andina',
    },
    {
      title:'CHULO',
      description:'Español Colombia- Región Andina',
    }

    ],
    distribution:{},
    editors:[
    {
      name:'Instituo Humboldt',
      url:'http://adaptacion-orotoy.org/wp-content/uploads/2014/04/logo_verde.jpg',
    },
    {
      name:'Instituo Humboldt',
      url:'http://adaptacion-orotoy.org/wp-content/uploads/2014/04/logo_verde.jpg',
    }
    ],
    activity:[
    {
      name:'Instituo Humboldt',
      url:'http://adaptacion-orotoy.org/wp-content/uploads/2014/04/logo_verde.jpg',
      description:'Instituo Humboldt agregó 20 fotos',
    },
    {
      name:'Instituo Humboldt',
      url:'http://adaptacion-orotoy.org/wp-content/uploads/2014/04/logo_verde.jpg',
      description:'Instituo Humboldt eliminó 20 fotos',
    },
    {
      name:'Instituo Humboldt',
      url:'http://adaptacion-orotoy.org/wp-content/uploads/2014/04/logo_verde.jpg',
      description:'Instituo Humboldt agregó 20 fotos',
    },
    {
      name:'Instituo Humboldt',
      url:'http://adaptacion-orotoy.org/wp-content/uploads/2014/04/logo_verde.jpg',
      description:'Instituo Humboldt agregó 20 fotos',
    }
    ],
    groups:[
    {
      url:'http://adaptacion-orotoy.org/wp-content/uploads/2014/04/logo_verde.jpg',
      name:'Aves de colombia',
      description:'350.900 lorem ipsum',

    },
    {
      url:'http://adaptacion-orotoy.org/wp-content/uploads/2014/04/logo_verde.jpg',
      name:'Aves de colombia',
      description:'350.900 lorem ipsum',

    },
    {
      url:'http://adaptacion-orotoy.org/wp-content/uploads/2014/04/logo_verde.jpg',
      name:'Aves de colombia',
      description:'350.900 lorem ipsum',

    }
    ]
  }
  
}; 

const defaultProps = {
  center: {lat: 59.95, lng: 30.33},
  zoom: 11
};


const FileContent = ({...props}) => (
  
  <Wrapper {...props} >
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
  {data.summary.images.map((record, i) => (
    <MediaBox key={i} src={record.url} caption={'Autor: ' + record.author} width="150" className="imagesPreview" />
    ))}
  </center>
  <br/>
  </div>

  <div className="col l8">
  <h5 className="cyan-text text-darken-4">Nombres Comunes</h5>
  <div className="row">
  {data.summary.names.map((record, i) => (
    <div className="col l6" key={i}>  
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
    {data.summary.editors.map((record, i) => (
      <div className="center-align" key={i}>  
      <div className="chip">
      <img src={record.url} alt="Contact Person" />
      {record.name}
      </div>
      </div>

      ))}

    <br/>
    <h5 className="cyan-text text-darken-4">Actividad Reciente</h5>
    {data.summary.activity.map((record, i) => (
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
      {data.summary.groups.map((record, i) => (
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

  export default FileContent
