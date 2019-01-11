import React from 'react';
import PropTypes from 'prop-types';

import classes from './Button.module.scss';

const Button = (props) => {
  const {
    children,
    type,
    onClick,
    disabled,
    ...others
  } = props;

  return (
    <button className={`${classes.button} ${classes[type]}`} onClick={ onClick } disabled={disabled} { ...others }>
      { children }
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  type: 'default',
  disabled: false
};

export default Button;
