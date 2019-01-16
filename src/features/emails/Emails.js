import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import EmailListItem from 'features/emails/emailListItem/EmailListItem';
import classes from './Emails.module.scss';

export const Emails = (props) => {
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

Emails.propTypes = {
  emails: PropTypes.array.isRequired
};

const mapStateToProps = (store, ownProps) => ({
  emails: Object.keys(store.emails).length > 0 ?
    ownProps.ids.map(id => store.emails[id]) : []
});

export default connect(mapStateToProps)(Emails);
