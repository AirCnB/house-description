import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import DescriptionTitle from './description-title.jsx';
import Highlights from './highlights.jsx';
import DescriptionBody from './description-body.jsx';
import Amenities from './amenities.jsx';
import SleepingArrangements from './sleeping-arrangements.jsx';
import Rules from './rules.jsx';
import Cancellations from './cancellations.jsx';


class App extends React.Component {
  constructor(props) {
  	super(props);
    this.state = {
      info: {},
      modal: false,
      showDescription: false,
      showRules: false,
      showCancellation: false
    }
    this.grabData = this.grabData.bind(this);
    this.togglePopup = this.togglePopup.bind(this);
    this.handleInfo = this.handleInfo.bind(this);
    this.toggleDescription = this.toggleDescription.bind(this);
    this.toggleRules = this.toggleRules.bind(this);
    this.toggleCancellation = this.toggleCancellation.bind(this);
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
    // if (this.state.modal === false) {
    //   document.documentElement.style.overflow = 'hidden';
    //   document.body.scroll = 'no'
    // } else {
    //   document.documentElement.style.overflow = 'scroll';
    //   document.body.scroll = 'yes';
    // }
  }


  toggleDescription() {
    this.setState({
      showDescription: !this.state.showDescription
    })
  }

  toggleRules() {
    this.setState({
      showRules: !this.state.showRules
    })
  }

  toggleCancellation() {
    this.setState({
      showCancellation: !this.state.showCancellation
    })
  }



  render() {
  	return (
      <div className='main-app'>
        <DescriptionTitle info={this.state.info} />
        <Highlights info={this.state.info} />
        <DescriptionBody info={this.state.info} toggleDescription={this.toggleDescription} show={this.state.showDescription} />
        <Amenities info={this.state.info} togglePopup={this.togglePopup} modal={this.state.modal} />
        <SleepingArrangements info={this.state.info} />
        <Rules info={this.state.info} toggleRules={this.toggleRules} showRules={this.state.showRules} />
        <Cancellations toggleCancellation={this.toggleCancellation} showCancellation={this.state.showCancellation} />
      </div>
  	);
  }
}


ReactDOM.render(<App />, document.getElementById('app'));