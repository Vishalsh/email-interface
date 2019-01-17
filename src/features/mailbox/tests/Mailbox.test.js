import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import loadingStates from 'constants/loadingStates';

import InboxUnreadEmailsCount from 'features/mailbox/inboxUnreadEmailsCount/InboxUnreadEmailsCount';
import { Mailbox } from '../Mailbox';

describe('Mailbox', () => {
  const getEmailsMock = jest.fn();
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
    getEmails: getEmailsMock
  };
  const component = shallow(<Mailbox {...props} />);

  it('should render the component', () => {
    expect(toJson(component)).toMatchSnapshot();
    expect(getEmailsMock).not.toHaveBeenCalled();
  });

  it('should trigger getEmails for the mailbox when not present', () => {
    const propsWithoutEmails = {
      ...props,
      mailbox: undefined
    };
    shallow(<Mailbox {...propsWithoutEmails} />);

    expect(getEmailsMock).toHaveBeenCalled();
  });

  it('should unread emails count only for Inbox', () => {
    expect(component.find(InboxUnreadEmailsCount)).toHaveLength(1);

    const propWithSentMailbox = {
      ...props,
      match: {
        params: {
          mailbox: 'sent'
        },
        url: '/mailbox/sent'
      }
    };
    const componentWithSentMailbox = shallow(<Mailbox {...propWithSentMailbox} />);

    expect(componentWithSentMailbox.find(InboxUnreadEmailsCount)).toHaveLength(0);
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