import React from 'react';
import PropTypes from 'prop-types';

import classes from './InputWithLabel.module.scss';

const InputWithLabel = (props) => {
  const {
    label,
    value,
    inputType,
    textarea,
    className,
    placeholder,
    onChange
  } = props;

  return (
    <div className={`${classes.inputWithLabel} ${className}`}>
      <label className={classes.label}
             htmlFor={label}>
        {label.toUpperCase()}
      </label>
      {
        textarea ?
          <textarea id={label}
                    className={`${classes.input} ${classes.textarea}`}
                    value={value}
                    name={label}
                    placeholder={placeholder}
                    onChange={onChange}>
          </textarea>
          :
          <input id={label}
                 className={classes.input}
                 value={value}
                 name={label}
                 type={inputType}
                 placeholder={placeholder}
                 onChange={onChange}/>
      }
    </div>
  );
};

InputWithLabel.defaultProps = {
  inputType: 'text',
  className: '',
  placeholder: '',
  textarea: false
};

InputWithLabel.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  inputType: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  textarea: PropTypes.bool,
  onChange: PropTypes.func.isRequired
};

export default InputWithLabel;
