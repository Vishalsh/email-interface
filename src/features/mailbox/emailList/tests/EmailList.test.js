import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import EmailList from '../EmailList';

describe('EmailList', () => {
  const props = {
    emails: [{
      id: 1,
      subject: 'subject 1',
      from: 'MS Dhoni'
    }, {
      id: 1,
      subject: 'subject 2',
      from: 'Virat Kohli'
    }]
  };
  const component = shallow(<EmailList {...props} />);

  it('should render the component', () => {
    expect(toJson(component)).toMatchSnapshot();
  })
});