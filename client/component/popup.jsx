import React from 'react';
import ReactDOM from 'react-dom';
import styles from './popup.css';

const Popup = (props) => (  
  <div className={styles.main}>
    <div className={styles.modal}>
      <button type='button' className={styles.close} onClick={props.togglePopup}>X</button>
      <div>
        <h1 className={styles.title}>Amenities</h1>
        <div className={styles.header}>Basic</div>
        {props.info.amenities_basics.map( item => <div className={styles.detail}>{item}</div>)}
      </div>
      <div>
      {props.info.amenities_info.map( section => {
        return section.map( (detail, index) => {
          if (index === 0) {
          	return <div className={styles.header}>{detail}</div>
          } else {
          	return <div className={styles.detail}>{detail}</div>
          }
        }) 
      })}
      </div>
      <div>
        <div className={styles.header}>Not included</div>
        {props.info.not_included[0].split(' ').map( detail => <div className={styles.dashed}>{detail}</div>)}
      </div>
    </div>
    <div className={styles.backdrop} onClick={props.togglePopup}/>
  </div>
);
  






export default Popup;