import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import UserAvatar from './UserAvatar';

describe('UserAvatar', () => {
  const props = {
    name: 'MS Dhoni',
    role: 'Wicket Keeper',
    avatar: 'http://s.ndtvimg.com/images/entities/120/ms-dhoni-700.png'
  };
  const component = shallow(<UserAvatar {...props} />);

  it('should render the component', () => {
    expect(toJson(component)).toMatchSnapshot();
  })
});