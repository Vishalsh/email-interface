import React from 'react';
import PropTypes from 'prop-types';

import InboxUnreadEmailsCount from 'features/mailbox/inboxUnreadEmailsCount/InboxUnreadEmailsCount';
import Badge from 'components/badge/Badge';
import classes from './Header.module.scss';

const Header = ({ onClickHamburger }) => {
  const logout = () => {
    window.location.href = '/'
  };

  return (
    <header className={classes.header}>
      <div className="row">
        <div className="col-xs-6">
          <div className="row middle-xs">
            <i className={`icon icon-hamburger ${classes.hamburgerIcon}`} onClick={onClickHamburger}/>
            <input className={classes.search} placeholder="Search for something..."/>
          </div>
        </div>

        <div className="col-xs-6">
          <div className={`row end-xs middle-xs ${classes.rightIconsRow}`}>
            <div className={classes.rightIcon}>
              <i className="icon icon-email-solid"/>
              <div className={classes.badge}>
                <InboxUnreadEmailsCount />
              </div>
            </div>
            <div className={classes.rightIcon}>
              <i className="icon icon-bell"/>
              <div className={classes.badge}>
                <Badge className={classes.bellBadge} label={8}/>
              </div>
            </div>
            <div className={`row middle-xs ${classes.logout}`} onClick={logout}>
              <i className={`icon icon-logout ${classes.logoutIcon}`}/>
              <span>Log out</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  onClickHamburger: PropTypes.func.isRequired,
};

export default Header;
