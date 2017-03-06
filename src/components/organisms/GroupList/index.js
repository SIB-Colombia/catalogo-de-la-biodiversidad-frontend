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
  title:'Ave 1',
  description:'lorem ipsum lorem ipsum lorem ipsum',
  img:'http://d2fbmjy3x0sdua.cloudfront.net/sites/default/files/styles/nas_bird_teaser_illustration/public/2943_Sibl_9780307957900_art_r1.jpg?itok=wPgkWnlC',
  status:['cr','en'],
},
{
  title:'Ave 2',
  description:'lorem ipsum lorem ipsum lorem ipsum',
  img:'http://d2fbmjy3x0sdua.cloudfront.net/sites/default/files/styles/nas_bird_teaser_illustration/public/3110_Sibl_9780307957900_art_r1.jpg?itok=_Ippmq6Y',
  status:['cr','en'],
},
{
  title:'Ave 3',
  description:'lorem ipsum lorem ipsum lorem ipsu',
  img:'http://d2fbmjy3x0sdua.cloudfront.net/sites/default/files/styles/nas_bird_teaser_illustration/public/5326_Sibl_9780307957900_art_r1.jpg?itok=3NodD2LY',
  status:['cr','en'],
},
{
  title:'Ave 4',
  description:'lorem ipsum lorem ipsum lorem ipsu',
  img:'http://d2fbmjy3x0sdua.cloudfront.net/sites/default/files/styles/nas_bird_teaser_illustration/public/2902_Sibl_9780307957900_art_r1.jpg?itok=a36uqo7L',
  status:['cr','en'],
},

]; 

const GroupsList = ({...props}) => (
  <Wrapper {...props} className="grey lighten-4">
  <h4 className="center-align">Grupos</h4>
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
    </span>
    <p><a href="#">{record.description}</a></p>
    </div>
    <div className="card-reveal">
    <span className="card-title grey-text text-darken-4">{record.title}<i className="material-icons right">close</i></span>
    <p>{record.description}</p>
    </div>
    </div>
    </div>
    ))}
  </div>
  <div className=" col s12 center-align">
  <br/>
  <button className="btn waves-effect waves-light cyan darken-3">Explorar todos los grupos
  <i className="material-icons right">more_horiz</i>
  </button>
  </div>
  </div>
  </Wrapper>
  ); 

export default GroupsList
