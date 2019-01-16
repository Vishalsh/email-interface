import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import EmailListItem from '../EmailListItem';

describe('EmailListItem', () => {
  const props = {
    email: {
      id: 1,
      subject: 'subject 1',
      sender: {
        name: 'MS Dhoni',
        email: 'msDhoni@bcci.com'
      },
      attachments: ['attachment 1', 'attachment 1'],
      dateTime: '15 Jan',
      category: 'documents'
    },
    mailbox: 'inbox'
  };
  const component = shallow(<EmailListItem {...props} />);

  it('should render the component', () => {
    expect(toJson(component)).toMatchSnapshot();
  })
});