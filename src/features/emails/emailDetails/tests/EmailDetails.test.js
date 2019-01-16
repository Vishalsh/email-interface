import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { EmailDetails } from '../EmailDetails';

describe('Emails', () => {
  const props = {
    email: {
      id: 1,
      subject: 'subject 1',
      category: 'documents',
      sender: {
        name: 'MS Dhoni',
        email: 'msDhoni@bcci.com'
      },
      dateTime: '25 Dec',
      body: 'Lorem ipsum dolor sit amet.'
    }
  };
  const component = shallow(<EmailDetails {...props} />);

  it('should render the component', () => {
    expect(toJson(component)).toMatchSnapshot();
  })
});