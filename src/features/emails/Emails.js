import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { hasEmails } from 'utilities/emails';
import EmailListItem from 'features/emails/emailListItem/EmailListItem';
import classes from './Emails.module.scss';

export const Emails = (props) => {
  const {
    mailbox,
    emails
  } = props;

  return (
    <ul className={classes.emailList}>
      {
        emails.map((email) => (
          <EmailListItem key={email.id} mailbox= {mailbox} email={email}/>
        ))
      }
    </ul>
  );
};

Emails.propTypes = {
  mailbox: PropTypes.string.isRequired,
  emails: PropTypes.array.isRequired
};

const mapStateToProps = (store, ownProps) => ({
  emails: hasEmails(store.emails) ? ownProps.ids.map(id => store.emails[id]) : []
});

export default connect(mapStateToProps)(Emails);
