import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Login from '../Login';

describe('Login', () => {
  it('should render the component', () => {
    expect(toJson(shallow(<Login/>))).toMatchSnapshot();
  })
});