import React from 'react';
import PropTypes from 'prop-types';
import styles from './description-body.css';

const DescriptionBody = ({ info: { description}, toggleDescription, showDescription }) => {
  const { main, visible, hidden, showMore, contact } = styles;

  return (
    <div>
	    <div className={main}>
        <div>{description && description.substring(0, Math.floor(description.length / 2))}</div>
        <div id='description' className={showDescription ? visible : hidden}>{description && description.substring(Math.floor(description.length / 2))}</div>
        <div className={showMore} onClick={toggleDescription}>
          {showDescription ? 'Hide' : 'Read more about the space'}
          <span> &#8964;</span>
        </div>
        <div className={contact}>Contact host</div>
      </div>
    </div>
  )
};

DescriptionBody.defaultProps = {
  info: {},
  description: '',
  toggleDescription: () => {},
  showDescription: false,
};

DescriptionBody.propTypes = {
  info: PropTypes.object.isRequired,
  description: PropTypes.string.isRequired,
  toggleDescription: PropTypes.func.isRequired,
  showDescription: PropTypes.bool.isRequired,
};

export default DescriptionBody;