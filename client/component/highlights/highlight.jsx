import React from 'react';
import PropTypes from 'prop-types';
import styles from './highlights.css';

class Highlight extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {
  	  feedback: false,
  	}
  	this.toggleFeedback = this.toggleFeedback.bind(this);
  }

  toggleFeedback() {
    this.setState({ feedback: true })
  }

  render() {
    const { info: { highlightTitle, isSuperhost, description, highlightImage }, host } = this.props;
    const { spacing, titleDescription, feedback, helpful, thumbsup } = styles;

  	return (
      <div className={spacing}>
        <div className='highlight'>
          <span className='highlight-label'>{isSuperhost ? host + ' ' + highlightTitle : highlightTitle}</span>
          <span> · </span>
          <span className={titleDescription}>{description}</span>
        </div>   
        <div onClick={this.toggleFeedback} style={{marginTop: '8px'}}>
          {this.state.feedback ? <div className={feedback}>Thanks for your feedback.</div> :
            <div> 
            <span className={helpful}>Helpful</span>
            <img src={highlightImage} className={thumbsup} />
            <span> · </span>
            <span className={helpful}>Not helpful</span>
          </div>}
        </div>
      </div>
  	)
  }
}

Highlight.defaultProps = {
  info: {},
  highlightTitle: '',
  isSuperhost: 0,
  description: '',
  highlightImage: '',
  host: '',
};

Highlight.propTypes = {
  info: PropTypes.object.isRequired,
  highlightTitle: PropTypes.string.isRequired,
  isSuperhost: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  highlightImage: PropTypes.string.isRequired,
  host: PropTypes.string.isRequired,
};

export default Highlight;