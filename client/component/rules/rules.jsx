import React from 'react';
import PropTypes from 'prop-types';
import styles from './rules.css';

const Rules = ( { info: { rules, rules2 }, showRules, toggleRules }) => {
  const { main, title, rule, border, visible, hidden, showMore } = styles;

  return (
    <div className={main}>
      <div className={title}>House Rules</div>
        {rules && rules.map( (item, index) => <div className={rule} key={index}>{item}</div>)}
        {showRules && <div className={border}></div>}
        <div id='rules' className={showRules ? visible : hidden}>{rules2}</div>
      <div className={showMore} onClick={toggleRules}>{showRules ? 'Hide rules' : 'Read all rules'} &#8964;</div>
    </div>
  )
};

Rules.defaultProps = {
  info: {},
  rules: [],
  rules2: '',
  showRules: false,
  toggleRules: () => {},
};

Rules.propTypes = {
  info: PropTypes.object.isRequired,
  rules: PropTypes.array.isRequired,
  rules2: PropTypes.string.isRequired,
  showRules: PropTypes.bool.isRequired,
  toggleRules: PropTypes.func.isRequired,
};


export default Rules; 