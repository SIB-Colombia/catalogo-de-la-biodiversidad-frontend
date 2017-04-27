import React, {PropTypes} from 'react'
import {render} from 'react-dom';
import styled from 'styled-components'
import {Map, Marker, Popup, TileLayer} from 'react-leaflet';

const Wrapper = styled.div `
.leaflet-container {
    height: 400px;
    width: 100%;
}
`
const position = [4.36, -74.04];

class HumboldtMap extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <Wrapper>
        <Map center={position} zoom={5}>
          <TileLayer url='http://{s}.tile.osm.org/{z}/{x}/{y}.png' attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'/>
        </Map>
      </Wrapper>
    )
    /*
			<Marker position={position}>
				<Popup>
					<span>A pretty CSS3 popup.<br/>Easily customizable.</span>
				</Popup>
			</Marker>
	*/
  }
}

export default HumboldtMap;
