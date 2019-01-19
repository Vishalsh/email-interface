import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import loadingStates from 'constants/loadingStates';
import CreateEmail from 'features/emails/createEmail/CreateEmail';
import MailboxHeader from 'features/mailbox/mailboxHeader/MailboxHeader';
import { Mailbox } from '../Mailbox';

describe('Mailbox', () => {
  const getEmailsMock = jest.fn();
  const deleteEmailsMock = jest.fn();
  const props = {
    match: {
      params: {
        mailbox: 'inbox'
      },
      url: '/mailbox/inbox'
    },
    mailbox: {
      emails: [1, 2],
      loadingState: loadingStates.LOADED
    },
    getEmails: getEmailsMock,
    deleteEmails: deleteEmailsMock
  };
  const component = shallow(<Mailbox {...props} />);

  it('should render the component', () => {
    expect(toJson(component)).toMatchSnapshot();
    expect(getEmailsMock).not.toHaveBeenCalled();
  });

  it('should render the CreateEmail popup when isCreateEmailPopupOpen is true', () => {
    expect(component.find(CreateEmail)).toHaveLength(0);

    const propsWithCreateEmailPopupVisible = {
      ...props,
      isCreateEmailPopupOpen: true
    };
    const componentWithCreateEmailPopupVisible = shallow(<Mailbox {...propsWithCreateEmailPopupVisible} />);

    expect(componentWithCreateEmailPopupVisible.find(CreateEmail)).toHaveLength(1);
  });

  it('should trigger getEmails for the mailbox when not present', () => {
    const propsWithoutEmails = {
      ...props,
      mailbox: undefined
    };
    shallow(<Mailbox {...propsWithoutEmails} />);

    expect(getEmailsMock).toHaveBeenCalled();
  });

  it('should trigger deleteEmails only when hasSelectedEmails are true', () => {
    component.find(MailboxHeader).props().onClickDeleteEmails();

    expect(deleteEmailsMock).not.toHaveBeenCalled();

    const propsWithSelectedEmails = {
      ...props,
      hasSelectedEmails: true
    };
    const componentWithSelectedEmails = shallow(<Mailbox {...propsWithSelectedEmails} />);

    componentWithSelectedEmails.find(MailboxHeader).props().onClickDeleteEmails();

    expect(deleteEmailsMock).toHaveBeenCalledWith('inbox');
  });

  it('should trigger getEmails on change of mailbox when already not present', () => {
    getEmailsMock.mockReset();

    component.setProps({
      match: {
        params: {
          mailbox: 'inbox'
        }
      },
      mailbox: {
        emails: [1, 2],
        loadingState: loadingStates.LOADED
      },
    });

    expect(getEmailsMock).not.toHaveBeenCalled();

    component.setProps({
      match: {
        params: {
          mailbox: 'sent'
        }
      },
      mailbox: {
        emails: [1, 2],
        loadingState: loadingStates.LOADED
      },
    });

    expect(getEmailsMock).not.toHaveBeenCalled();

    component.setProps({
      match: {
        params: {
          mailbox: 'trash'
        }
      },
      mailbox: {
        emails: [],
        loadingState: loadingStates.AT_REST
      }
    });

    expect(getEmailsMock).toHaveBeenCalled();
  });
});