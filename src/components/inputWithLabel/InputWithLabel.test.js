import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import InputWithLabel from './InputWithLabel';

describe('InputWithLabel', () => {
  const props = {
    label: 'foo',
    value: 'bar',
    onChange: jest.fn()
  };
  const component = shallow(<InputWithLabel {...props} />);

  it('should render the component', () => {
    expect(toJson(component)).toMatchSnapshot();
  })
});