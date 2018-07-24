import React from 'react';
import ReactDOM from 'react-dom';

const Amenities = (props) => (
  <div>
  	<div className='amenities-title'>Amenities</div>
  	<div className='wrapper'>
  	{props.info.amenities !== undefined ? props.info.amenities.map( item => 
      <div className='amenities-icon' style={{marginBottom: '12px'}}>
  		  <img src={item.url} />
  		  <span> {item.A}</span>
  		</div>) : null}
  	</div>
  	<div className='description-end' onClick={props.togglePopup}>Show all 15 amenities</div>
  </div>
);


















export default Amenities;