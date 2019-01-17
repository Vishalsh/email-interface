import { status } from 'constants/emails';
import inboxEmailsCountSelector from '../inboxEmailsCountSelector';

describe('inboxEmailsCountSelector', () => {
  it('should return 0 when there is no input mailbox', () => {
    const store = {
      mailbox: {}
    };

    expect(inboxEmailsCountSelector(store)).toEqual(0);
  });

  it('should return 0 when there are no mails', () => {
    const store = {
      mailbox: {
        inbox: {
          emails: [1, 2, 3]
        }
      },
      emails: {}
    };

    expect(inboxEmailsCountSelector(store)).toEqual(0);
  });

  it('should return 0 when there are no unread mails in inbox', () => {
    const emails = {
      1: {
        id: 1,
        status: status.READ
      },
      2: {
        id: 1,
        status: status.READ
      },
      3: {
        id: 1,
        status: status.READ
      }
    };
    const store = {
      mailbox: {
        inbox: {
          emails: [1, 2, 3]
        }
      },
      emails
    };

    expect(inboxEmailsCountSelector(store)).toEqual(0);
  });

  it('should return the number of unread emails in inbox', () => {
    const emails = {
      1: {
        id: 1,
        status: status.READ
      },
      2: {
        id: 2,
        status: status.UNREAD
      },
      3: {
        id: 3,
        status: status.READ
      },
      4: {
        id: 4,
        status: status.UNREAD
      }
    };
    const store = {
      mailbox: {
        inbox: {
          emails: [1, 2, 3]
        }
      },
      emails
    };

    expect(inboxEmailsCountSelector(store)).toEqual(1);
  });
});