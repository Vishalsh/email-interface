import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import InputWithLabel from '../InputWithLabel';

describe('InputWithLabel', () => {
  it('should render the component', () => {
    const props = {
      label: 'foo',
      value: 'bar',
      onChange: jest.fn()
    };
    const component = shallow(<InputWithLabel {...props} />);

    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render the component with textarea', () => {
    const props = {
      label: 'foo',
      value: 'bar',
      textarea: true,
      onChange: jest.fn()
    };
    const component = shallow(<InputWithLabel {...props} />);

    expect(toJson(component)).toMatchSnapshot();
  })
});