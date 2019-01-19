import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import InputWithLabel from 'components/inputWithLabel/InputWithLabel';
import Button from 'components/button/Button';
import { CreateEmail } from '../CreateEmail';

describe('CreateEmail', () => {
  const email = {
    to: 'msDhoni@bcci.com',
    cc: 'vKohli@bcci.com',
    subject: 'Lets Play',
    body: 'Lets Play the game today'
  };

  const props = {
    sendEmail: jest.fn(),
    toggleCreateEmailPopup: jest.fn()
  };
  const component = shallow(<CreateEmail {...props}/>);

  it('should render the component', () => {
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should set the email details', () => {
    component.find(InputWithLabel).get(0).props.onChange({ target: { name: 'to', value: email.to } });
    component.find(InputWithLabel).get(1).props.onChange({ target: { name: 'cc', value: email.cc } });
    component.find(InputWithLabel).get(1).props.onChange({ target: { name: 'subject', value: email.subject } });
    component.find(InputWithLabel).get(1).props.onChange({ target: { name: 'body', value: email.body } });

    expect(component.state().email.to).toEqual(email.to);
    expect(component.find(InputWithLabel).get(0).props.value).toEqual(email.to);
    expect(component.state().email.cc).toEqual(email.cc);
    expect(component.find(InputWithLabel).get(1).props.value).toEqual(email.cc);
    expect(component.state().email.subject).toEqual(email.subject);
    expect(component.find(InputWithLabel).get(2).props.value).toEqual(email.subject);
    expect(component.state().email.body).toEqual(email.body);
    expect(component.find(InputWithLabel).get(3).props.value).toEqual(email.body);
  });

  it('should disable the submit button when form is invalid', () => {
    component.setState({
      email: {
        to: 'foo@bar@com',
        cc: '',
        subject: 'Lets Play',
        body: ''
      }
    });

    expect(component.find(Button).get(0).props.disabled).toBeTruthy();
  });

  it('should send the email', () => {
    component.setState({
      email
    });
    const preventDefault = jest.fn();

    component.find(Button).get(0).props.onClick({ preventDefault });

    expect(preventDefault).toHaveBeenCalled();
    expect(props.sendEmail).toHaveBeenCalledWith(email);
  });

  it('should close the popup', () => {
    component.find(Button).get(1).props.onClick();

    expect(props.toggleCreateEmailPopup).toHaveBeenCalled();

    props.toggleCreateEmailPopup.mockReset();

    component.find('.overlay').props().onClick();

    expect(props.toggleCreateEmailPopup).toHaveBeenCalled();
  });
});