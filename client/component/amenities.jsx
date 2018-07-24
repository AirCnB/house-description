import React from 'react';
import ReactDOM from 'react-dom';
import styles from './amenities.css';

console.log('styles object', styles);

const Amenities = (props) => (
  <div>
  	<div className={styles.title}>Amenities</div>
  	<div className={styles.wrapper}>
  	{props.info.amenities !== undefined ? props.info.amenities.map( item => 
      <div className={styles.icon}>
  		  <img src={item.url} />
  		  <span> {item.A}</span>
  		</div>) : null}
  	</div>
  	<div className={styles.showAll} onClick={props.togglePopup}>Show all 15 amenities</div>
  </div>
);


















export default Amenities;