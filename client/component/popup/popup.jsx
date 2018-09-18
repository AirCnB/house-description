import React from 'react';
import PropTypes from 'prop-types';
import styles from './popup.css';

const Popup = ({ info: {amenities_basics, amenities_info, not_included}, togglePopup, }) => {  
  const { main, modal, close, title, header, detail, dashed, backdrop } = styles;

  return (
    <div className={main}>
      <div className={modal}>
        <button type='button' className={close} onClick={togglePopup}>X</button>
        <div>
          <h1 className={title}>Amenities</h1>
          <div className={header}>Basic</div>
          {amenities_basics.map( (item, index) => <div className={detail} key={index}>{item}</div>)}
        </div>
        <div>
          {amenities_info.map( section => {
            return section.map( (info, index) => {
              if (index === 0) {
                return <div className={header} key={index}>{info}</div>
              } else {
                return <div className={detail} key={index}>{info}</div>
              }
            }) 
          })}
        </div>
        <div>
          <div className={header}>Not included</div>
          {not_included[0].split(' ').map( (detail, index) => <div className={dashed} key={index}>{detail}</div>)}
        </div>
      </div>
      <div className={backdrop} onClick={togglePopup}/>
    </div>
  )
};

Popup.defaultProps = {
  info: {},
  amenities_basics: [],
  amenities_info: [],
  not_included: [],
  togglePopup: () => {},
};

Popup.propTypes = {
  info: PropTypes.object.isRequired,
  amenities_basics: PropTypes.array.isRequired,
  amenities_info: PropTypes.array.isRequired,
  not_included: PropTypes.array.isRequired,
  togglePopup: PropTypes.func.isRequired,
};
  
export default Popup;