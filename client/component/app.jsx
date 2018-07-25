import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Highlights from './highlights.jsx';
import Amenities from './amenities.jsx';


class App extends React.Component {
  constructor(props) {
  	super(props);
    this.state = {
      info: {},
      modal: false
    }
    this.grabData = this.grabData.bind(this);
    this.togglePopup = this.togglePopup.bind(this);
    this.handleInfo = this.handleInfo.bind(this);
  }

  componentDidMount() {
    this.grabData();
  }

  handleInfo(results) {
    this.setState({
      info: results
    })
  }

  grabData() {
    let id = window.location.pathname.slice(8);
    id = parseInt(id.substring(0, id.length))
    axios.get(`/house/${id}`)
      .then( response => {
        console.log('data in client', response.data);
        this.handleInfo(response.data);
      })
      .catch( error => {
        console.log(error);
    })
  }

  togglePopup() {
    this.setState({
      modal: !this.state.modal
    })
    if (this.state.modal === false) {
    //   document.documentElement.style.overflow = 'hidden';
    //   document.body.scroll = 'no'
    // } else {
    //   document.documentElement.style.overflow = 'scroll';
    //   document.body.scroll = 'yes';
    // }
  }






  render() {
  	return (
      <div className='main-app'>
        <div>{this.state.info.home_name}</div>
        <Highlights info={this.state.info} />
        <Amenities info={this.state.info} togglePopup={this.togglePopup} modal={this.state.modal} />
      </div>
  	);
  }
}


ReactDOM.render(<App />, document.getElementById('app'));