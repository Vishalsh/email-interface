import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import SearchInput from '../SearchInput';

describe('SearchInput', () => {
  it('should render the component', () => {
    const component = shallow(<SearchInput />);

    expect(toJson(component)).toMatchSnapshot();
  });
});