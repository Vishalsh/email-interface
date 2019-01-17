import React from 'react';
import PropTypes from 'prop-types';

import classes from './Button.module.scss';

const Button = (props) => {
  const {
    children,
    type,
    onClick,
    disabled,
    className,
    ...others
  } = props;

  return (
    <button className={`${classes.button} ${classes[type]} ${className}`} onClick={ onClick } disabled={disabled} { ...others }>
      { children }
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'default',
  disabled: false,
  className: ''
};

export default Button;
