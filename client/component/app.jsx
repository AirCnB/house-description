import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
  	super(props);
    this.state = {
      info: {}
    }
    this.grabData = this.grabData.bind(this);
  }

  componentDidMount() {
    this.grabData()
  }

  grabData() {
    let id = window.location.pathname.slice(8);
    id = parseInt(id.substring(0, id.length))
    axios.get(`/house/${id}`)
      .then( response => {
        console.log('data in client', response.data);
        this.setState({
          info: response.data
        });
      })
      .catch( error => {
        console.log(error);
    })
  }






  render() {
  	return (
      <div>
        <div>{this.state.info.home_name}</div>
      </div>
  	);
  }
}


ReactDOM.render(<App />, document.getElementById('app'));