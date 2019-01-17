import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { hasEmails } from 'utilities/emails';
import EmailListItem from 'features/emails/emailListItem/EmailListItem';
import emailsActions from './emails.actions';
import classes from './Emails.module.scss';

export const Emails = (props) => {
  const {
    mailbox,
    emails,
    updateEmailStatus,
    toggleEmailSelection
  } = props;

  return (
    <ul className={classes.emailList}>
      {
        emails.map((email) => (
          <EmailListItem key={email.id}
                         mailbox={mailbox}
                         email={email}
                         onClickEmail={updateEmailStatus}
                         onChangeCheckbox={toggleEmailSelection}/>
        ))
      }
    </ul>
  );
};

Emails.propTypes = {
  mailbox: PropTypes.string.isRequired,
  emails: PropTypes.array.isRequired,
  updateEmailStatus: PropTypes.func.isRequired
};

const mapStateToProps = (store, ownProps) => ({
  emails: hasEmails(store.emails) ? ownProps.ids.map(id => store.emails[id]) : []
});

const mapDispatchToProps = dispatch => bindActionCreators({
  updateEmailStatus: emailsActions.updateEmailStatus,
  toggleEmailSelection: emailsActions.toggleEmailSelection
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Emails);
