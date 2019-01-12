import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Header from './Header';

describe('Header', () => {
  it('should render the component', () => {
    expect(toJson(shallow(<Header/>))).toMatchSnapshot();
  })
});