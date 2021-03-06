import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import classes from './SidebarLink.module.scss';

const SidebarLink = (props) => {
  const { link, isSidebarOpen, rightNode } = props;

  const onClickLink = (link) => {
    const { disabled, onClick } = link;

    return (event) => {
      if (disabled) {
        event.preventDefault();
      } else {
        if (onClick) {
          event.preventDefault();
          onClick();
        }
      }
    }
  };

  return (
    <li className={classes.list}>
      <NavLink className={classes.link}
               to={link.routeTo}
               activeClassName={classes.active}
               onClick={onClickLink(link)}>
        <div className={classes.linkIcon}>
          <i className={`icon icon-${link.icon} ${classes.icon}`}/>
        </div>
        <div className={classes.linkContent}>
          <span>{link.name}</span>
        </div>
        <div className={classes.rightNode}>
          {rightNode}
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
                         activeClassName={classes.nestedLinkActive}
                         onClick={onClickLink(nestedLink)}>
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
  isSidebarOpen: false,
  rightNode: ''
};

SidebarLink.propTypes = {
  link: PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    routeTo: PropTypes.string.isRequired,
    links: PropTypes.array
  }).isRequired,
  isSidebarOpen: PropTypes.bool,
  rightNode: PropTypes.node
};

export default SidebarLink;
