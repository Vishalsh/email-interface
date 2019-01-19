import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import routes from 'constants/routes';

import { status } from 'constants/emails';
import { SENT } from 'constants/mailbox';
import Badge from 'components/badge/Badge';
import Checkbox from 'components/checkbox/Checkbox';
import classes from './EmailListItem.module.scss';

const EmailListItem = (props) => {
  const {
    mailbox,
    email,
    onClickEmail,
    onChangeCheckbox
  } = props;

  const onClickLink = () => {
    if (email.status === status.UNREAD) {
      onClickEmail(email);
    }
  };

  const onChange = (event) => {
    onChangeCheckbox({ id: email.id, checked: event.target.checked })
  };

  return (
    <li className={`${classes.listItem} ${email.status === status.UNREAD ? classes.unread : ''}`}>
      <Checkbox labelFor={`${email.id}`}
                labelClass={classes.checkbox}
                onChange={onChange}/>

      <Link className={`row middle-xs ${classes.emailRow}`}
            to={`${routes.MAILBOX}/${mailbox}/${email.id}`}
            onClick={onClickLink}>
        {
          mailbox === SENT ?
            <span className="col-sm-2">{email.to}</span>
            :
            <span className="col-sm-2">{email.sender.name}</span>
        }
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
  onClickEmail: PropTypes.func.isRequired,
  onChangeCheckbox: PropTypes.func.isRequired
};

export default EmailListItem;
