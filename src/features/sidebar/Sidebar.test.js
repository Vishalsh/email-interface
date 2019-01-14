import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  const user = {
    name: 'MS Dhoni',
    role: 'Wicket Keeper',
    avatar: 'http://s.ndtvimg.com/images/entities/120/ms-dhoni-700.png'
  };

  it('should render the component in closed state', () => {
    const props = {
      isOpen: false,
      user
    };
    const component = shallow(<Sidebar {...props}/>);

    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render the component in open state', () => {
    const props = {
      isOpen: true,
      user
    };
    const component = shallow(<Sidebar {...props}/>);

    expect(toJson(component)).toMatchSnapshot();
  });
});