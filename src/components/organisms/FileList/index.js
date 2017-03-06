import React from 'react'
import styled from 'styled-components'

import { Block, Link } from 'components'


const Wrapper = styled(Block)`
margin-bottom:20px;
padding-bottom:30px;
h4{
  padding:40px;
}
`
var records = [
{
  title:'Zorro',
  description:'Esto es un Zorro',
  img:'https://cms-assets.tutsplus.com/uploads/users/107/posts/24710/image/35-flat-animals-fox.jpg',
  status:['cr','en'],
},
{
  title:'Oso',
  description:'Esto es un Oso',
  img:'https://cms-assets.tutsplus.com/uploads/users/107/posts/24710/image/35-flat-animals-fox.jpg',
  status:['cr','en'],
},
{
  title:'Tigre',
  description:'Esto es un Tigre',
  img:'https://cms-assets.tutsplus.com/uploads/users/107/posts/24710/image/35-flat-animals-fox.jpg',
  status:['cr','en'],
},
{
  title:'Elefante',
  description:'Esto es un Elefante',
  img:'https://cms-assets.tutsplus.com/uploads/users/107/posts/24710/image/35-flat-animals-fox.jpg',
  status:['cr','en'],
},

]; 

const FileList = ({...props}) => (
  <Wrapper {...props} className="grey lighten-4">
  <h4 className="center-align">Fichas</h4>
  <div className="container">
  <div className="row">
  {records.map((record, i) => (
    <div className="col l3 s12 m6" key={i}>
    <div className="card">
    <div className="card-image waves-effect waves-block waves-light">
    <img className="activator" src={record.img} />
    </div>
    <div className="card-content">
    <span className="card-title activator grey-text text-darken-4">
    {record.title}
    <i className="material-icons right">more_vert</i></span>
    <p>{record.description}</p>
    </div>
    <div className="card-reveal">
    <span className="card-title grey-text text-darken-4">{record.title}<i className="material-icons right">close</i></span>
    <p>{record.description}</p>
    </div>
    <div className="card-action cyan darken-3">
    <a href={'/ficha/' + i}  className="white-text" >Descripción....</a>
    </div>
    </div>
    </div>
    ))}
    </div>
    <div className=" col s12 center-align">
    <br/>
    <a href="/ficha/0" className="btn waves-effect waves-light cyan darken-3">Explorar todas las fichas
    <i className="material-icons right">more_horiz</i>
    </a>
    </div>
    </div>
    </Wrapper>
    ); 

    export default FileList
