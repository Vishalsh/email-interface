import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import SidebarLink from './SidebarLink';

describe('SidebarLink', () => {
  const link = {
    name: 'Mailbox',
    icon: 'mailbox',
    routeTo: 'mailbox',
    links: [{
      name: 'Inbox',
      routeTo: 'inbox'
    }, {
      name: 'Email view',
      routeTo: 'email-view'
    }, {
      name: 'Compose Email',
      routeTo: 'compose-email'
    }, {
      name: 'Email templates',
      routeTo: 'email-templates'
    }]
  };

  it('should render the component when sidebar is closed', () => {
    const props = {
      link
    };
    const component = shallow(<SidebarLink {...props}/>);

    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render the component when sidebar is open', () => {
    const props = {
      link,
      isSidebarOpen: true
    };
    const component = shallow(<SidebarLink {...props}/>);

    expect(toJson(component)).toMatchSnapshot();
  });
});