import React from 'react';
import ReactDOM from 'react-dom';
import styles from './highlights.css'

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
  	  <div className={styles.container}>
        <small className={styles.title}>HOME HIGHLIGHTS</small>
        <div className={styles.spacing}>
          <div className='highlight'>
            <span className='highlight-label'>{this.props.info.host} is a Superhost</span>
            <span> · </span>
            <span className={styles.description}>{this.props.info.highlight1}</span>
          </div>   
          <div onClick={this.handleToggleOne} style={{marginTop: '8px'}}>
            {this.state.one ? <div className={styles.feedback}>Thanks for your feedback.</div> :
              <div> 
	            <span className={styles.helpful}>Helpful</span>
	            <img src="https://s3-us-west-1.amazonaws.com/front-end-capstone/if_37_1710847.svg" className={styles.thumbsup} />
	            <span> · </span>
	            <span className={styles.helpful}>Not helpful</span>
	          </div>}
          </div>
        </div>
        <div className={styles.spacing}>
          <div className='highlight'>
            <span className='highlight-label'>Great check-in experience</span>
            <span> · </span>
            <span className={styles.description}>{this.props.info.highlight2}</span>
          </div>   
          <div onClick={this.handleToggleTwo} style={{marginTop: '8px'}}>
             {this.state.two ? <div className={styles.feedback}>Thanks for your feedback.</div> :
              <div> 
	            <span className={styles.helpful}>Helpful</span>
	            <img src="https://s3-us-west-1.amazonaws.com/front-end-capstone/if_37_1710847.svg" className={styles.thumbsup} />
	            <span> · </span>
	            <span className={styles.helpful}>Not helpful</span>
	          </div>}
          </div>
        </div>
        <div className={styles.spacing}> 
          <div className='highlight'>
            <span className='highlight-label'>Sparkling clean</span>
            <span> · </span>
            <span className={styles.description}>{this.props.info.highlight3}</span>
          </div>   
          <div onClick={this.handleToggleThree} style={{marginTop: '8px'}}>
            {this.state.three ? <div className={styles.feedback}>Thanks for your feedback.</div> :
              <div> 
	            <span className={styles.helpful}>Helpful</span>
	            <img src="https://s3-us-west-1.amazonaws.com/front-end-capstone/if_37_1710847.svg" className={styles.thumbsup}  />
	            <span> · </span>
	            <span className={styles.helpful}>Not helpful</span>
	          </div>}
          </div>
        </div>
  	  </div>
    </div>
  	)
  }
}



export default Highlights;