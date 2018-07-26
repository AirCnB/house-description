import React from 'react';
import styles from './cancellations.css';

const Cancellations = (props) => (
  <div className={styles.main}>
    <div className={styles.title}>Cancellations</div>
    <div className={styles.policy}>Strict policy – Free cancellation within 48 hours</div>
    <div className={styles.refund}>Cancel within 48 hours of booking to get a full refund.</div>
    <div className={props.showCancellation ? styles.visible : styles.hidden}>
      <ul className={styles.list}>
        <li>Cancel up to 24 hours before check-in to get a refund, minus Airbnb service fees.</li>
        <li>Cancel within 24 hours of check-in and the first night is non-refundable.</li>
        <li>Airbnb service fees are refunded only if the reservation is cancelled within 48 hours of booking and the guest has not checked-in yet.</li>
      </ul>
      <div className={styles.readMore}>Get details</div>
    </div>
    <div className={styles.readMore} onClick={props.toggleCancellation}>Read more about the policy</div>
  </div>
);

export default Cancellations;