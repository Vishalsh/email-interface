import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Mailbox from './Mailbox';

describe('Mailbox', () => {
  const props = {
    match: {
      params: {
        mailbox: 'inbox'
      }
    }
  };
  const component = shallow(<Mailbox {...props} />);

  it('should render the component', () => {
    expect(toJson(component)).toMatchSnapshot();
  })
});