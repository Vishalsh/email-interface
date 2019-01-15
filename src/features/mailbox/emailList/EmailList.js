import React from 'react';
import PropTypes from 'prop-types';

import EmailListItem from 'features/mailbox/emailListItem/EmailListItem';

const EmailList = (props) => {
  const {
    emails
  } = props;

  return (
    <ul>
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
