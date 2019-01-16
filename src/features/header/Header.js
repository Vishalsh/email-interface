import React from 'react';
import PropTypes from 'prop-types';

import InboxEmailsCount from 'features/mailbox/inboxEmailsCount/InboxEmailsCount';
import classes from './Header.module.scss';

const Header = ({ onClickHamburger }) => {
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
          <div className="row end-xs middle-xs">
            <i className="icon icon-email-solid"/>
            <InboxEmailsCount />
            <div onClick={() => alert('logout')}>
              <i className="icon icon-logout"/>
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
