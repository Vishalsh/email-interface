import React from 'react';
import PropTypes from 'prop-types';

import Button from 'components/button/Button';
import SearchInput from 'components/searchInput/SearchInput';
import InboxUnreadEmailsCount from 'features/mailbox/inboxUnreadEmailsCount/InboxUnreadEmailsCount';
import { INBOX } from 'constants/mailbox';
import classes from './MailboxHeader.module.scss';

const MailboxHeader = (props) => {
  const {
    mailbox,
    onClickDeleteEmails
  } = props;

  return (
    <header className={classes.header}>
      <div className="row">
        <h1 className={`${classes.name} col-sm-7 col-md-8`}>
          {mailbox}
          {
            mailbox === INBOX &&
            <><InboxUnreadEmailsCount showBadge={false}/></>
          }
        </h1>
        <div className="col-sm-5 col-md-4 end-sm">
          <SearchInput />
        </div>
      </div>
      <div className={`${classes.mailboxActions} row`}>
        <div className="col-sm-8 flex">
          <Button type="default" className={classes.actionButton}>
            <i className={`icon icon-refresh ${classes.iconRefresh}`}/>
            <span>Refresh</span>
          </Button>
          <Button type="default" className={classes.actionButton}>
            <i className="icon icon-eye"/>
          </Button>
          <Button type="default" className={classes.actionButton}>
            <i className="icon icon-bang"/>
          </Button>
          <Button type="default" onClick={onClickDeleteEmails} className={classes.actionButton}>
            <i className="icon icon-delete"/>
          </Button>
        </div>
        <div className="col-sm-4 end-xs flex">
          <Button type="default" className={classes.actionButton}>
            <i className="icon icon-left"/>
          </Button>
          <Button type="default" className={`${classes.actionButton} ${classes.paginationRightButton}`}>
            <i className="icon icon-right"/>
          </Button>
        </div>
      </div>
    </header>
  );
};

MailboxHeader.propTypes = {
  mailbox: PropTypes.string.isRequired,
  onClickDeleteEmails: PropTypes.func.isRequired
};

export default MailboxHeader;
