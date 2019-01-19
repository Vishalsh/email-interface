import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { EmailDetails } from '../EmailDetails';

describe('Emails', () => {
  it('should render the component', () => {
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

    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render the component when email has no subject', () => {
    const props = {
      email: {
        id: 1,
        subject: '',
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

    expect(toJson(component)).toMatchSnapshot();
  });
});