import React from 'react';
import { Link } from 'react-router-dom';

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

const Sidebar = () => {
  return (
    <nav className={classes.nav}>
      {
        links.map((link, index) => (
          <li key={`${link.name}_${index}`}>
            <Link className={classes.link} to={link.routeTo}>
              <i className={`icon icon-${link.icon} ${classes.linkIcon}`} />
            </Link>
          </li>
        ))
      }
    </nav>
  )
};

export default Sidebar;
