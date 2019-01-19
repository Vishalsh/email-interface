import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import SettingsCog from '../SettingsCog';

describe('SettingsCog', () => {
  it('should render the component', () => {
    const component = shallow(<SettingsCog />);

    expect(toJson(component)).toMatchSnapshot();
  });
});