import React from 'react';
import PropTypes from 'prop-types';

import Button from 'components/button/Button';
import classes from './Header.module.scss';

const Header = ({ onClickHamburger }) => {
  return (
    <header className={classes.header}>
      <div className="row">
        <div className="col-xs-6">
          <div className="row middle-xs">
            <Button type="primary" onClick={onClickHamburger}>
              <i className="icon icon-hamburger"/>
            </Button>
            <input className={classes.search} placeholder="Search for something..."/>
          </div>
        </div>

        <div className="col-xs-6">
          <div className="row end-xs middle-xs">
            <i className="icon icon-email-solid"/>
            <div>
              <Button onClick={() => alert('logout')}>
                <i className="icon icon-logout"/>
              </Button>
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
