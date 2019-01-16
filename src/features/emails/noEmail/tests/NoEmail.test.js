import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import NoEmail from '../NoEmail';

describe('NoEmail', () => {
  it('should render the component', () => {
    expect(toJson(shallow(<NoEmail />))).toMatchSnapshot();
  })
});