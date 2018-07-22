import React from 'react';
import ReactDOM from 'react-dom';

class Highlights extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {
  	  one: false,
  	  two: false,
  	  three: false
  	}
  	this.handleToggleOne = this.handleToggleOne.bind(this);
  	this.handleToggleTwo = this.handleToggleTwo.bind(this);
  	this.handleToggleThree = this.handleToggleThree.bind(this);
  }

  handleToggleOne() {
    this.setState({
      one: true
    })
  }

  handleToggleTwo() {
  	this.setState({
  	  two: true
  	})
  }

  handleToggleThree() {
  	this.setState({
  	  three: true
  	})
  }

  render() {
  	return (
  	<div style={{marginBottom: '24px'}}>
  	  <div className='highlight-container'>
        <small className='highlight-title'>HOME HIGHLIGHTS</small>
        <div style={{marginTop: '12px', marginBottom: '8px'}}>
          <div className='highlight'>
            <span className='highlight-label'>{this.props.info.host} is a Superhost</span>
            <span> · </span>
            <span className='highlight-d'>{this.props.info.highlight1}</span>
          </div>   
          <div onClick={this.handleToggleOne} style={{marginTop: '8px'}}>
            {this.state.one ? <div className='helpful'>Thanks for your feedback.</div> :
              <div> 
	            <span className='helpful'>Helpful</span>
	            <img src="https://s3-us-west-1.amazonaws.com/front-end-capstone/if_37_1710847.svg" className='thumbsup' />
	            <span> · </span>
	            <span className='helpful'>Not helpful</span>
	          </div>}
          </div>
        </div>
        <div style={{marginTop: '12px', marginBottom: '8px'}}>
          <div className='highlight'>
            <span className='highlight-label'>Great check-in experience</span>
            <span> · </span>
            <span className='highlight-d'>{this.props.info.highlight2}</span>
          </div>   
          <div onClick={this.handleToggleTwo} style={{marginTop: '8px'}}>
             {this.state.two ? <div className='helpful'>Thanks for your feedback.</div> :
              <div> 
	            <span className='helpful'>Helpful</span>
	            <img src="https://s3-us-west-1.amazonaws.com/front-end-capstone/if_37_1710847.svg" className='thumbsup' />
	            <span> · </span>
	            <span className='helpful'>Not helpful</span>
	          </div>}
          </div>
        </div>
        <div style={{marginTop: '12px', marginBottom: '8px'}}> 
          <div className='highlight'>
            <span className='highlight-label'>Sparkling clean</span>
            <span> · </span>
            <span className='highlight-d'>{this.props.info.highlight3}</span>
          </div>   
          <div onClick={this.handleToggleThree} style={{marginTop: '8px'}}>
            {this.state.three ? <div className='helpful'>Thanks for your feedback.</div> :
              <div> 
	            <span className='helpful'>Helpful</span>
	            <img src="https://s3-us-west-1.amazonaws.com/front-end-capstone/if_37_1710847.svg" className='thumbsup' />
	            <span> · </span>
	            <span className='helpful'>Not helpful</span>
	          </div>}
          </div>
        </div>
  	  </div>
    </div>
  	)
  }
}



export default Highlights;