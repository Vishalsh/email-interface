import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Header from './Header';
import Button from 'components/button/Button';

describe('Header', () => {
  const props = {
    onClickHamburger: jest.fn()
  };
  const component = shallow(<Header {...props}/>);

  it('should render the component', () => {
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should trigger onClickHamburger', () => {
    const hamburger = component.find(Button).get(0);

    hamburger.props.onClick();

    expect(props.onClickHamburger).toHaveBeenCalled();
  });
});