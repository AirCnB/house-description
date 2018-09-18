import React from 'react';
import PropTypes from 'prop-types';
import { icon, iconLabel } from './description-title.css';

const DescriptionIcon = ({ info: { label, image, description }, number}) => (
  <span className={number ? iconLabel : ''}>
		<img src={image} className={icon} />
		<span> {label} {description}</span>
	</span>
);

DescriptionIcon.defaultProps = {
  info: {},
  label: '',
  image: '',
  description: '',
};

DescriptionIcon.propTypes = {
  info: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default DescriptionIcon;