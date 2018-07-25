import React from 'react';
import ReactDOM from 'react-dom';
import styles from './description-title.css';

const DescriptionTitle = (props) => (
  <div className={styles.main}>
	<span className={styles.type}>{props.info.house_type}</span>
	<div>
	  <h1 className={styles.title}>{props.info.home_name}</h1>
	  <div className={styles.hostInfo}>
	    <img src={props.info.image} className={styles.avatar} />
	    <div>{props.info.host}</div>
	  </div>
	</div>
	<span className={styles.city}>{props.info.city}</span>
	<div className={styles.label}>
	  <span>
	    <img src='https://s3-us-west-1.amazonaws.com/front-end-capstone/multiple-users-silhouette.png' className={styles.icon} />
	    <span> {props.info.guest_num} guests</span>
	  </span>
	  <span className={styles.iconLabel}>
	    <img src='https://s3-us-west-1.amazonaws.com/front-end-capstone/door.png' className={styles.icon}/>
	    <span> {props.info.bedroom_num} bedrooms</span>
	  </span>
	  <span className={styles.iconLabel}>
	    <img src='https://s3-us-west-1.amazonaws.com/front-end-capstone/double-king-size-bed.png' className={styles.icon} />
	    <span> {props.info.bed_num} beds</span>
	  </span>
	  <span className={styles.iconLabel}>
	    <img src='https://s3-us-west-1.amazonaws.com/front-end-capstone/bathtub-with-opened-shower.png' className={styles.icon} />
	    <span> {props.info.bath_num} baths</span>
	  </span>
    </div>
  </div>
);


export default DescriptionTitle;