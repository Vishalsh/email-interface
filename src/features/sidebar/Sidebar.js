import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import InboxUnreadEmailsCount from 'features/mailbox/inboxUnreadEmailsCount/InboxUnreadEmailsCount';
import emailActions from 'features/emails/emails.actions';
import Badge from 'components/badge/Badge';
import UserAvatar from 'components/userAvatar/UserAvatar';
import SidebarLink from './sidebarLink/SidebarLink';
import routes from 'constants/routes';
import classes from './Sidebar.module.scss';

export const Sidebar = (props) => {
  const { isOpen, user, toggleCreateEmailPopup } = props;

  const links = [{
    name: 'logo',
    icon: 'logo',
    routeTo: 'none',
    disabled: true
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
      routeTo: routes.INBOX
    }, {
      name: 'Email view',
      routeTo: routes.EMAIL_VIEW,
      disabled: true
    }, {
      name: 'Compose Email',
      routeTo: 'none',
      onClick: toggleCreateEmailPopup
    }, {
      name: 'Email templates',
      routeTo: routes.EMAIL_TEMPLATES,
      disabled: true
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

  const { name, role, avatar } = user;

  return (
    <div className={`${classes.sidebar} ${isOpen ? classes.sidebarOpen : ''}`}>
      <nav className={classes.nav}>
        {
          isOpen ?
            <div className={`${classes.avatar} ${isOpen ? classes.avatarOpen : ''}`}>
              <UserAvatar name={name} role={role} avatar={avatar}/>
            </div>
            :
            <SidebarLink link={links[0]}/>
        }

        <SidebarLink link={links[1]}
                     rightNode={<i className="icon icon-arrow-left"/>}/>
        <SidebarLink link={links[2]}/>
        <SidebarLink link={links[3]}
                     rightNode={<i className="icon icon-arrow-left"/>}/>
        <SidebarLink link={links[4]}
                     isSidebarOpen={isOpen}
                     rightNode={<InboxUnreadEmailsCount showReadMailsCount/>}/>
        <SidebarLink link={links[5]}/>
        <SidebarLink link={links[6]}
                     rightNode={<i className="icon icon-arrow-left"/>}/>
        <SidebarLink link={links[7]}
                     rightNode={<Badge className={classes.appViewBadge} label={'special'.toUpperCase()}/>}/>
      </nav>
    </div>
  )
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired
};

const mapStateToProps = (store) => ({
  user: store.user.data
});

const mapDispatchToProps = dispatch => bindActionCreators({
  toggleCreateEmailPopup: emailActions.toggleCreateEmailPopup
}, dispatch);

// the { pure: false } parameter is used to fix the active link with react-redux
// https://github.com/ReactTraining/react-router/issues/3536
export default connect(mapStateToProps, mapDispatchToProps, null, { pure: false })(Sidebar);
