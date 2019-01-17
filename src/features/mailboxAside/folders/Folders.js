import React from 'react';
import { Link } from 'react-router-dom';

import routes from 'constants/routes';
import InboxUnreadEmailsCount from 'features/mailbox/inboxUnreadEmailsCount/InboxUnreadEmailsCount';
import classes from './Folders.module.scss';

const Folders = () => {
  return (
    <ul className={classes.list}>
      <li className={classes.listItem}>
        <Link className={classes.link} to={routes.INBOX}>
          <i className={`icon icon-inbox ${classes.icon}`}/>
          <span>Inbox</span>
          <div className={classes.count}>
            <InboxUnreadEmailsCount />
          </div>
        </Link>
      </li>
      <li className={classes.listItem}>
        <Link className={classes.link} to={routes.SENT}>
          <i className={`icon icon-send-mail ${classes.icon}`}/>
          <span>Send Mail</span>
        </Link>
      </li>
      <li className={classes.listItem}>
        <Link className={classes.link} to={routes.IMPORTANT}>
          <i className={`icon icon-important ${classes.icon}`}/>
          <span>Important</span>
        </Link>
      </li>
      <li className={classes.listItem}>
        <Link className={classes.link} to={routes.DRAFTS}>
          <i className={`icon icon-drafts ${classes.icon}`}/>
          <span>Drafts</span>
        </Link>
      </li>
      <li className={classes.listItem}>
        <Link className={classes.link} to={routes.TRASH}>
          <i className={`icon icon-trash ${classes.icon}`}/>
          <span>Trash</span>
        </Link>
      </li>
    </ul>
  )
};

export default Folders;
