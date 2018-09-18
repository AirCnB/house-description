import React from 'react';
import axios from 'axios';
import DescriptionTitle from './description/description-title.jsx';
import HighlightList from './highlights/highlightList.jsx';
import DescriptionBody from './description/description-body.jsx';
import Amenities from './amenities/amenities.jsx';
import SleepingArrangements from './sleeping-arrangement/sleeping-arrangements.jsx';
import Rules from './rules/rules.jsx';
import Cancellations from './cancellations/cancellations.jsx';

class App extends React.Component {
  constructor(props) {
  	super(props);
    this.state = {
      info: {},
      showModal: false,
      showDescription: false,
      showRules: false,
      showCancellation: false,
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
    this.setState({ info: results });
  }

  grabData() {
    let id = window.location.pathname.slice(10);
    id = parseInt(id.substring(0, id.length))
    axios.get(`/api/house/${id}`)
      .then( ({ data }) => { this.handleInfo(data) })
      .catch( error => { console.error(error) })
  }

  togglePopup() {
    this.setState( ({ showModal }) => ({ showModal: !showModal }));
    if (this.state.showModal === false) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll';
    };
  }

  toggleDescription() {
    this.setState( ({ showDescription }) => ({ showDescription: !showDescription }));
  }

  toggleRules() {
    this.setState( ({ showRules }) => ({ showRules: !showRules }));
  }

  toggleCancellation() {
    this.setState( ({ showCancellation }) => ({ showCancellation: !showCancellation }));
  }

  render() {
    const { info, showModal, showRules, showDescription, showCancellation } = this.state;
  	return (
      <div className='main-app'>
        <DescriptionTitle info={info} />
        <HighlightList info={info} />
        <DescriptionBody info={info} toggleDescription={this.toggleDescription} showDescription={showDescription} />
        <Amenities info={info} togglePopup={this.togglePopup} showModal={showModal} />
        <SleepingArrangements info={info} />
        <Rules info={info} toggleRules={this.toggleRules} showRules={showRules} />
        <Cancellations toggleCancellation={this.toggleCancellation} showCancellation={showCancellation} />
      </div>
  	);
  }
}

export default App;