import React from 'react';
import ReactDOM from 'react-dom';
import styles from './popup.css';

class Popup extends React.Component {
  constructor(props) {
  	super(props);
  }








  render() {
  	return (
  		<div>
        <div className={styles.modal}>
          <div>This is a modal</div>
          <div>This is another line of the modal</div>
        </div>
        <div className={styles.backdrop} onClick={this.props.togglePopup}/>
      </div>
  	)
  }
}





export default Popup;