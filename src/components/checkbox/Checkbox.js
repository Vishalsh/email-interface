import React from 'react';
import PropTypes from 'prop-types';

import classes from './Checkbox.module.scss';

const Checkbox = (props) => {
  const {
    labelClass,
    labelFor,
    onChange
  } = props;

  return (
    <>
    <input id={`checkbox_${labelFor}`}
           className={classes.input}
           type="checkbox"
           onChange={onChange}/>
    <label className={`${classes.label} ${labelClass}`}
           htmlFor={`checkbox_${labelFor}`}/>
    </>
  );
};

Checkbox.defaultProps = {
  labelClass: ''
};

Checkbox.propTypes = {
  labelClass: PropTypes.string,
  labelFor: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Checkbox;
