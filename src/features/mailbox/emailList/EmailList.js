import React from 'react';
import PropTypes from 'prop-types';

import EmailListItem from 'features/mailbox/emailListItem/EmailListItem';
import classes from './EmailList.module.scss';

const EmailList = (props) => {
  const {
    emails
  } = props;

  return (
    <ul className={classes.emailList}>
      {
        emails.map((email) => (
          <EmailListItem key={email.id} email={email}/>
        ))
      }
    </ul>
  );
};

EmailList.propTypes = {
  emails: PropTypes.array.isRequired
};

export default EmailList;
