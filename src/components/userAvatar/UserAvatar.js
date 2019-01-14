import React from 'react';
import PropTypes from 'prop-types';

import classes from './UserAvatar.module.scss';

const UserAvatar = (props) => {
  const {
    name,
    role,
    avatar
  } = props;

  return (
    <div className={classes.avatar}>
      <img src={avatar} alt={name} className={classes.avatarImage}/>
      <p className={classes.name}>{name}</p>
      <p className={classes.role}>
        <span>{role}</span>
        <i className="icon icon-arrow-down" />
      </p>
    </div>
  );
};

UserAvatar.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default UserAvatar;
