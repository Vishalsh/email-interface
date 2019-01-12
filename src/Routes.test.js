import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Routes from './Routes';

describe('Routes', () => {
  const component = shallow(<Routes />);

  it('should render the component', () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});