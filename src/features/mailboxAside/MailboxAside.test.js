import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import MailboxAside from './MailboxAside';

describe('MailboxAside', () => {
  const component = shallow(<MailboxAside />);

  it('should render the component', () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});