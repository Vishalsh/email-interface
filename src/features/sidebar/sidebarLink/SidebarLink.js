import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import classes from './SidebarLink.module.scss';

const SidebarLink = (props) => {
  const { link, isSidebarOpen } = props;

  return (
    <li className={classes.list}>
      <NavLink className={classes.link}
               to={link.routeTo}
               activeClassName={classes.active}>
        <div className={classes.linkIcon}>
          <i className={`icon icon-${link.icon} ${classes.icon}`}/>
        </div>
        <div className={classes.linkContent}>
          <span>{link.name}</span>
        </div>
      </NavLink>

      {
        isSidebarOpen && link.links &&
        <nav className={classes.nestedNav}>
          {
            link.links.map((nestedLink, index) => (
              <li key={`${nestedLink.name}_${index}`}>
                <NavLink className={`${classes.link} ${classes.nestedLink}`}
                         to={nestedLink.routeTo}
                         activeClassName={classes.nestedLinkActive}>
                  {nestedLink.name}
                </NavLink>
              </li>
            ))
          }
        </nav>
      }
    </li>
  )
};

SidebarLink.defaultProps = {
  isSidebarOpen: false
};

SidebarLink.propTypes = {
  link: PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    routeTo: PropTypes.string.isRequired,
    links: PropTypes.array
  }).isRequired,
  isSidebarOpen: PropTypes.bool
};

export default SidebarLink;
