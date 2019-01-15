import React from 'react';
import PropTypes from 'prop-types';

import classes from './EmailListItem.module.scss';

const emailStatus = {
  READ: 'READ',
  UNREAD: 'UNREAD'
};

const EmailListItem = (props) => {
  const {
    email
  } = props;

  return (
    <li className={classes.listItem}>
      <article className={`row middle-xs ${classes.emailRow} ${email.status === emailStatus.UNREAD ? classes.unread : ''}`}>
        <span className="col-sm-2">{email.sender.name}</span>
        <p className="col-sm-2 end-sm">
          <span className={`${classes.category} ${classes[email.category]}`}>
            {email.category}
          </span>
        </p>
        <p className="col-sm-5">{email.body}</p>
        <span className="col-sm-1 center-sm">
          {
            email.attachments && email.attachments.length > 0 &&
            <i className={`icon icon-attachment ${classes.icon}`}/>
          }
        </span>
        <span className="col-sm-2 end-sm">{email.dateTime}</span>
      </article>
    </li>
  );
};

EmailListItem.propTypes = {
  email: PropTypes.object.isRequired
};

export default EmailListItem;
