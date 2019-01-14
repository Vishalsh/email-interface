import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import UserAvatar from 'components/userAvatar/UserAvatar';
import SidebarLink from './sidebarLink/SidebarLink';
import routes from 'constants/routes';
import classes from './Sidebar.module.scss';

const links = [{
  name: 'logo',
  icon: 'logo',
  routeTo: 'none'
}, {
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
  routeTo: routes.MAILBOX,
  links: [{
    name: 'Inbox',
    routeTo: routes.MAILBOX + routes.INBOX
  }, {
    name: 'Email view',
    routeTo: routes.MAILBOX + routes.EMAIL_VIEW
  }, {
    name: 'Compose Email',
    routeTo: routes.MAILBOX + routes.COMPOSE_EMAIL
  }, {
    name: 'Email templates',
    routeTo: routes.MAILBOX + routes.EMAIL_TEMPLATES
  }]
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

export const Sidebar = (props) => {
  const { isOpen, user } = props;
  const { name, role, avatar } = user;

  return (
    <div className={`${classes.sidebar} ${isOpen ? classes.sidebarOpen : ''}`}>
      <nav className={classes.nav}>
        {
          isOpen ?
            <UserAvatar name={name} role={role} avatar={avatar}/>
            :
            <SidebarLink link={links[0]}/>
        }
        <SidebarLink link={links[1]}/>
        <SidebarLink link={links[2]}/>
        <SidebarLink link={links[3]}/>
        <SidebarLink link={links[4]} isSidebarOpen={isOpen}/>
        <SidebarLink link={links[5]}/>
        <SidebarLink link={links[6]}/>
        <SidebarLink link={links[7]}/>
      </nav>
    </div>
  )
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired
};

const mapStateToProps = (store) => ({
  user: store.user.data
});

export default connect(mapStateToProps)(Sidebar);
