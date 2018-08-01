import React from 'react';
import styles from './cancellations.css';

const Cancellations = (props) => (
  <div className={styles.main}>
    <div className={styles.title}>Cancellations</div>
    <div className={styles.policy}>Strict policy – Free cancellation within 48 hours</div>
    <div className={styles.refund}>Cancel within 48 hours of booking to get a full refund.</div>
    <div id='cancellation' className={props.showCancellation ? styles.visible : styles.hidden}>
      <ul>
        <li className={styles.list}>Cancel up to 24 hours before check-in to get a refund, minus Airbnb service fees.</li>
        <li className={styles.list}>Cancel within 24 hours of check-in and the first night is non-refundable.</li>
        <li className={styles.list}>Airbnb service fees are refunded only if the reservation is cancelled within 48 hours of booking and the guest has not checked-in yet.</li>
      </ul>
      <div className={styles.getDetails}>Get details</div>
    </div>
    <div className={styles.readMore} onClick={props.toggleCancellation}>{props.showCancellation? 'Hide policies' : 'Read more about the policy'} &#8964;</div>
  </div>
);

export default Cancellations;