import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import routes from 'constants/routes';

import classes from './EmailListItem.module.scss';

const emailStatus = {
  READ: 'READ',
  UNREAD: 'UNREAD'
};

const EmailListItem = (props) => {
  const {
    mailbox,
    email
  } = props;

  return (
    <li className={classes.listItem}>
      <Link className={`row middle-xs ${classes.emailRow} ${email.status === emailStatus.UNREAD ? classes.unread : ''}`}
            to={`${routes.MAILBOX}/${mailbox}/${email.id}`}>
        <span className="col-sm-2">{email.sender.name}</span>
        <p className="col-sm-2 end-sm">
          <span className={`${classes.category} ${email.category}`}>
            {email.category}
          </span>
        </p>
        <p className="col-sm-5">{email.subject}</p>
        <span className="col-sm-1 center-sm">
          {
            email.attachments && email.attachments.length > 0 &&
            <i className={`icon icon-attachment ${classes.icon}`}/>
          }
        </span>
        <span className="col-sm-2 end-sm">{email.dateTime}</span>
      </Link>
    </li>
  );
};

EmailListItem.propTypes = {
  email: PropTypes.object.isRequired,
  mailbox: PropTypes.string.isRequired
};

export default EmailListItem;
