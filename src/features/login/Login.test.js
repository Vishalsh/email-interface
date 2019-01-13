import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import InputWithLabel from 'components/inputWithLabel/InputWithLabel';
import Button from 'components/button/Button';
import Login from './Login';

describe('Login', () => {
  const email = 'foo@bar.com';
  const password = '!abcd1234';

  const props = {
    login: jest.fn()
  };
  const component = shallow(<Login {...props}/>);

  it('should render the component', () => {
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should set the email and password in the state', () => {
    component.find(InputWithLabel).get(0).props.onChange({ target: { name: 'email', value: email } });
    component.find(InputWithLabel).get(1).props.onChange({ target: { name: 'password', value: password } });

    expect(component.state().email).toEqual(email);
    expect(component.find(InputWithLabel).get(0).props.value).toEqual(email);
    expect(component.state().password).toEqual(password);
    expect(component.find(InputWithLabel).get(1).props.value).toEqual(password);
  });

  it('should disable the submit button when form is invalid', () => {
    component.setState({
      email: '',
      password: ''
    });

    expect(component.find(Button).props().disabled).toBeTruthy();

    component.setState({
      email: 'abcd'
    });

    expect(component.find(Button).props().disabled).toBeTruthy();

    component.setState({
      email: 'abcd',
      password
    });

    expect(component.find(Button).props().disabled).toBeTruthy();

    component.setState({
      email,
      password: ''
    });

    expect(component.find(Button).props().disabled).toBeTruthy();

    component.setState({
      email,
      password
    });

    expect(component.find(Button).props().disabled).toBeFalsy();
  });

  it('should login the user with entered email and password', () => {
    component.setState({
      email,
      password
    });
    const preventDefault = jest.fn();

    component.find(Button).props().onClick({ preventDefault });

    expect(preventDefault).toHaveBeenCalled();
    expect(props.login).toHaveBeenCalledWith(email, password);
  });
});