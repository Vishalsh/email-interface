import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import InboxUnreadEmailsCount from 'features/mailbox/inboxUnreadEmailsCount/InboxUnreadEmailsCount';
import MailboxHeader from '../MailboxHeader';

describe('MailboxHeader', () => {
  const props = {
    mailbox: 'inbox',
    onClickDeleteEmails: jest.fn(),
  };
  const component = shallow(<MailboxHeader {...props} />);

  it('should render the component', () => {
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should unread emails count only for Inbox', () => {
    expect(component.find(InboxUnreadEmailsCount)).toHaveLength(1);

    const propWithSentMailbox = {
      ...props,
      mailbox: 'sent'
    };
    const componentWithSentMailbox = shallow(<MailboxHeader {...propWithSentMailbox} />);

    expect(componentWithSentMailbox.find(InboxUnreadEmailsCount)).toHaveLength(0);
  });
});