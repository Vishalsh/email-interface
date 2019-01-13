import React from 'react';
import PropTypes from 'prop-types';

import classes from './InputWithLabel.module.scss';

const InputWithLabel = (props) => {
  const {
    label,
    value,
    inputType,
    onChange
  } = props;

  return (
    <div className={classes.inputWithLabel}>
      <label className={classes.label}
             htmlFor={label}>
        {label.toUpperCase()}
      </label>
      <input id={label}
             className={classes.input}
             value={value}
             name={label}
             type={inputType}
             onChange={onChange}/>
    </div>
  );
};

InputWithLabel.defaultProps = {
  inputType: 'text'
};

InputWithLabel.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  inputType: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default InputWithLabel;
