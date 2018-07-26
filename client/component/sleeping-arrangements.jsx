import React from 'react';
import styles from './sleeping-arrangements.css';

const SleepingArrangements = (props) => (
  <div className={styles.main}>
    <div className={styles.title}>Sleeping arrangements</div>
    <div className={styles.container}>
    {props.info.sleep_arrangement && props.info.sleep_arrangement.map( item => 
      <div className={styles.box}>
      <img src='https://s3-us-west-1.amazonaws.com/front-end-capstone/double-king-size-bed.png' className={styles.icon} />
      <div className={styles.type}>{item === 'sofa bed' ? 'Common spaces' : `Bedroom ${props.info.bedroom_num}`}</div>
      <div className={styles.bed}>{item}</div>
      </div>
    	)}
    </div>
  </div>
);


export default SleepingArrangements;