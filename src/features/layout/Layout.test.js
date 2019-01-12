import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Layout from './Layout';

describe('Layout', () => {
  it('should render the component', () => {
    expect(toJson(shallow(<Layout/>))).toMatchSnapshot();
  })
});