import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Folders from '../Folders';

describe('MailboxAside', () => {
  const component = shallow(<Folders />);

  it('should render the component', () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});