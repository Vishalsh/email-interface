import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { Emails } from '../Emails';

describe('Emails', () => {
  const props = {
    emails: [{
      id: 1,
      subject: 'subject 1',
      from: 'MS Dhoni'
    }, {
      id: 1,
      subject: 'subject 2',
      from: 'Virat Kohli'
    }],
    mailbox: 'inbox'
  };
  const component = shallow(<Emails {...props} />);

  it('should render the component', () => {
    expect(toJson(component)).toMatchSnapshot();
  })
});