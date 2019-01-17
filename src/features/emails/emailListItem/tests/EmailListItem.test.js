import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Link } from 'react-router-dom';

import { status } from 'constants/emails';
import Checkbox from 'components/checkbox/Checkbox';
import EmailListItem from '../EmailListItem';

describe('EmailListItem', () => {
  const props = {
    email: {
      id: 1,
      subject: 'subject 1',
      sender: {
        name: 'MS Dhoni',
        email: 'msDhoni@bcci.com'
      },
      attachments: ['attachment 1', 'attachment 1'],
      dateTime: '15 Jan',
      category: 'documents',
      status: status.READ
    },
    mailbox: 'inbox',
    onClickEmail: jest.fn(),
    onChangeCheckbox: jest.fn()
  };
  const component = shallow(<EmailListItem {...props} />);

  it('should render the component', () => {
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should not trigger onClickEmail if the email status is not UNREAD', () => {
    component.find(Link).props().onClick();

    expect(props.onClickEmail).not.toHaveBeenCalled();
  });

  it('should not trigger onClickEmail if the email status is not UNREAD', () => {
    const propsWithUnreadEmail = {
      ...props,
      email: {
        ...props.email,
        status: status.UNREAD
      }
    };
    const componentWithUnreadEmail = shallow(<EmailListItem {...propsWithUnreadEmail} />);

    componentWithUnreadEmail.find(Link).props().onClick();

    expect(props.onClickEmail).toHaveBeenCalledWith(propsWithUnreadEmail.email);
  });

  it('should trigger onChangeCheckbox', () => {
    component.find(Checkbox).props().onChange({ target: { checked: true } });

    expect(props.onChangeCheckbox).toHaveBeenCalledWith({ id: props.email.id, checked: true });
  });
});