import React from 'react';
import ReactDOM from 'react-dom';
import Popup from './popup.jsx';
import styles from './amenities.css';

const Amenities = (props) => (
  <div className={styles.main}>
  	<div className={styles.title}>Amenities</div>
  	<div className={styles.wrapper}>
  	{props.info.amenities !== undefined && props.info.amenities.map( item => 
      <div className={styles.icon}>
  		  <img className={styles.image} src={item.url} />
  		  <span> {item.A}</span>
  		</div>)}
  	</div>
  	<div className={styles.showAll} onClick={props.togglePopup}>Show all 15 amenities</div>
  	{props.modal && <Popup info={props.info} togglePopup={props.togglePopup}/>}
  </div>
);

export default Amenities;