import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { InboxEmailsCount } from '../InboxEmailsCount';

describe('InboxEmailsCount', () => {
  it('should render the component when showReadMailsCount is false', () => {
    const props = {
      readEmailsCount: 10,
      unreadEmailsCount: 7,
      showReadMailsCount: false
    };
    const component = shallow(<InboxEmailsCount {...props} />);

    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render the component when showReadMailsCount is true', () => {
    const props = {
      readEmailsCount: 10,
      unreadEmailsCount: 7,
      showReadMailsCount: true
    };
    const component = shallow(<InboxEmailsCount {...props} />);

    expect(toJson(component)).toMatchSnapshot();
  });
});