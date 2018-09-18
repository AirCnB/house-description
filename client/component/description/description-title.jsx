import React from 'react';
import PropTypes from 'prop-types';
import DescriptionIcon from './description-icon.jsx';
import styles from './description-title.css';

const DescriptionTitle = ({ info: { house_type, home_name, image, host, city, titleIcons} }) => {
	const { main, type, title, hostInfo, avatar, cityTitle, label } = styles;

	return (
		<div className={main}>
		  <span className={type}>{house_type}</span>
		  <div>
			  <h1 className={title}>{home_name}</h1>
			  <div className={hostInfo}>
				  <img src={image} className={avatar} />
				  <div>{host}</div>
			  </div>
		  </div>
		  <span className={cityTitle}>{city}</span>
		  <div className={label}>
				{titleIcons && titleIcons.map( (icon, index) => <DescriptionIcon info={icon} key={index} number={index}/>)}
			</div>
		</div>
	)
};

DescriptionTitle.defaultProps = {
	house_type: '',
	home_name: '',
	images: '',
	host: '',
	city: '',
	titleIcons: [],
};

DescriptionTitle.propTypes = {
	house_type: PropTypes.string.isRequired,
	home_name: PropTypes.string.isRequired,
	images: PropTypes.string.isRequired,
	host: PropTypes.string.isRequired,
	city: PropTypes.string.isRequired,
	titleIcons: PropTypes.array.isRequired,
};



export default DescriptionTitle;