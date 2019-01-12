import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Labels from './Labels';

describe('Labels', () => {
  const component = shallow(<Labels />);

  it('should render the component', () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});