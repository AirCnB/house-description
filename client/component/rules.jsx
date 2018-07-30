import React from 'react';
import styles from './rules.css';

const Rules = (props) => (
  <div className={styles.main}>
   <div className={styles.title}>House Rules</div>
     {props.info.rules ? props.info.rules.map( item => <div className={styles.rule}>{item}</div>) : null}
     {props.showRules && <div className={styles.border}></div>}
     <div id='rules' className={props.showRules ? styles.visible : styles.infoPanel}>{props.info.rules2}</div>
     <div className={styles.showMore} onClick={props.toggleRules}>{props.showRules ? 'Hide rules' : 'Read all rules'} &#8964;</div>
  </div>

);

export default Rules; 