import React from 'react';
import PropTypes from 'prop-types';

import classes from './Badge.module.scss';

const Badge = (props) => {
  const {
    label,
    className
  } = props;

  return (
    <span className={`${classes.badge} ${className}`}>{label}</span>
  );
};

Badge.defaultProps = {
  label: '',
  className: ''
};

Badge.propTypes = {
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  className: PropTypes.string.isRequired
};

export default Badge;
