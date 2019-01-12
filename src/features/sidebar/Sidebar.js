import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import routes from 'constants/routes';
import classes from './Sidebar.module.scss';

const links = [{
  name: 'Dashboard',
  icon: 'dashboard',
  routeTo: routes.DASHBOARD
}, {
  name: 'Layouts',
  icon: 'layouts',
  routeTo: routes.LAYOUTS
}, {
  name: 'Graphs',
  icon: 'graphs',
  routeTo: routes.GRAPHS
}, {
  name: 'Mailbox',
  icon: 'mailbox',
  routeTo: routes.MAILBOX
}, {
  name: 'Metrics',
  icon: 'metrics',
  routeTo: routes.METRICS
}, {
  name: 'Widgets',
  icon: 'widgets',
  routeTo: routes.WIDGETS
}, {
  name: 'Forms',
  icon: 'forms',
  routeTo: routes.FORMS
}, {
  name: 'App Views',
  icon: 'app-views',
  routeTo: routes.APP_VIEWS
}];

const Sidebar = (props) => {
  const { isOpen } = props;

  return (
    <div className={`${classes.sidebar} ${isOpen ? classes.sidebarOpen : ''}`}>
      <nav className={classes.nav}>
        {
          links.map((link, index) => (
            <li key={`${link.name}_${index}`}>
              <NavLink className={`${classes.link} ${isOpen ? classes.linkOpen : ''}`} to={link.routeTo}
                       activeClassName={classes.active}>
                <i className={`icon icon-${link.icon} ${classes.linkIcon}`}/>
                <span>{link.name}</span>
              </NavLink>
            </li>
          ))
        }
      </nav>
    </div>
  )
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired
};

export default Sidebar;
