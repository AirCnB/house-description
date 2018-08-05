import React from 'react';
import styles from './searchbar.css';

const Searchbar = (props) => (
      <div className={styles.main}> 
               <span>
               <img className={styles.logo} src="https://s3-us-west-1.amazonaws.com/eb-front-end-capstone/media/logo_with_name.svg" />
               </span>
               <span className={styles.bar}>
                    <span>
                      <img className={styles.icon} src="https://s3-us-west-1.amazonaws.com/hrsf99fec/icons/search.svg" />
                    </span>
                    <span>
                      <input className={styles.input} type="text" placeholder="Anywhere" onFocus={(e) => e.target.placeholder = "Destination,city,address"} onBlur={(e) => e.target.placeholder = "Anywhere"} onClick={(e) => this.changeText(e)}/>
                    </span>
              </span>
              <div className={styles.header}>
                  <div>Host</div>
                  <div>Saved</div>
                  <div>Trip</div>
                  <div>Messages</div>
                  <div>Credit</div>
                  <div>Help</div>
                  </div>
      </div>
);
  





















export default Searchbar;