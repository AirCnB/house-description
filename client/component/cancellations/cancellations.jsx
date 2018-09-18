import React from 'react';
import PropTypes from 'prop-types';
import styles from './cancellations.css';
import constants from './cancellation-constants.js';

const Cancellations = ( { showCancellation, toggleCancellation }) => {
  const { main, title, policy, refund, list, getDetails, readMore, visible, hidden } = styles;
  const { policyDescription, refundDescription, listOne, listTwo, listThree } = constants;

  return (
    <div className={main}>
      <div className={title}>Cancellations</div>
      <div className={policy}>{policyDescription}</div>
      <div className={refund}>{refundDescription}</div>
      <div id='cancellation' className={showCancellation ? visible : hidden}>
        <ul>
          <li className={list}>{listOne}</li>
          <li className={list}>{listTwo}</li>
          <li className={list}>{listThree}</li>
        </ul>
        <div className={getDetails}>Get details</div>
      </div>
      <div className={readMore} onClick={toggleCancellation}>{showCancellation? 'Hide policies' : 'Read more about the policy'} &#8964;</div>
    </div>
  )
};

Cancellations.defaultProps = {
  toggleCancellation: () => {},
  showCancellation: false,
};

Cancellations.propTypes = {
  toggleCancellation: PropTypes.func.isRequired,
  showCancellation: PropTypes.bool.isRequired,
};

export default Cancellations;