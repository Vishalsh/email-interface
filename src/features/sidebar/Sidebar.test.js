import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Sidebar from './Sidebar';

describe('Sidebar', () => {
  it('should render the component', () => {
    expect(toJson(shallow(<Sidebar/>))).toMatchSnapshot();
  })
});