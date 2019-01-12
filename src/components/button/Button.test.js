import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Button from './Button';

describe('Button', () => {
  const props = {
    type: 'primary',
    onClick: jest.fn(),
    children: <div className="Button-child"/>
  };
  const component = shallow(<Button {...props} />);

  it('should render the component', () => {
    expect(toJson(component)).toMatchSnapshot();
  })
});