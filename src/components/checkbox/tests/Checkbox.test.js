import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Checkbox from '../Checkbox';

describe('Checkbox', () => {
  const props = {
    labelClass: 'labelClass',
    labelFor: '1',
    onChange: jest.fn(),
  };
  const component = shallow(<Checkbox {...props} />);

  it('should render the component', () => {
    expect(toJson(component)).toMatchSnapshot();
  })
});