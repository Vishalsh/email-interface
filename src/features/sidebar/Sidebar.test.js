import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Sidebar from './Sidebar';

describe('Sidebar', () => {
  it('should render the component in closed state', () => {
    const props = {
      isOpen: false
    };
    const component = shallow(<Sidebar {...props}/>);

    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render the component in open state', () => {
    const props = {
      isOpen: true
    };
    const component = shallow(<Sidebar {...props}/>);

    expect(toJson(component)).toMatchSnapshot();
  });
});