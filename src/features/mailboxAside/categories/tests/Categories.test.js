import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Categories from '../Categories';

describe('Categories', () => {
  const component = shallow(<Categories />);

  it('should render the component', () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});