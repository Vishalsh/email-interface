import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { InboxUnreadEmailsCount } from '../InboxUnreadEmailsCount';

describe('InboxUnreadEmailsCount', () => {
  it('should render the component when showReadMailsCount is false', () => {
    const props = {
      readEmailsCount: 10,
      unreadEmailsCount: 7,
      showReadMailsCount: false
    };
    const component = shallow(<InboxUnreadEmailsCount {...props} />);

    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render the component when showReadMailsCount is true', () => {
    const props = {
      readEmailsCount: 10,
      unreadEmailsCount: 7,
      showReadMailsCount: true
    };
    const component = shallow(<InboxUnreadEmailsCount {...props} />);

    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render the component when unreadEmailsCount is 0', () => {
    const props = {
      readEmailsCount: 10,
      unreadEmailsCount: 0,
      showReadMailsCount: false
    };
    const component = shallow(<InboxUnreadEmailsCount {...props} />);

    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render the component when showBadge is false', () => {
    const props = {
      readEmailsCount: 10,
      unreadEmailsCount: 5,
      showBadge: false
    };
    const component = shallow(<InboxUnreadEmailsCount {...props} />);

    expect(toJson(component)).toMatchSnapshot();
  });
});