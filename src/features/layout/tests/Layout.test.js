import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Layout from '../Layout';
import Header from 'features/header/Header';
import Sidebar from 'features/sidebar/Sidebar';

describe('Layout', () => {
  const props = {
    children: <div className="routes"/>
  };
  const component = shallow(<Layout {...props}/>);

  it('should render the component', () => {
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should toggle the sidebar', () => {
    component.find(Header).props().onClickHamburger();

    expect(component.state().isSidebarOpen).toBeTruthy();
    expect(component.find(Sidebar).props().isOpen).toBeTruthy();
  });
});