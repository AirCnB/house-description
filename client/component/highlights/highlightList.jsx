import React from 'react';
import PropTypes from 'prop-types';
import Highlight from './highlight.jsx';
import { container, title } from './highlights.css';

const HighlightList = ({ info: { highlights, host } }) => (
  <div className={container}>
     <small className={title}>HOME HIGHLIGHTS</small>
     {highlights && highlights.map( (highlight, index) => <Highlight info={highlight} host={host} key={index} />)}
  </div>
)


HighlightList.defaultProps = {
  info: {},
  highlights: [],
  host: '',
};

HighlightList.propTypes = {
  info: PropTypes.object.isRequired,
  highlights: PropTypes.array.isRequired,
  host: PropTypes.string.isRequired,
};

export default HighlightList;