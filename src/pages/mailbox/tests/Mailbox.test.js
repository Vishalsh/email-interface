import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Mailbox from '../Mailbox';

describe('Mailbox', () => {
  const props = {
    match: {
      url: 'mailbox'
    }
  };

  it('should render the component', () => {
    expect(toJson(shallow(<Mailbox {...props}/>))).toMatchSnapshot();
  })
});