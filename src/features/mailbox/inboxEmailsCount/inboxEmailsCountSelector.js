import { createSelector } from 'reselect'

import { status } from 'constants/emails';
import { hasEmails } from 'utilities/emails';

const inboxSelector = store => store.mailbox.inbox;
const emailsSelector = store => store.emails;

const inboxEmailsCountSelector = createSelector(
  inboxSelector,
  emailsSelector,
  (inbox, emails) => {
    if (inbox && hasEmails(emails)) {
      return inbox.emails.reduce((count, emailId) => {
        if (emails[emailId].status === status.UNREAD) {
          count = count + 1;
        }
        return count;
      }, 0);
    }
    return 0;
  }
);

export default inboxEmailsCountSelector;