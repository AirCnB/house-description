import React from 'react';
import PropTypes from 'prop-types';
import styles from './sleeping-arrangements.css';
import images from '../../images.js';

const SleepingArrangements = ({ info: { sleep_arrangement, titleIcons }}) => {
  const { main, title, container, box, icon, type, bed } = styles;
  const { beds } = images;
  
  return (
  <div className={main}>
    <div className={title}>Sleeping arrangements</div>
    <div className={container}>
      {sleep_arrangement && sleep_arrangement.map( (item, index) => 
        <div className={box} key={index}>
          <img src={beds} className={icon} />
          <div className={type}>{item === 'sofa bed' ? 'Common spaces' : `Bedroom ${titleIcons[2].label}`}</div>
          <div className={bed}>{item}</div>
        </div>
      )}
    </div>
  </div>
  )
};

SleepingArrangements.defaultProps = {
  sleep_arrangement: [],
  titleIcon: [],
};

SleepingArrangements.propTypes = {
  sleep_arrangement: PropTypes.array.isRequired,
  titleIcon: PropTypes.array.isRequired,
};

export default SleepingArrangements;