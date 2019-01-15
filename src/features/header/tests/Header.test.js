import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Header from '../Header';

describe('Header', () => {
  const props = {
    onClickHamburger: jest.fn()
  };
  const component = shallow(<Header {...props}/>);

  it('should render the component', () => {
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should trigger onClickHamburger', () => {
    const hamburger = component.find('.icon-hamburger').get(0);

    hamburger.props.onClick();

    expect(props.onClickHamburger).toHaveBeenCalled();
  });
});