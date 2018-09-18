import React from 'react';
import styles from './searchbar.css';
import images from '../../images.js';

const Searchbar = () => {
  const { main, logo, bar, icon, input, header } = styles;
  const { aircnbLogo, search } = images;

  return (
    <div className={main}> 
      <span>
        <img className={logo} src={aircnbLogo} />
      </span>
      <span className={bar}>
        <span>
          <img className={icon} src={search} />
        </span>
        <span>
          <input className={input} type="text" placeholder="Anywhere" onFocus={(e) => e.target.placeholder = "Destination,city,address"} onBlur={(e) => e.target.placeholder = "Anywhere"} onClick={(e) => this.changeText(e)}/>
        </span>
      </span>
      <div className={header}>
        <div>Host</div>
        <div>Saved</div>
        <div>Trip</div>
        <div>Messages</div>
        <div>Credit</div>
        <div>Help</div>
        </div>
      </div>
  )
};

export default Searchbar;