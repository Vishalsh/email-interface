import React from 'react';
import { Link } from 'react-router-dom';

import routes from 'constants/routes';
import classes from './Folders.module.scss';

const Folders = () => {
  return (
    <ul className={classes.list}>
      <li className={classes.listItem}>
        <Link className={classes.link} to={routes.MAILBOX}>
          <i className={`icon icon-inbox ${classes.icon}`}/>
          <span>Inbox</span>
        </Link>
      </li>
      <li className={classes.listItem}>
        <Link className={classes.link} to={routes.MAILBOX}>
          <i className={`icon icon-send-mail ${classes.icon}`}/>
          <span>Send Mail</span>
        </Link>
      </li>
      <li className={classes.listItem}>
        <Link className={classes.link} to={routes.MAILBOX}>
          <i className={`icon icon-important ${classes.icon}`}/>
          <span>Important</span>
        </Link>
      </li>
      <li className={classes.listItem}>
        <Link className={classes.link} to={routes.MAILBOX}>
          <i className={`icon icon-drafts ${classes.icon}`}/>
          <span>Drafts</span>
        </Link>
      </li>
      <li className={classes.listItem}>
        <Link className={classes.link} to={routes.MAILBOX}>
          <i className={`icon icon-trash ${classes.icon}`}/>
          <span>Trash</span>
        </Link>
      </li>
    </ul>
  )
};

export default Folders;
