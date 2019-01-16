import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Badge from 'components/badge/Badge';
import inboxEmailsCountSelector from './inboxEmailsCountSelector';
import classes from './InboxEmailCount.module.scss';

export const InboxEmailsCount = (props) => {
  const {
    readEmailsCount,
    unreadEmailsCount,
    showReadMailsCount
  } = props;

  const label = showReadMailsCount ? `${unreadEmailsCount}/${readEmailsCount}` : unreadEmailsCount;

  return (
    unreadEmailsCount!== 0 && <Badge className={classes.inboxEmailsCount} label={label} />
  );
};

InboxEmailsCount.defaultProps = {
  showReadMailsCount: false
};

InboxEmailsCount.propTypes = {
  readEmailsCount: PropTypes.number.isRequired,
  unreadEmailsCount: PropTypes.number.isRequired,
  showReadMailsCount: PropTypes.bool.isRequired
};

const mapStateToProps = (store) => ({
  readEmailsCount: store.mailbox.inbox ? store.mailbox.inbox.emails.length : 0,
  unreadEmailsCount: inboxEmailsCountSelector(store),
});

export default connect(mapStateToProps)(InboxEmailsCount);
