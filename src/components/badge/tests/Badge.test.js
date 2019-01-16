import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Badge from '../Badge';

describe('Badge', () => {
  const props = {
    className: 'someClass',
    label: '10',
  };
  const component = shallow(<Badge {...props} />);

  it('should render the component', () => {
    expect(toJson(component)).toMatchSnapshot();
  })
});