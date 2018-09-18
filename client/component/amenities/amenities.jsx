import React from 'react';
import PropTypes from 'prop-types';
import Popup from '../popup/popup.jsx';
import styles from './amenities.css';

const Amenities = ({ info, info: { amenities }, togglePopup, showModal }) => {
	const { main, title, wrapper, icon, image, showAll } = styles;

	return (
  <div className={main}>
  	<div className={title}>Amenities</div>
  	<div className={wrapper}>
  	{amenities && amenities.map( (item, index) => 
      <div className={icon} key={index}>
  		  <img className={image} src={item.url} />
  		  <span> {item.A}</span>
  		</div>)}
  	</div>
  	<div className={showAll} onClick={togglePopup}>Show all 15 amenities</div>
  	{showModal && <Popup info={info} togglePopup={togglePopup}/>}
  </div>
	)
};

Amenities.defaultProps = {
  info: {},
  amenities: [],
  togglePopup: () => {},
  modal: false,
};

Amenities.propTypes = {
  info: PropTypes.object.isRequired,
  amenities: PropTypes.array.isRequired,
  togglePopup: PropTypes.func.isRequired,
  modal: PropTypes.bool.isRequired,
};

export default Amenities;