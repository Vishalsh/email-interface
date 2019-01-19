import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { MailboxAside } from '../MailboxAside';

describe('MailboxAside', () => {
  const props = {
    toggleCreateEmailPopup: jest.fn()
  };

  const component = shallow(<MailboxAside {...props}/>);

  it('should render the component', () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});