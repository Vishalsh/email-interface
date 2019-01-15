import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { NavLink } from 'react-router-dom';

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
      routeTo: 'email-view',
      disabled: true
    }, {
      name: 'Compose Email',
      routeTo: 'compose-email'
    }, {
      name: 'Email templates',
      routeTo: 'email-templates',
      disabled: true
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

  it('should not prevent navigation for a disabled nested link', () => {
    const props = {
      link,
      isSidebarOpen: true
    };
    const component = shallow(<SidebarLink {...props}/>);
    const preventDefault = jest.fn();

    component.find(NavLink).get(1).props.onClick({ preventDefault });

    expect(preventDefault).not.toHaveBeenCalled();

    component.find(NavLink).get(2).props.onClick({ preventDefault });

    expect(preventDefault).toHaveBeenCalled();
  });
});