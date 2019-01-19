import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Badge from 'components/badge/Badge';
import inboxUnreadEmailsCountSelector from './inboxUnreadEmailsCountSelector';
import classes from './InboxUnreadEmailsCount.module.scss';

export const InboxUnreadEmailsCount = (props) => {
  const {
    readEmailsCount,
    unreadEmailsCount,
    showReadMailsCount,
    showBadge
  } = props;

  const label = showReadMailsCount ? `${unreadEmailsCount}/${readEmailsCount}` : unreadEmailsCount;

  return (
    unreadEmailsCount !== 0 &&
    <>
    {
      showBadge ?
        <Badge className={classes.inboxUnreadEmailsCount} label={label}/>
        :
        `(${label})`
    }
    </>
  );
};

InboxUnreadEmailsCount.defaultProps = {
  showReadMailsCount: false,
  showBadge: true
};

InboxUnreadEmailsCount.propTypes = {
  readEmailsCount: PropTypes.number.isRequired,
  unreadEmailsCount: PropTypes.number.isRequired,
  showReadMailsCount: PropTypes.bool,
  showBadge: PropTypes.bool
};

const mapStateToProps = (store) => ({
  readEmailsCount: store.mailbox.inbox ? store.mailbox.inbox.emails.length : 0,
  unreadEmailsCount: inboxUnreadEmailsCountSelector(store),
});

export default connect(mapStateToProps)(InboxUnreadEmailsCount);
