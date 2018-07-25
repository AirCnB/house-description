import React from 'react';
import ReactDOM from 'react-dom';
import styles from './description-body.css';

const DescriptionBody = (props) => (
  <div>
	<div className={styles.main}>
      <div style={{marginBottom: '15px'}}>{props.info.description !== undefined ? 
        props.info.description.substring(0, Math.floor(props.info.description.length / 2)) : ''}
      </div>
      <div className={props.show ? styles.visible : styles.infoPanel} style={{marginBottom: '15px'}}>{props.info.description !== undefined ? 
        props.info.description.substring(Math.floor(props.info.description.length / 2)) : ''}
      </div>
      <div className={styles.showMore} onClick={props.toggleDescription}>
        {props.description ? 'Hide': 'Read more about the space'}
      </div>
      <div className={styles.contact}>Contact host</div>
    </div>
  </div>
);





export default DescriptionBody;