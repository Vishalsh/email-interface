import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { Routes } from './Routes';

describe('Routes', () => {
  it('should render all the routes when user is logged in', () => {
    const props = {
      isLoggedIn: true
    };
    const component = shallow(<Routes { ...props }/>);

    expect(toJson(component)).toMatchSnapshot();
  });

  it('should not render the protected routes when user is not logged in', () => {
    const props = {
      isLoggedIn: false
    };
    const component = shallow(<Routes { ...props }/>);

    expect(toJson(component)).toMatchSnapshot();
  });
});