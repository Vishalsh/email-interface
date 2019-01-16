import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import routes from 'constants/routes';

import { status } from 'constants/emails';
import Badge from 'components/badge/Badge';
import classes from './EmailListItem.module.scss';

const EmailListItem = (props) => {
  const {
    mailbox,
    email,
    onClickEmail
  } = props;

  const onClickLink = () => {
    if (email.status === status.UNREAD) {
      onClickEmail(email);
    }
  };

  return (
    <li className={classes.listItem}>
      <Link className={`row middle-xs ${classes.emailRow} ${email.status === status.UNREAD ? classes.unread : ''}`}
            to={`${routes.MAILBOX}/${mailbox}/${email.id}`}
            onClick={onClickLink}>
        <span className="col-sm-2">{email.sender.name}</span>
        <p className="col-sm-2 end-sm">
          <span className={classes.category}>
            <Badge className={email.category} label={email.category}/>
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
  mailbox: PropTypes.string.isRequired,
  onClickEmail: PropTypes.func.isRequired
};

export default EmailListItem;
