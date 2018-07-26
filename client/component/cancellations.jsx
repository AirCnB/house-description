import React from 'react';
import styles from './cancellations.css';

const Cancellations = (props) => (
  <div className={styles.main}>
    <div className={styles.title}>Cancellations</div>
    <div className={styles.policy}>Strict policy – Free cancellation within 48 hours</div>
    <div className={styles.refund}>Cancel within 48 hours of booking to get a full refund.</div>
    <div className={styles.readMore}>Read more about the policy</div>

  </div>
);

export default Cancellations;