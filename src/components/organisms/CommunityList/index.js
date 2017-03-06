import React from 'react'
import styled from 'styled-components'

import { Block, Link } from 'components'


const Wrapper = styled(Block)`
margin-bottom:20px;
padding-bottom:30px;
h4{
  padding:40px;
}
img{
  border: 7px solid white;
}
`

var records = [
{
  name:'Persona #',
  img:'http://www.iconsfind.com/wp-content/uploads/2015/08/20150831_55e46b12d72da.png',
},
{
  name:'Persona #',
  img:'http://www.iconsfind.com/wp-content/uploads/2015/08/20150831_55e46b12d72da.png',
},
{
  name:'Persona #',
  img:'http://www.iconsfind.com/wp-content/uploads/2015/08/20150831_55e46b12d72da.png',
},
{
  name:'Persona #',
  img:'http://www.iconsfind.com/wp-content/uploads/2015/08/20150831_55e46b12d72da.png',
}
]; 

const CommunityList = ({...props}) => (
  <Wrapper {...props} className="grey lighten-4">
  <h4 className="center-align">Comunidad</h4>
  <div className="container">
  <div className="row">
  {records.map((record, i) => (
    <div className="col l3 s12 center-align" key={i}>
    <img width="200" src={record.img} alt="" className="circle" />
    <h6>{record.name} {i}</h6>
    </div>
    ))}
    </div>
    <div className=" col s12 center-align">
    <br/>
    <button className="btn waves-effect waves-light cyan darken-3">Explorar toda la comunidad
    <i className="material-icons right">more_horiz</i>
    </button>
    </div>
    </div>
    </Wrapper>
    ); 

    export default CommunityList
